"use client"

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Tag,
  ShieldCheck,
  Truck,
  MessageCircle,
  X,
  Check,
} from "lucide-react"
import { localeHref } from "@/lib/i18n/routing"
import { getSwitchContent, type SwitchContent } from "@/lib/i18n/pages/switch-trade-supplier"
import type { Locale } from "@/lib/i18n/config"

const valueIcons = [Tag, ShieldCheck, Truck, CheckCircle2]

export function SwitchTradeSupplierView({ locale }: { locale: Locale }) {
  const c: SwitchContent = getSwitchContent(locale)
  const wa = (msg: string) =>
    `https://wa.me/8613516946001?text=${encodeURIComponent(msg)}`

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="relative min-h-[620px] flex items-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
                alt="Manufacturer-direct salon supplier alternative"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            </div>
            <div className="container relative z-10 px-4 md:px-6 py-20">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">{c.heroEyebrow}</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  {c.heroTitle}
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  {c.heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-white text-black hover:bg-white/90">
                    <Link href={localeHref("/trade-wholesale", locale)}>
                      {c.heroCtaPrimary}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white bg-black/30 hover:bg-white hover:text-black"
                    asChild
                  >
                    <a href={wa(c.whatsappHeroMsg)} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {c.heroCtaSecondary}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Why salons switch */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                  {c.whyTitle}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {c.whySubtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {c.painPoints.map((p) => (
                  <div key={p.title} className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-lg mb-3">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Comparison table */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.compareTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {c.compareSubtitle}
                </p>
              </div>
              <div className="max-w-3xl mx-auto overflow-x-auto">
                <table className="w-full bg-card rounded-xl border overflow-hidden">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="text-left px-6 py-4 text-sm font-medium">{c.compareHeaderFeature}</th>
                      <th className="text-left px-6 py-4 text-sm font-medium">{c.compareHeaderCompetitor}</th>
                      <th className="text-left px-6 py-4 text-sm font-medium">{c.compareHeaderDs}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {c.compareRows.map((row) => (
                      <tr key={row.feature} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium">{row.feature}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <X className="h-3.5 w-3.5 text-red-500" />
                            {row.competitor}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <span className="inline-flex items-center gap-1.5 text-green-700 font-medium">
                            <Check className="h-3.5 w-3.5" />
                            {row.ds}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Value blocks */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {c.valueBlocks.map((item, i) => {
                  const Icon = valueIcons[i] ?? Tag
                  return (
                    <div key={item.title} className="bg-card rounded-xl p-6 border text-center hover:shadow-md transition-shadow">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                {c.ctaTitle}
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                {c.ctaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-white text-black hover:bg-white/90">
                  <Link href={localeHref("/trade-wholesale", locale)}>{c.ctaPrimary}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                  asChild
                >
                  <a href={wa(c.whatsappCtaMsg)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {c.ctaSecondary}
                  </a>
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/60 mt-6">
                {c.manufacturingArmLabel}{" "}
                <a href="https://wigexporter.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-foreground">wigexporter.com ↗</a>
              </p>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
