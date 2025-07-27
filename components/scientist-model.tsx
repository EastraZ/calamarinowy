"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ScientistModelViewer() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        className="relative w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/calamari-box.png"
          alt="Calamari Product"
          width={500}
          height={500}
          className="object-contain filter drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]"
          priority
        />

        {/* Status tags */}
        <motion.div
          className="absolute top-0 right-0 bg-black/90 backdrop-blur-sm border border-green-400 rounded-lg px-3 py-2 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center text-green-400 text-xs font-bold">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            ONLINE
          </div>
        </motion.div>

        <motion.div
          className="absolute top-0 left-0 bg-black/90 backdrop-blur-sm border border-purple-400 rounded-lg px-3 py-2 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-purple-400 text-xs font-bold">🚀 AI ACTIVE</div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm border border-blue-400 rounded-lg px-3 py-2 shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="text-blue-400 text-xs font-bold">v4.0.1 ULTRA</div>
        </motion.div>

        {/* Enhanced floating particles */}
        {isLoaded && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}
