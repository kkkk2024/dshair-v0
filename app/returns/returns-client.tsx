"use client"

import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { RotateCcw, ShieldCheck, Mail, Clock, CheckCircle2, AlertTriangle } from "lucide-react"

export default function ReturnsClient() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="bg-[#4A1942] text-white">
            <div className="container px-4 md:px-6 py-14 md:py-20">
              <p className="text-sm tracking-widest uppercase text-amber-200 mb-4">
                Customer Information
              </p>
              <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight">
                Returns &amp; Refunds
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-white/80 leading-relaxed">
                30-day return window on unused products. Free returns by post for UK customers.
                Refunds processed within 5 working days of receipt.
              </p>
            </div>
          </section>

          {/* Breadcrumb UI */}
          <section className="border-b bg-[#FDF8F0]">
            <div className="container px-4 md:px-6 py-3">
              <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-[#4A1942]">Home</Link>
                <span>/</span>
                <span className="font-medium text-[#4A1942]">Returns Policy</span>
              </nav>
            </div>
          </section>

          {/* 30-day headline + eligibility */}
          <section className="container px-4 md:px-6 py-14 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
              <article className="space-y-10">
                <section>
                  <div className="flex items-center gap-3">
                    <RotateCcw className="h-7 w-7 text-[#4A1942]" />
                    <h2 className="font-serif text-3xl text-[#4A1942]">30-day return window</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-7">
                    You have <strong>30 days from the day you receive your order</strong> to
                    request a return. After that, unfortunately we can't offer a refund or
                    exchange — unless the item is faulty (see below).
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-7 w-7 text-[#4A1942]" />
                    <h2 className="font-serif text-3xl text-[#4A1942]">Eligibility</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-7">
                    To be eligible for a return, your item must be:
                  </p>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                      <span><strong>Unused and unopened</strong> — in the same condition you received it.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                      <span>In its <strong>original packaging</strong>, with all tags and seals intact.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                      <span>Accompanied by the <strong>receipt or proof of purchase</strong>.</span>
                    </li>
                  </ul>
                  <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 flex gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <p className="text-sm text-amber-900 leading-6">
                      <strong>Opened or used hair extensions cannot be returned</strong> for
                      hygiene reasons — this is industry-standard and applies to all
                      professional hair extension suppliers in the UK.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-3xl text-[#4A1942]">How to start a return</h2>
                  <ol className="mt-6 space-y-5">
                    <li className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4A1942] text-sm font-semibold text-white">1</span>
                      <div>
                        <h3 className="font-semibold text-[#4A1942]">Email us at returns@dshairbeauty.co.uk</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-6">
                          Include your order number, the items you want to return and the reason.
                          We'll send you a returns reference and the return address within one
                          working day.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4A1942] text-sm font-semibold text-white">2</span>
                      <div>
                        <h3 className="font-semibold text-[#4A1942]">Pack your return securely</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-6">
                          Use the original packaging where possible. Include your returns
                          reference inside the parcel so we can match it back to your order.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4A1942] text-sm font-semibold text-white">3</span>
                      <div>
                        <h3 className="font-semibold text-[#4A1942]">Post it back</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-6">
                          UK customers: we email you a pre-paid Royal Mail label — drop the
                          parcel at any post office. International customers: return by your
                          preferred tracked service; return postage is at your cost.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4A1942] text-sm font-semibold text-white">4</span>
                      <div>
                        <h3 className="font-semibold text-[#4A1942]">Refund issued</h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-6">
                          Once your return is received and inspected, we'll email you to confirm
                          approval. Refunds go back to your original payment method within
                          5 working days.
                        </p>
                      </div>
                    </li>
                  </ol>
                </section>

                <section>
                  <h2 className="font-serif text-3xl text-[#4A1942]">Faulty or damaged items</h2>
                  <p className="mt-4 text-muted-foreground leading-7">
                    If your order arrives damaged, faulty or not as described, please email us
                    within <strong>7 days of receipt</strong> with photos of the issue. We'll
                    arrange a free return and either a replacement or full refund — whichever
                    you prefer. This does not affect your statutory rights under the Consumer
                    Rights Act 2015.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl text-[#4A1942]">Late or missing refunds</h2>
                  <p className="mt-4 text-muted-foreground leading-7">
                    If you haven't received your refund within 5 working days of our confirmation
                    email, please check your bank account again, then contact your card issuer —
                    it can take a few days for refunds to post officially.
                  </p>
                  <p className="mt-3 text-muted-foreground leading-7">
                    Still nothing? Email <strong>returns@dshairbeauty.co.uk</strong> and we'll
                    sort it out.
                  </p>
                </section>
              </article>

              <aside className="lg:sticky lg:top-24 h-fit space-y-6">
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl text-[#4A1942]">Quick reference</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Return window</dt>
                      <dd className="font-medium text-[#4A1942]">30 days</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">UK return cost</dt>
                      <dd className="font-medium text-[#4A1942]">Free</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Refund time</dt>
                      <dd className="font-medium text-[#4A1942]">5 working days</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">Faulty window</dt>
                      <dd className="font-medium text-[#4A1942]">7 days</dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl border bg-[#FDF8F0] p-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#4A1942]" />
                    <h3 className="font-serif text-lg text-[#4A1942]">Need help?</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-6">
                    Drop us an email and our team will pick it up within one working day.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#4A1942] hover:bg-[#35122f] px-4 py-3 text-sm font-medium text-white transition-colors"
                  >
                    Start a return
                  </Link>
                </div>

                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#4A1942]" />
                    <h3 className="font-serif text-lg text-[#4A1942]">Hours</h3>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    <li className="flex justify-between"><span>Mon–Fri</span><span>09:00–17:30</span></li>
                    <li className="flex justify-between"><span>Saturday</span><span>10:00–14:00</span></li>
                    <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
                  </ul>
                </div>
              </aside>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}