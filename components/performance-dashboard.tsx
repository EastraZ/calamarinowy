"use client"

import { motion } from "framer-motion"
import { TrendingUp, Target, Zap, Shield } from "lucide-react"

export default function PerformanceDashboard() {
  const stats = [
    {
      icon: Target,
      label: "Accuracy Boost",
      value: "94.7%",
      change: "+12.3%",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: TrendingUp,
      label: "K/D Improvement",
      value: "3.8x",
      change: "+280%",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      label: "Reaction Time",
      value: "0.12s",
      change: "-45%",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      label: "Detection Rate",
      value: "0.0%",
      change: "Perfect",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <motion.section
      className="container mx-auto px-4 py-20 relative z-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Real-Time Performance
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          See how Calamari transforms your gaming performance with live metrics and analytics
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}
            >
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-gray-400 text-sm font-medium mb-2">{stat.label}</h3>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span
                className={`text-sm font-medium ${
                  stat.change.includes("+")
                    ? "text-green-400"
                    : stat.change.includes("-")
                      ? "text-red-400"
                      : "text-blue-400"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Live Performance Chart */}
      <motion.div
        className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">Performance Over Time</h3>
        <div className="h-64 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <TrendingUp className="h-8 w-8 text-white" />
            </motion.div>
            <p className="text-gray-300">Live performance tracking coming soon!</p>
            <p className="text-sm text-gray-500 mt-2">Real-time analytics dashboard in development</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
