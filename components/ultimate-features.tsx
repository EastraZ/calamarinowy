"use client"

import { motion } from "framer-motion"
import {
  Shield,
  Zap,
  Eye,
  Target,
  Gamepad2,
  Lock,
  Rocket,
  Brain,
  Wifi,
  Cloud,
  Star,
  Trophy,
  CloudLightningIcon as Lightning,
  Fingerprint,
  Radar,
  Crosshair,
  Activity,
  Cpu,
  Headphones,
  Layers,
  Maximize2,
  Monitor,
  Smartphone,
  Joystick,
  Flame,
  Sparkles,
  Wand2,
  Siren,
  Scan,
  Microscope,
  Glasses,
} from "lucide-react"
import { useState } from "react"

const ultimateFeatures = [
  {
    icon: Target,
    title: "AI Aimbot Pro Max",
    description: "Next-gen precision targeting with quantum algorithms",
    details:
      "Revolutionary AI-powered aimbot with machine learning that adapts to your playstyle. Features bone selection, FOV customization, smoothness control, human-like movement patterns, and predictive targeting.",
    color: "from-red-500 to-pink-500",
    stats: "99.9% Accuracy",
    category: "Combat",
  },
  {
    icon: Eye,
    title: "Quantum ESP Vision",
    description: "See everything, everywhere, everytime",
    details:
      "Advanced ESP system with quantum rendering technology. Display player locations, health, weapons, distance, loot, and predict enemy movements with our AI prediction engine.",
    color: "from-blue-500 to-cyan-500",
    stats: "360° Vision",
    category: "Vision",
  },
  {
    icon: Shield,
    title: "Stealth Mode Ultra",
    description: "Invisible to all anti-cheat systems",
    details:
      "Military-grade stealth technology with real-time signature morphing, kernel-level protection, advanced obfuscation, and quantum encryption that makes detection impossible.",
    color: "from-green-500 to-emerald-500",
    stats: "100% Undetected",
    category: "Security",
  },
  {
    icon: Zap,
    title: "Performance Boost Engine",
    description: "Maximize your FPS and minimize lag",
    details:
      "Built-in performance optimization engine that boosts FPS by up to 60%, reduces input lag to 0.1ms, optimizes memory usage, and includes game-specific optimizations.",
    color: "from-yellow-500 to-orange-500",
    stats: "+60% FPS",
    category: "Performance",
  },
  {
    icon: Brain,
    title: "Neural Network AI",
    description: "AI that learns and evolves with you",
    details:
      "Advanced neural network that learns from your gameplay patterns to provide predictive assistance, smart target prioritization, adaptive behavior optimization, and personalized configs.",
    color: "from-purple-500 to-indigo-500",
    stats: "Smart AI",
    category: "Intelligence",
  },
  {
    icon: Rocket,
    title: "Instant Injection Pro",
    description: "Lightning-fast activation in under 1 second",
    details:
      "Revolutionary injection technology that activates in under 1 second with zero crashes, automatic game detection, seamless integration, and hot-swappable configs.",
    color: "from-teal-500 to-blue-500",
    stats: "<1s Launch",
    category: "Speed",
  },
  {
    icon: Lock,
    title: "Crypto Security Vault",
    description: "Blockchain-level protection and encryption",
    details:
      "Cutting-edge cryptographic protection using blockchain technology to secure your account, encrypt communications, protect against reverse engineering, and ensure data privacy.",
    color: "from-orange-500 to-red-500",
    stats: "256-bit Encryption",
    category: "Security",
  },
  {
    icon: Cloud,
    title: "Cloud Sync Pro",
    description: "Sync configs across all devices instantly",
    details:
      "Cloud-based configuration system that syncs your settings across all devices, includes pro player configs, automatic backup with version control, and team sharing.",
    color: "from-pink-500 to-purple-500",
    stats: "Cloud Sync",
    category: "Sync",
  },
  {
    icon: Gamepad2,
    title: "Multi-Platform Master",
    description: "Works on PC, mobile, and console",
    details:
      "Universal compatibility with PC, mobile, and console platforms. Supports 25+ games including Rust, Fortnite, Apex Legends, CSGO, Valorant, Call of Duty, and more.",
    color: "from-indigo-500 to-cyan-500",
    stats: "25+ Games",
    category: "Compatibility",
  },
  {
    icon: Radar,
    title: "360° Radar System",
    description: "Advanced minimap with enemy tracking",
    details:
      "Professional-grade radar system with 360° enemy detection, movement prediction, sound visualization, teammate tracking, and customizable overlay positions.",
    color: "from-green-400 to-blue-400",
    stats: "360° Radar",
    category: "Vision",
  },
  {
    icon: Crosshair,
    title: "Smart Crosshair Pro",
    description: "Dynamic crosshair that adapts to weapons",
    details:
      "Intelligent crosshair system that automatically adjusts based on weapon type, recoil patterns, movement speed, and shooting accuracy with custom color schemes.",
    color: "from-red-400 to-orange-400",
    stats: "Auto-Adapt",
    category: "Combat",
  },
  {
    icon: Activity,
    title: "Real-Time Analytics",
    description: "Live performance tracking and stats",
    details:
      "Comprehensive analytics dashboard with real-time performance metrics, accuracy tracking, kill/death ratios, improvement suggestions, and competitive rankings.",
    color: "from-purple-400 to-pink-400",
    stats: "Live Stats",
    category: "Analytics",
  },
  {
    icon: Wifi,
    title: "Network Optimizer",
    description: "Reduce ping and optimize connection",
    details:
      "Advanced network optimization that reduces ping by up to 50%, eliminates packet loss, prioritizes game traffic, and includes VPN integration for global servers.",
    color: "from-blue-400 to-teal-400",
    stats: "-50% Ping",
    category: "Network",
  },
  {
    icon: Fingerprint,
    title: "HWID Protection",
    description: "Hardware fingerprint spoofing",
    details:
      "Advanced hardware ID protection that spoofs your system fingerprint, prevents hardware bans, includes MAC address randomization, and registry cleaning.",
    color: "from-yellow-400 to-red-400",
    stats: "HWID Safe",
    category: "Security",
  },
  {
    icon: Lightning,
    title: "Instant Hotkeys",
    description: "Customizable hotkey system",
    details:
      "Professional hotkey system with instant response, macro support, combo keys, profile switching, and conflict detection for seamless gameplay control.",
    color: "from-cyan-400 to-purple-400",
    stats: "0ms Response",
    category: "Control",
  },
  {
    icon: Trophy,
    title: "Pro Player Configs",
    description: "Pre-made configs from esports pros",
    details:
      "Exclusive access to professional player configurations, tournament-tested settings, game-specific optimizations, and regular updates from top esports athletes.",
    color: "from-amber-400 to-yellow-400",
    stats: "Pro Configs",
    category: "Professional",
  },
  // NEW FEATURES
  {
    icon: Cpu,
    title: "Kernel-Level Integration",
    description: "Deepest possible system integration",
    details:
      "Military-grade kernel-level integration that bypasses all detection methods, provides direct hardware access, and enables features impossible with user-mode cheats.",
    color: "from-slate-400 to-zinc-400",
    stats: "Ring 0 Access",
    category: "Security",
  },
  {
    icon: Headphones,
    title: "Sound ESP System",
    description: "Visualize and enhance game audio",
    details:
      "Advanced audio visualization system that displays sound sources on screen, enhances footstep detection, provides directional indicators, and includes sound filtering.",
    color: "from-violet-400 to-fuchsia-400",
    stats: "Audio Vision",
    category: "Vision",
  },
  {
    icon: Layers,
    title: "Multi-Account Manager",
    description: "Manage multiple game accounts easily",
    details:
      "Comprehensive account management system with automatic login rotation, HWID spoofing per account, ban risk assessment, and secure credential storage.",
    color: "from-emerald-400 to-green-400",
    stats: "Account Safety",
    category: "Security",
  },
  {
    icon: Maximize2,
    title: "Recoil Control System",
    description: "Perfect weapon control in any game",
    details:
      "Advanced recoil compensation system with weapon pattern learning, adaptive control, customizable strength, and support for all weapons across multiple games.",
    color: "from-rose-400 to-red-400",
    stats: "Zero Recoil",
    category: "Combat",
  },
  {
    icon: Monitor,
    title: "Stream-Proof Overlay",
    description: "Invisible to OBS, Discord and screenshots",
    details:
      "Cutting-edge overlay technology that remains completely invisible to streaming software, screen sharing applications, and screenshot tools while remaining fully functional.",
    color: "from-sky-400 to-blue-400",
    stats: "100% Hidden",
    category: "Security",
  },
  {
    icon: Smartphone,
    title: "Mobile Companion App",
    description: "Control your cheats from your phone",
    details:
      "Feature-rich mobile application that allows remote control of all cheat features, provides status notifications, and includes a panic button for instant deactivation.",
    color: "from-lime-400 to-green-400",
    stats: "Remote Control",
    category: "Control",
  },
  {
    icon: Joystick,
    title: "Controller Aim Assist",
    description: "Enhanced aim assist for controller players",
    details:
      "Advanced aim assist system specifically designed for controller players with customizable strength, target acquisition speed, and stick acceleration optimization.",
    color: "from-amber-400 to-orange-400",
    stats: "Controller Pro",
    category: "Combat",
  },
  {
    icon: Flame,
    title: "Rage Mode",
    description: "Maximum power when you need it most",
    details:
      "Ultimate performance mode that temporarily disables all safety features for maximum effectiveness in critical situations with one-click activation and auto-timeout.",
    color: "from-red-500 to-orange-500",
    stats: "Maximum Power",
    category: "Combat",
  },
  {
    icon: Sparkles,
    title: "Visual Customizer",
    description: "Personalize every visual aspect",
    details:
      "Comprehensive visual customization system for all ESP elements, radar, crosshair, and UI components with color schemes, opacity settings, and animation options.",
    color: "from-fuchsia-400 to-pink-400",
    stats: "Custom Look",
    category: "Personalization",
  },
  {
    icon: Wand2,
    title: "Auto-Update System",
    description: "Always running the latest version",
    details:
      "Intelligent update system that automatically downloads and installs updates in the background, with version rollback capability and update scheduling options.",
    color: "from-blue-400 to-indigo-400",
    stats: "Always Updated",
    category: "Maintenance",
  },
  {
    icon: Siren,
    title: "Anti-Ban Protection",
    description: "Multi-layered ban prevention",
    details:
      "Comprehensive ban prevention system with behavior monitoring, usage limits, suspicious activity detection, and automatic safety measures to prevent detection.",
    color: "from-red-400 to-pink-400",
    stats: "Ban Prevention",
    category: "Security",
  },
  {
    icon: Scan,
    title: "Item ESP & Loot Radar",
    description: "Never miss valuable items again",
    details:
      "Advanced item detection system that highlights valuable loot, rare items, and resources with customizable filters, distance indicators, and value assessment.",
    color: "from-yellow-400 to-amber-400",
    stats: "Loot Finder",
    category: "Vision",
  },
  {
    icon: Microscope,
    title: "Exploit Scanner",
    description: "Automatically find game vulnerabilities",
    details:
      "Cutting-edge vulnerability scanner that automatically detects and exploits game weaknesses, server vulnerabilities, and unpatched exploits for maximum advantage.",
    color: "from-emerald-400 to-teal-400",
    stats: "Auto-Exploit",
    category: "Intelligence",
  },
  {
    icon: Glasses,
    title: "Spectator Detection",
    description: "Know when you're being watched",
    details:
      "Advanced detection system that alerts you when other players are spectating you, allowing you to adjust your gameplay and avoid suspicious behavior.",
    color: "from-violet-400 to-purple-400",
    stats: "Always Aware",
    category: "Intelligence",
  },
]

const categories = [
  "All",
  "Combat",
  "Vision",
  "Security",
  "Performance",
  "Intelligence",
  "Professional",
  "Control",
  "Network",
  "Analytics",
  "Personalization",
  "Maintenance",
]

export default function UltimateFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredFeatures =
    activeCategory === "All"
      ? ultimateFeatures
      : ultimateFeatures.filter((feature) => feature.category === activeCategory)

  return (
    <section className="py-32 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-white/10 rounded-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-8 py-4 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="h-6 w-6 text-purple-400 mr-3" />
            <span className="text-lg font-medium text-purple-300">ULTIMATE Gaming Enhancement Suite</span>
          </motion.div>

          <h2 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-8">
            ULTIMATE Features
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Experience the most comprehensive gaming enhancement platform ever created. Each feature is powered by
            cutting-edge AI, tested by professional esports players, and trusted by millions worldwide.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
              className="relative group cursor-pointer"
            >
              <div className="bg-black border border-white/10 rounded-3xl p-6 h-full transition-all duration-500 hover:bg-black hover:border-white/20 hover:scale-105 hover:rotate-1">
                {/* Category badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white text-xs font-bold`}
                >
                  {feature.category}
                </div>

                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={hoveredIndex === index ? { opacity: [0.1, 0.2, 0.1] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Icon with enhanced animation */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-full h-full text-white" />

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    animate={hoveredIndex === index ? { x: "200%" } : {}}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                      {feature.title}
                    </h3>
                  </div>

                  <motion.div
                    className={`px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-white text-xs font-bold mb-3 inline-block`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {feature.stats}
                  </motion.div>

                  <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Expandable details */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: selectedFeature === index ? "auto" : 0,
                      opacity: selectedFeature === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-xs text-gray-400 leading-relaxed">{feature.details}</p>
                    </div>
                  </motion.div>

                  {/* Click indicator */}
                  <motion.div
                    className="mt-4 text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={hoveredIndex === index ? { y: [0, -2, 0] } : {}}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Click to learn more
                  </motion.div>
                </div>

                {/* Floating particles on hover */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          filter: "blur(0px)", // No blur
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          y: [0, -40],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Enhanced glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none blur-xl`}
                  animate={hoveredIndex === index ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced stats section */}
        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: "100M+", label: "Lines of Code", color: "from-blue-500 to-cyan-500" },
            { number: "99.99%", label: "Uptime Record", color: "from-green-500 to-emerald-500" },
            { number: "24/7", label: "Expert Support", color: "from-purple-500 to-pink-500" },
            { number: "0.1s", label: "Avg Response", color: "from-orange-500 to-red-500" },
            { number: "1M+", label: "Active Users", color: "from-yellow-500 to-orange-500" },
            { number: "30+", label: "Supported Games", color: "from-teal-500 to-blue-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-black border border-white/10 rounded-2xl hover:border-white/20 transition-colors"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
