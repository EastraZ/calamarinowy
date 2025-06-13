"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function LiveActivityFeed() {
  const [activities, setActivities] = useState<any[]>([])

  const activityTypes = [
    { type: "aimbot", icon: "🎯", color: "text-green-400" },
    { type: "esp", icon: "👁️", color: "text-blue-400" },
    { type: "hwid", icon: "💻", color: "text-yellow-400" },
    { type: "stability", icon: "⚙️", color: "text-purple-400" },
  ]

  const qaTeams = ["QA_Team_Alpha", "QA_Team_Beta", "QA_Team_Gamma", "QA_Team_Delta", "QA_Team_Epsilon"]

  const testStatuses = ["PASSED", "TESTING", "FAILED"]

  const generateActivity = () => {
    const activity = activityTypes[Math.floor(Math.random() * activityTypes.length)]
    const qaTeam = qaTeams[Math.floor(Math.random() * qaTeams.length)]
    const status = testStatuses[Math.floor(Math.random() * testStatuses.length)]

    let message = ""
    switch (activity.type) {
      case "aimbot":
        message = `${qaTeam} completed aimbot accuracy test`
        break
      case "esp":
        message = `${qaTeam} verified ESP detection bypass`
        break
      case "hwid":
        message = `${qaTeam} tested HWID spoofer stability`
        break
      case "stability":
        message = `${qaTeam} ran stability tests`
        break
    }

    return {
      id: Date.now() + Math.random(),
      ...activity,
      qaTeam,
      status,
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
            Testing Feed
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Live testing results from our quality assurance team
          </p>
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
                  {activity.status}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
