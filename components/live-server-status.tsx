"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Server, Wifi, Shield, Users } from "lucide-react"

export default function LiveServerStatus() {
  const [serverData, setServerData] = useState({
    rust: { users: 547, status: "online", ping: 12, uptime: "99.8%" },
    fortnite: { users: 423, status: "online", ping: 8, uptime: "99.9%" },
    apex: { users: 389, status: "online", ping: 15, uptime: "99.7%" },
    hwid: { users: 234, status: "online", ping: 5, uptime: "100%" },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setServerData((prev) => ({
        rust: { ...prev.rust, users: prev.rust.users + Math.floor(Math.random() * 3) - 1 },
        fortnite: { ...prev.fortnite, users: prev.fortnite.users + Math.floor(Math.random() * 3) - 1 },
        apex: { ...prev.apex, users: prev.apex.users + Math.floor(Math.random() * 3) - 1 },
        hwid: { ...prev.hwid, users: prev.hwid.users + Math.floor(Math.random() * 2) - 1 },
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const servers = [
    {
      name: "Rust Server",
      game: "rust",
      icon: "🦀",
      color: "from-orange-500 to-red-500",
      data: serverData.rust,
    },
    {
      name: "Fortnite Server",
      game: "fortnite",
      icon: "🏗️",
      color: "from-purple-500 to-blue-500",
      data: serverData.fortnite,
    },
    {
      name: "Apex Server",
      game: "apex",
      icon: "🎯",
      color: "from-red-500 to-orange-500",
      data: serverData.apex,
    },
    {
      name: "HWID Spoofer",
      game: "hwid",
      icon: "🛡️",
      color: "from-green-500 to-emerald-500",
      data: serverData.hwid,
    },
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
          Live Server Status
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
          Real-time monitoring of all Calamari services and infrastructure
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {servers.map((server, index) => (
          <motion.div
            key={server.game}
            className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="text-3xl mr-4">{server.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{server.name}</h3>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                    <span className="text-green-400 font-medium text-sm">ONLINE</span>
                  </div>
                </div>
              </div>
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${server.color} flex items-center justify-center`}
              >
                <Server className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center mb-2">
                  <Users className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-gray-400 text-sm">Active Users</span>
                </div>
                <div className="text-2xl font-bold text-white">{server.data.users}</div>
              </div>

              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center mb-2">
                  <Wifi className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-gray-400 text-sm">Ping</span>
                </div>
                <div className="text-2xl font-bold text-white">{server.data.ping}ms</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Uptime</span>
                <span className="text-green-400 font-bold">{server.data.uptime}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Status</span>
                <span className="text-green-400 font-bold">Operational</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Security</span>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-green-400 mr-1" />
                  <span className="text-green-400 font-bold">Protected</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Last Update</span>
                <span className="text-gray-300">Just now</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Global Status */}
      <motion.div
        className="mt-12 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-green-400 rounded-full mr-3 animate-pulse" />
            <h3 className="text-2xl font-bold text-white">All Systems Operational</h3>
          </div>
          <p className="text-gray-300 mb-6">All Calamari services are running smoothly with optimal performance</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">99.9%</div>
              <div className="text-gray-400 text-sm">Global Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">1,593</div>
              <div className="text-gray-400 text-sm">Total Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">8ms</div>
              <div className="text-gray-400 text-sm">Avg Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">4</div>
              <div className="text-gray-400 text-sm">Active Services</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
