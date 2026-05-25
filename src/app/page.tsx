"use client"

import { useState } from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { FaqSection } from "@/components/faq-section"
import { Shield, CheckCircle2, Zap, Trophy, HeartHandshake, Smartphone } from "lucide-react"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen]             = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="pt-[62px]">

        {/* ────────────────────────────────────────
            HERO
           ──────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-hero-casino bg-card-pattern">
          {/* Casino atmosphere image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-casino.jpg"
              alt="British Best Casino Sites premium casino experience"
              fill
              className="object-cover object-center"
              priority
            />
            {/* 60% black overlay for readability */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Subtle bottom fade into page background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(220,20%,4%)]" />
          </div>

          {/* Side accent lines */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[hsl(var(--crimson))] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[hsl(var(--crimson))] to-transparent" />

          <div className="relative z-10 pt-10 pb-10 md:pt-16 md:pb-16">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">

              {/* Eyebrow label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-[hsl(var(--gold))]" />
                <span className="eyebrow-gold">The UK&apos;s Trusted Casino Comparison</span>
                <div className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-[hsl(var(--gold))]" />
              </div>

              {/* Main headline */}
              <h1 className="font-serif font-bold text-3xl md:text-5xl leading-[1.1] text-white mb-3 md:mb-5 text-balance max-w-3xl drop-shadow-lg">
                Britain&apos;s Best{" "}
                <span className="text-gold-shimmer">Casino Sites</span>
                {" "}Ranked and Reviewed
              </h1>

              {/* Subtitle */}
              <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-xl text-pretty mb-3 drop-shadow">
                Every UKGC-licensed operator independently tested for bonus fairness, withdrawal speed, and game quality. We do the research so you play at the very best.
              </p>

              {/* Thin crimson rule */}
              <div className="h-px w-14 bg-[hsl(var(--crimson))] mb-7 md:mb-10" />

              {/* Trust indicator pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-5">
                {[
                  { icon: Shield,       label: "UKGC Licence",         sub: "Verified"        },
                  { icon: CheckCircle2, label: "Secure Payments",      sub: "SSL Protected"   },
                  { icon: Trophy,       label: "Verified Bonuses",     sub: "All Checked"     },
                  { icon: Zap,          label: "Services Reviewed",    sub: "Updated " + currentDate },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="trust-pill">
                    <Icon className="w-3.5 h-3.5 text-[hsl(var(--gold))] shrink-0" aria-hidden="true" />
                    <span className="font-semibold text-[hsl(var(--foreground))]">{label}</span>
                    <span className="text-[hsl(var(--text-muted))] font-normal hidden sm:inline">{sub}</span>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="text-[9px] md:text-[10px] text-[hsl(var(--text-muted))] font-sans">
                18+ only. Gamble responsibly. BeGambleAware.org.{" "}
                <button
                  onClick={() => setIsAdvertiserModalOpen(true)}
                  className="text-[hsl(var(--gold))]/55 hover:text-[hsl(var(--gold))] underline underline-offset-2 transition-colors"
                >
                  Advertiser Disclosure
                </button>
                {" "}/{" "}
                <button
                  onClick={() => setIsAgeModalOpen(true)}
                  className="text-[hsl(var(--gold))]/55 hover:text-[hsl(var(--gold))] underline underline-offset-2 transition-colors"
                >
                  Age Verification
                </button>
              </p>

            </div>
          </div>

          <div className="section-divider" />
        </section>

        {/* ────────────────────────────────────────
            CASINO LIST
           ──────────────────────────────────────── */}
        <div id="casino-sites" className="bg-background">
          <BettingSitesList />
        </div>

        <div className="section-divider" />

        {/* ────────────────────────────────────────
            EDITORIAL GUIDE
           ──────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-[hsl(var(--surface-1))]" aria-labelledby="guide-heading">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">

              {/* Section header */}
              <div className="text-center mb-10 md:mb-14">
                <span className="eyebrow-gold block mb-3">Editorial Guide</span>
                <h2
                  id="guide-heading"
                  className="font-serif font-bold text-2xl md:text-4xl text-[hsl(var(--foreground))] mb-4 text-balance"
                >
                  How to Choose the Right{" "}
                  <span className="text-gold-shimmer">UK Casino Site</span>
                </h2>
                <div className="rule-gold mx-auto w-32 md:w-44 mb-5" />
                <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed max-w-lg mx-auto">
                  A practical guide to finding a trusted, UKGC-licensed casino that suits your playing style and protects your money.
                </p>
              </div>

              {/* Article */}
              <article className="space-y-3">
                {[
                  {
                    icon: Shield,
                    title: "Understanding UK Casino Regulation",
                    body: [
                      "The United Kingdom operates one of the world's most respected gambling regulatory frameworks. Any legitimate casino serving British players must hold a current licence from the UK Gambling Commission. This authority enforces strict player protection requirements, fair gaming standards, and mandatory responsible gambling obligations across every operator it licences.",
                      "A valid UKGC licence is the single most important checkpoint before you register anywhere. Licensed operators are legally required to segregate customer funds, carry out robust age verification, and provide comprehensive tools including deposit limits and self-exclusion pathways.",
                    ],
                  },
                  {
                    icon: Trophy,
                    title: "Evaluating Welcome Bonuses Honestly",
                    body: [
                      "Welcome packages can meaningfully enhance your first deposit, but understanding the conditions attached to them is essential. British casinos typically offer matched deposit bonuses, free spins packages, or no-deposit credits for new accounts.",
                      "Study wagering requirements with care. A modest bonus with fair terms frequently delivers better real-world value than a large headline figure attached to restrictive conditions. Our analysts calculate the genuine playthrough cost of every offer we publish.",
                    ],
                  },
                  {
                    icon: Zap,
                    title: "Game Libraries and Software Studios",
                    body: [
                      "The breadth and quality of a casino game library shapes every session you play. The best platforms carry thousands of slots, live dealer tables, classic card games, and progressive jackpots, all powered by established studios with proven track records.",
                      "Prioritise casinos partnered with respected providers such as Evolution Gaming, NetEnt, Microgaming, and Playtech. These studios publish independently audited RTP figures and subject every title to rigorous fairness verification before release.",
                    ],
                  },
                  {
                    icon: CheckCircle2,
                    title: "Payment Methods and Withdrawal Speed",
                    body: [
                      "Reliable banking sits at the heart of a quality casino experience. Leading UK platforms support Visa and Mastercard debit cards, major digital wallets, bank transfers, and Apple Pay. Credit card gambling has been prohibited in the UK since April 2020.",
                      "Withdrawal speed is a reliable quality indicator. The best operators process digital wallet withdrawals within hours and complete debit card transfers within two to three working days. Unexplained processing delays should be treated as a warning sign.",
                    ],
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile Gaming Performance",
                    body: [
                      "Mobile devices now account for the majority of UK casino sessions. Whether through a dedicated application or a responsive browser platform, your chosen casino should deliver a seamless, feature-complete experience on both smartphone and tablet.",
                      "Assess mobile game selection, live casino availability, and account management capabilities. The best platforms offer biometric login, personalised alerts, and full access to all promotions directly from mobile devices.",
                    ],
                  },
                  {
                    icon: HeartHandshake,
                    title: "Customer Support and Responsible Play",
                    body: [
                      "Responsive support proves its worth the moment an issue arises. The best UK casinos provide 24-hour assistance through live chat, email, and telephone, with well-trained agents who resolve queries efficiently and professionally.",
                      "Every UKGC-licensed operator must provide deposit limits, reality check alerts, self-exclusion, and prominent signposting to organisations such as GamCare and BeGambleAware. These tools must be easily accessible, not buried in menus.",
                    ],
                  },
                ].map(({ icon: Icon, title, body }, i) => (
                  <div
                    key={i}
                    className="info-card flex gap-5 md:gap-6 animate-fade-in-up"
                    style={{ animationDelay: `${i * 75}ms` }}
                  >
                    <div className="info-card-icon shrink-0">
                      <Icon className="w-5 h-5 text-[hsl(var(--crimson))]" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-base md:text-xl text-[hsl(var(--gold))] mb-2 md:mb-3">
                        {title}
                      </h3>
                      {body.map((p, j) => (
                        <p key={j} className="text-xs md:text-sm text-[hsl(var(--text-secondary))] leading-relaxed mb-2 last:mb-0">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </article>

            </div>
          </div>
        </section>

        <div className="section-divider-crimson" />

        {/* ────────────────────────────────────────
            FAQ
           ──────────────────────────────────────── */}
        <div id="faq-section">
          <FaqSection />
        </div>

        <div className="section-divider" />

      </div>

      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
