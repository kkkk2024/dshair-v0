"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import type { FaqsContent } from "@/lib/i18n/pages/faqs"

const WHATSAPP_NUMBER = "8613516946001"

function whatsappLink(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

export function FAQsClient({
  locale,
  content: c,
}: {
  locale: Locale
  content: FaqsContent
}) {
  const [openCategory, setOpenCategory] = useState<string | null>("general")
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-16 md:py-20">
            <div className="container px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm tracking-widest uppercase text-white/50 mb-4">{c.heroEyebrow}</p>
                <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">{c.heroTitle}</h1>
                <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl mx-auto">{c.heroSubtitle}</p>
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                  <a href={whatsappLink(c.whatsappMsg)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {c.ctaWhatsapp}
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="py-16">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto">
              {c.categories.map((cat) => (
                <div key={cat.id} className="mb-8 border-b last:border-b-0">
                  {/* Category Header */}
                  <button
                    className="w-full flex items-center justify-between py-6 text-left"
                    onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                      <h2 className="font-serif text-2xl font-medium">{cat.title}</h2>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform ${openCategory === cat.id ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Category Image (for product categories) */}
                  {cat.image && openCategory === cat.id && (
                    <div className="relative w-full max-w-md mx-auto mb-6 rounded-xl overflow-hidden border shadow-sm">
                      <Image
                        src={cat.image}
                        alt={cat.imageAlt || cat.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}

                  {/* FAQs */}
                  {openCategory === cat.id && (
                    <div className="pb-6 space-y-0">
                      {cat.faqs.map((faq, i) => {
                        const faqId = `${cat.id}-${i}`
                        return (
                          <div key={faqId} className="border-b last:border-b-0 py-5">
                            <button
                              className="w-full text-left flex items-start justify-between gap-4"
                              onClick={() => setOpenFaq(openFaq === faqId ? null : faqId)}
                            >
                              <h3 className="font-medium text-base pr-4 leading-snug">{faq.q}</h3>
                              <ChevronDown
                                className={`h-4 w-4 text-muted-foreground shrink-0 mt-1 transition-transform ${openFaq === faqId ? "rotate-180" : ""}`}
                              />
                            </button>
                            {openFaq === faqId && (
                              <p className="text-muted-foreground text-sm leading-relaxed mt-3 max-w-3xl">{faq.a}</p>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Still have questions CTA */}
          <section className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-white py-16">
            <div className="container px-4 md:px-6 text-center">
              <h2 className="font-serif text-3xl font-medium mb-4">{c.ctaTitle}</h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">{c.ctaSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                  <a href={whatsappLink(c.whatsappMsg)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {c.ctaWhatsapp2}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-black/30 hover:bg-white hover:text-black"
                  asChild
                >
                  <Link href={localeHref("/contact", locale)}>{c.ctaContact2}</Link>
                </Button>
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
