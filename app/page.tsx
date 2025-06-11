"use client"

import { useState, useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import PageTransition from "@/components/page-transition"
import ScientistModelViewer from "@/components/scientist-model"
import FloatingStats from "@/components/floating-stats"
import { Play, Rocket, Sparkles, ChevronDown, X } from "lucide-react"
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion"
import Footer from "@/components/footer"
import MegaUltimateFeatures from "@/components/mega-ultimate-features"
import TechnologyShowcase from "@/components/technology-showcase"
import SecurityFeatures from "@/components/security-features"
import PerformanceMetrics from "@/components/performance-metrics"
import GameCompatibility from "@/components/game-compatibility"
import PerformanceComparison from "@/components/performance-comparison"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Refs for scroll animations
  const featuresRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)
  const discordRef = useRef<HTMLElement>(null)

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Enhanced testimonials
  const testimonials = [
    {
      text: "Calamari completely revolutionized my Rust gameplay. The AI aimbot is incredibly accurate and feels natural!",
      author: "ProGamer_2024",
      game: "Rust",
      rating: 5,
    },
    {
      text: "Best investment I've made for Fortnite. The ESP and performance boost are game-changing!",
      author: "BuildMaster",
      game: "Fortnite",
      rating: 5,
    },
    {
      text: "Undetected for 8 months now in Apex. Amazing support team and constant updates!",
      author: "ApexLegend",
      game: "Apex Legends",
      rating: 5,
    },
    {
      text: "The HWID spoofer works perfectly across all my games. Never had any issues!",
      author: "EliteSniper",
      game: "HWID Spoofer",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const handleViewProduct = () => {
    window.open("https://calamari.mysellauth.com/#products", "_blank")
  }

  const handleWatchDemo = () => {
    setShowVideo(true)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <PageTransition>
      <motion.main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a0a0a] to-[#0a0f1a] text-white overflow-hidden relative">
        {/* Matrix Rain Background Effect */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400/20 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
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

        {/* Floating Orbs */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-red-500/10 to-blue-500/10 blur-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, -100, 0],
                y: [0, -100, 100, 0],
                scale: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Video Background for top section */}
        <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#2d0808]/70 to-[#0a0f1a] z-10" />
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-20 flex flex-col lg:flex-row items-center relative z-20 min-h-screen">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            {/* Animated badge */}
            <motion.div
              className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Sparkles className="h-4 w-4 text-red-400 mr-2" />
              <span className="text-sm font-medium text-red-300">PC Only • Rust • Fortnite • Apex</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-white">Game</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Evolution
              </span>
              <br />
              <span className="text-white">Starts Here</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Experience the future of gaming with <span className="text-red-400 font-semibold">Calamari's</span>{" "}
              cutting-edge enhancement tools for Rust, Fortnite, and Apex Legends. Plus universal HWID spoofing.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                onClick={() => window.open("https://calamari.mysellauth.com/#products", "_blank")}
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-base md:text-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="mr-2 h-4 md:h-5 w-4 md:w-5 inline" />
                Start Dominating
              </motion.button>

              <motion.button
                onClick={handleWatchDemo}
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-white/20 rounded-full font-bold text-base md:text-lg hover:border-white/40 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="mr-2 h-4 md:h-5 w-4 md:w-5 inline" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <FloatingStats />
            </motion.div>
          </div>

          {/* Right side - 3D Scientist Model */}
          <motion.div
            className="lg:w-1/2 h-[500px] md:h-[600px] lg:h-[700px] relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="w-full h-full">
              <ScientistModelViewer />
            </div>
          </motion.div>
        </section>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-8 relative z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={() => {
            const featuresSection = document.getElementById("features")
            if (featuresSection) {
              featuresSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          <motion.div className="flex flex-col items-center cursor-pointer" whileHover={{ scale: 1.1 }}>
            <motion.span
              className="text-gray-400 text-sm mb-2"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              Scroll to explore
            </motion.span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ChevronDown className="h-6 w-6 text-red-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Game Stats Dashboard */}
        <motion.section
          className="container mx-auto px-4 py-16 relative z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8"
            variants={itemVariants}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Live Game Statistics</h3>
              <p className="text-gray-300">Real-time data from our supported games</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Rust Stats */}
              <motion.div
                className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 md:p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl mb-4">🦀</div>
                <h4 className="text-lg md:text-xl font-bold text-orange-400 mb-2">Rust</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-400">Active Users:</span>
                    <span className="text-white font-bold">782</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-400">Avg K/D:</span>
                    <span className="text-green-400 font-bold">4.2</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-400">Win Rate:</span>
                    <span className="text-blue-400 font-bold">87%</span>
                  </div>
                </div>
              </motion.div>

              {/* Fortnite Stats */}
              <motion.div
                className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 md:p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl mb-4">🏗️</div>
                <h4 className="text-lg md:text-xl font-bold text-purple-400 mb-2">Fortnite</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-400">Active Users:</span>
                    <span className="text-white font-bold">355</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-400">Victory Royales:</span>
                    <span className="text-green-400 font-bold">12,456</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-400">Win Rate:</span>
                    <span className="text-blue-400 font-bold">92%</span>
                  </div>
                </div>
              </motion.div>

              {/* Apex Stats */}
              <motion.div
                className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 md:p-6 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl mb-4">🎯</div>
                <h4 className="text-lg md:text-xl font-bold text-red-400 mb-2">Apex Legends</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-400">Active Users:</span>
                    <span className="text-white font-bold">473</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-400">Avg Damage:</span>
                    <span className="text-green-400 font-bold">2,847</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-gray-400">Win Rate:</span>
                    <span className="text-blue-400 font-bold">89%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Game Compatibility Section */}
        <GameCompatibility />

        {/* Technology Showcase Section */}
        <TechnologyShowcase />

        {/* Performance Metrics Section */}
        <PerformanceMetrics />

        {/* Security Features Section */}
        <SecurityFeatures />

        {/* MEGA ULTIMATE Features Section */}
        <motion.section
          className="relative z-20"
          id="features"
          ref={featuresRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <MegaUltimateFeatures />
        </motion.section>

        {/* Performance Comparison Section */}
        <PerformanceComparison />

        {/* Enhanced Testimonials Section */}
        <motion.section
          className="container mx-auto px-4 py-20 relative z-20 bg-gradient-to-br from-gray-900/50 to-black/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Trusted by Elite Gamers Worldwide
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
              Join over 200,000 players who've elevated their game with Calamari
            </p>
          </motion.div>

          <motion.div className="max-w-5xl mx-auto" variants={itemVariants}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-3xl p-6 md:p-10 text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl" />

                <motion.p
                  className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 italic relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.p>

                {/* Star rating */}
                <motion.div
                  className="flex justify-center mb-6 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-yellow-400 text-xl md:text-2xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 relative z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-red-400 font-bold text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="hidden sm:block w-2 h-2 bg-gray-500 rounded-full" />
                  <div className="text-gray-400 font-medium">{testimonials[currentTestimonial].game}</div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-red-500 scale-125 shadow-lg shadow-red-500/50"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Live Activity Feed - IN WORKS */}
        <motion.section
          className="container mx-auto px-4 py-20 relative z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Development Status - IN WORKS
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">Live development progress and updates from our team</p>
          </motion.div>

          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 animate-pulse" />
              <span className="text-orange-400 font-bold">DEVELOPMENT IN PROGRESS</span>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-hidden">
              {[
                { dev: "Security", task: "implementing new AI aimbot algorithm", status: "Rust Engine", time: "3 minutes ago", progress: "87%" },
                { dev: "Cledz", task: "testing anti-cheat bypass methods", status: "Security", time: "7 minutes ago", progress: "92%" },
                { dev: "Astra", task: "optimizing HWID spoofer performance", status: "Core System", time: "12 minutes ago", progress: "74%" },
                { dev: "Interpreter", task: "designing new dashboard interface", status: "Frontend", time: "18 minutes ago", progress: "65%" },
                { dev: "Security", task: "updating encryption protocols", status: "Security", time: "25 minutes ago", progress: "89%" },
                { dev: "Cledz", task: "enhancing Fortnite ESP features", status: "Game Engine", time: "31 minutes ago", progress: "78%" },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-orange-500/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{activity.dev[0]}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        <span className="text-orange-400">{activity.dev}</span> {activity.task}
                      </div>
                      <div className="text-gray-400 text-sm">{activity.status} • {activity.time}</div>
                      <div className="flex items-center mt-1">
                        <div className="w-20 h-1.5 bg-gray-700 rounded-full mr-2">
                          <div 
                            className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-300"
                            style={{ width: activity.progress }}
                          />
                        </div>
                        <span className="text-orange-400 text-xs font-bold">{activity.progress}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-orange-400 text-sm font-medium">🔧 ACTIVE</div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-orange-500/10 rounded-xl border border-orange-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold">Next Major Update: v4.1.0</h4>
                  <p className="text-gray-300 text-sm">Enhanced AI features and improved performance</p>
                </div>
                <div className="text-right">
                  <div className="text-orange-400 font-bold">ETA: 2-3 days</div>
                  <div className="text-gray-400 text-sm">94% complete</div>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full mt-3">
                <div className="w-[94%] h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Trust Indicators */}
        <motion.section
          className="container mx-auto px-4 py-20 relative z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
            <motion.div
              className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-green-500/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-2">100% Undetected</h3>
              <p className="text-gray-300">Over 8 months without a single detection</p>
              <div className="mt-4 text-green-400 font-bold">Since May 2023</div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-blue-500/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-2">Instant Activation</h3>
              <p className="text-gray-300">Get started in under 30 seconds</p>
              <div className="mt-4 text-blue-400 font-bold">{"< 1 Second Injection"}</div>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-purple-500/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-2">Elite Performance</h3>
              <p className="text-gray-300">Average 4.2x K/D improvement</p>
              <div className="mt-4 text-purple-400 font-bold">Proven Results</div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Enhanced Pricing Section */}
        <motion.section
          className="container mx-auto px-4 py-20 bg-gradient-to-br from-[#0f0a0a]/80 to-transparent relative z-20"
          id="subscription-plans"
          ref={pricingRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Choose Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Power Level
              </span>
            </motion.h2>
            <motion.p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto" variants={itemVariants}>
              Every plan includes access to Rust, Fortnite, Apex Legends, and HWID Spoofer. 24/7 support and undetected
              guarantee included.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
          >
            {/* 1 Day Plan */}
            <motion.div
              className="relative bg-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 md:p-6 h-full flex flex-col justify-between group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(255, 0, 0, 0.3)",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <div>
                <div className="text-center mb-6">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold mb-2 text-white"
                    whileHover={{ color: "#ff3333" }}
                  >
                    Trial Run
                  </motion.h3>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">$6.99</div>
                  <p className="text-gray-400">1 Day Access</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Rust, Fortnite, Apex
                  </li>
                  <li className="flex items-center text-gray-300 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    HWID Spoofer
                  </li>
                  <li className="flex items-center text-gray-300 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    24/7 support
                  </li>
                </ul>
              </div>

              <motion.a
                href="https://calamari.mysellauth.com/#products"
                className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 py-2 md:py-3 rounded-xl text-center text-white font-medium transition-all duration-300 block text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>
            </motion.div>

            {/* 7 Days Plan - Most Popular */}
            <motion.div
              className="relative bg-black/80 backdrop-blur-sm border-2 border-red-500 rounded-2xl p-4 md:p-6 h-full flex flex-col justify-between group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(255, 0, 0, 0.5)",
              }}
            >
              <motion.div
                className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1 md:py-2 rounded-full"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                MOST POPULAR
              </motion.div>
              <div>
                <div className="text-center mb-6 mt-2 md:mt-4">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold mb-2 text-white"
                    animate={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Power User
                  </motion.h3>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">$24.99</div>
                  <p className="text-red-200">7 Days Access</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-red-100 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    All 3 games + HWID
                  </li>
                  <li className="flex items-center text-red-100 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Priority support
                  </li>
                  <li className="flex items-center text-red-100 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Pro player configs
                  </li>
                  <li className="flex items-center text-red-100 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Best value
                  </li>
                </ul>
              </div>

              <motion.a
                href="https://calamari.mysellauth.com/#products"
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 py-2 md:py-3 rounded-xl text-center text-white font-medium transition-all duration-300 block text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Choose Plan
              </motion.a>
            </motion.div>

            {/* 30 Days Plan */}
            <motion.div
              className="relative bg-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 md:p-6 h-full flex flex-col justify-between group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(255, 0, 0, 0.3)",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <div>
                <div className="text-center mb-6">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold mb-2 text-white"
                    whileHover={{ color: "#ff3333" }}
                  >
                    Elite Gamer
                  </motion.h3>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">$79.99</div>
                  <p className="text-gray-400">30 Days Access</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    All 3 games + HWID
                  </li>
                  <li className="flex items-center text-gray-300 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    VIP support
                  </li>
                  <li className="flex items-center text-gray-300 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Custom configs
                  </li>
                  <li className="flex items-center text-gray-300 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Beta access
                  </li>
                </ul>
              </div>

              <motion.a
                href="https://calamari.mysellauth.com/#products"
                className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 py-2 md:py-3 rounded-xl text-center text-white font-medium transition-all duration-300 block text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Go Elite
              </motion.a>
            </motion.div>

            {/* Lifetime Plan */}
            <motion.div
              className="relative bg-black/80 backdrop-blur-sm border border-yellow-500 rounded-2xl p-4 md:p-6 h-full flex flex-col justify-between group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(255, 215, 0, 0.5)",
              }}
            >
              <motion.div
                className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs md:text-sm font-bold px-3 md:px-4 py-1 md:py-2 rounded-full"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                BEST VALUE
              </motion.div>
              <div>
                <div className="text-center mb-6 mt-2 md:mt-4">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold mb-2 text-white"
                    animate={{ color: ["#ffffff", "#ffd700", "#ffffff"] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Legend
                  </motion.h3>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">$199.99</div>
                  <p className="text-yellow-200">Lifetime Access</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-yellow-100 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    All 3 games + HWID
                  </li>
                  <li className="flex items-center text-yellow-100 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Lifetime updates
                  </li>
                  <li className="flex items-center text-yellow-100 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Exclusive features
                  </li>
                  <li className="flex items-center text-yellow-100 text-sm md:text-base">
                    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Legend status
                  </li>
                </ul>
              </div>

              <motion.a
                href="https://calamari.mysellauth.com/#products"
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 py-2 md:py-3 rounded-xl text-center text-black font-medium transition-all duration-300 block text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Become Legend
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Money-back guarantee */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-4 md:px-6 py-2 md:py-3">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-green-300 font-medium text-sm md:text-base">
                30-day money-back guarantee on all plans
              </span>
            </div>
          </motion.div>
        </motion.section>

        {/* Enhanced FAQ Section */}
        <motion.section
          className="container mx-auto px-4 py-20 relative z-20 bg-gradient-to-br from-gray-900/50 to-black/50"
          ref={faqRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about Calamari and our gaming enhancement tools
            </p>
          </motion.div>

          <motion.div className="max-w-4xl mx-auto space-y-4 md:space-y-6" variants={containerVariants}>
            {[
              {
                question: "Is Calamari safe and undetected?",
                answer:
                  "Yes! Calamari uses advanced stealth technology and has maintained a 100% undetected rate since 2023. Our team constantly updates the software to stay ahead of anti-cheat systems.",
              },
              {
                question: "Which games does Calamari support?",
                answer:
                  "Calamari supports Rust, Fortnite, and Apex Legends with full feature sets. We also provide a universal HWID spoofer that works with all games for hardware protection.",
              },
              {
                question: "Do you support mobile devices?",
                answer:
                  "No, Calamari is exclusively designed for PC gaming. We focus on delivering the best possible experience for Windows desktop users only.",
              },
              {
                question: "How quickly can I start using Calamari?",
                answer:
                  "Activation is instant! After purchase, you'll receive your license key immediately and can start using Calamari within seconds. Our injection technology activates in under 1 second.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "We provide 24/7 expert support through Discord, live chat, and email. Our team of gaming experts is always ready to help you optimize your experience and resolve any issues.",
              },
              {
                question: "Do you offer refunds?",
                answer:
                  "Yes! We offer a 30-day money-back guarantee on all plans. If you're not completely satisfied with Calamari, we'll provide a full refund, no questions asked.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 hover:border-white/20 transition-colors"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Enhanced Discord CTA */}
        <motion.section
          className="container mx-auto px-4 py-20 relative z-20"
          ref={discordRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="bg-gradient-to-r from-[#5865F2]/20 to-[#7289DA]/20 border border-[#5865F2]/30 rounded-3xl p-6 md:p-12 text-center relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/10 to-[#7289DA]/10"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
            />
            <motion.div className="relative z-10" variants={itemVariants}>
              <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <span className="bg-gradient-to-r from-[#5865F2] via-[#7289DA] to-[#5865F2] bg-clip-text text-transparent">
                  Join Our Elite Community
                </span>
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                Connect with over 50,000 elite gamers, get instant support, share strategies, and stay updated with the
                latest features and game updates.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                variants={itemVariants}
              >
                <motion.a
                  href="https://discord.gg/calamari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-3 md:py-4 bg-[#5865F2] hover:bg-[#4752C4] rounded-full font-bold text-base md:text-lg text-white transition-colors flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Join Discord Server
                </motion.a>

                <motion.div
                  className="flex items-center text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  <span className="text-sm md:text-base">50,247 members online</span>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
                variants={containerVariants}
              >
                <motion.div
                  className="bg-black/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl md:text-3xl mb-3">💬</div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Instant Support</h3>
                  <p className="text-gray-300 text-sm md:text-base">Get help from our expert team and community 24/7</p>
                </motion.div>

                <motion.div
                  className="bg-black/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl md:text-3xl mb-3">🎮</div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Pro Strategies</h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Learn from top players and share your own tactics
                  </p>
                </motion.div>

                <motion.div
                  className="bg-black/40 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl md:text-3xl mb-3">🚀</div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">Early Access</h3>
                  <p className="text-gray-300 text-sm md:text-base">Be first to try new features and updates</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.section>

        {/* Footer */}
        <Footer />

        {/* Video Modal */}
        <AnimatePresence>
          {showVideo && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideo(false)}
            >
              <motion.div
                className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.main>
    </PageTransition>
  )
}
