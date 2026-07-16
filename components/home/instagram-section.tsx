"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Youtube, Facebook } from "lucide-react"

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
          <p className="text-muted-foreground text-lg mb-6">
            Tag @d.shairbeauty for a chance to be featured
          </p>
          
          {/* Social Media Icons Row */}
          <div className="flex flex-wrap justify-center gap-6 text-accent">
            {/* Instagram */}
            <Link
              href="https://instagram.com/d.shairbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            
            {/* Pinterest */}
            <Link
              href="https://uk.pinterest.com/dshairbeautyuk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Pinterest"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </Link>
            
            {/* TikTok */}
            <Link
              href="https://www.tiktok.com/@d.shairbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="TikTok"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </Link>
            
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/D.SHairBeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            
            {/* LinkedIn (coming soon - placeholder) */}
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform opacity-30 cursor-not-allowed"
              aria-label="LinkedIn (Coming Soon)"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href="https://instagram.com/d.shairbeauty"
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
