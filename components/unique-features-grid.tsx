"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Eye, Target, Lock, Cpu, Headphones, Monitor } from "lucide-react"

export default function UniqueFeaturesGrid() {
  const features = [
    {
      icon: Shield,
      title: "Kernel-Level Protection",
      description: "Deep system integration for maximum stealth and performance",
      color: "from-blue-500 to-cyan-500",
      stats: "Ring 0 Access",
    },
    {
      icon: Zap,
      title: "Real-Time Optimization",
      description: "Dynamic performance tuning based on your system specs",
      color: "from-green-500 to-emerald-500",
      stats: "Auto-Tune",
    },
    {
      icon: Eye,
      title: "Advanced Visual Engine",
      description: "Custom rendering pipeline for enhanced visual information",
      color: "from-purple-500 to-pink-500",
      stats: "4K Ready",
    },
    {
      icon: Target,
      title: "Neural Aim Assist",
      description: "Machine learning algorithms that adapt to your playstyle",
      color: "from-red-500 to-orange-500",
      stats: "AI Powered",
    },
    {
      icon: Lock,
      title: "Encrypted Communications",
      description: "Military-grade encryption for all data transmissions",
      color: "from-yellow-500 to-orange-500",
      stats: "256-bit AES",
    },
    {
      icon: Cpu,
      title: "Multi-Core Optimization",
      description: "Utilizes all available CPU cores for maximum efficiency",
      color: "from-indigo-500 to-purple-500",
      stats: "16 Core Support",
    },
    {
      icon: Headphones,
      title: "Audio Enhancement",
      description: "3D positional audio processing for competitive advantage",
      color: "from-pink-500 to-red-500",
      stats: "7.1 Surround",
    },
    {
      icon: Monitor,
      title: "Multi-Monitor Support",
      description: "Seamless operation across multiple display configurations",
      color: "from-teal-500 to-blue-500",
      stats: "8K Support",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Advanced Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge features that set Calamari apart from the competition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-full h-full text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                {feature.title}
              </h3>

              <motion.div
                className={`px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white text-xs font-bold mb-3 inline-block`}
                whileHover={{ scale: 1.1 }}
              >
                {feature.stats}
              </motion.div>

              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
