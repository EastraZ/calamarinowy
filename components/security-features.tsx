"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye, Fingerprint, Wifi, Cpu, AlertTriangle } from "lucide-react"

export default function SecurityFeatures() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "256-bit AES encryption protects all communications",
      status: "ACTIVE",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Lock,
      title: "Kernel-Level Protection",
      description: "Deep system integration for maximum stealth",
      status: "SECURED",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Eye,
      title: "Anti-Detection System",
      description: "Real-time signature morphing technology",
      status: "HIDDEN",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Fingerprint,
      title: "HWID Spoofing",
      description: "Hardware fingerprint randomization",
      status: "SPOOFED",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Wifi,
      title: "Network Obfuscation",
      description: "Traffic encryption and routing protection",
      status: "ENCRYPTED",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: Cpu,
      title: "Process Injection",
      description: "Advanced memory manipulation techniques",
      status: "INJECTED",
      color: "from-pink-500 to-purple-500",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-6 py-3 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="h-5 w-5 text-green-400 mr-2" />
            <span className="text-green-300 font-medium">MAXIMUM SECURITY</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Unbreakable Protection
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our multi-layered security system ensures you stay undetected across all games and platforms
          </p>
        </motion.div>

        {/* Security Status Dashboard */}
        <motion.div
          className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Security Status</h3>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-green-400 font-bold">ALL SYSTEMS SECURE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} p-3`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </motion.div>
                  <motion.div
                    className={`px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white text-xs font-bold`}
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {feature.status}
                  </motion.div>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: "0", label: "Detections", color: "text-green-400", suffix: "" },
            { number: "100", label: "Success Rate", color: "text-blue-400", suffix: "%" },
            { number: "24/7", label: "Protection", color: "text-purple-400", suffix: "" },
            { number: "256", label: "Bit Encryption", color: "text-orange-400", suffix: "" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-colors"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
              >
                {stat.number}
                {stat.suffix}
              </motion.div>
              <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Warning Banner */}
        <motion.div
          className="mt-12 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center">
            <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3" />
            <div>
              <h4 className="text-lg font-bold text-yellow-400 mb-1">Security Notice</h4>
              <p className="text-gray-300">
                Our security systems are constantly updated to maintain zero detection rates. Always use the latest
                version for maximum protection.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
