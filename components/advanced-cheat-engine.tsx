"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Crosshair, Eye, Zap, Cpu, BarChart, Shield } from "lucide-react"
import Image from "next/image"

export default function AdvancedCheatEngine() {
  const [mounted, setMounted] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "AI-Powered Aimbot",
      description: "Machine learning algorithm that mimics human aim patterns",
      icon: <Crosshair className="w-5 h-5" />,
    },
    {
      title: "Advanced ESP",
      description: "See players through walls with customizable options",
      icon: <Eye className="w-5 h-5" />,
    },
    {
      title: "Performance Boost",
      description: "Optimize your game for maximum FPS and reduced input lag",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Kernel-Level Operation",
      description: "Runs at the deepest level of your system for undetectability",
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      title: "Real-time Analytics",
      description: "Track your performance improvements with detailed statistics",
      icon: <BarChart className="w-5 h-5" />,
    },
    {
      title: "Anti-Detection System",
      description: "Multiple layers of protection against anti-cheat systems",
      icon: <Shield className="w-5 h-5" />,
    },
  ]

  useEffect(() => {
    setMounted(true)

    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [features.length])

  if (!mounted) return null

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          Advanced Cheat Engine
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Powered by cutting-edge technology for the ultimate gaming advantage
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="relative">
            <motion.div
              className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[400px]">
                <Image src="/images/calamari-box.png" alt="Calamari Cheat Engine" fill className="object-contain p-8" />

                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10" />

                {/* Scanning effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-red-500/0 via-red-500/20 to-red-500/0 pointer-events-none"
                  animate={{
                    y: ["100%", "-100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* HUD elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-32 h-32 border-2 border-red-500/30 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      borderColor: ["rgba(239, 68, 68, 0.3)", "rgba(239, 68, 68, 0.6)", "rgba(239, 68, 68, 0.3)"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="w-24 h-24 border-2 border-red-500/50 rounded-full flex items-center justify-center"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    >
                      <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
                        <Crosshair className="w-8 h-8 text-red-500" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Status indicators */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-red-500/30 rounded-lg px-3 py-2">
                  <div className="flex items-center text-red-400 text-xs font-bold">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
                    ENGINE ACTIVE
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-lg px-3 py-2">
                  <div className="flex items-center text-blue-400 text-xs font-bold">
                    <Shield className="w-3 h-3 mr-1" />
                    PROTECTED
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-red-500 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`bg-black/40 backdrop-blur-sm border rounded-xl p-5 transition-all duration-300 ${
                  activeFeature === index
                    ? "border-red-500 shadow-lg shadow-red-500/10"
                    : "border-gray-800 hover:border-gray-700"
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center">
                  <div
                    className={`p-3 rounded-lg ${
                      activeFeature === index ? "bg-gradient-to-br from-red-500 to-orange-500" : "bg-gray-800"
                    } mr-4 text-white`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
