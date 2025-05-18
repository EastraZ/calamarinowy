"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Shield, Zap, Award, Clock, Lock, Sparkles } from "lucide-react"

export default function WhyChooseCalamari() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("why-choose-section")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const features = [
    {
      icon: <Shield className="h-7 w-7 text-red-400" />,
      title: "Undetected Protection",
      description:
        "Our advanced anti-detection technology keeps you safe from bans with continuous updates and kernel-level protection.",
      delay: "0",
    },
    {
      icon: <Zap className="h-7 w-7 text-red-400" />,
      title: "Lightning Performance",
      description: "Experience zero lag and maximum FPS with our optimized code that minimizes system resource usage.",
      delay: "100",
    },
    {
      icon: <Award className="h-7 w-7 text-red-400" />,
      title: "Premium Features",
      description:
        "Access exclusive features like advanced ESP, precision aimbot, and customizable settings not found elsewhere.",
      delay: "200",
    },
    {
      icon: <Clock className="h-7 w-7 text-red-400" />,
      title: "24/7 Support",
      description:
        "Our dedicated team is always available to help with any issues, ensuring you're never left without assistance.",
      delay: "300",
    },
    {
      icon: <Lock className="h-7 w-7 text-red-400" />,
      title: "Secure Updates",
      description:
        "Regular updates delivered through our encrypted system keep your tools current with the latest game versions.",
      delay: "400",
    },
    {
      icon: <Sparkles className="h-7 w-7 text-red-400" />,
      title: "Perfect Experience",
      description:
        "Enjoy a seamless, optimized gaming experience with intuitive controls, customizable interfaces, and flawless integration.",
      delay: "500",
    },
  ]

  return (
    <section id="why-choose-section" className="relative py-12 overflow-hidden">
      {/* Animated background with some red gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-black opacity-50"></div>

      {/* Logo in corner */}
      <div className="absolute top-4 right-4 floating z-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calamari-diagonal-0MIPrqm68v07REXLgaOx76jFso80QO.png"
          alt="Calamari Logo"
          width={70}
          height={70}
          className="opacity-80"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold md:text-4xl text-white">
            <span className="bg-gradient-to-r from-red-500 to-gray-300 bg-clip-text text-transparent">
              Why Choose Calamari.lol
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-gray-500 mx-auto mt-4 rounded-full"></div>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Experience the difference with our premium game enhancement tools
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`border border-gray-800 bg-gradient-to-br from-gray-900 via-red-900/10 to-gray-900 p-4 md:p-5 transform transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-gradient-to-br from-gray-800 to-red-900/30 p-3 mb-3 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-300">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block border border-red-700/50 p-px">
            <button
              onClick={() => {
                const plansSection = document.getElementById("subscription-plans")
                if (plansSection) {
                  plansSection.scrollIntoView({ behavior: "smooth" })
                } else {
                  window.location.href = "/#subscription-plans"
                }
              }}
              className="bg-gradient-to-r from-red-800/80 to-gray-800 text-white px-7 py-3 rounded-md font-bold hover:from-red-700/80 hover:to-gray-700 transition-colors"
              style={{ touchAction: "manipulation" }}
            >
              <span className="text-white">Experience the Calamari Difference</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
