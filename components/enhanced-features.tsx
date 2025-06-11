"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Eye, Target, Cpu, Gamepad2, Lock, Rocket, Brain, Settings } from "lucide-react"
import { useState } from "react"

const enhancedFeatures = [
  {
    icon: Target,
    title: "AI Aimbot Pro",
    description: "Next-gen precision targeting",
    details:
      "Revolutionary AI-powered aimbot with machine learning algorithms that adapt to your playstyle. Features include bone selection, FOV customization, smoothness control, and human-like movement patterns.",
    color: "from-red-500 to-pink-500",
    stats: "99.8% Accuracy",
  },
  {
    icon: Eye,
    title: "Quantum ESP",
    description: "See everything, everywhere",
    details:
      "Advanced ESP system with quantum rendering technology. Display player locations, health, weapons, distance, and even predict enemy movements with our AI prediction engine.",
    color: "from-blue-500 to-cyan-500",
    stats: "360° Vision",
  },
  {
    icon: Shield,
    title: "Stealth Mode",
    description: "Invisible to all anti-cheat",
    details:
      "Military-grade stealth technology with real-time signature morphing, kernel-level protection, and advanced obfuscation that makes detection virtually impossible.",
    color: "from-green-500 to-emerald-500",
    stats: "100% Undetected",
  },
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Maximize your FPS",
    details:
      "Built-in performance optimization engine that boosts FPS by up to 40%, reduces input lag, and optimizes memory usage while running our enhancement tools.",
    color: "from-yellow-500 to-orange-500",
    stats: "+40% FPS",
  },
  {
    icon: Brain,
    title: "Neural Network",
    description: "AI learns your playstyle",
    details:
      "Advanced neural network that learns from your gameplay patterns to provide predictive assistance, smart target prioritization, and adaptive behavior optimization.",
    color: "from-purple-500 to-indigo-500",
    stats: "Smart AI",
  },
  {
    icon: Rocket,
    title: "Instant Injection",
    description: "Lightning-fast activation",
    details:
      "Revolutionary injection technology that activates in under 2 seconds with zero crashes, automatic game detection, and seamless integration with all supported titles.",
    color: "from-teal-500 to-blue-500",
    stats: "<2s Launch",
  },
  {
    icon: Lock,
    title: "Crypto Security",
    description: "Blockchain-level protection",
    details:
      "Cutting-edge cryptographic protection using blockchain technology to secure your account, encrypt communications, and protect against reverse engineering.",
    color: "from-orange-500 to-red-500",
    stats: "256-bit Encryption",
  },
  {
    icon: Settings,
    title: "Cloud Configs",
    description: "Sync across all devices",
    details:
      "Cloud-based configuration system that syncs your settings across all devices, includes pro player configs, and automatic backup with version control.",
    color: "from-pink-500 to-purple-500",
    stats: "Cloud Sync",
  },
  {
    icon: Gamepad2,
    title: "Multi-Platform",
    description: "Works on everything",
    details:
      "Universal compatibility with PC, mobile, and console platforms. Supports Rust, Fortnite, Apex Legends, CSGO, Valorant, Call of Duty, and 15+ more games.",
    color: "from-indigo-500 to-cyan-500",
    stats: "20+ Games",
  },
]

export default function EnhancedFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Cpu className="h-5 w-5 text-purple-400 mr-3" />
            <span className="text-base font-medium text-purple-300">Next-Generation Gaming Technology</span>
          </motion.div>

          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-8">
            Revolutionary Features
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced gaming enhancement suite ever created. Each feature is powered by cutting-edge
            AI and tested by professional esports players.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enhancedFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
              className="relative group cursor-pointer"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:rotate-1">
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={hoveredIndex === index ? { opacity: [0.1, 0.2, 0.1] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Icon with enhanced animation */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-full h-full text-white" />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    animate={hoveredIndex === index ? { x: "200%" } : {}}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                      {feature.title}
                    </h3>
                    <motion.div
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white text-xs font-bold`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {feature.stats}
                    </motion.div>
                  </div>

                  <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors text-lg">
                    {feature.description}
                  </p>

                  {/* Expandable details */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: selectedFeature === index ? "auto" : 0,
                      opacity: selectedFeature === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-gray-400 leading-relaxed">{feature.details}</p>
                    </div>
                  </motion.div>

                  {/* Click indicator */}
                  <motion.div
                    className="mt-4 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={hoveredIndex === index ? { y: [0, -2, 0] } : {}}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Click to learn more
                  </motion.div>
                </div>

                {/* Floating particles on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          y: [0, -30],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none blur-xl`}
                  animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional stats section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: "50M+", label: "Lines of Code", color: "from-blue-500 to-cyan-500" },
            { number: "99.9%", label: "Uptime Record", color: "from-green-500 to-emerald-500" },
            { number: "24/7", label: "Expert Support", color: "from-purple-500 to-pink-500" },
            { number: "0.5s", label: "Avg Response", color: "from-orange-500 to-red-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
