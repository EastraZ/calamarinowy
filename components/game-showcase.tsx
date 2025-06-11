"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Star, Users, Zap } from "lucide-react"

const games = [
  {
    id: 1,
    name: "Rust",
    image: "/placeholder.svg?height=300&width=400",
    players: "1.2M+",
    rating: 4.9,
    features: ["Aimbot Pro", "ESP Vision", "Recoil Control", "Loot ESP"],
    color: "from-orange-500 to-red-500",
    description: "Dominate the wasteland with our advanced Rust enhancements",
  },
  {
    id: 2,
    name: "Fortnite",
    image: "/placeholder.svg?height=300&width=400",
    players: "800K+",
    rating: 4.8,
    features: ["Build ESP", "Player Tracking", "Weapon Stats", "Storm Predictor"],
    color: "from-blue-500 to-purple-500",
    description: "Build, fight, and win with our Fortnite game-changers",
  },
  {
    id: 3,
    name: "Apex Legends",
    image: "/placeholder.svg?height=300&width=400",
    players: "600K+",
    rating: 4.9,
    features: ["Legend Abilities", "Third Party Alert", "Loot Tier ESP", "Ring Predictor"],
    color: "from-red-500 to-orange-500",
    description: "Become the champion with our Apex Legends toolkit",
  },
  {
    id: 4,
    name: "Valorant",
    image: "/placeholder.svg?height=300&width=400",
    players: "700K+",
    rating: 4.7,
    features: ["Crosshair Placement", "Ability Timers", "Economy Tracker", "Spike Timer"],
    color: "from-red-500 to-pink-500",
    description: "Precision and strategy combined for Valorant mastery",
  },
]

export default function GameShowcase() {
  const [activeGame, setActiveGame] = useState(0)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Game Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience Calamari's power across your favorite games
          </p>
        </motion.div>

        {/* Game Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {games.map((game, index) => (
            <motion.button
              key={game.id}
              onClick={() => setActiveGame(index)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeGame === index
                  ? `bg-gradient-to-r ${game.color} text-white`
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {game.name}
            </motion.button>
          ))}
        </div>

        {/* Game Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGame}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Game Image */}
            <motion.div className="relative rounded-2xl overflow-hidden" whileHover={{ scale: 1.02 }}>
              <img
                src={games[activeGame].image || "/placeholder.svg"}
                alt={games[activeGame].name}
                className="w-full h-80 object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${games[activeGame].color} opacity-20`} />
              <motion.div
                className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-full p-3"
                whileHover={{ scale: 1.1 }}
              >
                <Play className="h-6 w-6 text-white" />
              </motion.div>
            </motion.div>

            {/* Game Info */}
            <div>
              <motion.h3
                className={`text-4xl font-bold bg-gradient-to-r ${games[activeGame].color} bg-clip-text text-transparent mb-4`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {games[activeGame].name}
              </motion.h3>

              <motion.p
                className="text-gray-300 text-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {games[activeGame].description}
              </motion.p>

              {/* Stats */}
              <motion.div
                className="flex items-center space-x-6 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-white font-bold">{games[activeGame].players}</span>
                  <span className="text-gray-400 ml-1">players</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-white font-bold">{games[activeGame].rating}</span>
                  <span className="text-gray-400 ml-1">rating</span>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                className="grid grid-cols-2 gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {games[activeGame].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3"
                    whileHover={{ scale: 1.02, borderColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <Zap className={`h-4 w-4 mr-2 bg-gradient-to-r ${games[activeGame].color} bg-clip-text`} />
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
