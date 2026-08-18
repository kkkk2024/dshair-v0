"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import {
  Scissors, Package, Palette, BookOpen,
  ArrowRight, CheckCircle2, Users, Lightbulb, Wrench, Shirt
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { localeHref } from "@/lib/i18n/routing"
import { getSolutionsContent, type SolutionsContent } from "@/lib/i18n/pages/solutions"
import type { Locale } from "@/lib/i18n/config"

const packIcons = [Scissors, Users, Lightbulb, Shirt]
const serviceIcons = [Palette, Wrench, BookOpen, Package]

export function SolutionsView({ locale }: { locale: Locale }) {
  const c: SolutionsContent = getSolutionsContent(locale)
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">

          {/* Hero */}
          <section className="relative h-[520px] md:h-[600px] flex items-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
                alt="Hair Extension Solutions for Salons"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>
            <div className="container relative z-10 px-4 md:px-6">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6">
                  <Package className="h-4 w-4" />
                  <span className="text-sm font-medium">{c.heroEyebrow}</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                  {c.heroTitle}
                </h1>
                <p className="text-lg text-white/80 leading-relaxed mb-8">
                  {c.heroSubtitle}
                </p>
                <Button size="lg" asChild>
                  <Link href="#packages">{c.heroCta}</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Extension Packages */}
          <section id="packages" className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.packagesTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {c.packagesSubtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {c.packages.map((pkg, i) => {
                  const Icon = packIcons[i] ?? Scissors
                  return (
                    <div key={pkg.title} className="bg-card rounded-2xl border overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="p-6 md:p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <span className="text-xs font-medium bg-primary text-primary-foreground rounded-full px-3 py-1">
                            {pkg.tag}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl font-medium mb-2">{pkg.title}</h3>
                        <span className="inline-block text-xs bg-secondary text-secondary-foreground rounded-full px-2 py-0.5 mb-3">
                          {pkg.level}
                        </span>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{pkg.description}</p>
                        <div className="space-y-2 mb-6">
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.includesLabel}</p>
                          {pkg.includes.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-sm font-medium text-muted-foreground">{pkg.price}</span>
                          <Button asChild>
                            <Link href={localeHref(pkg.href, locale)}>
                              {c.viewProductsLabel} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* More Services */}
          <section className="py-16 md:py-24 bg-secondary">
            <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.servicesTitle}</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {c.servicesSubtitle}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {c.services.map((service, i) => {
                  const Icon = serviceIcons[i] ?? Palette
                  return (
                    <div key={service.title} className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                  )
                })}
              </div>
              <div className="text-center mt-10">
                <Button asChild>
                  <Link href={localeHref("/salon-partners", locale)}>
                    {c.joinProgrammeLabel} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-primary-foreground">
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">{c.ctaTitle}</h2>
                <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
                  {c.ctaSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href={localeHref("/salon-partners", locale)}>{c.ctaPrimary}</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link href={localeHref("/collections/professional", locale)}>{c.ctaSecondary}</Link>
                  </Button>
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
