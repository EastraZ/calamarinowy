"use client"

import { motion } from "framer-motion"
import { Shield, FileText, Mail, AlertTriangle, Clock, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

export default function DMCAPage() {
  const dmcaSteps = [
    {
      step: 1,
      title: "Submit Notice",
      description: "Send a complete DMCA takedown notice to our designated agent",
      icon: FileText,
    },
    {
      step: 2,
      title: "Review Process",
      description: "We review all notices within 24-48 hours of receipt",
      icon: Clock,
    },
    {
      step: 3,
      title: "Action Taken",
      description: "Valid claims result in content removal or access restriction",
      icon: CheckCircle,
    },
    {
      step: 4,
      title: "Notification",
      description: "All parties are notified of the action taken",
      icon: Mail,
    },
  ]

  const requiredElements = [
    "Physical or electronic signature of the copyright owner or authorized agent",
    "Identification of the copyrighted work claimed to have been infringed",
    "Identification of the material that is claimed to be infringing",
    "Information reasonably sufficient to permit us to contact the complaining party",
    "A statement that the complaining party has a good faith belief that use is not authorized",
    "A statement that the information in the notification is accurate and under penalty of perjury",
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
              DMCA Policy
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Calamari respects intellectual property rights and complies with the Digital Millennium Copyright Act
              (DMCA).
            </motion.p>
          </motion.div>

          {/* Overview */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Our Commitment</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              We take copyright infringement seriously and will respond to clear notices of alleged copyright
              infringement. This policy outlines our procedures for handling DMCA takedown notices and
              counter-notifications in accordance with the Digital Millennium Copyright Act.
            </p>
          </motion.div>

          {/* DMCA Process */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-12">DMCA Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dmcaSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-red-400 mb-2">Step {step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Required Elements */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Required Elements for DMCA Notice</h3>
            <p className="text-gray-300 mb-6">
              To be effective, a DMCA takedown notice must include all of the following elements:
            </p>
            <ul className="space-y-4">
              {requiredElements.map((element, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <span>{element}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Counter-Notification */}
          <motion.div
            className="bg-black/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Counter-Notification Process</h3>
            <p className="text-gray-300 mb-6">
              If you believe your content was removed in error, you may submit a counter-notification.
              Counter-notifications must include:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Your physical or electronic signature</span>
              </li>
              <li className="flex items-start text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Identification of the material that was removed</span>
              </li>
              <li className="flex items-start text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>
                  A statement under penalty of perjury that you have a good faith belief the material was removed in
                  error
                </span>
              </li>
              <li className="flex items-start text-gray-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Your contact information and consent to jurisdiction</span>
              </li>
            </ul>
          </motion.div>

          {/* Important Warning */}
          <motion.div
            className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Important Warning</h3>
                <p className="text-gray-300">
                  Filing a false DMCA notice or counter-notification may result in legal liability. Please ensure you
                  have the right to make such claims before submitting any notices.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8 border border-red-500/20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">DMCA Designated Agent</h3>
            <p className="text-gray-300 mb-6">
              Send all DMCA notices and counter-notifications to our designated agent:
            </p>
            <div className="bg-black/30 rounded-lg p-6 max-w-md mx-auto">
              <div className="text-left space-y-2">
                <div className="text-white font-medium">DMCA Agent</div>
                <div className="text-gray-300">Calamari Legal Department</div>
                <div className="text-gray-300">Email: dmca@calamari.gg</div>
                <div className="text-gray-300">Subject: DMCA Notice/Counter-Notice</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Please allow 24-48 hours for processing of all DMCA-related communications.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
