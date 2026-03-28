"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Building2 } from "lucide-react"

export function DualPathSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Choose Your Path
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you are looking to enhance your own look or supply your salon clients with the best, we have exactly what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* DIY Path */}
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/3] lg:aspect-[3/2]">
              <Image
                src="/images/path-diy.jpg"
                alt="DIY hair extensions for home use"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            </div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <span className="text-white/70 text-sm font-medium tracking-wider uppercase mb-2">
                For You
              </span>
              <h3 className="font-serif text-white text-2xl md:text-3xl lg:text-4xl mb-3">
                DIY Extensions
              </h3>
              <p className="text-white/80 mb-4 max-w-md">
                Transform your look at home with our easy-to-apply clip-in extensions, ponytails, and more.
              </p>
              <ul className="text-white/70 text-sm mb-6 flex flex-wrap gap-x-6 gap-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  Easy application
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  No salon needed
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  Reusable
                </li>
              </ul>
              <Button variant="secondary" className="w-fit group/btn" asChild>
                <Link href="/collections/diy">
                  Shop DIY Extensions
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Professional Path — Upgraded */}
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/3] lg:aspect-[3/2]">
              <Image
                src="/images/path-pro.jpg"
                alt="Professional hair extensions for salons Manchester"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/10" />
            </div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 backdrop-blur text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <Building2 className="h-3 w-3" />
                  Manchester Salon Supplier
                </span>
              </div>
              <span className="text-white/70 text-sm font-medium tracking-wider uppercase mb-2">
                For Salons & Stylists
              </span>
              <h3 className="font-serif text-white text-2xl md:text-3xl lg:text-4xl mb-3">
                Professional Extensions
              </h3>
              <p className="text-white/80 mb-4 max-w-md">
                Trade pricing. Local Manchester supply. Free colour matching kit. No minimum order to start.
              </p>
              <ul className="text-white/70 text-sm mb-6 flex flex-wrap gap-x-6 gap-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  Hand-Tied Weft
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  Balayage Weft
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  Nano Ring / Tape-In
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  Wholesale pricing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  Next-day delivery
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" className="group/btn" asChild>
                  <Link href="/salon-partners">
                    Apply for Trade Account
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/20 hover:text-white"
                  asChild
                >
                  <Link href="/collections/professional">Browse Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Salon Value Strip */}
        <div className="mt-8 rounded-2xl bg-primary/5 border border-primary/10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-1">Manchester Salons — We Are Local</h3>
              <p className="text-muted-foreground text-sm max-w-xl">
                19 years of hair extension expertise. Direct factory relationships. Free colour matching kit with your first trade order. Same or next-day supply across Greater Manchester.
              </p>
            </div>
            <Button size="lg" className="flex-shrink-0" asChild>
              <Link href="/salon-partners">
                Become a Partner →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
