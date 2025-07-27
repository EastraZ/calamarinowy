"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Account information (username, email, payment details)",
        "Hardware information for HWID spoofing functionality",
        "Usage data and performance metrics",
        "Support communications and feedback",
        "IP addresses and device information for security purposes",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Provide and maintain our gaming enhancement services",
        "Process payments and manage subscriptions",
        "Improve our software and develop new features",
        "Provide customer support and technical assistance",
        "Detect and prevent fraud or unauthorized access",
      ],
    },
    {
      icon: Shield,
      title: "Data Protection",
      content: [
        "All data is encrypted using industry-standard AES-256 encryption",
        "Secure servers with 24/7 monitoring and intrusion detection",
        "Regular security audits and penetration testing",
        "Limited access to personal data on a need-to-know basis",
        "Automatic data backup and disaster recovery procedures",
      ],
    },
    {
      icon: Lock,
      title: "Data Sharing",
      content: [
        "We never sell your personal information to third parties",
        "Data may be shared with payment processors for transactions",
        "Anonymous usage statistics may be shared with analytics providers",
        "Legal compliance may require data disclosure to authorities",
        "Service providers bound by strict confidentiality agreements",
      ],
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access and review your personal data",
        "Request correction of inaccurate information",
        "Delete your account and associated data",
        "Export your data in a portable format",
        "Opt-out of marketing communications",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Data Retention",
      content: [
        "Account data retained while subscription is active",
        "Payment records kept for 7 years for legal compliance",
        "Support tickets archived for 2 years",
        "Usage logs automatically deleted after 90 days",
        "Deleted accounts purged within 30 days",
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
              Privacy Policy
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Your privacy is our priority. Learn how we collect, use, and protect your personal information.
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

          {/* Privacy Sections */}
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
            <h3 className="text-3xl font-bold text-white mb-4">Questions About Your Privacy?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate to
              contact us.
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
