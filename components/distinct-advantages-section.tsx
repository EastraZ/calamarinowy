"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ShieldCheck, Settings2, RefreshCw, HeartHandshake, Gem } from "lucide-react"

const advantages = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description: "The best of its class, Calamari is the standard at which all others are measured.",
    bgText: "Quality",
  },
  {
    icon: Settings2,
    title: "Highly Customizable",
    description: "Nearly every module is customizable to fit your exact needs and play style.",
    bgText: "Customizable",
  },
  {
    icon: RefreshCw,
    title: "Frequent Updates",
    description:
      "Ever since its conception Calamari has had constant updates providing you with the newest features and bug-fixes.",
    bgText: "Updates",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Support",
    description: "What ever the issue may be, we're here to help you solve the issue.",
    bgText: "Support",
  },
  {
    icon: Gem,
    title: "Trust",
    description: "We do our best to satisfy the needs of our customers.",
    bgText: "Trust",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
}

const AdvantageCard = ({ advantage, className }: { advantage: (typeof advantages)[0]; className?: string }) => {
  return (
    <motion.div
      className={`bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-xl relative overflow-hidden transition-all duration-300 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-900/20 group ${className}`}
    >
      <div
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
      >
        <span className="text-7xl md:text-8xl font-bold text-white/5 select-none w-full text-center block">{advantage.bgText}</span>
      </div>
      <div className="relative z-10">
        <advantage.icon className="w-7 h-7 mb-3 text-red-500" />
        <h3 className="text-xl font-semibold mb-2 text-white">{advantage.title}</h3>
        <p className="text-sm text-slate-400">{advantage.description}</p>
      </div>
    </motion.div>
  )
}

export function DistinctAdvantagesSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="py-16 md:py-24 bg-gradient-to-br from-[#0a0f1a] via-[#1a1f2c] to-[#080c16]"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div variants={containerVariants} className="text-center md:text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Advantages</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto md:mx-0">
            Here's a summary of what Calamari provides you with.
          </p>
        </motion.div>
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <AdvantageCard advantage={advantages[0]} className="lg:col-span-2" />
          <AdvantageCard advantage={advantages[1]} className="lg:col-span-3" />
          <AdvantageCard advantage={advantages[2]} className="lg:col-span-2" />
          <AdvantageCard advantage={advantages[3]} className="lg:col-span-2" />
          <AdvantageCard advantage={advantages[4]} className="lg:col-span-1" />
        </motion.div>
      </div>
    </motion.section>
  )
}
