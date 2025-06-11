"use client"

import { motion } from "framer-motion"
import { Cpu, Shield, Zap, Brain, Activity, Database, Network } from "lucide-react"

export default function TechnologyShowcase() {
  const technologies = [
    {
      icon: Brain,
      title: "Neural Network Engine",
      description: "Advanced AI that learns and adapts to your gameplay patterns",
      status: "ACTIVE",
      load: 87,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Quantum Encryption",
      description: "Military-grade security with quantum-resistant algorithms",
      status: "SECURED",
      load: 94,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Lightning Injection",
      description: "Sub-millisecond memory injection with zero detection",
      status: "OPTIMIZED",
      load: 76,
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Network,
      title: "Distributed Computing",
      description: "Cloud-powered processing for maximum performance",
      status: "CONNECTED",
      load: 91,
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const systemMetrics = [
    { label: "CPU Usage", value: 23, color: "text-green-400" },
    { label: "Memory", value: 45, color: "text-blue-400" },
    { label: "Network", value: 12, color: "text-purple-400" },
    { label: "Security", value: 100, color: "text-red-400" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 w-full h-full">
          {[...Array(400)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-blue-500/20"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Advanced Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by cutting-edge algorithms and next-generation computing infrastructure
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start space-x-6">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tech.color} p-4 flex-shrink-0`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <tech.icon className="w-full h-full text-white" />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white">{tech.title}</h3>
                    <span className="text-green-400 font-bold text-sm">{tech.status}</span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{tech.description}</p>

                  {/* Load indicator */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">System Load</span>
                      <span className="text-white font-bold">{tech.load}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.load}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real-time System Metrics */}
        <motion.div
          className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Real-time System Metrics</h3>
            <p className="text-gray-300">Live performance monitoring of our infrastructure</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {systemMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-900/50 rounded-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-700"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <motion.path
                      className={metric.color}
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      initial={{ strokeDasharray: "0 100" }}
                      whileInView={{ strokeDasharray: `${metric.value} 100` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-lg font-bold ${metric.color}`}>{metric.value}%</span>
                  </div>
                </div>
                <h4 className="text-white font-bold">{metric.label}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/30">
            <Cpu className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">99.99%</div>
            <div className="text-gray-300">System Uptime</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl border border-green-500/30">
            <Activity className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">&lt;1ms</div>
            <div className="text-gray-300">Response Time</div>
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/30">
            <Database className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-white mb-2">256-bit</div>
            <div className="text-gray-300">Encryption</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
