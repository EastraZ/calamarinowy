"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, User, Lock, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react"
import { useAuth } from "@/lib/auth"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultTab?: "login" | "register" | "forgot-password" | "verify-email"
}

export default function AuthModal({ isOpen, onClose, defaultTab = "login" }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ text: "", type: "" })

  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [registerData, setRegisterData] = useState({ email: "", username: "", password: "", confirmPassword: "" })
  const [forgotPasswordData, setForgotPasswordData] = useState({ email: "" })
  const [verifyEmailData, setVerifyEmailData] = useState({ token: "" })

  const { login, register, resetPassword, sendVerificationEmail, verifyEmail } = useAuth()

  const showMessage = (text: string, type: "success" | "error" | "info") => {
    setMessage({ text, type })
    setTimeout(() => setMessage({ text: "", type: "" }), 5000)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ text: "", type: "" })

    const result = await login(loginData.email, loginData.password)

    if (result.success) {
      onClose()
      setLoginData({ email: "", password: "" })
      showMessage("Login successful!", "success")
    } else {
      if (result.needsVerification) {
        setActiveTab("verify-email")
        showMessage(result.message, "info")
      } else {
        showMessage(result.message, "error")
      }
    }
    setLoading(false)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ text: "", type: "" })

    if (registerData.password !== registerData.confirmPassword) {
      showMessage("Passwords don't match", "error")
      setLoading(false)
      return
    }

    if (registerData.password.length < 8) {
      showMessage("Password must be at least 8 characters", "error")
      setLoading(false)
      return
    }

    const result = await register(registerData.email, registerData.username, registerData.password)

    if (result.success) {
      if (registerData.email === "Olektab4@gmail.com") {
        onClose()
        showMessage("Admin account created successfully!", "success")
      } else {
        setActiveTab("verify-email")
        showMessage(result.message, "success")
      }
      setRegisterData({ email: "", username: "", password: "", confirmPassword: "" })
    } else {
      showMessage(result.message, "error")
    }
    setLoading(false)
  }

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ text: "", type: "" })

    const success = await resetPassword(forgotPasswordData.email)

    if (success) {
      showMessage("Password reset email sent! Check your inbox.", "success")
      setForgotPasswordData({ email: "" })
    } else {
      showMessage("Failed to send reset email", "error")
    }
    setLoading(false)
  }

  const handleVerifyEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ text: "", type: "" })

    const success = await verifyEmail(verifyEmailData.token)

    if (success) {
      onClose()
      showMessage("Email verified successfully! You can now log in.", "success")
      setVerifyEmailData({ token: "" })
    } else {
      showMessage("Invalid verification token", "error")
    }
    setLoading(false)
  }

  const handleResendVerification = async () => {
    setLoading(true)
    const success = await sendVerificationEmail()

    if (success) {
      showMessage("Verification email sent!", "success")
    } else {
      showMessage("Failed to send verification email", "error")
    }
    setLoading(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black/90 backdrop-blur-md border border-green-500/20 rounded-2xl p-8 w-full max-w-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {activeTab === "login" && "Welcome Back"}
                {activeTab === "register" && "Join Koala.Vip"}
                {activeTab === "forgot-password" && "Reset Password"}
                {activeTab === "verify-email" && "Verify Email"}
              </h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Tab Switcher */}
            {(activeTab === "login" || activeTab === "register") && (
              <div className="flex mb-6 bg-gray-900/50 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab("login")}
                  className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                    activeTab === "login" ? "bg-green-600 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveTab("register")}
                  className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                    activeTab === "register" ? "bg-green-600 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  Register
                </button>
              </div>
            )}

            {/* Message Display */}
            {message.text && (
              <div
                className={`mb-4 p-3 rounded-lg border flex items-center ${
                  message.type === "success"
                    ? "bg-green-500/20 border-green-500/30 text-green-400"
                    : message.type === "error"
                      ? "bg-red-500/20 border-red-500/30 text-red-400"
                      : "bg-blue-500/20 border-blue-500/30 text-blue-400"
                }`}
              >
                {message.type === "success" ? (
                  <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                )}
                <span className="text-sm">{message.text}</span>
              </div>
            )}

            {/* Login Form */}
            {activeTab === "login" && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="w-full pl-10 pr-12 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveTab("forgot-password")}
                    className="text-sm text-green-400 hover:text-green-300"
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 py-3 rounded-lg font-bold text-white transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </form>
            )}

            {/* Register Form */}
            {activeTab === "register" && (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={registerData.username}
                      onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                      placeholder="Choose a username"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      className="w-full pl-10 pr-12 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                      placeholder="Create a password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 py-3 rounded-lg font-bold text-white transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </button>
              </form>
            )}

            {/* Forgot Password Form */}
            {activeTab === "forgot-password" && (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      value={forgotPasswordData.email}
                      onChange={(e) => setForgotPasswordData({ email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 py-3 rounded-lg font-bold text-white transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Reset Email"}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className="w-full text-gray-400 hover:text-white transition-colors"
                >
                  Back to Login
                </button>
              </form>
            )}

            {/* Verify Email Form */}
            {activeTab === "verify-email" && (
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <p className="text-gray-300 mb-2">
                    We've sent a verification email to your inbox. Please enter the verification code below.
                  </p>
                </div>

                <form onSubmit={handleVerifyEmail} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Verification Code</label>
                    <input
                      type="text"
                      value={verifyEmailData.token}
                      onChange={(e) => setVerifyEmailData({ token: e.target.value })}
                      className="w-full py-3 px-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 text-center text-lg tracking-widest"
                      placeholder="Enter verification code"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 py-3 rounded-lg font-bold text-white transition-all duration-300 disabled:opacity-50"
                  >
                    {loading ? "Verifying..." : "Verify Email"}
                  </button>
                </form>

                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Didn't receive the email?</p>
                  <button
                    onClick={handleResendVerification}
                    disabled={loading}
                    className="text-green-400 hover:text-green-300 text-sm disabled:opacity-50"
                  >
                    Resend verification email
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className="w-full text-gray-400 hover:text-white transition-colors"
                >
                  Back to Login
                </button>
              </div>
            )}

            <div className="mt-6 text-center text-sm text-gray-400">
              By continuing, you agree to our{" "}
              <a href="/terms" className="text-green-400 hover:text-green-300">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-green-400 hover:text-green-300">
                Privacy Policy
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
