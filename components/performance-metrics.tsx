"use client"

import { motion } from "framer-motion"
import { TrendingUp, Zap, Monitor, Cpu, MemoryStick } from "lucide-react"
import { useState, useEffect } from "react"

export default function PerformanceMetrics() {
  const [metrics, setMetrics] = useState({
    fps: 240,
    cpuUsage: 15,
    memoryUsage: 2.1,
    latency: 8,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        fps: prev.fps + Math.floor(Math.random() * 10) - 5,
        cpuUsage: Math.max(10, Math.min(25, prev.cpuUsage + Math.floor(Math.random() * 6) - 3)),
        memoryUsage: Math.max(1.5, Math.min(3.0, prev.memoryUsage + (Math.random() - 0.5) * 0.2)),
        latency: Math.max(5, Math.min(15, prev.latency + Math.floor(Math.random() * 4) - 2)),
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const performanceFeatures = [
    {
      icon: Zap,
      title: "FPS Optimization",
      description: "Boost your frame rate by up to 60%",
      value: `+${Math.floor(((metrics.fps - 180) / 180) * 100)}%`,
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Cpu,
      title: "CPU Efficiency",
      description: "Minimal system resource usage",
      value: `${metrics.cpuUsage}%`,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MemoryStick,
      title: "Memory Usage",
      description: "Lightweight memory footprint",
      value: `${metrics.memoryUsage.toFixed(1)}GB`,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Monitor,
      title: "Input Latency",
      description: "Ultra-low input delay",
      value: `${metrics.latency}ms`,
      color: "from-purple-500 to-indigo-500",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center bg-blue-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="h-5 w-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">PERFORMANCE OPTIMIZED</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Peak Performance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience gaming like never before with our advanced performance optimization technology
          </p>
        </motion.div>

        {/* Real-time Performance Dashboard */}
        <motion.div
          className="bg-black/80 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Live Performance Monitor</h3>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-green-400 font-bold">OPTIMIZED</span>
            </div>
          </div>

          {/* Performance Graph Simulation */}
          <div className="bg-gray-900/50 rounded-xl p-6 mb-6">
            <div className="flex items-end justify-between h-32 space-x-2">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-sm flex-1"
                  style={{ height: `${Math.random() * 80 + 20}%` }}
                  animate={{ height: [`${Math.random() * 80 + 20}%`, `${Math.random() * 80 + 20}%`] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 }}
                />
              ))}
            </div>
            <div className="text-center mt-4">
              <span className="text-gray-400 text-sm">FPS Over Time</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </motion.div>
                  <motion.div
                    className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                    key={feature.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.value}
                  </motion.div>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Performance Comparison */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Before */}
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-red-400 mb-4">Without Calamari</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Average FPS:</span>
                <span className="text-red-400 font-bold">120 FPS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Input Lag:</span>
                <span className="text-red-400 font-bold">25ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">CPU Usage:</span>
                <span className="text-red-400 font-bold">45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Memory Usage:</span>
                <span className="text-red-400 font-bold">4.2GB</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-4">With Calamari</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Average FPS:</span>
                <span className="text-green-400 font-bold">{metrics.fps} FPS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Input Lag:</span>
                <span className="text-green-400 font-bold">{metrics.latency}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">CPU Usage:</span>
                <span className="text-green-400 font-bold">{metrics.cpuUsage}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Memory Usage:</span>
                <span className="text-green-400 font-bold">{metrics.memoryUsage.toFixed(1)}GB</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
