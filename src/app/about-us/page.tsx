import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | BritishBestCasinoSites.com - Expert UK Casino Reviews",
  description:
    "Learn about our editorial mission, review methodology, and commitment to helping UK players find the finest UKGC-licenced casino sites at BritishBestCasinoSites.com.",
}

const pillars = [
  {
    title: "UKGC Licenced Operators Only",
    body: "Every casino we feature holds a current UK Gambling Commission licence, guaranteeing the highest standards of player protection, fund security, and fair gaming for all British players who visit our platform.",
  },
  {
    title: "Built for British Players",
    body: "We prioritise operators that understand the British market: GBP accounts, UK-friendly payment methods, competitive bonus structures, and dedicated customer support teams experienced with UK player needs.",
  },
  {
    title: "Independent Expert Reviews",
    body: "Our experienced casino analysts perform hands-on testing of every platform, evaluating game quality, bonus fairness, payout speed, and the overall player experience from first registration to final withdrawal.",
  },
  {
    title: "Verified Bonus Offers",
    body: "We confirm every welcome package and ongoing promotion directly with operators before publishing, delivering accurate information about genuine value for British casino players.",
  },
]

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[62px] bg-[hsl(var(--surface-1))] border-b border-[hsl(var(--border))]">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--crimson))] to-transparent" />
        <div className="container mx-auto px-4 md:px-6 py-14 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow-gold mb-4 block">Who We Are</p>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-[hsl(var(--foreground))] mb-5 text-balance">
              About British Best Casino Sites
            </h1>
            <div className="rule-crimson mx-auto w-24 mb-5" />
            <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed max-w-xl mx-auto">
              Your trusted authority on UK casino sites, dedicated to helping British players discover the finest UKGC-licenced operators through independent, specialist-led analysis and honest editorial reviews.
            </p>
          </div>
        </div>
        <div className="section-divider" />
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-14">

            {/* Mission */}
            <div>
              <p className="eyebrow-gold mb-3">Our Mission</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(var(--foreground))] mb-4">
                Clarity in a Crowded Market
              </h2>
              <div className="h-px bg-[hsl(var(--border))] w-full mb-6" />
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mb-4">
                At BritishBestCasinoSites.com, we have built the UK&apos;s most trusted destination for casino evaluation and comparison. In a marketplace full of operators competing for attention, our specialist team cuts through promotional noise to identify genuinely outstanding casino experiences crafted for discerning British players.
              </p>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                Whether you prefer high-stakes slots, live dealer blackjack, premium roulette, or progressive jackpots, we connect you with operators that deliver outstanding value, a broad game library, and attentive service throughout every session.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] p-6 border-l-2 border-l-[hsl(var(--gold))]/60 hover:border-l-[hsl(var(--gold))] transition-colors duration-200"
                >
                  <div className="h-[2px] bg-[hsl(var(--crimson))] w-8 mb-4 rounded-full" />
                  <h3 className="font-serif font-bold text-base text-[hsl(var(--foreground))] mb-2">{p.title}</h3>
                  <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>

            {/* Methodology */}
            <div>
              <p className="eyebrow-gold mb-3">Process</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(var(--foreground))] mb-4">
                Our Review Methodology
              </h2>
              <div className="h-px bg-[hsl(var(--border))] w-full mb-6" />
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mb-6">
                Every recommendation on our platform is backed by a comprehensive evaluation process refined by industry veterans across eight critical dimensions:
              </p>
              <ul className="space-y-2">
                {[
                  ["Licensing and Security",  "UKGC licence verification, SSL encryption standards, and player fund segregation requirements"],
                  ["Welcome Bonuses",          "Value assessment, realistic wagering requirements, and genuinely achievable completion terms"],
                  ["Game Library",             "Slot variety, live dealer tables, jackpots, published RTP rates, and software studio quality"],
                  ["Loyalty Programme",        "Tier structure, reward earning rates, and exclusive player perks"],
                  ["Payment Methods",          "UK-compatible options, instant deposit processing, and sub-24-hour withdrawal speeds"],
                  ["Mobile Experience",        "Application quality, responsive design performance, and full game library availability"],
                  ["Customer Support",         "Live chat availability, response quality and speed, and access to UK-based support"],
                  ["Responsible Gaming",       "Deposit limits, reality check tools, self-exclusion pathways, and BeGambleAware signposting"],
                ].map(([title, desc]) => (
                  <li
                    key={title}
                    className="flex gap-3 text-sm rounded-lg border-l-2 border-[hsl(var(--crimson))]/40 pl-4 bg-[hsl(var(--surface-1))] py-3 pr-4 border border-[hsl(var(--border))]"
                  >
                    <span className="font-serif font-semibold text-[hsl(var(--gold))] whitespace-nowrap shrink-0">{title}:</span>
                    <span className="text-[hsl(var(--text-secondary))] leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div>
              <p className="eyebrow-gold mb-3">Values</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(var(--foreground))] mb-4">
                Our Core Principles
              </h2>
              <div className="h-px bg-[hsl(var(--border))] w-full mb-6" />
              <div className="space-y-3">
                {[
                  ["Transparency",            "We publish our full testing methodology and scoring criteria so you understand precisely how and why each casino is ranked."],
                  ["Editorial Independence",  "Our reviews remain entirely impartial. Affiliate commissions never influence our assessments. Every rating reflects genuine platform quality measured against objective criteria."],
                  ["Continuous Updates",      "The casino landscape changes frequently. We regularly reassess every listing to ensure our recommendations remain accurate and current for UK players."],
                  ["Responsible Gaming",      "We are firmly committed to player welfare. All pages feature prominent links to BeGambleAware, GamCare, and GamStop, and we never promote gambling to vulnerable individuals."],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-xl border-l-2 border-[hsl(var(--gold))] pl-5 bg-[hsl(var(--surface-1))] py-4 pr-5 border border-[hsl(var(--border))]"
                  >
                    <p className="font-serif font-semibold text-sm text-[hsl(var(--foreground))] mb-1.5">{title}</p>
                    <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding callout */}
            <div className="rounded-xl bg-[hsl(var(--surface-1))] p-8 border border-[hsl(var(--border))] border-l-2 border-l-[hsl(var(--crimson))]">
              <div className="section-divider mb-7" />
              <p className="eyebrow-gold mb-3">How We Are Funded</p>
              <h3 className="font-serif font-bold text-xl text-[hsl(var(--foreground))] mb-4">
                Always Free for UK Players
              </h3>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mb-4">
                BritishBestCasinoSites.com is sustained through affiliate partnerships with licenced casino operators, who pay us a commission when visitors register through our referral links. This model allows us to deliver a comprehensive comparison service at no cost to players.
              </p>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                These commercial arrangements never compromise our editorial integrity. Casino rankings are determined exclusively by platform quality, player satisfaction, and objective performance metrics, not by the size of affiliate fees.
              </p>
              <div className="section-divider mt-7" />
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
