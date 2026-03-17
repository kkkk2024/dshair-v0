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
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Premium Hair Extensions
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight mb-6 text-balance">
            Transform Your Look with Luxury Extensions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            {"World's #1 Brand for Professional and Do-It-Yourself Hair Extensions. 100% Remy Human Hair."}
          </p>
          
          {/* Dual CTA - Professional vs DIY */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="group" asChild>
              <Link href="/collections/diy">
                Shop DIY Extensions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <Link href="/collections/professional">
                For Professionals
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Free UK Delivery over £175
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              30-Day Returns
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Klarna Available
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
