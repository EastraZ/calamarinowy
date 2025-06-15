"use client"

import { motion } from "framer-motion"
import { MessageCircle, Users, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DiscordCommunity() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Join Our Discord Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with thousands of elite gamers, get instant support, and stay updated with the latest features and
            updates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: Users,
              title: "50K+ Members",
              description: "Active gaming community",
            },
            {
              icon: MessageCircle,
              title: "24/7 Support",
              description: "Instant help when needed",
            },
            {
              icon: Zap,
              title: "Live Updates",
              description: "Real-time announcements",
            },
            {
              icon: Shield,
              title: "Exclusive Access",
              description: "Member-only features",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 text-center hover:border-red-500/40 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-300"
            onClick={() => window.open("https://discord.gg/calamari", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Join Discord Server
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
