"use client";

import { motion } from "framer-motion";
import Hero from "@/components/hero";
import MatrixRain from "@/components/matrix-rain";
import Navbar from "@/components/navbar";
import ProductShowcase from "@/components/product-showcase";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sellauth.com/assets/js/sellauth-embed-2.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Navbar />
      <motion.main className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a0a0a] to-[#0a0f1a] text-white overflow-hidden relative">
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <MatrixRain />
        </div>
        <Hero />
        <ProductShowcase />
        <Testimonials />
        <Footer />
      </motion.main>
    </>
  );
}