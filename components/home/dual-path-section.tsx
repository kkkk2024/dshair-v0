"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export function DualPathSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Choose Your Path
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you are looking to enhance your own look or serve your salon clients, we have the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* DIY Path */}
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/3] lg:aspect-[3/2]">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80"
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

          {/* Professional Path */}
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/3] lg:aspect-[3/2]">
              <Image
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80"
                alt="Professional hair extensions for stylists"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
            </div>
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <span className="text-white/70 text-sm font-medium tracking-wider uppercase mb-2">
                For Stylists
              </span>
              <h3 className="font-serif text-white text-2xl md:text-3xl lg:text-4xl mb-3">
                Professional Extensions
              </h3>
              <p className="text-white/80 mb-4 max-w-md">
                Premium quality extensions for salon professionals. Join our network and access exclusive pricing.
              </p>
              <ul className="text-white/70 text-sm mb-6 flex flex-wrap gap-x-6 gap-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  Pro pricing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  Certification
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-400" />
                  Training available
                </li>
              </ul>
              <Button variant="secondary" className="w-fit group/btn" asChild>
                <Link href="/collections/professional">
                  Shop Professional
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
