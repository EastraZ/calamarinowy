"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Shield, Lock, CheckCircle, AlertTriangle } from "lucide-react"

export default function SecurityShowcase() {
  const [activeTab, setActiveTab] = useState("features")

  const securityFeatures = [
    {
      title: "Advanced Stealth Technology",
      description: "Our proprietary stealth engine makes detection virtually impossible",
      status: "Active",
      icon: Shield,
    },
    {
      title: "Encrypted Communication",
      description: "All data transmission is encrypted with military-grade security",
      status: "Secured",
      icon: Lock,
    },
    {
      title: "Anti-Screenshot Protection",
      description: "Prevents detection through screenshot analysis and monitoring",
      status: "Protected",
      icon: AlertTriangle,
    },
    {
      title: "Real-time Updates",
      description: "Instant security patches and anti-cheat bypasses",
      status: "Live",
      icon: CheckCircle,
    },
  ]

  // Only include supported games
  const supportedGames = [
    {
      name: "Rust",
      status: "Undetected",
      days: 847,
    },
    {
      name: "Fortnite",
      status: "Undetected",
      days: 623,
    },
    {
      name: "Apex Legends",
      status: "Undetected",
      days: 734,
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>

      {/* Animated security grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="border border-green-500/10"
              style={{
                animation: `pulse ${Math.random() * 3 + 2}s infinite alternate ${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Unmatched Security
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Our advanced security measures ensure you stay undetected while dominating your games
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Security Features */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 h-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Security Features</h3>
              <div className="space-y-6">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <feature.icon className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <h4 className="text-xl font-semibold text-white mr-3">{feature.title}</h4>
                        <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded">
                          {feature.status}
                        </span>
                      </div>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Security Guarantee */}
          <div>
            <motion.div
              className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6 mb-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Security Guarantee</h3>
              <p className="text-gray-300 mb-4">
                If you ever get detected while using Calamari, we'll provide a full refund and extend your subscription
                for free.
              </p>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">100% Detection-Free Guarantee</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Current Status</h3>
                <span className="flex items-center text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  All Clear
                </span>
              </div>
              <div className="space-y-3">
                {supportedGames.map((game, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-800/50 last:border-0"
                  >
                    <span className="text-gray-300">{game.name}</span>
                    <div className="text-right">
                      <div className="text-green-400 font-medium">{game.status}</div>
                      <div className="text-gray-500 text-sm">{game.days} days</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
