"use client"

import { motion } from "framer-motion"
import { MessageCircle, Users, Shield, Zap, Crown, Star, ExternalLink } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

export default function DiscordCommunityPage() {
  const features = [
    {
      icon: Users,
      title: "Active Community",
      description: "Join over 50,000 active members discussing strategies, sharing tips, and helping each other.",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: MessageCircle,
      title: "Real-time Support",
      description: "Get instant help from our support team and experienced community members.",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Shield,
      title: "Exclusive Updates",
      description: "Be the first to know about new features, updates, and security improvements.",
      color: "from-purple-600 to-violet-600",
    },
    {
      icon: Zap,
      title: "Quick Announcements",
      description: "Stay informed about server maintenance, game updates, and important notices.",
      color: "from-yellow-600 to-amber-600",
    },
    {
      icon: Crown,
      title: "VIP Channels",
      description: "Premium subscribers get access to exclusive channels and priority support.",
      color: "from-red-600 to-orange-600",
    },
    {
      icon: Star,
      title: "Community Events",
      description: "Participate in tournaments, giveaways, and special community events.",
      color: "from-pink-600 to-rose-600",
    },
  ]

  const channels = [
    {
      name: "📢 announcements",
      description: "Official announcements and important updates",
      type: "Announcement",
    },
    {
      name: "💬 general-chat",
      description: "General discussion and community chat",
      type: "General",
    },
    {
      name: "🎮 game-discussion",
      description: "Discuss supported games and strategies",
      type: "Gaming",
    },
    {
      name: "🛠️ technical-support",
      description: "Get help with installation and technical issues",
      type: "Support",
    },
    {
      name: "💡 feature-requests",
      description: "Suggest new features and improvements",
      type: "Feedback",
    },
    {
      name: "🐛 bug-reports",
      description: "Report bugs and issues",
      type: "Support",
    },
    {
      name: "👑 vip-lounge",
      description: "Exclusive channel for premium subscribers",
      type: "VIP",
    },
    {
      name: "🏆 showcase",
      description: "Share your achievements and highlights",
      type: "Community",
    },
  ]

  const rules = [
    "Be respectful to all community members",
    "No spam, advertising, or self-promotion",
    "Keep discussions relevant to the channel topic",
    "No sharing of personal information",
    "Follow Discord's Terms of Service",
    "No discussion of other cheating software",
    "Use appropriate language and content",
    "Listen to moderators and staff members",
  ]

  const stats = [
    { label: "Total Members", value: "52,847", icon: Users },
    { label: "Online Now", value: "8,234", icon: Zap },
    { label: "Messages Today", value: "15,692", icon: MessageCircle },
    { label: "Support Tickets", value: "247", icon: Shield },
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
              Discord Community
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Join our thriving Discord community for support, updates, and connecting with fellow Calamari users
            </motion.p>

            {/* Discord Join Button */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="https://discord.gg/calamari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] rounded-lg font-bold text-white transition-all duration-300 shadow-lg shadow-[#5865F2]/20 hover:shadow-[#5865F2]/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
                Join Discord Server
                <ExternalLink className="ml-2 h-4 w-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Community Stats */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden shadow-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5865F2] to-[#4752C4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Join Our Discord?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the benefits of being part of our active gaming community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </motion.div>

          {/* Channels Overview */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Server Channels
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our organized channels designed for different types of discussions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {channels.map((channel, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden shadow-lg p-6 hover:shadow-red-500/10 transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{channel.name}</h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        channel.type === "VIP"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : channel.type === "Support"
                            ? "bg-blue-500/20 text-blue-400"
                            : channel.type === "Gaming"
                              ? "bg-green-500/20 text-green-400"
                              : channel.type === "Announcement"
                                ? "bg-red-500/20 text-red-400"
                                : "bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      {channel.type}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">{channel.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Server Rules */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Server Rules
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Please follow these rules to maintain a positive community environment
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {rules.map((rule, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true, amount: 0.1 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-300">{rule}</p>
                    </motion.div>
                  ))}
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
            <div className="bg-gradient-to-r from-[#5865F2]/10 to-[#4752C4]/10 border border-[#5865F2]/20 rounded-2xl overflow-hidden shadow-lg p-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Join?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Connect with thousands of Calamari users, get instant support, and stay updated with the latest news.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://discord.gg/calamari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] rounded-lg font-bold text-white transition-all duration-300 shadow-lg shadow-[#5865F2]/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                  Join Discord
                </motion.a>
                <motion.a
                  href="/contact-support"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Support
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
