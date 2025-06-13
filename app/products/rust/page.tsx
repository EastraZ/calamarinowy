"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Zap, Target, Eye, Map, Settings, ShoppingCart, Star, Users } from "lucide-react"
import Navbar from "@/components/navbar"

export default function RustProductPage() {
  const variants = [
    { name: "Day", price: 9, stock: 1, selected: true },
    { name: "3 Days", price: 18, stock: 13 },
    { name: "Week", price: 29, stock: 12 },
    { name: "Month", price: 70, stock: 15 },
    { name: "Lifetime", price: 520, stock: 5 },
  ]

  const features = [
    {
      icon: Eye,
      title: "Advanced ESP",
      description: "See players, items, and structures through walls with customizable overlays",
    },
    {
      icon: Target,
      title: "Smart Aimbot",
      description: "Precision targeting with humanized movement and customizable settings",
    },
    {
      icon: Map,
      title: "Resource Scanner",
      description: "Locate valuable resources and materials across the map instantly",
    },
    {
      icon: Users,
      title: "Player Tracker",
      description: "Track player movements and predict their actions",
    },
    {
      icon: Shield,
      title: "Raid Assistant",
      description: "Advanced tools for planning and executing successful raids",
    },
    {
      icon: Settings,
      title: "Anti-Recoil",
      description: "Eliminate weapon recoil for perfect accuracy in combat",
    },
  ]

  const handlePurchase = () => {
    window.open("https://calamari.mysellauth.com/#products", "_blank")
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-full flex items-center justify-center mr-6">
                    <Image
                      src="/images/calamari-diagonal.png"
                      alt="Calamari Rust Logo"
                      width={48}
                      height={48}
                      className="object-contain filter brightness-0 invert"
                    />
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
                      Calamari Rust
                    </h1>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium">4.9</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-400" />
                        <span className="ml-1 text-gray-400">2.1M+ users</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-gray-300 mb-8">
                  Dominate the wasteland with our advanced Rust enhancement tools. Features include ESP, aimbot,
                  resource detection, and much more.
                </p>
              </motion.div>

              {/* Pricing Card */}
              <motion.div
                className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-red-500/50 backdrop-blur-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center">Choose Your Plan</h3>
                <div className="space-y-3 mb-8">
                  {variants.map((variant, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-lg border transition-all cursor-pointer ${
                        variant.selected
                          ? "border-red-500 bg-red-500/10"
                          : "border-gray-700/50 bg-gray-900/30 hover:border-red-500/30"
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div>
                        <div className="font-medium">Calamari Rust - {variant.name}</div>
                        <div className="text-sm text-gray-400">{variant.stock} In Stock</div>
                      </div>
                      <div className="text-xl font-bold">${variant.price}</div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  onClick={handlePurchase}
                  className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-red-900/20 hover:shadow-red-900/40 flex items-center justify-center text-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart className="mr-2 h-6 w-6" />
                  Purchase Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Everything you need to dominate in Rust with advanced tools and features
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl p-6 border border-gray-800/50 hover:border-red-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Why Choose Calamari Rust?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Join millions of satisfied users who trust Calamari for their gaming enhancement needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "100% Undetected",
                  description: "Advanced stealth technology",
                },
                {
                  icon: Zap,
                  title: "Instant Setup",
                  description: "Ready in under 30 seconds",
                },
                {
                  icon: Users,
                  title: "2M+ Users",
                  description: "Trusted worldwide",
                },
                {
                  icon: Settings,
                  title: "24/7 Support",
                  description: "Expert assistance always",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-full flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
