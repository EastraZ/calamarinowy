"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Matrix-like rain */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute text-green-400/10 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
            }}
            animate={{
              y: ["0vh", "110vh"],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            {Math.random() > 0.5 ? "CALAMARI" : "01010101"}
          </motion.div>
        ))}
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 100 + 50
          return (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full bg-gradient-to-br from-red-500/5 to-orange-500/5"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          )
        })}
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`grid-h-${i}`}
            className="absolute h-px bg-gray-800/30 w-full"
            style={{ top: `${(i / 20) * 100}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: i * 0.1, duration: 1 }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`grid-v-${i}`}
            className="absolute w-px bg-gray-800/30 h-full"
            style={{ left: `${(i / 20) * 100}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: i * 0.1, duration: 1 }}
          />
        ))}
      </div>

      {/* Glowing corners */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-red-500/20 to-transparent rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full filter blur-3xl" />
    </div>
  )
}
