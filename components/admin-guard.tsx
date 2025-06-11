"use client"

import type React from "react"

import { useAuth } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface AdminGuardProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function AdminGuard({ children, fallback }: AdminGuardProps) {
  const { user, loading, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && (!isAuthenticated || !user?.isAdmin)) {
      router.push("/")
    }
  }, [user, loading, isAuthenticated, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated || !user?.isAdmin) {
    return fallback || null
  }

  return <>{children}</>
}
