"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Zap, Users, Clock, Star, ShoppingCart } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ProductsPage() {
  const products = [
    {
      id: "rust",
      name: "Calamari Rust",
      description: "Dominate the wasteland with advanced ESP, aimbot, and resource detection.",
      features: ["Advanced ESP", "Smart Aimbot", "Resource Scanner", "Player Tracker", "Raid Assistant", "Anti-Recoil"],
      popular: true,
      rating: 4.9,
      users: "2.1M+",
      variants: [
        { name: "Day", price: 9, stock: 1 },
        { name: "3 Days", price: 18, stock: 13 },
        { name: "Week", price: 29, stock: 12 },
        { name: "Month", price: 70, stock: 15 },
        { name: "Lifetime", price: 520, stock: 5 },
      ],
    },
    {
      id: "fortnite",
      name: "Calamari Fortnite",
      description: "Build faster, aim better, and secure more Victory Royales.",
      features: ["Soft Aim", "Build Helper", "Loot ESP", "Storm Predictor", "Player ESP", "Weapon Stats"],
      rating: 4.8,
      users: "1.8M+",
      variants: [
        { name: "Day", price: 8, stock: 3 },
        { name: "3 Days", price: 16, stock: 8 },
        { name: "Week", price: 25, stock: 10 },
        { name: "Month", price: 60, stock: 12 },
        { name: "Lifetime", price: 450, stock: 3 },
      ],
    },
    {
      id: "apex",
      name: "Calamari Apex",
      description: "Become the champion with enhanced movement and precision aiming.",
      features: ["Legend ESP", "Weapon Stats", "Third Party Alert", "Ring Predictor", "Aimbot", "Movement Helper"],
      rating: 4.9,
      users: "1.5M+",
      variants: [
        { name: "Day", price: 9, stock: 2 },
        { name: "3 Days", price: 17, stock: 6 },
        { name: "Week", price: 28, stock: 8 },
        { name: "Month", price: 65, stock: 10 },
        { name: "Lifetime", price: 480, stock: 4 },
      ],
    },
    {
      id: "hwid",
      name: "Calamari HWID Spoofer",
      description: "Stay protected with our advanced hardware ID spoofing technology.",
      features: [
        "Hardware Spoofing",
        "Registry Cleaning",
        "Disk Spoofing",
        "Network Spoofing",
        "Auto Protection",
        "Instant Activation",
      ],
      rating: 4.7,
      users: "900K+",
      variants: [
        { name: "Day", price: 6, stock: 5 },
        { name: "3 Days", price: 12, stock: 15 },
        { name: "Week", price: 20, stock: 18 },
        { name: "Month", price: 45, stock: 20 },
        { name: "Lifetime", price: 350, stock: 8 },
      ],
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
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
                Our Products
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our premium gaming enhancement tools, trusted by millions of elite gamers worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className={`relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border ${
                    product.popular ? "border-red-500/50 shadow-lg shadow-red-900/20" : "border-gray-800/50"
                  } backdrop-blur-sm hover:border-red-500/30 transition-all duration-300`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Product Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-full flex items-center justify-center mr-4">
                      <Image
                        src="/images/calamari-diagonal.png"
                        alt={`${product.name} Logo`}
                        width={32}
                        height={32}
                        className="object-contain filter brightness-0 invert"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium">{product.rating}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-400" />
                          <span className="ml-1 text-sm text-gray-400">{product.users}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">{product.description}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4">Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Variants */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-4">Pricing Options</h4>
                    <div className="space-y-3">
                      {product.variants.map((variant, variantIndex) => (
                        <div
                          key={variantIndex}
                          className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg border border-gray-700/50 hover:border-red-500/30 transition-colors"
                        >
                          <div>
                            <span className="font-medium">
                              {product.name} - {variant.name}
                            </span>
                            <div className="text-sm text-gray-400">{variant.stock} In Stock</div>
                          </div>
                          <div className="text-lg font-bold text-white">${variant.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buy Button */}
                  <motion.button
                    onClick={handlePurchase}
                    className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-red-900/20 hover:shadow-red-900/40 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy Now
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Why Choose Calamari?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our products come with industry-leading features and support
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "100% Undetected",
                  description: "Advanced stealth technology keeps you safe",
                },
                {
                  icon: Zap,
                  title: "Instant Activation",
                  description: "Ready to use in under 30 seconds",
                },
                {
                  icon: Users,
                  title: "50K+ Users",
                  description: "Trusted by elite gamers worldwide",
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  description: "Expert assistance whenever you need it",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
