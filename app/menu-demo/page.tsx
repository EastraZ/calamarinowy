"use client";
import React, { useState, useRef } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import GradientText from "@/components/GradientText";
import { motion, useMotionValue, useSpring } from "framer-motion";

const menuImages = {
  fortnite: {
    label: "Fortnite Calamari Menu",
    src: "/menu-fortnite-placeholder.png", // Replace with actual image after upload
  },
  rust: {
    label: "Rust Calamari Menu",
    src: "/menu-rust-placeholder.png", // Replace with actual image after upload
  },
};

function TiltMenuImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateMax = 18;
    const newRotateY = ((x - centerX) / centerX) * rotateMax;
    const newRotateX = -((y - centerY) / centerY) * rotateMax;
    rotateX.set(newRotateX);
    rotateY.set(newRotateY);
  };
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };
  return (
    <motion.div
      ref={ref}
      className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[#23263a] bg-[#181c27]"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transition: "box-shadow 0.3s",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain select-none pointer-events-none"
        style={{ minHeight: 480, background: "#23263a" }}
        draggable={false}
      />
    </motion.div>
  );
}

export default function MenuDemoPage() {
  const [selected, setSelected] = useState<"fortnite" | "rust">("fortnite");
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a1f2c] via-[#0a0f1a] to-[#0a0f1a] text-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-16">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <GradientText colors={["#ff0033", "#4b001f", "#ff0033"]} animationSpeed={5}>
              Menu Demo
            </GradientText>
          </h1>
          <p className="mb-10 text-slate-400 text-center text-lg">Interact with a 3D-tilt preview of the Calamari menus. Upload your own images to replace the placeholders below.</p>
          <div className="flex justify-center gap-4 mb-8">
            <button
              className={`px-6 py-2 rounded-lg font-semibold text-lg transition-all duration-200 ${selected === "fortnite" ? "bg-red-600 text-white shadow-lg" : "bg-[#23263a] text-slate-300 hover:bg-red-700/30"}`}
              onClick={() => setSelected("fortnite")}
            >
              Fortnite Calamari
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-semibold text-lg transition-all duration-200 ${selected === "rust" ? "bg-red-600 text-white shadow-lg" : "bg-[#23263a] text-slate-300 hover:bg-red-700/30"}`}
              onClick={() => setSelected("rust")}
            >
              Rust Calamari
            </button>
          </div>
          <TiltMenuImage src={menuImages[selected].src} alt={menuImages[selected].label} />
          <div className="mt-8 text-center text-slate-400 text-base font-medium opacity-80">
            (Upload your menu images as <b>menu-fortnite-placeholder.png</b> and <b>menu-rust-placeholder.png</b> in the public folder to replace these placeholders.)
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 