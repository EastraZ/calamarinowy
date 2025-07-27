"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, EyeOff, Smartphone, Key, AlertTriangle, CheckCircle, XCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"
import { useAuth } from "@/lib/auth"
import { useRouter } from "next/navigation"

export default function SecurityPage() {
  const { user, isAuthenticated, updatePassword } = useAuth()
  const router = useRouter()

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  })

  const [notification, setNotification] = useState({ show: false, message: "", type: "" })
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  // Fix the loginHistory type
  const loginHistory: {
    id: number
    date: string
    device: string
    location: string
    ip: string
    status: string
  }[] = [
    {
      id: 1,
      date: "2024-06-10 14:32:45",
      device: "Windows PC - Chrome",
      location: "New York, United States",
      ip: "192.168.1.xxx",
      status: "success",
    },
    {
      id: 2,
      date: "2024-06-08 09:15:22",
      device: "iPhone - Safari",
      location: "New York, United States",
      ip: "192.168.1.xxx",
      status: "success",
    },
    {
      id: 3,
      date: "2024-06-05 18:45:11",
      device: "Windows PC - Firefox",
      location: "Chicago, United States",
      ip: "45.67.89.xxx",
      status: "failed",
    },
  ]

  // Add proper type for the event parameter
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({ ...prev, [name]: value }))
  }

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }))
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()

    // Validate passwords
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setNotification({
        show: true,
        message: "New passwords don't match!",
        type: "error",
      })
      return
    }

    if (passwordData.newPassword.length < 8) {
      setNotification({
        show: true,
        message: "Password must be at least 8 characters!",
        type: "error",
      })
      return
    }

    // Update password
    updatePassword(passwordData.currentPassword, passwordData.newPassword)

    // Show success notification
    setNotification({
      show: true,
      message: "Password updated successfully!",
      type: "success",
    })

    // Reset form
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" })
    }, 3000)
  }

  const toggle2FA = () => {
    // In a real implementation, this would initiate 2FA setup
    setTwoFactorEnabled(!twoFactorEnabled)

    setNotification({
      show: true,
      message: twoFactorEnabled ? "Two-factor authentication disabled" : "Two-factor authentication enabled",
      type: "success",
    })

    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" })
    }, 3000)
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
          <div className="absolute inset-0 opacity-30">
            <MatrixRain />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Page Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Security Settings
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Protect your account with advanced security features
            </motion.p>
          </motion.div>

          {/* Notification */}
          {notification.show && (
            <motion.div
              className={`fixed top-24 right-4 z-50 p-4 rounded-lg shadow-lg ${
                notification.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <p className="text-white">{notification.message}</p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Password Change Section */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Change Password</h2>
              </div>

              <form onSubmit={handlePasswordSubmit}>
                {/* Current Password */}
                <div className="mb-4">
                  <label htmlFor="currentPassword" className="block text-gray-300 mb-2 font-medium">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPasswords.current ? "text" : "password"}
                      id="currentPassword"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
                      placeholder="Enter your current password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("current")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    >
                      {showPasswords.current ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* New Password */}
                <div className="mb-4">
                  <label htmlFor="newPassword" className="block text-gray-300 mb-2 font-medium">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPasswords.new ? "text" : "password"}
                      id="newPassword"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
                      placeholder="Enter your new password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("new")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    >
                      {showPasswords.new ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  <p className="text-gray-400 text-xs mt-1">Minimum 8 characters with letters and numbers</p>
                </div>

                {/* Confirm New Password */}
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-gray-300 mb-2 font-medium">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPasswords.confirm ? "text" : "password"}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
                      placeholder="Confirm your new password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility("confirm")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    >
                      {showPasswords.confirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-medium text-white hover:from-red-600 hover:to-orange-600 transition-colors"
                >
                  Update Password
                </button>
              </form>
            </motion.div>

            {/* Two-Factor Authentication */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Two-Factor Authentication</h2>
              </div>

              <div className="bg-black/30 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">2FA Status</h3>
                    <p className="text-gray-300">
                      {twoFactorEnabled
                        ? "Two-factor authentication is enabled"
                        : "Two-factor authentication is disabled"}
                    </p>
                  </div>
                  <div
                    className={`w-16 h-8 rounded-full relative cursor-pointer transition-colors ${
                      twoFactorEnabled ? "bg-green-500" : "bg-gray-700"
                    }`}
                    onClick={toggle2FA}
                  >
                    <div
                      className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform ${
                        twoFactorEnabled ? "transform translate-x-8" : "translate-x-1"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Why Use 2FA?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Adds an extra layer of security to your account</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Protects against unauthorized access even if password is compromised
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Receive notifications when someone tries to access your account
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Login History */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 shadow-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mr-4">
                <Key className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Login History</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-3 px-4 text-left text-gray-300">Date & Time</th>
                    <th className="py-3 px-4 text-left text-gray-300">Device</th>
                    <th className="py-3 px-4 text-left text-gray-300">Location</th>
                    <th className="py-3 px-4 text-left text-gray-300">IP Address</th>
                    <th className="py-3 px-4 text-left text-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loginHistory.map((login) => (
                    <tr key={login.id} className="border-b border-gray-800">
                      <td className="py-3 px-4 text-gray-300">{login.date}</td>
                      <td className="py-3 px-4 text-gray-300">{login.device}</td>
                      <td className="py-3 px-4 text-gray-300">{login.location}</td>
                      <td className="py-3 px-4 text-gray-300">{login.ip}</td>
                      <td className="py-3 px-4">
                        {login.status === "success" ? (
                          <span className="flex items-center text-green-400">
                            <CheckCircle className="h-4 w-4 mr-1" /> Success
                          </span>
                        ) : (
                          <span className="flex items-center text-red-400">
                            <XCircle className="h-4 w-4 mr-1" /> Failed
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Security Tips */}
          <motion.div
            className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Security Tips</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Never share your password or authentication codes with anyone</li>
                  <li>• Use a unique password for your Calamari account</li>
                  <li>• Enable two-factor authentication for maximum security</li>
                  <li>• Check your login history regularly for suspicious activity</li>
                  <li>• Log out when using shared or public computers</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Back to Dashboard Button */}
          <div className="text-center">
            <button
              onClick={() => router.push("/dashboard")}
              className="px-6 py-3 border border-white/20 rounded-lg font-medium text-white hover:border-white/40 transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
