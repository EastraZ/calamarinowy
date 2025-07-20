"use client"

import { useState, useEffect } from "react"
import React from "react"

interface LoadingAnimationProps {
  onFinished: () => void
  onFadeOutStart?: () => void
}

// MagnetLines component
interface MagnetLinesProps {
  rows: number;
  columns: number;
  containerSize: string;
  lineColor: string;
  lineWidth: string;
  lineHeight: string;
  baseAngle: number;
  style?: React.CSSProperties;
}

function MagnetLines({
  rows,
  columns,
  containerSize,
  lineColor,
  lineWidth,
  lineHeight,
  baseAngle,
  style = {}
}: MagnetLinesProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef) {
        const rect = containerRef.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [containerRef]);

  const getLineAngle = (row: number, col: number) => {
    if (!containerRef) return baseAngle;
    
    const rect = containerRef.getBoundingClientRect();
    const cellWidth = rect.width / columns;
    const cellHeight = rect.height / rows;
    
    const lineCenterX = (col + 0.5) * cellWidth;
    const lineCenterY = (row + 0.5) * cellHeight;
    
    const deltaX = mousePos.x - lineCenterX;
    const deltaY = mousePos.y - lineCenterY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    const maxDistance = 150;
    const influence = Math.max(0, 1 - distance / maxDistance);
    
    if (influence > 0.1) {
      const targetAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      return baseAngle + (targetAngle - baseAngle) * influence;
    }
    
    return baseAngle;
  };

  return (
    <div
      ref={setContainerRef}
      style={{
        width: containerSize,
        height: containerSize,
        position: 'absolute',
        display: 'grid',
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '0',
        ...style
      }}
    >
      {Array.from({ length: rows * columns }).map((_, index) => {
        const row = Math.floor(index / columns);
        const col = index % columns;
        const angle = getLineAngle(row, col);
        
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%'
            }}
          >
            <div
              style={{
                width: lineWidth,
                height: lineHeight,
                backgroundColor: lineColor,
                transform: `rotate(${angle}deg)`,
                transition: 'transform 0.15s ease-out',
                transformOrigin: 'center'
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

// Inline BlurText component for loading screen use
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}
function BlurText({ text, delay = 150, animateBy = "words", direction = "top", className = "", style = {} }: BlurTextProps) {
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])
  const words = text.split(" ")
  return (
    <div className={`inline-flex ${className}`} style={style}>
      {words.map((word: string, i: number) => (
        <span
          key={i}
          style={{
            transition: 'opacity 0.7s cubic-bezier(.4,0,.2,1), filter 0.7s cubic-bezier(.4,0,.2,1)',
            transitionDelay: `${delay + i * 120}ms`,
            opacity: visible ? 1 : 0,
            filter: visible ? 'blur(0px)' : 'blur(8px)',
            display: 'inline-block',
            marginRight: i !== words.length - 1 ? '0.4em' : 0,
            transform: visible ? 'translateY(0)' : direction === 'top' ? 'translateY(-16px)' : 'translateY(16px)'
          }}
        >
          {word}
        </span>
      ))}
    </div>
  )
}

export function LoadingAnimation({ onFinished, onFadeOutStart }: LoadingAnimationProps) {
  const [step, setStep] = useState(0) // 0: initial, 1: logo fade-in, 2: wait, 3: logo fade-out
  
  // Random message selection - deferred until after hydration
  const messages = [
    "one of one.",
    "competition disappoints.",
    "built different.",
    "the leading standard."
  ]
  const [selectedMessage, setSelectedMessage] = useState(messages[0]) // Default to first message
  const [isHydrated, setIsHydrated] = useState(false)

  // Select random message after hydration
  useEffect(() => {
    setIsHydrated(true)
    setSelectedMessage(messages[Math.floor(Math.random() * messages.length)])
  }, [])

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    if (step === 0) {
      timers.push(setTimeout(() => setStep(1), 25)) // Start fade-in (was 50ms)
    } else if (step === 1) {
      timers.push(setTimeout(() => setStep(2), 375)) // Wait after fade-in (was 750ms)
    } else if (step === 2) {
      timers.push(setTimeout(() => {
        if (onFadeOutStart) onFadeOutStart();
        setStep(3)
      }, 1000)) // Start fade-out (was 2s)
    } else if (step === 3) {
      timers.push(setTimeout(onFinished, 250)) // Finish after fade-out (was 500ms)
    }
    return () => timers.forEach(clearTimeout)
  }, [step, onFinished, onFadeOutStart])

  const getOpacity = () => {
    if (step === 1) return "opacity-100"
    if (step === 3) return "opacity-0"
    return "opacity-0"
  }

  return (
    // This overlay must be the only thing rendered when loading. It is fixed, full-screen, and centered.
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#0a0a0a] z-[9999] transition-opacity duration-1000 ${
        step === 3 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Static noise overlay - always visible */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 animate-static-noise" 
        style={{ 
          opacity: 0.18,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }} 
      />
      
      {/* MagnetLines background */}
      <div className="absolute inset-0 z-5">
        <MagnetLines
          rows={22}
          columns={22}
          containerSize="100vh"
          lineColor="rgba(255, 255, 255, 0.12)"
          lineWidth="1px"
          lineHeight="12px"
          baseAngle={0}
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            height: '100vh'
          }}
        />
      </div>
      
      {/* Centered content container */}
      <div className="flex flex-col items-center z-20">
        <img 
          src="/calamari_img.png" 
          alt="Logo" 
          className="w-32 h-32 animate-pulse-logo" 
        />
        <div className="mt-6">
          <BlurText
            text={selectedMessage}
            delay={450}
            animateBy="words"
            direction="top"
            className="text-2xl text-white font-medium tracking-wide"
            style={{ fontFamily: '"Inter", "Segoe UI", "Helvetica Neue", sans-serif' }}
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes static-noise {
          0% { background-position: 0 0, 0 0, 0 0; }
          100% { background-position: 100px 100px, 200px 150px, 300px 200px; }
        }
        .animate-static-noise {
          background-image:
            repeating-linear-gradient(0deg, #fff1 1px, transparent 2px, transparent 4px),
            repeating-linear-gradient(90deg, #fff2 1px, transparent 2px, transparent 4px),
            repeating-linear-gradient(45deg, #fff1 1px, transparent 2px, transparent 4px);
          background-size: 120px 120px, 180px 180px, 240px 240px;
          animation: static-noise 0.18s linear infinite;
        }
        @keyframes pulse-logo {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-logo {
          animation: pulse-logo 1.2s infinite;
        }
      `}</style>
    </div>
  )
}