"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"

const instagramPosts = [
  { id: 1, image: "/images/instagram-1.jpg", likes: 1234 },
  { id: 2, image: "/images/instagram-2.jpg", likes: 987 },
  { id: 3, image: "/images/instagram-3.jpg", likes: 1567 },
  { id: 4, image: "/images/instagram-4.jpg", likes: 2341 },
  { id: 5, image: "/images/instagram-5.jpg", likes: 876 },
  { id: 6, image: "/images/instagram-6.jpg", likes: 1432 },
]

export function InstagramSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Tag @dshairbeauty for a chance to be featured
          </p>
          <Link
            href="https://instagram.com/dshairbeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <Instagram className="h-5 w-5" />
            @dshairbeauty
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href="https://instagram.com/dshairbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
