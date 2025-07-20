import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import GradientText from "@/components/GradientText";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const assets = [
  {
    name: "Calamari Logo (PNG)",
    file: "/calamari_img.png",
  },
  {
    name: "Calamari Logo (SVG)",
    file: "/calamari.svg",
  },
];

export default function AssetsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1a1f2c] via-[#0a0f1a] to-[#0a0f1a] text-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 pt-32 pb-16">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <GradientText colors={["#ff0033", "#4b001f", "#ff0033"]} animationSpeed={5}>
              Downloadable Assets
            </GradientText>
          </h1>
          <p className="mb-10 text-slate-400 text-center text-lg">Here you can download our media assets for use in your projects.</p>
          <div className="space-y-6">
            {assets.map((asset) => (
              <Card key={asset.file} className="bg-[#181c27] border border-[#23263a] shadow-lg">
                <CardContent className="flex items-center justify-between py-6 px-4">
                  <span className="text-lg font-medium text-white">{asset.name}</span>
                  <a href={asset.file} download>
                    <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white">
                      Download
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center text-slate-400 text-base font-medium opacity-80">
            More Media Assets Coming Soon
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 