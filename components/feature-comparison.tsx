"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export default function FeatureComparison() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    { name: "Magic Bullet", calamari: true, competitor1: false, competitor2: true },
    { name: "Advanced ESP", calamari: true, competitor1: true, competitor2: true },
    { name: "HWID Spoofer", calamari: true, competitor1: true, competitor2: false },
    { name: "Kernel-Level Protection", calamari: true, competitor1: false, competitor2: false },
    { name: "Undetected Status", calamari: true, competitor1: false, competitor2: true },
    { name: "24/7 Support", calamari: true, competitor1: false, competitor2: false },
    { name: "Regular Updates", calamari: true, competitor1: true, competitor2: false },
    { name: "Custom Features", calamari: true, competitor1: false, competitor2: false },
  ]

  if (!mounted) return null

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          Why Choose Calamari?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">See how we compare to other gaming enhancement tools</p>
      </motion.div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr>
              <th className="p-4 text-left text-gray-400 font-medium">Feature</th>
              <th className="p-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 mb-2 relative">
                    <img src="/images/calamari-box.png" alt="Calamari Logo" className="object-contain w-full h-full" />
                  </div>
                  <div className="text-red-400 font-bold mb-1">Calamari</div>
                  <div className="text-xs text-gray-500">Premium</div>
                </div>
              </th>
              <th className="p-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 mb-2 bg-gray-800 rounded-md flex items-center justify-center">
                    <span className="text-gray-400 font-bold text-sm">MEK</span>
                  </div>
                  <div className="text-gray-300 font-bold mb-1">MEK</div>
                  <div className="text-xs text-gray-500">Standard</div>
                </div>
              </th>
              <th className="p-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 mb-2 bg-blue-900/30 rounded-md flex items-center justify-center border border-blue-500/30">
                    <span className="text-blue-400 font-bold text-xs">FLUENT</span>
                  </div>
                  <div className="text-gray-300 font-bold mb-1">Fluent</div>
                  <div className="text-xs text-gray-500">Premium</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <motion.tr
                key={index}
                className="border-t border-gray-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="p-4 text-left">{feature.name}</td>
                <td className="p-4 text-center">
                  {feature.calamari ? (
                    <div className="flex justify-center">
                      <div className="bg-green-500/20 p-1 rounded-full">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <div className="bg-red-500/20 p-1 rounded-full">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                    </div>
                  )}
                </td>
                <td className="p-4 text-center">
                  {feature.competitor1 ? (
                    <div className="flex justify-center">
                      <div className="bg-green-500/20 p-1 rounded-full">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <div className="bg-red-500/20 p-1 rounded-full">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                    </div>
                  )}
                </td>
                <td className="p-4 text-center">
                  {feature.competitor2 ? (
                    <div className="flex justify-center">
                      <div className="bg-green-500/20 p-1 rounded-full">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <div className="bg-red-500/20 p-1 rounded-full">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                    </div>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <motion.div
        className="mt-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">The Calamari Advantage</h3>
          <p className="text-gray-300">
            With industry-leading features, unmatched security, and dedicated support, Calamari provides the ultimate
            gaming enhancement experience.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
