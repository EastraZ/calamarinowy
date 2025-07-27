"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Mail, Code, Shield, Zap, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      bio: "10+ years in cybersecurity and game development. Former security researcher at major tech companies.",
      avatar: "/placeholder.svg?height=200&width=200",
      skills: ["Leadership", "Security", "Strategy"],
      social: {
        github: "#",
        twitter: "#",
        linkedin: "#",
        email: "alex@calamari.lol",
      },
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      bio: "Expert in reverse engineering and low-level programming. 8 years of experience in game hacking.",
      avatar: "/placeholder.svg?height=200&width=200",
      skills: ["C++", "Assembly", "Reverse Engineering"],
      social: {
        github: "#",
        twitter: "#",
        linkedin: "#",
        email: "sarah@calamari.lol",
      },
    },
    {
      name: "Marcus Johnson",
      role: "Security Engineer",
      bio: "Specializes in anti-detection systems and HWID spoofing. Former penetration tester.",
      avatar: "/placeholder.svg?height=200&width=200",
      skills: ["Security", "Anti-Detection", "Cryptography"],
      social: {
        github: "#",
        twitter: "#",
        linkedin: "#",
        email: "marcus@calamari.lol",
      },
    },
    {
      name: "Emily Watson",
      role: "UI/UX Designer",
      bio: "Creates intuitive and beautiful interfaces. 6 years of experience in product design.",
      avatar: "/placeholder.svg?height=200&width=200",
      skills: ["UI Design", "UX Research", "Prototyping"],
      social: {
        github: "#",
        twitter: "#",
        linkedin: "#",
        email: "emily@calamari.lol",
      },
    },
    {
      name: "David Kim",
      role: "Backend Engineer",
      bio: "Builds scalable infrastructure and APIs. Expert in cloud architecture and DevOps.",
      avatar: "/placeholder.svg?height=200&width=200",
      skills: ["Node.js", "AWS", "DevOps"],
      social: {
        github: "#",
        twitter: "#",
        linkedin: "#",
        email: "david@calamari.lol",
      },
    },
    {
      name: "Lisa Thompson",
      role: "Community Manager",
      bio: "Manages our Discord community and customer support. Passionate about user experience.",
      avatar: "/placeholder.svg?height=200&width=200",
      skills: ["Community", "Support", "Communication"],
      social: {
        github: "#",
        twitter: "#",
        linkedin: "#",
        email: "lisa@calamari.lol",
      },
    },
  ]

  const companyValues = [
    {
      icon: Code,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in game enhancement technology.",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Shield,
      title: "Security",
      description: "User safety and privacy are our top priorities in everything we build.",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "We deliver high-performance solutions that don't compromise on quality.",
      color: "from-yellow-600 to-amber-600",
    },
    {
      icon: Users,
      title: "Community",
      description: "Our users are at the heart of everything we do. We listen and adapt.",
      color: "from-purple-600 to-violet-600",
    },
  ]

  const stats = [
    { label: "Team Members", value: "15+" },
    { label: "Years Experience", value: "50+" },
    { label: "Countries", value: "8" },
    { label: "Projects Delivered", value: "100+" },
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
              Our Team
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Meet the talented individuals behind Calamari. We're a diverse team of experts passionate about creating
              the best gaming enhancement software.
            </motion.p>
          </motion.div>

          {/* Team Stats */}
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
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Values */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${value.color}`}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Members */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Meet the Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">The experts who make Calamari possible</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/10 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-red-600/30 to-red-900/30 p-1">
                        <img
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/20 to-red-900/20 group-hover:from-red-600/30 group-hover:to-red-900/30 transition-all duration-300"></div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-red-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-red-400 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">{member.bio}</p>

                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-center space-x-4">
                      <motion.a
                        href={member.social.github}
                        className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="h-5 w-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter className="h-5 w-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-blue-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="h-5 w-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Mail className="h-5 w-5 text-white" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Join Our Team CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Want to Join Our Team?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We're always looking for talented individuals who share our passion for innovation and excellence. Check
                out our open positions and become part of the Calamari family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Open Positions
                </motion.a>
                <motion.a
                  href="/contact-support"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-500 rounded-lg font-bold text-white hover:from-gray-500 hover:to-gray-400 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
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
