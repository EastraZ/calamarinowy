"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import {
  User,
  Settings,
  Shield,
  Zap,
  Download,
  Clock,
  CreditCard,
  Calendar,
  CheckCircle,
  ChevronRight,
  Bell,
  BarChart3,
  Gauge,
  HardDrive,
  Cpu,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"
import { useAuth } from "@/lib/auth"

export default function DashboardPage() {
  const { user, isAuthenticated, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  }

  // Mock subscription data
  const subscription = {
    plan: "Premium Lifetime",
    status: "Active",
    nextBilling: "Never (Lifetime)",
    purchaseDate: "2024-05-15",
  }

  // Mock activity data
  const recentActivity = [
    {
      id: 1,
      type: "account",
      description: "Account created",
      date: "2024-05-15",
      icon: User,
    },
    {
      id: 2,
      type: "subscription",
      description: "Purchased Premium Lifetime",
      date: "2024-05-15",
      icon: CreditCard,
    },
    {
      id: 3,
      type: "login",
      description: "New login from Windows PC",
      date: "2024-06-10",
      icon: Shield,
    },
    {
      id: 4,
      type: "download",
      description: "Downloaded Calamari v3.2.1",
      date: "2024-06-10",
      icon: Download,
    },
  ]

  // Performance stats
  const performanceStats = [
    { name: "Average FPS", value: "240+", icon: BarChart3, color: "from-green-600 to-green-500" },
    { name: "Latency", value: "12ms", icon: Gauge, color: "from-blue-600 to-blue-500" },
    { name: "Memory Usage", value: "1.2 GB", icon: HardDrive, color: "from-purple-600 to-purple-500" },
    { name: "CPU Usage", value: "8%", icon: Cpu, color: "from-orange-600 to-orange-500" },
  ]

  // Quick actions
  const quickActions = [
    {
      title: "Download Calamari",
      description: "Get the latest version",
      icon: Download,
      color: "from-green-600 to-green-500",
      action: () => router.push("/download"),
    },
    {
      title: "Account Settings",
      description: "Update your profile",
      icon: Settings,
      color: "from-blue-600 to-blue-500",
      action: () => router.push("/settings"),
    },
    {
      title: "Security",
      description: "Manage your security",
      icon: Shield,
      color: "from-purple-600 to-purple-500",
      action: () => router.push("/security"),
    },
    {
      title: "Performance",
      description: "Optimize your experience",
      icon: Zap,
      color: "from-orange-600 to-orange-500",
      action: () => router.push("/performance"),
    },
  ]

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
          {/* Welcome Header */}
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
              Welcome, {user?.displayName || user?.username}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Manage your account, check your subscription, and access Calamari features
            </motion.p>
          </motion.div>

          {/* User Info and Subscription */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* User Info */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 shadow-lg lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-500 mr-4">
                  <img
                    src={user?.avatar || "/placeholder.svg?height=64&width=64"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{user?.displayName || user?.username}</h2>
                  <p className="text-gray-400">{user?.email}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Username:</span>
                  <span className="text-white font-medium">{user?.username}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Member since:</span>
                  <span className="text-white font-medium">{formatDate(user?.createdAt || "2024-05-15")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Account type:</span>
                  <span className="text-green-400 font-medium">Premium</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <button
                  onClick={() => router.push("/settings")}
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg font-medium text-white hover:border-gray-500 transition-colors flex items-center justify-center"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Edit Profile
                </button>
              </div>
            </motion.div>

            {/* Subscription Info */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 shadow-lg lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Subscription</h2>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-green-400 font-medium">{subscription.status}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-6 w-6 text-red-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">Current Plan</h3>
                  </div>
                  <p className="text-2xl font-bold text-red-400 mb-2">{subscription.plan}</p>
                  <p className="text-gray-400">Full access to all features</p>
                </div>
                <div className="bg-black/30 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">Next Billing</h3>
                  </div>
                  <p className="text-2xl font-bold text-blue-400 mb-2">{subscription.nextBilling}</p>
                  <p className="text-gray-400">Purchased on {formatDate(subscription.purchaseDate)}</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => router.push("/purchase")}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-medium text-white hover:from-red-600 hover:to-orange-600 transition-colors flex items-center justify-center"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Manage Subscription
                </button>
                <button className="px-6 py-3 border border-gray-700 rounded-lg font-medium text-white hover:border-gray-500 transition-colors flex items-center justify-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Subscription History
                </button>
              </div>
            </motion.div>
          </div>

          {/* Performance Stats */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Performance Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-400">{stat.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 cursor-pointer hover:border-red-500/40 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={action.action}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-full flex items-center justify-center mb-4`}
                  >
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
                  <p className="text-gray-400 mb-4">{action.description}</p>
                  <div className="flex items-center text-red-400">
                    <span className="text-sm font-medium">Go to</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Recent Activity</h2>
              <Bell className="h-6 w-6 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center p-4 bg-black/30 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mr-4">
                    <activity.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{activity.description}</p>
                    <p className="text-gray-400 text-sm">{formatDate(activity.date)}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
