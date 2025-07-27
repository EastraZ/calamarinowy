"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ThreeDScene({ showESPStatus = true }: { showESPStatus?: boolean }) {
  return (
    <div className="w-full h-full relative">
      <motion.div
        className="w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EBvd8CRWjqq2e0YAfqGZwa8L5SFecx.png"
            alt="Calamari Interface"
            width={500}
            height={350}
            className="rounded-lg shadow-lg shadow-red-500/20"
          />

          {showESPStatus && (
            <motion.div
              className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm border border-green-400 rounded-full px-2 py-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center text-green-400 text-xs">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse" />
                ESP ACTIVE
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
