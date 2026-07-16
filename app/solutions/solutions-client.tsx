"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import {
  Scissors, Package, Palette, BookOpen,
  ArrowRight, CheckCircle2, Users, Lightbulb, Wrench, Shirt
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const extensionPackages = [
  {
    icon: Scissors,
    title: "Tape-In Starter Kit",
    description: "Everything needed to offer professional tape-in extensions in-salon. Includes tape-ins, adhesive, pliers, tension comb, and care range.",
    includes: ["Tape-In Extensions (20 straps)", "Professional Tape Adhesive", "Tape-In Application Pliers", "Tension Combs", "Sulfate-Free Shampoo & Conditioner", "Tape Remover"],
    level: "Beginner",
    price: "From £280 trade",
    href: "/collections/tape-in",
    tag: "Most Popular",
  },
  {
    icon: Users,
    title: "Hand-Tied Weft Bundle",
    description: "Complete weft extension package for salons ready to offer the premium hand-tied method. Includes wefts, beads, tools and aftercare.",
    includes: ["Hand-Tied Wefts (3 bundles)", "Micro Beads & Liners", "Pull-Through Tool", "Bead Crimp Pliers", "Extension-Safe Brush", "Colour-Protect Mask"],
    level: "Advanced",
    price: "From £450 trade",
    href: "/collections/weft",
    tag: "Premium",
  },
  {
    icon: Lightbulb,
    title: "Balayage Colour Kit",
    description: "Matched balayage wefts and tapes ready to install — no salon colour matching needed. Instant premium results for your clients.",
    includes: ["Balayage Hand-Tied Wefts", "Balayage Tape-Ins", "Blending Brushes", "Toning Serum", "Colour-Protect Shampoo"],
    level: "All Levels",
    price: "From £320 trade",
    href: "/collections/butterfly-weft",
    tag: "Trending",
  },
  {
    icon: Shirt,
    title: "Full Extension Method Set",
    description: "One salon-ready bundle covering Tape-In, K-Tip, Nano Ring and Weft methods. Perfect for salons expanding their service offering.",
    includes: ["Tape-In (20 straps)", "K-Tip Extensions (100 strands)", "Nano Ring Beads (500pc)", "Hand-Tied Weft (2 bundles)", "All Application Tools", "Aftercare Starter Pack"],
    level: "Full Service",
    price: "From £680 trade",
    href: "/collections/professional",
    tag: "Best Value",
  },
]

const salonServices = [
  {
    icon: Palette,
    title: "Colour Matching Service",
    description: "Free in-salon or virtual colour matching consultation. We help you find the perfect match for every client — every time.",
  },
  {
    icon: Wrench,
    title: "Tool & Equipment Packages",
    description: "Professional-grade application tools, styling brushes and salon storage. Everything extension stylists need in one place.",
  },
  {
    icon: BookOpen,
    title: "Method Training Referrals",
    description: "We connect salon partners with certified training courses for advanced extension methods. Upskill your team with confidence.",
  },
  {
    icon: Package,
    title: "Reorder Bundles",
    description: "Easy restocking bundles for ongoing salon supply. Order the same combination each time — consistent quality, every batch.",
  },
]

export default function SolutionsPage() {
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
                alt="Hair Extension Solutions for Salons"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6">
                  <Package className="h-4 w-4" />
                  <span className="text-sm font-medium">Salon Extension Solutions</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  Complete Hair Extension Packages for Professional Salons
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  Everything your salon needs to offer premium hair extension services — from starter kits to full method bundles. Trade pricing. No minimums.
                </p>
                <Button size="lg" asChild>
                  <Link href="#packages">Browse Extension Packages</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Extension Packages */}
          <section id="packages" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Salon Extension Packages</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Ready-to-go bundles covering every extension method. Everything included — so you can focus on your clients.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {extensionPackages.map((pkg) => (
                  <div key={pkg.title} className="bg-card rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <pkg.icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-xs font-medium bg-primary text-primary-foreground rounded-full px-3 py-1">
                          {pkg.tag}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl font-medium mb-2">{pkg.title}</h3>
                      <span className="inline-block text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-0.5 mb-3">
                        {pkg.level}
                      </span>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{pkg.description}</p>
                      <div className="space-y-2 mb-6">
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">What&apos;s Included:</p>
                        {pkg.includes.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-sm font-medium text-muted-foreground">{pkg.price}</span>
                        <Button asChild>
                          <Link href={pkg.href}>
                            View Products <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* More Services */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">More Than Just Products</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We support salon partners with the services and knowledge needed to build a successful extension business.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {salonServices.map((service) => (
                  <div key={service.title} className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow text-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button asChild>
                  <Link href="/salon-partners">
                    Join Salon Partner Programme <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-primary-foreground">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Ready to Build Your Extension Offering?</h2>
                <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
                  Join 100+ UK salons already partnered with D.S Hair & Beauty. Get trade pricing, free colour matching, and dedicated support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/salon-partners">Join Salon Partner Programme</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link href="/collections/professional">Browse All Professional Products</Link>
                  </Button>
                </div>
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
