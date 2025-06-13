"use client"

import { motion } from "framer-motion"
import { Shield, Cpu, Zap, Eye, Crosshair, Lock } from "lucide-react"

export default function TechnologyShowcase() {
  const technologies = [
    {
      title: "AI-Powered Targeting",
      description: "Advanced machine learning algorithms for natural, human-like aim assistance",
      icon: Crosshair,
      color: "red",
    },
    {
      title: "Kernel-Level Protection",
      description: "Operates at the deepest level of your system for maximum security",
      icon: Shield,
      color: "blue",
    },
    {
      title: "Memory Encryption",
      description: "Military-grade encryption for all memory operations",
      icon: Lock,
      color: "green",
    },
    {
      title: "Optimized Performance",
      description: "Minimal system impact with maximum enhancement capabilities",
      icon: Cpu,
      color: "purple",
    },
    {
      title: "Real-Time Adaptation",
      description: "Instantly adapts to game updates and anti-cheat changes",
      icon: Zap,
      color: "yellow",
    },
    {
      title: "Advanced Visualization",
      description: "Customizable ESP and overlay systems for perfect information",
      icon: Eye,
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
    <motion.section
      className="container mx-auto px-4 py-20 relative z-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          Cutting-Edge Technology
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          Calamari leverages the most advanced technologies to provide undetectable enhancements
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className={`w-12 h-12 rounded-full bg-${tech.color}-500/20 flex items-center justify-center mb-4`}>
              <tech.icon className={`h-6 w-6 text-${tech.color}-400`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{tech.title}</h3>
            <p className="text-gray-300">{tech.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
