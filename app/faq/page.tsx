"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"
import Navbar from "@/components/navbar"
import PageTransition from "@/components/page-transition"
import { motion, useScroll, useTransform } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
  category?: string
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "general", name: "General" },
    { id: "technical", name: "Technical" },
    { id: "payment", name: "Payment" },
    { id: "support", name: "Support" },
  ]

  const faqItems: FAQItem[] = [
    {
      question: "What is Calamari?",
      answer:
        "Calamari is a premium game enhancement tool designed to give players a competitive edge in various games. Our software provides features like aimbot, ESP, and other tools to improve your gaming experience.",
      category: "general",
    },
    {
      question: "Is Calamari safe to use?",
      answer:
        "Yes, Calamari is designed with advanced anti-detection technology to keep your account safe. We regularly update our software to stay ahead of anti-cheat systems and maintain a high level of security for our users.",
      category: "general",
    },
    {
      question: "How do I purchase Calamari?",
      answer:
        "You can purchase Calamari directly from our website. We offer various subscription plans to suit different needs and budgets. After completing your purchase, you'll receive instructions on how to download and install the software.",
      category: "payment",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, cryptocurrency (Bitcoin, Ethereum), and PayPal. All transactions are secure and your payment information is never stored on our servers.",
      category: "payment",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer refunds within 24 hours of purchase if the product doesn't work as advertised. Please contact our support team through Discord for assistance with refund requests.",
      category: "payment",
    },
    {
      question: "What games does Calamari support?",
      answer:
        "Calamari currently supports Rust, Fortnite, and Apex Legends. We're constantly working on adding support for more games based on user demand and market trends.",
      category: "general",
    },
    {
      question: "How often do you update Calamari?",
      answer:
        "We update Calamari regularly to ensure compatibility with the latest game versions and to add new features. Major updates typically occur monthly, while minor updates and patches are released as needed.",
      category: "technical",
    },
    {
      question: "Can I use Calamari on multiple computers?",
      answer:
        "Your Calamari subscription is tied to your account, not your hardware. You can use it on multiple computers, but not simultaneously. You'll need to log out from one device before logging in on another.",
      category: "technical",
    },
    {
      question: "Is Calamari compatible with my operating system?",
      answer:
        "Calamari is compatible with Windows 10 and Windows 11. We currently do not support macOS or Linux, but we're constantly evaluating platform expansion based on user demand.",
      category: "technical",
    },
    {
      question: "How do I get support if I have issues?",
      answer:
        "We provide 24/7 support through our Discord server. Join our community at discord.gg/calamari to get help from our dedicated support team and connect with other Calamari users.",
      category: "support",
    },
    {
      question: "What features does Calamari offer?",
      answer:
        "Calamari offers a wide range of features including advanced aimbot with customizable settings, ESP for players and items, radar hacks, recoil control, and much more. The specific features vary by game and are constantly being improved and expanded.",
      category: "general",
    },
    {
      question: "Can I get banned for using Calamari?",
      answer:
        "While we implement advanced anti-detection measures, there is always a risk when using any third-party software in games. We recommend following our usage guidelines and avoiding suspicious behavior to minimize any risks.",
      category: "general",
    },
  ]

  const filteredFAQs = activeCategory === "all" ? faqItems : faqItems.filter((item) => item.category === activeCategory)

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
          {/* FAQ Header */}
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
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              className="text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Find answers to the most common questions about Calamari. If you can't find what you're looking for, feel
              free to reach out to our support team on Discord.
            </motion.p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="flex justify-center mb-12 overflow-x-auto pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="flex space-x-2 bg-[#0f0a0a]/50 backdrop-blur-sm p-1 rounded-lg border border-gray-800"
              whileHover={{ boxShadow: "0 0 15px rgba(255, 0, 0, 0.2)" }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeCategory === category.id ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4 bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-red-500/50 transition-colors"
                variants={itemVariants}
                whileHover={{ boxShadow: "0 0 15px rgba(255, 0, 0, 0.2)" }}
              >
                <motion.button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                >
                  <motion.span
                    className="text-lg font-medium"
                    whileInView={{ color: openIndex === index ? ["#ffffff", "#ff3333", "#ffffff"] : "#ffffff" }}
                    transition={{
                      duration: 3,
                      repeat: openIndex === index ? Number.POSITIVE_INFINITY : 0,
                      repeatType: "reverse",
                    }}
                  >
                    {faq.question}
                  </motion.span>
                  {openIndex === index ? (
                    <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    </motion.div>
                  ) : (
                    <motion.div initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </motion.div>
                  )}
                </motion.button>
                <motion.div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p
                    className="text-gray-300 pb-6"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{
                      y: openIndex === index ? 0 : 10,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {faq.answer}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Still Have Questions */}
          <motion.div
            className="max-w-3xl mx-auto mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 via-red-950/10 to-gray-900 border border-red-900/30 rounded-lg p-8"
              whileHover={{ boxShadow: "0 0 30px rgba(255, 0, 0, 0.3)" }}
            >
              <motion.h2
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent"
                whileInView={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                Still Have Questions?
              </motion.h2>
              <motion.p
                className="text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Our support team is available 24/7 to help you with any questions or issues you may have.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
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
                    className="mr-2 flex-shrink-0"
                  >
                    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z" />
                  </svg>
                  Join Discord
                </motion.a>
                <motion.a
                  href="mailto:support@calamari.lol"
                  className="inline-flex items-center bg-white/10 hover:bg-white/20 px-6 py-3 rounded-md font-medium transition-colors"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Email Support
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="bg-[#0a0f1a] py-12 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <Link href="/" className="text-xl font-bold">
                  Calamari.lol
                </Link>
              </div>
              <div className="flex space-x-6">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                  Support
                </Link>
                <Link href="/faq" className="text-white font-medium transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Calamari. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </PageTransition>
  )
}
