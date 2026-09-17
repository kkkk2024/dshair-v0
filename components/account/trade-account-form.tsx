"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, MessageCircle, Store } from "lucide-react"
import { contactInfo } from "@/lib/products"
import {
  getTradeAccountContent,
  type TradeAccountContent,
} from "@/lib/i18n/pages/trade-account"
import type { Locale } from "@/lib/i18n/config"

// The site does not run an authentication backend. This page therefore opens a
// trade account the way the business actually operates: the salon sends an
// application, we review it by hand, and we reply with trade pricing. The form
// posts to the same Formspree endpoint used by the rest of the site.

const WA_HREF =
  "https://wa.me/8613516946001?text=" +
  encodeURIComponent(
    "Hi D.S Hair & Beauty, I have just applied for a trade account on your website and wanted to follow up."
  )

export function TradeAccountForm({ locale = "en" }: { locale?: Locale }) {
  const c: TradeAccountContent = getTradeAccountContent(locale)
  const f = c.fields

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      const response = await fetch("https://formspree.io/f/mjgaagep", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      })

      if (!response.ok) throw new Error("Failed to submit")
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <section className="border-b bg-secondary">
            <div className="container px-4 md:px-6 py-12 md:py-16">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-1.5 mb-6 text-sm font-medium">
                  <Store className="h-4 w-4" />
                  {c.badge}
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.heading}</h1>
                <p className="text-muted-foreground text-lg leading-relaxed">{c.intro}</p>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16">
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
                <div className="flex flex-col gap-12">
                  <div>
                    <h2 className="font-serif text-xl md:text-2xl font-medium mb-6">
                      {c.benefitsHeading}
                    </h2>
                    <div className="grid gap-5 sm:grid-cols-2">
                      {c.benefits.map((b) => (
                        <div key={b.title} className="rounded-lg border p-5">
                          <p className="font-medium mb-1.5">{b.title}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-serif text-xl md:text-2xl font-medium mb-6">
                      {c.stepsHeading}
                    </h2>
                    <ol className="flex flex-col gap-5">
                      {c.steps.map((s, i) => (
                        <li key={s.step} className="flex gap-4">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium">
                            {i + 1}
                          </span>
                          <div>
                            <p className="font-medium">{s.step}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {s.detail}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Already buying from us and just want to reorder?{" "}
                    <a
                      href={contactInfo.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline underline-offset-2"
                    >
                      Message us on WhatsApp
                    </a>{" "}
                    and we will pick it up from your trade price list.
                  </p>
                </div>

                <div>
                  <div className="rounded-xl border p-6 md:p-8">
                    {submitted ? (
                      <div className="flex flex-col items-start gap-4 py-4">
                        <CheckCircle2 className="h-10 w-10 text-accent" />
                        <h2 className="font-serif text-2xl font-medium">{c.successHeading}</h2>
                        <p className="text-muted-foreground leading-relaxed">{c.successBody}</p>
                        <Button asChild className="mt-2">
                          <a href={WA_HREF} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            {c.successWhatsApp}
                          </a>
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          {contactInfo.email} &middot; {contactInfo.whatsappNumber}
                        </p>
                      </div>
                    ) : (
                      <>
                        <h2 className="font-serif text-2xl font-medium mb-2">{c.formHeading}</h2>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                          {c.formNote}{" "}
                          <Link href="/privacy" className="text-accent underline underline-offset-2">
                            Privacy Policy
                          </Link>
                          .
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                          <input
                            type="hidden"
                            name="_subject"
                            value="New trade account application — dshairbeauty.co.uk"
                          />
                          <input type="hidden" name="form_source" value="account-page" />

                          <div>
                            <Label htmlFor="ta-name" className="block text-sm font-medium mb-1.5">
                              {f.name} *
                            </Label>
                            <Input id="ta-name" name="name" placeholder={f.namePh} required />
                          </div>

                          <div>
                            <Label htmlFor="ta-salon" className="block text-sm font-medium mb-1.5">
                              {f.salon} *
                            </Label>
                            <Input
                              id="ta-salon"
                              name="salon_name"
                              placeholder={f.salonPh}
                              required
                            />
                          </div>

                          <div>
                            <Label
                              htmlFor="ta-address"
                              className="block text-sm font-medium mb-1.5"
                            >
                              {f.tradingAddress}
                            </Label>
                            <Input
                              id="ta-address"
                              name="trading_address"
                              placeholder={f.tradingAddressPh}
                            />
                          </div>

                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <Label htmlFor="ta-email" className="block text-sm font-medium mb-1.5">
                                {f.email} *
                              </Label>
                              <Input
                                id="ta-email"
                                name="email"
                                type="email"
                                placeholder={f.emailPh}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="ta-phone" className="block text-sm font-medium mb-1.5">
                                {f.phone}
                              </Label>
                              <Input
                                id="ta-phone"
                                name="phone"
                                type="tel"
                                placeholder={f.phonePh}
                              />
                            </div>
                          </div>

                          <div>
                            <Label
                              htmlFor="ta-website"
                              className="block text-sm font-medium mb-1.5"
                            >
                              {f.website}
                            </Label>
                            <Input
                              id="ta-website"
                              name="website"
                              placeholder={f.websitePh}
                            />
                          </div>

                          <div>
                            <Label htmlFor="ta-vat" className="block text-sm font-medium mb-1.5">
                              {f.vat}
                            </Label>
                            <Input id="ta-vat" name="vat_number" placeholder="" />
                            <p className="mt-1.5 text-xs text-muted-foreground">{f.vatHint}</p>
                          </div>

                          <div>
                            <Label
                              htmlFor="ta-products"
                              className="block text-sm font-medium mb-1.5"
                            >
                              {f.products}
                            </Label>
                            <Input
                              id="ta-products"
                              name="product_interest"
                              placeholder={f.productsPh}
                            />
                          </div>

                          <div>
                            <Label htmlFor="ta-volume" className="block text-sm font-medium mb-1.5">
                              {f.volume}
                            </Label>
                            <Input
                              id="ta-volume"
                              name="monthly_volume"
                              placeholder={f.volumePh}
                            />
                          </div>

                          <div>
                            <Label htmlFor="ta-message" className="block text-sm font-medium mb-1.5">
                              {f.message}
                            </Label>
                            <Textarea
                              id="ta-message"
                              name="message"
                              placeholder={f.messagePh}
                              rows={4}
                            />
                          </div>

                          <label className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                            <input
                              type="checkbox"
                              name="consent"
                              value="yes"
                              required
                              className="mt-0.5 h-4 w-4 shrink-0 rounded border-input"
                            />
                            <span>{c.consent}</span>
                          </label>

                          {error && (
                            <p className="rounded-lg border border-destructive/40 bg-destructive/5 p-3 text-sm">
                              {c.errorNote}
                            </p>
                          )}

                          <Button type="submit" size="lg" className="w-full" disabled={loading}>
                            {loading ? c.submitting : c.submit}
                          </Button>

                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {c.noTierNote}
                          </p>
                        </form>
                      </>
                    )}
                  </div>
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
