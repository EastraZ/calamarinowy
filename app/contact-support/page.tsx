"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Mail, Clock, Phone, Send, CheckCircle, AlertCircle, HelpCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

interface SupportFormData {
  name: string
  email: string
  subject: string
  category: string
  priority: string
  description: string
  attachments: File[]
}

interface SupportChannel {
  icon: React.ElementType
  title: string
  description: string
  responseTime: string
  availability: string
  action: string
  color: string
}

interface FAQ {
  question: string
  answer: string
  category: string
}

export default function ContactSupportPage() {
  const [formData, setFormData] = useState<SupportFormData>({
    name: "",
    email: "",
    subject: "",
    category: "general",
    priority: "medium",
    description: "",
    attachments: [],
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Support ticket submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        attachments: Array.from(e.target.files),
      })
    }
  }

  const supportChannels: SupportChannel[] = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      responseTime: "< 5 minutes",
      availability: "24/7",
      action: "Start Chat",
      color: "from-blue-600 to-blue-500",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      responseTime: "< 2 hours",
      availability: "24/7",
      action: "Send Email",
      color: "from-green-600 to-green-500",
    },
    {
      icon: Phone,
      title: "Priority Support",
      description: "Premium users get priority phone support",
      responseTime: "< 30 minutes",
      availability: "Business Hours",
      action: "Call Now",
      color: "from-purple-600 to-purple-500",
    },
  ]

  const categories = [
    { value: "general", label: "General Question" },
    { value: "technical", label: "Technical Issue" },
    { value: "billing", label: "Billing & Payment" },
    { value: "account", label: "Account Management" },
    { value: "bug", label: "Bug Report" },
    { value: "feature", label: "Feature Request" },
    { value: "installation", label: "Installation Help" },
    { value: "compatibility", label: "Game Compatibility" },
  ]

  const priorities = [
    { value: "low", label: "Low", description: "General inquiry" },
    { value: "medium", label: "Medium", description: "Standard issue" },
    { value: "high", label: "High", description: "Urgent problem" },
    { value: "critical", label: "Critical", description: "Service down" },
  ]

  const faqs: FAQ[] = [
    {
      question: "How do I install Calamari?",
      answer:
        "Download the installer from our website, run it as administrator, and follow the setup wizard. Make sure to disable your antivirus temporarily during installation.",
      category: "Installation",
    },
    {
      question: "Why is my antivirus detecting Calamari?",
      answer:
        "This is a false positive due to the nature of our software. Add Calamari to your antivirus whitelist. We guarantee our software is safe and malware-free.",
      category: "Technical",
    },
    {
      question: "How do I update my subscription?",
      answer:
        "Go to your account dashboard, click on 'Subscription', and select 'Upgrade Plan'. You can change your plan or extend your current subscription.",
      category: "Billing",
    },
    {
      question: "Can I use Calamari on multiple computers?",
      answer:
        "Each license is tied to one computer. If you need to use Calamari on multiple devices, you'll need separate licenses for each.",
      category: "Account",
    },
    {
      question: "What games are supported?",
      answer:
        "We support Rust, Fortnite, Apex Legends, Valorant, CS:GO, and many more. Check our games page for the complete list of supported titles.",
      category: "Compatibility",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click 'Forgot Password' on the login page, enter your email, and follow the instructions in the reset email we send you.",
      category: "Account",
    },
  ]

  if (isSubmitted) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
            <div className="absolute inset-0 opacity-30">
              <MatrixRain />
            </div>
          </div>

          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ticket Submitted!
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Thank you for contacting us. We've received your support ticket and will respond within 2 hours.
            </p>
            <div className="bg-black/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 max-w-md mx-auto mb-8">
              <p className="text-green-400 font-medium">Ticket ID: #SUP-2024-{Math.floor(Math.random() * 10000)}</p>
              <p className="text-gray-300 text-sm mt-2">We've sent a confirmation email with your ticket details.</p>
            </div>
            <motion.button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Another Ticket
            </motion.button>
          </motion.div>
        </div>
        <Footer />
      </>
    )
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
              Contact Support
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Need help? Our expert support team is here to assist you 24/7. Choose your preferred contact method below.
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
                Get Help Now
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${channel.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}
                    >
                      <channel.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{channel.title}</h3>
                    <p className="text-gray-300 mb-6">{channel.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center text-sm text-gray-400">
                        <Clock className="h-4 w-4 mr-2" />
                        Response: {channel.responseTime}
                      </div>
                      <div className="flex items-center justify-center text-sm text-gray-400">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Available: {channel.availability}
                      </div>
                    </div>
                    <motion.button
                      className={`w-full px-6 py-3 bg-gradient-to-r ${channel.color} rounded-lg font-bold text-white hover:opacity-90 transition-all duration-300 shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {channel.action}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Support Form */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Submit a Support Ticket
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
                        placeholder="Your full name"
                      />
                    </div>
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
                    <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                      Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 transition-colors resize-none"
                      placeholder="Please provide as much detail as possible about your issue..."
                    />
                  </div>

                  <div>
                    <label htmlFor="attachments" className="block text-sm font-medium text-gray-300 mb-2">
                      Attachments (Optional)
                    </label>
                    <input
                      type="file"
                      id="attachments"
                      name="attachments"
                      onChange={handleFileChange}
                      multiple
                      className="w-full px-4 py-3 bg-black/50 border border-red-500/20 rounded-lg text-white focus:outline-none focus:border-red-500/50 transition-colors"
                      accept=".jpg,.jpeg,.png,.gif,.pdf,.txt,.log"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Screenshots, logs, or other relevant files (Max 10MB each)
                    </p>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Support Ticket
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
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Find quick answers to common questions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <HelpCircle className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">{faq.category}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl overflow-hidden shadow-lg p-12">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-red-400">Emergency Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                If you're experiencing a critical issue that prevents you from using Calamari, contact our emergency
                support line immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+1-555-CALAMARI"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Emergency Line
                </motion.a>
                <motion.a
                  href="/discord-community"
                  className="inline-flex items-center px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] rounded-lg font-bold text-white transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Discord for Live Help
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
