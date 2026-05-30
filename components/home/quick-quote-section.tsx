"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function QuickQuoteSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary/90 to-amber-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left: Text */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
              Get Wholesale Pricing in 24 Hours
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-xl">
              Open your trade account today — no minimum first order, free UK delivery, 
              and dedicated support from a real person.
            </p>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
            >
              <Link href="/trade-wholesale#open-account">
                Open Trade Account
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8"
            >
              <a
                href="https://wa.me/8613516946001?text=Hi!%20I%27m%20interested%20in%20wholesale%20pricing%20for%20my%20salon."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
