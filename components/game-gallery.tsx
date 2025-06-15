"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Users, Zap } from "lucide-react"

export default function GameGallery() {
  const [currentGame, setCurrentGame] = useState(0)

  const games = [
    {
      id: "rust",
      name: "Rust",
      title: "Calamari.lol Rust",
      description: "Dominate the wasteland with advanced survival tools",
      image: "/images/calamari-interface-1.png",
      features: ["Magic Bullet", "ESP", "No Recoil", "Speed Hack"],
      stats: { users: "15K+", rating: 4.9, uptime: "99.8%" },
      color: "from-orange-500 to-red-600",
    },
    {
      id: "fortnite",
      name: "Fortnite",
      title: "Calamari.lol Fortnite",
      description: "Build faster, aim better, and secure Victory Royales",
      image: "/images/calamari-fortnite-interface.png",
      features: ["Aimbot", "Wallhack", "Auto Build", "Item ESP"],
      stats: { users: "22K+", rating: 4.8, uptime: "99.9%" },
      color: "from-purple-500 to-blue-600",
    },
    {
      id: "apex",
      name: "Apex Legends",
      title: "Calamari.lol Apex",
      description: "Become the champion with precision tools",
      image: "/images/calamari-interface-3.png",
      features: ["Aimbot", "ESP", "No Recoil", "Radar"],
      stats: { users: "18K+", rating: 4.9, uptime: "99.7%" },
      color: "from-red-500 to-orange-600",
    },
  ]

  const nextGame = () => {
    setCurrentGame((prev) => (prev + 1) % games.length)
  }

  const prevGame = () => {
    setCurrentGame((prev) => (prev - 1 + games.length) % games.length)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
            Game Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose your weapon. Dominate your battlefield.</p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGame}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Game Interface */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-red-500/30 overflow-hidden shadow-2xl shadow-red-900/20">
                  <div className="relative aspect-video w-full">
                    <Image
                      src={games[currentGame].image || "/placeholder.svg"}
                      alt={games[currentGame].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Game Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${games[currentGame].color} opacity-20`} />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      NEW
                    </div>
                  </div>

                  {/* Game Info */}
                  <div className="p-6 bg-black/70">
                    <h3 className="text-2xl font-bold text-white mb-2">{games[currentGame].name}</h3>
                    <p className="text-gray-300 mb-4">{games[currentGame].description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {games[currentGame].features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">{games[currentGame].stats.users} users</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">{games[currentGame].stats.rating}/5</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Zap className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{games[currentGame].stats.uptime} uptime</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-4">{games[currentGame].title}</h3>
                  <p className="text-xl text-gray-300 mb-6">{games[currentGame].description}</p>
                </div>

                {/* Feature Details */}
                <div className="space-y-4">
                  {games[currentGame].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 px-8 bg-gradient-to-r ${games[currentGame].color} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open("https://calamari.mysellauth.com/", "_blank")}
                >
                  Get {games[currentGame].name} Now
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={prevGame}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <div className="flex space-x-2">
              {games.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGame(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentGame ? "bg-red-500" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextGame}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
