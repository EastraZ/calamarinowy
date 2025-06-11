import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Shield, Users, Clock, Award, Lock } from "lucide-react"
import Navbar from "@/components/navbar"

export default function AboutPage() {
  const milestones = [
    {
      date: "January 2024",
      title: "Calamari.lol Launch",
      description: "Official launch of Calamari.lol with our first product for Rust.",
    },
    {
      date: "February 2024",
      title: "Expanded Game Support",
      description: "Added support for Fortnite and Apex Legends.",
    },
    {
      date: "March 2024",
      title: "5,000+ Customers",
      description: "Reached our first major milestone of 5,000 satisfied customers.",
    },
    {
      date: "April 2024",
      title: "Advanced Features",
      description: "Introduced advanced ESP features and improved aimbot technology.",
    },
    {
      date: "May 2024",
      title: "100% Undetected Record",
      description: "Maintained our perfect record of being undetected across all supported games.",
    },
  ]

  const values = [
    {
      icon: <Shield className="h-6 w-6 text-red-500" />,
      title: "Security",
      description: "We prioritize your account security with advanced anti-detection technology.",
    },
    {
      icon: <Users className="h-6 w-6 text-red-500" />,
      title: "Customer Satisfaction",
      description: "Our top priority is ensuring our customers are completely satisfied with our products.",
    },
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      title: "Reliability",
      description: "We provide consistent, reliable performance with minimal downtime.",
    },
    {
      icon: <Award className="h-6 w-6 text-red-500" />,
      title: "Quality",
      description: "We never compromise on the quality of our products and services.",
    },
    {
      icon: <Lock className="h-6 w-6 text-red-500" />,
      title: "Privacy",
      description: "Your privacy is paramount - we never collect or share your personal data.",
    },
  ]

  const faqs = [
    {
      question: "What makes Calamari.lol different from other similar services?",
      answer:
        "Calamari.lol stands out due to our perfect undetected record since our launch in early 2024, our commitment to customer satisfaction with 24/7 support, and our continuous product updates to ensure compatibility with the latest game versions. We also offer a wider range of features and customization options compared to our competitors.",
    },
    {
      question: "How often do you update your products?",
      answer:
        "We update our products regularly, typically within 24 hours of any game update. This ensures our tools remain compatible and undetected. Major feature updates are released monthly, bringing new capabilities and improvements based on customer feedback.",
    },
    {
      question: "Is it safe to use Calamari.lol products?",
      answer:
        "Yes, Calamari.lol products are designed with security as a top priority. We've maintained a 100% undetected record since our launch in early 2024. Our advanced anti-detection technology and regular updates ensure your gaming accounts remain secure while using our products.",
    },
    {
      question: "What happens if I encounter an issue with a product?",
      answer:
        "Our dedicated support team is available 24/7 through our Discord server. If you encounter any issues, simply reach out to us, and we'll assist you promptly. We're committed to resolving any problems quickly to ensure your satisfaction.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer refunds within 24 hours of purchase if the product doesn't work as advertised. However, refunds are not available if the product has been used extensively or if the issue is due to improper installation or system incompatibility.",
    },
    {
      question: "How do I install and set up Calamari.lol products?",
      answer:
        "After purchase, you'll receive detailed installation instructions via email. Our products are designed to be user-friendly with a simple installation process. If you need assistance, our support team is always available to guide you through the setup process.",
    },
  ]

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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl">About Calamari.lol</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Undetected since our launch in early 2024, Calamari.lol is dedicated to providing premium game enhancement
            tools with customer satisfaction as our top priority.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Calamari.lol was founded in early 2024 by a team of passionate gamers and software developers who saw a
                need for reliable, undetected game enhancement tools that prioritize user experience and security.
              </p>
              <p>
                Since our launch, we've maintained a perfect record of being undetected across all supported games. Our
                commitment to quality and customer satisfaction has allowed us to grow rapidly, serving thousands of
                satisfied customers worldwide.
              </p>
              <p>
                We continuously innovate and improve our products based on customer feedback and the latest game
                updates. Our team works around the clock to ensure our tools remain compatible and undetected, providing
                you with the best gaming experience possible.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Calamari-diagonal-0MIPrqm68v07REXLgaOx76jFso80QO.png"
                  alt="Calamari.lol Logo"
                  width={200}
                  height={200}
                  className="p-8"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-500 transition-colors"
              >
                <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} relative`}
                >
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 z-10"></div>
                  <div className="w-1/2 bg-gray-900 border border-gray-800 rounded-lg p-6">
                    <div className="text-red-500 font-medium mb-2">{milestone.date}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm px-8 py-10 rounded-lg border border-gray-800">
              <p className="text-4xl font-bold text-red-500">5,000+</p>
              <p className="text-lg text-gray-400 mt-2">Happy Customers</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm px-8 py-10 rounded-lg border border-gray-800">
              <p className="text-4xl font-bold text-red-500">100%</p>
              <p className="text-lg text-gray-400 mt-2">Undetected Rate</p>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm px-8 py-10 rounded-lg border border-gray-800">
              <p className="text-4xl font-bold text-red-500">24/7</p>
              <p className="text-lg text-gray-400 mt-2">Customer Support</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Elevate Your Gaming Experience?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Calamari.lol for their game enhancement needs.
          </p>
          <Link
            href="/#subscription-plans"
            className="fancy-button inline-flex items-center gap-2 rounded-full border border-red-500 bg-red-600 px-6 py-3 font-medium transition-all duration-300 text-white relative overflow-hidden shadow-lg hover:shadow-red-500/50"
          >
            <span className="relative z-10">Get Started Today</span>
            <ArrowLeft className="h-4 w-4 relative z-10 rotate-180" />
            <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
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
