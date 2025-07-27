"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Shield, Zap, Target, Settings, Activity } from "lucide-react"

export default function AdvancedCheatEngine() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const features = [
    {
      icon: <Target className="w-8 h-8 text-red-400" />,
      title: "Advanced ESP",
      description: "See players through walls with customizable visual overlays",
      details:
        "Our ESP system provides real-time player locations, health status, and equipment information with fully customizable visual elements.",
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-400" />,
      title: "Performance Boost",
      description: "Optimize your game for maximum FPS and responsiveness",
      details:
        "Advanced memory optimization and CPU prioritization ensure your game runs at peak performance while our tools operate seamlessly.",
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-400" />,
      title: "Kernel-Level Operation",
      description: "Runs at the deepest level of your system for maximum effectiveness",
      details:
        "Our kernel-level driver ensures undetectable operation and maximum compatibility with anti-cheat systems.",
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-400" />,
      title: "Real-time Analytics",
      description: "Track your performance improvements and statistics",
      details:
        "Comprehensive analytics dashboard showing your gameplay improvements, accuracy statistics, and performance metrics.",
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Anti-Detection System",
      description: "Multiple layers of protection against anti-cheat detection",
      details:
        "Advanced obfuscation, randomization, and stealth techniques keep you protected from all major anti-cheat systems.",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-red-900/10 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
            Calamari Engine
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most advanced gaming enhancement engine ever created
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Engine Interface Display */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-red-500/30 overflow-hidden shadow-2xl shadow-red-900/20">
              {/* Status Bar */}
              <div className="flex justify-between items-center p-4 bg-black/50 border-b border-red-500/20">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-400 font-bold text-sm">ENGINE ACTIVE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-blue-400 font-bold text-sm">PROTECTED</span>
                </div>
              </div>

              {/* Main Interface */}
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/calamari-fortnite-interface.png"
                  alt="Calamari Engine Interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />

                {/* Animated Scanning Line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/20 to-transparent pointer-events-none"
                  animate={{
                    y: ["100%", "-100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Corner Indicators */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-red-500/60"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-red-500/60"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-red-500/60"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-red-500/60"></div>
              </div>

              {/* Bottom Info Bar */}
              <div className="p-4 bg-black/70 border-t border-red-500/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/images/calamari-symbol.png"
                      alt="Calamari"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <span className="text-red-400 font-bold">CALAMARI ENGINE</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Status: <span className="text-red-400">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  activeFeature === index
                    ? "bg-gradient-to-r from-red-900/30 to-transparent border-red-500/50"
                    : "bg-white/5 border-white/10 hover:border-red-500/30"
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 mb-3">{feature.description}</p>
                    <AnimatePresence>
                      {activeFeature === index && (
                        <motion.p
                          className="text-gray-400 text-sm"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.details}
                        </motion.p>
                      )}
                    </AnimatePresence>
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
