"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import {
  BookOpen, MessageCircle, CheckCircle2, XCircle,
  Clock, ChevronDown, Scissors, ArrowRight, Star
} from "lucide-react"
import Link from "next/link"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import {
  getExtensionSpecsContent,
  methodStatic,
  methodOrder,
  type ExtensionSpecsContent,
  type MethodContent,
  type MethodStatic,
} from "@/lib/i18n/pages/extension-specs"

const wa = (msg: string) =>
  `https://wa.me/8613516946001?text=${encodeURIComponent(msg)}`

type MethodView = MethodStatic & MethodContent & { id: string }

function openWhatsApp(message: string) {
  window.open(wa(message), "_blank")
}

function getCellValue(
  method: MethodView,
  key: string,
  c: ExtensionSpecsContent,
): { text: string; highlight?: boolean } {
  switch (key) {
    case "installation": return { text: method.installation }
    case "installTime": return { text: method.installTime }
    case "lifespan": return { text: method.lifespan }
    case "hairType": return { text: method.hairType }
    case "maintenance": return { text: method.maintenance }
    case "reusable": return { text: method.reusable }
    case "diyFriendly": return { text: method.diyFriendly ? c.yesLabel : c.noLabel, highlight: method.diyFriendly }
    case "priceRange": return { text: method.priceRange }
    default: return { text: "" }
  }
}

function MethodDetailCard({ method, locale }: { method: MethodView; locale: Locale }) {
  return (
    <div id={method.id} className="scroll-mt-20 border rounded-xl overflow-hidden bg-card">
      <Accordion type="single" collapsible>
        <AccordionItem value={method.id} className="border-b-0">
          <AccordionTrigger className="px-6 py-5 hover:no-underline">
            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Scissors className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">{method.name}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{method.installation} &middot; {method.installTime} &middot; {method.lifespan}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">{method.description}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2 text-green-700">
                    <CheckCircle2 className="w-4 h-4" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {method.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3 flex items-center gap-2 text-red-700">
                    <XCircle className="w-4 h-4" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {method.cons.map((con, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4">
                <h4 className="font-medium text-sm uppercase tracking-wide mb-1">Best For</h4>
                <p className="text-sm text-muted-foreground">{method.bestFor}</p>
              </div>

              <div>
                <h4 className="font-medium mb-3">Installation Steps</h4>
                <ol className="space-y-2">
                  {method.installSteps.map((step, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 text-xs font-medium">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h4 className="font-medium mb-3">Maintenance Tips</h4>
                <ul className="space-y-2">
                  {method.maintenanceTips.map((tip, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <Link href={localeHref(method.collectionLink, locale)}>
                    View {method.name} Collection
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export function ExtensionSpecsView({ locale }: { locale: Locale }) {
  const c = getExtensionSpecsContent(locale)
  const methodList: MethodView[] = methodOrder.map((id) => ({
    id,
    ...methodStatic[id],
    ...c.methods[id],
  }))

  const matrixColumns = methodList.map((m) => m.name)
  const matrixRows = [
    { key: "installation", label: c.matrixRowLabels.installation },
    { key: "installTime", label: c.matrixRowLabels.installTime },
    { key: "lifespan", label: c.matrixRowLabels.lifespan },
    { key: "hairType", label: c.matrixRowLabels.hairType },
    { key: "maintenance", label: c.matrixRowLabels.maintenance },
    { key: "reusable", label: c.matrixRowLabels.reusable },
    { key: "diyFriendly", label: c.matrixRowLabels.diyFriendly },
    { key: "priceRange", label: c.matrixRowLabels.priceRange },
  ]

  return (
    <CartProvider>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-16 md:py-24">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_30%,oklch(0.55_0.12_25),transparent_60%)]" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-6">
                <BookOpen className="w-4 h-4" />
                <span>{c.heroEyebrow}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-4">
                {c.heroTitle}
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                {c.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Quick Nav */}
        <section className="bg-secondary py-6 sticky top-16 z-10 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {methodList.map((method) => (
                <a
                  key={method.id}
                  href={`#${method.id}`}
                  className="text-sm px-4 py-2 rounded-full bg-card border hover:border-accent transition-colors whitespace-nowrap"
                >
                  {method.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Matrix Table */}
        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-10">
                {c.matrixTitle}
              </h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                {c.matrixSubtitle}
              </p>

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto rounded-xl border bg-card">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="text-left p-4 font-medium sticky left-0 bg-secondary z-10 min-w-[160px]">Dimension</th>
                      {matrixColumns.map((col) => (
                        <th key={col} className="text-left p-4 font-medium min-w-[150px]">{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {matrixRows.map((row, ri) => (
                      <tr key={row.key} className={ri % 2 === 0 ? "bg-card" : "bg-secondary/30"}>
                        <td className="p-4 font-medium sticky left-0 z-10 bg-inherit">{row.label}</td>
                        {methodList.map((method) => {
                          const val = getCellValue(method, row.key, c)
                          return (
                            <td key={method.id} className={`p-4 text-muted-foreground ${val.highlight ? "text-green-600 font-medium" : ""}`}>
                              {val.text}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card Layout */}
              <div className="lg:hidden space-y-6">
                {methodList.map((method) => (
                  <div key={method.id} className="border rounded-xl p-4 bg-card">
                    <h3 className="font-serif text-lg font-semibold mb-4">{method.name}</h3>
                    <dl className="space-y-3">
                      {matrixRows.map((row) => {
                        const val = getCellValue(method, row.key, c)
                        return (
                          <div key={row.key} className="flex justify-between items-start gap-4 text-sm border-b border-border/50 pb-2 last:border-0">
                            <dt className="font-medium text-muted-foreground shrink-0">{row.label}</dt>
                            <dd className={`text-right ${val.highlight ? "text-green-600 font-medium" : ""}`}>{val.text}</dd>
                          </div>
                        )
                      })}
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Method Detail Cards */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
                {c.detailTitle}
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
                {c.detailSubtitle}
              </p>
              <div className="space-y-4">
                {methodList.map((method) => (
                  <MethodDetailCard key={method.id} method={method} locale={locale} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-center mb-10">
                {c.faqTitle}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {c.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              {c.ctaTitle}
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              {c.ctaSubtitle}
            </p>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => openWhatsApp(c.waCtaMsg)}
            >
              <MessageCircle className="w-5 h-5" />
              {c.ctaButton}
            </Button>
          </div>
        </section>

        {/* JSON-LD: HowTo Schema (for each method) */}
        {methodList.map((method) => (
          <script
            key={method.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "HowTo",
                "name": `How to Install ${method.name} Hair Extensions`,
                "description": method.description.substring(0, 200),
                "step": method.installSteps.map((step, i) => ({
                  "@type": "HowToStep",
                  "position": i + 1,
                  "text": step,
                })),
              }),
            }}
          />
        ))}

        {/* JSON-LD: FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": c.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.a,
                },
              })),
            }),
          }}
        />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}
