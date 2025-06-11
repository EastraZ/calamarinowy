"use client"

import { motion } from "framer-motion"
import { Cookie, Settings, Shield, Eye, ToggleLeft, ToggleRight } from "lucide-react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

export default function CookiePolicyPage() {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    preferences: true,
  })

  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "Required for basic website functionality and security",
      required: true,
      examples: [
        "Authentication and login status",
        "Security tokens and CSRF protection",
        "Shopping cart and session management",
        "Load balancing and server routing",
      ],
    },
    {
      icon: Eye,
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website",
      required: false,
      examples: [
        "Page views and user behavior tracking",
        "Performance monitoring and error reporting",
        "A/B testing and feature usage statistics",
        "Traffic sources and conversion tracking",
      ],
    },
    {
      icon: Settings,
      title: "Preference Cookies",
      description: "Remember your choices and personalize your experience",
      required: false,
      examples: [
        "Language and region preferences",
        "Theme and display settings",
        "Notification preferences",
        "Customized content recommendations",
      ],
    },
    {
      icon: Cookie,
      title: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track campaigns",
      required: false,
      examples: [
        "Targeted advertising and retargeting",
        "Social media integration and sharing",
        "Campaign effectiveness measurement",
        "Cross-platform user identification",
      ],
    },
  ]

  const toggleCookie = (type: string) => {
    if (type === "essential") return // Can't disable essential cookies
    setCookieSettings((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
          <div className="absolute inset-0 opacity-30">
            <MatrixRain />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
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
              Cookie Policy
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Learn how we use cookies to improve your experience and protect your privacy on our platform.
            </motion.p>
            <motion.div
              className="mt-6 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Last updated: January 15, 2024
            </motion.div>
          </motion.div>

          {/* Cookie Settings Panel */}
          <motion.div
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Cookie Preferences</h2>
            <p className="text-gray-300 text-center mb-8">
              Manage your cookie preferences below. Changes will take effect immediately.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(cookieSettings).map(([key, enabled], index) => {
                const isEssential = key === "essential"
                const displayName = key.charAt(0).toUpperCase() + key.slice(1)

                return (
                  <motion.div
                    key={key}
                    className={`bg-black/30 rounded-lg p-4 flex items-center justify-between ${
                      isEssential ? "opacity-75" : "cursor-pointer hover:bg-black/40"
                    }`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => !isEssential && toggleCookie(key)}
                  >
                    <div>
                      <h4 className="text-white font-medium">{displayName} Cookies</h4>
                      <p className="text-gray-400 text-sm">
                        {isEssential ? "Required for basic functionality" : "Optional enhancement cookies"}
                      </p>
                    </div>
                    <div className="ml-4">
                      {enabled ? (
                        <ToggleRight className={`h-8 w-8 ${isEssential ? "text-gray-500" : "text-green-400"}`} />
                      ) : (
                        <ToggleLeft className="h-8 w-8 text-gray-500" />
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="text-center mt-6">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium text-white hover:from-blue-600 hover:to-purple-600 transition-colors">
                Save Preferences
              </button>
            </div>
          </motion.div>

          {/* Cookie Types */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mr-4">
                    <type.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                    <span
                      className={`text-sm px-2 py-1 rounded-full ${
                        type.required ? "bg-red-500/20 text-red-300" : "bg-green-500/20 text-green-300"
                      }`}
                    >
                      {type.required ? "Required" : "Optional"}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div>
                  <h4 className="text-white font-medium mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third-Party Cookies */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Third-Party Cookies</h3>
            <p className="text-gray-300 mb-6">
              We may use third-party services that set their own cookies. These services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Analytics</h4>
                <p className="text-gray-400 text-sm">Google Analytics, Hotjar</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Payment Processing</h4>
                <p className="text-gray-400 text-sm">Stripe, PayPal</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Support</h4>
                <p className="text-gray-400 text-sm">Intercom, Discord</p>
              </div>
            </div>
          </motion.div>

          {/* Managing Cookies */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Managing Cookies</h3>
            <p className="text-gray-300 mb-6">
              You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Chrome</h4>
                  <p className="text-gray-400 text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Firefox</h4>
                  <p className="text-gray-400 text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Safari</h4>
                  <p className="text-gray-400 text-sm">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <h4 className="text-white font-medium mb-2">Edge</h4>
                  <p className="text-gray-400 text-sm">
                    Settings → Cookies and site permissions → Cookies and site data
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8 border border-red-500/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">Questions About Cookies?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you have any questions about our use of cookies or this Cookie Policy, please contact our privacy team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-support"
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-medium text-white hover:from-red-600 hover:to-orange-600 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="mailto:privacy@calamari.gg"
                className="px-6 py-3 border border-white/20 rounded-lg font-medium text-white hover:border-white/40 transition-colors"
              >
                Email Privacy Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
