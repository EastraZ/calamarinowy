"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface User {
  id: string
  email: string
  username: string
  isAdmin: boolean
  emailVerified: boolean
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

// User database with hashed passwords (in a real app, this would be in a secure database)
interface UserRecord {
  id: string
  email: string
  username: string
  password: string // In a real app, this would be hashed
  isAdmin: boolean
  emailVerified: boolean
}

// Mock user database
const USERS_DB: UserRecord[] = [
  {
    id: "user_admin",
    email: "Olektab4@gmail.com",
    username: "admin",
    password: "admin123", // In a real app, this would be hashed
    isAdmin: true,
    emailVerified: true,
  },
  {
    id: "user_test",
    email: "test@example.com",
    username: "testuser",
    password: "password123", // In a real app, this would be hashed
    isAdmin: false,
    emailVerified: true,
  },
]

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
  resetPassword: (email: string) => Promise<boolean>
  verifyEmail: (token: string) => Promise<boolean>
  sendVerificationEmail: () => Promise<boolean>
  generateApiKey: (name: string, permissions: string[]) => Promise<ApiKey | null>
  revokeApiKey: (keyId: string) => Promise<boolean>
  getApiKeys: () => Promise<ApiKey[]>
  createWebhook: (config: Omit<WebhookConfig, "id">) => Promise<WebhookConfig | null>
  updateWebhook: (id: string, config: Partial<WebhookConfig>) => Promise<boolean>
  deleteWebhook: (id: string) => Promise<boolean>
  getWebhooks: () => Promise<WebhookConfig[]>
  generateUserKey: (userId: string, plan: string, duration: number) => Promise<string | null>
  sendWebhook: (event: string, data: any) => Promise<boolean>
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

      // Create user object without password
      const newUser: User = {
        id: userRecord.id,
        email: userRecord.email,
        username: userRecord.username,
        isAdmin: userRecord.isAdmin,
        emailVerified: userRecord.emailVerified,
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

      // Check if user already exists
      const existingUser = USERS_DB.find((u) => u.email.toLowerCase() === email.toLowerCase())
      if (existingUser) {
        return { success: false, message: "User with this email already exists" }
      }

      // In a real app, we would add the user to the database here
      // For this demo, we'll just pretend we did

      const isAdmin = email.toLowerCase() === "olektab4@gmail.com"

      // If it's the admin account, auto-verify and log in
      if (isAdmin) {
        const newUser: User = {
          id: "user_" + Math.random().toString(36).substring(2, 9),
          email,
          username,
          isAdmin: true,
          emailVerified: true,
        }

        setUser(newUser)
        if (typeof window !== "undefined") {
          localStorage.setItem("calamari_user", JSON.stringify(newUser))
        }
      }

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

  const resetPassword = async (email: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // In a real app, we would send a password reset email
    return true
  }

  const verifyEmail = async (token: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // In a real app, we would verify the token
    return true
  }

  const sendVerificationEmail = async (): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // In a real app, we would send a verification email
    return true
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

  const contextValue: AuthContextType = {
    user,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
    resetPassword,
    verifyEmail,
    sendVerificationEmail,
    generateApiKey,
    revokeApiKey,
    getApiKeys,
    createWebhook,
    updateWebhook,
    deleteWebhook,
    getWebhooks,
    generateUserKey,
    sendWebhook,
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}
