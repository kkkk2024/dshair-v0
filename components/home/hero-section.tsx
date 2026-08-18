"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getHomeContent } from "@/lib/i18n/home"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"

export function HeroSection({ locale }: { locale: Locale }) {
  const c = getHomeContent(locale).hero
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt={c.title1}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
            {c.badge}
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-6 text-balance">
            {c.title1}<br />
            <span className="text-primary">{c.title2}</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            {c.subtitle}
          </p>

          {/* Dual CTA — Salon-Focused */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="group" asChild>
              <Link href={localeHref('/trade-wholesale', locale)}>
                {c.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <Link href={localeHref('/switch-trade-supplier', locale)}>
                {c.ctaSecondary}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Salon Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              {c.trust1}
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              {c.trust2}
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              {c.trust3}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
