"use client"

import { motion, useInView } from "framer-motion"
import { Users, Shield, Clock, Headphones } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const stats = [
  {
    icon: Users,
    value: 1547,
    label: "Active Users",
    suffix: "",
    color: "from-blue-500 to-cyan-500",
    description: "Thriving community of gamers",
  },
  {
    icon: Shield,
    value: 240,
    label: "FPS Boost",
    suffix: "+",
    color: "from-green-500 to-emerald-500",
    description: "Unleashing peak performance",
  },
  {
    icon: Clock,
    value: 45,
    label: "CPU Usage",
    suffix: "%",
    color: "from-purple-500 to-pink-500",
    description: "Optimized resource management",
  },
  {
    icon: Headphones,
    value: 30,
    label: "Memory Usage",
    suffix: "%",
    color: "from-orange-500 to-red-500",
    description: "Efficient memory allocation",
  },
  {
    icon: Headphones,
    value: 2.3,
    label: "Load Time",
    suffix: "s",
    color: "from-orange-500 to-red-500",
    description: "Blazing fast loading speeds",
  },
]

function AnimatedCounter({
  value,
  suffix = "",
  duration = 2000,
}: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)

        setCount(Math.floor(progress * value))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function FloatingStats() {
  return (
    <section className="py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative group"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
              {/* Animated icon */}
              <motion.div
                className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-r ${stat.color} p-2`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-full h-full text-white" />
              </motion.div>

              {/* Animated counter */}
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="text-gray-300 text-sm font-medium mb-1">{stat.label}</div>

              {/* Description */}
              <div className="text-gray-400 text-xs">{stat.description}</div>

              {/* Pulsing effect */}
              <motion.div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5`}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
