"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import React from "react"

interface BuySubscriptionModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  initialTariff?: string | null
  initialCheat?: string | null
}

type Selection = string | null

export function BuySubscriptionModal({ isOpen, onOpenChange, initialTariff, initialCheat }: BuySubscriptionModalProps) {
  const [selectedCheat, setSelectedCheat] = useState<Selection>(initialCheat || "calamari-fortnite")
  const [selectedType, setSelectedType] = useState<Selection>("external")
  const [selectedTariff, setSelectedTariff] = useState<Selection>(initialTariff || "1d")
  const [acceptedAgreement, setAcceptedAgreement] = useState(false)
  const [detectionStatus, setDetectionStatus] = useState<'fetching' | 'undetected'>("fetching")

  // Update selectedTariff if initialTariff changes (e.g., when opening modal for a different plan)
  useEffect(() => {
    if (initialTariff) setSelectedTariff(initialTariff)
  }, [initialTariff])

  // Listen for modal open and set selectedCheat from prop if present
  useEffect(() => {
    if (isOpen && initialCheat) {
      setSelectedCheat(initialCheat)
    }
  }, [isOpen, initialCheat])

  // Simulate fetching detection status
  useEffect(() => {
    setDetectionStatus('fetching');
    const timer = setTimeout(() => setDetectionStatus('undetected'), 2000);
    return () => clearTimeout(timer);
  }, [isOpen, selectedCheat]);

  const tariffs: Record<string, { price: number; period: string }> = selectedCheat === "calamari-rust"
    ? {
        "1d": { price: 7, period: "1 day" },
        "3d": { price: 15, period: "3 days" },
        "7d": { price: 25, period: "7 days" },
        "30d": { price: 60, period: "30 days" },
        "lifetime": { price: 450, period: "lifetime" },
      }
    : {
        "1d": { price: 5, period: "1 day" },
        "3d": { price: 12, period: "3 days" },
        "7d": { price: 22, period: "7 days" },
        "30d": { price: 40, period: "30 days" },
        "lifetime": { price: 350, period: "lifetime" },
      };

  const currentTariff = selectedTariff ? tariffs[selectedTariff] : { price: 0, period: "" }

  const buttonBaseClass = "flex-1 text-xs h-8 rounded-sm transition-colors"
  const inactiveButtonClass = "bg-[#14151a] text-slate-300"
  const activeButtonClass = "bg-red-600 text-white hover:bg-red-700"
  const disabledButtonClass = "bg-[#2A2A32] text-slate-500 cursor-not-allowed opacity-60"

  const rustVariantIds: Record<string, number> = {
    "1d": 460533,
    "3d": 460552,
    "7d": 460553,
    "30d": 460554,
    "lifetime": 460555,
  };

  const fortniteVariantIds: Record<string, number> = {
    "1d": 507905,
    "3d": 507906,
    "7d": 507907,
    "30d": 507908,
    "lifetime": 507909,
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#13151de6] border-[#2A2E3B] text-white sm:max-w-md p-0 backdrop-blur-md shadow-2xl">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-xl font-semibold">Buy subscription</DialogTitle>
        </DialogHeader>
        <div className="px-6 space-y-5 pb-6">
          <div>
            <Label className="text-xs text-slate-400 mb-1.5 block">Client</Label>
            <div className="flex flex-wrap gap-1.5 bg-transparent p-0.5 rounded-md">
              <Button
                onClick={() => setSelectedCheat("calamari-fortnite")}
                className={`${buttonBaseClass} min-w-[120px] text-[13px] px-2 py-1 ${selectedCheat === "calamari-fortnite" ? activeButtonClass : inactiveButtonClass}`}
              >
                Calamari Fortnite
              </Button>
              <Button
                onClick={() => setSelectedCheat("calamari-rust")}
                className={`${buttonBaseClass} min-w-[120px] text-[13px] px-2 py-1 ${selectedCheat === "calamari-rust" ? activeButtonClass : inactiveButtonClass}`}
              >
                Calamari Rust
              </Button>
              <Button disabled className={`${buttonBaseClass} ${disabledButtonClass} min-w-[170px] text-[13px] px-2 py-1`}>
                Apex Legends (Coming Soon)
              </Button>
            </div>
          </div>
          <div>
            <Label className="text-xs text-slate-400 mb-1.5 block">Plan</Label>
            <div className="flex flex-wrap gap-1.5 bg-transparent p-0.5 rounded-md">
              <Button
                onClick={() => setSelectedTariff("1d")}
                className={`${buttonBaseClass} min-w-[70px] text-[13px] px-2 py-1 ${selectedTariff === "1d" ? activeButtonClass : inactiveButtonClass}`}
              >
                1 day
              </Button>
              <Button
                onClick={() => setSelectedTariff("3d")}
                className={`${buttonBaseClass} min-w-[70px] text-[13px] px-2 py-1 ${selectedTariff === "3d" ? activeButtonClass : inactiveButtonClass}`}
              >
                3 days
              </Button>
              <Button
                onClick={() => setSelectedTariff("7d")}
                className={`${buttonBaseClass} min-w-[70px] text-[13px] px-2 py-1 ${selectedTariff === "7d" ? activeButtonClass : inactiveButtonClass}`}
              >
                7 days
              </Button>
              <Button
                onClick={() => setSelectedTariff("30d")}
                className={`${buttonBaseClass} min-w-[70px] text-[13px] px-2 py-1 ${selectedTariff === "30d" ? activeButtonClass : inactiveButtonClass}`}
              >
                30 days
              </Button>
              <Button
                onClick={() => setSelectedTariff("lifetime")}
                className={`${buttonBaseClass} min-w-[70px] text-[13px] px-2 py-1 ${selectedTariff === "lifetime" ? activeButtonClass : inactiveButtonClass}`}
              >
                Lifetime
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full mt-2 mb-2">
            <Label className="text-xs text-slate-400 mb-1.5 block">Detection status</Label>
            <div className="bg-[#1C1F2A] p-2 rounded-md inline-block min-w-[110px] text-center">
              {detectionStatus === 'fetching' ? (
                <span className="text-slate-400 font-semibold animate-pulse">Fetching...</span>
              ) : (
                <span className="text-green-500 font-semibold">Undetected</span>
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-0.5" style={{background: 'linear-gradient(90deg, #ff3b3b 0%, #b30000 100%)'}} />
        <div className="px-6 flex items-center space-x-2 pt-2 pb-2">
          <Checkbox
            id="agreement"
            checked={acceptedAgreement}
            onCheckedChange={(checked) => setAcceptedAgreement(checked as boolean)}
            className="border-slate-500 data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
          />
          <Label htmlFor="agreement" className="text-xs text-slate-400 flex-1">
            Accept the{" "}
            <a href="/faq" className="text-red-500 hover:underline" target="_blank" rel="noopener noreferrer">
              offer agreement
            </a>
          </Label>
        </div>
        <DialogFooter className="bg-[#1C1F2A] p-4 flex flex-row justify-between items-center rounded-b-lg">
          <div className="text-lg font-semibold">
            ${currentTariff.price.toFixed(2)} <span className="text-sm text-slate-400">/ {currentTariff.period}</span>
          </div>
          <Button
            type="button"
            className="bg-red-600 hover:bg-red-700 text-white text-sm px-6 py-2 h-auto"
            disabled={!acceptedAgreement}
            onClick={async () => {
              if (!acceptedAgreement) return;
              if (selectedCheat === 'calamari-fortnite') {
                const productId = 361401;
                const variantId = fortniteVariantIds[selectedTariff ?? "1d"];
                try {
                  const res = await fetch('/api/sellauth/checkout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ productId, variantId }),
                  });
                  const data = await res.json();
                  if (data.url) {
                    window.location.href = data.url;
                  } else {
                    alert('Failed to start checkout session.');
                  }
                } catch (err) {
                  alert('Error connecting to SellAuth.');
                }
              } else if (selectedCheat === 'calamari-rust') {
                const productId = 332080;
                const variantId = rustVariantIds[selectedTariff ?? "1d"];
                try {
                  const res = await fetch('/api/sellauth/checkout', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ productId, variantId }),
                  });
                  const data = await res.json();
                  if (data.url) {
                    window.location.href = data.url;
                  } else {
                    alert('Failed to start checkout session.');
                  }
                } catch (err) {
                  alert('Error connecting to SellAuth.');
                }
              }
            }}
          >
            Purchase
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}