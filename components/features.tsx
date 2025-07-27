"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Eye, Target, Cpu, Lock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "100% Undetected",
    description: "Advanced stealth technology keeps you safe from all anti-cheat systems",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Ready to use in under 30 seconds with our streamlined setup process",
  },
  {
    icon: Eye,
    title: "Advanced ESP",
    description: "See players through walls with customizable visual overlays",
  },
  {
    icon: Target,
    title: "Precision Aimbot",
    description: "Smooth, human-like aiming with customizable settings",
  },
  {
    icon: Cpu,
    title: "Performance Boost",
    description: "Optimize your game for maximum FPS and reduced input lag",
  },
  {
    icon: Lock,
    title: "Kernel-Level Security",
    description: "Runs at the deepest level of your system for maximum protection",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-red-900/10 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Calamari.lol Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced gaming enhancement tools available, designed for competitive players who demand
            the best.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300 group"
            >
              <feature.icon className="w-12 h-12 text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
