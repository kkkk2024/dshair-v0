// Registry mapping each localized blog post slug to its locale-aware View
// component. The dynamic /[locale]/blog/[slug] route renders the matching
// View. Add new posts here as their View + content module are created.

import type { Locale } from "./config"
import type { ComponentType } from "react"
import { ClipInExtensionsGuideView } from "@/components/blog/clip-in-view"

export const blogViews: Record<string, ComponentType<{ locale: Locale }>> = {
  "clip-in-extensions-guide": ClipInExtensionsGuideView,
}
