"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "London",
    rating: 5,
    text: "Absolutely stunning quality! The Silk Seam extensions blend so seamlessly with my natural hair. I have received so many compliments. Will definitely be ordering again!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    product: "Silk Seam Clip-In Set",
  },
  {
    id: 2,
    name: "Emma T.",
    location: "Manchester",
    rating: 5,
    text: "As a hairstylist, I only use D.S HAIR & BEAUTY for my clients. The quality is unmatched and the customer service is exceptional. Highly recommend the professional range.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    product: "Professional Tape-Ins",
  },
  {
    id: 3,
    name: "Jessica K.",
    location: "Birmingham",
    rating: 5,
    text: "The colour matching was perfect! I was worried about ordering online but the team helped me find the exact shade. The ponytail extension is my new go-to for events.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    product: "Wrap Ponytail",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Loved by Thousands
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our customers are saying about D.S HAIR & BEAUTY
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-sm border">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-muted-foreground/20" />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden shrink-0">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < current.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl leading-relaxed mb-6">
                  {'"'}{current.text}{'"'}
                </blockquote>
                
                <div>
                  <p className="font-semibold">{current.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {current.location} · Purchased {current.product}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === currentIndex ? "bg-primary" : "bg-muted"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
