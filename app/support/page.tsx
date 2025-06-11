"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MessageSquare, Clock, Shield, ChevronDown, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import PageTransition from "@/components/page-transition"
import { motion, useScroll, useTransform } from "framer-motion"

export default function SupportPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a0a0a] to-[#0a0f1a] text-white">
        {/* Background gradient effect */}
        <div className="absolute top-0 left-0 w-full h-[50vh] z-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-[#2d0808]/10 to-transparent z-10"
            style={{ y: backgroundY }}
          />
        </div>

        <Navbar />
        <div className="w-full bg-red-600 py-3 text-center text-sm font-medium md:text-base">
          Join our Discord community at{" "}
          <Link href="https://discord.gg/calamari" className="underline font-bold">
            discord.gg/calamari
          </Link>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          {/* Support Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              Support Center
            </motion.h1>
            <motion.p
              className="text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Need help with Calamari? Our support team is available 24/7 to assist you with any questions or issues you
              may have.
            </motion.p>
          </motion.div>

          {/* Discord Support Section */}
          <motion.div
            className="max-w-5xl mx-auto mb-16 bg-[#0f0a0a]/80 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ boxShadow: "0 0 30px rgba(255, 0, 0, 0.3)" }}
          >
            <div className="flex flex-col md:flex-row">
              <motion.div
                className="md:w-1/2 p-8 md:p-12"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.h2
                  className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
                  whileInView={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  Join Our Discord
                </motion.h2>
                <motion.p
                  className="text-gray-300 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  The fastest way to get support is through our Discord community. Our team is available 24/7 to help
                  you with any issues or questions you may have.
                </motion.p>
                <motion.ul className="space-y-4 mb-8" initial="hidden" animate="visible" variants={containerVariants}>
                  <motion.li className="flex items-start" variants={itemVariants}>
                    <Clock className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
                    <span className="text-gray-300">24/7 Support available</span>
                  </motion.li>
                  <motion.li className="flex items-start" variants={itemVariants}>
                    <MessageSquare className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
                    <span className="text-gray-300">Live chat with our support team</span>
                  </motion.li>
                  <motion.li className="flex items-start" variants={itemVariants}>
                    <Shield className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
                    <span className="text-gray-300">Secure and private assistance</span>
                  </motion.li>
                </motion.ul>
                <motion.a
                  href="https://discord.gg/calamari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#5865F2] hover:bg-[#4752C4] px-6 py-3 rounded-md font-medium transition-colors"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(88, 101, 242, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-2 flex-shrink-0"
                  >
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                  </svg>
                  Join discord.gg/calamari
                </motion.a>
              </motion.div>
              <motion.div
                className="md:w-1/2 bg-[#36393F] p-8 md:p-12"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  className="bg-[#2F3136] rounded-lg p-4 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)" }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#2d0808] flex items-center justify-center text-white font-bold mr-3">
                      C
                    </div>
                    <div>
                      <div className="text-white font-medium">Calamari Support</div>
                      <div className="text-gray-400 text-sm">Online • Fast Response</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Hello! How can we help you today? Our support team is ready to assist with any questions or issues
                    you might have.
                  </p>
                </motion.div>
                <motion.div
                  className="bg-[#2F3136] rounded-lg p-4 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)" }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold mr-3">
                      U
                    </div>
                    <div>
                      <div className="text-white font-medium">You</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">I'm having trouble with my subscription. Can you help me?</p>
                </motion.div>
                <motion.div
                  className="bg-[#2F3136] rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)" }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#2d0808] flex items-center justify-center text-white font-bold mr-3">
                      C
                    </div>
                    <div>
                      <div className="text-white font-medium">Calamari Support</div>
                      <div className="text-gray-400 text-sm">Online • Fast Response</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Of course! I'd be happy to help with your subscription. Could you please provide your order number
                    or email address so I can look up your account?
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Support Options */}
          <motion.div
            className="max-w-5xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
              variants={itemVariants}
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              Support Options
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.3)" }}
              >
                <motion.div
                  className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <MessageSquare className="h-6 w-6 text-red-400" />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  Discord Support
                </motion.h3>
                <motion.p className="text-gray-300 mb-4" variants={itemVariants}>
                  Join our Discord server for the fastest support. Our team is available 24/7 to help you with any
                  issues.
                </motion.p>
                <motion.a
                  href="https://discord.gg/calamari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#5865F2] hover:bg-[#4752C4] px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(88, 101, 242, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Discord
                </motion.a>
              </motion.div>

              <motion.div
                className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.3)" }}
              >
                <motion.div
                  className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </motion.div>
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.5 }}
                >
                  Email Support
                </motion.h3>
                <motion.p className="text-gray-300 mb-4" variants={itemVariants}>
                  If you prefer email, you can reach our support team at support@calamari.lol. We typically respond
                  within 24 hours.
                </motion.p>
                <motion.a
                  href="mailto:support@calamari.lol"
                  className="inline-flex items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Email
                </motion.a>
              </motion.div>

              <motion.div
                className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(255, 0, 0, 0.3)" }}
              >
                <motion.div
                  className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </motion.div>
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 1 }}
                >
                  Knowledge Base
                </motion.h3>
                <motion.p className="text-gray-300 mb-4" variants={itemVariants}>
                  Browse our comprehensive knowledge base for tutorials, guides, and answers to common questions about
                  our products.
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/faq"
                    className="inline-flex items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    View Knowledge Base
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className="max-w-5xl mx-auto mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
              variants={itemVariants}
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              Common Support Questions
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(255, 0, 0, 0.5)",
                  boxShadow: "0 0 15px rgba(255, 0, 0, 0.2)",
                }}
              >
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  How do I download Calamari?
                </motion.h3>
                <motion.p className="text-gray-300" variants={itemVariants}>
                  After purchasing a subscription, you'll receive an email with download instructions. You can also
                  download the launcher from your account dashboard.
                </motion.p>
              </motion.div>
              <motion.div
                className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(255, 0, 0, 0.5)",
                  boxShadow: "0 0 15px rgba(255, 0, 0, 0.2)",
                }}
              >
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.3 }}
                >
                  I forgot my password. What should I do?
                </motion.h3>
                <motion.p className="text-gray-300" variants={itemVariants}>
                  You can reset your password by clicking the "Forgot Password" link on the login page. You'll receive
                  an email with instructions to reset your password.
                </motion.p>
              </motion.div>
              <motion.div
                className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(255, 0, 0, 0.5)",
                  boxShadow: "0 0 15px rgba(255, 0, 0, 0.2)",
                }}
              >
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.6 }}
                >
                  How do I update Calamari?
                </motion.h3>
                <motion.p className="text-gray-300" variants={itemVariants}>
                  Calamari automatically updates when you launch the application. You can also check for updates
                  manually in the settings menu.
                </motion.p>
              </motion.div>
              <motion.div
                className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(255, 0, 0, 0.5)",
                  boxShadow: "0 0 15px rgba(255, 0, 0, 0.2)",
                }}
              >
                <motion.h3
                  className="text-xl font-bold mb-2"
                  whileInView={{ color: ["#ffffff", "#ff3333", "#ffffff"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 0.9 }}
                >
                  Can I use Calamari on multiple computers?
                </motion.h3>
                <motion.p className="text-gray-300" variants={itemVariants}>
                  Yes, you can use Calamari on multiple computers, but not simultaneously. You'll need to log out from
                  one device before logging in on another.
                </motion.p>
              </motion.div>
            </div>
            <motion.div
              className="text-center mt-8"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/faq"
                className="inline-flex items-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-6 py-3 rounded-md transition-colors shadow-lg shadow-red-900/20 hover:shadow-red-900/40"
              >
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-gray-900 via-red-950/10 to-gray-900 border border-red-900/30 rounded-lg p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 0 30px rgba(255, 0, 0, 0.3)" }}
          >
            <motion.h2
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              Still Need Help?
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Our support team is ready to assist you with any questions or issues you may have. Don't hesitate to reach
              out!
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.a
                href="https://discord.gg/calamari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#5865F2] hover:bg-[#4752C4] px-6 py-3 rounded-md font-medium transition-colors"
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(88, 101, 242, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-2"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
                Join Our Discord
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="mailto:support@calamari.lol"
                  className="inline-flex items-center bg-white/10 hover:bg-white/20 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Email Support
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          className="bg-[#0a0f1a] py-12 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <motion.div
                className="flex items-center mb-4 md:mb-0"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calamari-diagonal-0MIPrqm68v07REXLgaOx76jFso80QO.png"
                    alt="Calamari Logo"
                    width={40}
                    height={40}
                    className="mr-2"
                  />
                </motion.div>
                <motion.span
                  className="text-xl font-bold"
                  whileHover={{ color: "#ff3333" }}
                  transition={{ duration: 0.3 }}
                >
                  Calamari
                </motion.span>
              </motion.div>
              <motion.div
                className="flex space-x-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </motion.div>
                <motion.div className="relative group" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                    Products <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-gray-800 rounded-md shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-1">
                      <Link
                        href="/our-product?product=rust"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-900/30 hover:text-white transition-colors"
                      >
                        Rust
                      </Link>
                      <Link
                        href="/our-product?product=fortnite"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-900/30 hover:text-white transition-colors"
                      >
                        Fortnite
                      </Link>
                      <Link
                        href="/our-product?product=apex"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-900/30 hover:text-white transition-colors"
                      >
                        Apex Legends
                      </Link>
                    </div>
                  </div>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                  <Link href="/support" className="text-white font-medium transition-colors">
                    Support
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Calamari. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.footer>
      </main>
    </PageTransition>
  )
}
