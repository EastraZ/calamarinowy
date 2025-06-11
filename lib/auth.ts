"use client"

import type React from "react"
import { useState, useEffect, createContext, useContext } from "react"

export interface User {
  id: string
  email: string
  username: string
  displayName?: string
  avatar?: string
  bio?: string
  createdAt: string
  emailVerified: boolean
  isAdmin: boolean
  subscription?: {
    plan: string
    expiresAt: string
    active: boolean
    key?: string
  }
  lastLogin?: string
  loginHistory?: LoginEntry[]
}

export interface LoginEntry {
  id: string
  date: string
  device: string
  location: string
  ip: string
  status: "success" | "failed"
}

export interface ApiKey {
  id: string
  name: string
  key: string
  permissions: string[]
  createdAt: string
  lastUsed?: string
  isActive: boolean
}

export interface WebhookConfig {
  id: string
  name: string
  url: string
  events: string[]
  isActive: boolean
  secret?: string
}

interface AuthContextType {
  user: User | null
  login: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; message: string; needsVerification?: boolean }>
  register: (email: string, username: string, password: string) => Promise<{ success: boolean; message: string }>
  logout: () => void
  loading: boolean
  isAuthenticated: boolean
  updateUserProfile: (data: Partial<User>) => Promise<boolean>
  updatePassword: (currentPassword: string, newPassword: string) => Promise<boolean>
  sendVerificationEmail: () => Promise<boolean>
  verifyEmail: (token: string) => Promise<boolean>
  resetPassword: (email: string) => Promise<boolean>
  confirmPasswordReset: (token: string, newPassword: string) => Promise<boolean>
  // Admin functions
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

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Admin emails that have full access
const ADMIN_EMAILS = ["Olektab4@gmail.com"]

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem("calamari_user")
    if (savedUser) {
      const userData = JSON.parse(savedUser)
      setUser(userData)
    }
    setLoading(false)
  }, [])

  const isAuthenticated = !!user && user.emailVerified

  const login = async (
    email: string,
    password: string,
  ): Promise<{ success: boolean; message: string; needsVerification?: boolean }> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check if user exists and password is correct
      const isAdmin = ADMIN_EMAILS.includes(email)

      const mockUser: User = {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        email,
        username: email.split("@")[0],
        displayName: email.split("@")[0],
        createdAt: new Date().toISOString(),
        emailVerified: true, // For demo purposes, set to true for admin
        isAdmin,
        subscription: isAdmin
          ? {
              plan: "Admin Access",
              expiresAt: "Never",
              active: true,
            }
          : undefined,
        lastLogin: new Date().toISOString(),
        loginHistory: [
          {
            id: "1",
            date: new Date().toISOString(),
            device: "Windows PC - Chrome",
            location: "New York, United States",
            ip: "192.168.1.xxx",
            status: "success",
          },
        ],
      }

      if (!mockUser.emailVerified && !isAdmin) {
        return {
          success: false,
          message: "Please verify your email before logging in.",
          needsVerification: true,
        }
      }

      setUser(mockUser)
      localStorage.setItem("calamari_user", JSON.stringify(mockUser))
      return { success: true, message: "Login successful!" }
    } catch (error) {
      return { success: false, message: "Invalid credentials" }
    }
  }

  const register = async (
    email: string,
    username: string,
    password: string,
  ): Promise<{ success: boolean; message: string }> => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const isAdmin = ADMIN_EMAILS.includes(email)

      const mockUser: User = {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        email,
        username,
        displayName: username,
        createdAt: new Date().toISOString(),
        emailVerified: isAdmin, // Auto-verify admin emails
        isAdmin,
        loginHistory: [],
      }

      if (isAdmin) {
        setUser(mockUser)
        localStorage.setItem("calamari_user", JSON.stringify(mockUser))
        return { success: true, message: "Admin account created successfully!" }
      } else {
        // For non-admin users, require email verification
        localStorage.setItem("calamari_pending_user", JSON.stringify(mockUser))
        return { success: true, message: "Registration successful! Please check your email to verify your account." }
      }
    } catch (error) {
      return { success: false, message: "Registration failed" }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("calamari_user")
    localStorage.removeItem("calamari_pending_user")
  }

  const updateUserProfile = async (data: Partial<User>): Promise<boolean> => {
    if (!user) return false

    const updatedUser = { ...user, ...data }
    setUser(updatedUser)
    localStorage.setItem("calamari_user", JSON.stringify(updatedUser))
    return true
  }

  const updatePassword = async (currentPassword: string, newPassword: string): Promise<boolean> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return true
  }

  const sendVerificationEmail = async (): Promise<boolean> => {
    // Simulate sending verification email
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return true
  }

  const verifyEmail = async (token: string): Promise<boolean> => {
    // Simulate email verification
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const pendingUser = localStorage.getItem("calamari_pending_user")
    if (pendingUser) {
      const userData = JSON.parse(pendingUser)
      userData.emailVerified = true
      setUser(userData)
      localStorage.setItem("calamari_user", JSON.stringify(userData))
      localStorage.removeItem("calamari_pending_user")
      return true
    }
    return false
  }

  const resetPassword = async (email: string): Promise<boolean> => {
    // Simulate password reset email
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return true
  }

  const confirmPasswordReset = async (token: string, newPassword: string): Promise<boolean> => {
    // Simulate password reset confirmation
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return true
  }

  // Admin functions
  const generateApiKey = async (name: string, permissions: string[]): Promise<ApiKey | null> => {
    if (!user?.isAdmin) return null

    await new Promise((resolve) => setTimeout(resolve, 500))

    const apiKey: ApiKey = {
      id: "key_" + Math.random().toString(36).substr(2, 9),
      name,
      key: "ck_" + Math.random().toString(36).substr(2, 32),
      permissions,
      createdAt: new Date().toISOString(),
      isActive: true,
    }

    return apiKey
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
        isActive: true,
      },
      {
        id: "2",
        name: "Discord Bot Key",
        key: "ck_live_98765432109876543",
        permissions: ["read", "webhook"],
        createdAt: "2024-06-05T00:00:00Z",
        lastUsed: "2024-06-10T12:15:00Z",
        isActive: true,
      },
    ]
  }

  const createWebhook = async (config: Omit<WebhookConfig, "id">): Promise<WebhookConfig | null> => {
    if (!user?.isAdmin) return null

    await new Promise((resolve) => setTimeout(resolve, 500))

    const webhook: WebhookConfig = {
      id: "webhook_" + Math.random().toString(36).substr(2, 9),
      ...config,
    }

    return webhook
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
      {
        id: "2",
        name: "Analytics Webhook",
        url: "https://api.analytics.com/webhook",
        events: ["user_activity", "performance_data"],
        isActive: true,
      },
    ]
  }

  const generateUserKey = async (userId: string, plan: string, duration: number): Promise<string | null> => {
    if (!user?.isAdmin) return null

    await new Promise((resolve) => setTimeout(resolve, 500))

    const key = "CALAMARI-" + Math.random().toString(36).substr(2, 16).toUpperCase()
    return key
  }

  const sendWebhook = async (event: string, data: any): Promise<boolean> => {
    if (!user?.isAdmin) return false

    // Simulate webhook sending
    await new Promise((resolve) => setTimeout(resolve, 500))

    console.log("Webhook sent:", { event, data })
    return true
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
        isAuthenticated,
        updateUserProfile,
        updatePassword,
        sendVerificationEmail,
        verifyEmail,
        resetPassword,
        confirmPasswordReset,
        generateApiKey,
        revokeApiKey,
        getApiKeys,
        createWebhook,
        updateWebhook,
        deleteWebhook,
        getWebhooks,
        generateUserKey,
        sendWebhook,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
