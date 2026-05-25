"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    id: "faq-1",
    question: "How does British Best Casino Sites select the casinos it recommends?",
    answer:
      "Our specialist team subjects every casino to a structured, multi-stage evaluation covering UKGC licence verification, security architecture, bonus value and playthrough fairness, game library depth, software studio credibility, mobile performance, withdrawal processing times, and customer support quality. Only operators that perform consistently at the highest level across every dimension earn a place in our rankings.",
  },
  {
    id: "faq-2",
    question: "Are the casinos featured on this site legal and safe for UK players?",
    answer:
      "Every casino published on britishbestcasinosites.com holds a current UK Gambling Commission licence, which guarantees strict compliance with player protection standards, fair gaming requirements, secure transaction processing, and mandatory responsible gambling provisions. Player funds are protected by law, and all listed operators use industry-grade SSL encryption throughout.",
  },
  {
    id: "faq-3",
    question: "What welcome bonuses do the best British casino sites offer?",
    answer:
      "Leading UK operators offer a variety of introductory packages including matched deposit bonuses such as 100 percent up to 500 pounds, free spins bundles, no-deposit bonus credits, cashback promotions, and multi-stage welcome series. Our team assesses wagering requirements, eligible game restrictions, and validity windows to highlight the most genuinely valuable offers available.",
  },
  {
    id: "faq-4",
    question: "How do I claim a casino welcome bonus through your site?",
    answer:
      "Click our verified link to your chosen casino, register a new account with accurate personal details, and complete any required identity verification. Then make a qualifying deposit using an eligible payment method and opt in to the promotion or enter any stated bonus code. Some offers activate automatically upon deposit. Always review the specific terms covering wagering requirements and eligible games before you proceed.",
  },
  {
    id: "faq-5",
    question: "What payment methods are accepted at British casino sites?",
    answer:
      "Leading UK casinos support Visa and Mastercard debit cards, digital wallets such as PayPal, Skrill, and Neteller, bank transfers, prepaid cards including Paysafecard, and mobile payment options. Credit cards have been prohibited for gambling transactions in the UK since 2020. Most operators process instant deposits and complete withdrawals within 24 hours, with digital wallets typically the fastest option available.",
  },
  {
    id: "faq-6",
    question: "Can I play casino games on my mobile phone or tablet?",
    answer:
      "Yes. Every casino we recommend delivers a quality mobile experience either through a dedicated iOS and Android application or a fully responsive browser platform. You can access the complete game library, claim bonuses, manage your account, and process withdrawals directly from your smartphone or tablet at any time.",
  },
  {
    id: "faq-7",
    question: "What is the UK Gambling Commission and why does it matter?",
    answer:
      "The UK Gambling Commission is the statutory authority that licences and regulates all gambling operators serving UK customers. It enforces rigorous standards covering game fairness, data security, anti-money laundering controls, and responsible gambling obligations. Licenced casinos must maintain segregated player funds, provide self-exclusion tools, and undergo regular compliance audits. A current UKGC licence is the most important quality indicator when selecting where to play.",
  },
  {
    id: "faq-8",
    question: "How can I keep my gambling under control?",
    answer:
      "Set firm deposit and loss limits before you begin playing. Never chase losses, take regular breaks, and treat gambling purely as entertainment. All UKGC-licenced casinos are required to provide deposit caps, reality check notifications, time-out periods, and self-exclusion tools. If you have any concerns about your gambling habits, contact BeGambleAware.org on 0808 8020 133, visit GamCare.org.uk, or register with GamStop.co.uk to self-exclude from all UK-licenced operators simultaneously.",
  },
]

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--background))]" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="eyebrow-crimson block mb-3">FAQ</span>
          <h2
            id="faq-heading"
            className="font-serif font-bold text-3xl md:text-4xl text-[hsl(var(--foreground))] mb-4 text-balance"
          >
            Frequently Asked{" "}
            <span className="text-gold-shimmer">Questions</span>
          </h2>
          <div className="rule-gold mx-auto w-32 md:w-44 mb-5" />
          <p className="text-sm text-[hsl(var(--text-muted))] max-w-xl mx-auto leading-relaxed">
            Everything UK players need to know about casino sites, bonuses, licensing, and responsible play
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="faq-item border-0"
              >
                <AccordionTrigger className="text-left font-sans font-semibold text-sm md:text-base text-[hsl(var(--foreground))] py-4 md:py-5 hover:no-underline gap-3 group px-5">
                  <span className="flex items-center gap-3">
                    <span className="shrink-0 font-sans text-[10px] font-bold tracking-widest text-[hsl(var(--crimson))] w-5 text-right">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="group-hover:text-[hsl(var(--gold))] transition-colors duration-200">
                      {faq.question}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 px-5 pl-[3.25rem] border-t border-[hsl(var(--border))] bg-[hsl(var(--surface-2))]">
                  <p className="pt-4 text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  )
}
