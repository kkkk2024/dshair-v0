"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import {
  ShieldCheck, Clock, Users, MessageCircle,
  Factory, Truck, Star, CheckCircle2, ArrowRight,
  Download, FileText, BookOpen
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"

const comparisons = [
  {
    title: "Factory-direct pricing",
    us: "We own the production. No middlemen. You pay factory prices.",
    them: "Most UK suppliers are resellers. They mark up 30–60% before it reaches you.",
  },
  {
    title: "19 years in the industry",
    us: "We have been making hair extensions since 2007. We know quality inside out.",
    them: "New brands come and go. When they disappear, you are left holding stock your clients cannot reorder.",
  },
  {
    title: "Same/next-day Manchester delivery",
    us: "We are based in Manchester. Orders placed before 2pm ship the same day.",
    them: "Imports from China take 2–4 weeks. If a colour is wrong, you wait another month.",
  },
  {
    title: "We will not disappear on you",
    us: "19 years. Same team. Same standards. When you need us, we answer.",
    them: "Suppliers disappear mid-season. Colour lines get discontinued. You scramble for replacements.",
  },
  {
    title: "Colour matching built in",
    us: "Custom colour matching — free salon visit in Manchester. We match your clients precisely.",
    them: "Most suppliers send standard swatches. You make it work or spend hours dyeing.",
  },
  {
    title: "No minimum order pressure",
    us: "Order what you need, when you need it. No over-stocking, no pressure.",
    them: "Some suppliers force minimum orders. You end up with stock sitting on the shelf.",
  },
]

const promises = [
  {
    icon: Factory,
    title: "19 Years. Same Factory. Same You.",
    description: "We have been in this business since 2007. We have survived market shifts, product trends, and supply chain disruptions — because our quality never compromised. When you partner with us, you know exactly who you are dealing with.",
  },
  {
    icon: ShieldCheck,
    title: "100% Remy Human Hair. Always.",
    description: "Cuticle-aligned, double-drawn, minimal shedding. Every batch is checked before it leaves our facility. No mixed quality. No surprises.",
  },
  {
    icon: Clock,
    title: "We Answer. Within 2 Hours.",
    description: "Not a ticketing system. Not a generic reply. When you message us, you get a real answer from someone who knows the product and knows your account.",
  },
  {
    icon: Truck,
    title: "Manchester-Based. UK-Wide Reach.",
    description: "Same-day and next-day delivery across Manchester. Fast, reliable shipping across the UK. No cross-continental wait times.",
  },
]

export default function WhyChooseUsPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">

          {/* Hero */}
          <section className="relative h-[480px] md:h-[560px] flex items-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
                alt="Why Choose DS Hair Beauty"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6">
                  <Star className="h-4 w-4" />
                  <span className="text-sm font-medium">Not just another supplier</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  Why Salons Choose Us Over the Rest.
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  19 years making hair extensions. Direct from our factory to your salon — with the service quality that other suppliers cannot match.
                </p>
                <Button size="lg" asChild>
                  <Link href="/salon-partners#apply">
                    Apply for Trade Account <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* The comparison: Us vs Others */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                  The Difference That Matters
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Honest comparison. No fluff. Here is what you get with us vs. the average UK supplier.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {comparisons.map((item) => (
                  <div key={item.title} className="bg-card rounded-xl p-6 border">
                    <h3 className="font-semibold text-base mb-4 text-primary">
                      {item.title}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-sm leading-relaxed">
                          <span className="font-medium text-green-700">With us:</span>{" "}
                          {item.us}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-5 w-5 flex-shrink-0 mt-0.5 rounded-full bg-red-100 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <span className="font-medium text-muted-foreground">Typical UK supplier:</span>{" "}
                          {item.them}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Four core promises */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                  Four Things We Will Never Compromise On
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {promises.map((p) => (
                  <div key={p.title} className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <p.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* The real talk */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <div className="bg-primary/5 rounded-2xl p-8 md:p-10 border border-primary/20">
                  <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6">
                    The Real Talk.
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We know UK salon owners get dozens of supplier emails every month. Everyone says they have the best quality. Everyone says they have competitive prices.
                    </p>
                    <p>
                      Here is the difference with us: we have been in this industry long enough to know that the relationship matters as much as the product. A supplier who answers when you call, who sorts problems quickly, who does not disappear mid-season — that is worth more than the lowest unit price.
                    </p>
                    <p>
                      19 years. We have seen the suppliers come and go. We are still here because we never treated our partners like disposable customers.
                    </p>
                    <p className="font-medium text-foreground">
                      Try us. One order. See the difference.
                    </p>
                  </div>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild>
                      <Link href="/salon-partners#apply">
                        Apply for Trade Account
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a
                        href="https://wa.me/8613516946001?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20your%20salon%20trade%20program."
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
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-muted-foreground">
                    Quick answers to the questions we get from salon owners most often.
                  </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      q: "What is the minimum order quantity?",
                      a: "There is no minimum order pressure. Order as little or as much as you need. For most methods, a full head set is 100g, but we supply per pack so you can order exactly what your client needs.",
                    },
                    {
                      q: "What are your payment terms?",
                      a: "We offer flexible payment options for registered trade accounts. Standard terms are prepayment or 30-day net for approved accounts. Contact us to discuss terms suited to your salon's needs.",
                    },
                    {
                      q: "How long does delivery take?",
                      a: "Manchester same-day / next-day delivery for in-stock items. UK-wide standard delivery is 1–3 business days. Colour-matched or custom orders typically 3–5 business days.",
                    },
                    {
                      q: "What is your return / exchange policy for trade orders?",
                      a: "We accept exchanges for manufacturing defects within 14 days. Cut or altered hair cannot be returned. If a colour match is wrong due to our error, we cover the replacement cost.",
                    },
                    {
                      q: "Do you offer colour matching visits?",
                      a: "Yes — free on-site colour consultation for salons in Greater Manchester. For other regions, we offer virtual colour matching via WhatsApp or email with photos.",
                    },
                    {
                      q: "Can I order samples before committing to a full order?",
                      a: "Absolutely. We offer sample packs for all methods. Contact us via the trade account form and we will send you a sample set at trade pricing.",
                    },
                    {
                      q: "What methods do you supply?",
                      a: "We supply full product lines in: Clip-In, Tape-In, Nano Ring (Micro Ring), K-Tip (I-Tip), Hand-Tied Weft, and Butterfly Weft — plus Hair Toppers and Ponytails. See our collections for the full range.",
                    },
                    {
                      q: "Do you ship outside the UK?",
                      a: "Yes — we ship throughout the EU and internationally. EU delivery is typically 3–5 business days. Contact us for a shipping quote on international orders.",
                    },
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left font-medium text-base">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Salon Toolkit */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                  Salon Toolkit
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to bring D.S Hair & Beauty into your salon — from product guides to sales materials.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    icon: FileText,
                    title: "Product Range Guide",
                    description: "Full product line overview with available colours, weights, and methods. Share with your team.",
                    comingSoon: true,
                    tag: "Coming Soon",
                  },
                  {
                    icon: BookOpen,
                    title: "Colour Swatch Cards",
                    description: "Physical colour swatch cards for your salon. Display them for clients to see and touch before ordering.",
                    comingSoon: true,
                    tag: "Coming Soon",
                  },
                  {
                    icon: Download,
                    title: "Sales Room Display Kit",
                    description: "A3 poster, product cards, and care instruction leaflets you can print and use in your salon.",
                    comingSoon: true,
                    tag: "Coming Soon",
                  },
                  {
                    icon: MessageCircle,
                    title: "WhatsApp Business Support",
                    description: "Direct WhatsApp line for quick orders, colour queries, and urgent requests. We answer fast.",
                    link: "https://wa.me/8613516946001",
                    linkLabel: "Open WhatsApp",
                  },
                  {
                    icon: Users,
                    title: "Trade Account Application",
                    description: "Apply for dedicated trade pricing, extended payment terms, and priority stock access.",
                    link: "/salon-partners",
                    linkLabel: "Apply Now",
                  },
                  {
                    icon: Star,
                    title: "Ambassador Programme",
                    description: "For stylists with a strong following. Earn commission or get exclusive discounts on your own orders.",
                    link: "/ambassador",
                    linkLabel: "Learn More",
                  },
                ].map((tool, i) => (
                  <div
                    key={i}
                    className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <tool.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-base mb-2">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {tool.description}
                    </p>
                    {tool.comingSoon ? (
                      <span className="inline-block text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                        {tool.tag}
                      </span>
                    ) : (
                      <a
                        href={tool.link}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        {tool.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    )}
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
