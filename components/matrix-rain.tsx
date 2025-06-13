"use client"

import { useEffect, useRef } from "react"

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Array to track the y position of each column
    const drops: number[] = Array(columns).fill(1)

    // Characters to display
    const chars =
      "01アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"

    const draw = () => {
      // Semi-transparent black background to create fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Green text
      ctx.fillStyle = "#0f0"
      ctx.font = `${fontSize}px monospace`

      // For each column
      for (let i = 0; i < drops.length; i++) {
        // Get a random character
        const text = chars[Math.floor(Math.random() * chars.length)]

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Randomly reset some drops to the top
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Move the drop down
        drops[i]++
      }
    }

    // Animation loop
    const interval = setInterval(draw, 33)

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

export default MatrixRain
