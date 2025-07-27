"use client"

import { motion } from "framer-motion"
import { FileText, Scale, AlertCircle, Shield, Users, Gavel } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By using Calamari services, you agree to these Terms of Service",
        "You must be at least 18 years old to use our services",
        "These terms may be updated periodically with notice",
        "Continued use constitutes acceptance of updated terms",
        "If you disagree with any terms, discontinue use immediately",
      ],
    },
    {
      icon: Shield,
      title: "Service Description",
      content: [
        "Calamari provides gaming enhancement software for PC games",
        "Services include game modifications, HWID spoofing, and related tools",
        "Software is provided 'as-is' without warranties",
        "We reserve the right to modify or discontinue services",
        "Service availability may vary by region and game updates",
      ],
    },
    {
      icon: Users,
      title: "User Responsibilities",
      content: [
        "You are responsible for your account security and credentials",
        "Use services only for personal, non-commercial purposes",
        "Do not share, resell, or distribute our software",
        "Comply with all applicable laws and game terms of service",
        "Report any security vulnerabilities or bugs promptly",
      ],
    },
    {
      icon: AlertCircle,
      title: "Prohibited Activities",
      content: [
        "Reverse engineering, decompiling, or modifying our software",
        "Using services for commercial gain or competitive advantage",
        "Attempting to bypass our licensing or authentication systems",
        "Harassing other users or our support staff",
        "Violating any applicable laws or regulations",
      ],
    },
    {
      icon: Scale,
      title: "Liability and Disclaimers",
      content: [
        "Use of gaming enhancements may violate game terms of service",
        "We are not responsible for account bans or game-related consequences",
        "Services provided without warranty of any kind",
        "Liability limited to the amount paid for services",
        "You assume all risks associated with using our software",
      ],
    },
    {
      icon: Gavel,
      title: "Termination and Enforcement",
      content: [
        "We may terminate accounts for violations of these terms",
        "No refunds for terminated accounts due to policy violations",
        "These terms are governed by applicable jurisdiction laws",
        "Disputes resolved through binding arbitration",
        "Severability clause applies if any terms are deemed invalid",
      ],
    },
  ]

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
              Terms of Service
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Please read these terms carefully before using Calamari services. Your use of our platform constitutes
              acceptance of these terms.
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

          {/* Important Notice */}
          <motion.div
            className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Important Notice</h3>
                <p className="text-gray-300">
                  Gaming enhancement software may violate the terms of service of certain games. Use at your own risk.
                  We are not responsible for any consequences including but not limited to account suspensions or bans.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {sections.map((section, index) => (
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
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8 border border-red-500/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">Questions About These Terms?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you have any questions about these Terms of Service or need clarification on any points, please contact
              our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-support"
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-medium text-white hover:from-red-600 hover:to-orange-600 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="mailto:legal@calamari.gg"
                className="px-6 py-3 border border-white/20 rounded-lg font-medium text-white hover:border-white/40 transition-colors"
              >
                Email Legal Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
