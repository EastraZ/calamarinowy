"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { TrendingUp } from "lucide-react"

export default function LiveUserCounter() {
  const [count, setCount] = useState(1543)
  const [mounted, setMounted] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Simulate fluctuating user count
    const interval = setInterval(() => {
      setCount((prev) => {
        const change = Math.floor(Math.random() * 5) - 2 // -2 to +2
        return Math.max(1500, prev + change)
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="container mx-auto px-4 py-6">
      <motion.div
        className="bg-black/30 backdrop-blur-sm border border-red-500/20 rounded-lg p-4 relative overflow-hidden"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></div>
            <div className="text-white font-medium">
              <span className="text-green-400">{count.toLocaleString()}</span> users online now
            </div>
          </div>
          <motion.div
            animate={{ rotate: showDetails ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400"
          >
            <TrendingUp className="w-4 h-4" />
          </motion.div>
        </div>

        {showDetails && (
          <motion.div
            className="mt-4 pt-4 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center">
              <div className="text-gray-400 text-sm mb-1">Peak Today</div>
              <div className="text-white font-bold">1,782</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-400 text-sm mb-1">New Users Today</div>
              <div className="text-white font-bold">+124</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-gray-400 text-sm mb-1">Active Sessions</div>
              <div className="text-white font-bold">843</div>
            </div>
          </motion.div>
        )}

        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
