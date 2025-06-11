"use client"

import { motion } from "framer-motion"
import { Search, Book, MessageCircle, Download, Settings, Shield, HelpCircle, ChevronRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"
import { useState } from "react"

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    {
      title: "Getting Started",
      icon: Book,
      description: "Learn the basics of using Calamari",
      articles: [
        "How to install Calamari",
        "First-time setup guide",
        "System requirements check",
        "Account activation",
      ],
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Installation & Setup",
      icon: Download,
      description: "Installation guides and troubleshooting",
      articles: [
        "Windows installation guide",
        "Antivirus configuration",
        "Firewall settings",
        "Common installation errors",
      ],
      color: "from-green-600 to-emerald-600",
    },
    {
      title: "Configuration",
      icon: Settings,
      description: "Configure Calamari for optimal performance",
      articles: ["Game-specific settings", "Performance optimization", "Hotkey configuration", "Profile management"],
      color: "from-purple-600 to-violet-600",
    },
    {
      title: "Security & Safety",
      icon: Shield,
      description: "Stay safe while using Calamari",
      articles: [
        "Best practices for staying undetected",
        "HWID spoofing guide",
        "Account security tips",
        "Ban prevention strategies",
      ],
      color: "from-red-600 to-orange-600",
    },
    {
      title: "Troubleshooting",
      icon: HelpCircle,
      description: "Solve common issues and problems",
      articles: ["Game not launching", "Features not working", "Performance issues", "Connection problems"],
      color: "from-yellow-600 to-amber-600",
    },
    {
      title: "Support",
      icon: MessageCircle,
      description: "Get help from our support team",
      articles: [
        "How to contact support",
        "Creating a support ticket",
        "Live chat guidelines",
        "Response time expectations",
      ],
      color: "from-pink-600 to-rose-600",
    },
  ]

  const popularArticles = [
    {
      title: "How to Install Calamari on Windows 10/11",
      category: "Installation",
      views: "15,234",
      difficulty: "Beginner",
    },
    {
      title: "Configuring Windows Defender Exclusions",
      category: "Security",
      views: "12,891",
      difficulty: "Intermediate",
    },
    {
      title: "Optimizing Calamari for Rust",
      category: "Configuration",
      views: "9,567",
      difficulty: "Advanced",
    },
    {
      title: "Troubleshooting Connection Issues",
      category: "Troubleshooting",
      views: "8,234",
      difficulty: "Intermediate",
    },
    {
      title: "HWID Spoofing Best Practices",
      category: "Security",
      views: "7,891",
      difficulty: "Advanced",
    },
  ]

  const quickLinks = [
    { name: "Download Latest Version", path: "/download" },
    { name: "System Requirements", path: "/system-requirements" },
    { name: "Contact Support", path: "/contact-support" },
    { name: "Bug Reports", path: "/bug-reports" },
    { name: "Feature Requests", path: "/feature-requests" },
    { name: "Discord Community", path: "/discord-community" },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute inset-0 opacity-30">
            <MatrixRain />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Help Center
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Find answers to your questions and get the most out of Calamari
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Find help articles organized by topic</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/10 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{category.description}</p>
                    <div className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <div
                          key={articleIndex}
                          className="flex items-center text-sm text-gray-400 hover:text-gray-300 transition-colors"
                        >
                          <ChevronRight className="h-3 w-3 mr-2" />
                          {article}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${category.color}`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Popular Articles */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Popular Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Most viewed help articles by our community</p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg">
              <div className="divide-y divide-red-500/10">
                {popularArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    className="p-6 hover:bg-red-500/5 transition-colors cursor-pointer group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-white group-hover:text-red-300 transition-colors mb-2">
                          {article.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full">{article.category}</span>
                          <span>{article.views} views</span>
                          <span
                            className={`px-2 py-1 rounded-full ${
                              article.difficulty === "Beginner"
                                ? "bg-green-500/20 text-green-400"
                                : article.difficulty === "Intermediate"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {article.difficulty}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Quick Links
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Frequently accessed pages and resources</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.path}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden shadow-lg p-6 hover:shadow-red-500/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white group-hover:text-red-300 transition-colors font-medium">
                      {link.name}
                    </span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Support CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Can't find what you're looking for? Our support team is here to help you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact-support"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Support
                </motion.a>
                <motion.a
                  href="/discord-community"
                  className="inline-flex items-center px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] rounded-lg font-bold text-white transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Discord
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
