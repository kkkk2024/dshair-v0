"use client"

import Link from "next/link"
import { MapPin, GraduationCap, Palette, Building2 } from "lucide-react"
import { getHomeContent } from "@/lib/i18n/home"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"

const icons = [Building2, MapPin, GraduationCap, Palette]

export function ServicesSection({ locale }: { locale: Locale }) {
  const c = getHomeContent(locale).services
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            {c.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.items.map((service, i) => {
            const Icon = icons[i]
            return (
              <Link
                key={service.title}
                href={localeHref(service.href, locale)}
                className={`group rounded-xl p-6 transition-shadow hover:shadow-lg border ${
                  service.highlight
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border"
                }`}
              >
                <div
                  className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 transition-colors ${
                    service.highlight
                      ? "bg-primary-foreground/20 group-hover:bg-primary-foreground/30"
                      : "bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    service.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {service.description}
                </p>
                <span
                  className={`text-sm font-medium group-hover:underline ${
                    service.highlight ? "text-primary-foreground" : "text-accent"
                  }`}
                >
                  {service.cta} &rarr;
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
