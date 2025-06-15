"use client"

import { motion } from "framer-motion"
import {
  Download,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  HelpCircle,
  ShoppingCart,
  UserPlus,
  Settings,
  ExternalLink,
  Info,
} from "lucide-react"
import MatrixRain from "@/components/matrix-rain"
import { useState } from "react"

export default function DownloadPage() {
  const [downloadStarted, setDownloadStarted] = useState(false)

  const handleDownload = () => {
    window.open("https://calamaris-organization.gitbook.io/", "_blank")
    setDownloadStarted(true)
    // Reset the button state after a short delay
    setTimeout(() => {
      setDownloadStarted(false)
    }, 3000)
  }

  const downloadSteps = [
    {
      title: "Purchase a Subscription",
      description: "Choose a subscription plan that fits your needs from our pricing page.",
      icon: ShoppingCart,
    },
    {
      title: "Create an Account",
      description: "Sign up for an account to access your downloads and manage your subscription.",
      icon: UserPlus,
    },
    {
      title: "Download the Installer",
      description: "Download the latest version of Calamari from your account dashboard.",
      icon: Download,
    },
    {
      title: "Install and Configure",
      description: "Run the installer and follow the setup instructions to configure Calamari.",
      icon: Settings,
    },
  ]

  const systemRequirements = {
    os: "Windows 10/11 (64-bit)",
    processor: "Intel Core i3-6100 / AMD Ryzen 3 1200 or better",
    memory: "4 GB RAM minimum, 8 GB recommended",
    storage: "500 MB available space",
    network: "Broadband Internet connection",
  }

  return (
    <>
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
              Download Calamari
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get the latest version of our advanced gaming enhancement software
            </motion.p>
          </motion.div>

          {/* Important HudSight Notice */}
          <motion.div
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl overflow-hidden shadow-lg p-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Info className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Required Software - HudSight</h3>
                  <div className="space-y-3 text-gray-300">
                    <p className="text-lg font-medium">
                      To inject Calamari, you must download the following software first:
                    </p>
                    <div className="bg-black/40 rounded-lg p-4 border border-blue-500/30">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-blue-300">https://hudsight.com/</span>
                        <motion.a
                          href="https://hudsight.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium text-white transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Download HudSight
                        </motion.a>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p>
                        <strong>Important:</strong> Run HudSight before you inject Calamari. The cheat will wait for
                        HudSight after you press OK to inject and will not inject until it's active.
                      </p>
                      <p>Please download HudSight and have it running before attempting to use Calamari.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Card */}
          <motion.div
            className="max-w-3xl mx-auto mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                  <div className="mb-6 md:mb-0">
                    <h2 className="text-3xl font-bold text-white mb-2">Calamari v4.0.1 ULTRA</h2>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center text-green-400">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span>Latest Version</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Updated: June 5, 2025</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    className={`px-6 py-3 rounded-lg font-bold text-white flex items-center space-x-2 ${
                      downloadStarted
                        ? "bg-green-600 hover:bg-green-500"
                        : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400"
                    } transition-all duration-300 shadow-lg shadow-red-900/20`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    disabled={downloadStarted}
                  >
                    {downloadStarted ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span>Opening Documentation...</span>
                      </>
                    ) : (
                      <>
                        <Download className="h-5 w-5" />
                        <span>Download Now</span>
                      </>
                    )}
                  </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">File Information</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">File Size:</span>
                        <span className="text-gray-300">42.8 MB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">File Type:</span>
                        <span className="text-gray-300">Executable (.exe)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">SHA-256:</span>
                        <span className="text-gray-300 text-xs">8f4e2a1d...</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Release Notes</h3>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Improved detection avoidance for all supported games</li>
                      <li>• Added support for latest game updates</li>
                      <li>• Enhanced performance and reduced CPU usage</li>
                      <li>• Fixed minor bugs and stability issues</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-400 mb-1">Important Notice</h4>
                    <p className="text-sm text-gray-300">
                      This software is for educational purposes only. You must have an active subscription to use
                      Calamari. Disable your antivirus before installation to prevent false positives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How to Download */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                How to Get Started
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow these simple steps to download and install Calamari
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {downloadSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* System Requirements */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                System Requirements
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Make sure your system meets these requirements before downloading
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-700/50">
                    <span className="text-gray-400">Operating System</span>
                    <span className="text-gray-300">{systemRequirements.os}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-700/50">
                    <span className="text-gray-400">Processor</span>
                    <span className="text-gray-300">{systemRequirements.processor}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-700/50">
                    <span className="text-gray-400">Memory</span>
                    <span className="text-gray-300">{systemRequirements.memory}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-700/50">
                    <span className="text-gray-400">Storage</span>
                    <span className="text-gray-300">{systemRequirements.storage}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-400">Network</span>
                    <span className="text-gray-300">{systemRequirements.network}</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="/system-requirements"
                    className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors"
                  >
                    <HelpCircle className="h-4 w-4 mr-1" />
                    View detailed system requirements
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Security Notice */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Security & Privacy</h3>
                    <div className="space-y-3 text-gray-300">
                      <p>
                        Calamari is digitally signed and verified safe by our security team. However, some antivirus
                        software may flag it as a false positive due to its advanced capabilities.
                      </p>
                      <p>
                        We recommend temporarily disabling your antivirus during installation and adding Calamari to
                        your exclusions list. This is a common requirement for gaming enhancement software.
                      </p>
                      <p>
                        Your privacy is important to us. Calamari does not collect personal data or monitor your system
                        beyond what's necessary for functionality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              If you encounter any issues during download or installation, our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/help-center"
                className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Help Center
              </motion.a>
              <motion.a
                href="/contact-support"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
