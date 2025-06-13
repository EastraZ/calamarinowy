"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingCart, Shield, Zap, Users } from "lucide-react"
import GameStatus from "@/components/game-status"
import LiveUserCounter from "@/components/live-user-counter"
import SecurityShowcase from "@/components/security-showcase"
import GameGallery from "@/components/game-gallery"
import AdvancedCheatEngine from "@/components/advanced-cheat-engine"
import TechnologyShowcase from "@/components/technology-showcase"
import FeatureComparison from "@/components/feature-comparison"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handlePurchase = () => {
    window.open("https://calamari.mysellauth.com/", "_blank")
  }

  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-black font-bold px-4 py-1 rounded-full text-sm mb-4">
                  UNDETECTED
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Dominate Your <br />
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Gaming Experience
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-lg">
                  Advanced gaming enhancement tools with kernel-level protection and AI-powered features for the
                  ultimate competitive advantage.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <button
                  onClick={handlePurchase}
                  className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-lg flex items-center transition-all duration-300 shadow-lg shadow-red-500/20"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Purchase Now
                </button>
                <Link
                  href="/features"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-lg flex items-center border border-white/10 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>

              <motion.div
                className="mt-12 grid grid-cols-3 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <div className="flex flex-col items-center">
                  <div className="bg-red-500/10 p-2 rounded-full mb-2">
                    <Shield className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold">Undetected</div>
                    <div className="text-sm text-gray-400">Kernel-level protection</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-orange-500/10 p-2 rounded-full mb-2">
                    <Zap className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold">AI-Powered</div>
                    <div className="text-sm text-gray-400">Advanced features</div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-500/10 p-2 rounded-full mb-2">
                    <Users className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold">24/7 Support</div>
                    <div className="text-sm text-gray-400">Always available</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative z-10">
                <Image
                  src="/images/calamari-box.png"
                  alt="Calamari Gaming Enhancement Tool"
                  width={600}
                  height={600}
                  className="object-contain"
                />
              </div>

              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full filter blur-3xl animate-pulse" />

              {/* Floating particles */}
              {isMounted &&
                [...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-red-500 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live User Counter */}
      <LiveUserCounter />

      {/* Game Status Section */}
      <GameStatus />

      {/* Advanced Cheat Engine Section */}
      <AdvancedCheatEngine />

      {/* Security Showcase */}
      <SecurityShowcase />

      {/* Game Gallery */}
      <GameGallery />

      {/* Technology Showcase */}
      <TechnologyShowcase />

      {/* Feature Comparison */}
      <FeatureComparison />

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to <span className="text-red-400">Dominate</span> Your Games?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of satisfied gamers and experience the Calamari advantage today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={handlePurchase}
                    className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-lg flex items-center transition-all duration-300 shadow-lg shadow-red-500/20"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Purchase Now
                  </button>
                  <Link
                    href="/pricing"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-lg flex items-center border border-white/10 transition-all duration-300"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>

            {/* Background effects */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-500/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full filter blur-3xl" />

            {/* Animated lines */}
            {isMounted &&
              [...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 w-full"
                  style={{ top: `${20 + i * 15}%` }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 10 + i * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
