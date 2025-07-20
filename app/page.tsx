"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { LoadingAnimation } from "@/components/loading-animation"
import { DistinctAdvantagesSection } from "@/components/distinct-advantages-section"
import { SubscriptionSection } from "@/components/subscription-section"
import { Footer } from "@/components/footer" // Import the new Footer
import { Mouse, ChevronRight, ChevronLeft, Gamepad2 } from "lucide-react"
import Link from "next/link"
import GradientText from "@/components/GradientText"
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion"
import React from "react"

function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
        } else {
          node.classList.remove("is-visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const menuImages = {
  fortnite: {
    label: "Fortnite Calamari Menu",
    src: "/menu-fortnite-placeholder.png", // Replace with actual image after upload
  },
  rust: {
    label: "Rust Calamari Menu",
    src: "/calamari rust menu new.png", // Updated to actual image
  },
};

function TiltMenuImage({ src, alt }: { src: string; alt: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  // Dynamic shadow/glow based on tilt
  const shadowX = useTransform(rotateY, (yVal) => -yVal * 2.5);
  const shadowY = useTransform(rotateX, (x) => x * 2.5);
  const blur = 80;
  const alpha = useTransform(rotateX, (x) => 0.35 + Math.abs(x) / 40);
  const shadow = useMotionTemplate`${shadowX}px ${shadowY}px ${blur}px 0px rgba(239,30,30,${alpha})`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateMax = 18; // degrees, match product card
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
      ref={ref}
      className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[#23263a] bg-[#181c27]"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transition: "box-shadow 0.3s",
        boxShadow: shadow,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain select-none pointer-events-none"
        style={{ minHeight: 480, background: "#23263a" }}
        draggable={false}
      />
    </motion.div>
  );
}

export default function HomePage() {
  // 0: loading, 1: fading out, 2: done
  const [loadingStep, setLoadingStep] = useState(0)

  // Subtle glassy glow effect that follows the cursor
  const glowRef = useRef<HTMLDivElement>(null)

  // Set leavesEnabled to false by default
  const [leavesEnabled, setLeavesEnabled] = useState(false)
  const [leavesKey, setLeavesKey] = useState(0)

  const [leavesPhase, setLeavesPhase] = useState<'falling' | 'gust' | 'waiting'>('falling')
  const gustTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const gustIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Video switching state
  const [gameplay, setGameplay] = useState<'rust' | 'fortnite'>('rust')

  const handleFadeOutStart = () => setLoadingStep(1)
  const handleLoadingFinished = () => setLoadingStep(2)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX - 110}px`;
        glowRef.current.style.top = `${e.clientY - 110}px`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout
    if (leavesPhase === 'falling') {
      timeout = setTimeout(() => setLeavesPhase('waiting'), 24000)
    } else if (leavesPhase === 'gust') {
      timeout = setTimeout(() => setLeavesPhase('waiting'), 1800)
    } else if (leavesPhase === 'waiting') {
      timeout = setTimeout(() => setLeavesPhase('falling'), 5000)
    }
    return () => clearTimeout(timeout)
  }, [leavesPhase])

  useEffect(() => {
    function triggerGust() {
      if (leavesPhase === 'falling') {
        setLeavesPhase('gust')
      }
    }
    function scheduleNextGust() {
      gustIntervalRef.current = setTimeout(() => {
        triggerGust()
        scheduleNextGust()
      }, 20000 + Math.random() * 20000)
    }
    scheduleNextGust()
    return () => {
      if (gustIntervalRef.current) clearTimeout(gustIntervalRef.current)
    }
  }, [leavesPhase])

  return (
    <>
      {/* Subtle glassy gradient glow that follows the cursor */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-50"
        style={{
          left: 0,
          top: 0,
          width: 220,
          height: 220,
          opacity: 0.18,
          // No transition for instant movement
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.18) 0%, rgba(239,68,68,0.10) 40%, rgba(255,255,255,0.0) 100%)',
          filter: 'blur(32px)',
          borderRadius: '50%',
          mixBlendMode: 'lighten',
        }}
      />
      {loadingStep < 2 && (
        <LoadingAnimation onFadeOutStart={handleFadeOutStart} onFinished={handleLoadingFinished} />
      )}
      <div
        className={`min-h-screen bg-gradient-to-br from-[#1a1f2c] via-[#0a0f1a] to-[#0a0f1a] text-white flex flex-col transition-opacity duration-1000 ${
          loadingStep === 0 ? "opacity-0" : "opacity-100"
        } ${loadingStep < 2 ? "hide-scrollbar" : ""}`}
        style={{ pointerEvents: loadingStep < 2 ? "none" : "auto" }}
      >
        {/* Pass toggle state and setter to Header */}
        <Header onLogoClick={() => {
          if (leavesEnabled) {
            setLeavesEnabled(false);
          } else {
            setLeavesKey(k => k + 1);
            setLeavesEnabled(true);
          }
        }} />
        <main
          id="hero-section"
          className="relative min-h-screen flex items-center justify-center px-1 md:px-4 pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
          style={{ backgroundColor: '#0a0a0a' }}
        >
          {/* Full background video, switchable */}
          <video
            key={gameplay}
            className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500"
            src={gameplay === 'rust' ? "https://pub-03b0c5713269458385023fa76a641471.r2.dev/cala%20rust%20shwc1.mp4" : "https://pub-03b0c5713269458385023fa76a641471.r2.dev/cala%20fn%20shwc.mp4"}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ filter: 'brightness(1.1)' }}
          />
          {/* Video switcher UI */}
          <div className="absolute bottom-8 right-8 z-30 flex items-center space-x-2 bg-black/40 rounded-full px-4 py-2 shadow-lg backdrop-blur-md">
            <button
              className="p-2 rounded-full transition hover:bg-white/10 focus:outline-none"
              onClick={() => setGameplay(gameplay === 'rust' ? 'fortnite' : 'rust')}
              aria-label="Previous Gameplay"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="flex items-center gap-2 text-sm font-semibold tracking-wide select-none">
              {gameplay === 'rust' ? (
                <span><span className="text-white">Rust </span><span className="text-red-500">Calamari</span></span>
              ) : (
                <span><span className="text-white">Fortnite </span><span className="text-red-500">Calamari</span></span>
              )}
            </span>
            <button
              className="p-2 rounded-full transition hover:bg-white/10 focus:outline-none"
              onClick={() => setGameplay(gameplay === 'rust' ? 'fortnite' : 'rust')}
              aria-label="Next Gameplay"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          {/* Left-to-right dark overlay for fade effect */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #0a0a0a 0%, #0a0a0a 30%, rgba(10,10,10,0.95) 45%, rgba(10,10,10,0.8) 60%, rgba(10,10,10,0.4) 75%, rgba(10,10,10,0.1) 90%, rgba(10,10,10,0.0) 100%)"
            }}
          />
          {/* Bottom-to-top dark overlay for bottom fade */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to top, #0a0f1a 0%, rgba(10,15,26,0.0) 40%)"
            }}
          />
          {/* Optional: keep the radial gradient for extra effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent opacity-50 z-20"></div>
          <div className="flex flex-col items-start justify-start relative z-30 w-full">
            <div className="space-y-6 text-left pl-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="relative inline-block align-middle">
                  <GradientText
                    colors={["#ff0033", "#4b001f", "#ff0033", "#4b001f", "#ff0033", "#4b001f", "#ff0033"]}
                    animationSpeed={5}
                  >
                    Calamari
                  </GradientText>
                </span> –
                <br />shine brighter
                <br />than the rest
              </h1>
              <p className="text-lg text-slate-300 max-w-md">
                Gain a massive edge over your opponents and become unbeatable in the game! Customer support 24/7, for any
                questions or issues in{" "}
                <Link href="https://discord.com/invite/calamari" className="text-red-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  Discord
                </Link>
                . Get support, enter giveaways, and be the first to know about news.
              </p>
              <p className="text-slate-400">Welcome to Calamari!</p>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-30">
            <Mouse className="w-10 h-10 animate-bounce-custom" />
            <span className="text-sm text-slate-400">Scroll</span>
          </div>
          {/* Ethereal Falling Leaves */}
          {leavesEnabled && (leavesPhase === 'falling' || leavesPhase === 'gust') && (
            <div key={leavesKey} className="pointer-events-none z-40 w-full h-full absolute inset-0">
              <svg className={`falling-leaf falling-leaf-1${leavesPhase === 'gust' ? ' gust-active' : ''}`} viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="leafGradient1" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#e6b800" />
                    <stop offset="0.5" stopColor="#ffb347" />
                    <stop offset="1" stopColor="#7c5320" />
                  </linearGradient>
                </defs>
                <path d="M16 2C17 7 25 10 25 18C25 26 17 29 16 29C15 29 7 26 7 18C7 10 15 7 16 2Z" fill="url(#leafGradient1)" stroke="#7c5320" strokeWidth="1.2"/>
                <path d="M16 29C16 20 16 10 16 2" stroke="#7c5320" strokeWidth="0.8"/>
              </svg>
              <svg className={`falling-leaf falling-leaf-2${leavesPhase === 'gust' ? ' gust-active' : ''}`} viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="leafGradient2" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#b8860b" />
                    <stop offset="0.5" stopColor="#ffb347" />
                    <stop offset="1" stopColor="#228B22" />
                  </linearGradient>
                </defs>
                <path d="M16 2C18 8 28 10 28 18C28 26 18 30 16 30C14 30 4 26 4 18C4 10 14 8 16 2Z" fill="url(#leafGradient2)" stroke="#7c5320" strokeWidth="1.2"/>
                <path d="M16 30C16 20 16 10 16 2" stroke="#7c5320" strokeWidth="0.8"/>
              </svg>
              <svg className={`falling-leaf falling-leaf-3${leavesPhase === 'gust' ? ' gust-active' : ''}`} viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="leafGradient3" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffb347" />
                    <stop offset="0.5" stopColor="#e6b800" />
                    <stop offset="1" stopColor="#228B22" />
                  </linearGradient>
                </defs>
                <path d="M16 2C17 7 25 10 25 18C25 26 17 29 16 29C15 29 7 26 7 18C7 10 15 7 16 2Z" fill="url(#leafGradient3)" stroke="#7c5320" strokeWidth="1.2"/>
                <path d="M16 29C16 20 16 10 16 2" stroke="#7c5320" strokeWidth="0.8"/>
              </svg>
              <svg className={`falling-leaf falling-leaf-4${leavesPhase === 'gust' ? ' gust-active' : ''}`} viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="leafGradient4" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#e6b800" />
                    <stop offset="0.5" stopColor="#228B22" />
                    <stop offset="1" stopColor="#b8860b" />
                  </linearGradient>
                </defs>
                <path d="M16 2C18 8 28 10 28 18C28 26 18 30 16 30C14 30 4 26 4 18C4 10 14 8 16 2Z" fill="url(#leafGradient4)" stroke="#7c5320" strokeWidth="1.2"/>
                <path d="M16 30C16 20 16 10 16 2" stroke="#7c5320" strokeWidth="0.8"/>
              </svg>
              <svg className={`falling-leaf falling-leaf-5${leavesPhase === 'gust' ? ' gust-active' : ''}`} viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="leafGradient5" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#228B22" />
                    <stop offset="0.5" stopColor="#e6b800" />
                    <stop offset="1" stopColor="#b8860b" />
                  </linearGradient>
                </defs>
                <path d="M16 2C17 7 25 10 25 18C25 26 17 29 16 29C15 29 7 26 7 18C7 10 15 7 16 2Z" fill="url(#leafGradient5)" stroke="#7c5320" strokeWidth="1.2"/>
                <path d="M16 29C16 20 16 10 16 2" stroke="#7c5320" strokeWidth="0.8"/>
              </svg>
            </div>
          )}
        </main>
        {/* Distinct Advantages Section Fade-in */}
        <div ref={useScrollFadeIn()} className="scroll-animate-fade-in-up">
          <DistinctAdvantagesSection />
          {/* Menu Demo Section */}
          <section className="py-16 md:py-24 text-white" style={{
            background: `linear-gradient(135deg, 
              rgba(8, 12, 22, 0.95) 0%, 
              rgba(12, 16, 28, 0.98) 25%, 
              rgba(8, 12, 22, 1) 50%, 
              rgba(10, 14, 25, 0.98) 75%, 
              rgba(8, 12, 22, 0.95) 100%
            )`
          }}>
            <div className="w-full max-w-3xl mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                <GradientText colors={["#ff0033", "#4b001f", "#ff0033"]} animationSpeed={5}>
                  Menu Demo
                </GradientText>
              </h2>
              <p className="mb-10 text-slate-400 text-center text-lg">Interact with a 3D-tilt preview of the Calamari menus.</p>
              <MenuDemoSwitcher />
            </div>
          </section>
        </div>
        {/* Subscription Section Fade-in */}
        <div ref={useScrollFadeIn()} className="scroll-animate-fade-in-up">
          <SubscriptionSection />
        </div>
        {/* Footer Fade-in */}
        <div ref={useScrollFadeIn()} className="scroll-animate-fade-in-up">
          <Footer /> {/* Use the new Footer component */}
        </div>
      </div>
    </>
  )
}

function MenuDemoSwitcher() {
  const [selected, setSelected] = React.useState<"fortnite" | "rust">("rust");
  
  // Updated button styles for rounded, side-by-side buttons
  const buttonBaseClass = "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 text-center relative overflow-hidden border border-white/10";
  const inactiveButtonClass = "bg-gradient-to-br from-[#181B22]/80 via-[#23262F]/70 to-[#181B22]/80 backdrop-blur-md text-slate-300 hover:from-[#23262F]/90 hover:via-[#23262F]/80 hover:to-[#181B22]/90 hover:border-red-400/20 shadow-sm";
  const activeButtonClass = "bg-gradient-to-br from-red-600/90 via-red-500/80 to-red-700/90 backdrop-blur-sm border-red-400/30 text-white hover:from-red-700/90 hover:via-red-600/80 hover:to-red-800/90 hover:border-red-300/40 shadow-lg shadow-red-900/25";
  
  return (
    <>
      <div className="text-center mb-8">
        <div className="inline-flex gap-2">
          <button
            className={`${buttonBaseClass} ${selected === "rust" ? activeButtonClass : inactiveButtonClass}`}
            onClick={() => setSelected("rust")}
          >
            Rust Calamari
          </button>
          <button
            className={`${buttonBaseClass} ${selected === "fortnite" ? activeButtonClass : inactiveButtonClass}`}
            onClick={() => setSelected("fortnite")}
          >
            Fortnite Calamari
          </button>
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <div className="w-[80%] h-[80%] rounded-2xl bg-red-500/30 blur-3xl opacity-70" />
        </div>
        <div className="relative z-10 w-full">
          {selected === "fortnite" ? (
            <div className="flex items-center justify-center min-h-[480px] h-[480px] w-full bg-[#23263a] rounded-2xl border border-[#23263a] p-6">
              <span className="text-center w-full text-base md:text-xl font-semibold text-slate-300 break-words">
                Calamari Fortnite<br className="hidden md:block" />Menu Preview Coming Soon
              </span>
            </div>
          ) : (
            <TiltMenuImage src={menuImages[selected].src} alt={menuImages[selected].label} />
          )}
        </div>
      </div>
    </>
  );
}