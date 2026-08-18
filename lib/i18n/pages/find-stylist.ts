import type { Locale } from "../config"

export interface FindStylistBenefit {
  title: string
  description: string
}

export interface FindStylistStep {
  title: string
  desc: string
}

export interface FindStylistContent {
  metaTitle: string
  metaDescription: string
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  browseCta: string
  applyCta: string
  benefitsTitle: string
  benefitsSubtitle: string
  benefits: FindStylistBenefit[]
  featuredTitle: string
  featuredSubtitle: string
  comingSoonTitle: string
  comingSoonDesc: string
  comingSoonCta: string
  howTitle: string
  howSubtitle: string
  steps: FindStylistStep[]
  applyTitle: string
  applySubtitle: string
  nameLabel: string
  namePlaceholder: string
  salonLabel: string
  salonPlaceholder: string
  locationLabel: string
  locationPlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  instagramLabel: string
  instagramPlaceholder: string
  websiteLabel: string
  websitePlaceholder: string
  methodsLabel: string
  yearsLabel: string
  yearsOptions: string[]
  aboutLabel: string
  aboutPlaceholder: string
  submitBtn: string
  submittingBtn: string
  formNote: string
  successTitle: string
  successMsg1: string
  successMsg2: string
  successInstagramLabel: string
  successFollowCta: string
}

export const findStylistContent: Record<Locale, FindStylistContent> = {
  en: {
    metaTitle: "Find a Hair Extension Stylist UK | D.S Hair Beauty",
    metaDescription:
      "Find a certified hair extension stylist near you. Our UK-wide network of professional salon partners specialises in tape-in, nano ring, K-tip, and hand-tied weft extensions.",
    heroBadge: "Find a Stylist Directory",
    heroTitle: "Find a Hair Extension Stylist Near You",
    heroSubtitle:
      "Browse verified UK stylists specialising in professional hair extensions. From tape-ins to hand-tied wefts — find the right professional for your look.",
    browseCta: "Browse Stylists",
    applyCta: "Apply to Be Listed",
    benefitsTitle: "Are You a Hair Extension Stylist?",
    benefitsSubtitle:
      "Apply to be listed in our Find a Stylist directory. Free to join — reach clients actively searching for extension services near you.",
    benefits: [
      {
        title: "Reach New Clients",
        description:
          "Get discovered by clients actively searching for extension services in your area via dshairbeauty.co.uk.",
      },
      {
        title: "Build Your Credibility",
        description:
          "Be listed alongside quality extension suppliers. Shows clients you work with professional-grade products.",
      },
      {
        title: "Join a Community",
        description:
          "Connect with fellow extension stylists across the UK. Share techniques, trends and supplier tips.",
      },
      {
        title: "Quick & Free to Apply",
        description:
          "Simple 3-minute application. No fees, no obligations. Approved stylists listed within 48 hours.",
      },
    ],
    featuredTitle: "Featured Extension Stylists",
    featuredSubtitle:
      "Verified stylists offering professional hair extension services across the UK. New stylists added regularly.",
    comingSoonTitle: "Stylists Directory Coming Soon",
    comingSoonDesc:
      "We are reviewing applications and building our directory of verified extension stylists. Apply below to be one of the first listed.",
    comingSoonCta: "Apply to Be Listed",
    howTitle: "How It Works",
    howSubtitle:
      "From application to listing — a simple 3-step process. No fees, no obligations.",
    steps: [
      {
        title: "Fill in the Application",
        desc: "Tell us about your salon, your location, the methods you offer, and your social channels. Takes 3 minutes.",
      },
      {
        title: "We Review Your Profile",
        desc: "We check your Instagram or website to verify quality and professionalism. We respond within 48 hours.",
      },
      {
        title: "Get Listed on dshairbeauty.co.uk",
        desc: "Approved stylists appear in our Find a Stylist directory — with a direct link to your Instagram or booking page.",
      },
    ],
    applyTitle: "Apply to Be Listed",
    applySubtitle:
      "Fill in the form below. We review every application and respond within 48 hours.",
    nameLabel: "Your Name *",
    namePlaceholder: "First & Last Name",
    salonLabel: "Salon Name *",
    salonPlaceholder: "e.g. The Hair Studio",
    locationLabel: "Salon Location *",
    locationPlaceholder: "e.g. Didsbury, Manchester",
    emailLabel: "Email Address *",
    emailPlaceholder: "you@yoursalon.co.uk",
    phoneLabel: "Phone / WhatsApp *",
    phonePlaceholder: "+44 7xxx xxxxxx",
    instagramLabel: "Instagram *",
    instagramPlaceholder: "@yoursalon",
    websiteLabel: "Website / Booking Link",
    websitePlaceholder: "https://yoursalon.co.uk",
    methodsLabel: "Extension Methods You Offer *",
    yearsLabel: "Years of Extension Experience",
    yearsOptions: [
      "Select range",
      "Under 1 year",
      "1–3 years",
      "3–5 years",
      "5–10 years",
      "Over 10 years",
    ],
    aboutLabel: "Tell Us About Your Extension Work",
    aboutPlaceholder:
      "Briefly describe your extension services, your speciality, and what sets your work apart...",
    submitBtn: "Submit Application",
    submittingBtn: "Submitting...",
    formNote:
      "No fees. No obligations. Free to apply. We will contact you within 48 hours.",
    successTitle: "Application Received!",
    successMsg1:
      "Thank you — we will review your application and get back to you within 48 hours.",
    successMsg2: "Follow us on Instagram for industry tips and trends:",
    successInstagramLabel: "Follow @dshairbeauty",
    successFollowCta: "Follow @dshairbeauty",
  },
  de: {
    metaTitle: "Haarverlängerungs-Stylist finden UK | D.S Hair Beauty",
    metaDescription:
      "Finden Sie einen zertifizierten Haarverlängerungs-Stylisten in Ihrer Nähe. Unser UK-weites Netzwerk professioneller Salon-Partner spezialisiert sich auf tape-in, nano ring, K-tip und hand-tied weft Extensions.",
    heroBadge: "Stylisten-Verzeichnis finden",
    heroTitle: "Finden Sie einen Haarverlängerungs-Stylist in Ihrer Nähe",
    heroSubtitle:
      "Stöbern Sie durch verifizierte UK-Stylisten mit Schwerpunkt auf professionellen Haarverlängerungen. Von tape-ins bis hand-tied wefts — finden Sie den richtigen Profi für Ihren Look.",
    browseCta: "Stylisten durchsuchen",
    applyCta: "Für Aufnahme bewerben",
    benefitsTitle: "Sind Sie ein Haarverlängerungs-Stylist?",
    benefitsSubtitle:
      "Bewerben Sie sich für die Aufnahme in unser Stylisten-Verzeichnis. Kostenlose Teilnahme — erreichen Sie Kunden, die aktiv nach Extension-Services in Ihrer Nähe suchen.",
    benefits: [
      {
        title: "Neue Kunden gewinnen",
        description:
          "Werden Sie von Kunden entdeckt, die in Ihrer Region aktiv nach Extension-Services suchen, über dshairbeauty.co.uk.",
      },
      {
        title: "Stärken Sie Ihre Glaubwürdigkeit",
        description:
          "Werden Sie zusammen mit hochwertigen Extension-Lieferanten gelistet. Zeigt Kunden, dass Sie mit professionellen Produkten arbeiten.",
      },
      {
        title: "Werden Sie Teil einer Community",
        description:
          "Knüpfen Sie Kontakte zu anderen Extension-Stylisten im gesamten UK. Teilen Sie Techniken, Trends und Lieferanten-Tipps.",
      },
      {
        title: "Schnell & kostenlos bewerben",
        description:
          "Einfache Bewerbung in 3 Minuten. Keine Gebühren, keine Verpflichtungen. Genehmigte Stylisten innerhalb von 48 Stunden gelistet.",
      },
    ],
    featuredTitle: "Empfohlene Extension-Stylisten",
    featuredSubtitle:
      "Verifizierte Stylisten mit professionellen Haarverlängerungs-Services im gesamten UK. Regelmäßig neue Stylisten hinzugefügt.",
    comingSoonTitle: "Stylisten-Verzeichnis erscheint bald",
    comingSoonDesc:
      "Wir prüfen Bewerbungen und bauen unser Verzeichnis verifizierter Extension-Stylisten auf. Bewerben Sie sich unten, um zu den Ersten gelistet zu werden.",
    comingSoonCta: "Für Aufnahme bewerben",
    howTitle: "So funktioniert's",
    howSubtitle:
      "Von der Bewerbung bis zur Auflistung — ein einfacher 3-Schritte-Prozess. Keine Gebühren, keine Verpflichtungen.",
    steps: [
      {
        title: "Bewerbungsformular ausfüllen",
        desc: "Erzählen Sie uns von Ihrem Salon, Ihrem Standort, den angebotenen Methoden und Ihren Social-Media-Kanälen. Dauert 3 Minuten.",
      },
      {
        title: "Wir prüfen Ihr Profil",
        desc: "Wir überprüfen Ihren Instagram- oder Website-Auftritt, um Qualität und Professionalität zu bestätigen. Wir antworten innerhalb von 48 Stunden.",
      },
      {
        title: "Auf dshairbeauty.co.uk gelistet werden",
        desc: "Genehmigte Stylisten erscheinen in unserem Stylisten-Verzeichnis — mit einem direkten Link zu Ihrem Instagram oder Ihrer Buchungsseite.",
      },
    ],
    applyTitle: "Für Aufnahme bewerben",
    applySubtitle:
      "Füllen Sie das folgende Formular aus. Wir prüfen jede Bewerbung und antworten innerhalb von 48 Stunden.",
    nameLabel: "Ihr Name *",
    namePlaceholder: "Vor- & Nachname",
    salonLabel: "Salonname *",
    salonPlaceholder: "z. B. The Hair Studio",
    locationLabel: "Salonstandort *",
    locationPlaceholder: "z. B. Didsbury, Manchester",
    emailLabel: "E-Mail-Adresse *",
    emailPlaceholder: "sie@ihrsalon.co.uk",
    phoneLabel: "Telefon / WhatsApp *",
    phonePlaceholder: "+44 7xxx xxxxxx",
    instagramLabel: "Instagram *",
    instagramPlaceholder: "@ihrsalon",
    websiteLabel: "Website / Buchungslink",
    websitePlaceholder: "https://ihrsalon.co.uk",
    methodsLabel: "Extension-Methoden, die Sie anbieten *",
    yearsLabel: "Jahre Erfahrung mit Extensions",
    yearsOptions: [
      "Bereich wählen",
      "Unter 1 Jahr",
      "1–3 Jahre",
      "3–5 Jahre",
      "5–10 Jahre",
      "Über 10 Jahre",
    ],
    aboutLabel: "Erzählen Sie uns von Ihrer Extension-Arbeit",
    aboutPlaceholder:
      "Beschreiben Sie kurz Ihre Extension-Services, Ihre Spezialität und was Ihre Arbeit auszeichnet...",
    submitBtn: "Bewerbung absenden",
    submittingBtn: "Wird gesendet...",
    formNote:
      "Keine Gebühren. Keine Verpflichtungen. Kostenlose Bewerbung. Wir kontaktieren Sie innerhalb von 48 Stunden.",
    successTitle: "Bewerbung erhalten!",
    successMsg1:
      "Vielen Dank — wir prüfen Ihre Bewerbung und melden uns innerhalb von 48 Stunden bei Ihnen.",
    successMsg2: "Folgen Sie uns auf Instagram für Branchen-Tipps und Trends:",
    successInstagramLabel: "Folgen Sie @dshairbeauty",
    successFollowCta: "Folgen Sie @dshairbeauty",
  },
  fr: {
    metaTitle: "Trouver un styliste en extensions de cheveux UK | D.S Hair Beauty",
    metaDescription:
      "Trouvez un styliste certifié en extensions de cheveux près de chez vous. Notre réseau de partenaires salons professionnels à travers le UK est spécialisé dans les tape-in, nano ring, K-tip et hand-tied weft.",
    heroBadge: "Annuaire Trouver un styliste",
    heroTitle: "Trouvez un styliste en extensions de cheveux près de chez vous",
    heroSubtitle:
      "Parcourez des stylistes vérifiés du UK spécialisés dans les extensions capillaires professionnelles. Des tape-ins aux hand-tied wefts — trouvez le bon professionnel pour votre style.",
    browseCta: "Parcourir les stylistes",
    applyCta: "Postuler pour être référencé",
    benefitsTitle: "Êtes-vous styliste en extensions de cheveux ?",
    benefitsSubtitle:
      "Postulez pour être référencé dans notre annuaire Trouver un styliste. Gratuit — atteignez les clients qui recherchent activement des services d'extensions près de chez vous.",
    benefits: [
      {
        title: "Attirez de nouveaux clients",
        description:
          "Soyez découvert par des clients recherchant activement des services d'extensions dans votre région via dshairbeauty.co.uk.",
      },
      {
        title: "Renforcez votre crédibilité",
        description:
          "Soyez référencé aux côtés de fournisseurs d'extensions de qualité. Montre à vos clients que vous travaillez avec des produits professionnels.",
      },
      {
        title: "Rejoignez une communauté",
        description:
          "Échangez avec d'autres stylistes en extensions à travers le UK. Partagez techniques, tendances et astuces fournisseurs.",
      },
      {
        title: "Inscription rapide et gratuite",
        description:
          "Candidature simple en 3 minutes. Aucun frais, aucun engagement. Stylistes approuvés référencés sous 48 heures.",
      },
    ],
    featuredTitle: "Stylistes en extensions à la une",
    featuredSubtitle:
      "Stylistes vérifiés proposant des services d'extensions capillaires professionnelles à travers le UK. Nouveaux stylistes ajoutés régulièrement.",
    comingSoonTitle: "L'annuaire des stylistes arrive bientôt",
    comingSoonDesc:
      "Nous examinons les candidatures et construisons notre annuaire de stylistes en extensions vérifiés. Postulez ci-dessous pour faire partie des premiers référencés.",
    comingSoonCta: "Postuler pour être référencé",
    howTitle: "Comment ça marche",
    howSubtitle:
      "De la candidature au référencement — un processus simple en 3 étapes. Aucun frais, aucun engagement.",
    steps: [
      {
        title: "Remplissez la candidature",
        desc: "Parlez-nous de votre salon, de votre emplacement, des méthodes que vous proposez et de vos réseaux sociaux. Cela prend 3 minutes.",
      },
      {
        title: "Nous examinons votre profil",
        desc: "Nous vérifions votre Instagram ou votre site web pour confirmer la qualité et le professionnalisme. Nous répondons sous 48 heures.",
      },
      {
        title: "Être référencé sur dshairbeauty.co.uk",
        desc: "Les stylistes approuvés apparaissent dans notre annuaire Trouver un styliste — avec un lien direct vers votre Instagram ou votre page de réservation.",
      },
    ],
    applyTitle: "Postuler pour être référencé",
    applySubtitle:
      "Remplissez le formulaire ci-dessous. Nous examinons chaque candidature et répondons sous 48 heures.",
    nameLabel: "Votre nom *",
    namePlaceholder: "Prénom & nom",
    salonLabel: "Nom du salon *",
    salonPlaceholder: "ex. The Hair Studio",
    locationLabel: "Emplacement du salon *",
    locationPlaceholder: "ex. Didsbury, Manchester",
    emailLabel: "Adresse e-mail *",
    emailPlaceholder: "vous@votresalon.co.uk",
    phoneLabel: "Téléphone / WhatsApp *",
    phonePlaceholder: "+44 7xxx xxxxxx",
    instagramLabel: "Instagram *",
    instagramPlaceholder: "@votresalon",
    websiteLabel: "Site web / lien de réservation",
    websitePlaceholder: "https://votresalon.co.uk",
    methodsLabel: "Méthodes d'extensions que vous proposez *",
    yearsLabel: "Années d'expérience en extensions",
    yearsOptions: [
      "Choisir une plage",
      "Moins de 1 an",
      "1–3 ans",
      "3–5 ans",
      "5–10 ans",
      "Plus de 10 ans",
    ],
    aboutLabel: "Parlez-nous de votre travail en extensions",
    aboutPlaceholder:
      "Décrivez brièvement vos services d'extensions, votre spécialité et ce qui distingue votre travail...",
    submitBtn: "Envoyer la candidature",
    submittingBtn: "Envoi en cours...",
    formNote:
      "Aucun frais. Aucun engagement. Inscription gratuite. Nous vous contacterons sous 48 heures.",
    successTitle: "Candidature reçue !",
    successMsg1:
      "Merci — nous examinerons votre candidature et reviendrons vers vous sous 48 heures.",
    successMsg2: "Suivez-nous sur Instagram pour des conseils et tendances du secteur :",
    successInstagramLabel: "Suivre @dshairbeauty",
    successFollowCta: "Suivre @dshairbeauty",
  },
  ar: {
    metaTitle: "ابحث عن أخصائي تركيبات الشعر UK | D.S Hair Beauty",
    metaDescription:
      "ابحث عن أخصائي تركيبات شعر معتمد بالقرب منك. شبكتنا الممتدة في جميع أنحاء UK من شركاء الصالونات المحترفين متخصصة في الـ tape-in والـ nano ring والـ K-tip وhand-tied weft.",
    heroBadge: "دليل البحث عن أخصائي",
    heroTitle: "ابحث عن أخصائي تركيبات شعر بالقرب منك",
    heroSubtitle:
      "تصفح أخصائيين موثّقين في UK متخصصين في تركيبات الشعر الاحترافية. من الـ tape-ins إلى الـ hand-tied wefts — اعثر على المحترف المناسب لإطلالتك.",
    browseCta: "تصفح الأخصائيين",
    applyCta: "تقديم طلب للإدراج",
    benefitsTitle: "هل أنت أخصائي تركيبات شعر؟",
    benefitsSubtitle:
      "تقدم بطلب للإدراج في دليل البحث عن أخصائي. مجاني للانضمام — صل إلى العملاء الذين يبحثون بنشاط عن خدمات التركيبات بالقرب منك.",
    benefits: [
      {
        title: "الوصول إلى عملاء جدد",
        description:
          "دع العملاء الذين يبحثون بنشاط عن خدمات التركيبات في منطقتك يكتشفونك عبر dshairbeauty.co.uk.",
      },
      {
        title: "بناء مصداقيتك",
        description:
          "كن مدرجًا إلى جانب موردي تركيبات عالية الجودة. يُظهر لعملائك أنك تعمل بمنتجات احترافية.",
      },
      {
        title: "انضم إلى مجتمع",
        description:
          "تواصل مع زملائك من أخصائيي التركيبات في جميع أنحاء UK. شارك التقنيات والاتجاهات ونصائح الموردين.",
      },
      {
        title: "تقديم سريع ومجاني",
        description:
          "طلب بسيط مدته 3 دقائق. بلا رسوم وبلا التزامات. يُدرج الأخصائيون المعتمدون خلال 48 ساعة.",
      },
    ],
    featuredTitle: "أخصائيو التركيبات المميزون",
    featuredSubtitle:
      "أخصائيون موثّقون يقدمون خدمات تركيبات شعر احترافية في جميع أنحاء UK. تتم إضافة أخصائيين جدد بانتظام.",
    comingSoonTitle: "دليل الأخصائيين قريبًا",
    comingSoonDesc:
      "نحن نراجع الطلبات ونبني دليلنا للأخصائيين الموثّقين. تقدم أدناه لتكن من أوائل المدرجين.",
    comingSoonCta: "تقديم طلب للإدراج",
    howTitle: "كيف تعمل",
    howSubtitle:
      "من الطلب إلى الإدراج — عملية بسيطة من 3 خطوات. بلا رسوم وبلا التزامات.",
    steps: [
      {
        title: "املأ طلب التقديم",
        desc: "أخبرنا عن صالونك وموقعك والطرق التي تقدمها وقنوات التواصل الاجتماعي لديك. تستغرق 3 دقائق.",
      },
      {
        title: "نراجع ملفك الشخصي",
        desc: "نتحقق من حسابك على Instagram أو موقعك للتأكد من الجودة والاحترافية. نرد خلال 48 ساعة.",
      },
      {
        title: "الظهور في dshairbeauty.co.uk",
        desc: "يظهر الأخصائيون المعتمدون في دليل البحث عن أخصائي — مع رابط مباشر إلى حساب Instagram أو صفحة الحجز الخاصة بك.",
      },
    ],
    applyTitle: "تقديم طلب للإدراج",
    applySubtitle:
      "املأ النموذج أدناه. نراجع كل طلب ونرد خلال 48 ساعة.",
    nameLabel: "اسمك *",
    namePlaceholder: "الاسم الأول واسم العائلة",
    salonLabel: "اسم الصالون *",
    salonPlaceholder: "مثال: The Hair Studio",
    locationLabel: "موقع الصالون *",
    locationPlaceholder: "مثال: Didsbury, Manchester",
    emailLabel: "البريد الإلكتروني *",
    emailPlaceholder: "you@yoursalon.co.uk",
    phoneLabel: "الهاتف / WhatsApp *",
    phonePlaceholder: "+44 7xxx xxxxxx",
    instagramLabel: "Instagram *",
    instagramPlaceholder: "@yoursalon",
    websiteLabel: "الموقع الإلكتروني / رابط الحجز",
    websitePlaceholder: "https://yoursalon.co.uk",
    methodsLabel: "طرق التركيبات التي تقدمها *",
    yearsLabel: "سنوات الخبرة في التركيبات",
    yearsOptions: [
      "اختر النطاق",
      "أقل من سنة",
      "1–3 سنوات",
      "3–5 سنوات",
      "5–10 سنوات",
      "أكثر من 10 سنوات",
    ],
    aboutLabel: "أخبرنا عن عملك في التركيبات",
    aboutPlaceholder:
      "صف باختصار خدمات التركيبات الخاصة بك وتخصصك وما الذي يميز عملك...",
    submitBtn: "إرسال الطلب",
    submittingBtn: "جارٍ الإرسال...",
    formNote:
      "بلا رسوم. بلا التزامات. مجاني للتقديم. سنتواصل معك خلال 48 ساعة.",
    successTitle: "تم استلام الطلب!",
    successMsg1:
      "شكرًا لك — سنراجع طلبك وسنعود إليك خلال 48 ساعة.",
    successMsg2: "تابعنا على Instagram للحصول على نصائح واتجاهات المجال:",
    successInstagramLabel: "متابعة @dshairbeauty",
    successFollowCta: "متابعة @dshairbeauty",
  },
  sv: {
    metaTitle: "Hitta en hårförlängningsstylist UK | D.S Hair Beauty",
    metaDescription:
      "Hitta en certifierad hårförlängningsstylist nära dig. Vårt UK-omfattande nätverk av professionella salongspartners är specialiserat på tape-in, nano ring, K-tip och hand-tied weft.",
    heroBadge: "Hitta en stylist-katalog",
    heroTitle: "Hitta en hårförlängningsstylist nära dig",
    heroSubtitle:
      "Bläddra bland verifierade UK-stylister som specialiserar sig på professionella hårförlängningar. Från tape-ins till hand-tied wefts — hitta rätt proffs för din look.",
    browseCta: "Bläddra bland stylister",
    applyCta: "Ansök om att listas",
    benefitsTitle: "Är du en hårförlängningsstylist?",
    benefitsSubtitle:
      "Ansök om att listas i vår Hitta en stylist-katalog. Gratis att gå med — nå kunder som aktivt söker efter förlängningsbehandlingar nära dig.",
    benefits: [
      {
        title: "Nå nya kunder",
        description:
          "Bli upptäckt av kunder som aktivt söker förlängningsbehandlingar i ditt område via dshairbeauty.co.uk.",
      },
      {
        title: "Bygg din trovärdighet",
        description:
          "Listas tillsammans med kvalitetsleverantörer av förlängningar. Visar kunder att du arbetar med professionella produkter.",
      },
      {
        title: "Gå med i ett community",
        description:
          "Koppla ihop dig med andra förlängningsstylister i hela UK. Dela tekniker, trender och leverantörstips.",
      },
      {
        title: "Snabbt & gratis att ansöka",
        description:
          "Enkel ansökan på 3 minuter. Inga avgifter, inga förpliktelser. Godkända stylister listas inom 48 timmar.",
      },
    ],
    featuredTitle: "Utvalda förlängningsstylister",
    featuredSubtitle:
      "Verifierade stylister som erbjuder professionella hårförlängningstjänster i hela UK. Nya stylister läggs till regelbundet.",
    comingSoonTitle: "Stylistkatalogen kommer snart",
    comingSoonDesc:
      "Vi granskar ansökningar och bygger vår katalog med verifierade förlängningsstylister. Ansök nedan för att bli en av de första som listas.",
    comingSoonCta: "Ansök om att listas",
    howTitle: "Så här fungerar det",
    howSubtitle:
      "Från ansökan till listning — en enkel process i 3 steg. Inga avgifter, inga förpliktelser.",
    steps: [
      {
        title: "Fyll i ansökan",
        desc: "Berätta om din salong, din plats, de metoder du erbjuder och dina sociala kanaler. Tar 3 minuter.",
      },
      {
        title: "Vi granskar din profil",
        desc: "Vi kontrollerar din Instagram eller webbplats för att verifiera kvalitet och professionalitet. Vi svarar inom 48 timmar.",
      },
      {
        title: "Bli listad på dshairbeauty.co.uk",
        desc: "Godkända stylister visas i vår Hitta en stylist-katalog — med en direktlänk till din Instagram eller bokningssida.",
      },
    ],
    applyTitle: "Ansök om att listas",
    applySubtitle:
      "Fyll i formuläret nedan. Vi granskar varje ansökan och svarar inom 48 timmar.",
    nameLabel: "Ditt namn *",
    namePlaceholder: "För- och efternamn",
    salonLabel: "Salongens namn *",
    salonPlaceholder: "t.ex. The Hair Studio",
    locationLabel: "Salongens plats *",
    locationPlaceholder: "t.ex. Didsbury, Manchester",
    emailLabel: "E-postadress *",
    emailPlaceholder: "du@dinsalong.co.uk",
    phoneLabel: "Telefon / WhatsApp *",
    phonePlaceholder: "+44 7xxx xxxxxx",
    instagramLabel: "Instagram *",
    instagramPlaceholder: "@dinsalong",
    websiteLabel: "Webbplats / bokningslänk",
    websitePlaceholder: "https://dinsalong.co.uk",
    methodsLabel: "Förlängningsmetoder du erbjuder *",
    yearsLabel: "År med förlängningserfarenhet",
    yearsOptions: [
      "Välj intervall",
      "Under 1 år",
      "1–3 år",
      "3–5 år",
      "5–10 år",
      "Över 10 år",
    ],
    aboutLabel: "Berätta om ditt förlängningsarbete",
    aboutPlaceholder:
      "Beskriv kort dina förlängningstjänster, din specialitet och vad som utmärker ditt arbete...",
    submitBtn: "Skicka ansökan",
    submittingBtn: "Skickar...",
    formNote:
      "Inga avgifter. Inga förpliktelser. Gratis att ansöka. Vi kontaktar dig inom 48 timmar.",
    successTitle: "Ansökan mottagen!",
    successMsg1:
      "Tack — vi granskar din ansökan och återkommer inom 48 timmar.",
    successMsg2: "Följ oss på Instagram för branschtips och trender:",
    successInstagramLabel: "Följ @dshairbeauty",
    successFollowCta: "Följ @dshairbeauty",
  },
  pl: {
    metaTitle: "Znajdź stylistę przedłużania włosów UK | D.S Hair Beauty",
    metaDescription:
      "Znajdź certyfikowanego stylistę przedłużania włosów w swojej okolicy. Nasza ogólnoukowa sieć profesjonalnych partnerów salonów specjalizuje się w tape-in, nano ring, K-tip i hand-tied weft.",
    heroBadge: "Katalog Znajdź stylistę",
    heroTitle: "Znajdź stylistę przedłużania włosów w swojej okolicy",
    heroSubtitle:
      "Przeglądaj zweryfikowanych stylistów z UK specjalizujących się w profesjonalnych przedłużeniach włosów. Od tape-ins po hand-tied wefts — znajdź odpowiedniego profesjonalistę do swojego looku.",
    browseCta: "Przeglądaj stylistów",
    applyCta: "Złóż wniosek o wpis",
    benefitsTitle: "Czy jesteś stylistą przedłużania włosów?",
    benefitsSubtitle:
      "Złóż wniosek o wpis do naszego katalogu Znajdź stylistę. Bezpłatne dołączenie — dotrzyj do klientów aktywnie szukających usług przedłużania w Twojej okolicy.",
    benefits: [
      {
        title: "Dotrzyj do nowych klientów",
        description:
          "Zostań odkryty przez klientów aktywnie szukających usług przedłużania w Twoim regionie za pośrednictwem dshairbeauty.co.uk.",
      },
      {
        title: "Buduj swoją wiarygodność",
        description:
          "Bądź wymieniony obok dostawców jakościowych przedłużeń. Pokazuje klientom, że pracujesz z profesjonalnymi produktami.",
      },
      {
        title: "Dołącz do społeczności",
        description:
          "Nawiąż kontakt z innymi stylistami przedłużania w całym UK. Dziel się technikami, trendami i wskazówkami dotyczącymi dostawców.",
      },
      {
        title: "Szybka i bezpłatna aplikacja",
        description:
          "Prosty wniosek w 3 minuty. Brak opłat, brak zobowiązań. Zatwierdzeni styliści wpisywani w ciągu 48 godzin.",
      },
    ],
    featuredTitle: "Polecani styliści przedłużania",
    featuredSubtitle:
      "Zweryfikowani styliści oferujący profesjonalne usługi przedłużania włosów w całym UK. Nowi styliści dodawani regularnie.",
    comingSoonTitle: "Katalog stylistów wkrótce",
    comingSoonDesc:
      "Przeglądamy zgłoszenia i budujemy nasz katalog zweryfikowanych stylistów przedłużania. Złóż wniosek poniżej, aby być jednym z pierwszych wpisanych.",
    comingSoonCta: "Złóż wniosek o wpis",
    howTitle: "Jak to działa",
    howSubtitle:
      "Od wniosku do wpisu — prosty proces w 3 krokach. Brak opłat, brak zobowiązań.",
    steps: [
      {
        title: "Wypełnij wniosek",
        desc: "Opowiedz nam o swoim salonie, lokalizacji, oferowanych metodach i kanałach społecznościowych. Zajmuje 3 minuty.",
      },
      {
        title: "Sprawdzamy Twój profil",
        desc: "Sprawdzamy Twój Instagram lub stronę internetową, aby zweryfikować jakość i profesjonalizm. Odpowiadamy w ciągu 48 godzin.",
      },
      {
        title: "Zostań wpisany na dshairbeauty.co.uk",
        desc: "Zatwierdzeni styliści pojawiają się w naszym katalogu Znajdź stylistę — z bezpośrednim linkiem do Twojego Instagrama lub strony rezerwacji.",
      },
    ],
    applyTitle: "Złóż wniosek o wpis",
    applySubtitle:
      "Wypełnij poniższy formularz. Sprawdzamy każdy wniosek i odpowiadamy w ciągu 48 godzin.",
    nameLabel: "Twoje imię i nazwisko *",
    namePlaceholder: "Imię i nazwisko",
    salonLabel: "Nazwa salonu *",
    salonPlaceholder: "np. The Hair Studio",
    locationLabel: "Lokalizacja salonu *",
    locationPlaceholder: "np. Didsbury, Manchester",
    emailLabel: "Adres e-mail *",
    emailPlaceholder: "ty@twójsalon.co.uk",
    phoneLabel: "Telefon / WhatsApp *",
    phonePlaceholder: "+44 7xxx xxxxxx",
    instagramLabel: "Instagram *",
    instagramPlaceholder: "@twójsalon",
    websiteLabel: "Strona internetowa / link do rezerwacji",
    websitePlaceholder: "https://twójsalon.co.uk",
    methodsLabel: "Metody przedłużania, które oferujesz *",
    yearsLabel: "Lata doświadczenia w przedłużaniu",
    yearsOptions: [
      "Wybierz zakres",
      "Poniżej 1 roku",
      "1–3 lata",
      "3–5 lat",
      "5–10 lat",
      "Ponad 10 lat",
    ],
    aboutLabel: "Opowiedz nam o swojej pracy z przedłużaniami",
    aboutPlaceholder:
      "Krótko opisz swoje usługi przedłużania, swoją specjalność i co wyróżnia Twoją pracę...",
    submitBtn: "Wyślij wniosek",
    submittingBtn: "Wysyłanie...",
    formNote:
      "Brak opłat. Brak zobowiązań. Bezpłatna aplikacja. Skontaktujemy się z Tobą w ciągu 48 godzin.",
    successTitle: "Wniosek otrzymany!",
    successMsg1:
      "Dziękujemy — przeanalizujemy Twój wniosek i odpowiemy w ciągu 48 godzin.",
    successMsg2: "Śledź nas na Instagramie, aby otrzymywać wskazówki i trendy z branży:",
    successInstagramLabel: "Śledź @dshairbeauty",
    successFollowCta: "Śledź @dshairbeauty",
  },
}

export function getFindStylistContent(locale: Locale): FindStylistContent {
  return findStylistContent[locale] ?? findStylistContent.en
}
