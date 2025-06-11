"use client"

import { motion } from "framer-motion"
import { Image, FileText, Video, Palette, Users, Award, TrendingUp } from "lucide-react"
import Navbar from "@/components/navbar"
import MatrixRain from "@/components/matrix-rain"

export default function PressKitPage() {
  const pressAssets = [
    {
      category: "Logos",
      icon: Palette,
      items: [
        { name: "Calamari Logo (PNG)", size: "2.1 MB", format: "PNG", dimensions: "1024x1024" },
        { name: "Calamari Logo (SVG)", size: "45 KB", format: "SVG", dimensions: "Vector" },
        { name: "Calamari Wordmark", size: "1.8 MB", format: "PNG", dimensions: "2048x512" },
        { name: "Calamari Icon", size: "890 KB", format: "PNG", dimensions: "512x512" },
      ],
    },
    {
      category: "Screenshots",
      icon: Image,
      items: [
        { name: "Main Interface", size: "3.2 MB", format: "PNG", dimensions: "1920x1080" },
        { name: "Settings Panel", size: "2.8 MB", format: "PNG", dimensions: "1920x1080" },
        { name: "Game Overlay", size: "2.1 MB", format: "PNG", dimensions: "1920x1080" },
        { name: "Dashboard View", size: "3.5 MB", format: "PNG", dimensions: "1920x1080" },
      ],
    },
    {
      category: "Videos",
      icon: Video,
      items: [
        { name: "Product Demo", size: "45 MB", format: "MP4", dimensions: "1920x1080" },
        { name: "Feature Showcase", size: "32 MB", format: "MP4", dimensions: "1920x1080" },
        { name: "Installation Guide", size: "28 MB", format: "MP4", dimensions: "1920x1080" },
      ],
    },
    {
      category: "Documents",
      icon: FileText,
      items: [
        { name: "Company Fact Sheet", size: "245 KB", format: "PDF", dimensions: "A4" },
        { name: "Executive Bios", size: "180 KB", format: "PDF", dimensions: "A4" },
        { name: "Product Specifications", size: "320 KB", format: "PDF", dimensions: "A4" },
        { name: "Brand Guidelines", size: "1.2 MB", format: "PDF", dimensions: "A4" },
      ],
    },
  ]

  const companyStats = [
    { label: "Active Users", value: "2.5M+", icon: Users },
    { label: "Years in Business", value: "5+", icon: Award },
    { label: "Growth Rate", value: "300%", icon: TrendingUp },
    { label: "Countries Served", value: "150+", icon: Users },
  ]

  const keyFacts = [
    "Founded in 2019 by a team of cybersecurity experts",
    "Serving over 2.5 million active users worldwide",
    "Supports 15+ popular gaming titles",
    "99.9% uptime with enterprise-grade infrastructure",
    "24/7 customer support in multiple languages",
    "Advanced anti-detection technology",
    "Regular updates and feature releases",
    "Strong focus on user privacy and security",
  ]

  const executiveTeam = [
    {
      name: "Alex Rodriguez",
      title: "Founder & CEO",
      bio: "Former cybersecurity researcher with 10+ years of experience in game security and reverse engineering.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sarah Chen",
      title: "Chief Technology Officer",
      bio: "Expert in low-level programming and anti-cheat bypass techniques with extensive game development background.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Marcus Johnson",
      title: "Head of Security",
      bio: "Specializes in advanced security systems and has worked with major gaming companies on anti-cheat solutions.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const awards = [
    {
      year: "2024",
      award: "Best Gaming Enhancement Software",
      organization: "Gaming Tech Awards",
    },
    {
      year: "2023",
      award: "Innovation in Cybersecurity",
      organization: "Tech Innovation Summit",
    },
    {
      year: "2023",
      award: "Fastest Growing Gaming Company",
      organization: "Gaming Business Magazine",
    },
    {
      year: "2022",
      award: "Excellence in User Experience",
      organization: "UX Design Awards",
    },
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
              Press Kit
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Everything you need to know about Calamari. Download our press assets, company information, and media resources.
            </motion.p>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden shadow-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Press Assets */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Press Assets
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download high-quality assets for your articles and presentations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pressAssets.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="p-6 border-b border-red-500/20">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center mr-4">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                \

}