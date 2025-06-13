"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Play, Rocket, Sparkles, ChevronDown, X, Check, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Dynamically import components that might use browser APIs
const ScientistModelViewer = dynamic(() => import("@/components/scientist-model"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading 3D Model...</div>
    </div>
  ),
})

const SecurityShowcase = dynamic(() => import("@/components/security-showcase"), { ssr: false })
const GameGallery = dynamic(() => import("@/components/game-gallery"), { ssr: false })
const FeatureComparison = dynamic(() => import("@/components/feature-comparison"), { ssr: false })
const LiveUserCounter = dynamic(() => import("@/components/live-user-counter"), { ssr: false })
const SecurityFeatures = dynamic(() => import("@/components/security-features"), { ssr: false })
const GameCompatibility = dynamic(() => import("@/components/game-compatibility"), { ssr: false })
const TechnologyShowcase = dynamic(() => import("@/components/technology-showcase"), { ssr: false })
const FloatingOrbs = dynamic(() => import("@/components/floating-orbs"), { ssr: false })
const AdvancedCheatEngine = dynamic(() => import("@/components/advanced-cheat-engine"), { ssr: false })
const LiveServerStatus = dynamic(() => import("@/components/live-server-status"), { ssr: false })
const GameStatus = dynamic(() => import("@/components/game-status"), { ssr: false })

export default function Home() {
  const [showVideo, setShowVideo] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

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
    setIsMounted(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [testimonials.length])

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
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a0a0a] to-[#0a0f1a] text-white overflow-hidden relative">
      {/* Matrix Rain Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
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

      {/* Floating Orbs Background */}
      {isMounted && <FloatingOrbs />}

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
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Evolution</span>
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
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-base md:text-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-red-900/20"
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

          {/* Consistent Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4 md:gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">1.5K+</div>
              <div className="text-gray-400 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Undetected</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </motion.div>
        </div>

        {/* Right side - 3D Scientist Model */}
        <motion.div
          className="lg:w-1/2 h-[500px] md:h-[600px] lg:h-[700px] relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {isMounted && <ScientistModelViewer />}
        </motion.div>
      </section>

      {/* Scroll Indicator */}
      <motion.div
        className="flex justify-center mt-8 relative z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => {
          const featuresSection = document.getElementById("game-status")
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

      {/* Live User Counter */}
      {isMounted && <LiveUserCounter />}

      {/* Game Status */}
      <div id="game-status">{isMounted && <GameStatus />}</div>

      {/* Products Section */}
      <motion.section
        className="container mx-auto px-4 py-20 relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Our Premium Products
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
            Choose from our collection of undetected gaming enhancement tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              name: "Rust Cheats",
              description: "Advanced ESP, aimbot, and resource detection for Rust",
              price: "From $6.99",
              features: ["Advanced ESP", "Smart Aimbot", "Resource Scanner"],
              image: "/images/calamari-diagonal.png",
            },
            {
              name: "Fortnite Cheats",
              description: "Build faster, aim better, secure Victory Royales",
              price: "From $6.99",
              features: ["Silent Aim", "Build Helper", "Player ESP"],
              image: "/images/calamari-diagonal.png",
            },
            {
              name: "Apex Legends",
              description: "Enhanced movement and precision aiming",
              price: "From $6.99",
              features: ["Legend ESP", "Aimbot", "Loot Filter"],
              image: "/images/calamari-diagonal.png",
            },
            {
              name: "HWID Spoofer",
              description: "Universal hardware ID spoofing protection",
              price: "From $6.99",
              features: ["Universal Support", "Instant Spoofing", "Ban Prevention"],
              image: "/images/calamari-diagonal.png",
            },
          ].map((product, index) => (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="relative mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-lg flex items-center justify-center">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} Logo`}
                    width={64}
                    height={64}
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="absolute top-2 right-2 bg-green-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                  Undetected
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-4 text-sm">{product.description}</p>

              <div className="space-y-2 mb-4">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <Check className="h-3 w-3 text-green-500 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-red-400 font-bold mb-4">{product.price}</div>

              <button
                onClick={() => window.open("https://calamari.mysellauth.com/#products", "_blank")}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div className="text-center" variants={itemVariants}>
          <Link
            href="/products"
            className="inline-flex items-center bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors"
          >
            View All Products <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </motion.section>

      {/* Advanced Cheat Engine - UNIQUE */}
      {isMounted && <AdvancedCheatEngine />}

      {/* Security Showcase - UNIQUE */}
      {isMounted && <SecurityShowcase />}

      {/* Live Server Status - UNIQUE */}
      {isMounted && <LiveServerStatus />}

      {/* Technology Showcase - UNIQUE */}
      {isMounted && <TechnologyShowcase />}

      {/* Game Gallery - UNIQUE */}
      {isMounted && <GameGallery />}

      {/* Security Features - UNIQUE */}
      {isMounted && <SecurityFeatures />}

      {/* Feature Comparison - UNIQUE */}
      {isMounted && <FeatureComparison />}

      {/* Game Compatibility - UNIQUE */}
      {isMounted && <GameCompatibility />}

      {/* Enhanced Testimonials Section - UNIQUE */}
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
            Join over 1,500 players who've elevated their game with Calamari
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

      {/* Final CTA Section - UNIQUE */}
      <motion.section
        className="container mx-auto px-4 py-20 relative z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-3xl p-8 md:p-12 text-center"
          variants={itemVariants}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Ready to Dominate?
            </span>
          </motion.h2>

          <motion.p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto" variants={itemVariants}>
            Join thousands of elite gamers who trust Calamari for their competitive edge. Get started today with our
            undetected gaming enhancement tools.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
            <motion.button
              onClick={() => window.open("https://calamari.mysellauth.com/#products", "_blank")}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-red-900/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="mr-2 h-5 w-5 inline" />
              Get Calamari Now
            </motion.button>

            <motion.button
              onClick={handleWatchDemo}
              className="px-8 py-4 border-2 border-white/20 rounded-full font-bold text-lg hover:border-white/40 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="mr-2 h-5 w-5 inline" />
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Video Modal */}
      {isMounted && (
        <AnimatePresence>
          {showVideo && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideo(false)}
            >
              <motion.div
                className="bg-black rounded-2xl p-6 max-w-4xl w-full relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors z-10"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
                  {/* Only render iframe on client side */}
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Y8bPqRKPPjs?autoplay=1"
                    title="Calamari Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Footer */}
      <Footer />
    </main>
  )
}
