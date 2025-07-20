import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Calamari",
  description: "Gain a massive edge over your opponents with Calamari. Undetected Fortnite and Rust client, 24/7 support, and unbeatable features.",
  keywords: ["calamari", "fortnite cheat", "rust cheat", "undetected fortnite cheat", "undetected rust cheat"],
  openGraph: {
    title: "Calamari – shine brighter than the rest",
    description: "Gain a massive edge over your opponents with Calamari. Undetected Fortnite and Rust client, 24/7 support, and unbeatable features.",
    url: "https://calamari.lol",
    siteName: "Calamari",
    images: [
      {
        url: "", // add OG image URL here later yes ok
        width: 1200,
        height: 630,
        alt: "Calamari - shine brighter than the rest",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calamari",
    description: "Gain a massive edge over your opponents with Calamari. Undetected Fortnite and Rust client, 24/7 support, and unbeatable features.",
    images: [""], // twitter image url thing
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  )
}
