"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Eye, Target, Cpu, Lock } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "AI Aimbot Pro",
    description: "Next-gen precision targeting for Rust, Fortnite & Apex",
    color: "from-red-500 to-pink-500",
    stats: "99.8% Accuracy",
  },
  {
    icon: Eye,
    title: "Quantum ESP",
    description: "See everything, everywhere in supported games",
    color: "from-blue-500 to-cyan-500",
    stats: "360° Vision",
  },
  {
    icon: Shield,
    title: "Stealth Mode",
    description: "Invisible to all anti-cheat systems",
    color: "from-green-500 to-emerald-500",
    stats: "100% Undetected",
  },
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Maximize your FPS in all games",
    color: "from-yellow-500 to-orange-500",
    stats: "+40% FPS",
  },
  {
    icon: Cpu,
    title: "HWID Spoofer",
    description: "Universal hardware ID protection",
    color: "from-purple-500 to-indigo-500",
    stats: "All Games",
  },
  {
    icon: Lock,
    title: "Crypto Security",
    description: "Blockchain-level protection",
    color: "from-orange-500 to-red-500",
    stats: "256-bit Encryption",
  },
]

export default function LightweightFeatures() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-8">
            Elite Features
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional-grade tools for Rust, Fortnite, and Apex Legends. Plus universal HWID spoofing for all games.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full transition-all duration-500 hover:bg-white/10 hover:border-white/20">
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
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

                <p className="text-gray-300 group-hover:text-gray-200 transition-colors text-lg">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
