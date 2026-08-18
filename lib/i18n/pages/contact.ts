import type { Locale } from "@/lib/i18n/config"

export interface ContactCard {
  title: string
  content: string
  description: string
  actionLabel: string
  highlight: boolean
}

export interface ContactContent {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  heroTitle: string
  heroSubtitle: string
  bannerTitle: string
  bannerSub: string
  bannerButton: string
  infoHeading: string
  cards: ContactCard[]
  salonCtaTitle: string
  salonCtaDesc: string
  salonCtaButton: string
  salonCtaHref: string
  formHeading: string
}

export const contactContent: Record<Locale, ContactContent> = {
  en: {
    metaTitle: "Contact Us | D.S HAIR & BEAUTY",
    metaDescription:
      "Get in touch with D.S HAIR & BEAUTY. WhatsApp, email or enquiry form — we respond within 24 hours. UK hair extension supplier for professional salons.",
    eyebrow: "Get in Touch",
    heroTitle: "Contact Us",
    heroSubtitle:
      "Whether you are a salon owner looking for a wholesale partner, or a customer with a product question — we are here to help.",
    bannerTitle: "Salon owners — fastest route to trade pricing",
    bannerSub: "Message us on WhatsApp and get a response within 2 hours",
    bannerButton: "WhatsApp Us Now",
    infoHeading: "Contact Information",
    cards: [
      { title: "WhatsApp / WeChat", content: "+86 135 1694 6001", description: "Fastest response — typically within 2 hours", actionLabel: "Chat on WhatsApp", highlight: true },
      { title: "Email", content: "caro@dshairbeauty.co.uk", description: "We respond within 24 hours", actionLabel: "Send Email", highlight: false },
      { title: "Location", content: "Manchester, UK", description: "Serving salons across Greater Manchester & Northwest England", actionLabel: "", highlight: false },
      { title: "Business Hours", content: "Mon – Sat, 9am – 6pm GMT", description: "Urgent enquiries answered via WhatsApp any time", actionLabel: "", highlight: false },
    ],
    salonCtaTitle: "Are you a salon owner?",
    salonCtaDesc:
      "Apply for a trade account and get wholesale pricing, free digital colour catalogue, and dedicated support.",
    salonCtaButton: "Apply for Trade Account →",
    salonCtaHref: "/salon-partners",
    formHeading: "Send Us a Message",
  },
  de: {
    metaTitle: "Kontakt | D.S HAIR & BEAUTY",
    metaDescription:
      "Kontaktieren Sie D.S HAIR & BEAUTY. WhatsApp, E-Mail oder Formular – Antwort innerhalb von 24 Stunden. Britischer Lieferant für Haarverlängerungen für professionelle Salons.",
    eyebrow: "Kontakt aufnehmen",
    heroTitle: "Kontakt",
    heroSubtitle:
      "Egal, ob Sie ein Salonbesitzer auf der Suche nach einem Großhandelspartner sind oder eine Produktfrage haben – wir sind für Sie da.",
    bannerTitle: "Salonbesitzer – der schnellste Weg zu Großhandelspreisen",
    bannerSub: "Schreiben Sie uns auf WhatsApp und erhalten Sie innerhalb von 2 Stunden eine Antwort",
    bannerButton: "Jetzt auf WhatsApp",
    infoHeading: "Kontaktinformationen",
    cards: [
      { title: "WhatsApp / WeChat", content: "+86 135 1694 6001", description: "Schnellste Antwort – in der Regel innerhalb von 2 Stunden", actionLabel: "Auf WhatsApp chatten", highlight: true },
      { title: "E-Mail", content: "caro@dshairbeauty.co.uk", description: "Wir antworten innerhalb von 24 Stunden", actionLabel: "E-Mail senden", highlight: false },
      { title: "Standort", content: "Manchester, UK", description: "Wir betreuen Salons in Greater Manchester & Nordwestengland", actionLabel: "", highlight: false },
      { title: "Öffnungszeiten", content: "Mo – Sa, 9–18 Uhr GMT", description: "Dringende Anfragen jederzeit über WhatsApp", actionLabel: "", highlight: false },
    ],
    salonCtaTitle: "Sind Sie Salonbesitzer?",
    salonCtaDesc:
      "Beantragen Sie ein Handelskonto und erhalten Sie Großhandelspreise, einen kostenlosen digitalen Farbkatalog und persönliche Betreuung.",
    salonCtaButton: "Handelskonto beantragen →",
    salonCtaHref: "/salon-partners",
    formHeading: "Schreiben Sie uns",
  },
  fr: {
    metaTitle: "Contact | D.S HAIR & BEAUTY",
    metaDescription:
      "Contactez D.S HAIR & BEAUTY. WhatsApp, e-mail ou formulaire — réponse sous 24 heures. Fournisseur britannique d'extensions pour salons professionnels.",
    eyebrow: "Contactez-nous",
    heroTitle: "Contact",
    heroSubtitle:
      "Que vous soyez un propriétaire de salon à la recherche d'un partenaire grossiste, ou un client avec une question produit — nous sommes là pour vous aider.",
    bannerTitle: "Salons — le chemin le plus rapide vers les prix de gros",
    bannerSub: "Écrivez-nous sur WhatsApp et obtenez une réponse sous 2 heures",
    bannerButton: "WhatsApp maintenant",
    infoHeading: "Coordonnées",
    cards: [
      { title: "WhatsApp / WeChat", content: "+86 135 1694 6001", description: "Réponse la plus rapide — généralement sous 2 heures", actionLabel: "Discuter sur WhatsApp", highlight: true },
      { title: "E-mail", content: "caro@dshairbeauty.co.uk", description: "Nous répondons sous 24 heures", actionLabel: "Envoyer un e-mail", highlight: false },
      { title: "Lieu", content: "Manchester, Royaume-Uni", description: "Nous desservons les salons du Grand Manchester et du Nord-Ouest de l'Angleterre", actionLabel: "", highlight: false },
      { title: "Horaires", content: "Lun – Sam, 9h – 18h GMT", description: "Les urgences sont traitées sur WhatsApp à tout moment", actionLabel: "", highlight: false },
    ],
    salonCtaTitle: "Êtes-vous propriétaire d'un salon ?",
    salonCtaDesc:
      "Demandez un compte professionnel et bénéficiez de prix de gros, d'un catalogue couleurs numérique gratuit et d'un support dédié.",
    salonCtaButton: "Demander un compte pro →",
    salonCtaHref: "/salon-partners",
    formHeading: "Envoyez-nous un message",
  },
  ar: {
    metaTitle: "اتصل بنا | D.S HAIR & BEAUTY",
    metaDescription:
      "تواصل مع D.S HAIR & BEAUTY. واتساب أو بريد إلكتروني أو نموذج استفسار – نرد خلال 24 ساعة. مورد بريطاني لوصلات الشعر للصالونات الاحترافية.",
    eyebrow: "تواصل معنا",
    heroTitle: "اتصل بنا",
    heroSubtitle:
      "سواء كنت مالك صالون تبحث عن شريك بالجملة، أو عميلاً لديه سؤال حول المنتج – نحن هنا للمساعدة.",
    bannerTitle: "أصحاب الصالونات – أسرع طريق لأسعار الجملة",
    bannerSub: "راسلنا على واتساب وستحصل على رد خلال ساعتين",
    bannerButton: "واتساب الآن",
    infoHeading: "معلومات التواصل",
    cards: [
      { title: "واتساب / WeChat", content: "+86 135 1694 6001", description: "أسرع رد – عادة خلال ساعتين", actionLabel: "دردشة على واتساب", highlight: true },
      { title: "البريد الإلكتروني", content: "caro@dshairbeauty.co.uk", description: "نرد خلال 24 ساعة", actionLabel: "إرسال بريد", highlight: false },
      { title: "الموقع", content: "مانشستر، المملكة المتحدة", description: "نخدم صالونات مانشستر الكبرى وشمال غرب إنجلترا", actionLabel: "", highlight: false },
      { title: "ساعات العمل", content: "الإثنين – السبت، 9 ص – 6 م غرينتش", description: "الاستفسارات العاجلة تُرد عبر واتساب في أي وقت", actionLabel: "", highlight: false },
    ],
    salonCtaTitle: "هل أنت مالك صالون؟",
    salonCtaDesc:
      "اطلب حساباً تجارياً واحصل على أسعار الجملة، وكتالوج ألوان رقمي مجاني، ودعم مخصص.",
    salonCtaButton: "اطلب حساباً تجارياً →",
    salonCtaHref: "/salon-partners",
    formHeading: "أرسل لنا رسالة",
  },
  sv: {
    metaTitle: "Kontakt | D.S HAIR & BEAUTY",
    metaDescription:
      "Kontakta D.S HAIR & BEAUTY. WhatsApp, e-post eller formulär — svar inom 24 timmar. Brittisk leverantör av hårförlängning för professionella salonger.",
    eyebrow: "Kontakta oss",
    heroTitle: "Kontakt",
    heroSubtitle:
      "Oavsett om du är salongsägare som söker en grossistpartner, eller en kund med en produktfråga – vi finns här för att hjälpa till.",
    bannerTitle: "Salongsägare — snabbaste vägen till grossistpriser",
    bannerSub: "Skriv till oss på WhatsApp och få svar inom 2 timmar",
    bannerButton: "WhatsApp nu",
    infoHeading: "Kontaktinformation",
    cards: [
      { title: "WhatsApp / WeChat", content: "+86 135 1694 6001", description: "Snabbaste svaret – vanligtvis inom 2 timmar", actionLabel: "Chatta på WhatsApp", highlight: true },
      { title: "E-post", content: "caro@dshairbeauty.co.uk", description: "Vi svarar inom 24 timmar", actionLabel: "Skicka e-post", highlight: false },
      { title: "Plats", content: "Manchester, Storbritannien", description: "Vi betjänar salonger i Stor-Manchester och Nordvästra England", actionLabel: "", highlight: false },
      { title: "Öppettider", content: "Mån – Lör, 9–18 GMT", description: "Brådskande ärenden besvaras via WhatsApp när som helst", actionLabel: "", highlight: false },
    ],
    salonCtaTitle: "Är du salongsägare?",
    salonCtaDesc:
      "Ansök om ett handelskonto och få grossistpriser, gratis digital färgkatalog och dedikerat stöd.",
    salonCtaButton: "Ansök om handelskonto →",
    salonCtaHref: "/salon-partners",
    formHeading: "Skicka ett meddelande",
  },
  pl: {
    metaTitle: "Kontakt | D.S HAIR & BEAUTY",
    metaDescription:
      "Skontaktuj się z D.S HAIR & BEAUTY. WhatsApp, e-mail lub formularz — odpowiadamy w ciągu 24 godzin. Brytyjski dostawca przedłużania włosów dla profesjonalnych salonów.",
    eyebrow: "Skontaktuj się",
    heroTitle: "Kontakt",
    heroSubtitle:
      "Czy jesteś właścicielem salonu szukającym partnera hurtowego, czy klientem z pytaniem o produkt – jesteśmy tutaj, by pomóc.",
    bannerTitle: "Właściciele salonów — najszybsza droga do cen hurtowych",
    bannerSub: "Napisz do nas na WhatsApp i otrzymaj odpowiedź w ciągu 2 godzin",
    bannerButton: "WhatsApp teraz",
    infoHeading: "Dane kontaktowe",
    cards: [
      { title: "WhatsApp / WeChat", content: "+86 135 1694 6001", description: "Najszybsza odpowiedź – zwykle w ciągu 2 godzin", actionLabel: "Czat na WhatsApp", highlight: true },
      { title: "E-mail", content: "caro@dshairbeauty.co.uk", description: "Odpowiadamy w ciągu 24 godzin", actionLabel: "Wyślij e-mail", highlight: false },
      { title: "Lokalizacja", content: "Manchester, Wielka Brytania", description: "Obsługujemy salony w Wielkim Manchesterze i północno-zachodniej Anglii", actionLabel: "", highlight: false },
      { title: "Godziny otwarcia", content: "Pon – Sob, 9–18 GMT", description: "Pilne zapytania o każdej porze przez WhatsApp", actionLabel: "", highlight: false },
    ],
    salonCtaTitle: "Czy jesteś właścicielem salonu?",
    salonCtaDesc:
      "Złóż wniosek o konto hurtowe i otrzymaj ceny hurtowe, bezpłatny cyfrowy katalog kolorów i dedykowane wsparcie.",
    salonCtaButton: "Złóż wniosek o konto →",
    salonCtaHref: "/salon-partners",
    formHeading: "Wyślij nam wiadomość",
  },
}
