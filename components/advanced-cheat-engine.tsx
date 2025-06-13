"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cpu, Shield, Eye, Target, Code, Wifi } from "lucide-react"

const icons = {
  Code: Code,
  Target: Target,
  Eye: Eye,
  Shield: Shield,
} as const

export default function AdvancedCheatEngine() {
  const [activeTab, setActiveTab] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)

  const engineFeatures = [
    {
      id: "injection",
      name: "Memory Injection",
      icon: "Code" as keyof typeof icons,
      color: "from-blue-500 to-cyan-500",
      description: "Advanced kernel-level memory injection bypassing all modern anti-cheats",
      stats: {
        "Injection Speed": "0.003ms",
        "Detection Rate": "0.0%",
        "Success Rate": "99.97%",
        "Memory Footprint": "2.1MB",
      },
      features: [
        "Kernel Driver Injection",
        "Manual DLL Mapping",
        "Process Hollowing",
        "Reflective DLL Loading",
        "HWID Masking",
      ],
    },
    {
      id: "aimbot",
      name: "Neural Aimbot",
      icon: "Target" as keyof typeof icons,
      color: "from-red-500 to-orange-500",
      description: "AI-powered aimbot with human-like movement patterns and prediction",
      stats: {
        Accuracy: "99.8%",
        "Reaction Time": "12ms",
        Prediction: "Advanced",
        Smoothing: "Dynamic",
      },
      features: [
        "Bone Prioritization",
        "Recoil Compensation",
        "Bullet Drop Calculation",
        "Movement Prediction",
        "Visibility Checks",
      ],
    },
    {
      id: "esp",
      name: "Visual ESP",
      icon: "Eye" as keyof typeof icons,
      color: "from-green-500 to-emerald-500",
      description: "Advanced ESP system with customizable overlays and distance calculations",
      stats: {
        "Render Distance": "2000m",
        "FPS Impact": "<1%",
        "Objects Tracked": "Unlimited",
        "Update Rate": "144Hz",
      },
      features: ["Player ESP", "Item ESP", "Vehicle ESP", "Distance Indicators", "Health Bars"],
    },
    {
      id: "protection",
      name: "Anti-Detection",
      icon: "Shield" as keyof typeof icons,
      color: "from-purple-500 to-pink-500",
      description: "Multi-layered protection system against all major anti-cheat engines",
      stats: {
        "Protection Layers": "7",
        "Bypass Rate": "100%",
        "Update Frequency": "Real-time",
        "Detection Events": "0",
      },
      features: ["EAC Bypass", "BattlEye Bypass", "VAC Bypass", "Memory Encryption", "Process Hiding"],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsProcessing(true)
      setTimeout(() => setIsProcessing(false), 1000)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container mx-auto px-4 py-20 relative z-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          Advanced Cheat Engine
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          Cutting-edge technology powering the most sophisticated gaming enhancements
        </p>
      </motion.div>

      {/* Engine Status */}
      <motion.div
        className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div
              className={`w-3 h-3 rounded-full mr-3 ${isProcessing ? "bg-yellow-400 animate-pulse" : "bg-green-400"}`}
            />
            <span className="text-white font-bold">
              {isProcessing ? "Processing Injections..." : "Engine Status: ACTIVE"}
            </span>
          </div>
          <div className="text-green-400 font-mono text-sm">{isProcessing ? "INJECTING" : "READY"}</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">1,547</div>
            <div className="text-gray-400 text-sm">Active Sessions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">100%</div>
            <div className="text-gray-400 text-sm">Bypass Success</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">0.003s</div>
            <div className="text-gray-400 text-sm">Injection Time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">7</div>
            <div className="text-gray-400 text-sm">Protection Layers</div>
          </div>
        </div>
      </motion.div>

      {/* Feature Tabs */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {engineFeatures.map((feature, index) => {
            const IconComponent = icons[feature.icon]
            return (
              <motion.button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
                style={
                  activeTab === index
                    ? {
                        backgroundImage: `linear-gradient(to right, ${feature.color.split(" ")[1]}, ${feature.color.split(" ")[3]})`,
                      }
                    : {}
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="h-5 w-5 inline mr-2" />
                {feature.name}
              </motion.button>
            )
          })}
        </div>

        {/* Active Feature Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${engineFeatures[activeTab].color} flex items-center justify-center mr-6`}
                >
                  {(() => {
                    const IconComponent = icons[engineFeatures[activeTab].icon]
                    return <IconComponent className="h-8 w-8 text-white" />
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{engineFeatures[activeTab].name}</h3>
                  <p className="text-gray-300">{engineFeatures[activeTab].description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Stats */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Performance Metrics</h4>
                  <div className="space-y-3">
                    {Object.entries(engineFeatures[activeTab].stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-300">{key}</span>
                        <span className="text-white font-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4">Core Features</h4>
                  <div className="space-y-3">
                    {engineFeatures[activeTab].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center p-3 bg-white/5 rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${engineFeatures[activeTab].color} mr-3`}
                        />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Real-time Processing Visualization */}
      <motion.div
        className="mt-12 bg-black/60 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-4">
          <Cpu className="h-6 w-6 text-green-400 mr-3" />
          <h4 className="text-lg font-bold text-white">Real-time Engine Monitoring</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-400 font-medium">Memory Usage</span>
              <span className="text-white font-bold">2.1MB</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-green-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "15%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-400 font-medium">CPU Load</span>
              <span className="text-white font-bold">0.8%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-blue-400 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "8%" }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </div>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-400 font-medium">Network</span>
              <span className="text-white font-bold">Encrypted</span>
            </div>
            <div className="flex items-center">
              <Wifi className="h-4 w-4 text-purple-400 mr-2" />
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-4 bg-purple-400 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
