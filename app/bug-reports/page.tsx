"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Clock, User, FileText, Camera, Send } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"
import { useState } from "react"

export default function BugReportsPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    steps: "",
    expected: "",
    actual: "",
    severity: "medium",
    category: "general",
    game: "",
    version: "",
    os: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Bug report submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const severityLevels = [
    { value: "low", label: "Low", color: "text-green-400", description: "Minor issue, doesn't affect functionality" },
    {
      value: "medium",
      label: "Medium",
      color: "text-yellow-400",
      description: "Moderate issue, some functionality affected",
    },
    {
      value: "high",
      label: "High",
      color: "text-orange-400",
      description: "Major issue, significant functionality affected",
    },
    { value: "critical", label: "Critical", color: "text-red-400", description: "Severe issue, software unusable" },
  ]

  const categories = [
    { value: "general", label: "General Bug" },
    { value: "ui", label: "User Interface" },
    { value: "performance", label: "Performance" },
    { value: "crash", label: "Crash/Freeze" },
    { value: "feature", label: "Feature Not Working" },
    { value: "installation", label: "Installation Issue" },
    { value: "compatibility", label: "Game Compatibility" },
    { value: "security", label: "Security Issue" },
  ]

  const games = [
    { value: "", label: "Select Game" },
    { value: "rust", label: "Rust" },
    { value: "fortnite", label: "Fortnite" },
    { value: "apex", label: "Apex Legends" },
    { value: "valorant", label: "Valorant" },
    { value: "csgo", label: "CS:GO" },
    { value: "other", label: "Other" },
  ]

  const recentBugs = [
    {
      id: "#BUG-2024-001",
      title: "Aimbot not working in Rust after update",
      status: "Fixed",
      severity: "High",
      date: "2024-01-15",
      reporter: "User123",
    },
    {
      id: "#BUG-2024-002",
      title: "ESP flickering on certain maps",
      status: "In Progress",
      severity: "Medium",
      date: "2024-01-14",
      reporter: "GamerPro",
    },
    {
      id: "#BUG-2024-003",
      title: "Launcher crashes on Windows 11",
      status: "Under Review",
      severity: "Critical",
      date: "2024-01-13",
      reporter: "TechUser",
    },
    {
      id: "#BUG-2024-004",
      title: "Hotkeys not responding",
      status: "Fixed",
      severity: "Low",
      date: "2024-01-12",
      reporter: "Player456",
    },
  ]

  const bugReportTips = [
    {
      icon: FileText,
      title: "Be Specific",
      description: "Provide detailed information about the bug, including exact error messages and circumstances.",
    },
    {
      icon: Camera,
      title: "Include Screenshots",
      description: "Visual evidence helps us understand and reproduce the issue more quickly.",
    },
    {
      icon: Clock,
      title: "Steps to Reproduce",
      description: "List the exact steps that led to the bug so we can recreate the problem.",
    },
    {
      icon: User,
      title: "System Information",
      description: "Include your OS version, Calamari version, and game version for better troubleshooting.",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Fixed":
        return "bg-green-500/20 text-green-400"
      case "In Progress":
        return "bg-blue-500/20 text-blue-400"
      case "Under Review":
        return "bg-yellow-500/20 text-yellow-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-500/20 text-red-400"
      case "High":
        return "bg-orange-500/20 text-orange-400"
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400"
      case "Low":
        return "bg-green-500/20 text-green-400"
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
              Bug Reports
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Help us improve Calamari by reporting bugs and issues. Your feedback makes our software better for
              everyone.
            </motion.p>
          </motion.div>

          {/* Bug Report Tips */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                How to Report a Bug
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow these guidelines to help us resolve issues quickly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bugReportTips.map((tip, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden shadow-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tip.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                  <p className="text-gray-300 text-sm">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bug Report Form */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Submit a Bug Report
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fill out the form below with as much detail as possible
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
                        Affected Game
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

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                        Bug Category
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
                      <label htmlFor="severity" className="block text-sm font-medium text-gray-300 mb-2">
                        Severity Level
                      </label>
                      <select
                        id="severity"
                        name="severity"
                        value={formData.severity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white focus:outline-none focus:border-red-500/50 transition-colors"
                      >
                        {severityLevels.map((level) => (
                          <option key={level.value} value={level.value} className="bg-black">
                            {level.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="version" className="block text-sm font-medium text-gray-300 mb-2">
                        Calamari Version
                      </label>
                      <input
                        type="text"
                        id="version"
                        name="version"
                        value={formData.version}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors"
                        placeholder="e.g., v4.0.1"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                      Bug Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors"
                      placeholder="Brief description of the bug"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                      Bug Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                      placeholder="Detailed description of the bug..."
                    />
                  </div>

                  <div>
                    <label htmlFor="steps" className="block text-sm font-medium text-gray-300 mb-2">
                      Steps to Reproduce
                    </label>
                    <textarea
                      id="steps"
                      name="steps"
                      value={formData.steps}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                      placeholder="1. Open Calamari&#10;2. Click on...&#10;3. Expected result vs actual result"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="expected" className="block text-sm font-medium text-gray-300 mb-2">
                        Expected Behavior
                      </label>
                      <textarea
                        id="expected"
                        name="expected"
                        value={formData.expected}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                        placeholder="What should have happened?"
                      />
                    </div>
                    <div>
                      <label htmlFor="actual" className="block text-sm font-medium text-gray-300 mb-2">
                        Actual Behavior
                      </label>
                      <textarea
                        id="actual"
                        name="actual"
                        value={formData.actual}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                        placeholder="What actually happened?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="os" className="block text-sm font-medium text-gray-300 mb-2">
                      System Information
                    </label>
                    <input
                      type="text"
                      id="os"
                      name="os"
                      value={formData.os}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors"
                      placeholder="e.g., Windows 11 Pro, 16GB RAM, RTX 3080"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Bug Report
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Recent Bug Reports */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Recent Bug Reports
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Track the status of recently reported bugs</p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-red-500/10 border-b border-red-500/20">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Bug ID</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Title</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Severity</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Date</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Reporter</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-red-500/10">
                    {recentBugs.map((bug, index) => (
                      <motion.tr
                        key={index}
                        className="hover:bg-red-500/5 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true, amount: 0.1 }}
                      >
                        <td className="px-6 py-4 text-sm text-gray-300 font-mono">{bug.id}</td>
                        <td className="px-6 py-4 text-sm text-white">{bug.title}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(bug.status)}`}>
                            {bug.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(bug.severity)}`}
                          >
                            {bug.severity}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-300">{bug.date}</td>
                        <td className="px-6 py-4 text-sm text-gray-300">{bug.reporter}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Additional Resources */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Need Immediate Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                For urgent issues or if you need immediate assistance, contact our support team directly
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
                <motion.a
                  href="/help-center"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-bold text-white hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-900/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Help Center
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
