import type { Locale } from "../config"

export interface ColourMatchStep {
  step: string
  title: string
  desc: string
}

export interface ColourMatchContent {
  metaTitle: string
  metaDescription: string
  eyebrow: string
  heroTitle: string
  heroSubtitle: string
  whatsappMsg: string
  ctaWhatsapp: string
  ctaBrowse: string
  howTitle: string
  steps: ColourMatchStep[]
  chartEyebrow: string
  chartTitle: string
  chartSubtitle: string
  downloadPdf: string
  ctaTitle: string
  ctaSubtitle: string
  ctaWhatsapp2: string
  ctaShop: string
}

export const colourMatchContent: Record<Locale, ColourMatchContent> = {
  en: {
    metaTitle: "Colour Match Service | D.S Hair & Beauty – Find Your Perfect Shade",
    metaDescription:
      "Can't decide? Upload a photo or send us a WhatsApp message — our colour specialists will match your perfect human hair extension shade in under 2 hours.",
    eyebrow: "Free Colour Matching Service",
    heroTitle: "Find Your Perfect Shade",
    heroSubtitle:
      "Not sure which colour to choose? Our colour specialists match your exact shade — free of charge. Get a professional recommendation in under 2 hours.",
    whatsappMsg: "Hi! I'd like help finding my perfect hair extension shade.",
    ctaWhatsapp: "WhatsApp Us a Photo",
    ctaBrowse: "Browse Colour Chart",
    howTitle: "How Our Colour Match Works",
    steps: [
      { step: "01", title: "Send a Photo", desc: "Take a clear photo of your hair in natural daylight. Send it to us via WhatsApp." },
      { step: "02", title: "We Match Your Shade", desc: "Our colour specialist analyses your hair and finds the exact shade from our 31-shade range." },
      { step: "03", title: "Order with Confidence", desc: "Order knowing you've got the perfect match — no guesswork, no returns needed." },
    ],
    chartEyebrow: "D.S Hair & Beauty",
    chartTitle: "31-Shade Human Hair Colour Chart",
    chartSubtitle:
      "From deep Jet Black to Platinum Blonde — every shade is 100% Remy human hair, double-drawn for consistent thickness from root to tip.",
    downloadPdf: "Download PDF Colour Chart",
    ctaTitle: "Still Not Sure?",
    ctaSubtitle:
      "Send us a photo of your hair via WhatsApp — we'll reply within 2 hours with your perfect shade recommendation.",
    ctaWhatsapp2: "WhatsApp Us Now",
    ctaShop: "Shop All Extensions",
  },
  de: {
    metaTitle: "Farbberatung | D.S Hair & Beauty – Finden Sie Ihren perfekten Ton",
    metaDescription:
      "Unentschlossen? Laden Sie ein Foto hoch oder schreiben Sie uns auf WhatsApp – unsere Farbexperten finden Ihren perfekten Ton aus Glatthaar-Extensions in unter 2 Stunden.",
    eyebrow: "Kostenlose Farbberatung",
    heroTitle: "Finden Sie Ihren perfekten Ton",
    heroSubtitle:
      "Nicht sicher, welche Farbe Sie wählen sollen? Unsere Farbexperten finden Ihren exakten Ton – kostenlos. Erhalten Sie eine professionelle Empfehlung in unter 2 Stunden.",
    whatsappMsg: "Hallo! Ich brauche Hilfe, meinen perfekten Extensions-Ton zu finden.",
    ctaWhatsapp: "Foto per WhatsApp senden",
    ctaBrowse: "Farbkarte ansehen",
    howTitle: "So funktioniert unsere Farbberatung",
    steps: [
      { step: "01", title: "Foto senden", desc: "Machen Sie ein klares Foto Ihrer Haare bei Tageslicht. Senden Sie es uns per WhatsApp." },
      { step: "02", title: "Wir finden Ihren Ton", desc: "Unser Farbexperte analysiert Ihre Haare und findet den exakten Ton aus unserer 31-Ton-Palette." },
      { step: "03", title: "Sorgenfrei bestellen", desc: "Bestellen Sie mit dem Wissen, den perfekten Ton zu haben – kein Raten, keine Retouren nötig." },
    ],
    chartEyebrow: "D.S Hair & Beauty",
    chartTitle: "Farbkarte aus 100% Remy Menschenhaar – 31 Töne",
    chartSubtitle:
      "Von tiefem Jet Black bis Platinum Blonde – jeder Ton ist 100% Remy Menschenhaar, double-drawn für gleichmäßige Dicke von Ansatz bis Spitze.",
    downloadPdf: "Farbkarte als PDF herunterladen",
    ctaTitle: "Immer noch unsicher?",
    ctaSubtitle:
      "Senden Sie uns ein Foto Ihrer Haare per WhatsApp – wir antworten innerhalb von 2 Stunden mit Ihrer perfekten Ton-Empfehlung.",
    ctaWhatsapp2: "Jetzt per WhatsApp",
    ctaShop: "Alle Extensions ansehen",
  },
  fr: {
    metaTitle: "Service d'appariement des couleurs | D.S Hair & Beauty – Trouvez votre teinte parfaite",
    metaDescription:
      "Indécis ? Envoyez une photo ou un message WhatsApp — nos spécialistes de la couleur trouveront votre teinte parfaite d'extensions en cheveux naturels en moins de 2 heures.",
    eyebrow: "Service d'appariement des couleurs gratuit",
    heroTitle: "Trouvez votre teinte parfaite",
    heroSubtitle:
      "Vous ne savez pas quelle couleur choisir ? Nos spécialistes de la couleur trouvent votre teinte exacte — gratuitement. Obtenez une recommandation professionnelle en moins de 2 heures.",
    whatsappMsg: "Bonjour ! J'aimerais de l'aide pour trouver ma teinte d'extensions parfaite.",
    ctaWhatsapp: "Envoyez une photo WhatsApp",
    ctaBrowse: "Voir la charte des couleurs",
    howTitle: "Comment fonctionne notre appariement des couleurs",
    steps: [
      { step: "01", title: "Envoyez une photo", desc: "Prenez une photo nette de vos cheveux à la lumière du jour. Envoyez-la nous par WhatsApp." },
      { step: "02", title: "Nous trouvons votre teinte", desc: "Notre spécialiste de la couleur analyse vos cheveux et trouve la teinte exacte parmi notre gamme de 31 teintes." },
      { step: "03", title: "Commandez en toute confiance", desc: "Commandez en sachant que vous avez la teinte parfaite — aucune supposition, aucun retour nécessaire." },
    ],
    chartEyebrow: "D.S Hair & Beauty",
    chartTitle: "Charte des couleurs en cheveux Remy — 31 teintes",
    chartSubtitle:
      "Du Jet Black profond au Blond Platine — chaque teinte est 100% cheveux Remy naturels, double-drawn pour une épaisseur uniforme de la racine à la pointe.",
    downloadPdf: "Télécharger la charte des couleurs (PDF)",
    ctaTitle: "Vous hésitez encore ?",
    ctaSubtitle:
      "Envoyez-nous une photo de vos cheveux par WhatsApp — nous répondons sous 2 heures avec la teinte parfaite.",
    ctaWhatsapp2: "WhatsApp maintenant",
    ctaShop: "Voir toutes les extensions",
  },
  ar: {
    metaTitle: "خدمة مطابقة الألوان | D.S Hair & Beauty – اعثري على درجتك المثالية",
    metaDescription:
      "غير متأكدة من اختيارك؟ ارفعي صورة أو أرسلي رسالة واتساب — سيجد خبراء الألوان لدينا درجتك المثالية من إكسسوارات الشعر الطبيعي في أقل من ساعتين.",
    eyebrow: "خدمة مطابقة الألوان مجاناً",
    heroTitle: "اعثري على درجتك المثالية",
    heroSubtitle:
      "غير متأكدة من اللون المناسب؟ يحدد خبراء الألوان لدينا درجتك بدقة — مجاناً. احصلي على توصية احترافية في أقل من ساعتين.",
    whatsappMsg: "مرحباً! أرغب في مساعدة لإيجاد درجة الإكستنشن المثالية لي.",
    ctaWhatsapp: "أرسلي صورة عبر واتساب",
    ctaBrowse: "تصفّحي لوحة الألوان",
    howTitle: "كيف تعمل مطابقة الألوان لدينا",
    steps: [
      { step: "01", title: "أرسلي صورة", desc: "التقطي صورة واضحة لشعرك تحت ضوء النهار الطبيعي. أرسليها إلينا عبر واتساب." },
      { step: "02", title: "نحدد درجتك", desc: "يحلل خبير الألوان لدينا شعرك ويجد الدرجة الدقيقة من بين 31 درجة لدينا." },
      { step: "03", title: "اطلبي بثقة", desc: "اطلبي وأنتِ تعلمين أن لديك الدرجة المثالية — بلا تخمين ولا حاجة للإرجاع." },
    ],
    chartEyebrow: "D.S Hair & Beauty",
    chartTitle: "لوحة ألوان شعر ريمي الطبيعي — 31 درجة",
    chartSubtitle:
      "من الأسود العميق إلى الأشقر البلاتيني — كل درجة من شعر ريمي طبيعي 100%، ومُعدّة بتقنية double-drawn لسمك متساوٍ من الجذور إلى الأطراف.",
    downloadPdf: "تنزيل لوحة الألوان (PDF)",
    ctaTitle: "لا تزالين غير متأكدات؟",
    ctaSubtitle:
      "أرسلي صورة شعرك عبر واتساب — سنرد خلال ساعتين بتوصية درجتك المثالية.",
    ctaWhatsapp2: "واتساب الآن",
    ctaShop: "تسوّقي كل الإكستنشنز",
  },
  sv: {
    metaTitle: "Färgmatchningstjänst | D.S Hair & Beauty – Hitta din perfekta nyans",
    metaDescription:
      "Osäker? Ladda upp ett foto eller skicka ett WhatsApp-meddelande — våra färgspecialister hittar din perfekta nyans av hårförlängningar i äkta hår på under 2 timmar.",
    eyebrow: "Gratis färgmatchningstjänst",
    heroTitle: "Hitta din perfekta nyans",
    heroSubtitle:
      "Osäker på vilken färg du ska välja? Våra färgspecialister hittar din exakta nyans — helt gratis. Få en professionell rekommendation på under 2 timmar.",
    whatsappMsg: "Hej! Jag skulle behöva hjälp att hitta min perfekta nyans för hårförlängningar.",
    ctaWhatsapp: "Skicka ett foto på WhatsApp",
    ctaBrowse: "Bläddra i färgkartan",
    howTitle: "Så här fungerar vår färgmatchning",
    steps: [
      { step: "01", title: "Skicka ett foto", desc: "Ta en tydlig bild av ditt hår i dagsljus. Skicka den till oss via WhatsApp." },
      { step: "02", title: "Vi matchar din nyans", desc: "Vår färgspecialist analyserar ditt hår och hittar exakt nyans bland våra 31 nyanser." },
      { step: "03", title: "Beställ med trygghet", desc: "Beställ i vetskap om att du har rätt nyans — inget gissande, inga returer behövs." },
    ],
    chartEyebrow: "D.S Hair & Beauty",
    chartTitle: "Färgkarta i 100 % Remy äkta hår – 31 nyanser",
    chartSubtitle:
      "Från djup Jet Black till Platinum Blonde — varje nyans är 100 % Remy äkta hår, double-drawn för jämnt tjocklek från rot till spets.",
    downloadPdf: "Ladda ner färgkartan (PDF)",
    ctaTitle: "Fortfarande osäker?",
    ctaSubtitle:
      "Skicka oss en bild på ditt hår via WhatsApp — vi svarar inom 2 timmar med din perfekta nyansrekommendation.",
    ctaWhatsapp2: "WhatsApp nu",
    ctaShop: "Handla alla förlängningar",
  },
  pl: {
    metaTitle: "Usługa doboru koloru | D.S Hair & Beauty – Znajdź swój idealny odcień",
    metaDescription:
      "Niepewna? Prześlij zdjęcie lub wiadomość WhatsApp — nasi specjaliści od koloru dobiorą Twój idealny odcień przedłużeń z prawdziwego włosa w mniej niż 2 godziny.",
    eyebrow: "Bezpłatna usługa doboru koloru",
    heroTitle: "Znajdź swój idealny odcień",
    heroSubtitle:
      "Nie wiesz, który kolor wybrać? Nasi specjaliści od koloru dobiorą Twój dokładny odcień — całkowicie za darmo. Otrzymaj profesjonalną rekomendację w mniej niż 2 godziny.",
    whatsappMsg: "Cześć! Potrzebuję pomocy w dobraniu mojego idealnego odcienia przedłużeń.",
    ctaWhatsapp: "Wyślij zdjęcie przez WhatsApp",
    ctaBrowse: "Przeglądaj wzornik kolorów",
    howTitle: "Jak działa nasz dobór koloru",
    steps: [
      { step: "01", title: "Wyślij zdjęcie", desc: "Zrób wyraźne zdjęcie swoich włosów w świetle dziennym. Wyślij je nam przez WhatsApp." },
      { step: "02", title: "Dobieramy Twój odcień", desc: "Nasz specjalista od koloru analizuje Twoje włosy i znajduje dokładny odcień z naszej palety 31 odcieni." },
      { step: "03", title: "Zamów z pewnością", desc: "Zamów, wiedząc, że masz idealny odcień — bez zgadywania, bez zwrotów." },
    ],
    chartEyebrow: "D.S Hair & Beauty",
    chartTitle: "Wzornik kolorów z 100% Remy prawdziwego włosa – 31 odcieni",
    chartSubtitle:
      "Od głębokiego Jet Black po Platinum Blonde — każdy odcień to 100% Remy prawdziwe włos, double-drawn dla równej grubości od nasady do końców.",
    downloadPdf: "Pobierz wzornik kolorów (PDF)",
    ctaTitle: "Nadal niepewna?",
    ctaSubtitle:
      "Wyślij nam zdjęcie swoich włosów przez WhatsApp — odpowiemy w ciągu 2 godzin z rekomendacją idealnego odcienia.",
    ctaWhatsapp2: "WhatsApp teraz",
    ctaShop: "Zobacz wszystkie przedłużenia",
  },
}

export function getColourMatchContent(locale: Locale): ColourMatchContent {
  return colourMatchContent[locale] ?? colourMatchContent.en
}
