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
  CheckCircle2, Truck, Gift, Star, Users, Palette,
  MessageCircle, ShieldCheck, ArrowRight, Building2
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { salonPartnerContent, type SalonPartnerContent } from "@/lib/i18n/pages/salon-partners"
import { HoneypotField, TurnstileField } from "@/components/antispam/spam-fields"

const WA_HREF =
  "https://wa.me/8613516946001?text=Hi!%20I%27m%20a%20salon%20owner%20in%20Manchester%20and%20I%27d%20like%20to%20know%20more%20about%20your%20wholesale%20hair%20extension%20supply."

const benefitIcons = [ShieldCheck, Gift, Truck, Palette, Users, Star, Users]

export default function SalonPartnersClient({ content, locale }: { content: SalonPartnerContent; locale: Locale }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const t = content.form
  const turnstileToken = useRef("")
  const formMountedAt = useRef(Date.now())

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      salonName: formData.get("salon_name"),
      location: formData.get("location"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      methods: formData.getAll("methods"),
      monthlySpend: formData.get("monthly_spend"),
      currentSupplier: formData.get("current_supplier"),
      howFoundUs: formData.get("how_found_us"),
      instagram: formData.get("instagram"),
      notes: formData.get("notes"),
      source: "salon-partners-page",
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
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80"
                alt="Manchester Salon Partner Programme – DS Hair Beauty"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6">
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm font-medium">{content.badge}</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  {content.heroTitle}
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  {content.heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="#apply">{content.ctaApply}</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white bg-black/30 hover:bg-white hover:text-black" asChild>
                    <a
                      href={WA_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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

          {/* Benefits */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.benefitsTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {content.benefitsSubtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.benefits.map((b, i) => {
                  const Icon = benefitIcons[i] ?? ShieldCheck
                  return (
                    <div key={b.title} className={`bg-card rounded-xl p-6 border hover:shadow-md transition-shadow ${b.highlight ? 'ring-2 ring-primary bg-primary/5' : ''}`}>
                      <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{b.desc}</p>
                      {b.highlight && (
                        <Button size="sm" variant="outline" className="w-full" asChild>
                          <Link href={localeHref("/ambassador", locale)}>{content.ambassadorCta}</Link>
                        </Button>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Products for Salons */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.productsTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {content.productsSubtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.products.map((p) => (
                  <div key={p.name} className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg">{p.name}</h3>
                      <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-2 py-0.5 ml-2 flex-shrink-0">
                        {p.tag}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                    <p className="text-xs text-muted-foreground border-t pt-3">
                      {content.productsNote}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button asChild>
                  <Link href={localeHref("/collections/professional", locale)}>
                    {content.productsCta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.stepsTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  {content.stepsSubtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {content.steps.map((step, i) => (
                  <div key={step.num} className="relative text-center">
                    <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {step.num}
                    </div>
                    {i < content.steps.length - 1 && (
                      <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-0 h-px bg-border" />
                    )}
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Application Form */}
          <section id="apply" className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{t.title}</h2>
                  <p className="text-muted-foreground text-lg">
                    {t.subtitle}
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-card rounded-2xl p-10 text-center border">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium mb-2">{t.successTitle}</h3>
                    <p className="text-muted-foreground mb-2">
                      {t.successBody}
                    </p>
                    <p className="text-muted-foreground text-sm mb-6">
                      {t.successNote}
                    </p>
                    <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                      <a
                        href={WA_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {t.successWhatsApp}
                      </a>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border space-y-5">
                    <HoneypotField />
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
                      <label className="block text-sm font-medium mb-1.5">{t.location}</label>
                      <Input name="location" placeholder={t.locationPh} required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">{t.email}</label>
                        <Input name="email" type="email" placeholder={t.emailPh} required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">{t.phone}</label>
                        <Input name="phone" type="tel" placeholder={t.phonePh} required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">{t.methodsLabel}</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {t.methodOptions.map((method) => (
                          <label key={method} className="flex items-center gap-2 text-sm cursor-pointer">
                            <input type="checkbox" name="methods" value={method} className="rounded" />
                            {method}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">{t.spendLabel}</label>
                      <select name="monthly_spend" className="w-full rounded-md border px-3 py-2 text-sm bg-background">
                        {t.spendOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">{t.serveHeader}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1.5">{t.currentSupplierLabel}</label>
                          <Input
                            name="current_supplier"
                            placeholder={t.currentSupplierPh}
                          />
                          <p className="text-xs text-muted-foreground mt-1">{t.currentSupplierHint}</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5">{t.foundLabel}</label>
                          <select
                            name="how_found_us"
                            className="w-full rounded-md border px-3 py-2 text-sm bg-background"
                          >
                            {t.foundOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium mb-1.5">{t.instagramLabel}</label>
                        <Input
                          name="instagram"
                          placeholder={t.instagramPh}
                        />
                        <p className="text-xs text-muted-foreground mt-1">{t.instagramHint}</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">{t.notesLabel}</label>
                      <Textarea
                        name="notes"
                        placeholder={t.notesPh}
                        rows={3}
                      />
                    </div>
                    <TurnstileField onTokenChange={(token) => { turnstileToken.current = token }} />
                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                      {loading ? t.submitting : t.submit}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      {t.footWhatsApp}{" "}
                      <a
                        href={WA_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-green-600"
                      >
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
