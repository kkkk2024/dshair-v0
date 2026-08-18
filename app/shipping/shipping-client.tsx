"use client"

import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Truck, Package, Globe, Clock, CheckCircle2 } from "lucide-react"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import type { ShippingContent } from "@/lib/i18n/pages/shipping"

const cardIcons = [Truck, Clock, Globe, Package]

const HOME: Record<Locale, string> = {
  en: "Home",
  de: "Startseite",
  fr: "Accueil",
  ar: "الرئيسية",
  sv: "Hem",
  pl: "Strona główna",
}

export default function ShippingClient({
  locale,
  content: c,
}: {
  locale: Locale
  content: ShippingContent
}) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="bg-[#4A1942] text-white">
            <div className="container px-4 md:px-6 py-14 md:py-20">
              <p className="text-sm tracking-widest uppercase text-amber-200 mb-4">{c.heroEyebrow}</p>
              <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight">{c.heroTitle}</h1>
              <p className="mt-6 max-w-3xl text-lg text-white/80 leading-relaxed">{c.heroSubtitle}</p>
            </div>
          </section>

          {/* Breadcrumb UI */}
          <section className="border-b bg-[#FDF8F0]">
            <div className="container px-4 md:px-6 py-3">
              <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Link href={localeHref("/", locale)} className="hover:text-[#4A1942]">
                  {HOME[locale]}
                </Link>
                <span>/</span>
                <span className="font-medium text-[#4A1942]">{c.breadcrumb}</span>
              </nav>
            </div>
          </section>

          {/* Delivery Options */}
          <section className="container px-4 md:px-6 py-14 md:py-20">
            <div className="grid gap-8 md:grid-cols-2">
              {c.cards.map((card, i) => {
                const Icon = cardIcons[i] ?? Truck
                return (
                  <div key={card.title} className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF8F0]">
                        <Icon className="h-5 w-5 text-[#4A1942]" />
                      </div>
                      <h2 className="font-serif text-2xl text-[#4A1942]">{card.title}</h2>
                    </div>
                    <p className="mt-4 text-muted-foreground leading-7">{card.desc}</p>
                    <ul className="mt-6 space-y-3 text-sm">
                      {card.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Order Processing */}
          <section className="border-t bg-[#FDF8F0]">
            <div className="container px-4 md:px-6 py-14 md:py-20">
              <h2 className="font-serif text-3xl md:text-4xl text-[#4A1942]">{c.processTitle}</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {c.steps.map((step) => (
                  <div key={step.step} className="rounded-2xl bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-amber-600">{step.step}</p>
                    <h3 className="mt-2 font-serif text-xl text-[#4A1942]">{step.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-6">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ CTA */}
          <section className="container px-4 md:px-6 py-14">
            <div className="rounded-2xl bg-[#4A1942] p-8 md:p-12 text-white text-center">
              <h2 className="font-serif text-2xl md:text-3xl">{c.ctaTitle}</h2>
              <p className="mt-3 text-white/80 max-w-2xl mx-auto">{c.ctaSubtitle}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href={localeHref("/contact", locale)}
                  className="inline-flex items-center rounded-lg bg-amber-500 hover:bg-amber-600 px-5 py-3 text-sm font-medium text-white transition-colors"
                >
                  {c.ctaContact}
                </Link>
                <Link
                  href={localeHref("/returns", locale)}
                  className="inline-flex items-center rounded-lg border border-white/30 hover:bg-white/10 px-5 py-3 text-sm font-medium text-white transition-colors"
                >
                  {c.ctaReturns}
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
