"use client"

import Link from "next/link"
import { MapPin, GraduationCap, Palette, Phone, Building2 } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Salon Partners",
    description: "Manchester-based wholesale supply. Trade pricing, free colour kit, no minimum order. Apply for your trade account today.",
    href: "/salon-partners",
    cta: "Apply for Trade Account",
    highlight: true,
  },
  {
    icon: MapPin,
    title: "Find a Stylist",
    description: "Locate certified D.S HAIR & BEAUTY professionals in your area for expert installation.",
    href: "/find-stylist",
    cta: "Find Near Me",
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Education & Certification",
    description: "Professional training courses to master the art of hair extensions application.",
    href: "/education",
    cta: "View Courses",
    highlight: false,
  },
  {
    icon: Palette,
    title: "Colour Match",
    description: "Use our colour matching tool to find your perfect shade from our extensive range.",
    href: "/colour-match",
    cta: "Match My Colour",
    highlight: false,
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Expert Support & Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {"We're here to help you every step of the way — from choosing the right extensions to professional salon supply."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
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
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className={`font-semibold text-lg mb-2 ${service.highlight ? "" : ""}`}>
                {service.title}
              </h3>
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
          ))}
        </div>
      </div>
    </section>
  )
}
