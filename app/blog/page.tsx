"use client"

import { useState } from "react"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Gaming Enhancement: AI-Powered Assistance",
      excerpt:
        "Discover how artificial intelligence is revolutionizing the gaming enhancement industry and what it means for competitive players.",
      author: "Alex Rodriguez",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Technology",
      image: "/placeholder.svg?height=400&width=600",
      featured: true,
    },
    {
      id: 2,
      title: "Staying Undetected: Advanced Anti-Cheat Bypass Techniques",
      excerpt: "Learn about the latest methods we use to keep Calamari undetected across all supported games.",
      author: "Sarah Chen",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Security",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Rust Gameplay Revolution: New Features in Calamari 3.5",
      excerpt:
        "Explore the latest updates to our Rust enhancement tools, including improved aimbot accuracy and ESP features.",
      author: "Marcus Johnson",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Updates",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Building a Competitive Edge in Fortnite",
      excerpt: "Tips and strategies for using Calamari's Fortnite features to dominate in competitive matches.",
      author: "Emily Davis",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Gaming",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "HWID Spoofing: Complete Protection Guide",
      excerpt: "Everything you need to know about hardware ID spoofing and how it protects your gaming accounts.",
      author: "David Wilson",
      date: "2023-12-20",
      readTime: "10 min read",
      category: "Security",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Apex Legends Season 19: Optimization Updates",
      excerpt: "How we've optimized Calamari for the latest Apex Legends season and new character abilities.",
      author: "Lisa Thompson",
      date: "2023-12-15",
      readTime: "4 min read",
      category: "Updates",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const categories = ["All", "Technology", "Security", "Updates", "Gaming"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

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
              Calamari Blog
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Stay updated with the latest gaming enhancement news, tutorials, and insights from our expert team.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Post */}
          {selectedCategory === "All" && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={blogPosts[0].image || "/placeholder.svg"}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {blogPosts[0].readTime}
                      </span>
                      <span className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        {blogPosts[0].category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{blogPosts[0].title}</h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-300">{blogPosts[0].author}</span>
                      </div>
                      <button className="flex items-center text-red-400 hover:text-red-300 font-medium">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {filteredPosts.slice(selectedCategory === "All" ? 1 : 0).map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-red-500/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-300 text-sm">{post.author}</span>
                    </div>
                    <button className="flex items-center text-red-400 hover:text-red-300 font-medium text-sm">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            className="mt-20 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8 border border-red-500/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates, exclusive content, and gaming tips delivered directly
              to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-medium text-white hover:from-red-600 hover:to-orange-600 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
