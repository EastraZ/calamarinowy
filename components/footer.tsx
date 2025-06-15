"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Twitter, MessageCircle, Mail, Shield, Zap, Users, Star } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Games Supported", href: "/games-supported" },
      { name: "System Requirements", href: "/system-requirements" },
      { name: "Download", href: "/download" },
    ],
    support: [
      { name: "Help Center", href: "/help-center" },
      { name: "Discord Community", href: "/discord-community" },
      { name: "Contact Support", href: "/contact-support" },
      { name: "Bug Reports", href: "/bug-reports" },
      { name: "Feature Requests", href: "/feature-requests" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/our-team" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Press Kit", href: "/press-kit" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refunds" },
      { name: "DMCA", href: "/dmca" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  }

  const socialLinks = [
    {
      name: "Discord",
      href: "https://discord.gg/calamari",
      icon: MessageCircle,
      color: "hover:text-[#5865F2]",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/calamari",
      icon: Twitter,
      color: "hover:text-[#1DA1F2]",
    },
    {
      name: "GitHub",
      href: "https://github.com/calamari",
      icon: Github,
      color: "hover:text-white",
    },
    {
      name: "Email",
      href: "mailto:support@calamari.lol",
      icon: Mail,
      color: "hover:text-red-400",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "100% Undetected",
      description: "Advanced stealth technology",
    },
    {
      icon: Zap,
      title: "Instant Activation",
      description: "Ready in under 30 seconds",
    },
    {
      icon: Users,
      title: "50K+ Users",
      description: "Trusted by elite gamers",
    },
    {
      icon: Star,
      title: "5-Star Support",
      description: "24/7 expert assistance",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-black via-gray-900/50 to-black border-t border-red-500/20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-orange-500/5" />
        {/* Animated particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Features Bar */}
        <div className="border-b border-gray-800/50">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-red-600/20 to-red-900/20 rounded-full flex items-center justify-center group-hover:from-red-600/30 group-hover:to-red-900/30 transition-all duration-300 border border-red-500/30">
                    <feature.icon className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center mb-6 group">
                  <div className="w-12 h-12 mr-4 relative">
                    <Image
                      src="/images/calamari-logo.png"
                      alt="Calamari Logo"
                      width={48}
                      height={48}
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-red-400/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Calamari.lol
                  </span>
                </Link>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  The most advanced gaming enhancement platform for Rust, Fortnite, and Apex Legends. Trusted by over
                  50,000 elite gamers worldwide.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:bg-gray-700/50 hover:scale-110 border border-red-500/20`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Product */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4 text-lg">Product</h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4 text-lg">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                className="text-gray-400 text-sm mb-4 md:mb-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                © {currentYear} Calamari.lol. All rights reserved. Made with ❤️ for elite gamers.
              </motion.div>

              <motion.div
                className="flex items-center space-x-6 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center text-gray-400">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
                <Link href="/status" className="text-gray-400 hover:text-white transition-colors">
                  Status Page
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
