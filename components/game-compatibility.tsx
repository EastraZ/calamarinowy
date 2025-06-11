"use client"

import { motion } from "framer-motion"
import { CheckCircle, Monitor, Gamepad2, Smartphone } from "lucide-react"

export default function GameCompatibility() {
  const games = [
    {
      name: "Rust",
      logo: "🦀",
      status: "FULLY SUPPORTED",
      features: ["Aimbot", "ESP", "Radar", "No Recoil", "Speed Hack"],
      players: "782",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Fortnite",
      logo: "🏗️",
      status: "FULLY SUPPORTED",
      features: ["Aimbot", "ESP", "Build Assist", "Auto Loot", "Storm Prediction"],
      players: "355",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Apex Legends",
      logo: "🎯",
      status: "FULLY SUPPORTED",
      features: ["Aimbot", "ESP", "Radar", "Third Person", "Glow ESP"],
      players: "473",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "HWID Spoofer",
      logo: "🛡️",
      status: "UNIVERSAL",
      features: ["Hardware ID", "MAC Address", "Registry Clean", "BIOS Serial", "Disk Serial"],
      players: "ALL",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const platforms = [
    {
      icon: Monitor,
      name: "Windows PC",
      status: "SUPPORTED",
      color: "text-green-400",
    },
    {
      icon: Gamepad2,
      name: "Console",
      status: "SUPPORTED",
      color: "text-green-400",
    },
    {
      icon: Smartphone,
      name: "Mobile",
      status: "NOT SUPPORTED",
      color: "text-red-400",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Game Compatibility
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full support for the most popular PC games with dedicated features for each
          </p>
        </motion.div>

        {/* Platform Support */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <platform.icon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-bold text-white mb-2">{platform.name}</h3>
              <span className={`${platform.color} font-bold text-sm`}>{platform.status}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={index}
              className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Game Header */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{game.logo}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
                <motion.div
                  className={`px-3 py-1 rounded-full bg-gradient-to-r ${game.color} text-white text-xs font-bold inline-block`}
                  whileHover={{ scale: 1.1 }}
                >
                  {game.status}
                </motion.div>
              </div>

              {/* Active Players */}
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-white mb-1">{game.players}</div>
                <div className="text-gray-400 text-sm">Active Players</div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-white mb-3">Features:</h4>
                {game.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                  >
                    <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Status Indicator */}
              <motion.div
                className="mt-6 flex items-center justify-center"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2" />
                <span className="text-green-400 font-bold text-sm">ONLINE</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Compatibility Notice */}
        <motion.div
          className="mt-16 bg-blue-900/20 border border-blue-500/30 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">PC Gaming Focused</h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Calamari is exclusively designed for Windows PC gaming. We focus all our resources on delivering the best
            possible experience for desktop gamers.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Monitor className="h-8 w-8 text-blue-400" />
            <span className="text-blue-400 font-bold text-lg">Windows 10/11 Required</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
