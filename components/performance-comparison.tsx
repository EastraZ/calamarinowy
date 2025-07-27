"use client"

import { motion } from "framer-motion"

export default function PerformanceComparison() {
  const comparisonData = [
    {
      metric: "Aimbot Accuracy",
      calamari: "99.8%",
      competitors: "85-90%",
      advantage: "More natural aim patterns with AI learning",
    },
    {
      metric: "Detection Risk",
      calamari: "Virtually Zero",
      competitors: "Medium to High",
      advantage: "Proprietary kernel-level protection",
    },
    {
      metric: "Performance Impact",
      calamari: "< 1% FPS Loss",
      competitors: "5-15% FPS Loss",
      advantage: "Optimized code with minimal system footprint",
    },
    {
      metric: "Update Frequency",
      calamari: "24-48 Hours",
      competitors: "1-2 Weeks",
      advantage: "Dedicated development team for rapid updates",
    },
    {
      metric: "Support Response",
      calamari: "< 1 Hour",
      competitors: "24-48 Hours",
      advantage: "24/7 dedicated support team via Discord",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.section
      className="container mx-auto px-4 py-20 relative z-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          Why We're Better
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          See how Calamari outperforms every competitor in the market
        </p>
      </motion.div>

      <motion.div
        className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 overflow-x-auto"
        variants={itemVariants}
      >
        <table className="w-full min-w-[768px]">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-4 px-4 text-left text-gray-300">Metric</th>
              <th className="py-4 px-4 text-center text-red-400 font-bold">Calamari</th>
              <th className="py-4 px-4 text-center text-gray-400">Competitors</th>
              <th className="py-4 px-4 text-left text-gray-300">Our Advantage</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((item, index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-white/5 transition-colors">
                <td className="py-4 px-4 text-left font-medium text-white">{item.metric}</td>
                <td className="py-4 px-4 text-center text-green-400 font-bold">{item.calamari}</td>
                <td className="py-4 px-4 text-center text-yellow-500">{item.competitors}</td>
                <td className="py-4 px-4 text-left text-gray-300">{item.advantage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div className="mt-12 text-center" variants={itemVariants}>
        <motion.button
          onClick={() => window.open("https://calamari.mysellauth.com/#products", "_blank")}
          className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Experience the Difference
        </motion.button>
      </motion.div>
    </motion.section>
  )
}
