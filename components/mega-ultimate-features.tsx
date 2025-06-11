"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Shield,
  Zap,
  Eye,
  Target,
  Gamepad2,
  Lock,
  Rocket,
  Brain,
  Wifi,
  Cloud,
  Trophy,
  Sparkles,
  Cpu,
  Activity,
} from "lucide-react"

const megaFeatures = [
  {
    icon: Target,
    title: "AI Aimbot Pro",
    description: "Next-generation precision targeting with quantum algorithms",
    color: "from-red-500 to-pink-500",
    stats: "99.9% Accuracy",
    tech: "Neural Network",
  },
  {
    icon: Eye,
    title: "Quantum ESP Vision",
    description: "Advanced enemy detection with predictive positioning",
    color: "from-blue-500 to-cyan-500",
    stats: "360° Vision",
    tech: "Quantum Processing",
  },
  {
    icon: Shield,
    title: "Stealth Mode Ultra",
    description: "Military-grade invisibility to all anti-cheat systems",
    color: "from-green-500 to-emerald-500",
    stats: "100% Safe",
    tech: "Advanced Encryption",
  },
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Maximize your FPS and minimize system latency",
    color: "from-yellow-500 to-orange-500",
    stats: "+60% FPS",
    tech: "System Optimization",
  },
  {
    icon: Brain,
    title: "Neural Network AI",
    description: "Machine learning that adapts to your playstyle",
    color: "from-purple-500 to-indigo-500",
    stats: "Smart AI",
    tech: "Deep Learning",
  },
  {
    icon: Rocket,
    title: "Instant Injection",
    description: "Lightning-fast activation with zero delay",
    color: "from-teal-500 to-blue-500",
    stats: "<1s Launch",
    tech: "Direct Memory",
  },
  {
    icon: Lock,
    title: "Crypto Security",
    description: "Blockchain-level protection and data encryption",
    color: "from-orange-500 to-red-500",
    stats: "256-bit Safe",
    tech: "AES Encryption",
  },
  {
    icon: Cloud,
    title: "Cloud Sync Pro",
    description: "Synchronize configurations across all devices",
    color: "from-pink-500 to-purple-500",
    stats: "Cloud Sync",
    tech: "Real-time Sync",
  },
  {
    icon: Gamepad2,
    title: "Multi-Platform",
    description: "Universal compatibility across gaming platforms",
    color: "from-indigo-500 to-cyan-500",
    stats: "25+ Games",
    tech: "Cross-Platform",
  },
  {
    icon: Wifi,
    title: "Network Optimizer",
    description: "Advanced packet routing and latency reduction",
    color: "from-blue-400 to-teal-400",
    stats: "-50% Ping",
    tech: "Network Stack",
  },
  {
    icon: Trophy,
    title: "Pro Player Configs",
    description: "Tournament-grade configurations from esports pros",
    color: "from-amber-400 to-yellow-400",
    stats: "Pro Level",
    tech: "Esports Grade",
  },
  {
    icon: Activity,
    title: "Real-time Analytics",
    description: "Advanced performance monitoring and statistics",
    color: "from-fuchsia-400 to-pink-400",
    stats: "Live Data",
    tech: "Analytics Engine",
  },
]

export default function MegaUltimateFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900/20 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Tech particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 4}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          >
            {Math.random() > 0.5 ? "◆" : "●"}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Cpu className="h-5 w-5 text-blue-400 mr-2" />
            <span className="text-lg font-medium text-blue-300">ADVANCED FEATURES</span>
            <Sparkles className="h-5 w-5 text-purple-400 ml-2" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Ultimate Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience cutting-edge gaming enhancement technology powered by advanced algorithms and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {megaFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
              className="relative group cursor-pointer"
            >
              <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-500 hover:bg-black/80 hover:border-white/20 hover:scale-105">
                {/* Tech badge */}
                <div className="absolute -top-3 -right-3 text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full font-bold">
                  {feature.tech}
                </div>

                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={hoveredIndex === index ? { opacity: [0.05, 0.15, 0.05] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Icon with tech animation */}
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-full h-full text-white" />

                  {/* Tech scan effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    animate={hoveredIndex === index ? { x: "200%" } : {}}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors mb-2">
                    {feature.title}
                  </h3>

                  <motion.div
                    className={`px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white text-xs font-bold mb-3 inline-block`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {feature.stats}
                  </motion.div>

                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Expanded info */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: selectedFeature === index ? "auto" : 0,
                      opacity: selectedFeature === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-3"
                  >
                    <div className="border-t border-white/10 pt-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Status:</span>
                        <span className="text-green-400 font-bold">ACTIVE</span>
                      </div>
                      <div className="flex items-center justify-between text-xs mt-1">
                        <span className="text-gray-400">Load:</span>
                        <span className="text-blue-400 font-bold">{Math.floor(Math.random() * 30 + 70)}%</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Tech grid pattern */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none opacity-10">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl">
                      <div className="grid grid-cols-8 grid-rows-8 w-full h-full gap-1 p-2">
                        {[...Array(64)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="bg-white/20 rounded-sm"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                              duration: 0.5,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Enhanced glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none blur-xl`}
                  animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stats section */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: "1M+", label: "Active Users", icon: "👥", color: "from-blue-500 to-cyan-500" },
            { number: "99.9%", label: "Uptime", icon: "⚡", color: "from-green-500 to-emerald-500" },
            { number: "24/7", label: "Support", icon: "🛠️", color: "from-purple-500 to-pink-500" },
            { number: "∞", label: "Performance", icon: "🚀", color: "from-orange-500 to-red-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-colors"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <motion.div
                className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
