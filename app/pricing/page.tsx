"use client"

import { motion } from "framer-motion"
import { Check, X, Shield, Clock, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MatrixRain from "@/components/matrix-rain"

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "$19.99",
      period: "monthly",
      description: "Essential features for casual players",
      features: [
        { name: "Basic Aimbot", included: true },
        { name: "ESP/Wallhack", included: true },
        { name: "Triggerbot", included: true },
        { name: "Recoil Control", included: true },
        { name: "Speed Hack", included: false },
        { name: "Radar Hack", included: false },
        { name: "HWID Spoofer", included: false },
        { name: "Multi-Game Support", included: false },
        { name: "24/7 Support", included: false },
        { name: "Undetected Guarantee", included: true },
      ],
      color: "from-blue-600 to-cyan-600",
      popular: false,
    },
    {
      name: "Premium",
      price: "$39.99",
      period: "monthly",
      description: "Advanced features for serious gamers",
      features: [
        { name: "Advanced AI Aimbot", included: true },
        { name: "ESP/Wallhack", included: true },
        { name: "Triggerbot", included: true },
        { name: "Recoil Control", included: true },
        { name: "Speed Hack", included: true },
        { name: "Radar Hack", included: true },
        { name: "HWID Spoofer", included: true },
        { name: "Multi-Game Support", included: false },
        { name: "24/7 Support", included: true },
        { name: "Undetected Guarantee", included: true },
      ],
      color: "from-red-600 to-orange-600",
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$69.99",
      period: "monthly",
      description: "Complete package for professional players",
      features: [
        { name: "Elite AI Aimbot", included: true },
        { name: "ESP/Wallhack", included: true },
        { name: "Triggerbot", included: true },
        { name: "Recoil Control", included: true },
        { name: "Speed Hack", included: true },
        { name: "Radar Hack", included: true },
        { name: "HWID Spoofer", included: true },
        { name: "Multi-Game Support", included: true },
        { name: "24/7 Support", included: true },
        { name: "Undetected Guarantee", included: true },
      ],
      color: "from-purple-600 to-violet-600",
      popular: false,
    },
  ]

  const discounts = [
    {
      duration: "3 Months",
      discount: "10% off",
      icon: Clock,
    },
    {
      duration: "6 Months",
      discount: "15% off",
      icon: Shield,
    },
    {
      duration: "12 Months",
      discount: "25% off",
      icon: Star,
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
              Pricing Plans
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Choose the perfect plan to elevate your gaming experience with Calamari
            </motion.p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-black/50 backdrop-blur-sm border ${
                  plan.popular ? "border-red-500/50" : "border-red-500/20"
                } rounded-2xl overflow-hidden shadow-lg ${plan.popular ? "shadow-red-500/20" : ""} relative`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/ {plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                            <X className="h-3 w-3 text-gray-400" />
                          </div>
                        )}
                        <span className={feature.included ? "text-gray-200" : "text-gray-500"}>{feature.name}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className={`w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r ${plan.color} hover:opacity-90 transition-all duration-300 shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </div>
                <div className={`h-1 bg-gradient-to-r ${plan.color}`}></div>
              </motion.div>
            ))}
          </div>

          {/* Discounts Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Save with Long-Term Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get significant discounts when you commit to longer subscription periods
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {discounts.map((discount, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden shadow-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                      <discount.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{discount.duration}</h3>
                  <p className="text-red-400 text-xl font-bold">{discount.discount}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get answers to common questions about our pricing and plans
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How do I pay for Calamari?",
                  answer:
                    "We accept various payment methods including credit cards, cryptocurrency (Bitcoin, Ethereum, Litecoin), and PayPal. All transactions are secure and discreet.",
                },
                {
                  question: "Can I upgrade my plan later?",
                  answer:
                    "Yes, you can upgrade your plan at any time. The price difference will be prorated based on the remaining time in your current subscription.",
                },
                {
                  question: "Do you offer refunds?",
                  answer:
                    "We offer a 24-hour money-back guarantee if you're not satisfied with our product. After this period, refunds are considered on a case-by-case basis.",
                },
                {
                  question: "What happens if I get banned?",
                  answer:
                    "While our software is designed to be undetectable, we offer a ban guarantee with our Premium and Ultimate plans. If you get banned while using Calamari as instructed, we'll provide a replacement account or refund.",
                },
                {
                  question: "How often do you update the software?",
                  answer:
                    "We update our software regularly to stay ahead of anti-cheat systems. Updates are typically released within hours of game patches to ensure continuous functionality.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Dominate?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join thousands of players who have already taken their gaming to the next level with Calamari.
            </p>
            <motion.a
              href="/#subscription-plans"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 rounded-lg font-bold text-white hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-900/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Calamari Now
            </motion.a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
