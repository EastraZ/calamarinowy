"use client"
import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence, easeInOut, easeIn, useMotionValue, useSpring, useMotionTemplate, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, Zap, Diamond, PackageCheck, Users, Shield, AlertTriangle } from "lucide-react"
import { BuySubscriptionModal } from "./buy-subscription-modal"
import TextPressure from "./TextPressure"

type ProductPlan = {
  icon: React.ElementType
  title: string
  description: string
  price: string
  period: string
  features: { icon: React.ElementType; text: string; subtext: string }[]
  mostPopular?: boolean
}

const fortnitePlans: ProductPlan[] = [
  {
    icon: Star,
    title: "Fortnite Daily",
    description: "For a single day.",
    price: "$5.00",
    period: "/ day",
    features: [
      { icon: PackageCheck, text: "AI-Powered Predictive Aimbot", subtext: "Unmatched accuracy" },
      { icon: Users, text: "Supreme Rage Features", subtext: "Silent Aim, Bullet TP, Car Fly & more" },
      { icon: Shield, text: "Top-of-the-line Bypass", subtext: "Maximum security, no stress" },
    ],
  },
  {
    icon: Star,
    title: "Fortnite Lite",
    description: "3 days of access.",
    price: "$12.00",
    period: "/ 3 days",
    features: [
      { icon: PackageCheck, text: "AI-Powered Predictive Aimbot", subtext: "Unmatched accuracy" },
      { icon: Users, text: "Supreme Rage Features", subtext: "Silent Aim, Bullet TP, Car Fly & more" },
      { icon: Shield, text: "Top-of-the-line Bypass", subtext: "Maximum security, no stress" },
    ],
  },
  {
    icon: Diamond,
    title: "Fortnite Pro",
    description: "1 week of access.",
    price: "$22.00",
    period: "/ week",
    features: [
      { icon: PackageCheck, text: "AI-Powered Predictive Aimbot", subtext: "Unmatched accuracy" },
      { icon: Users, text: "Supreme Rage Features", subtext: "Silent Aim, Bullet TP, Car Fly & more" },
      { icon: Shield, text: "Top-of-the-line Bypass", subtext: "Maximum security, no stress" },
    ],
    mostPopular: true,
  },
  {
    icon: Star,
    title: "Fortnite Elite",
    description: "1 month of access.",
    price: "$40.00",
    period: "/ month",
    features: [
      { icon: PackageCheck, text: "AI-Powered Predictive Aimbot", subtext: "Unmatched accuracy" },
      { icon: Users, text: "Supreme Rage Features", subtext: "Silent Aim, Bullet TP, Car Fly & more" },
      { icon: Shield, text: "Top-of-the-line Bypass", subtext: "Maximum security, no stress" },
    ],
  },
  {
    icon: Star,
    title: "Fortnite Lifetime",
    description: "Lifetime access.",
    price: "$350.00",
    period: "/ lifetime",
    features: [
      { icon: PackageCheck, text: "AI-Powered Predictive Aimbot", subtext: "Unmatched accuracy" },
      { icon: Users, text: "Supreme Rage Features", subtext: "Silent Aim, Bullet TP, Car Fly & more" },
      { icon: Shield, text: "Top-of-the-line Bypass", subtext: "Maximum security, no stress" },
    ],
  },
]

const rustPlans: ProductPlan[] = [
  {
    icon: Star,
    title: "Rust Daily",
    description: "For a single day.",
    price: "$7.00",
    period: "/ day",
    features: [
      { icon: PackageCheck, text: "Predictive Aimbot", subtext: "Absolute precision" },
      { icon: Users, text: "Powerful Features", subtext: "Silent aim, ESP/Glow, Anti-recoil" },
      { icon: Shield, text: "Full ANTI-CHEAT Bypass", subtext: "Top-tier security" },
    ],
  },
  {
    icon: Star,
    title: "Rust Scout",
    description: "3 days of access.",
    price: "$15.00",
    period: "/ 3 days",
    features: [
      { icon: PackageCheck, text: "Predictive Aimbot", subtext: "Absolute precision" },
      { icon: Users, text: "Powerful Features", subtext: "Silent aim, ESP/Glow, Anti-recoil" },
      { icon: Shield, text: "Full ANTI-CHEAT Bypass", subtext: "Top-tier security" },
    ],
  },
  {
    icon: Diamond,
    title: "Rust Raider",
    description: "1 week of access.",
    price: "$25.00",
    period: "/ week",
    features: [
      { icon: PackageCheck, text: "Predictive Aimbot", subtext: "Absolute precision" },
      { icon: Users, text: "Powerful Features", subtext: "Silent aim, ESP/Glow, Anti-recoil" },
      { icon: Shield, text: "Full ANTI-CHEAT Bypass", subtext: "Top-tier security" },
    ],
    mostPopular: true,
  },
  {
    icon: Star,
    title: "Rust Warlord",
    description: "1 month of access.",
    price: "$60.00",
    period: "/ month",
    features: [
      { icon: PackageCheck, text: "Predictive Aimbot", subtext: "Absolute precision" },
      { icon: Users, text: "Powerful Features", subtext: "Silent aim, ESP/Glow, Anti-recoil" },
      { icon: Shield, text: "Full ANTI-CHEAT Bypass", subtext: "Top-tier security" },
    ],
  },
  {
    icon: Star,
    title: "Rust Lifetime",
    description: "Lifetime access.",
    price: "$450.00",
    period: "/ lifetime",
    features: [
      { icon: PackageCheck, text: "Predictive Aimbot", subtext: "Absolute precision" },
      { icon: Users, text: "Powerful Features", subtext: "Silent aim, ESP/Glow, Anti-recoil" },
      { icon: Shield, text: "Full ANTI-CHEAT Bypass", subtext: "Top-tier security" },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easeInOut,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easeIn,
    },
  },
}

type ProductName = "fortnite" | "rust" | "apex"

// 3D TiltCard component for price boxes
function TiltCard({ children, plan, ...rest }: any) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  // Dynamic shadow based on tilt using useTransform
  const shadowX = useTransform(rotateY, (yVal) => -yVal * 1.5);
  const shadowY = useTransform(rotateX, (x) => x * 1.5);
  const blur = 32; // You can make this dynamic if you want
  const alpha = useTransform(rotateX, (x) => 0.18 + Math.abs(x) / 60);
  const shadow = useMotionTemplate`${shadowX}px ${shadowY}px ${blur}px 0px rgba(239,68,68,${alpha})`;
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateMax = 18; // degrees
    const newRotateY = ((x - centerX) / centerX) * rotateMax;
    const newRotateX = -((y - centerY) / centerY) * rotateMax;
    rotateX.set(newRotateX);
    rotateY.set(newRotateY);
  };
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };
  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-visible p-4 max-w-xs w-full rounded-xl flex flex-col group"
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 50%, 
            rgba(255, 255, 255, 0.08) 100%
          )
        `,
        backdropFilter: 'blur(20px)',
        border: plan.mostPopular 
          ? '1px solid rgba(239, 68, 68, 0.4)' 
          : '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: shadow,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function SubscriptionSection() {
  const [selectedProduct, setSelectedProduct] = useState<ProductName>("fortnite")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [initialTariff, setInitialTariff] = useState<string | null>(null)
  const [initialCheat, setInitialCheat] = useState<string | null>(null)

  const buttonBaseClass = "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 min-w-[160px] text-center relative overflow-hidden"
  const inactiveButtonClass = "bg-gradient-to-br from-[#181B22]/80 via-[#23262F]/70 to-[#181B22]/80 backdrop-blur-md border border-white/10 text-slate-300 hover:from-[#23262F]/90 hover:via-[#23262F]/80 hover:to-[#181B22]/90 hover:border-red-400/20 shadow-sm"
  const activeButtonClass = "bg-gradient-to-br from-red-600/90 via-red-500/80 to-red-700/90 backdrop-blur-sm border border-red-400/30 text-white hover:from-red-700/90 hover:via-red-600/80 hover:to-red-800/90 hover:border-red-300/40 shadow-lg shadow-red-900/25"

  let currentPlans: ProductPlan[] = []
  if (selectedProduct === "fortnite") {
    currentPlans = fortnitePlans
  } else if (selectedProduct === "rust") {
    currentPlans = rustPlans
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(8, 12, 22, 0.95) 0%, 
            rgba(12, 16, 28, 0.98) 25%, 
            rgba(8, 12, 22, 1) 50%, 
            rgba(10, 14, 25, 0.98) 75%, 
            rgba(8, 12, 22, 0.95) 100%
          )
        `
      }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <div className="w-full text-center mb-4">
            <div style={{ display: 'flex', justifyContent: 'center', maxWidth: 500, width: '100%', margin: '0 auto', minHeight: 48, marginBottom: 16 }}>
              <TextPressure
                text="Subscription"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#fff"
                strokeColor="#ff0000"
                minFontSize={20}
              />
            </div>
            <p className="text-slate-400 text-lg">Select the desired product and subscription period</p>
          </div>
          <motion.div
            variants={itemVariants}
            className="flex flex-row gap-x-4 mb-6"
          >
            <Button
              onClick={() => setSelectedProduct("fortnite")}
              className={`${buttonBaseClass} ${selectedProduct === "fortnite" ? activeButtonClass : inactiveButtonClass}`}
            >
              <span className="relative z-10">Calamari Fortnite</span>
            </Button>
            <Button
              onClick={() => setSelectedProduct("rust")}
              className={`${buttonBaseClass} ${selectedProduct === "rust" ? activeButtonClass : inactiveButtonClass}`}
            >
              <span className="relative z-10">Calamari Rust</span>
            </Button>
            <Button
              onClick={() => setSelectedProduct("apex")}
              className={`${buttonBaseClass} ${selectedProduct === "apex" ? activeButtonClass : inactiveButtonClass}`}
              title="Calamari Apex Legends - Currently Unavailable"
            >
              <span className="relative z-10">Calamari Apex Legends</span>
            </Button>
          </motion.div>
        </div>

        <div className="min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {selectedProduct === "apex" ? (
              <motion.div
                key="apex-unavailable"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center text-center py-10 text-slate-500 relative overflow-hidden rounded-xl w-full max-w-xl mx-auto"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(20, 24, 35, 0.8) 0%, 
                      rgba(25, 30, 42, 0.6) 50%, 
                      rgba(20, 24, 35, 0.8) 100%
                    )
                  `,
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(42, 42, 50, 0.5)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.03] to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-slate-600" />
                  <p className="text-base p-2 mb-2">Calamari Apex Legends is currently unavailable.</p>
                  <p className="text-base p-2">Please check back later or select another product.</p>
                </div>
              </motion.div>
            ) : (
              <div className="w-full flex justify-center">
                <motion.div
                  key={selectedProduct}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto"
                  style={{ marginTop: 24 }}
                >
                  {currentPlans.map((plan) => (
                    <TiltCard key={plan.title} plan={plan}>
                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none rounded-xl" />
                      {plan.mostPopular && (
                        <span 
                          className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-20"
                          style={{
                            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.9) 0%, rgba(220, 38, 38, 0.95) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)'
                          }}
                        >
                          Most Popular
                        </span>
                      )}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="flex items-center mb-4">
                          <plan.icon className="w-7 h-7 mr-3 text-red-500" />
                          <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
                        </div>
                        <p className="text-sm text-slate-400 mb-4 flex-grow">{plan.description}</p>
                        <div className="mb-6">
                          <span className="text-4xl font-bold text-white">{plan.price}</span>
                          <span className="text-slate-400">{plan.period}</span>
                        </div>
                        <ul className="space-y-4 mb-8 w-full">
                          {plan.features.map((feature) => (
                            <li key={feature.text} className="flex items-start">
                              <feature.icon className="w-5 h-5 mr-3 text-slate-500 flex-shrink-0 mt-0.5" />
                              <div className="text-left flex-1">
                                <span className="text-sm text-slate-300 leading-5 block">{feature.text}</span>
                                <p className="text-xs text-slate-500 leading-4 mt-1">{feature.subtext}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <Button 
                          className="w-full mt-auto h-10 rounded-md relative overflow-hidden transition-all duration-300"
                          style={{
                            background: 'linear-gradient(135deg, rgba(42, 42, 50, 0.8) 0%, rgba(56, 56, 66, 0.6) 100%)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'rgb(203, 213, 225)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(56, 56, 66, 0.9) 0%, rgba(70, 70, 80, 0.7) 100%)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(42, 42, 50, 0.8) 0%, rgba(56, 56, 66, 0.6) 100%)'
                          }}
                          onClick={() => {
                            setInitialTariff(
                              plan.period.includes('day') && plan.period.includes('3') ? '3d' :
                              plan.period.includes('day') && plan.period.includes('1') ? '1d' :
                              plan.period.includes('week') ? '7d' :
                              plan.period.includes('month') ? '30d' :
                              plan.period.includes('lifetime') ? 'lifetime' : '1d'
                            );
                            setInitialCheat(selectedProduct === 'rust' ? 'calamari-rust' : 'calamari-fortnite');
                            setIsModalOpen(true);
                          }}
                        >
                          <span className="relative z-10">View Product</span>
                        </Button>
                      </div>
                    </TiltCard>
                  ))}
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <BuySubscriptionModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} initialTariff={initialTariff} initialCheat={initialCheat} />
    </motion.section>
  )
}