"use client"

import { motion } from "framer-motion"
import { Check, Gamepad2, Monitor, Cpu } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"
import Image from "next/image"

export default function GamesSupportedPage() {
  const games = [
    {
      name: "Rust",
      image: "/images/calamari-diagonal.png",
      status: "Fully Supported",
      features: ["Aimbot", "ESP", "Recoil Control", "Item ESP", "Player Radar", "Admin Detection"],
      platforms: {
        pc: true,
        console: true,
      },
      requirements: "Windows 10/11, 4GB RAM, Intel i5 or AMD equivalent",
    },
    {
      name: "Fortnite",
      image: "/images/calamari-diagonal.png",
      status: "Fully Supported",
      features: ["Aimbot", "ESP", "Build Assist", "Loot ESP", "Player Tracker", "Storm Warning"],
      platforms: {
        pc: true,
        console: true,
      },
      requirements: "Windows 10/11, 8GB RAM, Intel i5 or AMD equivalent",
    },
    {
      name: "Apex Legends",
      image: "/images/calamari-diagonal.png",
      status: "Fully Supported",
      features: ["Aimbot", "ESP", "Recoil Control", "Item ESP", "Enemy Tracker", "Ultimate Timer"],
      platforms: {
        pc: true,
        console: true,
      },
      requirements: "Windows 10/11, 8GB RAM, Intel i7 or AMD equivalent",
    },
    {
      name: "Call of Duty: Warzone",
      image: "/images/calamari-diagonal.png",
      status: "Fully Supported",
      features: ["Aimbot", "ESP", "Recoil Control", "Loot ESP", "UAV Always On", "Heartbeat Sensor"],
      platforms: {
        pc: true,
        console: true,
      },
      requirements: "Windows 10/11, 16GB RAM, Intel i7 or AMD equivalent",
    },
    {
      name: "Counter-Strike 2",
      image: "/images/calamari-diagonal.png",
      status: "Fully Supported",
      features: ["Aimbot", "ESP", "Recoil Control", "Sound ESP", "Radar Hack", "Anti-Flash"],
      platforms: {
        pc: true,
        console: false,
      },
      requirements: "Windows 10/11, 8GB RAM, Intel i5 or AMD equivalent",
    },
    {
      name: "Valorant",
      image: "/images/calamari-diagonal.png",
      status: "Fully Supported",
      features: ["Aimbot", "ESP", "Recoil Control", "Ability Tracker", "Spike Timer", "Ultimate Counter"],
      platforms: {
        pc: true,
        console: false,
      },
      requirements: "Windows 10/11, 8GB RAM, Intel i5 or AMD equivalent",
    },
    {
      name: "PUBG",
      image: "/images/calamari-diagonal.png",
      status: "Fully Supported",
      features: ["Aimbot", "ESP", "Recoil Control", "Vehicle ESP", "Loot ESP", "Zone Predictor"],
      platforms: {
        pc: true,
        console: true,
      },
      requirements: "Windows 10/11, 8GB RAM, Intel i5 or AMD equivalent",
    },
    {
      name: "Escape from Tarkov",
      image: "/images/calamari-diagonal.png",
      status: "Fully Supported",
      features: ["Aimbot", "ESP", "Recoil Control", "Item ESP", "Extraction Points", "Scav Detection"],
      platforms: {
        pc: true,
        console: false,
      },
      requirements: "Windows 10/11, 16GB RAM, Intel i7 or AMD equivalent",
    },
    {
      name: "Rainbow Six Siege",
      image: "/images/calamari-diagonal.png",
      status: "Fully Supported",
      features: ["Aimbot", "ESP", "Recoil Control", "Gadget ESP", "Operator Detection", "Defuser Timer"],
      platforms: {
        pc: true,
        console: true,
      },
      requirements: "Windows 10/11, 8GB RAM, Intel i5 or AMD equivalent",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute inset-0 opacity-30">
            <MatrixRain />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Supported Games
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Calamari supports a wide range of popular games with specialized features for each title
            </motion.p>
          </motion.div>

          {/* Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {games.map((game, index) => (
              <motion.div
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 mr-4 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                      <Image
                        src={game.image || "/placeholder.svg"}
                        alt={game.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{game.name}</h3>
                      <span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        {game.status}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Supported Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {game.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-4 h-4 bg-green-500/20 rounded-full flex items-center justify-center mr-2">
                            <Check className="h-3 w-3 text-green-400" />
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Platforms</h4>
                    <div className="flex space-x-4">
                      <div className="flex items-center text-sm text-gray-300">
                        <Monitor className="h-4 w-4 mr-1 text-blue-400" />
                        PC
                        <div
                          className={`w-3 h-3 ml-1 rounded-full ${game.platforms.pc ? "bg-green-500" : "bg-red-500"}`}
                        ></div>
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <Gamepad2 className="h-4 w-4 mr-1 text-purple-400" />
                        Console
                        <div
                          className={`w-3 h-3 ml-1 rounded-full ${
                            game.platforms.console ? "bg-green-500" : "bg-red-500"
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">System Requirements</h4>
                    <div className="flex items-start text-sm text-gray-300">
                      <Cpu className="h-4 w-4 mr-2 mt-0.5 text-gray-400" />
                      {game.requirements}
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-red-600 to-red-500"></div>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're constantly expanding our game support. Here's what's coming next:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Overwatch 2", "Battlefield 2042", "Halo Infinite", "League of Legends"].map((game, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl overflow-hidden shadow-lg p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="relative w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
                    <Image
                      src="/images/calamari-diagonal.png"
                      alt={game}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white">{game}</h3>
                  <span className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full mt-2">
                    In Development
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Request Game Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Don't See Your Game?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Request support for your favorite game and our development team will consider adding it to our lineup.
            </p>
            <motion.a
              href="/feature-requests"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Game
            </motion.a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
