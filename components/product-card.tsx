"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  title: string
  description: string
  image: string
  features: string[]
  popular?: boolean
  href: string
}

export default function ProductCard({ title, description, image, features, popular = false, href }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden hover:border-red-500/40 transition-all duration-300 group"
    >
      {popular && (
        <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-600 to-red-700 text-white">
          Popular
        </Badge>
      )}

      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((feature, index) => (
            <Badge key={index} variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
              {feature}
            </Badge>
          ))}
        </div>

        <Button
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300"
          onClick={() => window.open(href, "_blank")}
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  )
}
