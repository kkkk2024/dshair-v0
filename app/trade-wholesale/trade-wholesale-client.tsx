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

export default function TradeWholesaleClient() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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
      alert("Failed to submit. Please try again or contact us via WhatsApp.")
    } finally {
      setLoading(false)
    }
  }

  const whyChooseUs = [
    {
      icon: ShieldCheck,
      title: "100% Remy Human Hair",
      description:
        "Ethically sourced, consistent quality. Every strand is cuticle-aligned for a natural, seamless blend with your clients' hair.",
    },
    {
      icon: Package,
      title: "Full Product Range",
      description:
        "Tape-In, K-Tip, Weft, Butterfly Weft, Hair Toppers & Accessories. One supplier for every method your salon offers.",
    },
    {
      icon: MapPin,
      title: "Manchester-Based",
      description:
        "Local support, fast dispatch. Same-day or next-day delivery across the UK. No long waits, no overseas delays.",
    },
    {
      icon: BadgeCheck,
      title: "Trade Accounts Available",
      description:
        "Dedicated wholesale pricing for registered salons. No middlemen, no inflated retail prices — straight from the source.",
    },
  ]

  const productRange = [
    { type: "Tape-In", minimum: "10 sets", leadTime: "Same day dispatch" },
    { type: "K-Tip", minimum: "50 grams", leadTime: "1–2 days" },
    { type: "Weft", minimum: "3 pieces", leadTime: "Same day dispatch" },
    { type: "Butterfly Weft", minimum: "3 pieces", leadTime: "Same day dispatch" },
    { type: "Hair Toppers", minimum: "1 piece", leadTime: "Same day dispatch" },
  ]

  const steps = [
    {
      num: "01",
      title: "Contact Us with Your Salon Details",
      desc: "Send us your salon name, location, and a brief intro. Takes 2 minutes via the form below or WhatsApp.",
    },
    {
      num: "02",
      title: "We Set Up Your Trade Account",
      desc: "We create your trade account and send a welcome sample pack so you can feel the quality before ordering.",
    },
    {
      num: "03",
      title: "Order Online with Trade Pricing",
      desc: "Access your exclusive trade prices, place orders anytime, and get dedicated support from a real person.",
    },
  ]

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
                  <span className="text-sm font-medium">Wholesale / Trade</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  Wholesale Hair Extensions for UK Salons
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  100% Remy human hair. 19 years of expertise. Trusted by stylists across the UK.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-white text-black hover:bg-white/90">
                    <a href="#open-account">Open Your Trade Account</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white bg-black/30 hover:bg-white hover:text-black"
                    asChild
                  >
                    <a
                      href="https://wa.me/8613516946001?text=Hi!%20I%27m%20a%20salon%20owner%20in%20the%20UK.%20I%27d%20like%20to%20open%20a%20trade%20account%20for%20wholesale%20hair%20extensions."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
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
                  { stat: "19+", label: "Years Industry Experience" },
                  { stat: "100%", label: "Remy Human Hair" },
                  { stat: "Next Day", label: "UK-Wide Delivery" },
                  { stat: "No Min.", label: "First Order Required" },
                ].map((item) => (
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
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Why Salons Choose Us</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Not just a supplier — a long-term partner who understands the salon business.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyChooseUs.map((item) => (
                  <div
                    key={item.title}
                    className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow text-center"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Product Range Table */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Product Range Overview</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  From Tape-In to Butterfly Weft — everything your salon needs, in stock and ready to dispatch.
                </p>
              </div>
              <div className="max-w-3xl mx-auto overflow-x-auto">
                <table className="w-full bg-card rounded-xl border overflow-hidden">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="text-left px-6 py-4 text-sm font-medium">Product Type</th>
                      <th className="text-left px-6 py-4 text-sm font-medium">Minimum Order</th>
                      <th className="text-left px-6 py-4 text-sm font-medium">Typical Lead Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {productRange.map((row) => (
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
              <p className="text-center text-sm text-muted-foreground mt-6">
                Need something not listed?{" "}
                <a href="mailto:info@dshairbeauty.co.uk" className="text-primary underline">
                  Contact us
                </a>{" "}
                — we may be able to source it.
              </p>
            </div>
          </section>

          {/* How to Open a Trade Account */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">How to Open a Trade Account</h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  Simple, fast, no commitment required to apply.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {steps.map((step, i) => (
                  <div key={step.num} className="relative text-center">
                    <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-5">
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
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
                <div>
                  <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold mb-1">4.9/5 Salon Rating</div>
                  <p className="text-sm text-muted-foreground">Trusted by hundreds of UK salons</p>
                </div>
                <div>
                  <Scissors className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold mb-1">Professional Grade</div>
                  <p className="text-sm text-muted-foreground">100% Remy, cuticle-aligned hair</p>
                </div>
                <div>
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-semibold mb-1">Same Day Dispatch</div>
                  <p className="text-sm text-muted-foreground">Order before 3pm, ships today</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA / Contact Form */}
          <section id="open-account" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Open Your Trade Account Today</h2>
                  <p className="text-muted-foreground text-lg">
                    Fill in the form below — we will respond within 24 hours with your trade pricing.
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Or email us directly:{" "}
                    <a href="mailto:info@dshairbeauty.co.uk" className="text-primary underline">
                      info@dshairbeauty.co.uk
                    </a>
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
                    <p className="text-muted-foreground text-sm mb-6">For faster response, reach us directly on WhatsApp:</p>
                    <Button className="bg-green-500 hover:bg-green-600 text-white" asChild>
                      <a
                        href="https://wa.me/8613516946001?text=Hi!%20I%20just%20submitted%20a%20trade%20account%20application%20on%20your%20website."
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
                      <label className="block text-sm font-medium mb-1.5">Email Address *</label>
                      <Input name="email" type="email" placeholder="you@yoursalon.co.uk" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Message (optional)</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your salon, the extension methods you offer, or any questions you have..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={loading}>
                      {loading ? "Submitting..." : "Open My Trade Account"}
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
