"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Lightbulb, ThumbsUp, MessageSquare, Send, Star, TrendingUp } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"
import { useState } from "react"

export default function FeatureRequestsPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    justification: "",
    category: "general",
    priority: "medium",
    game: "",
    email: "",
  })

  const [votedFeatures, setVotedFeatures] = useState<Set<number>>(new Set())

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Feature request submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleVote = (index: number) => {
    const newVotedFeatures = new Set(votedFeatures)
    if (newVotedFeatures.has(index)) {
      newVotedFeatures.delete(index)
    } else {
      newVotedFeatures.add(index)
    }
    setVotedFeatures(newVotedFeatures)
  }

  const categories = [
    { value: "general", label: "General Feature" },
    { value: "ui", label: "User Interface" },
    { value: "performance", label: "Performance" },
    { value: "security", label: "Security" },
    { value: "customization", label: "Customization" },
    { value: "automation", label: "Automation" },
    { value: "integration", label: "Integration" },
    { value: "analytics", label: "Analytics" },
  ]

  const priorities = [
    { value: "low", label: "Low", color: "text-green-400" },
    { value: "medium", label: "Medium", color: "text-yellow-400" },
    { value: "high", label: "High", color: "text-orange-400" },
    { value: "critical", label: "Critical", color: "text-red-400" },
  ]

  const games = [
    { value: "", label: "All Games" },
    { value: "rust", label: "Rust" },
    { value: "fortnite", label: "Fortnite" },
    { value: "apex", label: "Apex Legends" },
    { value: "valorant", label: "Valorant" },
    { value: "csgo", label: "CS:GO" },
    { value: "other", label: "Other" },
  ]

  const popularRequests = [
    {
      title: "Advanced Aimbot Smoothing",
      description: "More granular control over aimbot smoothing with custom curves and acceleration patterns.",
      category: "Performance",
      votes: 247,
      comments: 18,
      status: "Under Review",
      game: "All Games",
      date: "2024-01-10",
    },
    {
      title: "Custom ESP Colors",
      description: "Allow users to customize ESP colors for different player types and objects.",
      category: "Customization",
      votes: 189,
      comments: 12,
      status: "Planned",
      game: "Rust",
      date: "2024-01-08",
    },
    {
      title: "Auto-Update System",
      description: "Automatic updates for the cheat without requiring manual downloads.",
      category: "General",
      votes: 156,
      comments: 24,
      status: "In Development",
      game: "All Games",
      date: "2024-01-05",
    },
    {
      title: "Mobile App Companion",
      description: "Mobile app to manage settings and view statistics remotely.",
      category: "Integration",
      votes: 134,
      comments: 31,
      status: "Under Review",
      game: "All Games",
      date: "2024-01-03",
    },
    {
      title: "Advanced Radar System",
      description: "Enhanced radar with distance indicators and player information.",
      category: "UI",
      votes: 98,
      comments: 15,
      status: "Planned",
      game: "Fortnite",
      date: "2023-12-28",
    },
  ]

  const recentlyImplemented = [
    {
      title: "Hotkey Customization",
      description: "Full customization of all hotkeys and key bindings.",
      implementedDate: "2024-01-15",
      originalVotes: 312,
    },
    {
      title: "Performance Metrics Dashboard",
      description: "Real-time performance monitoring and statistics.",
      implementedDate: "2024-01-12",
      originalVotes: 278,
    },
    {
      title: "Multi-Monitor Support",
      description: "Better support for multi-monitor setups and configurations.",
      implementedDate: "2024-01-08",
      originalVotes: 156,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Planned":
        return "bg-blue-500/20 text-blue-400"
      case "In Development":
        return "bg-green-500/20 text-green-400"
      case "Under Review":
        return "bg-yellow-500/20 text-yellow-400"
      case "Implemented":
        return "bg-purple-500/20 text-purple-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

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
              Feature Requests
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Shape the future of Calamari by suggesting new features and voting on community ideas.
            </motion.p>
          </motion.div>

          {/* Recently Implemented Features */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Recently Implemented
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Community-requested features that have been added to Calamari
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentlyImplemented.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-green-500/20 rounded-xl overflow-hidden shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mr-3">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                      Implemented
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{feature.originalVotes} votes</span>
                    <span>{feature.implementedDate}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Popular Feature Requests */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Popular Requests
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Vote on community feature requests to help us prioritize development
              </p>
            </div>

            <div className="space-y-6">
              {popularRequests.map((request, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/10 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl font-bold text-white mr-3">{request.title}</h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}
                          >
                            {request.status}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4">{request.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full">{request.category}</span>
                          <span>{request.game}</span>
                          <span>{request.date}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center ml-6">
                        <motion.button
                          onClick={() => handleVote(index)}
                          className={`flex flex-col items-center p-3 rounded-lg transition-colors ${
                            votedFeatures.has(index)
                              ? "bg-red-500/20 text-red-400"
                              : "bg-gray-500/20 text-gray-400 hover:bg-red-500/10 hover:text-red-400"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ThumbsUp className="h-5 w-5 mb-1" />
                          <span className="text-sm font-bold">
                            {request.votes + (votedFeatures.has(index) ? 1 : 0)}
                          </span>
                        </motion.button>
                        <div className="flex items-center mt-2 text-xs text-gray-400">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          {request.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Submit Feature Request Form */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Submit a Feature Request
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Have an idea for a new feature? Share it with the community!
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="game" className="block text-sm font-medium text-gray-300 mb-2">
                        Target Game
                      </label>
                      <select
                        id="game"
                        name="game"
                        value={formData.game}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white focus:outline-none focus:border-red-500/50 transition-colors"
                      >
                        {games.map((game) => (
                          <option key={game.value} value={game.value} className="bg-black">
                            {game.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                        Feature Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white focus:outline-none focus:border-red-500/50 transition-colors"
                      >
                        {categories.map((category) => (
                          <option key={category.value} value={category.value} className="bg-black">
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="priority" className="block text-sm font-medium text-gray-300 mb-2">
                        Priority Level
                      </label>
                      <select
                        id="priority"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white focus:outline-none focus:border-red-500/50 transition-colors"
                      >
                        {priorities.map((priority) => (
                          <option key={priority.value} value={priority.value} className="bg-black">
                            {priority.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                      Feature Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors"
                      placeholder="Brief title for your feature request"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                      Feature Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                      placeholder="Detailed description of the feature you'd like to see..."
                    />
                  </div>

                  <div>
                    <label htmlFor="justification" className="block text-sm font-medium text-gray-300 mb-2">
                      Why is this feature needed?
                    </label>
                    <textarea
                      id="justification"
                      name="justification"
                      value={formData.justification}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                      placeholder="Explain how this feature would benefit users and improve the software..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Feature Request
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Community Guidelines */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Feature Request Guidelines
              </h2>
              <div className="max-w-4xl mx-auto text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <Lightbulb className="mr-2 h-5 w-5 text-yellow-400" />
                      Good Requests Include:
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Clear and specific descriptions</li>
                      <li>• Explanation of benefits to users</li>
                      <li>• Examples of how it would work</li>
                      <li>• Consideration of implementation complexity</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5 text-green-400" />
                      How We Prioritize:
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Community votes and engagement</li>
                      <li>• Development complexity and resources</li>
                      <li>• Alignment with product roadmap</li>
                      <li>• Impact on user experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
