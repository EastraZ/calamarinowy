"use client"

import { motion } from "framer-motion"
import { Check, X, Star } from "lucide-react"

export default function FeatureComparison() {
  const features = [
    { name: "AI-Powered Aimbot", calamari: true, competitor1: false, competitor2: true },
    { name: "ESP/Wallhack", calamari: true, competitor1: true, competitor2: true },
    { name: "Triggerbot", calamari: true, competitor1: true, competitor2: false },
    { name: "Recoil Control", calamari: true, competitor1: false, competitor2: true },
    { name: "Speed Hack", calamari: true, competitor1: false, competitor2: false },
    { name: "Radar Hack", calamari: true, competitor1: true, competitor2: false },
    { name: "24/7 Support", calamari: true, competitor1: false, competitor2: false },
    { name: "Undetected Guarantee", calamari: true, competitor1: false, competitor2: false },
    { name: "Regular Updates", calamari: true, competitor1: true, competitor2: false },
    { name: "Multi-Game Support", calamari: true, competitor1: false, competitor2: true },
  ]

  return (
    <motion.section
      className="container mx-auto px-4 py-20 relative z-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Why Choose Calamari?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">See how we stack up against the competition</p>
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Header */}
        <div className="grid grid-cols-4 gap-4 p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-b border-white/10">
          <div className="text-white font-bold">Features</div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-bold">Calamari</span>
            </div>
          </div>
          <div className="text-center text-gray-400 font-medium">MEK</div>
          <div className="text-center text-gray-400 font-medium">Fluent</div>
        </div>

        {/* Features */}
        <div className="divide-y divide-white/10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-4 gap-4 p-4 hover:bg-white/5 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="text-gray-300 font-medium">{feature.name}</div>
              <div className="flex justify-center">
                {feature.calamari ? (
                  <motion.div
                    className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Check className="h-4 w-4 text-white" />
                  </motion.div>
                ) : (
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <X className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                {feature.competitor1 ? (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                ) : (
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <X className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                {feature.competitor2 ? (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                ) : (
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <X className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-t border-white/10">
          <div className="text-center">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-white hover:from-red-500 hover:to-orange-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const plansSection = document.getElementById("subscription-plans")
                if (plansSection) {
                  plansSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Choose Calamari Today
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
