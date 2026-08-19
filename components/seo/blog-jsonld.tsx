// Per-post structured data for blog articles.
// Renders a BlogPosting Article schema (E-E-A-T / GEO entity signal) plus a
// FAQPage schema when the post carries FAQs. When a `locale` is provided the
// title / description / FAQs are pulled from the localized content module so
// the structured data matches the visible language; otherwise it falls back to
// the English blog-seo.ts entry.

import { ArticleJsonLd, FaqJsonLd, AUTHOR_NAME } from "./json-ld"
import { getPost } from "@/lib/blog-seo"
import { getBlogContent } from "@/lib/i18n/blog"
import type { Locale } from "@/lib/i18n/config"

const BASE_URL = "https://www.dshairbeauty.co.uk"

export function BlogJsonLd({ slug, locale }: { slug: string; locale?: Locale }) {
  const post = getPost(slug)
  const localized = locale ? getBlogContent(slug, locale) : undefined

  const title = localized?.seoTitle ?? post?.title ?? ""
  const description = localized?.seoDescription ?? post?.excerpt ?? ""
  const rawFaqs = (localized?.faqs ?? post?.faqs ?? []) as Array<Record<string, string>>

  if (!title) return null

  const url = `${BASE_URL}/blog/${slug}`
  // Tolerate both {question,answer} (lib/blog-seo) and {q,a} (i18n modules).
  const faqs = rawFaqs.map((f) => ({
    question: f.question ?? f.q ?? "",
    answer: f.answer ?? f.a ?? "",
  }))

  return (
    <>
      <ArticleJsonLd
        title={title}
        description={description}
        datePublished={post?.date ?? ""}
        dateModified={post?.dateModified ?? post?.date ?? ""}
        image={post?.image ?? ""}
        url={url}
        author={AUTHOR_NAME}
        authorUrl={`${BASE_URL}/about/caro-chen`}
      />
      {faqs && faqs.length > 0 && <FaqJsonLd faqs={faqs} />}
    </>
  )
}
