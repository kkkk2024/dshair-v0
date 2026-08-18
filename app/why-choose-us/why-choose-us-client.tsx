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
import { FaqJsonLd } from "@/components/seo/json-ld"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { whyChooseUsContent, type WhyContent } from "@/lib/i18n/pages/why-choose-us"

const WA_HREF =
  "https://wa.me/8613516946001?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20your%20salon%20trade%20program."

export default function WhyChooseUsClient({ content, locale }: { content: WhyContent; locale: Locale }) {
  return (
    <CartProvider>
      <>
        <FaqJsonLd faqs={content.faqs.map((f) => ({ question: f.q, answer: f.a }))} />
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
                    <span className="text-sm font-medium">{content.badge}</span>
                  </div>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                    {content.heroTitle}
                  </h1>
                  <p className="text-lg text-white/80 leading-relaxed mb-8">{content.heroSubtitle}</p>
                  <Button size="lg" asChild>
                    <Link href={localeHref("/salon-partners", locale) + "#apply"}>
                      {content.ctaApply} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* The comparison: Us vs Others */}
            <section className="py-16 md:py-24">
              <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.compareTitle}</h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{content.compareSubtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {content.comparisons.map((item) => (
                    <div key={item.title} className="bg-card rounded-xl p-6 border">
                      <h3 className="font-semibold text-base mb-4 text-primary">{item.title}</h3>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <p className="text-sm leading-relaxed">
                            <span className="font-medium text-green-700">{content.compareUsLabel}</span>{" "}
                            {item.us}
                          </p>
                        </div>
                        <div className="flex gap-3">
                          <div className="h-5 w-5 flex-shrink-0 mt-0.5 rounded-full bg-red-100 flex items-center justify-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            <span className="font-medium text-muted-foreground">{content.compareThemLabel}</span>{" "}
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
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.promisesTitle}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {content.promises.map((p, i) => {
                    const Icon = [Factory, ShieldCheck, Clock, Truck][i] ?? Factory
                    return (
                      <div key={p.title} className="flex gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>

            {/* The real talk */}
            <section className="py-16 md:py-24">
              <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                  <div className="bg-primary/5 rounded-2xl p-8 md:p-10 border border-primary/20">
                    <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6">{content.realTalkTitle}</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      {content.realTalkParas.map((p, i) => (
                        <p key={i} className={i === content.realTalkParas.length - 1 ? "font-medium text-foreground" : ""}>
                          {p}
                        </p>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Button size="lg" asChild>
                        <Link href={localeHref("/salon-partners", locale) + "#apply"}>{content.realTalkCtaApply}</Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <a href={WA_HREF} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          {content.realTalkWhatsApp}
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
                    <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.faqTitle}</h2>
                    <p className="text-muted-foreground">{content.faqSubtitle}</p>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {content.faqs.map((item, i) => (
                      <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left font-medium text-base">{item.q}</AccordionTrigger>
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
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{content.toolkitTitle}</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">{content.toolkitSubtitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {content.toolkitItems.map((tool, i) => {
                    const Icon = [FileText, BookOpen, Download, MessageCircle, Users, Star][i] ?? FileText
                    const comingSoon = i < 3
                    const link = i === 3 ? WA_HREF : i === 4 ? localeHref("/salon-partners", locale) : i === 5 ? localeHref("/ambassador", locale) : "#"
                    const external = i === 3
                    return (
                      <div key={i} className="bg-card border rounded-xl p-6 hover:shadow-md transition-shadow">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-base mb-2">{tool.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tool.desc}</p>
                        {comingSoon ? (
                          <span className="inline-block text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-medium">
                            {content.toolkitComingSoon}
                          </span>
                        ) : (
                          <a
                            href={link}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                          >
                            {tool.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </section>

          </main>
          <Footer />
          <CartDrawer />
        </div>
      </>
    </CartProvider>
  )
}
