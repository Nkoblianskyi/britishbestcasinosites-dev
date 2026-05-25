import Link from "next/link"
import Image from "next/image"
import { BritishCrownLogo } from "@/components/site-header"

const quickLinks = [
  { label: "Home",                 href: "/"                   },
  { label: "About Us",             href: "/about-us"           },
  { label: "Privacy Policy",       href: "/privacy-policy"     },
  { label: "Cookie Policy",        href: "/cookie-policy"      },
  { label: "Terms and Conditions", href: "/terms"              },
  { label: "Responsible Gaming",   href: "/responsible-gaming" },
]

const partnerLogos = [
  { src: "/gamble-aware.png",             alt: "BeGambleAware",          href: "https://www.begambleaware.org/"         },
  { src: "/gamcare.png",                  alt: "GamCare",                href: "https://www.gamcare.org.uk/"            },
  { src: "/gordon.png",                   alt: "Gambling Therapy",       href: "https://www.gamblingtherapy.org/"       },
  { src: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission", href: "https://www.gamblingcommission.gov.uk/" },
  { src: "/gamstop.svg",                  alt: "GamStop",                href: "https://www.gamstop.co.uk/"             },
]

export function SiteFooter() {
  return (
    <footer className="bg-[hsl(220,20%,4%)] border-t border-[hsl(var(--border))]">
      {/* Top accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--crimson))] to-transparent" />
      <div className="h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold))]/18 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 pt-12 pb-6">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 border-b border-[hsl(var(--border))]">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="flex items-center gap-3 group w-fit"
              aria-label="British Best Casino Sites home"
            >
              <BritishCrownLogo className="w-10 h-10 shrink-0 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="flex flex-col leading-none select-none">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif font-black tracking-[0.04em] text-lg leading-none text-[hsl(var(--gold))] group-hover:text-[hsl(var(--gold-bright))] transition-colors duration-300">
                    British
                  </span>
                  <span className="font-serif font-bold tracking-[0.02em] text-lg leading-none text-[hsl(var(--foreground))]">
                    Best
                  </span>
                </div>
                <span className="font-sans font-semibold text-[8px] tracking-[0.22em] uppercase text-[hsl(var(--text-secondary))] leading-none mt-1">
                  Casino&nbsp;Sites
                </span>
                <span className="mt-1.5 block h-px w-full bg-[hsl(var(--crimson))]/40 group-hover:bg-[hsl(var(--crimson))] transition-colors duration-300" />
              </div>
            </Link>

            <p className="text-xs text-[hsl(var(--text-muted))] leading-relaxed max-w-xs">
              The UK&apos;s most trusted independent casino comparison platform. All operators verified for UKGC licensing and reviewed by our specialist team.
            </p>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center text-white font-black text-xs shrink-0 rounded-full border-2 border-[hsl(var(--crimson))] bg-[hsl(var(--crimson-subtle))]">
                18+
              </div>
              <span className="text-xs text-[hsl(var(--text-muted))] leading-tight">
                Gambling is strictly for adults only. Never gamble more than you can afford.
              </span>
            </div>

            <div className="rounded-xl border-l-2 border-[hsl(var(--gold))]/60 pl-4 py-3 pr-4 bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))]">
              <p className="text-[11px] text-[hsl(var(--text-secondary))] leading-relaxed mb-1">
                Free support:{" "}
                <strong className="text-[hsl(var(--foreground))] text-sm">0808 8020 133</strong>
                <span className="text-[hsl(var(--text-muted))]"> (24/7)</span>
              </p>
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-[hsl(var(--crimson))]">
                When the fun stops, stop.
              </p>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="eyebrow-gold">Navigation</span>
              <div className="mt-2.5 h-px bg-[hsl(var(--border))]" />
            </div>
            <nav aria-label="Footer navigation">
              <ul className="space-y-1.5">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="footer-link"
                    >
                      <span className="block w-1.5 h-1.5 rounded-full bg-[hsl(var(--crimson))]/50 group-hover:bg-[hsl(var(--crimson))] transition-colors duration-200 shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>

        {/* Partner organisations */}
        <div className="py-8 border-b border-[hsl(var(--border))]">
          <p className="eyebrow-gold text-center mb-6">Responsible Gambling Partners</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {partnerLogos.map((logo) => (
              <Link
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                title={logo.alt}
                className="flex items-center justify-center px-5 py-3 bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] rounded-xl hover:border-[hsl(var(--gold))]/40 transition-colors duration-200"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="object-contain h-8 w-auto"
                />
              </Link>
            ))}
          </div>
          <p className="text-[10px] text-[hsl(var(--text-muted))] text-center mt-5 leading-relaxed max-w-2xl mx-auto">
            We may earn a commission when you register through our links. This does not affect the independence of our editorial reviews or the accuracy of our ratings.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[hsl(var(--text-muted))] text-center md:text-left">
            &copy; {new Date().getFullYear()} britishbestcasinosites.com. All rights reserved. Independent comparison service.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {["UKGC Licensed", "18+", "GambleAware", "BeGambleAware.org"].map((tag, i, arr) => (
              <span key={tag} className="flex items-center gap-3">
                <span className="text-[11px] text-[hsl(var(--text-muted))]">{tag}</span>
                {i < arr.length - 1 && <span className="w-px h-3 bg-[hsl(var(--border))]" />}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
