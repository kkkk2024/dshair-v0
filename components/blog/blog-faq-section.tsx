// Reusable on-page FAQ section for blog posts.
// Reads the post's `faqs` from the localized content module when a locale is
// provided (so the on-page Q&A matches the visible language), otherwise falls
// back to lib/blog-seo.ts (single source of truth for English). The FAQPage
// JSON-LD is emitted by BlogJsonLd; this component only renders the visible
// cards. Render inside a `.prose` container; the outer wrapper uses
// `not-prose` so Tailwind Typography doesn't restyle the cards.

import { getPost } from "@/lib/blog-seo"
import { getBlogContent } from "@/lib/i18n/blog"
import type { Locale } from "@/lib/i18n/config"

export function BlogFaqSection({
  slug,
  title = "Frequently Asked Questions",
  locale,
}: {
  slug: string
  title?: string
  locale?: Locale
}) {
  const post = getPost(slug)
  const localized = locale ? getBlogContent(slug, locale) : undefined
  const faqs = localized?.faqs ?? post?.faqs ?? []
  if (!faqs || faqs.length === 0) return null

  return (
    <section className="not-prose my-10">
      <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
            <p className="font-semibold text-[#4A1942] mb-2">{faq.question}</p>
            <p className="text-sm text-[#6B3A6E] leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
