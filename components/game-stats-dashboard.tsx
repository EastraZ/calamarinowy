"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function GameStatsDashboard() {
  const [activeGame, setActiveGame] = useState(0)

  const games = [
    {
      name: "Rust",
      icon: "🦀",
      stats: {
        winRate: "94%",
        kd: "8.2",
        accuracy: "89%",
        users: "85,432",
      },
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Fortnite",
      icon: "🏗️",
      stats: {
        winRate: "87%",
        kd: "6.8",
        accuracy: "92%",
        users: "76,891",
      },
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Apex Legends",
      icon: "⚡",
      stats: {
        winRate: "91%",
        kd: "7.4",
        accuracy: "88%",
        users: "68,234",
      },
      color: "from-red-500 to-orange-500",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGame((prev) => (prev + 1) % games.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Dominate Every Game
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real performance stats from our 200,000+ active users across supported games
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-3xl border-2 transition-all duration-500 cursor-pointer ${
                activeGame === index
                  ? "border-red-500 bg-red-500/10 scale-105"
                  : "border-white/20 bg-black/40 hover:border-white/40"
              }`}
              onClick={() => setActiveGame(index)}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{game.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
                <div className={`w-full h-1 bg-gradient-to-r ${game.color} rounded-full`} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{game.stats.winRate}</div>
                  <div className="text-sm text-gray-400">Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{game.stats.kd}</div>
                  <div className="text-sm text-gray-400">K/D Ratio</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">{game.stats.accuracy}</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">{game.stats.users}</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
              </div>

              {activeGame === index && (
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/20 to-orange-500/20 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
