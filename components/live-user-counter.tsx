"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, Activity, Zap, Shield } from "lucide-react"

export default function LiveUserCounter() {
  const [activeUsers, setActiveUsers] = useState(5556)
  const [recentPurchases, setRecentPurchases] = useState(23)

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live user count changes
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 10) - 4)

      // Simulate recent purchases
      if (Math.random() > 0.7) {
        setRecentPurchases((prev) => prev + 1)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      icon: Users,
      label: "Active Users",
      value: activeUsers.toLocaleString(),
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Activity,
      label: "Recent Purchases",
      value: recentPurchases,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
    },
    {
      icon: Zap,
      label: "Uptime",
      value: "99.8%",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30",
    },
    {
      icon: Shield,
      label: "Undetected",
      value: "100%",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
    },
  ]

  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={index}
            className={`${stat.bgColor} ${stat.borderColor} border backdrop-blur-sm rounded-xl p-4 text-center`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
            <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
            <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
