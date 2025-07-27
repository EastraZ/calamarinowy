"use client"

import { motion } from "framer-motion"
import { Crosshair, Eye, Zap, Shield, Cpu, BarChart2 } from "lucide-react"

export default function MegaUltimateFeatures() {
  const features = [
    {
      title: "AI-Powered Aimbot",
      description:
        "Our advanced machine learning algorithm provides natural, human-like aim assistance that's undetectable by anti-cheat systems.",
      icon: Crosshair,
      color: "red",
    },
    {
      title: "Advanced ESP",
      description:
        "See enemies through walls with customizable ESP features including health bars, distance, names, and more.",
      icon: Eye,
      color: "blue",
    },
    {
      title: "Performance Boost",
      description: "Optimize your game with our performance enhancement tools that reduce input lag and increase FPS.",
      icon: Zap,
      color: "yellow",
    },
    {
      title: "HWID Spoofer",
      description: "Protect your hardware identity with our advanced spoofing technology that works across all games.",
      icon: Shield,
      color: "green",
    },
    {
      title: "Low Resource Usage",
      description:
        "Calamari is designed to use minimal system resources, ensuring your game runs smoothly while using our tools.",
      icon: Cpu,
      color: "purple",
    },
    {
      title: "Real-time Statistics",
      description:
        "Track your performance improvements with our built-in analytics dashboard showing your progress over time.",
      icon: BarChart2,
      color: "orange",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          Ultimate Features
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          Dominate every game with our comprehensive suite of gaming enhancement tools
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-colors"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className={`w-12 h-12 rounded-full bg-${feature.color}-500/20 flex items-center justify-center mb-4`}>
              <feature.icon className={`h-6 w-6 text-${feature.color}-400`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mt-16 text-center" variants={itemVariants}>
        <motion.button
          onClick={() => window.open("https://calamari.mysellauth.com/#products", "_blank")}
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get All Features Now
        </motion.button>
      </motion.div>
    </div>
  )
}
