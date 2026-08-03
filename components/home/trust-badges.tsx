"use client"

import { ShieldCheck, MapPin, Factory, Truck, Palette, BadgeCheck } from "lucide-react"

const trustBadges = [
  {
    icon: Factory,
    title: "Manufacturer-Direct",
    description: "No distributors, no middlemen. Your salon buys straight from our factory — maximising your margins.",
  },
  {
    icon: ShieldCheck,
    title: "100% Remy 12A Grade",
    description: "Every strand cuticle-aligned, double-drawn, salon-standard quality. We don't sell the cheap stuff.",
  },
  {
    icon: Truck,
    title: "UK & Factory Stock",
    description: "Selected lines UK-warehoused (preparing) + full range factory-direct. Express 3–5 day delivery via DHL/UPS.",
  },
  {
    icon: Palette,
    title: "Free Digital Colour Match",
    description: "Free digital colour catalogue + WhatsApp matching with our specialists. Match your client in minutes, anywhere in the UK & EU.",
  },
]

export function TrustBadgesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Partner With the Manufacturer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Why buy from a distributor when you can go direct? Your salon deserves factory pricing, factory quality, and a partner who understands your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {trustBadges.map((badge) => (
            <div
              key={badge.title}
              className="bg-card rounded-xl p-6 border text-center hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
