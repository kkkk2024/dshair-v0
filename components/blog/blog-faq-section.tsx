// Reusable on-page FAQ section for blog posts.
// Reads the post's `faqs` from lib/blog-seo.ts (single source of truth) so the
// on-page Q&A and the FAQPage JSON-LD (emitted by BlogJsonLd) never drift apart.
// Render inside a `.prose` container; the outer wrapper uses `not-prose` so
// Tailwind Typography doesn't restyle the cards.

import { getPost } from "@/lib/blog-seo"

export function BlogFaqSection({
  slug,
  title = "Frequently Asked Questions",
}: {
  slug: string
  title?: string
}) {
  const post = getPost(slug)
  if (!post || !post.faqs || post.faqs.length === 0) return null

  return (
    <section className="not-prose my-10">
      <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{title}</h2>
      <div className="space-y-4">
        {post.faqs.map((faq) => (
          <div key={faq.question} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
            <p className="font-semibold text-[#4A1942] mb-2">{faq.question}</p>
            <p className="text-sm text-[#6B3A6E] leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
