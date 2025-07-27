"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ThreeDCardProps {
  imageUrl: string
  title: string
  description: string
  badgeText?: string
}

export default function ThreeDCard({ imageUrl, title, description, badgeText }: ThreeDCardProps) {
  const [mounted, setMounted] = useState(false)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX
    const mouseY = e.clientY

    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * 10
    const rotateXValue = ((centerY - mouseY) / (rect.height / 2)) * 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  if (!mounted) return null

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full h-full perspective-1000 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="w-full h-full bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transform scale-110"
            style={{
              transform: `translateX(${rotateY * -1.5}px) translateY(${rotateX * 1.5}px) scale(1.1)`,
            }}
          />
          {badgeText && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {badgeText}
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>

      {/* Reflection effect */}
      <div
        className="absolute inset-0 rounded-xl opacity-30"
        style={{
          background: `linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)`,
          transform: `rotateX(${rotateX * -1}deg) rotateY(${rotateY * -1}deg) translateZ(-1px)`,
          transformStyle: "preserve-3d",
          filter: "blur(1px)",
        }}
      />

      {/* Shine effect */}
      <div
        className="absolute inset-0 rounded-xl opacity-20"
        style={{
          background: `radial-gradient(circle at ${50 + rotateY * 2}% ${50 - rotateX * 2}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
        }}
      />
    </motion.div>
  )
}
