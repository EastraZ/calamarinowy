"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles, Zap } from "lucide-react"

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white py-3 px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5" />
            </motion.div>
            <span className="font-bold text-sm md:text-base">
              🔥 LIMITED TIME: Get 50% OFF your first month! Use code{" "}
              <span className="bg-white/20 px-2 py-1 rounded font-mono">DOMINATE50</span>
            </span>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
              <Zap className="h-5 w-5 text-yellow-300" />
            </motion.div>
          </div>
          <button onClick={() => setIsVisible(false)} className="text-white/80 hover:text-white transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
