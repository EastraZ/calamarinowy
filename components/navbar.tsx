"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, User, LogOut, Settings, Shield } from "lucide-react"
import { useAuth } from "@/lib/auth"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "/products",
      dropdown: [
        { name: "All Products", href: "/products" },
        { name: "Rust", href: "/products/rust" },
        { name: "Fortnite", href: "/products/fortnite" },
        { name: "Apex Legends", href: "/products/apex" },
      ],
    },
    {
      name: "Features",
      href: "/features",
      dropdown: [
        { name: "All Features", href: "/features" },
        { name: "Magic Bullet", href: "/features#magic-bullet" },
        { name: "ESP/Wallhack", href: "/features#esp" },
        { name: "HWID Spoofing", href: "/features#hwid" },
        { name: "Anti-Detection", href: "/features#anti-detection" },
      ],
    },
    { name: "Pricing", href: "/pricing" },
    {
      name: "Support",
      href: "/support",
      dropdown: [
        { name: "Help Center", href: "/help-center" },
        { name: "Contact Support", href: "/contact-support" },
        { name: "Discord Community", href: "/discord-community" },
        { name: "Bug Reports", href: "/bug-reports" },
        { name: "Feature Requests", href: "/feature-requests" },
      ],
    },
    {
      name: "More",
      href: "#",
      dropdown: [
        { name: "About Us", href: "/about" },
        { name: "System Requirements", href: "/system-requirements" },
        { name: "Status", href: "/status" },
      ],
    },
  ]

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const handlePurchase = () => {
    window.open("https://calamari.mysellauth.com/", "_blank")
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-red-500/20 shadow-lg shadow-red-900/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/images/calamari-logo.png"
                alt="Calamari Logo"
                width={40}
                height={40}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-red-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Calamari.lol
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 text-red-400 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-red-500/20 rounded-xl shadow-2xl shadow-red-900/20 overflow-hidden"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-red-500/10 transition-all duration-200 border-b border-gray-800/50 last:border-b-0"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="relative group">
                <button
                  onClick={() => handleDropdownToggle("user")}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <User className="h-4 w-4" />
                  <span>{user.username}</span>
                  <ChevronDown className="h-4 w-4 text-red-400" />
                </button>
                <AnimatePresence>
                  {activeDropdown === "user" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-red-500/20 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <Link
                        href="/dashboard"
                        className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-red-500/10 transition-colors"
                      >
                        <Shield className="h-4 w-4 mr-2" />
                        Dashboard
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-red-500/10 transition-colors"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                      </Link>
                      <button
                        onClick={logout}
                        className="flex items-center w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-red-500/10 transition-colors"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link
                  href="/download"
                  className="px-6 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  Download
                </Link>
                <motion.button
                  onClick={handlePurchase}
                  className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-red-900/20 hover:shadow-red-900/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Purchase
                </motion.button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-800/50 bg-black/95 backdrop-blur-xl"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-4 w-4 text-red-400 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-gray-900/50"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  className="block px-8 py-2 text-gray-400 hover:text-white transition-colors duration-200"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="border-t border-gray-800/50 pt-4 mt-4 space-y-2">
                  {user ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          logout()
                          setIsOpen(false)
                        }}
                        className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/download"
                        className="block px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        Download
                      </Link>
                      <button
                        onClick={() => {
                          handlePurchase()
                          setIsOpen(false)
                        }}
                        className="block w-full text-left px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-medium rounded-lg mx-4"
                      >
                        Purchase
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
