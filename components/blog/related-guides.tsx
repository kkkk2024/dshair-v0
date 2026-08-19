import Link from "next/link"
import { getPost } from "@/lib/blog-seo"
import { BLOG_INTERNAL_LINKS } from "@/lib/blog-internal-links"
import { getBlogContent, blogShared } from "@/lib/i18n/blog"
import type { Locale } from "@/lib/i18n/config"

export function RelatedGuides({ slug, locale }: { slug: string; locale?: Locale }) {
  const map = BLOG_INTERNAL_LINKS[slug]
  if (!map) return null

  const related = map.related
    .map((s) => {
      const post = getPost(s)
      if (!post) return null
      const localized = locale ? getBlogContent(s, locale) : undefined
      const title = localized?.seoTitle ?? post.title
      return { slug: s, title }
    })
    .filter((p): p is { slug: string; title: string } => Boolean(p))
    .slice(0, 3)

  if (related.length === 0 && !map.collection) return null

  const relatedLabel = locale ? blogShared.relatedGuides[locale] : "Related Guides"
  const blurb = locale ? blogShared.collectionBlurb[locale] : "Ready to stock this look? Explore the full range for UK salons & professionals."

  return (
    <section className="mt-12 pt-8 border-t" aria-label="Related guides">
      <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6 text-foreground">
        {relatedLabel}
      </h2>

      {related.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40 hover:bg-accent/40"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-primary/70">
                {getPost(post.slug)?.category ?? "Guide"}
              </span>
              <p className="mt-2 font-medium leading-snug text-foreground group-hover:text-primary">
                {post.title}
              </p>
            </Link>
          ))}
        </div>
      )}

      {map.collection && (
        <div className="mt-6 rounded-xl bg-[#4A1942] px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/90 text-sm md:text-base">
            {blurb}
          </p>
          <Link
            href={map.collection.href}
            className="shrink-0 inline-flex items-center justify-center rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
          >
            {map.collection.label}
          </Link>
        </div>
      )}
    </section>
  )
}
