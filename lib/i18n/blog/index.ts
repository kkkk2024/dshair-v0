// Central assembler for localized blog post content.
// Each post lives in its own module under lib/i18n/blog/<slug>.ts exporting
// `Record<Locale, XxxContent>`. Register new posts in `blogContents` below and
// in `blogViews` (registry.tsx) so the dynamic /[locale]/blog/[slug] route can
// render them.

import type { Locale } from "../config"
import { clipInContent } from "./clip-in-extensions-guide"

// slug -> localized content (all 6 locales)
export const blogContents: Record<string, Record<Locale, any>> = {
  "clip-in-extensions-guide": clipInContent,
}

export function getBlogContent(slug: string, locale: Locale): any | undefined {
  const map = blogContents[slug]
  if (!map) return undefined
  return map[locale] ?? map.en
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogContents)
}

// A few shared UI strings used by the blog SEO helpers (RelatedGuides, etc.)
// that are not part of any single post's content module.
export const blogShared: Record<string, Record<Locale, string>> = {
  relatedGuides: {
    en: "Related Guides",
    de: "Verwandte Leitfäden",
    fr: "Guides associés",
    ar: "أدلة ذات صلة",
    sv: "Relaterade guider",
    pl: "Powiązane przewodniki",
  },
  collectionBlurb: {
    en: "Ready to stock this look? Explore the full range for UK salons & professionals.",
    de: "Bereit, diesen Look zu führen? Entdecken Sie das volle Sortiment für UK-Salons & Profis.",
    fr: "Prêt à proposer ce look ? Explorez la gamme complète pour les salons et professionnels du Royaume-Uni.",
    ar: "جاهز لتخزين هذا اللوك؟ استكشف المجموعة الكاملة لصالونات والمحترفين في المملكة المتحدة.",
    sv: "Redo att ta in den här looken? Utforska hela sortimentet för brittiska salonger & proffs.",
    pl: "Gotowy, by wprowadzić ten look do oferty? Poznaj pełną gamę dla salonów i profesjonalistów w Wielkiej Brytanii.",
  },
}
