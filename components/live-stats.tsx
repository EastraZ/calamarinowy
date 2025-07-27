"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Users, Zap, Trophy, Target } from "lucide-react"

export default function LiveStats() {
  const [stats, setStats] = useState({
    onlineUsers: 12847,
    activeMatches: 3421,
    totalKills: 2847291,
    winRate: 94.7,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        onlineUsers: prev.onlineUsers + Math.floor(Math.random() * 10) - 5,
        activeMatches: prev.activeMatches + Math.floor(Math.random() * 20) - 10,
        totalKills: prev.totalKills + Math.floor(Math.random() * 50),
        winRate: 94.7 + (Math.random() - 0.5) * 0.2,
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const statItems = [
    {
      icon: Users,
      label: "Online Now",
      value: stats.onlineUsers.toLocaleString(),
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      label: "Active Matches",
      value: stats.activeMatches.toLocaleString(),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      label: "Total Eliminations",
      value: stats.totalKills.toLocaleString(),
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Trophy,
      label: "Win Rate",
      value: `${stats.winRate.toFixed(1)}%`,
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <motion.div
            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} mx-auto mb-3 flex items-center justify-center`}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
          >
            <stat.icon className="h-6 w-6 text-white" />
          </motion.div>
          <motion.div
            className="text-2xl font-bold text-white mb-1"
            key={stat.value}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {stat.value}
          </motion.div>
          <div className="text-gray-400 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
