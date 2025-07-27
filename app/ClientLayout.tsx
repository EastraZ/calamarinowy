"use client"

import type React from "react"
import "./globals.css"
import { AnimatePresence } from "framer-motion"
import { AuthProvider } from "@/lib/auth"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      </head>
      <body>
        <div id="page-transition"></div>
        <AuthProvider>
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </AuthProvider>
        {/* SellSN script removed */}
      </body>
    </html>
  )
}
