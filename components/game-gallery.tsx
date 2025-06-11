"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Star, Users, Trophy } from "lucide-react"

export default function GameGallery() {
  const [selectedGame, setSelectedGame] = useState(0)

  const games = [
    {
      name: "Rust",
      image: "/placeholder.svg?height=300&width=400",
      description: "Dominate the wasteland with advanced ESP, aimbot, and resource detection.",
      features: ["Advanced ESP", "Smart Aimbot", "Resource Scanner", "Player Tracker"],
      rating: 4.9,
      users: "2.1M+",
    },
    {
      name: "Fortnite",
      image: "/placeholder.svg?height=300&width=400",
      description: "Build faster, aim better, and secure more Victory Royales.",
      features: ["Soft Aim", "Build Helper", "Loot ESP", "Storm Predictor"],
      rating: 4.8,
      users: "1.8M+",
    },
    {
      name: "Apex Legends",
      image: "/placeholder.svg?height=300&width=400",
      description: "Become the champion with enhanced movement and precision aiming.",
      features: ["Legend ESP", "Weapon Stats", "Third Party Alert", "Ring Predictor"],
      rating: 4.9,
      users: "1.5M+",
    },
    {
      name: "Valorant",
      image: "/placeholder.svg?height=300&width=400",
      description: "Climb the ranks with tactical advantages and precise aim assistance.",
      features: ["Agent ESP", "Spike Timer", "Recoil Control", "Crosshair Sync"],
      rating: 4.7,
      users: "900K+",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Supported Games
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Calamari supports 30+ popular games with regular updates and new game additions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Game Selection */}
          <div className="space-y-4">
            {games.map((game, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  selectedGame === index
                    ? "bg-red-500/20 border-red-500/50"
                    : "bg-black/40 border-white/10 hover:border-white/30"
                }`}
                onClick={() => setSelectedGame(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{game.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>{game.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{game.users}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{game.description}</p>
                <div className="flex flex-wrap gap-2">
                  {game.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Game Preview */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedGame}
                className="relative rounded-2xl overflow-hidden bg-black/60 border border-white/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-red-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{games[selectedGame].name} Demo</h3>
                    <p className="text-gray-400">Watch gameplay footage</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">Key Features</h4>
                    <div className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5 text-yellow-400" />
                      <span className="text-yellow-400 font-bold">Premium</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {games[selectedGame].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
