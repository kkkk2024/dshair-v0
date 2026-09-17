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
  Clock, ShieldCheck, Star,
  Award, Users
} from "lucide-react"
import Image from "next/image"
import { tradeWholesaleContent, type TradeWholesaleContent } from "@/lib/i18n/pages/trade-wholesale"
import { FaqJsonLd } from "@/components/seo/json-ld"
import { submitLeadForm, FALLBACK_EMAIL } from "@/lib/lead-form"

const WA_HREF =
  "https://wa.me/8613516946001?text=Hi!%20I%27m%20a%20salon%20owner%20interested%20in%20opening%20a%20trade%20account%20for%20wholesale%20hair%20extensions."

export default function TradeWholesaleClient({ content }: { content: TradeWholesaleContent }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const t = content.form
  // Fall back to English copy for the B2B booster sections on non-English locales.
  const en = tradeWholesaleContent.en
  const sampleProgram = content.sampleProgram ?? en.sampleProgram
  const pricing = content.pricing ?? en.pricing
  const cases = content.cases ?? en.cases
  const faq = content.faq ?? en.faq

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const result = await submitLeadForm(e.currentTarget)
    if (result.ok) {
      setSubmitted(true)
    } else {
      alert(
        `Sorry, your enquiry could not be sent just now. Please message us on WhatsApp: +86 13516946001, or email ${FALLBACK_EMAIL}.`
      )
    }
    setLoading(false)
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

          {/* Verifiable Trust — order with confidence */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Order with confidence</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Real manufacturing experience, real salon partners, and transparent terms — so you always know exactly who you are buying from.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Award, title: "19 years in the trade", body: "Our founder has been sourcing and supplying Remy human hair since 2007. We know the grades, the product, and the pitfalls — no guesswork, no middlemen." },
                  { icon: Users, title: "50+ salons & brands grown", body: "We have helped more than 50 salon owners and small businesses scale into serious wholesalers and launch their own private-label lines." },
                  { icon: BadgeCheck, title: "Real partners, real results", body: "From multi-city salon chains in Northern Europe to boutique studios — our trade clients reorder because the quality holds batch after batch." },
                  { icon: ShieldCheck, title: "QC you can verify", body: "Every batch is quality-checked before it ships. Pre-shipment photos and video are available on request — see your order before you pay." },
                  { icon: Package, title: "Factory-direct margins", body: "We own the production relationship, so you skip distributor and importer markup. Better margins and consistent supply for your salon." },
                  { icon: CheckCircle2, title: "Secure first orders", body: "New to us? Start small through Alibaba Trade Assurance or PayPal Goods & Services — protected, low-risk first orders while we build trust." },
                ].map((item) => (
                  <div key={item.title} className="bg-card rounded-xl p-6 border">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
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

          {/* Sample Program */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{sampleProgram.title}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{sampleProgram.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                {sampleProgram.items.map((it) => (
                  <div key={it.title} className="bg-card rounded-xl p-6 border">
                    <h3 className="font-semibold text-lg mb-2 text-primary">{it.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Button size="lg" asChild>
                  <a href="#open-account">{sampleProgram.ctaLabel}</a>
                </Button>
              </div>
            </div>
          </section>

          {/* Trade Pricing Tiers */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{pricing.title}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{pricing.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {pricing.tiers.map((tier, i) => (
                  <div
                    key={tier.name}
                    className={`rounded-xl p-6 border bg-card ${i === pricing.tiers.length - 1 ? "ring-2 ring-primary" : ""}`}
                  >
                    <div className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">{tier.name}</div>
                    <div className="text-2xl font-bold mb-1">{tier.volume}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tier.benefit}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">{pricing.footnote}</p>
            </div>
          </section>

          {/* Salon Case Studies */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{cases.title}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{cases.subtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {cases.items.map((c) => (
                  <figure key={c.salon + c.location} className="bg-card rounded-xl p-6 border flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <figcaption className="font-semibold text-lg">{c.salon}</figcaption>
                      <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-3 py-1">{c.tag}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{c.location}</p>
                    <blockquote className="text-sm text-foreground/80 leading-relaxed italic mb-3">&ldquo;{c.quote}&rdquo;</blockquote>
                    <p className="text-xs font-medium text-primary mt-auto">{c.metric}</p>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ (with FAQPage schema for GEO) */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{faq.title}</h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-4">
                {faq.items.map((f) => (
                  <div key={f.q} className="bg-card rounded-xl p-5 border">
                    <p className="font-semibold text-primary mb-2">{f.q}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <FaqJsonLd faqs={faq.items.map((f) => ({ question: f.q, answer: f.a }))} />
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
                      <label className="block text-sm font-medium mb-1.5">Salon Location *</label>
                      <Input name="location" placeholder="e.g. Didsbury, Manchester" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone / WhatsApp *</label>
                      <Input name="phone" type="tel" placeholder="+44 7xxx xxxxxx" required />
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
