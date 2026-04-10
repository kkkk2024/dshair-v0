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
  CheckCircle2, MapPin, Instagram, Globe, Scissors,
  Star, ArrowRight, Users, Heart, Award, Clock
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const benefits = [
  {
    icon: Users,
    title: "Reach New Clients",
    description: "Get discovered by clients actively searching for extension services in your area via dshairbeauty.co.uk.",
  },
  {
    icon: Award,
    title: "Build Your Credibility",
    description: "Be listed alongside quality extension suppliers. Shows clients you work with professional-grade products.",
  },
  {
    icon: Heart,
    title: "Join a Community",
    description: "Connect with fellow extension stylists across the UK. Share techniques, trends and supplier tips.",
  },
  {
    icon: Clock,
    title: "Quick & Free to Apply",
    description: "Simple 3-minute application. No fees, no obligations. Approved stylists listed within 48 hours.",
  },
]

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

const steps = [
  { num: "01", title: "Fill in the Application", desc: "Tell us about your salon, your location, the methods you offer, and your social channels. Takes 3 minutes." },
  { num: "02", title: "We Review Your Profile", desc: "We check your Instagram or website to verify quality and professionalism. We respond within 48 hours." },
  { num: "03", title: "Get Listed on dshairbeauty.co.uk", desc: "Approved stylists appear in our Find a Stylist directory — with a direct link to your Instagram or booking page." },
]

export default function FindStylistPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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
                  <span className="text-sm font-medium">Find a Stylist Directory</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  Find a Hair Extension Stylist Near You
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  Browse verified UK stylists specialising in professional hair extensions. From tape-ins to hand-tied wefts — find the right professional for your look.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="#stylists">Browse Stylists</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white bg-black/30 hover:bg-white hover:text-black" asChild>
                    <a href="#apply">Apply to Be Listed</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Are You a Hair Extension Stylist?</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Apply to be listed in our Find a Stylist directory. Free to join — reach clients actively searching for extension services near you.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {benefits.map((b) => (
                  <div key={b.title} className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <b.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stylists Coming Soon */}
          <section id="stylists" className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Featured Extension Stylists</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Verified stylists offering professional hair extension services across the UK. New stylists added regularly.
                </p>
              </div>

              {/* Placeholder state — will show real stylists once approved */}
              <div className="bg-card rounded-2xl border p-10 text-center">
                <Scissors className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-medium mb-2">Stylists Directory Coming Soon</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  We are reviewing applications and building our directory of verified extension stylists. Apply below to be one of the first listed.
                </p>
                <Button asChild>
                  <a href="#apply">
                    Apply to Be Listed <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">How It Works</h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  From application to listing — a simple 3-step process. No fees, no obligations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {steps.map((step, i) => (
                  <div key={step.num} className="relative text-center">
                    <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
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
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Apply to Be Listed</h2>
                  <p className="text-muted-foreground text-lg">
                    Fill in the form below. We review every application and respond within 48 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-card rounded-2xl p-10 text-center border">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium mb-2">Application Received!</h3>
                    <p className="text-muted-foreground mb-2">
                      Thank you — we will review your application and get back to you within 48 hours.
                    </p>
                    <p className="text-muted-foreground text-sm mb-6">
                      Follow us on Instagram for industry tips and trends:
                    </p>
                    <Button variant="outline" asChild>
                      <a href="https://instagram.com/dshairbeauty" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-4 w-4 mr-2" />
                        Follow @dshairbeauty
                      </a>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Your Name *</label>
                        <Input name="name" placeholder="First & Last Name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Salon Name *</label>
                        <Input name="salon_name" placeholder="e.g. The Hair Studio" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">Salon Location *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input name="location" placeholder="e.g. Didsbury, Manchester" className="pl-9" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Email Address *</label>
                        <Input name="email" type="email" placeholder="you@yoursalon.co.uk" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Phone / WhatsApp</label>
                        <Input name="phone" type="tel" placeholder="+44 7xxx xxxxxx" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">
                          Instagram *
                        </label>
                        <div className="relative">
                          <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input name="instagram" placeholder="@yoursalon" className="pl-9" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Website / Booking Link</label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input name="website" placeholder="https://yoursalon.co.uk" className="pl-9" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">Extension Methods You Offer *</label>
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
                      <label className="block text-sm font-medium mb-1.5">Years of Extension Experience</label>
                      <select name="years_experience" className="w-full rounded-md border px-3 py-2 text-sm bg-background">
                        <option value="">Select range</option>
                        <option value="under-1">Under 1 year</option>
                        <option value="1-3">1–3 years</option>
                        <option value="3-5">3–5 years</option>
                        <option value="5-10">5–10 years</option>
                        <option value="over-10">Over 10 years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5">Tell Us About Your Extension Work</label>
                      <Textarea
                        name="about"
                        placeholder="Briefly describe your extension services, your speciality, and what sets your work apart..."
                        rows={3}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                      {loading ? "Submitting..." : "Submit Application"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      No fees. No obligations. Free to apply. We will contact you within 48 hours.
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
