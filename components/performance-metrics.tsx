"use client"

import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function PerformanceMetrics() {
  const performanceData = [
    {
      name: "Aim Accuracy",
      without: 45,
      with: 92,
    },
    {
      name: "Reaction Time",
      without: 60,
      with: 95,
    },
    {
      name: "Visibility",
      without: 40,
      with: 98,
    },
    {
      name: "Win Rate",
      without: 30,
      with: 85,
    },
    {
      name: "K/D Ratio",
      without: 35,
      with: 90,
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
          Performance Boost
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          See the dramatic improvement in your gaming performance with Calamari
        </p>
      </motion.div>

      <motion.div
        className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8"
        variants={itemVariants}
      >
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={performanceData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip
                contentStyle={{ backgroundColor: "#111", border: "1px solid #333" }}
                labelStyle={{ color: "#fff" }}
              />
              <Bar dataKey="without" name="Without Calamari" fill="#555" radius={[4, 4, 0, 0]} />
              <Bar dataKey="with" name="With Calamari" fill="#f43f5e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-black/30 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">+350%</div>
            <p className="text-gray-300">Average K/D Improvement</p>
          </div>
          <div className="bg-black/30 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">-65%</div>
            <p className="text-gray-300">Reaction Time Reduction</p>
          </div>
          <div className="bg-black/30 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">+210%</div>
            <p className="text-gray-300">Win Rate Increase</p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
