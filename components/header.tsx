"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react" // Import useState, useEffect, useRef for scroll logic
import { ChevronDown, Crown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuItem, // No longer simple items
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ProductDropdownCard } from "./product-dropdown-card"
import { BuySubscriptionModal } from "./buy-subscription-modal" // Import modal

export function Header({ onLogoClick }: { onLogoClick?: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          if (currentScrollY > lastScrollY.current && currentScrollY > 32) {
            setShowHeader(false) // Scrolling down, hide
          } else if (currentScrollY < lastScrollY.current) {
            setShowHeader(true) // Scrolling up, show
          }
          lastScrollY.current = currentScrollY
          ticking.current = false
        })
        ticking.current = true
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-transparent py-6 px-4 md:px-8 transition-opacity duration-500 ${showHeader ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold" onClick={e => { onLogoClick?.(); }}>
            <img src="/calamari_img.png" alt="Logo" className="w-12 h-12 object-contain inline-block align-middle" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/assets" className="text-slate-300 hover:text-white transition-colors">
              Assets
            </Link>
            <Link href="/faq" className="text-slate-300 hover:text-white transition-colors">
              Setup
            </Link>
            <Button
              onClick={() => setIsModalOpen(true)} // Open modal
              variant="outline"
              className="bg-transparent border-red-500 text-red-500 hover:bg-red-500 hover:text-white text-xs px-3 py-1.5 h-auto"
              size="sm"
            >
              <Crown className="w-4 h-4 mr-2" />
              Buy Subscription
            </Button>
          </nav>
          <Button variant="ghost" className="md:hidden text-slate-300 hover:text-white">
            Menu
          </Button>
        </div>
      </header>
      <BuySubscriptionModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
