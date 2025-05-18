"use client"

import Image from "next/image"
import Link from "next/link"
import { Shield, Check, ArrowLeft, Star, Award, Clock, Zap, Lock } from "lucide-react"
import Navbar from "@/components/navbar"

const products = [
  {
    id: "rust",
    name: "Rust",
    price: "Starts at $6.99",
    description: "Premium Rust cheats with undetected features",
    features: [
      "Aimbot with customizable FOV",
      "ESP for players and resources",
      "Radar hack",
      "No recoil system",
      "Auto-update protection",
    ],
    link: "https://calamari.sellsn.io/group/bdaf8b4e-38dd-48d3-999e-de03f5df3dc2?p=f67c6c86-b0b6-4a4e-852b-3f1ebbf51b05",
    popular: true,
  },
  {
    id: "fortnite",
    name: "Fortnite",
    price: "Starts at $6.99",
    description: "Dominate in Fortnite with our advanced tools",
    features: [
      "Silent aim assistance",
      "Player and item ESP",
      "Build assistance",
      "Character customization",
      "24/7 support",
    ],
    link: "https://calamari.sellsn.io/group/7cb5866a-02dd-446e-9513-7e33510fa0b9?p=7503b0f2-58a7-43c0-bcb4-b90ae086b42a",
    popular: false,
  },
  {
    id: "apex",
    name: "Apex",
    price: "Starts at $5.99",
    description: "Take your Apex gameplay to the next level",
    features: [
      "Advanced aimbot",
      "Wallhack with distance indicators",
      "Loot filter system",
      "Movement enhancement",
      "Regular updates",
    ],
    link: "https://calamari.sellsn.io/group/7cb5866a-02dd-446e-9513-7e33510fa0b9?p=7503b0f2-58a7-43c0-bcb4-b90ae086b42a",
    popular: false,
  },
  {
    id: "script",
    name: "Script",
    price: "Starts at $4.99",
    description: "Advanced recoil control scripts for Rust",
    features: [
      "No recoil for all weapons",
      "Customizable sensitivity",
      "Auto weapon detection",
      "Undetectable by EAC",
      "Regular updates",
    ],
    link: "https://calamari.sellsn.io/group/bdaf8b4e-38dd-48d3-999e-de03f5df3dc2?p=f67c6c86-b0b6-4a4e-852b-3f1ebbf51b05",
    popular: false,
  },
]

const benefits = [
  {
    icon: <Shield className="h-6 w-6 text-red-500" />,
    title: "Undetected Protection",
    description: "Our advanced anti-detection technology keeps you safe from bans with continuous updates.",
  },
  {
    icon: <Zap className="h-6 w-6 text-red-500" />,
    title: "Instant Delivery",
    description: "Receive your product immediately after purchase with our automated delivery system.",
  },
  {
    icon: <Award className="h-6 w-6 text-red-500" />,
    title: "Premium Quality",
    description: "Experience the highest quality game enhancement tools with regular updates and improvements.",
  },
  {
    icon: <Clock className="h-6 w-6 text-red-500" />,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to assist with any issues.",
  },
  {
    icon: <Lock className="h-6 w-6 text-red-500" />,
    title: "Secure Payment",
    description: "Your payment information is protected with industry-standard encryption and security measures.",
  },
]

const testimonials = [
  {
    name: "Alex M.",
    rating: 5,
    text: "Calamari's Rust cheat has completely transformed my gaming experience. The ESP features are incredibly accurate and the aimbot feels natural. Customer support is also top-notch!",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "I've tried many Fortnite cheats, but Calamari is by far the best. It's undetected, easy to use, and the build assistance feature gives me a huge advantage in build battles.",
  },
  {
    name: "Mike T.",
    rating: 5,
    text: "The Apex Legends cheat from Calamari is incredible. The wallhack and loot filter have helped me find the best gear quickly, and the aimbot is smooth and customizable.",
  },
]

export default function PurchasePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="w-full bg-red-600 py-3 text-center text-sm font-medium md:text-base">
        Join our Discord community at{" "}
        <Link href="https://discord.gg/calamari" className="underline font-bold">
          discord.gg/calamari
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section with SEO-rich content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl red-gradient-text">
            Premium Game Enhancement Tools
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            Choose from our selection of premium, undetected game enhancement tools for Rust, Fortnite, Apex Legends,
            and more. All products come with instant delivery, regular updates, and 24/7 support.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="bg-red-900/30 text-red-400 px-3 py-1 rounded-full text-sm">Undetected Rust Cheats</span>
            <span className="bg-red-900/30 text-red-400 px-3 py-1 rounded-full text-sm">Fortnite Aimbot</span>
            <span className="bg-red-900/30 text-red-400 px-3 py-1 rounded-full text-sm">Apex Legends ESP</span>
            <span className="bg-red-900/30 text-red-400 px-3 py-1 rounded-full text-sm">Game Enhancement Tools</span>
            <span className="bg-red-900/30 text-red-400 px-3 py-1 rounded-full text-sm">Calamari.lol</span>
          </div>
        </div>

        {/* Products Grid with Enhanced Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black border border-red-500/30 rounded-lg overflow-hidden shadow-lg shadow-red-500/10 hover:shadow-red-500/30 transition-all duration-500 transform hover:-translate-y-2 relative"
            >
              {product.popular && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                  POPULAR
                </div>
              )}
              <Link href={product.link} className="block h-full">
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calamari-diagonal-0MIPrqm68v07REXLgaOx76jFso80QO.png"
                        alt="Calamari Logo"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    </div>
                    <span className="bg-red-600 text-white px-2 py-1 rounded-full text-sm font-bold inline-block">
                      {product.price}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4">{product.description}</p>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className="w-full bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 py-2 px-4 rounded-md text-white font-medium transition-colors shiny-button"
                    onClick={() => (window.location.href = "/#subscription-plans")}
                  >
                    Get {product.name} Now
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Product Box Image */}
        <div className="max-w-5xl mx-auto mt-16 mb-16 bg-gradient-to-br from-gray-900 via-red-950/10 to-gray-900 border border-red-900/30 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold red-gradient-text">What You'll Receive</h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              Our products come in a sleek digital package with easy access and instant delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-red-500/20 rounded-lg blur-xl"></div>
                <Image
                  src="/images/calamari-box.png"
                  alt="Calamari Product Box"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-lg shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-600 rounded-full p-2 mr-4 mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Instant Digital Delivery</h3>
                  <p className="text-gray-400 mt-1">Receive your product immediately after purchase via email</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 rounded-full p-2 mr-4 mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Easy Installation</h3>
                  <p className="text-gray-400 mt-1">
                    Simple setup with step-by-step instructions for quick and easy installation
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 rounded-full p-2 mr-4 mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Regular Updates</h3>
                  <p className="text-gray-400 mt-1">
                    Continuous updates to ensure compatibility with the latest game versions
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 rounded-full p-2 mr-4 mt-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">24/7 Support</h3>
                  <p className="text-gray-400 mt-1">Access to our Discord community with dedicated support staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold red-gradient-text">Why Choose Calamari.lol</h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              Experience the difference with our premium game enhancement tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 via-red-950/10 to-gray-900 border border-red-900/30 rounded-lg p-6 hover:border-red-500 transition-colors"
              >
                <div className="bg-red-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold red-gradient-text">What Our Customers Say</h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 via-red-950/10 to-gray-900 border border-red-900/30 rounded-lg p-6 hover:border-red-500 transition-colors"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-red-400 font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold red-gradient-text">Frequently Asked Questions</h2>
            <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
              Find answers to common questions about our products and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900 via-red-950/10 to-gray-900 border border-red-900/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do I receive my purchase?</h3>
              <p className="text-gray-400">
                After completing your purchase, you will receive an email with download instructions and access
                credentials. If you don't see the email, please check your spam folder.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-red-950/10 to-gray-900 border border-red-900/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Are your products undetected?</h3>
              <p className="text-gray-400">
                Yes, all our products are designed to be undetected. We continuously update our software to stay ahead
                of anti-cheat systems and ensure your gaming experience remains secure.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-red-950/10 to-gray-900 border border-red-900/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do you offer refunds?</h3>
              <p className="text-gray-400">
                We offer refunds within 24 hours of purchase if the product doesn't work as advertised. Please contact
                our support team through Discord for assistance with refund requests.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-red-950/10 to-gray-900 border border-red-900/30 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How often are products updated?</h3>
              <p className="text-gray-400">
                We update our products regularly to ensure compatibility with the latest game versions. Updates are
                typically released within 24 hours of game patches.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-900/30 to-black border border-red-900/30 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Elevate Your Gaming Experience?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Calamari.lol for their game enhancement needs.
          </p>
          <div className="flex justify-center">
            <Link
              href="/#subscription-plans"
              className="fancy-button inline-flex items-center gap-2 rounded-full border border-red-500 bg-red-600 px-6 py-3 font-medium transition-all duration-300 text-white relative overflow-hidden shadow-lg hover:shadow-red-500/50"
            >
              <span className="relative z-10">Browse Products</span>
              <ArrowLeft className="h-4 w-4 relative z-10 rotate-180" />
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>

        {/* SEO Footer */}
        <div className="border-t border-red-900/30 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-red-400/60">
            <Link href="/rust-cheats" className="hover:text-red-300 transition-colors">
              Rust Cheats
            </Link>
            <Link href="/fortnite-cheats" className="hover:text-red-300 transition-colors">
              Fortnite Cheats
            </Link>
            <Link href="/apex-legends-cheats" className="hover:text-red-300 transition-colors">
              Apex Legends Cheats
            </Link>
            <Link href="/calamari-esp" className="hover:text-red-300 transition-colors">
              Calamari ESP
            </Link>
            <Link href="/calamari-aimbot" className="hover:text-red-300 transition-colors">
              Calamari Aimbot
            </Link>
            <Link href="/calamari-rust" className="hover:text-red-300 transition-colors">
              Calamari Rust
            </Link>
            <Link href="/calamari-fortnite" className="hover:text-red-300 transition-colors">
              Calamari Fortnite
            </Link>
            <Link href="/calamari-apex" className="hover:text-red-300 transition-colors">
              Calamari Apex
            </Link>
            <Link href="/undetected-cheats" className="hover:text-red-300 transition-colors">
              Undetected Cheats
            </Link>
            <Link href="/game-enhancement-tools" className="hover:text-red-300 transition-colors">
              Game Enhancement Tools
            </Link>
            <Link href="/rust-esp" className="hover:text-red-300 transition-colors">
              Rust ESP
            </Link>
            <Link href="/rust-aimbot" className="hover:text-red-300 transition-colors">
              Rust Aimbot
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black px-6 py-3 font-medium transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
