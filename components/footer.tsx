"use client"

import Link from "next/link"
import { useState } from "react"
import { BuySubscriptionModal } from "./buy-subscription-modal"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [initialTariff, setInitialTariff] = useState<string | null>(null)
  const [initialCheat, setInitialCheat] = useState<string | null>(null)

  const handleProductClick = (product: string) => {
    setInitialTariff("1d")
    setInitialCheat(product === "fortnite" ? "calamari-fortnite" : "fortnite-rust")
    setIsModalOpen(true)
  }

  return (
    <footer className="bg-[#14151a] text-slate-400 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and Text */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-semibold text-white">Calamari</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Although our products have anti-detection features, it is still possible to get banned via reports - play smart.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="https://discord.com/invite/calamari" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  className="hover:text-red-500 transition-colors bg-transparent p-0 border-0 outline-none cursor-pointer"
                  onClick={() => handleProductClick("fortnite")}
                >
                  Calamari Fortnite
                </button>
              </li>
              <li>
                <button
                  className="hover:text-red-500 transition-colors bg-transparent p-0 border-0 outline-none cursor-pointer"
                  onClick={() => handleProductClick("rust")}
                >
                  Calamari Rust
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.youtube.com/@VelocityEssentialsFUSION"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.elitepvpers.com/forum/fortnite-trading/5304534-1-rated-test-keys-calamari-v2-bullet-tp-shoot-through-walls-car-fly.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors"
                >
                  Elitepvpers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-700 mb-8" />

        <div className="text-center text-xs text-slate-500">
          {currentYear} © Calamari - Copying and distribution of materials is prohibited.
        </div>
        <div className="text-center text-xs text-slate-600 mt-1">
          Website Created by{' '}
          <a
            href="https://discord.com/users/951191979134447666"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-red-500 transition-colors underline underline-offset-2 cursor-pointer"
          >
            @icangloatnow
          </a>
        </div>
      </div>
      <BuySubscriptionModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} initialTariff={initialTariff} initialCheat={initialCheat} />
    </footer>
  )
}
