"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Zap, CheckCircle } from "lucide-react"

export default function SecurityShowcase() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Advanced Stealth Technology",
      description: "Our proprietary stealth engine makes detection virtually impossible",
      status: "Active",
      color: "text-green-400",
    },
    {
      icon: Lock,
      title: "Encrypted Communication",
      description: "All data transmission is encrypted with military-grade security",
      status: "Secured",
      color: "text-blue-400",
    },
    {
      icon: Eye,
      title: "Anti-Screenshot Protection",
      description: "Prevents detection through screenshot analysis and monitoring",
      status: "Protected",
      color: "text-purple-400",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Instant security patches and anti-cheat bypasses",
      status: "Live",
      color: "text-yellow-400",
    },
  ]

  const detectionStats = [
    { game: "Rust", status: "Undetected", days: 847, color: "text-green-400" },
    { game: "Fortnite", status: "Undetected", days: 623, color: "text-green-400" },
    { game: "Apex Legends", status: "Undetected", days: 734, color: "text-green-400" },
    { game: "Valorant", status: "Undetected", days: 456, color: "text-green-400" },
    { game: "CS:GO", status: "Undetected", days: 912, color: "text-green-400" },
    { game: "PUBG", status: "Undetected", days: 567, color: "text-green-400" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-black/50 to-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Unmatched Security
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our advanced security measures ensure you stay undetected while dominating your games
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Security Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Security Features</h3>
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  className="bg-black/60 border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-white/10 ${feature.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">{feature.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${feature.color} bg-white/10`}>
                          {feature.status}
                        </span>
                      </div>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Detection Status */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Detection Status</h3>
            <div className="bg-black/60 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-bold text-white">Game Status</h4>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-green-400 font-bold">All Clear</span>
                </div>
              </div>

              <div className="space-y-4">
                {detectionStats.map((game, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-medium text-white">{game.game}</span>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold ${game.color}`}>{game.status}</div>
                      <div className="text-sm text-gray-400">{game.days} days</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="font-bold text-green-400">Security Guarantee</span>
                </div>
                <p className="text-sm text-gray-300">
                  If you ever get detected while using Calamari, we'll provide a full refund and extend your
                  subscription for free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
