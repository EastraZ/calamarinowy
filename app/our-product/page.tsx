"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Check, ChevronRight, ShoppingCart, ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("features")
  const [activeProduct, setActiveProduct] = useState("rust")
  const searchParams = useSearchParams()

  useEffect(() => {
    const product = searchParams.get("product")
    if (product && ["rust", "fortnite", "apex"].includes(product)) {
      setActiveProduct(product)
    }
  }, [searchParams])

  useEffect(() => {
    // Remove SellSN initialization code
  }, [activeTab])

  const features = {
    rust: [
      {
        title: "Advanced Aimbot",
        description:
          "Our precision aimbot features customizable FOV, target selection, and smooth aiming for a natural feel. Adjust settings to match your playstyle and preferences.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        title: "ESP & Wallhack",
        description:
          "See enemies through walls with customizable ESP features including boxes, skeletons, health bars, and distance indicators. Never be caught off guard again.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ),
      },
      {
        title: "Recoil Control",
        description:
          "Our advanced recoil control system automatically compensates for weapon recoil, allowing for precise shooting even during sustained fire. Customizable for each weapon.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        ),
      },
      {
        title: "Item ESP",
        description:
          "Locate valuable items, resources, and loot with our item ESP feature. Filter by item type and rarity to find exactly what you need.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        ),
      },
      {
        title: "Radar Hack",
        description:
          "Get a complete overview of your surroundings with our customizable radar hack. Track enemies, items, and resources in real-time.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
        ),
      },
      {
        title: "Undetected Technology",
        description:
          "Our advanced anti-detection system keeps you safe from bans with regular updates and security features. Stay ahead of anti-cheat systems.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
      },
    ],
    fortnite: [
      {
        title: "Silent Aim",
        description:
          "Our silent aim technology provides precise targeting without obvious snapping, making your gameplay look natural while maintaining high accuracy.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        title: "Player & Item ESP",
        description:
          "See all players and valuable items through walls with customizable colors and distance indicators. Filter items by rarity to focus on what matters.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ),
      },
      {
        title: "Build Assistance",
        description:
          "Gain the edge in build battles with our advanced build assistance features. Auto-place optimal structures and edit faster than your opponents.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        ),
      },
      {
        title: "Character Customization",
        description:
          "Access all skins, emotes, and cosmetics in the game with our character customization feature. Stand out in style without spending V-Bucks.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        ),
      },
      {
        title: "Instant Edit",
        description:
          "Edit structures instantly with our advanced editing tools. Gain a significant advantage in build fights and box fights.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        ),
      },
      {
        title: "Undetected Technology",
        description:
          "Our advanced anti-detection system keeps you safe from bans with regular updates and security features. Stay ahead of anti-cheat systems.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
      },
    ],
    apex: [
      {
        title: "Advanced Aimbot",
        description:
          "Our precision aimbot for Apex Legends features customizable FOV, target selection, and smooth aiming for a natural feel. Dominate in firefights with ease.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        title: "Wallhack with Distance",
        description:
          "See enemies through walls with customizable ESP features including boxes, skeletons, health bars, and distance indicators. Track enemies across the map.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        ),
      },
      {
        title: "Loot Filter System",
        description:
          "Our advanced loot filter system highlights the best gear and weapons based on your preferences. Never miss high-tier loot again.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
        ),
      },
      {
        title: "Movement Enhancement",
        description:
          "Enhance your movement capabilities with our advanced movement features. Improve your strafing, sliding, and overall mobility for better combat performance.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        title: "Recoil Control",
        description:
          "Our advanced recoil control system automatically compensates for weapon recoil, allowing for precise shooting even during sustained fire. Customizable for each weapon.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        ),
      },
      {
        title: "Undetected Technology",
        description:
          "Our advanced anti-detection system keeps you safe from bans with regular updates and security features. Stay ahead of anti-cheat systems.",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
      },
    ],
  }

  const plans = [
    {
      name: "1 Day",
      price: "$6.99",
      description: "Perfect for weekend warriors",
      features: ["Full access to all features", "24/7 support", "Regular updates"],
      popular: false,
      buttonId: "f67c6c86-b0b6-4a4e-852b-3f1ebbf51b05",
    },
    {
      name: "7 Days",
      price: "$24.99",
      description: "Best value for regular players",
      features: ["Full access to all features", "24/7 priority support", "Regular updates", "Config saving"],
      popular: true,
      buttonId: "f67c6c86-b0b6-4a4e-852b-3f1ebbf51b05",
    },
    {
      name: "30 Days",
      price: "$59.99",
      description: "For dedicated gamers",
      features: [
        "Full access to all features",
        "24/7 VIP support",
        "Priority updates",
        "Exclusive Discord role",
        "Beta feature access",
      ],
      popular: false,
      buttonId: "5c92b38b-55b3-4b49-8a18-334beebd14db",
    },
    {
      name: "Lifetime",
      price: "$299.99",
      description: "For the serious gamer",
      features: [
        "Permanent access to all features",
        "24/7 VIP support",
        "Priority updates",
        "Exclusive Discord role",
        "Beta feature access",
        "Free upgrades for life",
      ],
      popular: false,
      buttonId: "05072e11-faaa-4716-9351-fa81b5ffbaf5",
    },
  ]

  const requirements = [
    "Windows 10 or Windows 11 (64-bit)",
    "Intel Core i5 or AMD Ryzen 5 processor",
    "8GB RAM",
    "DirectX 11 compatible graphics card",
    "Stable internet connection",
    "Administrator privileges",
  ]

  const productInfo = {
    rust: {
      title: "Rust",
      description:
        "Dominate in Rust with our premium cheat. Gain the ultimate advantage with our advanced features and undetected technology.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EBvd8CRWjqq2e0YAfqGZwa8L5SFecx.png",
      lastUpdated: "May 13, 2025",
      version: "v3.5.2",
    },
    fortnite: {
      title: "Fortnite",
      description:
        "Take your Fortnite gameplay to the next level with our premium cheat. Build faster, aim better, and win more games with our advanced features.",
      image: "/images/fortnite-menu.png",
      lastUpdated: "May 12, 2025",
      version: "v2.8.4",
    },
    apex: {
      title: "Apex Legends",
      description:
        "Dominate the arena with our premium Apex Legends hack. Track enemies, find the best loot, and improve your aim with our advanced features.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EBvd8CRWjqq2e0YAfqGZwa8L5SFecx.png",
      lastUpdated: "May 11, 2025",
      version: "v2.3.1",
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a0a0a] to-[#0a0f1a] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Product Selection Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="/our-product?product=rust"
            className={`px-6 py-2 rounded-md transition-colors ${
              activeProduct === "rust"
                ? "bg-gray-700 text-white"
                : "bg-[#0f0a0a]/50 text-gray-300 hover:bg-[#0f0a0a] hover:text-white"
            }`}
          >
            Rust
          </Link>
          <Link
            href="/our-product?product=fortnite"
            className={`px-6 py-2 rounded-md transition-colors ${
              activeProduct === "fortnite"
                ? "bg-gray-700 text-white"
                : "bg-[#0f0a0a]/50 text-gray-300 hover:bg-[#0f0a0a] hover:text-white"
            }`}
          >
            Fortnite
          </Link>
          <Link
            href="/our-product?product=apex"
            className={`px-6 py-2 rounded-md transition-colors ${
              activeProduct === "apex"
                ? "bg-gray-700 text-white"
                : "bg-[#0f0a0a]/50 text-gray-300 hover:bg-[#0f0a0a] hover:text-white"
            }`}
          >
            Apex Legends
          </Link>
        </div>
      </div>

      {/* Product Hero */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="flex items-center mb-4">
              <span className="bg-green-500 h-2.5 w-2.5 rounded-full mr-2"></span>
              <span className="text-green-500 text-sm font-medium">Undetected</span>
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-gray-400 text-sm">Last updated: {productInfo[activeProduct].lastUpdated}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              {productInfo[activeProduct].title}
            </h1>
            <p className="text-gray-300 text-lg mb-6">{productInfo[activeProduct].description}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-md px-4 py-2">
                <div className="text-sm text-gray-400">Type</div>
                <div className="font-medium">External</div>
              </div>
              <div className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-md px-4 py-2">
                <div className="text-sm text-gray-400">Status</div>
                <div className="font-medium text-green-500">Undetected</div>
              </div>
              <div className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-md px-4 py-2">
                <div className="text-sm text-gray-400">Version</div>
                <div className="font-medium">{productInfo[activeProduct].version}</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  setActiveTab("pricing")
                  setTimeout(() => {
                    const pricingSection = document.getElementById("pricing-section")
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }, 100)
                }}
                className="flex items-center bg-white/10 hover:bg-white/20 px-6 py-3 rounded-md transition-colors"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                <span className="hidden sm:inline">Purchase Now</span>
                <span className="sm:hidden">Buy</span>
              </button>
              <Link
                href="/support"
                className="flex items-center bg-transparent border border-white/20 hover:bg-white/10 px-6 py-3 rounded-md transition-colors"
              >
                Need Help?
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-md overflow-hidden border border-gray-800">
              <Image
                src={productInfo[activeProduct].image || "/placeholder.svg"}
                alt={`${productInfo[activeProduct].title} Preview`}
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <div className="text-sm text-gray-300 mb-2">
                    Preview of Calamari {productInfo[activeProduct].title}
                  </div>
                  <div className="text-xl font-bold">Advanced ESP and Aimbot Features</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="border-b border-gray-800 mb-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            <button
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === "features"
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white transition-colors"
              }`}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === "pricing"
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white transition-colors"
              }`}
              onClick={() => setActiveTab("pricing")}
            >
              Pricing
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === "requirements"
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white transition-colors"
              }`}
              onClick={() => setActiveTab("requirements")}
            >
              Requirements
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                activeTab === "faq"
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white transition-colors"
              }`}
              onClick={() => setActiveTab("faq")}
            >
              FAQ
            </button>
          </div>
        </div>

        {/* Features Tab */}
        {activeTab === "features" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features[activeProduct].map((feature, index) => (
              <div
                key={index}
                className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-md p-6 hover:border-white/30 transition-all duration-300"
              >
                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === "pricing" && (
          <div id="pricing-section" className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-[#0f0a0a]/80 backdrop-blur-sm border ${
                  plan.popular ? "border-white/20" : "border-gray-800"
                } rounded-md p-6 ${plan.popular ? "relative" : "hover:border-white/30"} transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <div className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calamari.sellsn.io/group/bdaf8b4e-38dd-48d3-999e-de03f5df3dc2?p=f67c6c86-b0b6-4a4e-852b-3f1ebbf51b05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white/10 hover:bg-white/20 py-2 rounded-md transition-colors"
                >
                  Purchase Now
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Requirements Tab */}
        {activeTab === "requirements" && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-md p-6">
              <h3 className="text-xl font-bold mb-4">System Requirements</h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <h4 className="font-bold mb-2">Additional Notes</h4>
                <p className="text-gray-300">
                  For optimal performance, we recommend running the game on an SSD and having at least 16GB of RAM.
                  Anti-virus software may need to be disabled during installation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === "faq" && (
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-md p-6">
                <h3 className="text-xl font-bold mb-2">Is Calamari {productInfo[activeProduct].title} safe to use?</h3>
                <p className="text-gray-300">
                  Yes, Calamari {productInfo[activeProduct].title} is designed with advanced anti-detection technology
                  to keep your account safe. We regularly update our software to stay ahead of anti-cheat systems and
                  maintain a high level of security for our users.
                </p>
              </div>
              <div className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-md p-6">
                <h3 className="text-xl font-bold mb-2">
                  How often do you update Calamari {productInfo[activeProduct].title}?
                </h3>
                <p className="text-gray-300">
                  We update Calamari {productInfo[activeProduct].title} regularly to ensure compatibility with the
                  latest game versions and to add new features. Major updates typically occur monthly, while minor
                  updates and patches are released as needed, especially after game updates.
                </p>
              </div>
              <div className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-md p-6">
                <h3 className="text-xl font-bold mb-2">
                  Can I use Calamari {productInfo[activeProduct].title} on multiple computers?
                </h3>
                <p className="text-gray-300">
                  Your Calamari subscription is tied to your account, not your hardware. You can use it on multiple
                  computers, but not simultaneously. You'll need to log out from one device before logging in on
                  another.
                </p>
              </div>
              <div className="bg-[#0f0a0a]/50 backdrop-blur-sm border border-gray-800 rounded-md p-6">
                <h3 className="text-xl font-bold mb-2">How do I get support if I have issues?</h3>
                <p className="text-gray-300">
                  We provide 24/7 support through our Discord server. Join our community at discord.gg/calamari to get
                  help from our dedicated support team and connect with other Calamari users.
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="inline-flex items-center bg-white/10 hover:bg-white/20 px-6 py-3 rounded-md transition-colors"
              >
                View All FAQs <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-[#0f0a0a]/80 backdrop-blur-sm border border-gray-800 rounded-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
            Ready to Dominate in {productInfo[activeProduct].title}?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied players who trust Calamari for their game enhancement needs. Get started today
            and experience the difference.
          </p>
          <button
            onClick={() => {
              setActiveTab("pricing")
              setTimeout(() => {
                const pricingSection = document.getElementById("pricing-section")
                if (pricingSection) {
                  pricingSection.scrollIntoView({ behavior: "smooth" })
                }
              }, 100)
            }}
            className="inline-flex items-center bg-white/10 hover:bg-white/20 px-6 py-3 rounded-md font-medium transition-colors"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            <span className="hidden sm:inline">Purchase Now</span>
            <span className="sm:hidden">Buy</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calamari-diagonal-0MIPrqm68v07REXLgaOx76jFso80QO.png"
                alt="Calamari Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-xl font-bold">Calamari.lol</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <div className="relative group z-50">
                <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#0f0a0a] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-1">
                    <Link
                      href="/our-product?product=rust"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2d0808] hover:text-white"
                    >
                      Rust
                    </Link>
                    <Link
                      href="/our-product?product=fortnite"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2d0808] hover:text-white"
                    >
                      Fortnite
                    </Link>
                    <Link
                      href="/our-product?product=apex"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#2d0808] hover:text-white"
                    >
                      Apex Legends
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                Support
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
  )
}
