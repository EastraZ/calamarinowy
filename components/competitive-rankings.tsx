"use client"

import { motion } from "framer-motion"
import { Target, Zap, Crown, Star, Award } from "lucide-react"

export default function CompetitiveRankings() {
  const rankings = [
    {
      rank: 1,
      username: "ProGamer_2024",
      game: "Rust",
      kd: "12.4",
      wins: "847",
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      badge: "🥇",
    },
    {
      rank: 2,
      username: "EliteSniper",
      game: "Apex",
      kd: "11.8",
      wins: "723",
      icon: Target,
      color: "from-gray-400 to-gray-600",
      badge: "🥈",
    },
    {
      rank: 3,
      username: "BuildMaster",
      game: "Fortnite",
      kd: "10.9",
      wins: "692",
      icon: Award,
      color: "from-orange-600 to-red-600",
      badge: "🥉",
    },
    {
      rank: 4,
      username: "RustKing",
      game: "Rust",
      kd: "9.7",
      wins: "634",
      icon: Star,
      color: "from-purple-500 to-indigo-500",
      badge: "⭐",
    },
    {
      rank: 5,
      username: "ApexLegend",
      game: "Apex",
      kd: "9.2",
      wins: "589",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      badge: "💎",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Elite Leaderboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Top performers using Calamari across all supported games
          </p>
        </motion.div>

        <div className="space-y-4">
          {rankings.map((player, index) => (
            <motion.div
              key={index}
              className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  {/* Rank */}
                  <div className="text-4xl font-bold text-white min-w-[60px]">
                    <span className="text-2xl mr-2">{player.badge}</span>#{player.rank}
                  </div>

                  {/* Player Info */}
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${player.color} p-3`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <player.icon className="w-full h-full text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{player.username}</h3>
                      <p className="text-gray-400">{player.game} Specialist</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{player.kd}</div>
                    <div className="text-gray-400 text-sm">K/D Ratio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{player.wins}</div>
                    <div className="text-gray-400 text-sm">Total Wins</div>
                  </div>
                  <motion.div
                    className={`px-4 py-2 rounded-full bg-gradient-to-r ${player.color} text-white font-bold`}
                    whileHover={{ scale: 1.1 }}
                  >
                    ELITE
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Your Rank CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Climb the Ranks?</h3>
            <p className="text-gray-300 mb-6">
              Join the elite and see your name on this leaderboard. Start dominating today!
            </p>
            <motion.button
              onClick={() => {
                const plansSection = document.getElementById("subscription-plans")
                if (plansSection) {
                  plansSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-full font-bold text-lg hover:from-red-500 hover:to-orange-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
