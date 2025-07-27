"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Eye, Target, Cpu, Gamepad2 } from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: Target,
    title: "Advanced Aimbot",
    description: "Precision targeting with customizable settings",
    details:
      "Our AI-powered aimbot provides smooth, human-like aiming with adjustable FOV, smoothness, and bone selection. Completely undetectable with advanced anti-cheat bypass.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Eye,
    title: "ESP & Wallhacks",
    description: "See through walls and track enemies",
    details:
      "Advanced ESP system showing player locations, health, weapons, and distance. Customizable colors and visibility options with performance optimization.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Undetected Security",
    description: "Military-grade protection systems",
    details:
      "Our proprietary anti-detection technology uses advanced obfuscation, kernel-level protection, and real-time signature updates to stay ahead of anti-cheat systems.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Optimize your game performance",
    details:
      "Built-in FPS optimization, memory management, and system tweaks to ensure smooth gameplay while running our enhancement tools.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Cpu,
    title: "AI-Enhanced Features",
    description: "Machine learning powered enhancements",
    details:
      "Our AI algorithms learn from gameplay patterns to provide predictive assistance, smart target selection, and adaptive behavior that mimics human play.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Gamepad2,
    title: "Multi-Game Support",
    description: "Works across multiple popular games",
    details:
      "Support for Rust, Fortnite, Apex Legends, CSGO, Valorant, and more. Single subscription gives you access to all supported games with regular updates.",
    color: "from-teal-500 to-blue-500",
  },
]

export default function InteractiveFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Advanced Gaming Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the next generation of game enhancement tools powered by cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105">
                {/* Icon with gradient background */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">{feature.description}</p>

                {/* Expandable details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredIndex === index ? "auto" : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-400">{feature.details}</p>
                  </div>
                </motion.div>

                {/* Floating particles on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${feature.color} rounded-full`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
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
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
