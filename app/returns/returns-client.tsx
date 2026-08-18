"use client"

import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { RotateCcw, ShieldCheck, Mail, Clock, CheckCircle2, AlertTriangle } from "lucide-react"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import type { ReturnsContent } from "@/lib/i18n/pages/returns"

const HOME: Record<Locale, string> = {
  en: "Home",
  de: "Startseite",
  fr: "Accueil",
  ar: "الرئيسية",
  sv: "Hem",
  pl: "Strona główna",
}

export default function ReturnsClient({
  locale,
  content: c,
}: {
  locale: Locale
  content: ReturnsContent
}) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="bg-[#4A1942] text-white">
            <div className="container px-4 md:px-6 py-14 md:py-20">
              <p className="text-sm tracking-widest uppercase text-amber-200 mb-4">{c.heroEyebrow}</p>
              <h1 className="font-serif text-4xl md:text-6xl font-medium leading-tight">{c.heroTitle}</h1>
              <p className="mt-6 max-w-3xl text-lg text-white/80 leading-relaxed">{c.heroSubtitle}</p>
            </div>
          </section>

          {/* Breadcrumb UI */}
          <section className="border-b bg-[#FDF8F0]">
            <div className="container px-4 md:px-6 py-3">
              <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Link href={localeHref("/", locale)} className="hover:text-[#4A1942]">
                  {HOME[locale]}
                </Link>
                <span>/</span>
                <span className="font-medium text-[#4A1942]">{c.breadcrumb}</span>
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
                    <h2 className="font-serif text-3xl text-[#4A1942]">{c.sec1Title}</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-7">{c.sec1Desc}</p>
                </section>

                <section>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-7 w-7 text-[#4A1942]" />
                    <h2 className="font-serif text-3xl text-[#4A1942]">{c.sec2Title}</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-7">{c.sec2Desc}</p>
                  <ul className="mt-4 space-y-3 text-sm">
                    {c.sec2Bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 flex gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <p className="text-sm text-amber-900 leading-6">{c.sec2Alert}</p>
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-3xl text-[#4A1942]">{c.sec3Title}</h2>
                  <ol className="mt-6 space-y-5">
                    {c.sec3Steps.map((step) => (
                      <li key={step.num} className="flex gap-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4A1942] text-sm font-semibold text-white">
                          {step.num}
                        </span>
                        <div>
                          <h3 className="font-semibold text-[#4A1942]">{step.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground leading-6">{step.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>

                <section>
                  <h2 className="font-serif text-3xl text-[#4A1942]">{c.sec4Title}</h2>
                  <p className="mt-4 text-muted-foreground leading-7">{c.sec4Desc}</p>
                </section>

                <section>
                  <h2 className="font-serif text-3xl text-[#4A1942]">{c.sec5Title}</h2>
                  <p className="mt-4 text-muted-foreground leading-7">{c.sec5Desc}</p>
                  <p className="mt-3 text-muted-foreground leading-7">{c.sec5Note}</p>
                </section>
              </article>

              <aside className="lg:sticky lg:top-24 h-fit space-y-6">
                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-xl text-[#4A1942]">{c.qrTitle}</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    {c.qrItems.map((item, i) => (
                      <div key={i} className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">{item.label}</dt>
                        <dd className="font-medium text-[#4A1942]">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-2xl border bg-[#FDF8F0] p-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#4A1942]" />
                    <h3 className="font-serif text-lg text-[#4A1942]">{c.helpTitle}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-6">{c.helpDesc}</p>
                  <Link
                    href={localeHref("/contact", locale)}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#4A1942] hover:bg-[#35122f] px-4 py-3 text-sm font-medium text-white transition-colors"
                  >
                    {c.helpCta}
                  </Link>
                </div>

                <div className="rounded-2xl border bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#4A1942]" />
                    <h3 className="font-serif text-lg text-[#4A1942]">{c.hoursTitle}</h3>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {c.hours.map((h, i) => (
                      <li key={i} className="flex justify-between">
                        <span>{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
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
