"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Target, Eye } from "lucide-react"

export default function GameGallery() {
  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision Targeting",
      description: "Advanced AI-powered targeting system with customizable settings",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Enhanced Vision",
      description: "See through walls and obstacles with our ESP technology",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Boost",
      description: "Optimize your game performance for competitive advantage",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Undetected Security",
      description: "Military-grade encryption keeps you safe from detection",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-20 relative z-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          Core Features
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          Experience the most advanced gaming enhancement tools available
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div
              className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 text-white`}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
