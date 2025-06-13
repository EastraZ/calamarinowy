"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, CheckCircle } from "lucide-react"

export default function GameStatus() {
  // ONLY include the 3 supported games and HWID Spoofer
  const [gameStatus] = useState([
    {
      name: "Rust",
      status: "Undetected",
      days: 847,
      icon: "🦀",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Fortnite",
      status: "Undetected",
      days: 623,
      icon: "🏗️",
      color: "from-purple-500 to-blue-500",
    },
    {
      name: "Apex Legends",
      status: "Undetected",
      days: 734,
      icon: "🎯",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "HWID Spoofer",
      status: "Undetected",
      days: 912,
      icon: "🛡️",
      color: "from-green-500 to-emerald-500",
    },
  ])

  return (
    <section className="container mx-auto px-4 py-20 relative z-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center mb-4">
          <Shield className="h-8 w-8 text-green-400 mr-3" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Detection Status
          </h2>
        </div>
        <div className="flex items-center justify-center mb-6">
          <CheckCircle className="h-6 w-6 text-green-400 mr-2" />
          <span className="text-2xl font-bold text-green-400">All Clear</span>
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">Real-time detection status for all supported products</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {gameStatus.map((game, index) => (
          <motion.div
            key={game.name}
            className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 text-center hover:border-green-500/40 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-4xl mb-4">{game.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{game.name}</h3>
            <div className="flex items-center justify-center mb-3">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-green-400 font-bold">{game.status}</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{game.days} days</div>
            <div className="text-gray-400 text-sm">Undetected</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
