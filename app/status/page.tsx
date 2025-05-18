"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

export default function StatusPage() {
  const products = [
    {
      id: "rust",
      name: "Rust",
      status: "undetected",
      lastUpdated: "May 12, 2025",
      description: "Our Rust cheat is fully undetected and working with the latest game version.",
    },
    {
      id: "fortnite",
      name: "Fortnite",
      status: "undetected",
      lastUpdated: "May 11, 2025",
      description: "Fortnite cheat is undetected and compatible with Chapter 5, Season 3.",
    },
    {
      id: "apex",
      name: "Apex Legends",
      status: "undetected",
      lastUpdated: "May 10, 2025",
      description: "Apex Legends cheat is fully operational and undetected with the latest update.",
    },
    {
      id: "script",
      name: "Script",
      status: "undetected",
      lastUpdated: "May 12, 2025",
      description: "Our recoil script is working perfectly with all supported games.",
    },
  ]

  const upcomingProducts = [
    {
      id: "valorant",
      name: "Valorant",
      status: "development",
      releaseDate: "June 2025",
      description: "Our Valorant cheat is currently in development and will be released soon.",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "undetected":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "updating":
        return <Clock className="h-6 w-6 text-yellow-500" />
      case "detected":
        return <XCircle className="h-6 w-6 text-red-500" />
      case "development":
        return <Clock className="h-6 w-6 text-blue-500" />
      default:
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "undetected":
        return "Undetected"
      case "updating":
        return "Updating"
      case "detected":
        return "Detected"
      case "development":
        return "In Development"
      default:
        return "Unknown"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "undetected":
        return "text-green-500"
      case "updating":
        return "text-yellow-500"
      case "detected":
        return "text-red-500"
      case "development":
        return "text-blue-500"
      default:
        return "text-yellow-500"
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="w-full bg-red-600 py-3 text-center text-sm font-medium md:text-base">
        Join our Discord community at{" "}
        <Link href="https://discord.gg/calamari" className="underline font-bold">
          discord.gg/calamari
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 red-gradient-text">Product Status</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check the current status of all Calamari.lol products. We regularly update our products to ensure they
            remain undetected and compatible with the latest game versions.
          </p>
        </div>

        {/* System Status Overview */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <h2 className="text-xl font-bold">All Systems Operational</h2>
                <p className="text-gray-400">Last checked: May 12, 2025 at 8:30 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-300">Operational</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-300">Updating</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-300">Detected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Current Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Current Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex items-start hover:border-green-500 transition-colors"
              >
                <div className="mr-4">{getStatusIcon(product.status)}</div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold mr-3">{product.name}</h3>
                    <span className={`text-sm font-medium ${getStatusColor(product.status)}`}>
                      {getStatusText(product.status)}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">{product.description}</p>
                  <p className="text-sm text-gray-500">Last updated: {product.lastUpdated}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Upcoming Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex items-start hover:border-blue-500 transition-colors"
              >
                <div className="mr-4">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calamari-diagonal-0MIPrqm68v07REXLgaOx76jFso80QO.png"
                      alt={`${product.name} Logo`}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-xl font-bold mr-3">{product.name}</h3>
                    <span className={`text-sm font-medium ${getStatusColor(product.status)}`}>
                      {getStatusText(product.status)}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">{product.description}</p>
                  <p className="text-sm text-gray-500">Expected release: {product.releaseDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Update History */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Recent Updates</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <div className="space-y-6">
              <div className="border-l-2 border-green-500 pl-4">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-bold">May 12, 2025</h3>
                  <span className="ml-3 text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded">All Products</span>
                </div>
                <p className="text-gray-400">
                  Updated all products to be compatible with the latest game patches. Enhanced aimbot smoothness and ESP
                  features.
                </p>
              </div>

              <div className="border-l-2 border-green-500 pl-4">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-bold">May 10, 2025</h3>
                  <span className="ml-3 text-xs bg-blue-500/20 text-blue-500 px-2 py-1 rounded">Apex Legends</span>
                </div>
                <p className="text-gray-400">
                  Added support for the new Apex Legends season. Improved item ESP and loot filter system.
                </p>
              </div>

              <div className="border-l-2 border-green-500 pl-4">
                <div className="flex items-center mb-2">
                  <h3 className="text-lg font-bold">May 8, 2025</h3>
                  <span className="ml-3 text-xs bg-red-500/20 text-red-500 px-2 py-1 rounded">Rust</span>
                </div>
                <p className="text-gray-400">
                  Updated Rust cheat with new anti-detection measures. Added improved radar and resource ESP features.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="/#subscription-plans"
            className="inline-flex items-center bg-white/10 hover:bg-white/20 px-6 py-3 rounded-md font-medium transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Purchase Now
          </motion.a>
        </div>
      </div>
    </main>
  )
}
