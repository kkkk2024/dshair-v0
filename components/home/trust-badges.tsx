"use client"

import { ShieldCheck, MapPin, ThumbsUp, Verified } from "lucide-react"

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "100% Remy Guaranteed",
    description: "Every strand cuticle-aligned, double-drawn, quality-checked before dispatch.",
  },
  {
    icon: Verified,
    title: "UK Trading Standards Compliant",
    description: "Fully compliant with UK regulations. Paperwork and traceability on every batch.",
  },
  {
    icon: MapPin,
    title: "Manchester Stockist",
    description: "Local warehouse in Manchester. Same-day dispatch for orders before 2 PM.",
  },
  {
    icon: ThumbsUp,
    title: "Free Colour Matching",
    description: "Free on-site colour matching for Manchester salons. Virtual matching UK-wide via WhatsApp.",
  },
]

export function TrustBadgesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Our Quality, Recognised
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The certifications and guarantees that give salons confidence to partner with us.
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
