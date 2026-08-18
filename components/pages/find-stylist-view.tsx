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
  CheckCircle2, MapPin, Instagram, Globe, Scissors,
  Star, ArrowRight, Users, Heart, Award, Clock,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { HoneypotField, TurnstileField } from "@/components/antispam/spam-fields"
import { getFindStylistContent, type FindStylistContent } from "@/lib/i18n/pages/find-stylist"
import type { Locale } from "@/lib/i18n/config"

const benefitIcons = [Users, Award, Heart, Clock]
const methodOptions = [
  "Hand-Tied Weft",
  "Tape-In Extensions",
  "K-Tip / Keratin Extensions",
  "Nano Ring Extensions",
  "Butterfly Weft",
  "Clip-In (Retail to Clients)",
  "Hair Toppers",
  "Balayage Extensions",
]
const stepNums = ["01", "02", "03"]
const yearValues = ["", "under-1", "1-3", "3-5", "5-10", "over-10"]

export function FindStylistView({ locale }: { locale: Locale }) {
  const c: FindStylistContent = getFindStylistContent(locale)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
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
      instagram: formData.get("instagram"),
      website: formData.get("website"),
      methods: formData.getAll("methods"),
      yearsExperience: formData.get("years_experience"),
      about: formData.get("about"),
      turnstileToken: turnstileToken.current,
      submitTime: formMountedAt.current,
    }
    try {
      const response = await fetch("/api/find-stylist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error("Failed to submit")
      setSubmitted(true)
    } catch {
      alert("Something went wrong. Please try again or contact us via WhatsApp.")
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
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1920&q=80"
                alt="Find a Hair Extension Stylist Near You"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6">
                  <Scissors className="h-4 w-4" />
                  <span className="text-sm font-medium">{c.heroBadge}</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  {c.heroTitle}
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  {c.heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="#stylists">{c.browseCta}</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white bg-black/30 hover:bg-white hover:text-black" asChild>
                    <a href="#apply">{c.applyCta}</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.benefitsTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {c.benefitsSubtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {c.benefits.map((b, i) => {
                  const Icon = benefitIcons[i]
                  return (
                    <div key={b.title} className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Stylists Coming Soon */}
          <section id="stylists" className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.featuredTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {c.featuredSubtitle}
                </p>
              </div>

              <div className="bg-card rounded-2xl border p-10 text-center">
                <Scissors className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-medium mb-2">{c.comingSoonTitle}</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  {c.comingSoonDesc}
                </p>
                <Button asChild>
                  <a href="#apply">
                    {c.comingSoonCta} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.howTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  {c.howSubtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {c.steps.map((step, i) => (
                  <div key={step.title} className="relative text-center">
                    <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {stepNums[i]}
                    </div>
                    {i < c.steps.length - 1 && (
                      <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-0 h-px bg-border" />
                    )}
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
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
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.applyTitle}</h2>
                  <p className="text-muted-foreground text-lg">
                    {c.applySubtitle}
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-card rounded-2xl p-10 text-center border">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium mb-2">{c.successTitle}</h3>
                    <p className="text-muted-foreground mb-2">
                      {c.successMsg1}
                    </p>
                    <p className="text-muted-foreground text-sm mb-6">
                      {c.successMsg2}
                    </p>
                    <Button variant="outline" asChild>
                      <a href="https://instagram.com/dshairbeauty" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4 mr-2" />
                        {c.successFollowCta}
                      </a>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border space-y-5">
                    <HoneypotField />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">{c.nameLabel}</label>
                        <Input name="name" placeholder={c.namePlaceholder} required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">{c.salonLabel}</label>
                        <Input name="salon_name" placeholder={c.salonPlaceholder} required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">{c.locationLabel}</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input name="location" placeholder={c.locationPlaceholder} className="pl-9" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">{c.emailLabel}</label>
                        <Input name="email" type="email" placeholder={c.emailPlaceholder} required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">{c.phoneLabel}</label>
                        <Input name="phone" type="tel" placeholder={c.phonePlaceholder} required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">
                          {c.instagramLabel}
                        </label>
                        <div className="relative">
                          <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input name="instagram" placeholder={c.instagramPlaceholder} className="pl-9" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">{c.websiteLabel}</label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input name="website" placeholder={c.websitePlaceholder} className="pl-9" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">{c.methodsLabel}</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {methodOptions.map((method) => (
                          <label key={method} className="flex items-center gap-2 text-sm cursor-pointer">
                            <input type="checkbox" name="methods" value={method} className="rounded" />
                            {method}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">{c.yearsLabel}</label>
                      <select name="years_experience" className="w-full rounded-md border px-3 py-2 text-sm bg-background">
                        {c.yearsOptions.map((opt, i) => (
                          <option key={yearValues[i]} value={yearValues[i]}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">{c.aboutLabel}</label>
                      <Textarea
                        name="about"
                        placeholder={c.aboutPlaceholder}
                        rows={3}
                      />
                    </div>

                    <TurnstileField onTokenChange={(token) => { turnstileToken.current = token }} />
                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                      {loading ? c.submittingBtn : c.submitBtn}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      {c.formNote}
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
