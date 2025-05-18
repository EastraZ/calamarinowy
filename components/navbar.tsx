"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, ChevronDown, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  // Add a new state for tracking which dropdown is open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && !event.target) return

      const target = event.target as HTMLElement
      if (!target.closest(".dropdown-container")) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [openDropdown])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null)
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // Add this function to handle dropdown toggling
  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id)
  }

  // Handle hover with delay
  const handleMouseEnter = (id: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout)
    const timeout = setTimeout(() => {
      setOpenDropdown(id)
      if (id.includes("-nav")) {
        // If it's a nav item, also open the dropdown
        setIsDropdownOpen(true)
      }
    }, 100) // Reduced to 100ms for faster response
    setHoverTimeout(timeout)
  }

  const handleMouseLeave = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout)
    const timeout = setTimeout(() => {
      setOpenDropdown(null)
    }, 300) // 300ms delay before hiding dropdown
    setHoverTimeout(timeout)
  }

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "Products",
      path: "/our-product?product=rust",
      submenu: [
        { name: "Rust", path: "/our-product?product=rust" },
        { name: "Fortnite", path: "/our-product?product=fortnite" },
        { name: "Apex Legends", path: "/our-product?product=apex" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Status", path: "/status" },
    { name: "Support", path: "/support" },
    { name: "FAQ", path: "/faq" },
  ]

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5, scale: 0.95, transformOrigin: "top center" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  }

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4 },
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 },
      },
    },
  }

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname.startsWith(path.split("?")[0])
  }

  return (
    <motion.header className="relative z-50" initial="hidden" animate="visible" variants={navbarVariants}>
      {/* Main Navigation - with solid background to ensure visibility */}
      <div
        className={`w-full ${
          scrolled
            ? "bg-black/95 shadow-lg backdrop-blur-md border-b border-gray-800/50"
            : "bg-gradient-to-b from-black/90 to-black/80 backdrop-blur-sm border-b border-gray-800/30"
        } transition-all duration-500`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - positioned on the left */}
            <div className="flex items-center">
              <div className="flex items-center">
                <Link href="/" className="group">
                  <motion.div
                    className="relative w-10 h-10 mr-3 overflow-hidden rounded-full bg-gradient-to-br from-red-900/30 to-black p-0.5 shadow-lg shadow-red-900/20 group-hover:shadow-red-900/40 transition-all duration-300"
                    initial={{ rotate: -10, scale: 0.9 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calamari-diagonal-0MIPrqm68v07REXLgaOx76jFso80QO.png"
                      alt="Calamari Logo"
                      fill
                      className="object-contain p-1"
                    />
                  </motion.div>
                </Link>
                <div className="relative" ref={dropdownRef}>
                  <motion.button
                    className="text-xl font-bold text-white flex items-center px-3 py-2 rounded-md hover:bg-white/5 transition-colors duration-300"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onMouseEnter={() => handleMouseEnter("main")}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    variants={itemVariants}
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      Calamari.lol
                    </span>
                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-1"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        className="absolute left-0 top-full mt-1 w-48 bg-black/95 backdrop-blur-md border border-gray-800/70 rounded-lg shadow-lg shadow-black/50 z-50 overflow-hidden"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        onMouseEnter={() => handleMouseEnter("main")}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="py-2 px-1">
                          {menuItems.map((item, index) => (
                            <div key={index} className="relative">
                              {item.submenu ? (
                                <div
                                  className="dropdown-container relative px-1"
                                  onMouseEnter={() => handleMouseEnter(item.name)}
                                  onMouseLeave={handleMouseLeave}
                                >
                                  <button
                                    className={`flex items-center justify-between w-full px-3 py-2.5 rounded-md ${
                                      isActive(item.path)
                                        ? "bg-red-900/20 text-white font-medium"
                                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                                    } transition-colors duration-200`}
                                    onClick={() => toggleDropdown(item.name)}
                                    aria-expanded={openDropdown === item.name}
                                    aria-haspopup="true"
                                  >
                                    {item.name}
                                    <motion.div
                                      animate={{ rotate: openDropdown === item.name ? 180 : 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <ChevronDown className="ml-1 h-4 w-4" />
                                    </motion.div>
                                  </button>
                                  <AnimatePresence>
                                    {openDropdown === item.name && (
                                      <motion.div
                                        className="absolute left-0 top-full mt-1 w-48 bg-black/95 backdrop-blur-md border border-gray-800/70 rounded-lg shadow-lg shadow-black/50 z-50"
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        variants={dropdownVariants}
                                      >
                                        <div className="py-2 px-1">
                                          {item.submenu.map((subItem, subIndex) => (
                                            <Link
                                              key={subIndex}
                                              href={subItem.path}
                                              className={`block px-3 py-2.5 rounded-md text-sm ${
                                                isActive(subItem.path)
                                                  ? "bg-red-900/20 text-white font-medium"
                                                  : "text-gray-300 hover:bg-white/5 hover:text-white"
                                              } transition-colors duration-200 mx-1`}
                                              onClick={() => {
                                                setOpenDropdown(null)
                                                setIsDropdownOpen(false)
                                              }}
                                            >
                                              <motion.span
                                                whileHover={{ x: 3 }}
                                                transition={{ duration: 0.2 }}
                                                className="inline-block w-full"
                                              >
                                                {subItem.name}
                                              </motion.span>
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
                                  className={`block px-3 py-2.5 rounded-md mx-1 ${
                                    isActive(item.path)
                                      ? "bg-red-900/20 text-white font-medium"
                                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                                  } transition-colors duration-200`}
                                  onClick={() => setIsDropdownOpen(false)}
                                >
                                  <motion.span
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                    className="inline-block w-full"
                                  >
                                    {item.name}
                                  </motion.span>
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="dropdown-container relative"
                  onMouseEnter={() => item.submenu && handleMouseEnter(item.name + "-nav")}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.submenu ? (
                    <>
                      <button
                        className={`flex items-center px-3 py-2 rounded-md ${
                          isActive(item.path)
                            ? "text-white font-medium"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        } transition-colors duration-200`}
                        onClick={() => toggleDropdown(item.name + "-nav")}
                        aria-expanded={openDropdown === item.name + "-nav"}
                        aria-haspopup="true"
                      >
                        {item.name}
                        <motion.div
                          animate={{ rotate: openDropdown === item.name + "-nav" ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-1"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.name + "-nav" && (
                          <motion.div
                            className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-48 bg-black/95 backdrop-blur-md border border-gray-800/70 rounded-lg shadow-lg shadow-black/50 z-50"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                          >
                            <div className="py-2 px-1">
                              {item.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.path}
                                  className={`block px-3 py-2.5 rounded-md text-sm ${
                                    isActive(subItem.path)
                                      ? "bg-red-900/20 text-white font-medium"
                                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                                  } transition-colors duration-200 mx-1`}
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  <motion.span
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                    className="inline-block w-full"
                                  >
                                    {subItem.name}
                                  </motion.span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.path}
                      className={`px-3 py-2 rounded-md ${
                        isActive(item.path)
                          ? "text-white font-medium relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-red-500/50 after:rounded-full"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                      } transition-colors duration-200`}
                    >
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
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-md blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                <button
                  onClick={() => {
                    const plansSection = document.getElementById("subscription-plans")
                    if (plansSection) {
                      plansSection.scrollIntoView({ behavior: "smooth" })
                    } else {
                      window.location.href = "/#subscription-plans"
                    }
                  }}
                  className="relative flex items-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-4 py-2 rounded-md text-white font-medium transition-colors duration-300 shadow-lg shadow-red-900/20 hover:shadow-red-900/40"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  <span className="relative">
                    <span className="relative z-10">Purchase Now</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white/30 rounded-full"></span>
                  </span>
                </button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden text-white ml-4 p-2 rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={itemVariants}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
            className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-md pt-16 overflow-auto"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            style={{ touchAction: "pan-y" }}
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="overflow-hidden rounded-lg"
                  >
                    {item.submenu ? (
                      <div className="relative bg-gray-900/30 rounded-lg overflow-hidden">
                        <button
                          className={`flex items-center justify-between w-full px-4 py-3 ${
                            isActive(item.path)
                              ? "text-white font-medium bg-red-900/20"
                              : "text-gray-200 hover:text-white"
                          } transition-colors`}
                          onClick={() => toggleDropdown(item.name + "-mobile")}
                          aria-expanded={openDropdown === item.name + "-mobile"}
                          aria-haspopup="true"
                        >
                          <span className="text-lg">{item.name}</span>
                          <motion.div
                            animate={{ rotate: openDropdown === item.name + "-mobile" ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-5 w-5" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.name + "-mobile" && (
                            <motion.div
                              className="overflow-hidden bg-gray-900/30"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-2 py-2 space-y-1">
                                {item.submenu.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.path}
                                    className={`block px-4 py-3 rounded-md ${
                                      isActive(subItem.path)
                                        ? "bg-red-900/20 text-white font-medium"
                                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                                    } transition-colors`}
                                    onClick={() => {
                                      setOpenDropdown(null)
                                      setIsMenuOpen(false)
                                    }}
                                  >
                                    <motion.span
                                      whileHover={{ x: 3 }}
                                      transition={{ duration: 0.2 }}
                                      className="inline-block w-full"
                                    >
                                      {subItem.name}
                                    </motion.span>
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
                        className={`block px-4 py-3 rounded-lg ${
                          isActive(item.path)
                            ? "bg-red-900/20 text-white font-medium"
                            : "bg-gray-900/30 text-gray-200 hover:text-white"
                        } transition-colors`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <motion.span
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                          className="inline-block w-full text-lg"
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
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="mt-6 relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-md blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false)
                      const plansSection = document.getElementById("subscription-plans")
                      if (plansSection) {
                        plansSection.scrollIntoView({ behavior: "smooth" })
                      } else {
                        window.location.href = "/#subscription-plans"
                      }
                    }}
                    className="relative flex w-full items-center justify-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-4 py-4 rounded-md text-white font-medium transition-colors duration-300 shadow-lg shadow-red-900/20 hover:shadow-red-900/40"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Purchase Now
                  </button>
                </motion.div>

                <div className="pt-8 pb-4 text-center text-gray-500 text-sm">
                  <p>Join our Discord community</p>
                  <a
                    href="https://discord.gg/calamari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-[#5865F2] hover:underline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-1"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                    </svg>
                    discord.gg/calamari
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
