import type { Locale } from "../config"

export interface BlogListContent {
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  jsonLdName: string
  jsonLdDescription: string
  srOnly: string
  postListName: string
  readArticle: string
  categoryLabel: string
}

const en: BlogListContent = {
  heroBadge: "Expert Knowledge",
  heroTitle: "Hair Extension Blog",
  heroSubtitle:
    "Professional guides, product education, and salon business tips — from Manchester's hair extension specialists.",
  jsonLdName: "Hair Extension Blog | DS Hair Beauty",
  jsonLdDescription:
    "Expert guides on hair extensions for UK professional salons. Hand-tied weft, tape-in, nano ring, aftercare and more.",
  srOnly: "Latest Articles",
  postListName: "DS Hair Beauty Blog Posts",
  readArticle: "Read Article",
  categoryLabel: "Guide",
}

// === LOCALES_PLACEHOLDER ===
// de / fr / ar / sv / pl will replace this line (each a full BlogListContent).

export const blogListContent: Record<Locale, BlogListContent> = {
  en,
  de: {
    heroBadge: "Expertisenwissen",
    heroTitle: "Blog für Haarverlängerungen",
    heroSubtitle:
      "Professionelle Ratgeber, Produktschulungen und Tipps für das Salongeschäft — von Manchesters Spezialisten für Haarverlängerungen.",
    jsonLdName: "Blog für Haarverlängerungen | DS Hair Beauty",
    jsonLdDescription:
      "Expert Ratgeber zu Haarverlängerungen für UK-Fachsalons. Hand-tied weft, tape-in, nano ring, Nachsorge und mehr.",
    srOnly: "Neueste Artikel",
  postListName: "DS Hair Beauty Blog-Beiträge",
  readArticle: "Artikel lesen",
  categoryLabel: "Ratgeber",
},
  fr: {
    heroBadge: "Expertise",
    heroTitle: "Blog sur les Extensions de Cheveux",
    heroSubtitle:
      "Guides professionnels, formation produit et conseils pour le business du salon — des spécialistes des extensions de Manchester.",
    jsonLdName: "Blog sur les Extensions de Cheveux | DS Hair Beauty",
    jsonLdDescription:
      "Guides experts sur les extensions de cheveux pour les salons professionnels UK. Hand-tied weft, tape-in, nano ring, soins et plus.",
    srOnly: "Derniers Articles",
  postListName: "Articles du Blog DS Hair Beauty",
  readArticle: "Lire l'article",
  categoryLabel: "Guide",
},
  ar: {
    heroBadge: "خبرة احترافية",
    heroTitle: "مدونة إكسسوارات الشعر",
    heroSubtitle:
      "أدلة احترافية، وتثقيف بالمنتج، ونصائح لأعمال الصالون — من متخصصي إكسسوارات الشعر في Manchester.",
    jsonLdName: "مدونة إكسسوارات الشعر | DS Hair Beauty",
    jsonLdDescription:
      "أدلة خبيرة حول إكسسوارات الشعر لصالونات UK الاحترافية. Hand-tied weft, tape-in, nano ring، والعناية اللاحقة والمزيد.",
    srOnly: "أحدث المقالات",
  postListName: "مقالات مدونة DS Hair Beauty",
  readArticle: "اقرأ المقال",
  categoryLabel: "دليل",
},
  sv: {
    heroBadge: "Expertkunskap",
    heroTitle: "Blogg om Hårförlängningar",
    heroSubtitle:
      "Professionella guider, produktutbildning och tips för salongverksamhet — från Manchesters specialister på hårförlängningar.",
    jsonLdName: "Blogg om Hårförlängningar | DS Hair Beauty",
    jsonLdDescription:
      "Expertguider om hårförlängningar för UK:s professionella salonger. Hand-tied weft, tape-in, nano ring, eftervård och mer.",
    srOnly: "Senaste Artiklarna",
  postListName: "DS Hair Beauty Blogginlägg",
  readArticle: "Läs artikeln",
  categoryLabel: "Guide",
},
  pl: {
    heroBadge: "Wiedza Ekspercka",
    heroTitle: "Blog o Przedłużaniu Włosów",
    heroSubtitle:
      "Profesjonalne przewodniki, edukacja produktowa i porady dla biznesu salonowego — od specjalistów od przedłużania włosów z Manchesteru.",
    jsonLdName: "Blog o Przedłużaniu Włosów | DS Hair Beauty",
    jsonLdDescription:
      "Eksperckie przewodniki o przedłużaniu włosów dla profesjonalnych salonów w UK. Hand-tied weft, tape-in, nano ring, pielęgnacja i więcej.",
    srOnly: "Najnowsze Artykuły",
  postListName: "Wpisy na Blogu DS Hair Beauty",
  readArticle: "Czytaj artykuł",
  categoryLabel: "Przewodnik",
},
}
