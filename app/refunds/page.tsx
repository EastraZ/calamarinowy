"use client"

import { motion } from "framer-motion"
import { RefreshCw, Clock, CheckCircle, XCircle, AlertTriangle, CreditCard } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

export default function RefundPolicyPage() {
  const refundSteps = [
    {
      step: 1,
      title: "Submit Request",
      description: "Contact our support team within 30 days of purchase",
      icon: RefreshCw,
    },
    {
      step: 2,
      title: "Review Process",
      description: "Our team reviews your request within 24-48 hours",
      icon: Clock,
    },
    {
      step: 3,
      title: "Approval Decision",
      description: "You'll receive an email with our decision and next steps",
      icon: CheckCircle,
    },
    {
      step: 4,
      title: "Refund Processing",
      description: "Approved refunds are processed within 5-7 business days",
      icon: CreditCard,
    },
  ]

  const eligibleReasons = [
    "Technical issues preventing software use",
    "Billing errors or duplicate charges",
    "Service not as described",
    "Account access problems",
    "Compatibility issues with your system",
  ]

  const ineligibleReasons = [
    "Account banned by game developers",
    "Changed mind after 30 days",
    "Violation of our Terms of Service",
    "Successful use of the software",
    "Partial subscription periods",
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
              Refund Policy
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We stand behind our products. Learn about our 30-day money-back guarantee and refund process.
            </motion.p>
          </motion.div>

          {/* 30-Day Guarantee */}
          <motion.div
            className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We're confident you'll love Calamari. If you're not completely satisfied within 30 days of purchase, we'll
              provide a full refund, no questions asked.
            </p>
          </motion.div>

          {/* Refund Process */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-12">Refund Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {refundSteps.map((step, index) => (
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

          {/* Eligible vs Ineligible */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Eligible Reasons */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Eligible for Refund</h3>
              </div>
              <ul className="space-y-3">
                {eligibleReasons.map((reason, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ineligible Reasons */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mr-4">
                  <XCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Not Eligible for Refund</h3>
              </div>
              <ul className="space-y-3">
                {ineligibleReasons.map((reason, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Important Notes */}
          <motion.div
            className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Important Notes</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Refunds are processed to the original payment method</li>
                  <li>• Processing time may vary depending on your bank or payment provider</li>
                  <li>• Lifetime subscriptions have a 30-day refund window from purchase date</li>
                  <li>• Partial refunds are not available for unused subscription time</li>
                  <li>• All refund requests must include your order number and reason</li>
                </ul>
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
            <h3 className="text-3xl font-bold text-white mb-4">Need a Refund?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our support team to start your refund request. We're here to help and will process your request as
              quickly as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-support"
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg font-medium text-white hover:from-red-600 hover:to-orange-600 transition-colors"
              >
                Request Refund
              </a>
              <a
                href="mailto:refunds@calamari.gg"
                className="px-6 py-3 border border-white/20 rounded-lg font-medium text-white hover:border-white/40 transition-colors"
              >
                Email Refunds Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
