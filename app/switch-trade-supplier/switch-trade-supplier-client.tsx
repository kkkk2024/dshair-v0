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

const comparisonRows = [
  { feature: "Who owns the brand?", competitor: "The supplier's brand", ds: "Your salon keeps the margin and identity" },
  { feature: "Pricing structure", competitor: "Retail-premium wholesale", ds: "Factory-direct trade pricing" },
  { feature: "Private label", competitor: "Not available", ds: "Available — build your own line" },
  { feature: "Product origin", competitor: "Sourced via brand channels", ds: "Factory-direct, 19 years manufacturing" },
  { feature: "UK delivery", competitor: "Depends on supplier", ds: "Selected lines from Manchester stock; full range express 3–5 days" },
  { feature: "Account manager", competitor: "Brand rep", ds: "Direct contact with Caro Chen / production" },
]

const painPoints = [
  {
    title: "Your clients ask for a brand-name product by name",
    body: "That means they see the price online. You become a fitting service, not a brand. We help salons create their own line so clients book with you, not a product.",
  },
  {
    title: "Margins are being squeezed",
    body: "Brand-name wholesale leaves little room. Factory-direct pricing means you control your retail price and protect your profit.",
  },
  {
    title: "You're locked into one brand's range",
    body: "If they discontinue a shade or method, you're stuck. We supply across methods and can customise colours and packaging.",
  },
]

export default function SwitchTradeSupplierClient() {
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
                  <span className="text-sm font-medium">For Salon Owners Re-thinking Their Supplier</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  A Manufacturer-Direct Alternative Built for Salons, Not Consumers
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  Same salon-grade 100% Remy human hair, but sourced factory-direct. Higher margins, private label options, and a partner who grows with your salon instead of competing with it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-white text-black hover:bg-white/90">
                    <Link href="/trade-wholesale">
                      Compare Trade Pricing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white bg-black/30 hover:bg-white hover:text-black"
                    asChild
                  >
                    <a
                      href="https://wa.me/8613516946001?text=Hi!%20I%27m%20a%20salon%20owner%20looking%20for%20a%20manufacturer-direct%20hair%20extension%20supplier."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Us
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
                  Why Salons Switch to a Manufacturer-Direct Partner
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Consumer brands build their own name. We help you build yours.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {painPoints.map((p) => (
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
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Retail-Brand Supplier vs D.S Hair & Beauty</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We are not a retail brand. We are the factory-backed trade arm that helps salons keep the margin.
                </p>
              </div>
              <div className="max-w-3xl mx-auto overflow-x-auto">
                <table className="w-full bg-card rounded-xl border overflow-hidden">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="text-left px-6 py-4 text-sm font-medium">Feature</th>
                      <th className="text-left px-6 py-4 text-sm font-medium">Retail-Brand Supplier</th>
                      <th className="text-left px-6 py-4 text-sm font-medium">D.S Hair & Beauty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {comparisonRows.map((row) => (
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
                {[
                  {
                    icon: Tag,
                    title: "Better Margin",
                    desc: "Factory-direct pricing gives you room to set competitive salon prices without eating your profit.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Consistent Quality",
                    desc: "19 years of manufacturing. Cuticle-aligned Remy hair. Shipment 50 matches shipment 1.",
                  },
                  {
                    icon: Truck,
                    title: "Reliable Supply",
                    desc: "Selected lines ship from Manchester stock; full range via express DHL/UPS to the UK.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Private Label",
                    desc: "Build your own extension brand with custom packaging, shades, and labelling.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-card rounded-xl p-6 border text-center hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                Ready to Stop Reselling Someone Else's Brand?
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Apply for a trade account and we'll send you a digital colour catalogue plus tailored trade pricing. No minimum first order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-white text-black hover:bg-white/90">
                  <Link href="/trade-wholesale">Apply for Trade Account</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                  asChild
                >
                  <a
                    href="https://wa.me/8613516946001?text=Hi!%20I%27m%20interested%20in%20switching%20to%20a%20manufacturer-direct%20hair%20extension%20supplier%20for%20my%20salon."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/60 mt-6">
                Manufacturing arm: <a href="https://wigexporter.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-foreground">wigexporter.com ↗</a>
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
