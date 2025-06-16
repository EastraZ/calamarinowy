"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Shield, Users, Clock, Award, Lock, Star, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const milestones = [
    {
      date: "January 2024",
      title: "Calamari.lol Launch",
      description: "Official launch with our first Rust enhancement tools.",
    },
    {
      date: "March 2024",
      title: "Multi-Game Support",
      description: "Expanded to Fortnite and Apex Legends platforms.",
    },
    {
      date: "June 2024",
      title: "5M+ Users Milestone",
      description: "Reached 5 million satisfied users worldwide.",
    },
    {
      date: "December 2024",
      title: "Advanced AI Detection",
      description: "Implemented next-gen anti-detection technology.",
    },
  ]

  const values = [
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: "Undetected Security",
      description: "Advanced stealth technology keeps your gaming accounts safe with 100% undetected rate.",
    },
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "Community First",
      description: "Over 5 million satisfied gamers trust Calamari.lol for their competitive advantage.",
    },
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      title: "Instant Activation",
      description: "Get up and running in under 30 seconds with our streamlined setup process.",
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: "Premium Quality",
      description: "Industry-leading features and performance that outclass all competitors.",
    },
    {
      icon: <Lock className="h-6 w-6 text-red-500" />,
      title: "Privacy Protected",
      description: "Your data and gaming activities remain completely private and secure.",
    },
  ]

  const faqs = [
    {
      question: "What makes Calamari.lol different from competitors?",
      answer:
        "Our 100% undetected record since launch, advanced AI-powered features, and 24/7 expert support set us apart from the competition.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "Setup takes less than 30 seconds. Purchase, download, and you're ready to dominate your favorite games instantly.",
    },
    {
      question: "Is Calamari.lol safe to use?",
      answer:
        "Absolutely. We've maintained a perfect undetected record since 2024 with advanced anti-detection technology protecting your accounts.",
    },
    {
      question: "What games do you support?",
      answer:
        "Currently we support Rust, Fortnite, and Apex Legends with more games coming soon based on community demand.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes! Our expert support team is available 24/7 through Discord to help with any questions or issues you may have.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Matrix Background */}
      <div className="fixed inset-0 z-0">
        <div className="matrix-bg opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
                About Calamari.lol
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The world's most advanced gaming enhancement platform. Trusted by over 5 million elite gamers worldwide
              with a perfect undetected record since 2024.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-6 text-center">
              <Shield className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-red-500">100%</div>
              <div className="text-sm text-gray-400">Undetected</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6 text-center">
              <Zap className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-500">30s</div>
              <div className="text-sm text-gray-400">Setup Time</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/20 rounded-lg p-6 text-center">
              <Users className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-red-500">5M+</div>
              <div className="text-sm text-gray-400">Users</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-lg p-6 text-center">
              <Star className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-500">4.9★</div>
              <div className="text-sm text-gray-400">Rating</div>
            </div>
          </motion.div>

          {/* Our Story */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Founded in early 2024 by elite competitive gamers and security experts, Calamari.lol was born from the
                  need for truly undetectable gaming enhancement tools.
                </p>
                <p>
                  Since launch, we've maintained a perfect 100% undetected record across all supported games, serving
                  over 5 million satisfied customers worldwide.
                </p>
                <p>
                  Our commitment to innovation, security, and customer satisfaction has made us the most trusted name in
                  gaming enhancement technology.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-gray-900/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/20">
                  <Image
                    src="/images/calamari-diagonal.png"
                    alt="Calamari.lol Logo"
                    width={200}
                    height={200}
                    className="p-8"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gray-800/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-orange-500"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} relative`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 + index * 0.2 }}
                  >
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 z-10 animate-pulse"></div>
                    <div className="w-1/2 bg-gray-900/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-6">
                      <div className="text-red-500 font-medium mb-2">{milestone.date}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-3 text-red-400">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="bg-gray-900/30 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Dominate Your Games?</h2>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Join over 5 million elite gamers who trust Calamari.lol for their competitive advantage.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-red-500 bg-red-600/20 backdrop-blur-sm px-8 py-4 font-medium transition-all duration-300 text-white hover:bg-red-600/30 hover:shadow-lg hover:shadow-red-500/25 group"
              >
                Get Started Today
                <ArrowLeft className="h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-gray-900/20 backdrop-blur-sm px-6 py-3 font-medium transition-all duration-300 text-gray-300 hover:text-white hover:border-red-500/40 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Return to Homepage
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .matrix-bg {
          background: linear-gradient(0deg, transparent 24%, rgba(255, 0, 0, 0.05) 25%, rgba(255, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.05) 75%, rgba(255, 0, 0, 0.05) 76%, transparent 77%, transparent),
                      linear-gradient(90deg, transparent 24%, rgba(255, 0, 0, 0.05) 25%, rgba(255, 0, 0, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, 0.05) 75%, rgba(255, 0, 0, 0.05) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
          animation: matrix-move 20s linear infinite;
        }
        
        @keyframes matrix-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </main>
  )
}
