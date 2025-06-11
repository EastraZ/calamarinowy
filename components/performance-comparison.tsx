"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react"

export default function PerformanceComparison() {
  const metrics = [
    {
      name: "Performance",
      otherProviders: "0%",
      calamari: "60%",
      advantage: "60% Faster",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Security",
      otherProviders: "Medium",
      calamari: "Maximum",
      advantage: "Enterprise-grade",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "CPU Usage",
      otherProviders: "High",
      calamari: "Low",
      advantage: "50% Less",
      icon: Cpu,
      color: "from-purple-500 to-violet-500",
    },
  ]

  return (
    <motion.section
      className="py-20 relative z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black -z-10"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,0,0.1),transparent_40%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,0,0,0.1),transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Performance Advantage
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Calamari outperforms the competition in every metric that matters
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Metrics comparison */}
          <motion.div
            className="bg-black/60 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-red-900/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-red-900/20 to-black border-b border-red-500/20">
              <div className="text-white font-bold">Metric</div>
              <div className="text-center text-gray-400 font-medium">Other Providers</div>
              <div className="text-center text-white font-bold">Calamari</div>
              <div className="text-center text-gray-400 font-medium">Advantage</div>
            </div>

            {/* Metrics */}
            <div className="divide-y divide-red-500/10">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-4 gap-4 p-6 hover:bg-red-500/5 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-lg`}
                    >
                      <metric.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-200 font-medium">{metric.name}</span>
                  </div>

                  <div className="flex items-center justify-center">
                    <motion.div
                      className="px-4 py-2 bg-gray-800/50 rounded-lg text-gray-400 border border-gray-700/50"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {metric.otherProviders}
                    </motion.div>
                  </div>

                  <div className="flex items-center justify-center">
                    <motion.div
                      className="px-4 py-2 bg-gradient-to-r from-red-900/30 to-red-700/30 rounded-lg text-white font-medium border border-red-500/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {metric.calamari}
                    </motion.div>
                  </div>

                  <div className="flex items-center justify-center">
                    <motion.div
                      className="flex items-center space-x-1 text-green-400"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <span>{metric.advantage}</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary */}
            <div className="p-6 bg-gradient-to-r from-red-900/20 to-black border-t border-red-500/20">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-gray-300 mb-4 md:mb-0">
                  <span className="text-white font-bold">Calamari</span> outperforms competitors in all key metrics
                </div>
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const plansSection = document.getElementById("subscription-plans")
                    if (plansSection) {
                      plansSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Experience the Difference
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
