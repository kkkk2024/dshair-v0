"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { getHomeContent } from "@/lib/i18n/home"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"

export function CategoryGrid({ locale }: { locale: Locale }) {
  const c = getHomeContent(locale).categoryGrid
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            {c.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {c.categories.map((category, index) => (
            <Link
              key={category.title}
              href={localeHref(category.href, locale)}
              className={`group relative overflow-hidden rounded-lg bg-card ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "aspect-square md:aspect-auto md:h-full min-h-[400px]" : "aspect-[4/5]"}`}>
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className={`font-serif text-white mb-1 ${index === 0 ? "text-2xl md:text-3xl" : "text-xl"}`}>
                        {category.title}
                      </h3>
                      <p className="text-white/80 text-sm">{category.description}</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
