// Per-post structured data for blog articles.
// Renders a BlogPosting Article schema (E-E-A-T / GEO entity signal) plus a
// FAQPage schema when the post carries extracted FAQs. Reuses the shared
// ArticleJsonLd / FaqJsonLd builders from ./json-ld so the graph stays consistent.

import { ArticleJsonLd, FaqJsonLd, AUTHOR_NAME } from "./json-ld"
import { getPost } from "@/lib/blog-seo"

const BASE_URL = "https://www.dshairbeauty.co.uk"

export function BlogJsonLd({ slug }: { slug: string }) {
  const post = getPost(slug)
  if (!post) return null

  const url = `${BASE_URL}/blog/${slug}`

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        datePublished={post.date}
        dateModified={post.dateModified ?? post.date}
        image={post.image}
        url={url}
        author={AUTHOR_NAME}
        authorUrl={`${BASE_URL}/about/caro-chen`}
      />
      {post.faqs && post.faqs.length > 0 && (
        <FaqJsonLd
          faqs={post.faqs.map((faq) => ({
            question: faq.question,
            answer: faq.answer,
          }))}
        />
      )}
    </>
  )
}
