"use client"

import type React from "react"

import { motion } from "framer-motion"
import { MessageCircle, Mail, Clock, Phone, Send, User, FileText, AlertCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"
import { useState } from "react"

export default function ContactSupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    priority: "medium",
    category: "general",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      response: "< 5 minutes",
      color: "from-green-600 to-emerald-600",
      action: "Start Chat",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "Always Open",
      response: "< 2 hours",
      color: "from-blue-600 to-cyan-600",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Priority Support",
      description: "VIP members get priority phone support",
      availability: "Business Hours",
      response: "Immediate",
      color: "from-purple-600 to-violet-600",
      action: "Call Now",
    },
  ]

  const categories = [
    { value: "general", label: "General Inquiry" },
    { value: "technical", label: "Technical Issue" },
    { value: "billing", label: "Billing & Payment" },
    { value: "account", label: "Account Management" },
    { value: "bug", label: "Bug Report" },
    { value: "feature", label: "Feature Request" },
    { value: "security", label: "Security Concern" },
    { value: "other", label: "Other" },
  ]

  const priorities = [
    { value: "low", label: "Low", color: "text-green-400" },
    { value: "medium", label: "Medium", color: "text-yellow-400" },
    { value: "high", label: "High", color: "text-orange-400" },
    { value: "urgent", label: "Urgent", color: "text-red-400" },
  ]

  const faqItems = [
    {
      question: "How do I install Calamari?",
      answer:
        "Download the installer from our website and follow the setup wizard. Make sure to disable your antivirus temporarily during installation.",
    },
    {
      question: "Why is my antivirus blocking Calamari?",
      answer: "This is normal behavior. Add Calamari to your antivirus exclusions list to prevent false positives.",
    },
    {
      question: "How do I update my subscription?",
      answer: "Log into your account dashboard and navigate to the billing section to manage your subscription.",
    },
    {
      question: "What should I do if I get banned?",
      answer:
        "Contact our support team immediately with your ban details. We'll investigate and provide guidance on next steps.",
    },
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
              Contact Support
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get help from our expert support team. We're here to assist you 24/7 with any questions or issues.
            </motion.p>
          </motion.div>

          {/* Support Channels */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Choose Your Support Channel
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the best way to reach us based on your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/10 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${channel.color} flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <channel.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-300 transition-colors">
                      {channel.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{channel.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="text-gray-400">{channel.availability}</span>
                      </div>
                      <div className="flex items-center justify-center text-sm">
                        <AlertCircle className="h-4 w-4 mr-2 text-green-400" />
                        <span className="text-green-400">Response: {channel.response}</span>
                      </div>
                    </div>
                    <button
                      className={`w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r ${channel.color} hover:opacity-90 transition-opacity`}
                    >
                      {channel.action}
                    </button>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${channel.color}`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        <User className="inline h-4 w-4 mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        <Mail className="inline h-4 w-4 mr-2" />
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
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                        <FileText className="inline h-4 w-4 mr-2" />
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
                        <AlertCircle className="inline h-4 w-4 mr-2" />
                        Priority
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
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors"
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                      placeholder="Please provide detailed information about your issue..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Quick answers to common questions</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3">{item.question}</h3>
                    <p className="text-gray-300">{item.answer}</p>
                  </div>
                </motion.div>
              ))}
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
                Need More Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Explore our additional resources for more assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/help-center"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-bold text-white hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-900/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Visit Help Center
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
                  href="/bug-reports"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg font-bold text-white hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-yellow-900/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Report Bug
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
