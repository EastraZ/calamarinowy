import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Calamari | Premium Game Enhancement Tools",
  description:
    "Calamari offers undetected premium game enhancement tools for Rust, Fortnite, Apex Legends and more. Gain a massive edge over your opponents and become unbeatable in the game!",
  keywords: [
    "calamari",
    "game enhancement",
    "rust cheats",
    "fortnite cheats",
    "apex legends cheats",
    "undetected cheats",
    "aimbot",
    "esp",
    "wallhack",
  ],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientLayout>
      <div className="overflow-x-hidden">{children}</div>
    </ClientLayout>
  )
}


import './globals.css'