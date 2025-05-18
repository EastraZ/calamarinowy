"use client"

import type React from "react"
import "./globals.css"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Ensure SellAuth script is loaded
  useEffect(() => {
    // Check if script already exists
    if (!document.getElementById("sellauth-script")) {
      const script = document.createElement("script")
      script.id = "sellauth-script"
      script.src = "https://sellauth.com/assets/js/sellauth-embed-2.js"
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* SellAuth script is now loaded dynamically in the useEffect hook */}
        <script src="https://www.google.com/recaptcha/api.js?render=6LdtUw8qAAAAAOciQRvmRxTico0CL2IQmKUf8JyL"></script>
      </head>
      <body>
        <div id="page-transition"></div>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  )
}
