import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { CookieBanner } from "@/components/cookie-banner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "British Best Casino Sites | Top UK Casinos 2026 | britishbestcasinosites.com",
  description:
    "BritishBestCasinoSites.com is the UK's most trusted independent casino comparison platform. Expert reviews, verified bonuses, and top-rated UKGC-licensed operators reviewed by our specialist team.",
  keywords:
    "british best casino sites, best casino sites UK, UK casino comparison, top UK casinos 2026, UKGC licensed casinos, best casino bonuses UK, british casino sites",
  metadataBase: new URL("https://britishbestcasinosites.com"),
  alternates: { canonical: "https://britishbestcasinosites.com" },
  openGraph: {
    title: "British Best Casino Sites | Top UK Casinos 2026",
    description:
      "The UK's most trusted casino comparison platform. Expert-led reviews, verified bonuses, and UKGC-licensed operators.",
    url: "https://britishbestcasinosites.com",
    siteName: "BritishBestCasinoSites",
    locale: "en_GB",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <CookieConsentProvider>
            {children}
            <CookieBanner />
          </CookieConsentProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
