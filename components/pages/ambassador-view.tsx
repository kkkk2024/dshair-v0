"use client"

import { useState, useRef } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle2, Crown, Star, Shield, Sparkles, ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { HoneypotField, TurnstileField } from "@/components/antispam/spam-fields"
import { localeHref } from "@/lib/i18n/routing"
import { getAmbassadorContent, type AmbassadorContent } from "@/lib/i18n/pages/ambassador"
import type { Locale } from "@/lib/i18n/config"

const tierMeta: Record<string, { Icon: typeof Shield; colour: string }> = {
  Bronze: { Icon: Shield, colour: "text-amber-600" },
  Silver: { Icon: Star, colour: "text-gray-500" },
  Gold: { Icon: Crown, colour: "text-yellow-600" },
}

const exampleTierMeta: Record<string, string> = {
  Bronze: "bg-amber-50 text-amber-600",
  Silver: "bg-gray-100 text-gray-500",
  Gold: "bg-yellow-50 text-yellow-600",
}

export function AmbassadorView({ locale }: { locale: Locale }) {
  const c: AmbassadorContent = getAmbassadorContent(locale)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [applied, setApplied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const turnstileToken = useRef("")
  const formMountedAt = useRef(Date.now())

  const handleAmbassadorSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      salonName: formData.get("salon_name"),
      location: formData.get("location"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      referralCount: formData.get("referral_count"),
      notes: formData.get("notes"),
      isAmbassador: true,
      turnstileToken: turnstileToken.current,
      submitTime: formMountedAt.current,
    }
    try {
      const response = await fetch("/api/salon-partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error("Failed to submit")
      setApplied(true)
    } catch (err) {
      alert("Failed to submit. Please try again or contact us via WhatsApp.")
    } finally {
      setIsSubmitting(false)
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
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1920&q=80"
                alt="D.S Hair Beauty Ambassador Programme"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-transparent" />
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6">
                  <Crown className="h-4 w-4" />
                  <span className="text-sm font-medium">{c.heroBadge}</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  {c.heroTitle}
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  {c.heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-white text-black hover:bg-white/90">
                    <a href="#apply">{c.applyCta}</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white bg-black/30 hover:bg-white hover:text-black" asChild>
                    <Link href={localeHref("/salon-partners", locale)}>
                      {c.learnTradeCta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="bg-primary text-primary-foreground py-8">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {c.stats.map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl md:text-3xl font-bold">{item.stat}</div>
                    <div className="text-xs md:text-sm text-primary-foreground/70 mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.howTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{c.howSubtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
                {c.howItWorks.map((step, i) => (
                  <div key={step.num} className="relative text-center">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {step.num}
                    </div>
                    {i < c.howItWorks.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-[calc(50%+22px)] right-[calc(-50%+22px)] h-px bg-border" />
                    )}
                    <h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tiers */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.tiersTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{c.tiersSubtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {c.tiers.map((tier) => {
                  const meta = tierMeta[tier.name] ?? { Icon: Shield, colour: "text-primary" }
                  return (
                    <div
                      key={tier.name}
                      className={`rounded-2xl border-2 p-6 md:p-8 relative ${tier.popular ? "ring-2 ring-primary" : ""}`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                          {c.popularBadge}
                        </div>
                      )}
                      <div className={`inline-flex items-center justify-center h-12 w-12 rounded-full ${meta.colour.replace("text-", "bg-")}/10 mb-4`}>
                        <meta.Icon className={`h-6 w-6 ${meta.colour}`} />
                      </div>
                      <h3 className={`font-serif text-2xl font-medium ${meta.colour} mb-1`}>{tier.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{tier.tagline}</p>
                      <div className="mb-6">
                        <div className="text-xs text-muted-foreground mb-2 font-medium">{c.commissionLabel}</div>
                        <div className={`text-3xl font-bold ${meta.colour}`}>{tier.commission}</div>
                      </div>
                      <div className="space-y-3 mb-6">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1 font-medium">{c.requirementsLabel}</div>
                          <ul className="space-y-1">
                            {tier.requirements.map((req) => (
                              <li key={req} className="text-sm flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <div className="text-xs text-muted-foreground mb-2 font-medium">{c.benefitsLabel}</div>
                        <ul className="space-y-1.5">
                          {tier.benefits.map((benefit) => (
                            <li key={benefit} className="text-sm flex items-start gap-2">
                              <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Example Earnings */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.earningsTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{c.earningsSubtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {c.referralExamples.map((ex) => (
                  <div key={ex.salon} className="bg-card rounded-xl p-6 border text-center">
                    <div className={`inline-flex items-center justify-center h-10 w-10 rounded-full mb-4 ${exampleTierMeta[ex.tier] ?? "bg-primary/10 text-primary"}`}>
                      <Crown className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold mb-1">{ex.salon}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{ex.orders}</p>
                    <div className="text-2xl font-bold text-primary">{ex.commission}</div>
                    <p className="text-xs text-muted-foreground mt-1">per month passive income</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">{c.earningsNote}</p>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.faqTitle}</h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-3">
                {c.faqs.map((faq, i) => (
                  <div key={i} className="bg-card rounded-xl border overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left font-medium"
                    >
                      {faq.q}
                      <span className={`transform transition-transform ${activeFaq === i ? "rotate-180" : ""}`}>▼</span>
                    </button>
                    {activeFaq === i && (
                      <div className="px-5 pb-5 text-sm text-muted-foreground">{faq.a}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA / Apply */}
          <section id="apply" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.applyTitle}</h2>
                  <p className="text-muted-foreground text-lg">{c.applySubtitle}</p>
                </div>
                {applied ? (
                  <div className="bg-card rounded-2xl p-10 text-center border">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium mb-2">{c.successTitle}</h3>
                    <p className="text-muted-foreground mb-2">{c.successMsg1}</p>
                    <p className="text-muted-foreground text-sm mb-6">{c.successMsg2}</p>
                    <Button asChild>
                      <Link href={localeHref("/salon-partners", locale)}>
                        {c.exploreCta} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleAmbassadorSubmit} className="bg-card rounded-2xl p-6 md:p-8 border space-y-5">
                    <HoneypotField />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">{c.nameLabel}</label>
                        <Input name="name" placeholder="First & Last Name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">{c.salonNameLabel}</label>
                        <Input name="salon_name" placeholder="e.g. The Hair Studio" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">{c.emailLabel}</label>
                        <Input name="email" type="email" placeholder="you@yoursalon.co.uk" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">{c.phoneLabel}</label>
                        <Input name="phone" type="tel" placeholder="+44 7xxx xxxxxx" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">{c.locationLabel}</label>
                      <Input name="location" placeholder="e.g. Didsbury, Manchester" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">{c.referralLabel}</label>
                      <select name="referral_count" className="w-full rounded-md border px-3 py-2 text-sm bg-background">
                        <option value="">{c.referralOptionPlaceholder}</option>
                        {c.referralOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">{c.notesLabel}</label>
                      <Textarea name="notes" placeholder={c.notesPlaceholder} rows={3} />
                    </div>
                    <TurnstileField onTokenChange={(token) => { turnstileToken.current = token }} />
                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? c.submittingBtn : c.submitBtn}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      {c.waCtaLabel}{" "}
                      <a href="https://wa.me/8613516946001" target="_blank" rel="noopener noreferrer" className="underline text-green-600">
                        {c.waCtaLink}
                      </a>
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
