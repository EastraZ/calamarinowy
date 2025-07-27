"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Lightbulb, ThumbsUp, MessageSquare, Send, Star, TrendingUp } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

interface FeatureRequestFormData {
  title: string
  description: string
  justification: string
  category: string
  priority: string
  game: string
  email: string
}

interface PopularRequest {
  title: string
  description: string
  category: string
  votes: number
  comments: number
  status: string
  game: string
  date: string
}

interface ImplementedFeature {
  title: string
  description: string
  implementedDate: string
  originalVotes: number
}

export default function FeatureRequestsPage() {
  const [formData, setFormData] = useState<FeatureRequestFormData>({
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
    { value: "general", label: "General Enhancement" },
    { value: "ui", label: "User Interface" },
    { value: "performance", label: "Performance" },
    { value: "features", label: "New Features" },
    { value: "customization", label: "Customization" },
    { value: "automation", label: "Automation" },
    { value: "integration", label: "Integration" },
    { value: "security", label: "Security" },
  ]

  const priorities = [
    { value: "low", label: "Low", description: "Nice to have" },
    { value: "medium", label: "Medium", description: "Would improve experience" },
    { value: "high", label: "High", description: "Important for workflow" },
    { value: "critical", label: "Critical", description: "Essential feature" },
  ]

  const games = [
    { value: "", label: "All Games / General" },
    { value: "rust", label: "Rust" },
    { value: "fortnite", label: "Fortnite" },
    { value: "apex", label: "Apex Legends" },
    { value: "valorant", label: "Valorant" },
    { value: "csgo", label: "CS:GO" },
    { value: "other", label: "Other" },
  ]

  const popularRequests: PopularRequest[] = [
    {
      title: "Advanced Aimbot Smoothing",
      description: "More granular control over aimbot smoothing with custom curves and acceleration settings",
      category: "Features",
      votes: 247,
      comments: 32,
      status: "Under Review",
      game: "All Games",
      date: "2024-01-10",
    },
    {
      title: "Custom ESP Colors",
      description: "Allow users to customize ESP colors for different player types and distances",
      category: "Customization",
      votes: 189,
      comments: 28,
      status: "In Development",
      game: "Rust",
      date: "2024-01-08",
    },
    {
      title: "Profile System",
      description: "Save and switch between different configuration profiles for different games",
      category: "General",
      votes: 156,
      comments: 19,
      status: "Planned",
      game: "All Games",
      date: "2024-01-05",
    },
    {
      title: "Discord Rich Presence",
      description: "Show current game and Calamari status in Discord rich presence",
      category: "Integration",
      votes: 134,
      comments: 15,
      status: "Under Review",
      game: "All Games",
      date: "2024-01-03",
    },
    {
      title: "Radar Overlay",
      description: "Minimap radar showing enemy positions and important locations",
      category: "Features",
      votes: 98,
      comments: 22,
      status: "Planned",
      game: "Valorant",
      date: "2023-12-28",
    },
  ]

  const implementedFeatures: ImplementedFeature[] = [
    {
      title: "Hotkey Customization",
      description: "Full customization of all hotkeys and keybindings",
      implementedDate: "2024-01-01",
      originalVotes: 312,
    },
    {
      title: "Auto-Update System",
      description: "Automatic updates with rollback capability",
      implementedDate: "2023-12-15",
      originalVotes: 278,
    },
    {
      title: "Multi-Monitor Support",
      description: "Proper support for multi-monitor setups",
      implementedDate: "2023-12-01",
      originalVotes: 203,
    },
    {
      title: "Stream-Safe Mode",
      description: "Hide overlays and sensitive information while streaming",
      implementedDate: "2023-11-20",
      originalVotes: 189,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development":
        return "bg-blue-500/20 text-blue-400"
      case "Under Review":
        return "bg-yellow-500/20 text-yellow-400"
      case "Planned":
        return "bg-green-500/20 text-green-400"
      case "Completed":
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
              Shape the future of Calamari by suggesting new features and improvements. Your ideas drive our development
              roadmap.
            </motion.p>
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
                Vote on existing feature requests to help us prioritize development
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
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-white">{request.title}</h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}
                          >
                            {request.status}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4">{request.description}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                          <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded">{request.category}</span>
                          <span>{request.game}</span>
                          <span>{request.date}</span>
                          <span className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            {request.comments} comments
                          </span>
                        </div>
                      </div>
                      <div className="ml-6 flex flex-col items-center">
                        <motion.button
                          onClick={() => handleVote(index)}
                          className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 ${
                            votedFeatures.has(index)
                              ? "bg-red-500/20 text-red-400"
                              : "bg-gray-700/50 text-gray-400 hover:bg-red-500/10 hover:text-red-400"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ThumbsUp className="h-5 w-5 mb-1" />
                          <span className="text-sm font-bold">
                            {request.votes + (votedFeatures.has(index) ? 1 : 0)}
                          </span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Submit Feature Request */}
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
                Have an idea for a new feature? Let us know what you'd like to see in Calamari
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
                        Category
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
                      placeholder="Explain how this feature would improve the user experience or solve a problem..."
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
                Features that were requested by the community and have been implemented
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {implementedFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-green-500/20 rounded-xl overflow-hidden shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 mb-3">{feature.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Star className="h-4 w-4 mr-1 text-yellow-400" />
                          {feature.originalVotes} votes
                        </span>
                        <span>Implemented: {feature.implementedDate}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Guidelines */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-12">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Feature Request Guidelines
              </h2>
              <div className="max-w-4xl mx-auto text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">✅ Good Requests Include:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Clear, descriptive titles</li>
                      <li>• Detailed explanations of the feature</li>
                      <li>• Use cases and benefits</li>
                      <li>• Specific game or general application</li>
                      <li>• Consideration of implementation complexity</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">❌ Avoid These:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Vague or unclear descriptions</li>
                      <li>• Duplicate requests (check existing first)</li>
                      <li>• Requests for illegal activities</li>
                      <li>• Features that compromise security</li>
                      <li>• Overly complex or unrealistic features</li>
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
