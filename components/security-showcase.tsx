"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, Fingerprint, Server, RefreshCw } from "lucide-react"

export default function SecurityShowcase() {
  const [mounted, setMounted] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "HWID Spoofing",
      description: "Advanced hardware ID spoofing to prevent bans and tracking",
      icon: <Fingerprint className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Kernel-Level Protection",
      description: "Operates at the kernel level to avoid detection by anti-cheat systems",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Encrypted Connection",
      description: "End-to-end encrypted connection to our secure servers",
      icon: <Lock className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Stealth Mode",
      description: "Undetectable operation that leaves no traces on your system",
      icon: <Eye className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
  ]

  useEffect(() => {
    setMounted(true)

    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)

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
          Unmatched Security
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Our advanced security features keep you protected and undetected
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`bg-black/40 backdrop-blur-sm border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? `border-${feature.color.split(" ")[0].replace("from-", "")} shadow-lg shadow-${feature.color.split(" ")[0].replace("from-", "")}/10`
                    : "border-gray-800 hover:border-gray-700"
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} mr-4 text-white`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Server className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-blue-400 font-medium">Security Status</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse" />
                  <span className="text-green-500 text-sm">Active</span>
                </div>
              </div>

              <div className="bg-black/60 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">HWID Protection</span>
                  <span className="text-green-400">Enabled</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Kernel Mode</span>
                  <span className="text-green-400">Active</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Connection</span>
                  <span className="text-green-400">Encrypted</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Last Scan</span>
                  <span className="text-blue-400">2 minutes ago</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="flex items-center text-sm bg-blue-500/20 text-blue-400 px-3 py-1.5 rounded-lg hover:bg-blue-500/30 transition-colors">
                  <RefreshCw className="w-3 h-3 mr-1" />
                  Refresh Status
                </button>
                <div className="text-gray-400 text-sm">Updated: Just now</div>
              </div>
            </div>

            {/* Animated security scan effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0 pointer-events-none"
              animate={{
                y: ["100%", "-100%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
