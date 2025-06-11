"use client"

import React, { useState, useEffect, createContext, useContext } from "react"

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

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => void
  register: (email: string, password: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string, password: string) => {
    console.log("Login:", email)
  }

  const register = (email: string, password: string) => {
    console.log("Register:", email)
  }

  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
