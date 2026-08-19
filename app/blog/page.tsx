import type { Metadata } from "next"
import { BlogListView } from "@/components/blog/blog-list-view"
import { blogListContent } from "@/lib/i18n/blog/list"

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

export default function BlogPage() {
  return <BlogListView locale="en" />
}
