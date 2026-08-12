import type { Metadata } from "next"
import { blogPosts, type BlogPost } from "@/lib/blog-seo"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Hair Extension Blog | Trade Guides & Salon Business Tips | DS Hair Beauty",
  description:
    "Expert B2B guides for UK salon owners — wholesale pricing, private label, profit margins, trade accounts, supplier selection, and how to start selling hair extensions in your salon.",
  keywords: [
    "hair extensions blog UK",
    "wholesale hair extensions guide",
    "salon trade account",
    "private label hair extensions",
    "hair extension profit margin",
    "hair extension stockist UK",
    "how to start selling hair extensions",
    "trade hair extensions UK",
    "salon business tips",
    "factory direct hair supplier",
  ],
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/blog",
  },
  openGraph: {
    title: "Hair Extension Blog | B2B Trade Guides for UK Salons | DS Hair Beauty",
    description: "B2B guides for UK salon owners — wholesale pricing, private label, profit margins, trade accounts, and supplier selection.",
    type: "article",
    url: "https://www.dshairbeauty.co.uk/blog",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hair Extension Blog | B2B Trade Guides for UK Salons",
    description: "Wholesale pricing, private label, profit margins — expert guides for salon owners.",
  },
}

const posts = blogPosts
// Blog JSON-LD component (server-side)
function BlogPageJsonLd({ posts }: { posts: BlogPost[] }) {
  const baseUrl = "https://www.dshairbeauty.co.uk"
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${baseUrl}/blog#blog`,
        name: "Hair Extension Blog | DS Hair Beauty",
        description:
          "Expert guides on hair extensions for UK professional salons. Hand-tied weft, tape-in, nano ring, aftercare and more.",
        url: `${baseUrl}/blog`,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        blogPost: posts.map((post) => ({
          "@type": "BlogPosting",
          "@id": `${baseUrl}/blog/${post.slug}#article`,
          headline: post.title,
          description: post.excerpt,
          url: `${baseUrl}/blog/${post.slug}`,
          datePublished: post.date,
          author: {
            "@type": "Organization",
            name: "D.S HAIR & BEAUTY",
          },
          publisher: {
            "@id": `${baseUrl}/#organization`,
          },
          image: post.image,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${baseUrl}/blog#post-list`,
        name: "DS Hair Beauty Blog Posts",
        itemListElement: posts.map((post, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${baseUrl}/blog/${post.slug}`,
          name: post.title,
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function BlogPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <BlogPageJsonLd posts={posts} />
        <main className="flex-1">
          {/* Header */}
          <section className="bg-secondary py-16 md:py-20">
            <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto">
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">Expert Knowledge</p>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Hair Extension Blog</h1>
              <p className="text-lg text-muted-foreground">
                Professional guides, product education, and salon business tips — from Manchester&apos;s hair extension specialists.
              </p>
            </div>
          </section>

          {/* Posts Grid */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <h2 className="sr-only">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={`group rounded-2xl overflow-hidden border bg-card hover:shadow-lg transition-shadow ${
                      i === 0 ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className={`relative ${i === 0 ? "aspect-[16/7]" : "aspect-[16/9]"} overflow-hidden`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <span>{new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-serif text-xl font-medium mb-2 group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read Article <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
