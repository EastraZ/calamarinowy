"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Home,
  Package,
  DollarSign,
  HelpCircle,
  Users,
  Download,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      Object.keys(dropdownRefs.current).forEach((key) => {
        const ref = dropdownRefs.current[key]
        if (ref && !ref.contains(target)) {
          if (activeDropdown === key) {
            setActiveDropdown(null)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeDropdown])

  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Products",
      path: "#",
      icon: Package,
      dropdown: true,
      items: [
        { name: "All Products", path: "/products" },
        { name: "Rust Cheats", path: "/products/rust" },
        { name: "Fortnite Cheats", path: "/products/fortnite" },
        { name: "Apex Legends", path: "/products/apex" },
        { name: "HWID Spoofer", path: "/products/hwid" },
        { name: "Features Overview", path: "/features" },
      ],
    },
    {
      name: "Pricing",
      path: "/pricing",
      icon: DollarSign,
    },
    {
      name: "Support",
      path: "#",
      icon: HelpCircle,
      dropdown: true,
      items: [
        { name: "Help Center", path: "/help-center" },
        { name: "Discord Community", path: "/discord-community" },
        { name: "Contact Support", path: "/contact-support" },
        { name: "Bug Reports", path: "/bug-reports" },
        { name: "Feature Requests", path: "/feature-requests" },
        { name: "FAQ", path: "/faq" },
      ],
    },
    {
      name: "Company",
      path: "#",
      icon: Users,
      dropdown: true,
      items: [
        { name: "About Us", path: "/about" },
        { name: "Our Team", path: "/our-team" },
        { name: "Status", path: "/status" },
        { name: "Security", path: "/security" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" },
      ],
    },
    {
      name: "Download",
      path: "/download",
      icon: Download,
    },
  ]

  const isActive = (path: string) => {
    if (path === "/") return pathname === path
    if (path === "#") return false
    return pathname.startsWith(path.split("?")[0])
  }

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const handlePurchase = () => {
    window.open("https://calamari.mysellauth.com/#products", "_blank")
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`w-full ${
            scrolled
              ? "bg-black/95 shadow-lg backdrop-blur-md border-b border-red-500/20"
              : "bg-gradient-to-b from-black/90 to-black/80 backdrop-blur-sm border-b border-red-500/10"
          } transition-all duration-500`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="group flex items-center">
                  <motion.div
                    className="relative w-12 h-12 mr-3 flex items-center justify-center"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Image
                      src="/images/calamari-diagonal.png"
                      alt="Calamari Logo"
                      width={40}
                      height={40}
                      className="object-contain filter brightness-0 invert"
                    />
                  </motion.div>
                  <motion.span className="text-xl font-bold text-white" whileHover={{ scale: 1.02 }}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      Calamari.lol
                    </span>
                  </motion.span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    ref={(el) => {
                      if (item.dropdown) {
                        dropdownRefs.current[item.name] = el
                      }
                    }}
                  >
                    {item.dropdown ? (
                      <div className="relative">
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className={`px-4 py-2 rounded-md transition-colors duration-200 flex items-center ${
                            activeDropdown === item.name
                              ? "text-white font-medium bg-red-500/10"
                              : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                          aria-expanded={activeDropdown === item.name}
                          aria-haspopup="true"
                        >
                          <item.icon className="mr-2 h-4 w-4" />
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.15, ease: "easeOut" }}
                              className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md border border-red-500/20 rounded-lg shadow-xl shadow-red-900/20 overflow-hidden z-50"
                            >
                              <div className="py-2">
                                {item.items?.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.path}
                                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-red-500/10 transition-colors duration-150"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className={`px-4 py-2 rounded-md transition-colors duration-200 flex items-center ${
                          isActive(item.path)
                            ? "text-white font-medium bg-red-500/10"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="inline-block">
                          {item.name}
                        </motion.span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Purchase Button */}
              <div className="flex items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-md blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                  <motion.button
                    onClick={handlePurchase}
                    className="relative flex items-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-4 py-2 rounded-md text-white font-medium transition-colors duration-300 shadow-lg shadow-red-900/20 hover:shadow-red-900/40"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    <span className="relative">
                      <span className="relative z-10">GET CALAMARI</span>
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30 rounded-full"></span>
                    </span>
                  </motion.button>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                  className="lg:hidden text-white ml-4 p-2 rounded-md hover:bg-white/10 transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-md pt-16 overflow-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.dropdown ? (
                        <div className="mb-2">
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className={`flex items-center justify-between w-full px-4 py-3 rounded-lg transition-colors ${
                              activeDropdown === item.name
                                ? "bg-red-900/20 text-white font-medium border border-red-500/30"
                                : "bg-gray-900/30 text-gray-200 hover:text-white"
                            }`}
                          >
                            <div className="flex items-center">
                              <item.icon className="mr-3 h-5 w-5" />
                              <span className="text-lg">{item.name}</span>
                            </div>
                            <ChevronDown
                              className={`h-5 w-5 transition-transform duration-200 ${
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
                                transition={{ duration: 0.2 }}
                                className="mt-1 pl-4 border-l-2 border-red-500/30 ml-4"
                              >
                                {item.items?.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.path}
                                    className="block px-4 py-2 my-1 rounded-lg bg-gray-900/30 text-gray-300 hover:text-white hover:bg-red-900/10 transition-colors"
                                    onClick={() => {
                                      setActiveDropdown(null)
                                      setIsMenuOpen(false)
                                    }}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.path}
                          className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                            isActive(item.path)
                              ? "bg-red-900/20 text-white font-medium border border-red-500/30"
                              : "bg-gray-900/30 text-gray-200 hover:text-white"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <item.icon className="mr-3 h-5 w-5" />
                          <motion.span
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block text-lg"
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      )}
                    </motion.div>
                  ))}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (menuItems.length + 1) * 0.1 }}
                    className="mt-6 relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-md blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                    <motion.button
                      onClick={() => {
                        setIsMenuOpen(false)
                        handlePurchase()
                      }}
                      className="relative flex w-full items-center justify-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-4 py-4 rounded-md text-white font-medium transition-colors duration-300 shadow-lg shadow-red-900/20 hover:shadow-red-900/40"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      GET CALAMARI
                    </motion.button>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
