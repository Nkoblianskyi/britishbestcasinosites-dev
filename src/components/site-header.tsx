"use client"

import Link from "next/link"

export function BritishCrownLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx="26" cy="26" r="24.5" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="26" cy="26" r="21" fill="#0E1219" stroke="#C41E3A" strokeWidth="0.75" strokeOpacity="0.6" />

      {/* Crown base plate */}
      <rect x="13" y="30" width="26" height="4" rx="1" fill="#D4AF37" />

      {/* Crown prongs */}
      <path
        d="M13 30 L13 22 L19.5 26 L26 16 L32.5 26 L39 22 L39 30"
        fill="#D4AF37"
        strokeLinejoin="round"
      />

      {/* Crown jewels */}
      <circle cx="26" cy="15.5" r="2.2" fill="#C41E3A" />
      <circle cx="13.5" cy="22.5" r="1.4" fill="#D4AF37" opacity="0.85" />
      <circle cx="38.5" cy="22.5" r="1.4" fill="#D4AF37" opacity="0.85" />

      {/* Diamond suit in crown body */}
      <path
        d="M26 22.5 L28.2 25.5 L26 28.5 L23.8 25.5 Z"
        fill="#C41E3A"
        opacity="0.8"
      />

      {/* Bottom laurel hints */}
      <path d="M15 34.5 Q13 38 11 36 Q13.5 33.5 15 34.5Z" fill="#D4AF37" opacity="0.45" />
      <path d="M37 34.5 Q39 38 41 36 Q38.5 33.5 37 34.5Z" fill="#D4AF37" opacity="0.45" />
    </svg>
  )
}

// Backward-compat alias used by footer
export { BritishCrownLogo as EliteCrownLogo }
export { BritishCrownLogo as GoldCrownLogo }

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[hsl(220,20%,4%)]/96 backdrop-blur-md border-b border-[hsl(var(--border))]">
      {/* Crimson top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[hsl(var(--crimson))] to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="relative flex items-center justify-center h-[62px]">

          {/* Centered logo + brand name */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="British Best Casino Sites - Home"
          >
            <BritishCrownLogo className="w-10 h-10 shrink-0 transition-opacity duration-300 group-hover:opacity-80" />

            <div className="flex flex-col leading-none select-none">
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-black text-[hsl(var(--gold))] tracking-[0.04em] text-xl leading-none group-hover:text-[hsl(var(--gold-bright))] transition-colors duration-300">
                  British
                </span>
                <span className="font-serif font-bold text-[hsl(var(--foreground))] tracking-[0.02em] text-xl leading-none">
                  Best
                </span>
                <span className="font-serif font-bold text-[hsl(var(--text-secondary))] tracking-[0.02em] text-xl leading-none">
                  Casino
                </span>
                <span className="font-serif font-bold text-[hsl(var(--text-secondary))] tracking-[0.02em] text-xl leading-none">
                  Sites
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="block h-px flex-1 bg-[hsl(var(--crimson))]/50 group-hover:bg-[hsl(var(--crimson))] transition-colors duration-300" />
                <span className="font-sans text-[9px] font-semibold tracking-[0.22em] uppercase text-[hsl(var(--text-muted))] whitespace-nowrap">
                  britishbestcasinosites.com
                </span>
                <span className="block h-px flex-1 bg-[hsl(var(--crimson))]/50 group-hover:bg-[hsl(var(--crimson))] transition-colors duration-300" />
              </div>
            </div>
          </Link>

          {/* 18+ badge — pinned far right */}
          <div
            className="absolute right-0 flex items-center justify-center w-9 h-9 rounded-full border-2 border-[hsl(var(--crimson))] bg-[hsl(var(--crimson-subtle))]"
            title="18 and over only"
            aria-label="18 plus only"
          >
            <span className="font-sans font-black text-[11px] text-white leading-none tracking-tight">
              18+
            </span>
          </div>

        </div>
      </div>

      {/* Bottom gold accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[hsl(var(--gold))]/20 to-transparent" />
    </header>
  )
}
