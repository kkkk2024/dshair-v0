"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Beautiful hair extensions"
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
            Factory-Direct to Your Salon — No Middlemen
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-6 text-balance">
            Your Salon&apos;s<br />
            <span className="text-primary">Supply Partner.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            We supply premium 100% Remy human hair extensions to professional salons across the UK — <strong className="text-foreground">direct from our factory to your salon chair.</strong> 19 years of manufacturing, 0 middlemen.
          </p>
          
          {/* Dual CTA — Salon-Focused */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="group" asChild>
              <Link href="/trade-price-calculator">
                See Your Trade Price
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <Link href="/trade-wholesale">
                Become a Stockist
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Salon Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              500+ UK Salons Supplied
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Free Colour Matching
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              UK Warehouse — Fast Dispatch
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
