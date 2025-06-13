"use client"

import { motion } from "framer-motion"
import { Shield, Lock, RefreshCw, Fingerprint, FileCode, Layers } from "lucide-react"

export default function SecurityFeatures() {
  const securityFeatures = [
    {
      title: "HWID Spoofing",
      description: "Protect your hardware identity with advanced spoofing technology",
      icon: Fingerprint,
    },
    {
      title: "Memory Encryption",
      description: "Military-grade encryption for all memory operations",
      icon: Lock,
    },
    {
      title: "Kernel-Level Protection",
      description: "Operates at the deepest level of your system for maximum security",
      icon: Shield,
    },
    {
      title: "Signature Rotation",
      description: "Constantly changing signatures to avoid detection patterns",
      icon: RefreshCw,
    },
    {
      title: "Code Obfuscation",
      description: "Multi-layered code obfuscation to prevent reverse engineering",
      icon: FileCode,
    },
    {
      title: "Virtualization Layer",
      description: "Additional protection layer through system virtualization",
      icon: Layers,
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
          Undetectable Security
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          Our multi-layered security approach keeps you safe from any anti-cheat system
        </p>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
        {securityFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-colors"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-6 md:p-8 text-center"
        variants={itemVariants}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">100% Undetected Since 2023</h3>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our security systems have maintained a perfect record against all major anti-cheat systems including EAC,
          BattlEye, and Vanguard
        </p>
      </motion.div>
    </motion.section>
  )
}
