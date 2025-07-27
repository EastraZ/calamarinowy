"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Check, X, Crown } from "lucide-react"

export default function FeatureComparison() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)

  const features = [
    "Advanced ESP System",
    "Precision Aimbot",
    "Anti-Detection Technology",
    "Kernel-Level Protection",
    "Real-time Updates",
    "24/7 Support",
    "Custom Configurations",
    "Performance Optimization",
    "Multi-Game Support",
    "Lifetime Updates",
  ]

  const plans = [
    {
      name: "Calamari.lol",
      type: "Premium",
      icon: "/images/calamari-symbol.png",
      color: "red",
      features: [true, true, true, true, true, true, true, true, true, true],
      highlight: true,
    },
    {
      name: "Competitor",
      type: "Standard",
      icon: null,
      color: "gray",
      features: [true, false, false, false, true, false, false, false, false, false],
      highlight: false,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Calamari.lol?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we compare to other gaming enhancement tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, planIndex) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-br from-red-900/20 to-transparent border-red-500/50 shadow-2xl shadow-red-900/20"
                  : "bg-white/5 border-white/10"
              }`}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: planIndex * 0.2, duration: 0.6 }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Crown className="w-4 h-4 mr-2" />
                    RECOMMENDED
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  {plan.icon ? (
                    <Image
                      src={plan.icon || "/placeholder.svg"}
                      alt={plan.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="w-15 h-15 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-gray-400 font-bold">?</span>
                    </div>
                  )}
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-red-400" : "text-gray-400"}`}>
                  {plan.name}
                </h3>
                <p className="text-gray-400">{plan.type}</p>
              </div>

              <div className="space-y-4">
                {features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.05, duration: 0.3 }}
                  >
                    <span className="text-gray-300 text-sm">{feature}</span>
                    {plan.features[featureIndex] ? (
                      <Check className={`w-5 h-5 ${plan.highlight ? "text-red-400" : "text-gray-400"}`} />
                    ) : (
                      <X className="w-5 h-5 text-gray-600" />
                    )}
                  </motion.div>
                ))}
              </div>

              {plan.highlight && (
                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <button
                    onClick={() => window.open("https://calamari.mysellauth.com/", "_blank")}
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-red-900/30"
                  >
                    Get Calamari.lol Now
                  </button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
