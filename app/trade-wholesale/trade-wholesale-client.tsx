"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle2, Package, MapPin, BadgeCheck,
  MessageCircle, Store, Scissors,
  Clock, ShieldCheck, Star
} from "lucide-react"
import Image from "next/image"
import { tradeWholesaleContent, type TradeWholesaleContent } from "@/lib/i18n/pages/trade-wholesale"

const WA_HREF =
  "https://wa.me/8613516946001?text=Hi!%20I%27m%20a%20salon%20owner%20in%20the%20UK.%20I%27d%20like%20to%20open%20a%20trade%20account%20for%20wholesale%20hair%20extensions."

export default function TradeWholesaleClient({ content }: { content: TradeWholesaleContent }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const t = content.form

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      salonName: formData.get("salon_name"),
      email: formData.get("email"),
      message: formData.get("message"),
      source: "trade-wholesale-page",
    }

    try {
      const response = await fetch("/api/salon-partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to submit")
      setSubmitted(true)
    } catch {
      alert(t.footWhatsApp + " " + t.footNote)
    } finally {
      setLoading(false)
    }
  }

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="relative h-[520px] md:h-[600px] flex items-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
                alt="Wholesale Hair Extensions for UK Salons — D.S Hair Beauty"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6">
                  <Store className="h-4 w-4" />
                  <span className="text-sm font-medium">{content.badge}</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  {content.heroTitle}
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">{content.heroSubtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-white text-black hover:bg-white/90">
                    <a href="#open-account">{content.ctaOpenAccount}</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white bg-black/30 hover:bg-white hover:text-black"
                    asChild
                  >
                    <a href={WA_HREF} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {content.ctaWhatsApp}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className="bg-primary text-primary-foreground py-6">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {content.stats.map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl md:text-3xl font-bold">{item.stat}</div>
                    <div className="text-xs md:text-sm text-primary-foreground/70 mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Salons Choose Us */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.whyTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{content.whySubtitle}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.whyItems.map((item, i) => {
                  const Icon = [ShieldCheck, Package, MapPin, BadgeCheck][i] ?? ShieldCheck
                  return (
                    <div
                      key={item.title}
                      className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow text-center"
                    >
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Product Range Table */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.rangeTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{content.rangeSubtitle}</p>
              </div>
              <div className="max-w-3xl mx-auto overflow-x-auto">
                <table className="w-full bg-card rounded-xl border overflow-hidden">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="text-left px-6 py-4 text-sm font-medium">{content.rangeCols.type}</th>
                      <th className="text-left px-6 py-4 text-sm font-medium">{content.rangeCols.min}</th>
                      <th className="text-left px-6 py-4 text-sm font-medium">{content.rangeCols.lead}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {content.rangeRows.map((row) => (
                      <tr key={row.type} className="hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium">{row.type}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">{row.minimum}</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-green-700 bg-green-50 rounded-full px-3 py-1">
                            <Clock className="h-3.5 w-3.5" />
                            {row.leadTime}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">{content.rangeFootnote}</p>
            </div>
          </section>

          {/* How to Open a Trade Account */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.stepsTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">{content.stepsSubtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {content.steps.map((step, i) => (
                  <div key={step.num} className="relative text-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-5">
                      {step.num}
                    </div>
                    {i < content.steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[calc(50%+36px)] right-[calc(-50%+36px)] h-px bg-border" />
                    )}
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trust Signals */}
          <section className="py-12 bg-secondary border-y">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
                {content.trust.map((item, i) => {
                  const Icon = [Star, Scissors, Clock][i] ?? Star
                  return (
                    <div key={item.title}>
                      <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="font-semibold mb-1">{item.title}</div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* CTA / Contact Form */}
          <section id="open-account" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.ctaTitle}</h2>
                  <p className="text-muted-foreground text-lg">{content.ctaSubtitle}</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    {content.ctaEmailLine}
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-card rounded-2xl p-10 text-center border">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium mb-2">{t.successTitle}</h3>
                    <p className="text-muted-foreground mb-2">{t.successBody}</p>
                    <p className="text-muted-foreground text-sm mb-6">{content.ctaEmailLine}</p>
                    <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                      <a href={WA_HREF} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {t.successWhatsApp}
                      </a>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">{t.name}</label>
                        <Input name="name" placeholder={t.namePh} required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">{t.salon}</label>
                        <Input name="salon_name" placeholder={t.salonPh} required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">{t.email}</label>
                      <Input name="email" type="email" placeholder={t.emailPh} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">{t.message}</label>
                      <Textarea name="message" placeholder={t.messagePh} rows={4} />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                      {loading ? t.submitting : t.submit}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      {t.footWhatsApp}{" "}
                      <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="underline text-green-600">
                        {content.ctaWhatsApp}
                      </a>{" "}
                      {t.footNote}
                    </p>
                  </form>
                )}
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
