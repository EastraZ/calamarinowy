"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SettingsIcon, Save, User, Mail, AtSign, ImageIcon, Trash2, Upload } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"
import { useAuth } from "@/lib/auth"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
  const { user, isAuthenticated, updateUserProfile } = useAuth()
  const router = useRouter()

  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    username: user?.username || "",
    bio: user?.bio || "",
    avatar: user?.avatar || "/images/default-avatar.png",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [notification, setNotification] = useState({ show: false, message: "", type: "" })

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setIsEditing(true)
  }

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // In a real implementation, this would upload to a storage service
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avatar: reader.result as string }))
        setIsEditing(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Update user profile
    updateUserProfile(formData)

    // Show success notification
    setNotification({
      show: true,
      message: "Profile updated successfully!",
      type: "success",
    })

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" })
    }, 3000)

    setIsEditing(false)
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
              Account Settings
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Customize your profile and manage your account preferences
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

          {/* Settings Form */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mr-4">
                <SettingsIcon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Profile Settings</h2>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Avatar Section */}
              <div className="mb-8">
                <label className="block text-gray-300 mb-2 font-medium">Profile Picture</label>
                <div className="flex items-center">
                  <div className="relative">
                    <ImageIcon
                      src={formData.avatar || "/placeholder.svg?height=100&width=100"}
                      alt="Profile"
                      className="w-24 h-24 rounded-full object-cover border-2 border-red-500"
                    />
                    <div className="absolute bottom-0 right-0">
                      <label htmlFor="avatar-upload" className="cursor-pointer">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <Upload className="h-4 w-4 text-white" />
                        </div>
                      </label>
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleAvatarUpload}
                      />
                    </div>
                  </div>
                  <div className="ml-6">
                    <p className="text-gray-300 text-sm mb-2">Upload a new profile picture</p>
                    <p className="text-gray-400 text-xs">JPG, PNG or GIF. 1MB max size.</p>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Display Name */}
                <div>
                  <label htmlFor="displayName" className="block text-gray-300 mb-2 font-medium">
                    Display Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      id="displayName"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-red-500"
                      placeholder="Your display name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-red-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Username */}
                <div>
                  <label htmlFor="username" className="block text-gray-300 mb-2 font-medium">
                    Username
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-red-500"
                      placeholder="username"
                    />
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-8">
                <label htmlFor="bio" className="block text-gray-300 mb-2 font-medium">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/30 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-red-500"
                  placeholder="Tell us a bit about yourself..."
                ></textarea>
                <p className="text-gray-400 text-xs mt-1">Max 200 characters</p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-6 py-3 border border-gray-700 rounded-lg font-medium text-white hover:border-gray-500 transition-colors"
                  onClick={() => router.push("/dashboard")}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!isEditing}
                  className={`px-6 py-3 rounded-lg font-medium text-white flex items-center ${
                    isEditing
                      ? "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                      : "bg-gray-700 cursor-not-allowed"
                  } transition-colors`}
                >
                  <Save className="h-5 w-5 mr-2" />
                  Save Changes
                </button>
              </div>
            </form>
          </motion.div>

          {/* Danger Zone */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-red-500 mb-4">Danger Zone</h3>
            <p className="text-gray-300 mb-6">
              These actions are permanent and cannot be undone. Please proceed with caution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 border border-red-700 bg-red-900/20 rounded-lg font-medium text-red-400 hover:bg-red-900/40 transition-colors flex items-center">
                <Trash2 className="h-5 w-5 mr-2" />
                Delete Account
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
