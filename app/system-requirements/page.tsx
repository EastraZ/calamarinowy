"use client"

import { motion } from "framer-motion"
import { Check, X, Cpu, MemoryStickIcon as Memory, HardDrive, Globe, ShieldCheck } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

export default function SystemRequirementsPage() {
  const requirements = {
    minimum: {
      os: "Windows 10 (64-bit)",
      processor: "Intel Core i3-6100 / AMD Ryzen 3 1200",
      memory: "4 GB RAM",
      graphics: "DirectX 11 compatible",
      storage: "500 MB available space",
      network: "Broadband Internet connection",
      additional: "Administrator access",
    },
    recommended: {
      os: "Windows 10/11 (64-bit)",
      processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
      memory: "8 GB RAM",
      graphics: "DirectX 12 compatible",
      storage: "1 GB available space",
      network: "High-speed Internet connection",
      additional: "Administrator access, Disabled Windows Defender",
    },
  }

  const compatibilityList = [
    { name: "Windows 10 Home", compatible: true },
    { name: "Windows 10 Pro", compatible: true },
    { name: "Windows 11 Home", compatible: true },
    { name: "Windows 11 Pro", compatible: true },
    { name: "Windows 8.1", compatible: true, note: "Limited features" },
    { name: "Windows 7", compatible: false },
    { name: "macOS", compatible: false },
    { name: "Linux", compatible: false },
  ]

  const antivirusCompat = [
    { name: "Windows Defender", compatible: true, note: "Requires exclusions" },
    { name: "Avast", compatible: true, note: "Requires exclusions" },
    { name: "AVG", compatible: true, note: "Requires exclusions" },
    { name: "Norton", compatible: true, note: "Requires exclusions" },
    { name: "McAfee", compatible: true, note: "Requires exclusions" },
    { name: "Kaspersky", compatible: false },
    { name: "Bitdefender", compatible: false },
    { name: "ESET", compatible: false },
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
              System Requirements
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Check if your system meets the requirements to run Calamari smoothly
            </motion.p>
          </motion.div>

          {/* Requirements Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Minimum Requirements */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Minimum Requirements</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Operating System</h3>
                      <p className="text-gray-400">{requirements.minimum.os}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center mr-4 mt-1">
                      <Cpu className="h-5 w-5 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Processor</h3>
                      <p className="text-gray-400">{requirements.minimum.processor}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center mr-4 mt-1">
                      <Memory className="h-5 w-5 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Memory</h3>
                      <p className="text-gray-400">{requirements.minimum.memory}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Graphics</h3>
                      <p className="text-gray-400">{requirements.minimum.graphics}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center mr-4 mt-1">
                      <HardDrive className="h-5 w-5 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Storage</h3>
                      <p className="text-gray-400">{requirements.minimum.storage}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center mr-4 mt-1">
                      <Globe className="h-5 w-5 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Network</h3>
                      <p className="text-gray-400">{requirements.minimum.network}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center mr-4 mt-1">
                      <ShieldCheck className="h-5 w-5 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Additional</h3>
                      <p className="text-gray-400">{requirements.minimum.additional}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-gray-700 to-gray-600"></div>
            </motion.div>

            {/* Recommended Requirements */}
            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Recommended Requirements</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Operating System</h3>
                      <p className="text-gray-400">{requirements.recommended.os}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 mt-1">
                      <Cpu className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Processor</h3>
                      <p className="text-gray-400">{requirements.recommended.processor}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 mt-1">
                      <Memory className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Memory</h3>
                      <p className="text-gray-400">{requirements.recommended.memory}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Graphics</h3>
                      <p className="text-gray-400">{requirements.recommended.graphics}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 mt-1">
                      <HardDrive className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Storage</h3>
                      <p className="text-gray-400">{requirements.recommended.storage}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 mt-1">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Network</h3>
                      <p className="text-gray-400">{requirements.recommended.network}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 mt-1">
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Additional</h3>
                      <p className="text-gray-400">{requirements.recommended.additional}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-red-600 to-red-500"></div>
            </motion.div>
          </div>

          {/* OS Compatibility */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Operating System Compatibility
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Check if your operating system is compatible with Calamari
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-900/30 to-black border-b border-red-500/20">
                      <th className="py-4 px-6 text-left text-white">Operating System</th>
                      <th className="py-4 px-6 text-center text-white">Compatibility</th>
                      <th className="py-4 px-6 text-left text-white">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-red-500/10">
                    {compatibilityList.map((os, index) => (
                      <motion.tr
                        key={index}
                        className="hover:bg-red-500/5 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true, amount: 0.1 }}
                      >
                        <td className="py-3 px-6 text-gray-300">{os.name}</td>
                        <td className="py-3 px-6 text-center">
                          {os.compatible ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                              <Check className="h-4 w-4 text-white" />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 rounded-full">
                              <X className="h-4 w-4 text-white" />
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-6 text-gray-400">{os.note || "-"}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Antivirus Compatibility */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Antivirus Compatibility
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Some antivirus software may interfere with Calamari's operation
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-900/30 to-black border-b border-red-500/20">
                      <th className="py-4 px-6 text-left text-white">Antivirus</th>
                      <th className="py-4 px-6 text-center text-white">Compatibility</th>
                      <th className="py-4 px-6 text-left text-white">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-red-500/10">
                    {antivirusCompat.map((av, index) => (
                      <motion.tr
                        key={index}
                        className="hover:bg-red-500/5 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true, amount: 0.1 }}
                      >
                        <td className="py-3 px-6 text-gray-300">{av.name}</td>
                        <td className="py-3 px-6 text-center">
                          {av.compatible ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                              <Check className="h-4 w-4 text-white" />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 rounded-full">
                              <X className="h-4 w-4 text-white" />
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-6 text-gray-400">{av.note || "-"}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Installation Instructions */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Installation Instructions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow these steps to properly install and configure Calamari
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Disable Antivirus</h3>
                    <p className="text-gray-300">
                      Temporarily disable your antivirus software, including Windows Defender. This is necessary to
                      prevent false positives during installation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Download Installer</h3>
                    <p className="text-gray-300">
                      Download the Calamari installer from your account dashboard after purchase. The file will be named
                      "Calamari_Setup.exe".
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Run as Administrator</h3>
                    <p className="text-gray-300">
                      Right-click the installer and select "Run as administrator". This is required for proper
                      installation of all components.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Follow Installation Wizard</h3>
                    <p className="text-gray-300">
                      Follow the on-screen instructions in the installation wizard. Choose your installation directory
                      and select which game integrations you want to install.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Create Antivirus Exclusions</h3>
                    <p className="text-gray-300">
                      After installation, add the Calamari installation folder to your antivirus exclusions list.
                      Detailed instructions for various antivirus programs are available in our knowledge base.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Login and Activate</h3>
                    <p className="text-gray-300">
                      Launch Calamari, log in with your account credentials, and activate your subscription. Your
                      license will be automatically validated.
                    </p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              If your system meets the requirements, you're ready to experience Calamari's advanced features.
            </p>
            <motion.a
              href="/#subscription-plans"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Calamari Now
            </motion.a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
