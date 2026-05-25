"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted || !isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="relative w-full max-w-md bg-card animate-scale-in shadow-2xl rounded-2xl overflow-hidden">
        <div className="h-px bg-accent" />

        {/* Header */}
        <div className="bg-primary px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 flex items-center justify-center border border-accent/50 bg-accent/10">
              <Info className="w-4 h-4 text-accent" aria-hidden="true" />
            </div>
            <h2 className="font-serif font-bold text-lg text-primary-foreground">Advertiser Disclosure</h2>
          </div>
          <button
            onClick={onClose}
            className="text-primary-foreground/50 hover:text-accent transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-4">
          <p className="text-sm font-serif font-semibold text-foreground leading-snug">
            BritishBestCasinoSites.com is an independent, completely free comparison guide built to help British players shortlist trustworthy UKGC-licensed online casinos in a matter of minutes.
          </p>
          <div className="space-y-3 border-t border-border pt-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              When you open an account with one of the brands featured on BritishBestCasinoSites.com, we may earn an affiliate fee from that operator. This commercial model funds our editorial team and unlocks exclusive welcome offers, but it has no bearing on how we rank, score or review any casino.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We only list casinos that operate under a current UK Gambling Commission licence, so every recommendation on BritishBestCasinoSites.com complies with British player-protection, KYC and fair-gaming standards.
            </p>
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              Promotions, wagering requirements and game catalogues can change at short notice - always double-check the live terms on the operator's own website before you opt in. Play within your limits and seek free help at BeGambleAware.org if gambling stops being enjoyable.
            </p>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-sans font-semibold tracking-wide border border-primary-foreground/20 hover:bg-primary/90 transition-colors duration-200"
            >
              Understood
            </button>
          </div>
        </div>

        <div className="h-px bg-accent/30" />
      </div>
    </div>
  )
}
