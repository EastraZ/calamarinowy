"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function FloatingOrbs() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 100 + 50
        return (
          <motion.div
            key={i}
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
  )
}
