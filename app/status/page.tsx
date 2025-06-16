"use client"

import Link from "next/link"
import { CheckCircle, AlertTriangle, XCircle, Clock, ArrowLeft, Shield, Zap, Users, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function StatusPage() {
  const products = [
    {
      id: "rust",
      name: "Calamari.lol Rust",
      status: "undetected",
      lastUpdated: "December 16, 2024",
      description: "Advanced Rust enhancement tools with ESP, aimbot, and resource tracking.",
      uptime: "99.9%",
      users: "2.1M+",
    },
    {
      id: "fortnite",
      name: "Calamari.lol Fortnite",
      status: "undetected",
      lastUpdated: "December 15, 2024",
      description: "Victory Royale tools with aimbot, ESP, and building assistance.",
      uptime: "99.8%",
      users: "1.8M+",
    },
    {
      id: "apex",
      name: "Calamari.lol Apex",
      status: "undetected",
      lastUpdated: "December 14, 2024",
      description: "Champion-level Apex Legends tools with advanced movement and tracking.",
      uptime: "99.9%",
      users: "1.5M+",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "undetected":
        return <CheckCircle className="h-5 w-5 text-red-500" />
      case "updating":
        return <Clock className="h-5 w-5 text-orange-500" />
      case "detected":
        return <XCircle className="h-5 w-5 text-red-600" />
      default:
        return <AlertTriangle className="h-5 w-5 text-orange-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "undetected":
        return "Fully Operational"
      case "updating":
        return "Updating"
      case "detected":
        return "Under Maintenance"
      default:
        return "Unknown"
    }
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Matrix Background */}
      <div className="fixed inset-0 z-0">
        <div className="matrix-bg opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                System Status
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real-time status monitoring for all Calamari.lol gaming enhancement tools. We maintain 99.9% uptime with
              instant updates.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-6 text-center">
              <Shield className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-red-500">100%</div>
              <div className="text-sm text-gray-400">Undetected</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6 text-center">
              <Zap className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-500">30s</div>
              <div className="text-sm text-gray-400">Instant Setup</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-6 text-center">
              <Users className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-red-500">5M+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6 text-center">
              <Star className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-500">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </motion.div>

          {/* System Overview */}
          <motion.div
            className="bg-gray-900/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-10 w-10 text-red-500 mr-4" />
                <div>
                  <h2 className="text-2xl font-bold">All Systems Operational</h2>
                  <p className="text-gray-400">Last updated: December 16, 2024 at 3:25 AM</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm text-gray-300">Operational</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-300">Maintenance</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Products Status */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Product Status
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-gray-900/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <div className="flex items-center">
                      {getStatusIcon(product.status)}
                      <span className="ml-2 text-sm font-medium text-red-500">{getStatusText(product.status)}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{product.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Uptime</div>
                      <div className="text-lg font-bold text-red-500">{product.uptime}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Users</div>
                      <div className="text-lg font-bold text-orange-500">{product.users}</div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">Last updated: {product.lastUpdated}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Updates */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Recent Updates
              </span>
            </h2>
            <div className="bg-gray-900/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-bold">December 16, 2024</h3>
                    <span className="ml-3 text-xs bg-red-500/20 text-red-500 px-3 py-1 rounded-full">All Products</span>
                  </div>
                  <p className="text-gray-400">
                    Enhanced anti-detection systems across all products. Improved aimbot smoothness and ESP rendering
                    performance.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-bold">December 14, 2024</h3>
                    <span className="ml-3 text-xs bg-orange-500/20 text-orange-500 px-3 py-1 rounded-full">
                      Apex Legends
                    </span>
                  </div>
                  <p className="text-gray-400">
                    Added support for Season 19 updates. New movement enhancement features and improved third-party
                    detection.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-bold">December 12, 2024</h3>
                    <span className="ml-3 text-xs bg-red-500/20 text-red-500 px-3 py-1 rounded-full">Rust</span>
                  </div>
                  <p className="text-gray-400">
                    Updated for latest Rust patch. Enhanced resource ESP and improved player tracking algorithms.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-600/20 backdrop-blur-sm px-8 py-4 font-medium transition-all duration-300 text-white hover:bg-red-600/30 hover:border-red-500/40 group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Return to Homepage
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .matrix-bg {
          background: linear-gradient(0deg, transparent 24%, rgba(255, 0, 0, 0.05) 25%, rgba(255, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.05) 75%, rgba(255, 0, 0, 0.05) 76%, transparent 77%, transparent),
                      linear-gradient(90deg, transparent 24%, rgba(255, 0, 0, 0.05) 25%, rgba(255, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.05) 75%, rgba(255, 0, 0, 0.05) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
          animation: matrix-move 20s linear infinite;
        }
        
        @keyframes matrix-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </main>
  )
}
