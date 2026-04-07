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
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            UK & EU Wholesale — Salons Welcome
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-6 text-balance">
            Stop Losing Clients to Cheap Extensions.<br />
            <span className="text-primary">Become Their Go-To Salon.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            100% Remy human hair — hand-tied weft, tape-in, k-tip, nano ring. 
            <strong className="text-foreground"> Wholesale pricing for professional salons.</strong> 19 years in the industry.
          </p>
          
          {/* Dual CTA - Professional vs DIY */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="group" asChild>
              <Link href="/salon-partners">
                Apply for Trade Account
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <Link href="/collections/professional">
                Browse Wholesale Catalogue
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Trade Pricing Available
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Free Colour Matching Kit
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Manchester-Based, Fast Supply
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
