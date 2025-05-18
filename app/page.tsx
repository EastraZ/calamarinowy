"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import VideoBackground from "@/components/video-background"
import Navbar from "@/components/navbar"
import PageTransition from "@/components/page-transition"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"

// Add TypeScript declaration for SellAuth
declare global {
  interface Window {
    sellAuthEmbed?: {
      checkout: (
        element: HTMLElement,
        options: {
          cart: Array<{ productId: number; variantId: number; quantity: number }>
          shopId: number
          modal: boolean
        },
      ) => void
    }
  }
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedSubscription, setSelectedSubscription] = useState<string | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<string>("undetected")

  // Refs for scroll animations
  const featuresRef = useRef<HTMLElement>(null)
  const pricingRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)
  const discordRef = useRef<HTMLElement>(null)

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  useEffect(() => {
    // Simulate loading delay for entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const handleViewProduct = () => {
    const plansSection = document.getElementById("subscription-plans")
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" })
    }
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
      <main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a0a0a] to-[#0a0f1a] text-white overflow-hidden relative">
        {/* Video Background for top section */}
        <div className="absolute top-0 left-0 w-full h-[100vh] z-0 overflow-hidden">
          <VideoBackground videoId="Zyb4ocZlJyQ" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#2d0808]/70 to-[#0f0a0a] z-10"
            style={{ y: backgroundY }}
          />
        </div>

        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <AnimatePresence>
          {isLoaded && (
            <motion.section
              className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center relative z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
                    Calamari -{" "}
                  </span>
                  <br />
                  <motion.span
                    className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 bg-clip-text text-transparent"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    shine brighter
                  </motion.span>
                  <br />
                  <motion.span
                    className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    than the rest
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-gray-300 text-lg mb-8 max-w-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  Gain a massive edge over your opponents and become unbeatable in the game! Customer support 24/7, for
                  any questions or issues in Discord.
                </motion.p>

                <motion.p
                  className="text-gray-300 text-lg mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  Get support, enter giveaways, and be the first to know about news.
                </motion.p>

                <motion.p
                  className="text-xl"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  Welcome to Calamari!
                </motion.p>
              </motion.div>

              <motion.div
                className="md:w-1/2 mt-12 md:mt-0"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  className="bg-[#0f0a0a]/80 backdrop-blur-sm rounded-lg border border-gray-800 p-6 max-w-md mx-auto"
                  whileHover={{ boxShadow: "0 0 20px rgba(255, 0, 0, 0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.2 }}>
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calamari-diagonal-0MIPrqm68v07REXLgaOx76jFso80QO.png"
                          alt="Calamari Logo"
                          width={24}
                          height={24}
                          className="mr-2"
                        />
                      </motion.div>
                      <span className="text-lg font-medium">Calamari</span>
                    </div>
                    <div className="flex space-x-2">
                      <motion.button
                        className="text-gray-400 hover:text-white"
                        whileHover={{ y: -2 }}
                        whileTap={{ y: 0 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7M5 9l7-7 7 7"
                          />
                        </svg>
                      </motion.button>
                      <motion.button
                        className="text-gray-400 hover:text-white"
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>

                  <motion.div
                    className="mb-6"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center mb-2">
                      <div className="text-lg font-medium">Hello, Guest!</div>
                    </div>
                    <div className="text-gray-400">Welcome to Calamari!</div>
                  </motion.div>

                  <motion.div
                    className="mb-6"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                  >
                    <div className="text-sm text-gray-400 mb-2">Type</div>
                    <div className="grid grid-cols-2 gap-2">
                      <motion.button
                        className={`py-2 rounded-md text-center ${
                          selectedType === "external" ? "bg-gray-700 text-white" : "bg-[#0f0a0a] border border-gray-700"
                        }`}
                        onClick={() => {
                          setSelectedType("external")
                          setSelectedStatus("undetected")
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        External
                      </motion.button>
                      <motion.button
                        className={`py-2 rounded-md text-center ${
                          selectedType === "internal" ? "bg-gray-700 text-white" : "bg-[#0f0a0a] border border-gray-700"
                        }`}
                        onClick={() => {
                          setSelectedType("internal")
                          setSelectedStatus("down")
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Internal
                      </motion.button>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mb-6"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="text-sm text-gray-400 mb-2">Subscription</div>
                    <div className="grid grid-cols-3 gap-2">
                      <motion.button
                        className={`py-2 rounded-md text-center ${
                          selectedSubscription === "3days"
                            ? "bg-gray-700 text-white"
                            : "bg-[#0f0a0a] border border-gray-700"
                        }`}
                        onClick={() => setSelectedSubscription("3days")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        3 days
                      </motion.button>
                      <motion.button
                        className={`py-2 rounded-md text-center ${
                          selectedSubscription === "7days"
                            ? "bg-gray-700 text-white"
                            : "bg-[#0f0a0a] border border-gray-700"
                        }`}
                        onClick={() => setSelectedSubscription("7days")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        7 days
                      </motion.button>
                      <motion.button
                        className={`py-2 rounded-md text-center ${
                          selectedSubscription === "30days"
                            ? "bg-gray-700 text-white"
                            : "bg-[#0f0a0a] border border-gray-700"
                        }`}
                        onClick={() => setSelectedSubscription("30days")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        30 days
                      </motion.button>
                    </div>
                  </motion.div>

                  <motion.div
                    className="mb-6"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    <div className="text-sm text-gray-400 mb-2">Status</div>
                    <div className="grid grid-cols-3 gap-2">
                      <motion.button
                        className={`py-2 rounded-md text-center ${
                          selectedStatus === "undetected"
                            ? "bg-green-600 text-white"
                            : "bg-[#0f0a0a] border border-gray-700 text-green-500"
                        }`}
                        onClick={() => setSelectedStatus("undetected")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Undetected
                      </motion.button>
                      <motion.button
                        className={`py-2 rounded-md text-center ${
                          selectedStatus === "down"
                            ? "bg-red-600 text-white"
                            : "bg-[#0f0a0a] border border-gray-700 text-red-500"
                        }`}
                        onClick={() => setSelectedStatus("down")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Down
                      </motion.button>
                      <motion.button
                        className={`py-2 rounded-md text-center ${
                          selectedStatus === "detected"
                            ? "bg-gray-600 text-white"
                            : "bg-[#0f0a0a] border border-gray-700 text-gray-400"
                        }`}
                        onClick={() => setSelectedStatus("detected")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Detected
                      </motion.button>
                    </div>
                  </motion.div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 py-3 rounded-md transition-colors text-white font-medium"
                    onClick={handleViewProduct}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 0, 0, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    style={{ touchAction: "manipulation" }}
                  >
                    View Product
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mb-12 relative z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="border-2 border-white/30 rounded-full h-12 w-6 flex items-start justify-center p-1"
            animate={{
              boxShadow: [
                "0 0 0px rgba(255, 255, 255, 0.3)",
                "0 0 10px rgba(255, 255, 255, 0.7)",
                "0 0 0px rgba(255, 255, 255, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="bg-white w-1 h-2 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
          <motion.div
            className="absolute mt-14 text-sm text-gray-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Scroll
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.section
          className="container mx-auto px-4 py-20"
          id="features"
          ref={featuresRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              Premium Features
            </motion.h2>
            <motion.p className="text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
              Calamari offers the most advanced features to give you the competitive edge in your favorite games.
            </motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
            <motion.div
              className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-white/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.3)" }}
            >
              <motion.div
                className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.div>
              <motion.h3
                className="text-xl font-bold mb-2"
                whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              >
                Advanced Aimbot
              </motion.h3>
              <motion.p className="text-gray-300" variants={itemVariants}>
                Our precision aimbot features customizable FOV, target selection, and smooth aiming for a natural feel.
              </motion.p>
            </motion.div>

            <motion.div
              className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-white/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.3)" }}
            >
              <motion.div
                className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </motion.div>
              <motion.h3
                className="text-xl font-bold mb-2"
                whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
              >
                ESP & Wallhack
              </motion.h3>
              <motion.p className="text-gray-300" variants={itemVariants}>
                See enemies through walls with customizable ESP features including boxes, skeletons, health bars, and
                more.
              </motion.p>
            </motion.div>

            <motion.div
              className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-white/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.3)" }}
            >
              <motion.div
                className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </motion.div>
              <motion.h3
                className="text-xl font-bold mb-2"
                whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
              >
                Undetected Technology
              </motion.h3>
              <motion.p className="text-gray-300" variants={itemVariants}>
                Our advanced anti-detection system keeps you safe from bans with regular updates and security features.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          className="container mx-auto px-4 py-20 bg-[#0f0a0a]/30"
          id="subscription-plans"
          ref={pricingRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              Subscription Plans
            </motion.h2>
            <motion.p className="text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
              Choose the perfect plan for your gaming needs. All subscriptions include full access to features and 24/7
              support.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
          >
            {/* 1 Day Plan */}
            <motion.div
              className="bg-[#0f0a0a]/80 backdrop-blur-sm border border-gray-800 rounded-md p-6 h-full flex flex-col justify-between"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.3)",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="text-center mb-6">
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  1 Day
                </motion.h3>
                <div className="text-3xl font-bold text-white mb-2">$6.99</div>
                <p className="text-gray-400">Perfect for a quick test</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Full access to all features</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">24/7 support</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Regular updates</span>
                </li>
              </ul>
              {/* SellAuth Button - Exactly as provided by the user */}
              <button
                type="button"
                className="sellauth-button w-full bg-white/10 hover:bg-white/20 py-2 rounded-md text-center text-white cursor-pointer"
                dangerouslySetInnerHTML={{
                  __html: "Purchase Now",
                }}
                onClick={(e) => {
                  if (window.sellAuthEmbed) {
                    window.sellAuthEmbed.checkout(e.currentTarget, {
                      cart: [{ productId: 329666, variantId: 456516, quantity: 1 }],
                      shopId: 14996,
                      modal: true,
                    })
                  }
                }}
              />
            </motion.div>

            {/* 7 Days Plan */}
            <motion.div
              className="bg-[#0f0a0a]/80 backdrop-blur-sm border border-white/20 rounded-md p-6 relative h-full flex flex-col justify-between"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.5)",
                borderColor: "rgba(255, 0, 0, 0.5)",
              }}
            >
              <motion.div
                className="absolute -top-3 left-0 right-0 flex justify-center"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(255, 0, 0, 0)",
                      "0 0 10px rgba(255, 0, 0, 0.7)",
                      "0 0 0px rgba(255, 0, 0, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  MOST POPULAR
                </motion.div>
              </motion.div>
              <div className="text-center mb-6">
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  7 Days
                </motion.h3>
                <div className="text-3xl font-bold text-white mb-2">$24.99</div>
                <p className="text-gray-400">Best value for regular players</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Full access to all features</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">24/7 priority support</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Regular updates</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Config saving</span>
                </li>
              </ul>
              <button
                type="button"
                className="sellauth-button w-full bg-white/10 hover:bg-white/20 py-2 rounded-md text-center text-white cursor-pointer"
                dangerouslySetInnerHTML={{
                  __html: "Purchase Now",
                }}
                onClick={(e) => {
                  if (window.sellAuthEmbed) {
                    window.sellAuthEmbed.checkout(e.currentTarget, {
                      cart: [{ productId: 329666, variantId: 456516, quantity: 1 }],
                      shopId: 14996,
                      modal: true,
                    })
                  }
                }}
              />
            </motion.div>

            {/* 30 Days Plan */}
            <motion.div
              className="bg-[#0f0a0a]/80 backdrop-blur-sm border border-gray-800 rounded-md p-6 h-full flex flex-col justify-between"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.3)",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="text-center mb-6">
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  30 Days
                </motion.h3>
                <div className="text-3xl font-bold text-white mb-2">$59.99</div>
                <p className="text-gray-400">For dedicated gamers</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Full access to all features</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">24/7 VIP support</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Priority updates</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Beta feature access</span>
                </li>
              </ul>
              <button
                type="button"
                className="sellauth-button w-full bg-white/10 hover:bg-white/20 py-2 rounded-md text-center text-white cursor-pointer"
                dangerouslySetInnerHTML={{
                  __html: "Purchase Now",
                }}
                onClick={(e) => {
                  if (window.sellAuthEmbed) {
                    window.sellAuthEmbed.checkout(e.currentTarget, {
                      cart: [{ productId: 329666, variantId: 456516, quantity: 1 }],
                      shopId: 14996,
                      modal: true,
                    })
                  }
                }}
              />
            </motion.div>

            {/* Lifetime Plan */}
            <motion.div
              className="bg-[#0f0a0a]/80 backdrop-blur-sm border border-gray-800 rounded-md p-6 h-full flex flex-col justify-between"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.3)",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="text-center mb-6">
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  Lifetime
                </motion.h3>
                <div className="text-3xl font-bold text-white mb-2">$299.99</div>
                <p className="text-gray-400">Ultimate commitment</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Permanent access</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Premium VIP support</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Early access to new features</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Exclusive Discord role</span>
                </li>
              </ul>
              <button
                type="button"
                className="sellauth-button w-full bg-white/10 hover:bg-white/20 py-2 rounded-md text-center text-white cursor-pointer"
                dangerouslySetInnerHTML={{
                  __html: "Purchase Now",
                }}
                onClick={(e) => {
                  if (window.sellAuthEmbed) {
                    window.sellAuthEmbed.checkout(e.currentTarget, {
                      cart: [{ productId: 329666, variantId: 456516, quantity: 1 }],
                      shopId: 14996,
                      modal: true,
                    })
                  }
                }}
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          className="container mx-auto px-4 py-20"
          ref={faqRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p className="text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
              Find answers to the most common questions about Calamari.
            </motion.p>
          </motion.div>

          <motion.div className="max-w-3xl mx-auto" variants={containerVariants}>
            <motion.div className="mb-6" variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <motion.div
                className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
                whileHover={{ borderColor: "rgba(255, 0, 0, 0.5)", boxShadow: "0 0 15px rgba(255, 0, 0, 0.2)" }}
              >
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  Is Calamari safe to use?
                </motion.h3>
                <motion.p
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Yes, Calamari is designed with advanced anti-detection technology to keep your account safe. We
                  regularly update our software to stay ahead of anti-cheat systems.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div className="mb-6" variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <motion.div
                className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
                whileHover={{ borderColor: "rgba(255, 0, 0, 0.5)", boxShadow: "0 0 15px rgba(255, 0, 0, 0.2)" }}
              >
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
                >
                  How do I get started with Calamari?
                </motion.h3>
                <motion.p
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  After purchasing a subscription, you'll receive download instructions via email. Our launcher makes
                  installation simple, and our 24/7 support team is available if you need any assistance.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div className="mb-6" variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <motion.div
                className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
                whileHover={{ borderColor: "rgba(255, 0, 0, 0.5)", boxShadow: "0 0 15px rgba(255, 0, 0, 0.2)" }}
              >
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
                >
                  What games does Calamari support?
                </motion.h3>
                <motion.p
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Calamari currently supports Rust, Fortnite, and Apex Legends. We're constantly working on adding
                  support for more games based on user demand.
                </motion.p>
              </motion.div>
            </motion.div>

            <motion.div className="mb-6" variants={itemVariants} whileHover={{ scale: 1.02 }}>
              <motion.div
                className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
                whileHover={{ borderColor: "rgba(255, 0, 0, 0.5)", boxShadow: "0 0 15px rgba(255, 0, 0, 0.2)" }}
              >
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1.5 }}
                >
                  Do you offer refunds?
                </motion.h3>
                <motion.p
                  className="text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  We offer refunds within 24 hours of purchase if the product doesn't work as advertised. Please contact
                  our support team through Discord for assistance with refund requests.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Discord CTA */}
        <motion.section
          className="container mx-auto px-4 py-16"
          ref={discordRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="max-w-4xl mx-auto bg-[#0f0a0a]/80 backdrop-blur-sm border border-gray-800 rounded-md p-8 text-center"
            variants={itemVariants}
            whileHover={{
              boxShadow: "0 0 30px rgba(255, 0, 0, 0.3)",
              borderColor: "rgba(255, 255, 255, 0.3)",
            }}
          >
            <motion.h2
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              Join Our Discord Community
            </motion.h2>
            <motion.p className="text-gray-300 mb-6 max-w-2xl mx-auto" variants={itemVariants}>
              Get support, enter giveaways, and be the first to know about updates and special offers.
            </motion.p>
            <motion.a
              href="https://discord.gg/calamari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#5865F2] hover:bg-[#4752C4] px-6 py-3 rounded-md font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-2 flex-shrink-0"
              >
                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-" />
              </svg>
              Join Discord
            </motion.a>
          </motion.div>
        </motion.section>
      </main>
    </PageTransition>
  )
}
