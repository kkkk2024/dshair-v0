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
  CheckCircle2, Truck, Gift, Star, Users, Palette,
  MessageCircle, ShieldCheck, ArrowRight, Building2
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const benefits = [
  {
    icon: ShieldCheck,
    title: "Wholesale Trade Pricing",
    description: "30–50% below retail. Direct factory pricing with no middlemen.",
  },
  {
    icon: Gift,
    title: "Free Colour Matching Kit",
    description: "Every new salon partner receives a professional colour matching kit — worth £45, completely free.",
  },
  {
    icon: Truck,
    title: "Same/Next-Day Manchester Supply",
    description: "We are local. No waiting weeks for stock. Fast turnaround keeps your clients on schedule.",
  },
  {
    icon: Palette,
    title: "Custom Colour Matching",
    description: "Our specialist will visit your salon for a free in-person colour consultation. We match your clients precisely.",
  },
  {
    icon: Users,
    title: "No Minimum Order to Start",
    description: "Start small, scale as you grow. No pressure to over-stock. Order what you need, when you need it.",
  },
  {
    icon: Star,
    title: "Priority Access to New Stock",
    description: "Partners get first access to new hand-tied wefts, balayage blends, and seasonal colours before general release.",
  },
  {
    icon: Users,
    title: "Ambassador Programme",
    description: "Refer other salons and earn commission. Bronze, Silver, and Gold tiers with increasing rewards.",
    highlight: true,
  },
]

const products = [
  {
    name: "Hand-Tied Weft",
    tag: "Most Requested",
    description: "Ultra-thin, flat lay. Perfect for fine and medium hair. White salon clients love the invisible result.",
    price: "From £X/bundle trade",
  },
  {
    name: "Balayage Weft",
    tag: "Trending",
    description: "Custom balayage colour blending. Ready to install — no additional colouring needed at the salon.",
    price: "From £X/bundle trade",
  },
  {
    name: "Nano Ring Extensions",
    tag: "Best Seller",
    description: "No heat, no glue. The most popular professional method in Manchester salons.",
    price: "From £X/pack trade",
  },
  {
    name: "Tape-In Extensions",
    tag: "Classic",
    description: "Quick application, seamless blend. Our pro-grade tape lasts 6–8 weeks with proper care.",
    price: "From £X/pack trade",
  },
  {
    name: "K-Tip Keratin Extensions",
    tag: "Premium",
    description: "Individual strand application for a completely natural result. 100% Remy cuticle-aligned.",
    price: "From £X/100 strands trade",
  },
  {
    name: "Hair Topper",
    tag: "Specialist",
    description: "Crown coverage for thinning hair. Rapidly growing demand — an underserved niche.",
    price: "From £X trade",
  },
]

const steps = [
  {
    num: "01",
    title: "Fill in the Application",
    desc: "Tell us about your salon — name, location, and the methods you specialise in. Takes 2 minutes.",
  },
  {
    num: "02",
    title: "We Review & Contact You",
    desc: "We respond within 24 hours via WhatsApp or email with your trade price list.",
  },
  {
    num: "03",
    title: "Receive Your Welcome Kit",
    desc: "Your free colour matching kit ships with your first order. We can also arrange a free salon visit in Manchester.",
  },
  {
    num: "04",
    title: "Start Supplying Your Clients",
    desc: "Place orders as you need them. No minimum, no pressure. We grow with you.",
  },
]

export default function SalonPartnersPage() {
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
      methods: formData.getAll("methods"),
      monthlySpend: formData.get("monthly_spend"),
      currentSupplier: formData.get("current_supplier"),
      howFoundUs: formData.get("how_found_us"),
      instagram: formData.get("instagram"),
      notes: formData.get("notes"),
    }

    try {
      const response = await fetch("/api/salon-partners", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to submit")
      setSubmitted(true)
    } catch (err) {
      alert("Failed to submit. Please try again or contact us via WhatsApp.")
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
                  <span className="text-sm font-medium">Manchester Salon Partner Programme</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  Your Local Hair Extension Supplier. Trade Prices. No Minimums.
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  Join Manchester&apos;s growing network of professional salons. Get wholesale pricing on 100% Remy human hair extensions — with same or next-day local supply.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="#apply">Apply for Trade Account</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white bg-black/30 hover:bg-white hover:text-black" asChild>
                    <a
                      href="https://wa.me/8613516946001?text=Hi!%20I%27m%20a%20salon%20owner%20in%20Manchester%20and%20I%27d%20like%20to%20know%20more%20about%20your%20wholesale%20hair%20extension%20supply."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Us First
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
                {[
                  { stat: "19+", label: "Years Supply Experience" },
                  { stat: "£0", label: "Minimum First Order" },
                  { stat: "24hr", label: "Manchester Delivery" },
                  { stat: "Free", label: "Colour Matching Kit" },
                ].map((item) => (
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
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">What You Get as a Partner</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  More than a supplier. A business partner who wants your salon to succeed.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((b) => (
                  <div key={b.title} className={`bg-card rounded-xl p-6 border hover:shadow-md transition-shadow ${b.highlight ? 'ring-2 ring-primary bg-primary/5' : ''}`}>
                    <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <b.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{b.description}</p>
                    {b.highlight && (
                      <Button size="sm" variant="outline" className="w-full" asChild>
                        <Link href="/ambassador">Learn More →</Link>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Products for Salons */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Products for Professional Salons</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Specialising in the methods Manchester&apos;s white hair salons demand most.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((p) => (
                  <div key={p.name} className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg">{p.name}</h3>
                      <span className="text-xs font-medium bg-primary/10 text-primary rounded-full px-2 py-0.5 ml-2 flex-shrink-0">
                        {p.tag}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
                    <p className="text-xs text-muted-foreground border-t pt-3">
                      Trade pricing available after account approval
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button asChild>
                  <Link href="/collections/professional">
                    Browse All Professional Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">How to Get Started</h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  Simple, fast, no commitment required to apply.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {steps.map((step, i) => (
                  <div key={step.num} className="relative text-center">
                    <div className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
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
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Apply for a Trade Account</h2>
                  <p className="text-muted-foreground text-lg">
                    Fill in the form below — we will be in touch within 24 hours with your trade price list.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-card rounded-2xl p-10 text-center border">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium mb-2">Application Received!</h3>
                    <p className="text-muted-foreground mb-2">
                      Thank you — we will send your trade price list within 24 hours.
                    </p>
                    <p className="text-muted-foreground text-sm mb-6">
                      For faster response, message us directly on WhatsApp:
                    </p>
                    <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                      <a
                        href="https://wa.me/8613516946001?text=Hi!%20I%20just%20submitted%20a%20salon%20partner%20application%20on%20your%20website."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Follow Up on WhatsApp
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
                      <Input name="location" placeholder="e.g. Didsbury, Manchester / Salford" required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Email Address *</label>
                        <Input name="email" type="email" placeholder="you@yoursalon.co.uk" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">WhatsApp / Phone *</label>
                        <Input name="phone" type="tel" placeholder="+44 7xxx xxxxxx" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Extension Methods You Offer</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {["Hand-Tied Weft","Nano Ring","Tape-In","K-Tip","Balayage","Clip-In"].map((method) => (
                          <label key={method} className="flex items-center gap-2 text-sm cursor-pointer">
                            <input type="checkbox" name="methods" value={method} className="rounded" />
                            {method}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Estimated Monthly Spend on Hair Extensions</label>
                      <select name="monthly_spend" className="w-full rounded-md border px-3 py-2 text-sm bg-background">
                        <option value="">Select range</option>
                        <option value="under-500">Under £500</option>
                        <option value="500-1500">£500 – £1,500</option>
                        <option value="1500-5000">£1,500 – £5,000</option>
                        <option value="over-5000">Over £5,000</option>
                      </select>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">Help us serve you better</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1.5">Current Supplier</label>
                          <Input
                            name="current_supplier"
                            placeholder="e.g. Gold Hair / Great Lengths / None yet"
                          />
                          <p className="text-xs text-muted-foreground mt-1">Helps us understand your current setup</p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1.5">How did you find us?</label>
                          <select
                            name="how_found_us"
                            className="w-full rounded-md border px-3 py-2 text-sm bg-background"
                          >
                            <option value="">Select one</option>
                            <option value="google">Google Search</option>
                            <option value="instagram">Instagram</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="referral">Word of Mouth / Referral</option>
                            <option value="trade-show">Trade Show / Event</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium mb-1.5">Salon Instagram (optional)</label>
                        <Input
                          name="instagram"
                          placeholder="@yoursalon"
                        />
                        <p className="text-xs text-muted-foreground mt-1">We will follow you back — let's connect</p>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Anything else you would like us to know?</label>
                      <Textarea
                        name="notes"
                        placeholder="Questions, specific needs, or anything you want us to know..."
                        rows={3}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                      {loading ? "Submitting..." : "Submit Application"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Prefer to chat first?{" "}
                      <a
                        href="https://wa.me/8613516946001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-green-600"
                      >
                        Message us on WhatsApp
                      </a>{" "}
                      — we respond within 2 hours.
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
