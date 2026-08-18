"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, GraduationCap, Award, Globe, Star, Clock } from "lucide-react"
import Image from "next/image"
import { getAcademyContent, type AcademyContent } from "@/lib/i18n/pages/academy"
import type { Locale } from "@/lib/i18n/config"

const featureIcons = [
  { Icon: Award, wrap: "bg-amber-100", icon: "text-amber-600" },
  { Icon: Star, wrap: "bg-blue-100", icon: "text-blue-600" },
  { Icon: Globe, wrap: "bg-green-100", icon: "text-green-600" },
  { Icon: GraduationCap, wrap: "bg-purple-100", icon: "text-purple-600" },
  { Icon: Clock, wrap: "bg-rose-100", icon: "text-rose-600" },
  { Icon: CheckCircle2, wrap: "bg-teal-100", icon: "text-teal-600" },
]

export function AcademyView({ locale }: { locale: Locale }) {
  const c: AcademyContent = getAcademyContent(locale)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative h-[600px] md:h-[700px] flex items-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
                alt="International Hair Extension Academy"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6">
                  <GraduationCap className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">{c.heroBadge}</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight text-white">
                  {c.heroTitleLine1}
                  <br />
                  <span className="text-amber-300">{c.heroTitleHighlight}</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                  {c.heroSubtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-black hover:bg-white/90">
                    <a href="#waitlist">{c.waitlistCta}</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white bg-black/30 hover:bg-white hover:text-black" asChild>
                    <a href="#about">{c.learnMoreCta}</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Partner Badge */}
          <section className="py-8 bg-card border-b">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{c.poweredByLabel}</div>
                  <div className="text-2xl md:text-3xl font-serif font-semibold">{c.partner1Name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{c.partner1Sub}</div>
                </div>
                <div className="hidden md:block h-12 w-px bg-border" />
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{c.partnerWithLabel}</div>
                  <div className="text-2xl md:text-3xl font-serif font-semibold">{c.partner2Name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{c.partner2Sub}</div>
                </div>
              </div>
            </div>
          </section>

          {/* What Makes This Special */}
          <section id="about" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.whyTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{c.whySubtitle}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {c.features.map((f, i) => {
                  const meta = featureIcons[i % featureIcons.length]
                  return (
                    <div key={i} className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                      <div className={`h-12 w-12 rounded-full ${meta.wrap} flex items-center justify-center mb-5`}>
                        <meta.Icon className={`h-6 w-6 ${meta.icon}`} />
                      </div>
                      <h3 className="font-semibold text-lg mb-3">{f.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* The Partnership Story */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary font-medium mb-3">{c.storyEyebrow}</div>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">{c.storyTitle}</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {c.storyParas.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-8 border">
                  <h3 className="font-semibold text-xl mb-6">{c.credentialsTitle}</h3>
                  <div className="space-y-4">
                    {c.credentials.map((cr, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{cr.title}</div>
                          <div className="text-sm text-muted-foreground">{cr.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Waitlist Section */}
          <section id="waitlist" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="max-w-xl mx-auto">
                <div className="bg-card rounded-2xl p-8 md:p-10 border text-center">
                  {submitted ? (
                    <div>
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-serif text-2xl font-medium mb-3">{c.successTitle}</h3>
                      <p className="text-muted-foreground mb-4">{c.successMsg}</p>
                      <p className="text-sm text-muted-foreground">
                        {c.successContactLabel}{" "}
                        <a href={`mailto:${c.successContactEmail}`} className="text-primary underline">
                          {c.successContactEmail}
                        </a>
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <GraduationCap className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-serif text-2xl font-medium mb-3">{c.waitlistTitle}</h3>
                      <p className="text-muted-foreground mb-8">{c.waitlistSubtitle}</p>
                      <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1.5">{c.nameLabel}</label>
                          <Input
                            id="name"
                            type="text"
                            placeholder={c.namePlaceholder}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1.5">{c.emailLabel}</label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={c.emailPlaceholder}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <Button type="submit" size="lg" className="w-full" disabled={loading}>
                          {loading ? c.submittingBtn : c.submitBtn}
                        </Button>
                        <p className="text-xs text-muted-foreground text-center">{c.privacyNote}</p>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Preview */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.faqTitle}</h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-6">
                {c.faqs.map((f, i) => (
                  <div key={i} className="bg-card rounded-xl p-6 border">
                    <h3 className="font-semibold mb-2">{f.q}</h3>
                    <p className="text-muted-foreground text-sm">{f.a}</p>
                  </div>
                ))}
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
