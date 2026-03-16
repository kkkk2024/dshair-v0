"use client"

import Link from "next/link"
import { MapPin, GraduationCap, Palette, Phone } from "lucide-react"

const services = [
  {
    icon: MapPin,
    title: "Find a Stylist",
    description: "Locate certified D.S HAIR & BEAUTY professionals in your area for expert installation.",
    href: "/find-stylist",
    cta: "Find Near Me",
  },
  {
    icon: GraduationCap,
    title: "Education & Certification",
    description: "Professional training courses to master the art of hair extensions application.",
    href: "/education",
    cta: "View Courses",
  },
  {
    icon: Palette,
    title: "Colour Match",
    description: "Use our colour matching tool to find your perfect shade from our extensive range.",
    href: "/colour-match",
    cta: "Match My Colour",
  },
  {
    icon: Phone,
    title: "Book a Consultation",
    description: "Get personalised advice from our hair experts via video call or in-person.",
    href: "/consultation",
    cta: "Book Now",
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
            {"We're here to help you every step of the way, from choosing the right extensions to professional installation."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group bg-card rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <span className="text-sm font-medium text-accent group-hover:underline">
                {service.cta} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
