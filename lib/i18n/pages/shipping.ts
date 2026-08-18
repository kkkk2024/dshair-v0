import type { Locale } from "../config"

export interface ShipCard { title: string; desc: string; bullets: string[] }
export interface ShipStep { step: string; title: string; desc: string }
export interface ShippingContent {
  metaTitle: string
  metaDescription: string
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  breadcrumb: string
  cards: ShipCard[]
  processTitle: string
  steps: ShipStep[]
  ctaTitle: string
  ctaSubtitle: string
  ctaContact: string
  ctaReturns: string
}

export const shippingContent: Record<Locale, ShippingContent> = {
  en: {
    metaTitle: "Shipping & Delivery | D.S HAIR & BEAUTY",
    metaDescription: "Shipping and delivery information for D.S Hair & Beauty. Free UK delivery on orders over £175. Fast dispatch on orders; express 3–5 day delivery. International shipping available.",
    heroEyebrow: "Customer Information",
    heroTitle: "Shipping & Delivery",
    heroSubtitle: "Fast, tracked delivery across the UK and worldwide. Fast dispatch; express 3–5 day delivery orders placed before 2pm (UK time).",
    breadcrumb: "Shipping & Delivery",
    cards: [
      {
        title: "UK Standard Delivery",
        desc: "Tracked delivery across mainland UK via DPD, Royal Mail or Yodel — depending on weight and destination.",
        bullets: [
          "Free standard delivery on UK orders over £175",
          "Orders under £175: £4.95 standard delivery",
          "Fast dispatch; express 3–5 day delivery orders placed before 2pm",
          "Estimated transit: 3–5 working days"
        ]
      },
      {
        title: "UK Express (3–5 days) & Saturday",
        desc: "Need it tomorrow? Upgrade to next-working-day delivery at checkout.",
        bullets: [
          "Next-working-day delivery: £9.95 (order before 2pm)",
          "Saturday delivery: £14.95 (order before Friday 2pm)",
          "Tracked, signed-for, SMS notifications included"
        ]
      },
      {
        title: "International Shipping",
        desc: "We ship to salons and stylists across Europe and worldwide via DHL Express and FedEx.",
        bullets: [
          "EU & Ireland: from £14.95 (3–5 working days)",
          "USA & Canada: from £24.95 (3–5 working days)",
          "Rest of world: quoted at checkout",
          "Customs duties & import taxes are the customer's responsibility"
        ]
      },
      {
        title: "Salon Partner Trade Orders",
        desc: "Trade account holders get priority handling and dedicated delivery routes.",
        bullets: [
          "Fast dispatch on trade orders; express 3–5 day delivery",
          "Free UK delivery on all trade orders, no minimum spend",
          "Dedicated WhatsApp support line for delivery tracking"
        ]
      }
    ],
    processTitle: "How we process your order",
    steps: [
      {
        step: "Step 01",
        title: "Order received",
        desc: "You'll get an order confirmation by email within minutes. Check your spam folder if you don't see it."
      },
      {
        step: "Step 02",
        title: "Picked & packed",
        desc: "Stock orders are picked, quality-checked and packed within one working day. Custom-colour orders may take 1–2 extra days."
      },
      {
        step: "Step 03",
        title: "Dispatched",
        desc: "You'll receive a tracking link by email as soon as your order leaves our manufacturing partner (UK warehouse launching)."
      }
    ],
    ctaTitle: "Still have questions about delivery?",
    ctaSubtitle: "Our team is available Monday–Saturday to help with tracking, special requests and delivery quotes.",
    ctaContact: "Contact the team",
    ctaReturns: "Read our returns policy"
  },
  de: {
    metaTitle: "Versand & Lieferung | D.S HAIR & BEAUTY",
    metaDescription: "Versand- und Lieferinformationen für D.S Hair & Beauty. Kostenloser UK-Versand bei Bestellungen ab £175. Schneller Versand; Expresslieferung in 3–5 Tagen. Internationaler Versand verfügbar.",
    heroEyebrow: "Kundeninformationen",
    heroTitle: "Versand & Lieferung",
    heroSubtitle: "Schneller, sendungsverfolgter Versand im gesamten UK und weltweit. Schneller Versand; Expresslieferung in 3–5 Tagen für Bestellungen vor 14 Uhr (UK-Zeit).",
    breadcrumb: "Versand & Lieferung",
    cards: [
      {
        title: "UK Standardversand",
        desc: "Sendungsverfolgter Versand im gesamten Festland-UK über DPD, Royal Mail oder Yodel — je nach Gewicht und Zielort.",
        bullets: [
          "Kostenloser Standardversand bei UK-Bestellungen ab £175",
          "Bestellungen unter £175: £4.95 Standardversand",
          "Schneller Versand; Expresslieferung in 3–5 Tagen für Bestellungen vor 14 Uhr",
          "Geschätzte Transitzeit: 3–5 Werktage"
        ]
      },
      {
        title: "UK Express (3–5 Tage) & Samstag",
        desc: "Sie brauchen es morgen? Wählen Sie an der Kasse den Versand am nächsten Werktag.",
        bullets: [
          "Versand am nächsten Werktag: £9.95 (Bestellung vor 14 Uhr)",
          "Samstagslieferung: £14.95 (Bestellung vor Freitag 14 Uhr)",
          "Sendungsverfolgt, mit Unterschrift, SMS-Benachrichtigungen inklusive"
        ]
      },
      {
        title: "Internationaler Versand",
        desc: "Wir liefern an Salons und Stylisten in ganz Europa und weltweit über DHL Express und FedEx.",
        bullets: [
          "EU & Irland: ab £14.95 (3–5 Werktage)",
          "USA & Kanada: ab £24.95 (3–5 Werktage)",
          "Übrige Welt: Angebot an der Kasse",
          "Zollgebühren & Einfuhrabgaben gehen zu Lasten des Kunden"
        ]
      },
      {
        title: "Trade-Bestellungen für Salon-Partner",
        desc: "Inhaber von Trade-Konten erhalten Vorrang und dedizierte Lieferwege.",
        bullets: [
          "Schneller Versand bei Trade-Bestellungen; Expresslieferung in 3–5 Tagen",
          "Kostenloser UK-Versand bei allen Trade-Bestellungen, ohne Mindestbestellwert",
          "Dedizierte WhatsApp-Supportlinie für Lieferverfolgung"
        ]
      }
    ],
    processTitle: "So bearbeiten wir Ihre Bestellung",
    steps: [
      {
        step: "Step 01",
        title: "Bestellung eingegangen",
        desc: "Sie erhalten innerhalb von Minuten eine Bestellbestätigung per E-Mail. Prüfen Sie Ihren Spam-Ordner, falls sie nicht ankommt."
      },
      {
        step: "Step 02",
        title: "Kommissioniert & verpackt",
        desc: "Lagerbestellungen werden innerhalb eines Werktags kommissioniert, qualitätsgeprüft und verpackt. Sonderfarb-Bestellungen können 1–2 Tage länger dauern."
      },
      {
        step: "Step 03",
        title: "Versendet",
        desc: "Sie erhalten einen Sendungsverfolgungs-Link per E-Mail, sobald Ihre Bestellung unser Fertigungspartner (UK warehouse launching) verlässt."
      }
    ],
    ctaTitle: "Noch Fragen zur Lieferung?",
    ctaSubtitle: "Unser Team ist Montag–Samstag erreichbar, um bei Sendungsverfolgung, Sonderwünschen und Lieferangeboten zu helfen.",
    ctaContact: "Team kontaktieren",
    ctaReturns: "Unsere Rückgaberichtlinie lesen"
  },
  fr: {
    metaTitle: "Livraison & Expédition | D.S HAIR & BEAUTY",
    metaDescription: "Informations sur la livraison et l'expédition pour D.S Hair & Beauty. Livraison gratuite au UK pour les commandes de plus de £175. Expédition rapide ; livraison express en 3–5 jours. Expédition internationale disponible.",
    heroEyebrow: "Informations client",
    heroTitle: "Livraison & Expédition",
    heroSubtitle: "Une livraison rapide et suivie dans tout le UK et dans le monde entier. Expédition rapide ; livraison express en 3–5 jours pour les commandes passées avant 14h (heure UK).",
    breadcrumb: "Livraison & Expédition",
    cards: [
      {
        title: "Livraison standard UK",
        desc: "Livraison suivie dans tout le Royaume-Uni continental via DPD, Royal Mail ou Yodel — selon le poids et la destination.",
        bullets: [
          "Livraison standard gratuite pour les commandes UK de plus de £175",
          "Commandes de moins de £175 : £4.95 en livraison standard",
          "Expédition rapide ; livraison express en 3–5 jours pour les commandes passées avant 14h",
          "Délai de transit estimé : 3–5 jours ouvrés"
        ]
      },
      {
        title: "Express UK (3–5 jours) & Samedi",
        desc: "Besoin de votre commande demain ? Optez pour la livraison le jour ouvré suivant au moment du paiement.",
        bullets: [
          "Livraison le jour ouvré suivant : £9.95 (commande avant 14h)",
          "Livraison samedi : £14.95 (commande avant vendredi 14h)",
          "Suivie, avec signature, notifications SMS incluses"
        ]
      },
      {
        title: "Expédition internationale",
        desc: "Nous expédions vers les salons et stylistes de toute l'Europe et du monde entier via DHL Express et FedEx.",
        bullets: [
          "UE & Irlande : à partir de £14.95 (3–5 jours ouvrés)",
          "États-Unis & Canada : à partir de £24.95 (3–5 jours ouvrés)",
          "Reste du monde : devis au moment du paiement",
          "Les droits de douane et taxes à l'importation sont à la charge du client"
        ]
      },
      {
        title: "Commandes professionnelles salon partenaire",
        desc: "Les détenteurs de compte pro bénéficient d'un traitement prioritaire et de circuits de livraison dédiés.",
        bullets: [
          "Expédition rapide des commandes pro ; livraison express en 3–5 jours",
          "Livraison UK gratuite sur toutes les commandes pro, sans minimum d'achat",
          "Ligne de support WhatsApp dédiée pour le suivi des livraisons"
        ]
      }
    ],
    processTitle: "Comment nous traitons votre commande",
    steps: [
      {
        step: "Step 01",
        title: "Commande reçue",
        desc: "Vous recevrez une confirmation de commande par e-mail en quelques minutes. Consultez votre dossier spam si vous ne la voyez pas."
      },
      {
        step: "Step 02",
        title: "Préparée & emballée",
        desc: "Les commandes en stock sont préparées, contrôlées et emballées sous un jour ouvré. Les commandes de couleur personnalisée peuvent prendre 1–2 jours supplémentaires."
      },
      {
        step: "Step 03",
        title: "Expédiée",
        desc: "Vous recevrez un lien de suivi par e-mail dès que votre commande quitte notre partenaire de fabrication (UK warehouse launching)."
      }
    ],
    ctaTitle: "Vous avez encore des questions sur la livraison ?",
    ctaSubtitle: "Notre équipe est disponible du lundi au samedi pour vous aider avec le suivi, les demandes particulières et les devis de livraison.",
    ctaContact: "Contacter l'équipe",
    ctaReturns: "Lire notre politique de retours"
  },
  ar: {
    metaTitle: "الشحن والتوصيل | D.S HAIR & BEAUTY",
    metaDescription: "معلومات الشحن والتوصيل لـ D.S Hair & Beauty. توصيل مجاني في UK للطلبات التي تزيد عن £175. شحن سريع؛ توصيل سريع خلال 3–5 أيام. يتوفر شحن دولي.",
    heroEyebrow: "معلومات العملاء",
    heroTitle: "الشحن والتوصيل",
    heroSubtitle: "توصيل سريع مع تتبع في جميع أنحاء UK والعالم. شحن سريع؛ توصيل سريع خلال 3–5 أيام للطلبات المقدمة قبل 2pm (UK time).",
    breadcrumb: "الشحن والتوصيل",
    cards: [
      {
        title: "التوصيل القياسي في UK",
        desc: "توصيل مع تتبع في جميع أنحاء بريطانيا العظمى عبر DPD أو Royal Mail أو Yodel — حسب الوزن والوجهة.",
        bullets: [
          "توصيل قياسي مجاني للطلبات في UK التي تزيد عن £175",
          "الطلبات أقل من £175: £4.95 توصيل قياسي",
          "شحن سريع؛ توصيل سريع خلال 3–5 أيام للطلبات المقدمة قبل 2pm",
          "مدة العبور المقدرة: 3–5 أيام عمل"
        ]
      },
      {
        title: "التوصيل السريع في UK (3–5 أيام) والسبت",
        desc: "تحتاجه غداً؟ قم بترقية التوصيل في يوم العمل التالي عند الدفع.",
        bullets: [
          "توصيل في يوم العمل التالي: £9.95 (اطلب قبل 2pm)",
          "توصيل السبت: £14.95 (اطلب قبل Friday 2pm)",
          "مع تتبع وتوقيع وإشعارات SMS"
        ]
      },
      {
        title: "الشحن الدولي",
        desc: "نشحن إلى الصالونات والمصففين في جميع أنحاء أوروبا والعالم عبر DHL Express و FedEx.",
        bullets: [
          "الاتحاد الأوروبي وإيرلندا: من £14.95 (3–5 أيام عمل)",
          "الولايات المتحدة وكندا: من £24.95 (3–5 أيام عمل)",
          "بقية العالم: يُحدد السعر عند الدفع",
          "الرسوم الجمركية وضرائب الاستيراد تقع على مسؤولية العميل"
        ]
      },
      {
        title: "طلبات التجارة لشركاء الصالون",
        desc: "يحصل أصحاب الحسابات التجارية على أولوية ومسارات توصيل مخصصة.",
        bullets: [
          "شحن سريع لطلبات التجارة؛ توصيل سريع خلال 3–5 أيام",
          "توصيل مجاني في UK لجميع طلبات التجارة دون حد أدنى",
          "خط دعم مخصص عبر WhatsApp لتتبع التوصيل"
        ]
      }
    ],
    processTitle: "كيف نعالج طلبك",
    steps: [
      {
        step: "Step 01",
        title: "تم استلام الطلب",
        desc: "ستتلقى تأكيد الطلب عبر البريد الإلكتروني خلال دقائق. تحقق من مجلد البريد المزعج إذا لم يصلك."
      },
      {
        step: "Step 02",
        title: "الالتقاط والتغليف",
        desc: "تُلتقط طلبات المخزون وتُفحص جودتها وتُغلف خلال يوم عمل واحد. قد تستغرق طلبات الألوان المخصصة 1–2 يوم إضافي."
      },
      {
        step: "Step 03",
        title: "تم الشحن",
        desc: "ستتلقى رابط تتبع عبر البريد الإلكتروني بمجرد مغادرة طلبك شريك التصنيع لدينا (UK warehouse launching)."
      }
    ],
    ctaTitle: "لا يزال لديك أسئلة حول التوصيل؟",
    ctaSubtitle: "فريقنا متاح من Monday–Saturday لمساعدتك في التتبع والطلبات الخاصة وعروض التوصيل.",
    ctaContact: "تواصل مع الفريق",
    ctaReturns: "اقرأ سياسة الإرجاع لدينا"
  },
  sv: {
    metaTitle: "Frakt & Leverans | D.S HAIR & BEAUTY",
    metaDescription: "Frakt- och leveransinformation för D.S Hair & Beauty. Gratis frakt inom UK på beställningar över £175. Snabb hantering; expressleverans på 3–5 dagar. Internationell frakt tillgänglig.",
    heroEyebrow: "Kundinformation",
    heroTitle: "Frakt & Leverans",
    heroSubtitle: "Snabb, spårbar leverans i hela UK och världen. Snabb hantering; expressleverans på 3–5 dagar för beställningar lagda före 14.00 (UK-tid).",
    breadcrumb: "Frakt & Leverans",
    cards: [
      {
        title: "Standardfrakt UK",
        desc: "Spårbar leverans inom Storbritannien via DPD, Royal Mail eller Yodel — beroende på vikt och destination.",
        bullets: [
          "Gratis standardfrakt på UK-beställningar över £175",
          "Beställningar under £175: £4.95 standardfrakt",
          "Snabb hantering; expressleverans på 3–5 dagar för beställningar före 14.00",
          "Beräknad transit: 3–5 arbetsdagar"
        ]
      },
      {
        title: "Express UK (3–5 dagar) & lördag",
        desc: "Behöver du den i morgon? Uppgradera till leverans nästa arbetsdag vid kassan.",
        bullets: [
          "Leverans nästa arbetsdag: £9.95 (beställ före 14.00)",
          "Lördagsleverans: £14.95 (beställ före fredag 14.00)",
          "Spårbar, med signering, SMS-notiser ingår"
        ]
      },
      {
        title: "Internationell frakt",
        desc: "Vi skickar till salonger och stylister i hela Europa och världen via DHL Express och FedEx.",
        bullets: [
          "EU & Irland: från £14.95 (3–5 arbetsdagar)",
          "USA & Kanada: från £24.95 (3–5 arbetsdagar)",
          "Övriga världen: offert vid kassan",
          "Tullavgifter & importskatter betalas av kunden"
        ]
      },
      {
        title: "Handelsbeställningar för salongspartners",
        desc: "Innehavare av handelskonto får prioriterad hantering och dedikerade leveransvägar.",
        bullets: [
          "Snabb hantering av handelsbeställningar; expressleverans på 3–5 dagar",
          "Gratis UK-frakt på alla handelsbeställningar, inget minimibelopp",
          "Dedikerad WhatsApp-support för leveransspårning"
        ]
      }
    ],
    processTitle: "Så hanterar vi din beställning",
    steps: [
      {
        step: "Step 01",
        title: "Beställning mottagen",
        desc: "Du får en orderbekräftelse via e-post inom några minuter. Kolla skräpposten om du inte ser den."
      },
      {
        step: "Step 02",
        title: "Plockad & packad",
        desc: "Lagerbeställningar plockas, kvalitetskontrolleras och packas inom en arbetsdag. Beställningar med anpassad färg kan ta 1–2 extra dagar."
      },
      {
        step: "Step 03",
        title: "Skickad",
        desc: "Du får en spårningslänk via e-post så snart din bestellning lämnar vår tillverkningspartner (UK warehouse launching)."
      }
    ],
    ctaTitle: "Har du fortfarande frågor om leveransen?",
    ctaSubtitle: "Vårt team finns tillgängligt måndag–lördag för hjälp med spårning, specialönskemål och leveransofferter.",
    ctaContact: "Kontakta teamet",
    ctaReturns: "Läs vår returpolicy"
  },
  pl: {
    metaTitle: "Wysyłka i Dostawa | D.S HAIR & BEAUTY",
    metaDescription: "Informacje o wysyłce i dostawie dla D.S Hair & Beauty. Darmowa dostawa w UK przy zamówieniach powyżej £175. Szybka wysyłka; ekspresowa dostawa w 3–5 dni. Dostępna wysyłka międzynarodowa.",
    heroEyebrow: "Informacje dla klienta",
    heroTitle: "Wysyłka i Dostawa",
    heroSubtitle: "Szybka, z możliwością śledzenia dostawa w całym UK i na świecie. Szybka wysyłka; ekspresowa dostawa w 3–5 dni dla zamówień złożonych przed 14:00 (czas UK).",
    breadcrumb: "Wysyłka i Dostawa",
    cards: [
      {
        title: "Standardowa wysyłka UK",
        desc: "Dostawa z możliwością śledzenia w całej Wielkiej Brytanii przez DPD, Royal Mail lub Yodel — w zależności od wagi i miejsca docelowego.",
        bullets: [
          "Darmowa standardowa dostawa w UK przy zamówieniach powyżej £175",
          "Zamówienia poniżej £175: £4.95 standardowa wysyłka",
          "Szybka wysyłka; ekspresowa dostawa w 3–5 dni dla zamówień przed 14:00",
          "Szacowany czas tranzylu: 3–5 dni roboczych"
        ]
      },
      {
        title: "Ekspres UK (3–5 dni) i sobota",
        desc: "Potrzebujesz tego jutro? Wybierz dostawę w następny dzień roboczy przy kasie.",
        bullets: [
          "Dostawa w następny dzień roboczy: £9.95 (zamów przed 14:00)",
          "Dostawa w sobotę: £14.95 (zamów przed piątkiem 14:00)",
          "Z możliwością śledzenia, za pobraniem podpisu, z powiadomieniami SMS"
        ]
      },
      {
        title: "Wysyłka międzynarodowa",
        desc: "Wysyłamy do salonów i stylistów w całej Europie i na świecie przez DHL Express i FedEx.",
        bullets: [
          "UE i Irlandia: od £14.95 (3–5 dni roboczych)",
          "USA i Kanada: od £24.95 (3–5 dni roboczych)",
          "Reszta świata: wycena przy kasie",
          "Cła i podatki importowe obciążają klienta"
        ]
      },
      {
        title: "Zamówienia handlowe dla partnerów salonów",
        desc: "Posiadacze kont handlowych otrzymują priorytetową obsługę i dedykowane trasy dostawy.",
        bullets: [
          "Szybka wysyłka zamówień handlowych; ekspresowa dostawa w 3–5 dni",
          "Darmowa dostawa w UK dla wszystkich zamówień handlowych, bez minimum",
          "Dedykowana linia wsparcia WhatsApp do śledzenia dostawy"
        ]
      }
    ],
    processTitle: "Jak realizujemy Twoje zamówienie",
    steps: [
      {
        step: "Step 01",
        title: "Zamówienie otrzymane",
        desc: "W ciągu kilku minut otrzymasz potwierdzenie zamówienia e-mailem. Sprawdź folder spam, jeśli go nie widzisz."
      },
      {
        step: "Step 02",
        title: "Kompletowane i pakowane",
        desc: "Zamówienia z magazynu są kompletowane, sprawdzane pod kątem jakości i pakowane w ciągu jednego dnia roboczego. Zamówienia z niestandardowym kolorem mogą zająć 1–2 dodatkowe dni."
      },
      {
        step: "Step 03",
        title: "Wysłane",
        desc: "Otrzymasz link do śledzenia e-mailem, gdy tylko Twoje zamówienie opuści naszego partnera produkcyjnego (UK warehouse launching)."
      }
    ],
    ctaTitle: "Nadal masz pytania dotyczące dostawy?",
    ctaSubtitle: "Nasz zespół jest dostępny od poniedziałku do soboty, aby pomóc w śledzeniu, specjalnych prośbach i wycenach dostawy.",
    ctaContact: "Skontaktuj się z zespołem",
    ctaReturns: "Przeczytaj naszą politykę zwrotów"
  }
}

export function getShippingContent(locale: Locale): ShippingContent {
  return shippingContent[locale] ?? shippingContent.en
}
