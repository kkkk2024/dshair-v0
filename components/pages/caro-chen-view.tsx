"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { localeHref } from "@/lib/i18n/routing"
import { getCaroChenContent, type CaroChenContent } from "@/lib/i18n/pages/caro-chen"
import type { Locale } from "@/lib/i18n/config"

export function CaroChenView({ locale }: { locale: Locale }) {
  const c: CaroChenContent = getCaroChenContent(locale)

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)",
                }}
              />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-24 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                {c.badge}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4 leading-tight">
                Caro Chen
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                {c.subtitle}
              </p>
            </div>
          </section>

          <article className="max-w-3xl mx-auto px-4 md:px-6 py-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-medium mt-2 mb-6">{c.aboutHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.aboutPara1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.aboutPara2}
              </p>

              <h2 className="font-serif text-3xl font-medium mt-12 mb-6">{c.writeHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.writePara}
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-4 my-10">
                <div className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                  <h4 className="font-semibold text-[#4A1942] mb-2">{c.card1Title}</h4>
                  <p className="text-sm text-[#6B3A6E]">
                    {c.card1Text}
                  </p>
                </div>
                <div className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                  <h4 className="font-semibold text-[#4A1942] mb-2">{c.card2Title}</h4>
                  <p className="text-sm text-[#6B3A6E]">
                    {c.card2Text}
                  </p>
                </div>
              </div>

              <h2 className="font-serif text-3xl font-medium mt-12 mb-6">{c.connectHeading}</h2>
              <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-8">
                <li>
                  {c.connectTradeLabel}{" "}
                  <Link href={localeHref("/trade-wholesale", locale)} className="text-[#4A1942] font-semibold underline">
                    {c.connectTradeLink}
                  </Link>
                </li>
                <li>
                  {c.connectMfgLabel}{" "}
                  <a href="https://wigexporter.com" className="text-[#4A1942] font-semibold underline" target="_blank" rel="noopener noreferrer">
                    {c.connectMfgLink}
                  </a>
                </li>
                <li>
                  {c.connectDirectLabel}
                </li>
              </ul>

              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl font-medium mb-3">{c.ctaHeading}</h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  {c.ctaText}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href={localeHref("/trade-wholesale", locale)}>
                      {c.ctaTradeBtn} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href={localeHref("/blog", locale)}>{c.ctaBlogBtn}</Link>
                  </Button>
                </div>
              </div>

              <div className="pt-8 border-t">
                <Link href={localeHref("/about", locale)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" /> {c.backLabel}
                </Link>
              </div>
            </div>
          </article>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
