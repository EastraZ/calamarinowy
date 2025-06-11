"use client"

import { motion } from "framer-motion"
import { Image, FileText, Video, Palette, Users, Award, TrendingUp } from "lucide-react"
import Navbar from "@/components/navbar"
import MatrixRain from "@/components/matrix-rain"

export default function PressKitPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute inset-0 opacity-30">
            <MatrixRain />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Press Kit
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Everything you need to know about Calamari. Download our press assets, company information, and media resources.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
}