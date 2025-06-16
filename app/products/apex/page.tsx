"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Zap, Target, Eye, Move, Settings, Star, Users, ShoppingCart } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ApexProductPage() {
  const variants = [
    { name: "Day", price: 10, stock: 20, productId: "35675", variantId: "120131" },
    { name: "3 Days", price: 20, stock: 17, productId: "35676", variantId: "120132" },
    { name: "Week", price: 35, stock: 14, productId: "35677", variantId: "120133" },
    { name: "Month", price: 80, stock: 11, productId: "35678", variantId: "120134" },
    { name: "Lifetime", price: 580, stock: 6, productId: "35679", variantId: "120135" },
  ]

  const features = [
    {
      icon: Target,
      title: "Precision Aimbot",
      description: "Advanced targeting system with bone selection and prediction",
    },
    {
      icon: Eye,
      title: "Champion ESP",
      description: "See all players, their legends, and equipment through walls",
    },
    {
      icon: Move,
      title: "Movement Enhancement",
      description: "Advanced movement mechanics and slide jumping assistance",
    },
    {
      icon: Settings,
      title: "Loot Filter",
      description: "Automatically highlight and prioritize the best loot",
    },
    {
      icon: Shield,
      title: "Third Party Detection",
      description: "Advanced warning system for incoming third parties",
    },
    {
      icon: Zap,
      title: "Recoil Control",
      description: "Perfect weapon recoil patterns for all guns",
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
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-black" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600/20 to-orange-900/20 rounded-full flex items-center justify-center mr-6">
                    <Image
                      src="/images/calamari-logo.png"
                      alt="Calamari.lol Apex Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
                      Calamari.lol Apex
                    </h1>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium">4.9</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-400" />
                        <span className="ml-1 text-gray-400">1.5M+ users</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-gray-300 mb-8">
                  Become the champion with our advanced Apex Legends enhancement tools. Dominate the arena with
                  precision and style.
                </p>
              </motion.div>

              {/* Pricing Card */}
              <motion.div
                className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-orange-500/50 backdrop-blur-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-center">Choose Your Plan</h3>
                <div className="space-y-3 mb-8">
                  {variants.map((variant, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg border border-gray-700/50 bg-gray-900/30 hover:border-orange-500/30 transition-all"
                    >
                      <div>
                        <div className="font-medium">Calamari.lol Apex - {variant.name}</div>
                        <div className="text-sm text-gray-400">{variant.stock} In Stock</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-xl font-bold">${variant.price}</div>
                        <button
                          onClick={() => handlePurchase(variant.productId, variant.variantId)}
                          className="px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 rounded-lg font-medium transition-all duration-300 text-sm flex items-center space-x-2"
                        >
                          <ShoppingCart className="h-4 w-4" />
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Champion Features</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Everything you need to dominate in Apex Legends with advanced competitive tools
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl p-6 border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600/20 to-orange-900/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-orange-400" />
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
              <h2 className="text-4xl font-bold mb-4">Why Choose Calamari.lol Apex?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Join millions of satisfied users who trust Calamari.lol for their competitive gaming needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  title: "1.5M+ Users",
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
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-600/20 to-orange-900/20 rounded-full flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-orange-400" />
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
