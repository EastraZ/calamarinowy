"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Github, Twitter, Youtube, MessageCircle, Mail, MapPin, Phone, Shield, Zap, Users } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#subscription-plans" },
      { name: "Games Supported", href: "/our-product" },
      { name: "System Requirements", href: "/support" },
      { name: "Download", href: "/purchase" },
    ],
    support: [
      { name: "Help Center", href: "/support" },
      { name: "Discord Community", href: "https://discord.gg/calamari" },
      { name: "Contact Support", href: "/support" },
      { name: "Bug Reports", href: "/support" },
      { name: "Feature Requests", href: "/support" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/about" },
      { name: "Careers", href: "/about" },
      { name: "Press Kit", href: "/about" },
      { name: "Blog", href: "/blog" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refunds" },
      { name: "DMCA", href: "/dmca" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  }

  const socialLinks = [
    { icon: MessageCircle, href: "https://discord.gg/calamari", label: "Discord", color: "hover:text-[#5865F2]" },
    { icon: Twitter, href: "https://twitter.com/calamari", label: "Twitter", color: "hover:text-[#1DA1F2]" },
    { icon: Youtube, href: "https://youtube.com/calamari", label: "YouTube", color: "hover:text-[#FF0000]" },
    { icon: Github, href: "https://github.com/calamari", label: "GitHub", color: "hover:text-[#333]" },
  ]

  const stats = [
    { icon: Users, value: "9,879", label: "Active Users" },
    { icon: Shield, value: "100%", label: "Undetected" },
    { icon: Zap, value: "99.9%", label: "Uptime" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(239, 68, 68, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(239, 68, 68, 0.1) 50%, rgba(147, 51, 234, 0.1) 100%)",
              "linear-gradient(45deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(239, 68, 68, 0.1) 100%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
        animate={{
          background: [
            "linear-gradient(90deg, #ef4444 0%, #8b5cf6 50%, #3b82f6 100%)",
            "linear-gradient(90deg, #3b82f6 0%, #ef4444 50%, #8b5cf6 100%)",
            "linear-gradient(90deg, #8b5cf6 0%, #3b82f6 50%, #ef4444 100%)",
          ],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Top section with stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pb-16 border-b border-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-red-500/30 transition-colors"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex justify-center mb-4"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <stat.icon className="h-8 w-8 text-red-400" />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div className="flex items-center mb-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Calamari
              </span>
            </motion.div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              The world's most advanced gaming enhancement platform. Trusted by thousands of players worldwide for
              undetected, professional-grade gaming tools.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <motion.div
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-4 w-4 mr-3" />
                <span>support@calamari.gg</span>
              </motion.div>
              <motion.div
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="h-4 w-4 mr-3" />
                <span>24/7 Discord Support</span>
              </motion.div>
              <motion.div
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <MapPin className="h-4 w-4 mr-3" />
                <span>Global Service</span>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 transition-colors ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-bold text-white mb-4 capitalize">
                {category === "product"
                  ? "Product"
                  : category === "support"
                    ? "Support"
                    : category === "company"
                      ? "Company"
                      : "Legal"}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter section */}
        <motion.div
          className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8 mb-12 border border-red-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates, exclusive offers, and gaming tips delivered to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                required
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-medium text-white hover:from-red-600 hover:to-orange-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubscribed}
              >
                {isSubscribed ? "✓ Subscribed!" : "Subscribe"}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-gray-400 mb-4 md:mb-0">
            <p>&copy; 2024 Calamari. All rights reserved.</p>
            <p className="text-sm mt-1">Professional gaming enhancement tools for competitive players.</p>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <motion.span
              className="flex items-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              All systems operational
            </motion.span>
            <span>Version 3.5.2</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
