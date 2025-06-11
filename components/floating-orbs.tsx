"use client"

import { motion } from "framer-motion"

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}
