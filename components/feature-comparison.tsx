"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export default function FeatureComparison() {
  const features = [
    { name: "Memory Injection", calamari: true, mek: false, fluent: true },
    { name: "Kernel Driver", calamari: true, mek: false, fluent: false },
    { name: "Neural Aimbot", calamari: true, mek: false, fluent: false },
    { name: "Process Hollowing", calamari: true, mek: true, fluent: false },
    { name: "DLL Hijacking", calamari: true, mek: false, fluent: true },
    { name: "HWID Spoofing", calamari: true, mek: false, fluent: false },
    { name: "Anti-Screenshot", calamari: true, mek: false, fluent: false },
    { name: "Stream Protection", calamari: true, mek: true, fluent: false },
    { name: "Bypass VAC", calamari: true, mek: false, fluent: true },
    { name: "Bypass EAC", calamari: true, mek: false, fluent: false },
    { name: "Bypass BattlEye", calamari: true, mek: false, fluent: false },
    { name: "Manual Mapping", calamari: true, mek: true, fluent: false },
  ]

  return (
    <section className="container mx-auto px-4 py-20 relative z-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          Why Choose Calamari?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          See how we stack up against the competition with advanced exploits
        </p>
      </motion.div>

      <motion.div
        className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-4 text-gray-300 font-medium">Features</th>
                <th className="text-center p-4 text-red-400 font-bold">Calamari</th>
                <th className="text-center p-4 text-gray-400 font-medium">MEK</th>
                <th className="text-center p-4 text-gray-400 font-medium">Fluent</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={feature.name}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <td className="p-4 text-white font-medium">{feature.name}</td>
                  <td className="p-4 text-center">
                    {feature.calamari ? (
                      <Check className="h-5 w-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.mek ? (
                      <Check className="h-5 w-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-400 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.fluent ? (
                      <Check className="h-5 w-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-400 mx-auto" />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-t border-red-500/20">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Advanced Exploit Technology</h3>
            <p className="text-gray-300 mb-4">Calamari uses cutting-edge techniques that competitors can't match</p>
            <motion.button
              onClick={() => window.open("https://calamari.mysellauth.com/#products", "_blank")}
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg font-bold text-white hover:from-red-500 hover:to-orange-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Calamari Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
