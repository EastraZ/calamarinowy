"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Zap, Clock, Users, Trophy } from "lucide-react"

export default function GameStatus() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState("status")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const games = [
    {
      name: "Rust",
      status: "Undetected",
      lastUpdate: "2 hours ago",
      color: "green",
      playerCount: "1,245",
      features: ["ESP", "Aimbot", "Resource Finder", "Player Radar"],
      detection: "0.01%",
    },
    {
      name: "Fortnite",
      status: "Undetected",
      lastUpdate: "4 hours ago",
      color: "green",
      playerCount: "2,189",
      features: ["Silent Aim", "ESP", "Build Helper", "Skin Changer"],
      detection: "0.02%",
    },
    {
      name: "Apex Legends",
      status: "Undetected",
      lastUpdate: "1 day ago",
      color: "green",
      playerCount: "987",
      features: ["Aimbot", "ESP", "Recoil Control", "Trigger Bot"],
      detection: "0.01%",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex border-b border-gray-800">
          <button
            className={`px-6 py-4 text-sm font-medium flex items-center ${
              activeTab === "status" ? "text-red-400 border-b-2 border-red-400" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("status")}
          >
            <Shield className="w-4 h-4 mr-2" />
            Status
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium flex items-center ${
              activeTab === "features" ? "text-red-400 border-b-2 border-red-400" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("features")}
          >
            <Zap className="w-4 h-4 mr-2" />
            Features
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium flex items-center ${
              activeTab === "stats" ? "text-red-400 border-b-2 border-red-400" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("stats")}
          >
            <Users className="w-4 h-4 mr-2" />
            Stats
          </button>
        </div>

        <div className="p-6">
          {activeTab === "status" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {games.map((game, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-bold text-xl">{game.name}</div>
                    <div className="text-green-500 text-sm flex items-center bg-green-500/10 px-2 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                      {game.status}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Clock className="w-3 h-3 mr-1" />
                    Updated {game.lastUpdate}
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="text-gray-400">Detection rate:</div>
                    <div className="text-green-400 font-bold">{game.detection}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "features" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {games.map((game, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="font-bold text-xl mb-4">{game.name}</div>
                  <ul className="space-y-2">
                    {game.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "stats" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {games.map((game, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 border border-gray-800 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="font-bold text-xl mb-4">{game.name}</div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-gray-400">Active users:</div>
                    <div className="text-white font-bold flex items-center">
                      <Users className="w-3 h-3 mr-1 text-green-400" />
                      {game.playerCount}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-gray-400">Win rate increase:</div>
                    <div className="text-white font-bold flex items-center">
                      <Trophy className="w-3 h-3 mr-1 text-yellow-400" />
                      +45%
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400">Satisfaction:</div>
                    <div className="text-white font-bold">98%</div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
