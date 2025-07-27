"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface User {
  id: string
  email: string
  username: string
  isAdmin: boolean
  emailVerified: boolean
  createdAt: string
  lastLogin?: string
  subscription?: {
    plan: string
    status: string
    expiresAt: string
  }
}

export interface ApiKey {
  id: string
  name: string
  key: string
  permissions: string[]
  createdAt: string
  lastUsed?: string
}

export interface WebhookConfig {
  id: string
  name: string
  url: string
  events: string[]
  isActive: boolean
  secret?: string
}

// Enhanced user database with more realistic data
interface UserRecord {
  id: string
  email: string
  username: string
  password: string // In a real app, this would be hashed
  isAdmin: boolean
  emailVerified: boolean
  createdAt: string
  lastLogin?: string
  verificationToken?: string
  resetToken?: string
  resetTokenExpiry?: string
  subscription?: {
    plan: string
    status: string
    expiresAt: string
  }
}

// Mock user database with enhanced data
const USERS_DB: UserRecord[] = [
  {
    id: "user_admin",
    email: "admin@calamari.lol",
    username: "admin",
    password: "admin123", // In a real app, this would be hashed
    isAdmin: true,
    emailVerified: true,
    createdAt: "2024-01-01T00:00:00Z",
    lastLogin: "2024-06-13T21:02:26Z",
    subscription: {
      plan: "premium",
      status: "active",
      expiresAt: "2025-01-01T00:00:00Z",
    },
  },
  {
    id: "user_test",
    email: "test@example.com",
    username: "testuser",
    password: "password123", // In a real app, this would be hashed
    isAdmin: false,
    emailVerified: true,
    createdAt: "2024-02-01T00:00:00Z",
    lastLogin: "2024-06-10T15:30:00Z",
    subscription: {
      plan: "basic",
      status: "active",
      expiresAt: "2024-12-01T00:00:00Z",
    },
  },
]

// Email service simulation
class EmailService {
  static async sendVerificationEmail(email: string, token: string): Promise<boolean> {
    console.log(`Sending verification email to ${email} with token: ${token}`)
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return true
  }

  static async sendPasswordResetEmail(email: string, token: string): Promise<boolean> {
    console.log(`Sending password reset email to ${email} with token: ${token}`)
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return true
  }

  static async sendWelcomeEmail(email: string, username: string): Promise<boolean> {
    console.log(`Sending welcome email to ${email} for user: ${username}`)
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    return true
  }
}

// Password utility functions
class PasswordUtils {
  static generateSecurePassword(length = 12): string {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
    let password = ""
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return password
  }

  static validatePassword(password: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = []

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long")
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter")
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter")
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number")
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }

  static hashPassword(password: string): string {
    // In a real app, use bcrypt or similar
    return btoa(password + "salt")
  }

  static verifyPassword(password: string, hash: string): boolean {
    // In a real app, use bcrypt.compare or similar
    return btoa(password + "salt") === hash
  }
}

interface AuthContextType {
  user: User | null
  loading: boolean
  isAuthenticated: boolean
  login: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; message: string; needsVerification?: boolean }>
  register: (email: string, username: string, password: string) => Promise<{ success: boolean; message: string }>
  logout: () => void
  resetPassword: (email: string) => Promise<{ success: boolean; message: string }>
  confirmPasswordReset: (token: string, newPassword: string) => Promise<{ success: boolean; message: string }>
  verifyEmail: (token: string) => Promise<{ success: boolean; message: string }>
  sendVerificationEmail: () => Promise<{ success: boolean; message: string }>
  resendVerificationEmail: (email: string) => Promise<{ success: boolean; message: string }>
  changePassword: (currentPassword: string, newPassword: string) => Promise<{ success: boolean; message: string }>
  updateProfile: (data: { username?: string; email?: string }) => Promise<{ success: boolean; message: string }>
  generateApiKey: (name: string, permissions: string[]) => Promise<ApiKey | null>
  revokeApiKey: (keyId: string) => Promise<boolean>
  getApiKeys: () => Promise<ApiKey[]>
  createWebhook: (config: Omit<WebhookConfig, "id">) => Promise<WebhookConfig | null>
  updateWebhook: (id: string, config: Partial<WebhookConfig>) => Promise<boolean>
  deleteWebhook: (id: string) => Promise<boolean>
  getWebhooks: () => Promise<WebhookConfig[]>
  generateUserKey: (userId: string, plan: string, duration: number) => Promise<string | null>
  sendWebhook: (event: string, data: any) => Promise<boolean>
  generatePassword: () => string
}

const AuthContext = createContext<AuthContextType | null>(null)

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedUser = localStorage.getItem("calamari_user")
        if (savedUser) {
          const userData = JSON.parse(savedUser)
          setUser(userData)
        }
      } catch (error) {
        console.error("Failed to load user:", error)
      }
    }
    setLoading(false)
  }, [])

  const isAuthenticated = !!user && user.emailVerified

  const login = async (email: string, password: string) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Find user in our mock database
      const userRecord = USERS_DB.find((u) => u.email.toLowerCase() === email.toLowerCase())

      // Check if user exists and password matches
      if (!userRecord) {
        return { success: false, message: "User not found" }
      }

      if (userRecord.password !== password) {
        return { success: false, message: "Invalid password" }
      }

      if (!userRecord.emailVerified) {
        return { success: false, message: "Please verify your email first", needsVerification: true }
      }

      // Update last login
      userRecord.lastLogin = new Date().toISOString()

      // Create user object without password
      const newUser: User = {
        id: userRecord.id,
        email: userRecord.email,
        username: userRecord.username,
        isAdmin: userRecord.isAdmin,
        emailVerified: userRecord.emailVerified,
        createdAt: userRecord.createdAt,
        lastLogin: userRecord.lastLogin,
        subscription: userRecord.subscription,
      }

      setUser(newUser)

      if (typeof window !== "undefined") {
        localStorage.setItem("calamari_user", JSON.stringify(newUser))
      }

      return { success: true, message: "Login successful!" }
    } catch (error) {
      return { success: false, message: "Login failed" }
    }
  }

  const register = async (email: string, username: string, password: string) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Validate password
      const passwordValidation = PasswordUtils.validatePassword(password)
      if (!passwordValidation.isValid) {
        return { success: false, message: passwordValidation.errors.join(", ") }
      }

      // Check if user already exists
      const existingUser = USERS_DB.find((u) => u.email.toLowerCase() === email.toLowerCase())
      if (existingUser) {
        return { success: false, message: "User with this email already exists" }
      }

      // Check if username is taken
      const existingUsername = USERS_DB.find((u) => u.username.toLowerCase() === username.toLowerCase())
      if (existingUsername) {
        return { success: false, message: "Username is already taken" }
      }

      const isAdmin = email.toLowerCase() === "admin@calamari.lol"
      const verificationToken = Math.random().toString(36).substring(2, 15)

      // Create new user record
      const newUserRecord: UserRecord = {
        id: "user_" + Math.random().toString(36).substring(2, 9),
        email,
        username,
        password: PasswordUtils.hashPassword(password),
        isAdmin,
        emailVerified: isAdmin, // Auto-verify admin
        createdAt: new Date().toISOString(),
        verificationToken: isAdmin ? undefined : verificationToken,
      }

      // Add to mock database
      USERS_DB.push(newUserRecord)

      // Send verification email if not admin
      if (!isAdmin) {
        await EmailService.sendVerificationEmail(email, verificationToken)
      } else {
        // Auto-login admin
        const newUser: User = {
          id: newUserRecord.id,
          email: newUserRecord.email,
          username: newUserRecord.username,
          isAdmin: newUserRecord.isAdmin,
          emailVerified: newUserRecord.emailVerified,
          createdAt: newUserRecord.createdAt,
        }

        setUser(newUser)
        if (typeof window !== "undefined") {
          localStorage.setItem("calamari_user", JSON.stringify(newUser))
        }
      }

      // Send welcome email
      await EmailService.sendWelcomeEmail(email, username)

      return {
        success: true,
        message: isAdmin
          ? "Admin account created successfully!"
          : "Registration successful! Please check your email for verification.",
      }
    } catch (error) {
      return { success: false, message: "Registration failed" }
    }
  }

  const logout = () => {
    setUser(null)
    if (typeof window !== "undefined") {
      localStorage.removeItem("calamari_user")
    }
  }

  const resetPassword = async (email: string) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const userRecord = USERS_DB.find((u) => u.email.toLowerCase() === email.toLowerCase())
      if (!userRecord) {
        return { success: false, message: "User not found" }
      }

      const resetToken = Math.random().toString(36).substring(2, 15)
      const resetTokenExpiry = new Date(Date.now() + 3600000).toISOString() // 1 hour

      userRecord.resetToken = resetToken
      userRecord.resetTokenExpiry = resetTokenExpiry

      await EmailService.sendPasswordResetEmail(email, resetToken)

      return { success: true, message: "Password reset email sent! Check your inbox." }
    } catch (error) {
      return { success: false, message: "Failed to send reset email" }
    }
  }

  const confirmPasswordReset = async (token: string, newPassword: string) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const passwordValidation = PasswordUtils.validatePassword(newPassword)
      if (!passwordValidation.isValid) {
        return { success: false, message: passwordValidation.errors.join(", ") }
      }

      const userRecord = USERS_DB.find((u) => u.resetToken === token)
      if (!userRecord) {
        return { success: false, message: "Invalid reset token" }
      }

      if (userRecord.resetTokenExpiry && new Date(userRecord.resetTokenExpiry) < new Date()) {
        return { success: false, message: "Reset token has expired" }
      }

      userRecord.password = PasswordUtils.hashPassword(newPassword)
      userRecord.resetToken = undefined
      userRecord.resetTokenExpiry = undefined

      return { success: true, message: "Password reset successful! You can now log in." }
    } catch (error) {
      return { success: false, message: "Failed to reset password" }
    }
  }

  const verifyEmail = async (token: string) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const userRecord = USERS_DB.find((u) => u.verificationToken === token)
      if (!userRecord) {
        return { success: false, message: "Invalid verification token" }
      }

      userRecord.emailVerified = true
      userRecord.verificationToken = undefined

      return { success: true, message: "Email verified successfully! You can now log in." }
    } catch (error) {
      return { success: false, message: "Email verification failed" }
    }
  }

  const sendVerificationEmail = async () => {
    try {
      if (!user) {
        return { success: false, message: "No user logged in" }
      }

      const userRecord = USERS_DB.find((u) => u.id === user.id)
      if (!userRecord) {
        return { success: false, message: "User not found" }
      }

      if (userRecord.emailVerified) {
        return { success: false, message: "Email is already verified" }
      }

      const verificationToken = Math.random().toString(36).substring(2, 15)
      userRecord.verificationToken = verificationToken

      await EmailService.sendVerificationEmail(userRecord.email, verificationToken)

      return { success: true, message: "Verification email sent!" }
    } catch (error) {
      return { success: false, message: "Failed to send verification email" }
    }
  }

  const resendVerificationEmail = async (email: string) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const userRecord = USERS_DB.find((u) => u.email.toLowerCase() === email.toLowerCase())
      if (!userRecord) {
        return { success: false, message: "User not found" }
      }

      if (userRecord.emailVerified) {
        return { success: false, message: "Email is already verified" }
      }

      const verificationToken = Math.random().toString(36).substring(2, 15)
      userRecord.verificationToken = verificationToken

      await EmailService.sendVerificationEmail(email, verificationToken)

      return { success: true, message: "Verification email sent!" }
    } catch (error) {
      return { success: false, message: "Failed to send verification email" }
    }
  }

  const changePassword = async (currentPassword: string, newPassword: string) => {
    try {
      if (!user) {
        return { success: false, message: "No user logged in" }
      }

      await new Promise((resolve) => setTimeout(resolve, 1000))

      const userRecord = USERS_DB.find((u) => u.id === user.id)
      if (!userRecord) {
        return { success: false, message: "User not found" }
      }

      if (!PasswordUtils.verifyPassword(currentPassword, userRecord.password)) {
        return { success: false, message: "Current password is incorrect" }
      }

      const passwordValidation = PasswordUtils.validatePassword(newPassword)
      if (!passwordValidation.isValid) {
        return { success: false, message: passwordValidation.errors.join(", ") }
      }

      userRecord.password = PasswordUtils.hashPassword(newPassword)

      return { success: true, message: "Password changed successfully!" }
    } catch (error) {
      return { success: false, message: "Failed to change password" }
    }
  }

  const updateProfile = async (data: { username?: string; email?: string }) => {
    try {
      if (!user) {
        return { success: false, message: "No user logged in" }
      }

      await new Promise((resolve) => setTimeout(resolve, 1000))

      const userRecord = USERS_DB.find((u) => u.id === user.id)
      if (!userRecord) {
        return { success: false, message: "User not found" }
      }

      if (data.username) {
        const existingUsername = USERS_DB.find(
          (u) => u.username.toLowerCase() === data.username!.toLowerCase() && u.id !== user.id,
        )
        if (existingUsername) {
          return { success: false, message: "Username is already taken" }
        }
        userRecord.username = data.username
      }

      if (data.email) {
        const existingEmail = USERS_DB.find(
          (u) => u.email.toLowerCase() === data.email!.toLowerCase() && u.id !== user.id,
        )
        if (existingEmail) {
          return { success: false, message: "Email is already in use" }
        }
        userRecord.email = data.email
        userRecord.emailVerified = false // Require re-verification for new email
      }

      // Update user state
      const updatedUser: User = {
        ...user,
        username: userRecord.username,
        email: userRecord.email,
        emailVerified: userRecord.emailVerified,
      }

      setUser(updatedUser)
      if (typeof window !== "undefined") {
        localStorage.setItem("calamari_user", JSON.stringify(updatedUser))
      }

      return { success: true, message: "Profile updated successfully!" }
    } catch (error) {
      return { success: false, message: "Failed to update profile" }
    }
  }

  const generateApiKey = async (name: string, permissions: string[]): Promise<ApiKey | null> => {
    if (!user?.isAdmin) return null
    await new Promise((resolve) => setTimeout(resolve, 500))
    return {
      id: "key_" + Math.random().toString(36).substring(2, 9),
      name,
      key: "ck_" + Math.random().toString(36).substring(2, 32),
      permissions,
      createdAt: new Date().toISOString(),
    }
  }

  const revokeApiKey = async (keyId: string): Promise<boolean> => {
    if (!user?.isAdmin) return false
    await new Promise((resolve) => setTimeout(resolve, 500))
    return true
  }

  const getApiKeys = async (): Promise<ApiKey[]> => {
    if (!user?.isAdmin) return []
    await new Promise((resolve) => setTimeout(resolve, 500))
    return [
      {
        id: "1",
        name: "Main API Key",
        key: "ck_live_51234567890abcdef",
        permissions: ["read", "write", "admin"],
        createdAt: "2024-06-01T00:00:00Z",
        lastUsed: "2024-06-10T14:30:00Z",
      },
    ]
  }

  const createWebhook = async (config: Omit<WebhookConfig, "id">): Promise<WebhookConfig | null> => {
    if (!user?.isAdmin) return null
    await new Promise((resolve) => setTimeout(resolve, 500))
    return {
      id: "webhook_" + Math.random().toString(36).substring(2, 9),
      ...config,
    }
  }

  const updateWebhook = async (id: string, config: Partial<WebhookConfig>): Promise<boolean> => {
    if (!user?.isAdmin) return false
    await new Promise((resolve) => setTimeout(resolve, 500))
    return true
  }

  const deleteWebhook = async (id: string): Promise<boolean> => {
    if (!user?.isAdmin) return false
    await new Promise((resolve) => setTimeout(resolve, 500))
    return true
  }

  const getWebhooks = async (): Promise<WebhookConfig[]> => {
    if (!user?.isAdmin) return []
    await new Promise((resolve) => setTimeout(resolve, 500))
    return [
      {
        id: "1",
        name: "Discord Notifications",
        url: "https://discord.com/api/webhooks/123456789/abcdef",
        events: ["user_register", "purchase", "login_failed"],
        isActive: true,
        secret: "whsec_1234567890abcdef",
      },
    ]
  }

  const generateUserKey = async (userId: string, plan: string, duration: number): Promise<string | null> => {
    if (!user?.isAdmin) return null
    await new Promise((resolve) => setTimeout(resolve, 500))
    return "CALAMARI-" + Math.random().toString(36).substring(2, 16).toUpperCase()
  }

  const sendWebhook = async (event: string, data: any): Promise<boolean> => {
    if (!user?.isAdmin) return false
    await new Promise((resolve) => setTimeout(resolve, 500))
    console.log("Webhook sent:", { event, data })
    return true
  }

  const generatePassword = (): string => {
    return PasswordUtils.generateSecurePassword()
  }

  const contextValue: AuthContextType = {
    user,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
    resetPassword,
    confirmPasswordReset,
    verifyEmail,
    sendVerificationEmail,
    resendVerificationEmail,
    changePassword,
    updateProfile,
    generateApiKey,
    revokeApiKey,
    getApiKeys,
    createWebhook,
    updateWebhook,
    deleteWebhook,
    getWebhooks,
    generateUserKey,
    sendWebhook,
    generatePassword,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
