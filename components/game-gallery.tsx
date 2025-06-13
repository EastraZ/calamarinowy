"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ThreeDCard from "./3d-card-effect"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function GameGallery() {
  const [mounted, setMounted] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const games = [
    {
      title: "Rust",
      description: "Dominate the survival landscape with our advanced Rust cheats",
      imageUrl: "/placeholder.svg?height=400&width=600",
      badgeText: "POPULAR",
    },
    {
      title: "Fortnite",
      description: "Build faster, aim better, and secure Victory Royales",
      imageUrl: "/placeholder.svg?height=400&width=600",
      badgeText: "NEW",
    },
    {
      title: "Apex Legends",
      description: "Enhanced movement and precision aiming for competitive play",
      imageUrl: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "HWID Spoofer",
      description: "Universal hardware ID spoofing for all your games",
      imageUrl: "/placeholder.svg?height=400&width=600",
      badgeText: "ESSENTIAL",
    },
  ]

  useEffect(() => {
    setMounted(true)

    // Auto-rotate games
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % games.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [games.length])

  const nextGame = () => {
    setActiveIndex((prev) => (prev + 1) % games.length)
  }

  const prevGame = () => {
    setActiveIndex((prev) => (prev - 1 + games.length) % games.length)
  }

  if (!mounted) return null

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          Supported Games
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Explore our collection of premium gaming enhancement tools
        </p>
      </motion.div>

      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="w-full max-w-md h-96"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <ThreeDCard
                  imageUrl={games[activeIndex].imageUrl}
                  title={games[activeIndex].title}
                  description={games[activeIndex].description}
                  badgeText={games[activeIndex].badgeText}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation buttons */}
        <motion.button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full"
          onClick={prevGame}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <motion.button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full"
          onClick={nextGame}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {games.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-red-500 w-6" : "bg-gray-600"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
