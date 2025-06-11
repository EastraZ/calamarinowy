"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, Shield } from "lucide-react"

export default function TopBanner() {
  return (
    <motion.div
      className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white py-3 relative overflow-hidden"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-red-500/50 via-orange-500/50 to-red-500/50"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center space-x-6 text-sm font-medium">
          <motion.div
            className="flex items-center space-x-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <Sparkles className="h-4 w-4" />
            <span>🔥 NEW: AI-Powered Aimbot v4.0.1 Released!</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-2">
            <Zap className="h-4 w-4" />
            <span>99.8% Undetected Rate</span>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>24/7 Support Available</span>
          </div>

          <motion.div className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold" whileHover={{ scale: 1.05 }}>
            LIMITED TIME: 30% OFF
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
