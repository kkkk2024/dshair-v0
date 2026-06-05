"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import {
  BookOpen, TrendingUp, GraduationCap, HelpCircle,
  ArrowRight, Clock, Users, Award
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const expertGuides = [
  {
    category: "Extension Methods",
    title: "Tape-In vs K-Tip vs Weft: Which Method Is Right for Your Clients?",
    description: "A practical guide comparing tape-in, K-tip keratin and hand-tied weft extensions — covering client suitability, application time, cost and aftercare.",
    readTime: "8 min read",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    href: "/faqs",
  },
  {
    category: "Salon Business",
    title: "How to Add Hair Extensions to Your Salon Without Overstocking",
    description: "Smart inventory strategy for salons new to extensions. Learn how to start with minimal investment and scale as demand grows.",
    readTime: "6 min read",
    level: "Business",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80",
    href: "/salon-partners",
  },
  {
    category: "Colour Matching",
    title: "The Complete Guide to Matching Hair Extensions to Natural Hair",
    description: "From identifying undertones to blending balayage clients — everything stylists need to know about achieving seamless colour matches.",
    readTime: "10 min read",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    href: "/colour-match",
  },
  {
    category: "Aftercare",
    title: "Extension Aftercare: What Every Client Needs to Know",
    description: "A printable client guide covering washing, brushing, sleeping and maintaining tape-in, K-tip and weft extensions between appointments.",
    readTime: "5 min read",
    level: "Essential",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=600&q=80",
    href: "/collections/extension-care",
  },
]

const industryInsights = [
  { stat: "£1.2B+", label: "UK Hair Extension Market Size", source: "Industry Report 2025" },
  { stat: "34%", label: "Year-on-Year Growth in Weft Extensions", source: "UK Beauty Industry Data" },
  { stat: "8–12 weeks", label: "Average Extension Lifespan", source: "Professional Standard" },
  { stat: "60%+", label: "Clients Requesting Natural Colour", source: "D.S Hair Beauty Client Survey" },
]

const knowledgeCategories = [
  {
    icon: GraduationCap,
    title: "Extension Method Guides",
    items: [
      "Tape-In Application & Removal",
      "K-Tip Keratin Bonding Technique",
      "Nano Ring Installation",
      "Hand-Tied Weft Sewing-In",
      "Butterfly Weft for Volume",
    ],
    href: "/faqs",
  },
  {
    icon: TrendingUp,
    title: "Industry Insights",
    items: [
      "UK Hair Extension Market Trends 2025",
      "Why Remy Hair Matters",
      "The Rise of Weft Extensions in UK Salons",
      "Balayage Extensions: A Growing Demand",
    ],
    href: "/blog",
  },
  {
    icon: BookOpen,
    title: "Product Knowledge",
    items: [
      "Understanding Hair Grade & Quality",
      "100% Remy vs Non-Remy: What&apos;s the Difference?",
      "How to Care for Hair Extensions",
      "Storage & Longevity Tips",
    ],
    href: "/collections/extension-care",
  },
  {
    icon: HelpCircle,
    title: "FAQs & Troubleshooting",
    items: [
      "Client Suitability Assessment",
      "Common Extension Problems & Fixes",
      "Extension Removal Best Practices",
      "Aftercare Product Recommendations",
    ],
    href: "/faqs",
  },
]

export default function ResourcesPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">

          {/* Hero */}
          <section className="relative h-[520px] md:h-[600px] flex items-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
                alt="Hair Extension Resources & Industry Insights for Salons"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm font-medium">Expert Knowledge Hub</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  Resources & Insights for Hair Extension Professionals
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  Expert guides, industry data and product knowledge for salon professionals and procurement teams. Stay ahead in the hair extension industry.
                </p>
                <Button size="lg" asChild>
                  <Link href="#guides">Browse Expert Guides</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Industry Insights */}
          <section className="bg-primary text-primary-foreground py-12">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-medium mb-2">Hair Extension Industry at a Glance</h2>
                <p className="text-primary-foreground/70 text-sm">Key data for salon professionals and buyers</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {industryInsights.map((item) => (
                  <div key={item.label}>
                    <div className="text-3xl md:text-4xl font-bold">{item.stat}</div>
                    <div className="text-sm text-primary-foreground/80 mt-1 mb-1">{item.label}</div>
                    <div className="text-xs text-primary-foreground/50">{item.source}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Expert Guides */}
          <section id="guides" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Expert Guides for Salon Professionals</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Practical knowledge to help you offer better extension services, grow your salon business and stay ahead of the competition.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertGuides.map((guide) => (
                  <Link
                    key={guide.title}
                    href={guide.href}
                    className="group bg-card rounded-xl border overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur text-xs font-medium px-2 py-1 rounded-full">
                          {guide.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                        {guide.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {guide.readTime}
                        </span>
                        <span className="text-xs font-medium text-primary flex items-center gap-1">
                          Read More <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Knowledge Categories */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Browse by Topic</h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                  Curated knowledge across the key areas that matter to hair extension professionals.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {knowledgeCategories.map((cat) => (
                  <div key={cat.title} className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                      <cat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-4">{cat.title}</h3>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                    <Button variant="link" className="p-0 h-auto mt-4 text-primary" asChild>
                      <Link href={cat.href}>
                        View All <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="bg-secondary rounded-3xl p-10 md:p-16 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Stay Ahead of the Industry</h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                  Follow D.S Hair & Beauty for the latest extension methods, product releases and industry insights — or reach out to discuss your salon&apos;s needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">Contact Our Team</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/salon-partners">
                      Join Salon Partner Programme <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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
