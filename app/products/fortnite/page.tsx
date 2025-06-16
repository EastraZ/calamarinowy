"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Zap, Target, Eye, Building, Settings, Star, Users, ShoppingCart } from "lucide-react"
import Navbar from "@/components/navbar"

export default function FortniteProductPage() {
  const variants = [
    { name: "Day", price: 12, stock: 18, productId: "35670", variantId: "120126" },
    { name: "3 Days", price: 25, stock: 15, productId: "35671", variantId: "120127" },
    { name: "Week", price: 45, stock: 10, productId: "35672", variantId: "120128" },
    { name: "Month", price: 95, stock: 8, productId: "35673", variantId: "120129" },
    { name: "Lifetime", price: 650, stock: 3, productId: "35674", variantId: "120130" },
  ]

  const features = [
    {
      icon: Target,
      title: "Advanced Aimbot",
      description: "Precision targeting with customizable FOV and smooth aim settings",
    },
    {
      icon: Eye,
      title: "Player ESP",
      description: "See all players through walls with distance and health indicators",
    },
    {
      icon: Building,
      title: "Auto Build",
      description: "Instant building assistance for defensive and offensive structures",
    },
    {
      icon: Settings,
      title: "Item ESP",
      description: "Locate weapons, shields, and valuable items instantly",
    },
    {
      icon: Zap,
      title: "Storm Prediction",
      description: "Advanced storm circle prediction and safe zone planning",
    },
    {
      icon: Shield,
      title: "Loot Tracker",
      description: "Track and prioritize the best loot spawns on the map",
    },
  ]

  const handlePurchase = (productId: string, variantId: string) => {
    window.open("https://calamari.mysellauth.com/", "_blank")
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-20">
        {/* Hero Section */}
        <section className="relative py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-600/20 to-purple-900/20 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                    <Image
                      src="/images/calamari-logo.png"
                      alt="Calamari.lol Fortnite Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                      Calamari.lol Fortnite
                    </h1>
                    <div className="flex items-center justify-center sm:justify-start space-x-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium text-sm sm:text-base">4.8</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        <span className="ml-1 text-gray-400 text-sm sm:text-base">2.8K+ users</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 text-center sm:text-left">
                  Secure Victory Royales with our advanced Fortnite enhancement suite. Build faster, aim better, and
                  dominate the competition.
                </p>
              </motion.div>

              {/* Pricing Card */}
              <motion.div
                className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 sm:p-8 border border-purple-500/50 backdrop-blur-sm order-1 lg:order-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Choose Your Plan</h3>
                <div className="space-y-3 mb-8">
                  {variants.map((variant, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border border-gray-700/50 bg-gray-900/30 hover:border-purple-500/30 transition-all space-y-3 sm:space-y-0"
                    >
                      <div className="text-center sm:text-left">
                        <div className="font-medium text-sm sm:text-base">Calamari.lol Fortnite - {variant.name}</div>
                        <div className="text-xs sm:text-sm text-gray-400">{variant.stock} In Stock</div>
                      </div>
                      <div className="flex items-center justify-center sm:justify-end space-x-4">
                        <div className="text-lg sm:text-xl font-bold">${variant.price}</div>
                        <button
                          onClick={() => handlePurchase(variant.productId, variant.variantId)}
                          className="px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm flex items-center space-x-2"
                        >
                          <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>Buy Now</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Victory Royale Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                Everything you need to dominate in Fortnite with advanced building and combat tools
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl p-6 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Why Choose Calamari.lol?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                Join thousands of satisfied users who trust Calamari.lol for their Victory Royale needs
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {[
                {
                  icon: Shield,
                  title: "100% Undetected",
                  description: "Advanced anti-cheat bypass",
                },
                {
                  icon: Zap,
                  title: "Instant Setup",
                  description: "Ready in under 30 seconds",
                },
                {
                  icon: Users,
                  title: "2.8K+ Users",
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
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-purple-600/20 to-purple-900/20 rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
                  </div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-semibold mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
