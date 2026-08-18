"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { getHomeContent } from "@/lib/i18n/home"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"

export function QuickQuoteSection({ locale }: { locale: Locale }) {
  const c = getHomeContent(locale).quickQuote
  const whatsappLink = `https://wa.me/8613516946001?text=${encodeURIComponent(c.whatsappMsg)}`
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary/90 to-amber-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
              {c.title}
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-xl">
              {c.subtitle}
            </p>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
            >
              <Link href={localeHref('/trade-wholesale#open-account', locale)}>
                {c.ctaPrimary}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8"
            >
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {c.ctaSecondary}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
