"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function LiveActivityFeed() {
  const [activities, setActivities] = useState<any[]>([])

  const activityTypes = [
    { type: "purchase", icon: "💳", color: "text-green-400" },
    { type: "login", icon: "🎮", color: "text-blue-400" },
    { type: "achievement", icon: "🏆", color: "text-yellow-400" },
    { type: "update", icon: "🔄", color: "text-purple-400" },
  ]

  const usernames = [
    "ProGamer2024",
    "EliteSniper",
    "RustLord",
    "FortniteKing",
    "ApexPredator",
    "ShadowHunter",
    "NightCrawler",
    "DeathDealer",
    "SkullCrusher",
    "VoidWalker",
  ]

  const games = ["Rust", "Fortnite", "Apex Legends"]

  const generateActivity = () => {
    const activity = activityTypes[Math.floor(Math.random() * activityTypes.length)]
    const username = usernames[Math.floor(Math.random() * usernames.length)]
    const game = games[Math.floor(Math.random() * games.length)]

    let message = ""
    switch (activity.type) {
      case "purchase":
        message = `${username} purchased Calamari Premium`
        break
      case "login":
        message = `${username} is dominating ${game}`
        break
      case "achievement":
        message = `${username} achieved 20+ kills in ${game}`
        break
      case "update":
        message = `${username} updated to v4.0.1 ULTRA`
        break
    }

    return {
      id: Date.now() + Math.random(),
      ...activity,
      username,
      game,
      message,
      timestamp: new Date().toLocaleTimeString(),
    }
  }

  useEffect(() => {
    // Initial activities
    const initialActivities = Array.from({ length: 5 }, generateActivity)
    setActivities(initialActivities)

    // Add new activity every 3 seconds
    const interval = setInterval(() => {
      const newActivity = generateActivity()
      setActivities((prev) => [newActivity, ...prev.slice(0, 4)])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Live Activity Feed
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">See what our community is doing right now</p>
        </motion.div>

        <div className="bg-black/60 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
            <span className="text-green-400 font-bold">LIVE</span>
          </div>

          <AnimatePresence>
            {activities.map((activity) => (
              <motion.div
                key={activity.id}
                className="flex items-center justify-between p-4 mb-3 bg-white/5 rounded-xl border border-white/10"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-4">{activity.icon}</span>
                  <div>
                    <div className="text-white font-medium">{activity.message}</div>
                    <div className="text-gray-400 text-sm">{activity.timestamp}</div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full bg-white/10 ${activity.color} text-sm font-bold`}>
                  {activity.game}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
