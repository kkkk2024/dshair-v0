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
  CheckCircle2, Gift, Users, TrendingUp, Star, Award,
  MessageCircle, ArrowRight, Crown, Heart, Sparkles, Shield
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const tiers = [
  {
    name: "Bronze",
    icon: Shield,
    tagline: "Start Your Journey",
    colour: "text-amber-600",
    bgColour: "bg-amber-50 border-amber-200",
    requirements: [
      "Registered Trade Account",
      "First order completed",
    ],
    benefits: [
      "Wholesale trade pricing",
      "Access to all products",
      "Basic support",
    ],
    commission: "3%",
    nextLevel: "Silver",
  },
  {
    name: "Silver",
    icon: Star,
    tagline: "Growing Partner",
    colour: "text-gray-500",
    bgColour: "bg-gray-100 border-gray-300",
    popular: true,
    requirements: [
      "Registered Trade Account",
      "£500+ cumulative orders",
      "Join Ambassador Programme",
    ],
    benefits: [
      "Everything in Bronze",
      "10% discount on your orders",
      "Priority support",
      "Early access to new products",
      "5% commission on referrals",
    ],
    commission: "5%",
    nextLevel: "Gold",
  },
  {
    name: "Gold",
    icon: Crown,
    tagline: "Top Partner",
    colour: "text-yellow-600",
    bgColour: "bg-yellow-50 border-yellow-400",
    requirements: [
      "Registered Trade Account",
      "£2,000+ cumulative orders",
      "3+ successful referrals",
      "Active on social media",
    ],
    benefits: [
      "Everything in Silver",
      "15% discount on orders",
      "Dedicated account manager",
      "Free colour matching kit",
      "Featured on our website",
      "Invitation to annual event",
      "8% commission on referrals",
    ],
    commission: "8%",
    nextLevel: null,
  },
]

const howItWorks = [
  {
    num: "01",
    title: "Apply for Trade Account",
    desc: "Register as a D.S Hair & Beauty partner. Takes 2 minutes.",
  },
  {
    num: "02",
    title: "Join Ambassador Programme",
    desc: "Opt-in when applying or anytime from your account dashboard.",
  },
  {
    num: "03",
    title: "Get Your Referral Code",
    desc: "Receive a unique code (e.g., CAROSALON) to share with other salons.",
  },
  {
    num: "04",
    title: "Share & Earn Commission",
    desc: "Other salons use your code when ordering. You earn commission on every order.",
  },
  {
    num: "05",
    title: "Level Up",
    desc: "More referrals = higher tier = more benefits. Climb from Bronze to Gold.",
  },
]

const referralExamples = [
  {
    salon: "Example Salon A",
    orders: "3 orders in month",
    commission: "£45 earned",
    tier: "Bronze",
  },
  {
    salon: "Example Salon B",
    orders: "8 orders in month",
    commission: "£180 earned",
    tier: "Silver",
  },
  {
    salon: "Example Salon C",
    orders: "15 orders in month",
    commission: "£480 earned",
    tier: "Gold",
  },
]

const faqs = [
  {
    q: "How does the referral programme work?",
    a: "When you join our Ambassador Programme, you receive a unique referral code. Share this code with other salon owners or stylists. When they place an order using your code, you earn commission on that order. No limit — earn as much as you refer!",
  },
  {
    q: "Is there a cost to join?",
    a: "No. The Ambassador Programme is completely free to join. You just need an active Trade Account with D.S Hair & Beauty.",
  },
  {
    q: "When do I receive my commission?",
    a: "Commissions are calculated monthly and paid via bank transfer or PayPal within 14 days of month end. Minimum payout threshold is £25.",
  },
  {
    q: "Can I refer my own salon?",
    a: "No, you cannot earn commission on your own orders. The programme is designed to help you introduce new salons to D.S Hair & Beauty.",
  },
  {
    q: "What if a referred salon returns products?",
    a: "If a referred order results in a refund, the commission on that order will be deducted from your next payout.",
  },
  {
    q: "How do I track my referrals and earnings?",
    a: "Your Ambassador dashboard shows your referral code, all orders placed with your code, and your commission history. Access it anytime from your Trade Account.",
  },
]

export default function AmbassadorPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [applied, setApplied] = useState(false)

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">

          {/* Hero */}
          <section className="relative h-[520px] md:h-[600px] flex items-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1920&q=80"
                alt="D.S Hair Beauty Ambassador Programme"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-transparent" />
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6">
                  <Crown className="h-4 w-4" />
                  <span className="text-sm font-medium">Ambassador Programme</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  Earn Commission While Helping Salons Thrive
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  Join the D.S Hair & Beauty Ambassador Programme. Share quality hair extensions with other salons. Earn commission on every order they place. No cap, no limit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="bg-white text-black hover:bg-white/90">
                    <a href="#apply">Apply Now</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white bg-black/30 hover:bg-white hover:text-black" asChild>
                    <Link href="/salon-partners">
                      Learn About Trade Account <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="bg-primary text-primary-foreground py-8">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { stat: "0%", label: "Programme Fee" },
                  { stat: "8%", label: "Max Commission" },
                  { stat: "∞", label: "No Order Cap" },
                  { stat: "24hr", label: "Payout Processing" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl md:text-3xl font-bold">{item.stat}</div>
                    <div className="text-xs md:text-sm text-primary-foreground/70 mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">How It Works</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Simple. Share your code. Earn commission. Level up.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
                {howItWorks.map((step, i) => (
                  <div key={step.num} className="relative text-center">
                    <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {step.num}
                    </div>
                    {i < howItWorks.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-[calc(50%+22px)] right-[calc(-50%+22px)] h-px bg-border" />
                    )}
                    <h3 className="font-semibold mb-2 text-sm">{step.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tiers */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Ambassador Tiers</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Start at Bronze, climb to Silver and Gold. More referrals = more rewards.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`rounded-2xl border-2 p-6 md:p-8 relative ${tier.bgColour} ${tier.popular ? 'ring-2 ring-primary' : ''}`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                        Most Popular
                      </div>
                    )}
                    <div className={`inline-flex items-center justify-center h-12 w-12 rounded-full ${tier.colour.replace('text-', 'bg-')}/10 mb-4`}>
                      <tier.icon className={`h-6 w-6 ${tier.colour}`} />
                    </div>
                    <h3 className={`font-serif text-2xl font-medium ${tier.colour} mb-1`}>{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tier.tagline}</p>

                    <div className="mb-6">
                      <div className="text-xs text-muted-foreground mb-2 font-medium">Commission Rate</div>
                      <div className={`text-3xl font-bold ${tier.colour}`}>{tier.commission}</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1 font-medium">Requirements</div>
                        <ul className="space-y-1">
                          {tier.requirements.map((req) => (
                            <li key={req} className="text-sm flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="text-xs text-muted-foreground mb-2 font-medium">Benefits</div>
                      <ul className="space-y-1.5">
                        {tier.benefits.map((benefit) => (
                          <li key={benefit} className="text-sm flex items-start gap-2">
                            <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Example Earnings */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">What Could You Earn?</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Realistic examples based on average order values of £150-200 per referral.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {referralExamples.map((ex) => (
                  <div key={ex.salon} className="bg-card rounded-xl p-6 border text-center">
                    <div className={`inline-flex items-center justify-center h-10 w-10 rounded-full mb-4 ${
                      ex.tier === 'Bronze' ? 'bg-amber-50 text-amber-600' :
                      ex.tier === 'Silver' ? 'bg-gray-100 text-gray-500' :
                      'bg-yellow-50 text-yellow-600'
                    }`}>
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold mb-1">{ex.salon}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{ex.orders}</p>
                    <div className="text-2xl font-bold text-primary">{ex.commission}</div>
                    <p className="text-xs text-muted-foreground mt-1">per month passive income</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8 max-w-xl mx-auto">
                * These are illustrative examples. Actual earnings depend on referral volume and order value. Top Ambassadors earn £500-1000+ per month.
              </p>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Frequently Asked Questions</h2>
              </div>
              <div className="max-w-3xl mx-auto space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-card rounded-xl border overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left font-medium"
                    >
                      {faq.q}
                      <span className={`transform transition-transform ${activeFaq === i ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {activeFaq === i && (
                      <div className="px-5 pb-5 text-sm text-muted-foreground">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA / Apply */}
          <section id="apply" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Ready to Become an Ambassador?</h2>
                  <p className="text-muted-foreground text-lg">
                    Apply for your Trade Account and opt-in to the Ambassador Programme in one step.
                  </p>
                </div>

                {applied ? (
                  <div className="bg-card rounded-2xl p-10 text-center border">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium mb-2">Application Received!</h3>
                    <p className="text-muted-foreground mb-2">
                      Thank you — we will be in touch within 24 hours.
                    </p>
                    <p className="text-muted-foreground text-sm mb-6">
                      Check your email for your Trade Account details and Ambassador Programme information.
                    </p>
                    <Button asChild>
                      <Link href="/salon-partners">
                        Explore Trade Account Benefits <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); setApplied(true); }}
                    className="bg-card rounded-2xl p-6 md:p-8 border space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Your Name *</label>
                        <Input placeholder="First & Last Name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Salon Name *</label>
                        <Input placeholder="e.g. The Hair Studio" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1.5">Email Address *</label>
                        <Input type="email" placeholder="you@yoursalon.co.uk" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5">WhatsApp / Phone *</label>
                        <Input type="tel" placeholder="+44 7xxx xxxxxx" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Salon Location *</label>
                      <Input placeholder="e.g. Didsbury, Manchester" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">How many salons/stylists could you potentially refer?</label>
                      <select className="w-full rounded-md border px-3 py-2 text-sm bg-background">
                        <option value="">Select range</option>
                        <option value="1-5">1-5</option>
                        <option value="5-20">5-20</option>
                        <option value="20-50">20-50</option>
                        <option value="50+">50+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Anything else?</label>
                      <Textarea
                        placeholder="Tell us about your salon network or any questions..."
                        rows={3}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Apply for Trade Account & Ambassador Programme
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
                      </a>
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
