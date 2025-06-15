import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/lib/auth"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Calamari.lol - Advanced Gaming Enhancement Tools | Undetected Cheats for Rust, Fortnite & Apex",
  description:
    "Professional gaming enhancement software for Rust, Fortnite, and Apex Legends. Undetected, secure, and trusted by elite gamers worldwide. Features Magic Bullet, ESP, HWID Spoofer, and kernel-level protection.",
  keywords:
    "gaming cheats, rust cheats, fortnite cheats, apex legends cheats, undetected cheats, gaming enhancement, aimbot, esp, hwid spoofer",
  authors: [{ name: "Calamari.lol Team" }],
  creator: "Calamari.lol",
  publisher: "Calamari.lol",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://calamari.lol",
    title: "Calamari.lol - Advanced Gaming Enhancement Tools",
    description:
      "Professional gaming enhancement software for Rust, Fortnite, and Apex Legends. Undetected, secure, and trusted by elite gamers worldwide.",
    siteName: "Calamari.lol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calamari.lol - Advanced Gaming Enhancement Tools",
    description:
      "Professional gaming enhancement software for Rust, Fortnite, and Apex Legends. Undetected, secure, and trusted by elite gamers worldwide.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script src="https://sellauth.com/assets/js/sellauth-embed-2.js" strategy="beforeInteractive" />
        <Script
          src="https://www.google.com/recaptcha/api.js?render=6LdtUw8qAAAAAOciQRvmRxTico0CL2IQmKUf8JyL"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
