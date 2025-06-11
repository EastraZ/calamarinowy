"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Menu, X, ChevronDown, Settings, User, Shield, Zap, LogOut, LogIn } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useAuth } from "@/lib/auth"
import AuthModal from "@/components/auth-modal"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [logoDropdownOpen, setLogoDropdownOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [authModalTab, setAuthModalTab] = useState<"login" | "register">("login")
  const logoDropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { user, logout } = useAuth()

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

  // Handle click outside for logo dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (logoDropdownRef.current && !logoDropdownRef.current.contains(event.target as Node)) {
        setLogoDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "#",
      dropdown: true,
      items: [
        { name: "Rust Cheats", path: "/our-product?product=rust" },
        { name: "Fortnite Cheats", path: "/our-product?product=fortnite" },
        { name: "Apex Cheats", path: "/our-product?product=apex" },
        { name: "All Games", path: "/games-supported" },
        { name: "Features", path: "/features" },
        { name: "System Requirements", path: "/system-requirements" },
      ],
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Support",
      path: "#",
      dropdown: true,
      items: [
        { name: "Help Center", path: "/help-center" },
        { name: "Contact Support", path: "/contact-support" },
        { name: "Bug Reports", path: "/bug-reports" },
        { name: "Feature Requests", path: "/feature-requests" },
        { name: "Discord Community", path: "/discord-community" },
        { name: "FAQ", path: "/faq" },
      ],
    },
    {
      name: "Company",
      path: "#",
      dropdown: true,
      items: [
        { name: "About Us", path: "/about" },
        { name: "Our Team", path: "/our-team" },
        { name: "Careers", path: "/careers" },
        { name: "Press Kit", path: "/press-kit" },
        { name: "Blog", path: "/blog" },
        { name: "Status", path: "/status" },
      ],
    },
    {
      name: "Download",
      path: "/download",
    },
  ]

  const logoDropdownItems = user
    ? [
        { name: "Dashboard", path: "/dashboard", icon: User },
        { name: "Settings", path: "/settings", icon: Settings },
        { name: "Security", path: "/security", icon: Shield },
        { name: "Performance", path: "/performance", icon: Zap },
      ]
    : [
        {
          name: "Login",
          action: () => {
            setAuthModalTab("login")
            setAuthModalOpen(true)
          },
          icon: LogIn,
        },
        {
          name: "Register",
          action: () => {
            setAuthModalTab("register")
            setAuthModalOpen(true)
          },
          icon: User,
        },
      ]

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    if (path === "#") {
      return false
    }
    return pathname.startsWith(path.split("?")[0])
  }

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  const toggleLogoDropdown = () => {
    setLogoDropdownOpen(!logoDropdownOpen)
  }

  const handleLogout = () => {
    logout()
    setLogoDropdownOpen(false)
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[100]"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main Navigation */}
        <div
          className={`w-full ${
            scrolled
              ? "bg-black/95 shadow-lg backdrop-blur-md border-b border-red-500/20"
              : "bg-gradient-to-b from-black/90 to-black/80 backdrop-blur-sm border-b border-red-500/10"
          } transition-all duration-500`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Logo with Dropdown */}
              <div className="flex items-center">
                <Link href="/" className="group flex items-center">
                  <motion.div
                    className="relative w-10 h-10 mr-3 overflow-hidden rounded-full bg-gradient-to-br from-red-600/30 to-red-900/30 p-0.5 shadow-lg shadow-red-900/20 group-hover:shadow-red-900/40 transition-all duration-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calamari-diagonal-0MIPrqm68v07REXLgaOx76jFso80QO.png"
                      alt="Calamari Logo"
                      fill
                      className="object-contain p-1"
                    />
                  </motion.div>
                  <motion.span className="text-xl font-bold text-white" whileHover={{ scale: 1.02 }}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      Calamari.lol
                    </span>
                  </motion.span>
                </Link>

                {/* Logo Dropdown Button */}
                <div className="relative ml-3" ref={logoDropdownRef}>
                  <motion.button
                    onClick={toggleLogoDropdown}
                    className={`p-2 rounded-md transition-colors duration-200 flex items-center ${
                      logoDropdownOpen
                        ? "text-white bg-red-500/10 border border-red-500/30"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${logoDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </motion.button>

                  <AnimatePresence>
                    {logoDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-red-500/20 rounded-lg shadow-xl shadow-red-900/20 overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {user && (
                            <>
                              <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider border-b border-red-500/10">
                                Welcome, {user.username}
                              </div>
                              {logoDropdownItems.map((item, index) => {
                                const IconComponent = item.icon
                                return (
                                  <Link
                                    key={index}
                                    href={item.path!}
                                    className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-red-500/10 transition-colors duration-150"
                                    onClick={() => setLogoDropdownOpen(false)}
                                  >
                                    <IconComponent className="h-4 w-4 mr-3" />
                                    {item.name}
                                  </Link>
                                )
                              })}
                              <div className="border-t border-red-500/10 mt-1 pt-1">
                                <button
                                  onClick={() => {
                                    setLogoDropdownOpen(false)
                                    window.open("https://calamari.mysellauth.com/#products", "_blank")
                                  }}
                                  className="flex items-center w-full px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors duration-150"
                                >
                                  <ShoppingCart className="h-4 w-4 mr-3" />
                                  Purchase Now
                                </button>
                                <button
                                  onClick={handleLogout}
                                  className="flex items-center w-full px-4 py-3 text-gray-400 hover:text-white hover:bg-red-500/10 transition-colors duration-150"
                                >
                                  <LogOut className="h-4 w-4 mr-3" />
                                  Logout
                                </button>
                              </div>
                            </>
                          )}
                          {!user && (
                            <>
                              <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider border-b border-red-500/10">
                                Account
                              </div>
                              {logoDropdownItems.map((item, index) => {
                                const IconComponent = item.icon
                                return (
                                  <button
                                    key={index}
                                    onClick={() => {
                                      setLogoDropdownOpen(false)
                                      item.action?.()
                                    }}
                                    className="flex items-center w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-red-500/10 transition-colors duration-150"
                                  >
                                    <IconComponent className="h-4 w-4 mr-3" />
                                    {item.name}
                                  </button>
                                )
                              })}
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {menuItems.map((item, index) => (
                  <div key={index} className="relative">
                    {item.dropdown ? (
                      <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <button
                          className={`px-4 py-2 rounded-md transition-colors duration-200 flex items-center ${
                            activeDropdown === item.name
                              ? "text-white font-medium bg-red-500/10"
                              : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
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
                        className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                          isActive(item.path)
                            ? "text-white font-medium bg-red-500/10"
                            : "text-gray-300 hover:text-white hover:bg-white/5"
                        }`}
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
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-md blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                  <motion.button
                    onClick={() => {
                      window.open("https://calamari.mysellauth.com/#products", "_blank")
                    }}
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
                            <span className="text-lg">{item.name}</span>
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
                          className={`block px-4 py-3 rounded-lg transition-colors ${
                            isActive(item.path)
                              ? "bg-red-900/20 text-white font-medium border border-red-500/30"
                              : "bg-gray-900/30 text-gray-200 hover:text-white"
                          }`}
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
                    transition={{ delay: (menuItems.length + 1) * 0.1 }}
                    className="mt-6 relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-md blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                    <motion.button
                      onClick={() => {
                        setIsMenuOpen(false)
                        window.open("https://calamari.mysellauth.com/#products", "_blank")
                      }}
                      className="relative flex w-full items-center justify-center bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 px-4 py-4 rounded-md text-white font-medium transition-colors duration-300 shadow-lg shadow-red-900/20 hover:shadow-red-900/40"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      GET CALAMARI
                    </motion.button>
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

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} defaultTab={authModalTab} />
    </>
  )
}
