"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function GameCompatibility() {
  const [activeTab, setActiveTab] = useState("supported")

  // Only include supported games
  const supportedGames = [
    {
      name: "Rust",
      rating: 4.9,
      users: "2.1M+",
      description: "Dominate the wasteland with advanced ESP, aimbot, and resource detection.",
      features: ["Advanced ESP", "Smart Aimbot", "Resource Scanner", "Player Tracker"],
    },
    {
      name: "Fortnite",
      rating: 4.8,
      users: "1.8M+",
      description: "Build faster, aim better, and secure more Victory Royales.",
      features: ["Soft Aim", "Build Helper", "Loot ESP", "Storm Predictor"],
    },
    {
      name: "Apex Legends",
      rating: 4.9,
      users: "1.5M+",
      description: "Become the champion with enhanced movement and precision aiming.",
      features: ["Legend ESP", "Weapon Stats", "Third Party Alert", "Ring Predictor"],
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
            Supported Games
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Calamari supports our premium games with regular updates and new features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportedGames.map((game, index) => (
            <motion.div
              key={game.name}
              className="bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
              <div className="flex items-center mb-4">
                <div className="text-amber-400 font-bold mr-2">{game.rating}</div>
                <div className="text-gray-400 text-sm">{game.users}</div>
              </div>
              <p className="text-gray-300 mb-4">{game.description}</p>
              <ul className="space-y-2">
                {game.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
