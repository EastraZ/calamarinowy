"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Target, Cpu, Layers, Fingerprint, Gauge, Sparkles } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

export default function FeaturesPage() {
  const features = [
    {
      icon: Target,
      title: "AI-Powered Aimbot",
      description:
        "Our advanced neural network provides human-like aim assistance that adapts to your playstyle and evades detection systems.",
      color: "from-red-600 to-orange-600",
    },
    {
      icon: Shield,
      title: "Undetectable ESP",
      description:
        "See enemies through walls with our proprietary ESP technology that bypasses all known anti-cheat systems.",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Zap,
      title: "Instant Triggerbot",
      description:
        "React faster than humanly possible with our zero-latency triggerbot that fires the moment an enemy enters your crosshair.",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Cpu,
      title: "Advanced Recoil Control",
      description:
        "Perfect weapon handling with our dynamic recoil compensation system that works across all weapons and firing modes.",
      color: "from-purple-600 to-violet-600",
    },
    {
      icon: Gauge,
      title: "Speed Optimization",
      description:
        "Gain the edge with subtle movement enhancements that improve your reaction time without triggering velocity checks.",
      color: "from-yellow-600 to-amber-600",
    },
    {
      icon: Layers,
      title: "Multi-Game Support",
      description:
        "One subscription covers all supported games with seamless updates whenever game clients are patched.",
      color: "from-pink-600 to-rose-600",
    },
    {
      icon: Fingerprint,
      title: "Hardware ID Spoofing",
      description:
        "Protect your gaming accounts with our advanced HWID spoofing technology that prevents hardware bans.",
      color: "from-indigo-600 to-violet-600",
    },
    {
      icon: Sparkles,
      title: "Custom Configurations",
      description:
        "Create and save multiple configurations for different games, weapons, or situations with our intuitive interface.",
      color: "from-teal-600 to-emerald-600",
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
              Calamari Features
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover the most advanced gaming enhancement tools available, designed for competitive players who demand
              the best.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
                <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
              </motion.div>
            ))}
          </div>

          {/* Advanced Features Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Advanced Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proprietary systems leverage cutting-edge technology to provide unmatched performance
              </p>
            </div>

            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold text-white">Neural Network Engine</h3>
                  <p className="text-gray-300">
                    Our proprietary neural network analyzes game data in real-time, making thousands of
                    micro-adjustments per second to provide human-like assistance that's impossible to detect.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Self-learning algorithms adapt to your playstyle
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Behavior randomization prevents pattern detection
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      Continuous updates based on anti-cheat developments
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-black/30 rounded-xl p-6 border border-red-500/10 relative overflow-hidden"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-transparent"></div>
                    {/* Neural network visualization */}
                    <div className="grid grid-cols-8 grid-rows-8 gap-2 h-full w-full p-4">
                      {[...Array(64)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-red-500/30 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 2,
                          }}
                        ></motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-white mb-4">Performance Metrics</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300 text-sm">Accuracy Improvement</span>
                          <span className="text-red-400 text-sm">+43%</span>
                        </div>
                        <div className="w-full bg-gray-700/30 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "43%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300 text-sm">Reaction Time</span>
                          <span className="text-red-400 text-sm">-65%</span>
                        </div>
                        <div className="w-full bg-gray-700/30 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "65%" }}
                            transition={{ duration: 1, delay: 0.7 }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300 text-sm">Detection Evasion</span>
                          <span className="text-red-400 text-sm">99.9%</span>
                        </div>
                        <div className="w-full bg-gray-700/30 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "99.9%" }}
                            transition={{ duration: 1, delay: 0.9 }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Feature Comparison */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Feature Comparison
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how Calamari stacks up against other providers in the market
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-red-900/30 to-black border-b border-red-500/20">
                    <th className="py-4 px-6 text-left text-white">Feature</th>
                    <th className="py-4 px-6 text-center text-white">Calamari</th>
                    <th className="py-4 px-6 text-center text-gray-400">Other Providers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-500/10">
                  {[
                    { name: "AI-Powered Aimbot", calamari: true, others: false },
                    { name: "ESP/Wallhack", calamari: true, others: true },
                    { name: "Triggerbot", calamari: true, others: true },
                    { name: "Recoil Control", calamari: true, others: true },
                    { name: "Speed Hack", calamari: true, others: false },
                    { name: "Radar Hack", calamari: true, others: true },
                    { name: "HWID Spoofer", calamari: true, others: false },
                    { name: "Multi-Game Support", calamari: true, others: false },
                    { name: "24/7 Support", calamari: true, others: false },
                    { name: "Undetected Guarantee", calamari: true, others: false },
                    { name: "Regular Updates", calamari: true, others: true },
                    { name: "Custom Configurations", calamari: true, others: false },
                  ].map((feature, index) => (
                    <motion.tr
                      key={index}
                      className="hover:bg-red-500/5 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      <td className="py-3 px-6 text-gray-300">{feature.name}</td>
                      <td className="py-3 px-6 text-center">
                        {feature.calamari ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-6 text-center">
                        {feature.others ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-green-500/50 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-red-500/50 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
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
              Ready to Dominate?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of players who have already taken their gaming to the next level with Calamari.
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
