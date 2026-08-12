"use client"

import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Truck, Package, Globe, Clock, CheckCircle2 } from "lucide-react"

export default function ShippingClient() {
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
                Shipping &amp; Delivery
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-white/80 leading-relaxed">
                Fast, tracked delivery across the UK and worldwide. Fast dispatch; express 3–5 day delivery
                orders placed before 2pm (UK time).
              </p>
            </div>
          </section>

          {/* Breadcrumb UI */}
          <section className="border-b bg-[#FDF8F0]">
            <div className="container px-4 md:px-6 py-3">
              <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-[#4A1942]">Home</Link>
                <span>/</span>
                <span className="font-medium text-[#4A1942]">Shipping &amp; Delivery</span>
              </nav>
            </div>
          </section>

          {/* UK Delivery Options */}
          <section className="container px-4 md:px-6 py-14 md:py-20">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF8F0]">
                    <Truck className="h-5 w-5 text-[#4A1942]" />
                  </div>
                  <h2 className="font-serif text-2xl text-[#4A1942]">UK Standard Delivery</h2>
                </div>
                <p className="mt-4 text-muted-foreground leading-7">
                  Tracked delivery across mainland UK via DPD, Royal Mail or Yodel — depending on
                  weight and destination.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span><strong>Free standard delivery</strong> on UK orders over £175</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span>Orders under £175: <strong>£4.95</strong> standard delivery</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span>Fast dispatch; express 3–5 day delivery orders placed before 2pm</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span>Estimated transit: <strong>3–5 working days</strong></span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF8F0]">
                    <Clock className="h-5 w-5 text-[#4A1942]" />
                  </div>
                  <h2 className="font-serif text-2xl text-[#4A1942]">UK Express (3–5 days) &amp; Saturday</h2>
                </div>
                <p className="mt-4 text-muted-foreground leading-7">
                  Need it tomorrow? Upgrade to next-working-day delivery at checkout.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span><strong>Next-working-day</strong> delivery: £9.95 (order before 2pm)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span><strong>Saturday delivery</strong>: £14.95 (order before Friday 2pm)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span>Tracked, signed-for, SMS notifications included</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF8F0]">
                    <Globe className="h-5 w-5 text-[#4A1942]" />
                  </div>
                  <h2 className="font-serif text-2xl text-[#4A1942]">International Shipping</h2>
                </div>
                <p className="mt-4 text-muted-foreground leading-7">
                  We ship to salons and stylists across Europe and worldwide via DHL Express and
                  FedEx.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span><strong>EU &amp; Ireland:</strong> from £14.95 (3–5 working days)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span><strong>USA &amp; Canada:</strong> from £24.95 (3–5 working days)</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span><strong>Rest of world:</strong> quoted at checkout</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span>Customs duties &amp; import taxes are the customer's responsibility</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border bg-white p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF8F0]">
                    <Package className="h-5 w-5 text-[#4A1942]" />
                  </div>
                  <h2 className="font-serif text-2xl text-[#4A1942]">Salon Partner Trade Orders</h2>
                </div>
                <p className="mt-4 text-muted-foreground leading-7">
                  Trade account holders get priority handling and dedicated delivery routes.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span>Fast dispatch on trade orders; express 3–5 day delivery</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span>Free UK delivery on all trade orders, no minimum spend</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                    <span>Dedicated WhatsApp support line for delivery tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Order Processing */}
          <section className="border-t bg-[#FDF8F0]">
            <div className="container px-4 md:px-6 py-14 md:py-20">
              <h2 className="font-serif text-3xl md:text-4xl text-[#4A1942]">
                How we process your order
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-amber-600">Step 01</p>
                  <h3 className="mt-2 font-serif text-xl text-[#4A1942]">Order received</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-6">
                    You'll get an order confirmation by email within minutes. Check your spam
                    folder if you don't see it.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-amber-600">Step 02</p>
                  <h3 className="mt-2 font-serif text-xl text-[#4A1942]">Picked &amp; packed</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-6">
                    Stock orders are picked, quality-checked and packed within one working day.
                    Custom-colour orders may take 1–2 extra days.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold text-amber-600">Step 03</p>
                  <h3 className="mt-2 font-serif text-xl text-[#4A1942]">Dispatched</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-6">
                    You'll receive a tracking link by email as soon as your order leaves our
                    manufacturing partner (UK warehouse launching).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ CTA */}
          <section className="container px-4 md:px-6 py-14">
            <div className="rounded-2xl bg-[#4A1942] p-8 md:p-12 text-white text-center">
              <h2 className="font-serif text-2xl md:text-3xl">
                Still have questions about delivery?
              </h2>
              <p className="mt-3 text-white/80 max-w-2xl mx-auto">
                Our team is available Monday–Saturday to help with tracking, special requests and
                delivery quotes.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg bg-amber-500 hover:bg-amber-600 px-5 py-3 text-sm font-medium text-white transition-colors"
                >
                  Contact the team
                </Link>
                <Link
                  href="/returns"
                  className="inline-flex items-center rounded-lg border border-white/30 hover:bg-white/10 px-5 py-3 text-sm font-medium text-white transition-colors"
                >
                  Read our returns policy
                </Link>
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