import type { Metadata } from "next"
import { blogPosts, type BlogPost } from "@/lib/blog-seo"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import Image from "next/image"
import { localeHref } from "@/lib/i18n/routing"
import { blogListContent, type BlogListContent } from "@/lib/i18n/blog/list"
import { getBlogContent } from "@/lib/i18n/blog"
import type { Locale } from "@/lib/i18n/config"

const BASE_URL = "https://www.dshairbeauty.co.uk"

function BlogPageJsonLd({ posts, c, locale }: { posts: BlogPost[]; c: BlogListContent; locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${BASE_URL}/blog#blog`,
        name: c.jsonLdName,
        description: c.jsonLdDescription,
        url: `${BASE_URL}/blog`,
        publisher: { "@id": `${BASE_URL}/#organization` },
        blogPost: posts.map((post) => {
          const lc = getBlogContent(post.slug, locale)
          return {
            "@type": "BlogPosting",
            "@id": `${BASE_URL}/blog/${post.slug}#article`,
            headline: lc?.seoTitle ?? post.title,
            description: lc?.seoDescription ?? post.excerpt,
            url: `${BASE_URL}/blog/${post.slug}`,
            datePublished: post.date,
            author: { "@type": "Organization", name: "D.S HAIR & BEAUTY" },
            publisher: { "@id": `${BASE_URL}/#organization` },
            image: post.image,
          }
        }),
      },
      {
        "@type": "ItemList",
        "@id": `${BASE_URL}/blog#post-list`,
        name: c.postListName,
        itemListElement: posts.map((post, index) => {
          const lc = getBlogContent(post.slug, locale)
          return {
            "@type": "ListItem",
            position: index + 1,
            url: `${BASE_URL}/blog/${post.slug}`,
            name: lc?.seoTitle ?? post.title,
          }
        }),
      },
    ],
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

// Map our locale codes to Intl date locales for localized publish dates.
const DATE_LOCALE: Record<Locale, string> = {
  en: "en-GB",
  de: "de-DE",
  fr: "fr-FR",
  ar: "ar",
  sv: "sv-SE",
  pl: "pl-PL",
}

export function BlogListView({ locale }: { locale: Locale }) {
  const c = blogListContent[locale]
  const posts = blogPosts
  const dateLocale = DATE_LOCALE[locale]

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <BlogPageJsonLd posts={posts} c={c} locale={locale} />
        <main className="flex-1">
          {/* Header */}
          <section className="bg-secondary py-16 md:py-20">
            <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto">
              <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3">{c.heroBadge}</p>
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">{c.heroTitle}</h1>
              <p className="text-lg text-muted-foreground">{c.heroSubtitle}</p>
            </div>
          </section>

          {/* Posts Grid */}
          <section className="py-16 md:py-24">
            <div className="container px-4 md:px-6">
              <h2 className="sr-only">{c.srOnly}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => {
                  const localized = getBlogContent(post.slug, locale)
                  const title = localized?.seoTitle ?? post.title
                  const excerpt = localized?.seoDescription ?? post.excerpt
                  return (
                    <Link
                      key={post.slug}
                      href={localeHref(`/blog/${post.slug}`, locale)}
                      className={`group rounded-2xl overflow-hidden border bg-card hover:shadow-lg transition-shadow ${
                        i === 0 ? "md:col-span-2" : ""
                      }`}
                    >
                      <div className={`relative ${i === 0 ? "aspect-[16/7]" : "aspect-[16/9]"} overflow-hidden`}>
                        <Image
                          src={post.image}
                          alt={title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                          {post.category || c.categoryLabel}
                        </span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span>{new Date(post.date).toLocaleDateString(dateLocale, { year: "numeric", month: "long", day: "numeric" })}</span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="font-serif text-xl font-medium mb-2 group-hover:text-primary transition-colors leading-snug">
                          {title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {excerpt}
                        </p>
                        <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                          {c.readArticle} <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  )
                })}
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
