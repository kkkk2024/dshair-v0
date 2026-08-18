import type { Locale } from "../config"

export interface AcademyFeature {
  title: string
  description: string
}
export interface AcademyCredential {
  title: string
  description: string
}
export interface SpecFaq {
  q: string
  a: string
}
export interface AcademyContent {
  metaTitle: string
  metaDescription: string
  heroBadge: string
  heroTitleLine1: string
  heroTitleHighlight: string
  heroSubtitle: string
  waitlistCta: string
  learnMoreCta: string
  poweredByLabel: string
  partner1Name: string
  partner1Sub: string
  partnerWithLabel: string
  partner2Name: string
  partner2Sub: string
  whyTitle: string
  whySubtitle: string
  features: AcademyFeature[]
  storyEyebrow: string
  storyTitle: string
  storyParas: string[]
  credentialsTitle: string
  credentials: AcademyCredential[]
  waitlistTitle: string
  waitlistSubtitle: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  submitBtn: string
  submittingBtn: string
  privacyNote: string
  successTitle: string
  successMsg: string
  successContactLabel: string
  successContactEmail: string
  faqTitle: string
  faqs: SpecFaq[]
}

export const academyContent: Record<Locale, AcademyContent> = {
  en: {
    metaTitle: "Hair Extension Training Academy | D.S HAIR & BEAUTY",
    metaDescription:
      "Professional hair extension training courses in Manchester. Learn tape-in, K-tip, nano ring, weft & butterfly weft installation. CPD-certified. In-person & online options.",
    heroBadge: "Coming Soon — International Academy Programme",
    heroTitleLine1: "Master Hair Extensions.",
    heroTitleHighlight: "Get Certified.",
    heroSubtitle:
      "An exclusive international training programme bringing Australian world-class hair extension techniques to UK stylists — with official certification from Excel College Australia.",
    waitlistCta: "Join the Waitlist",
    learnMoreCta: "Learn More",
    poweredByLabel: "Powered By",
    partner1Name: "Excel College Australia",
    partner1Sub: "RTO 45200 | CRICOS Registered",
    partnerWithLabel: "In Partnership With",
    partner2Name: "D.S Hair & Beauty",
    partner2Sub: "UK Supplier | Manchester",
    whyTitle: "Why This Academy Is Different",
    whySubtitle:
      "This is not just another online course. This is a pathway to becoming a certified hair extension specialist with international credentials.",
    features: [
      { title: "Official Australian Certification", description: "Receive a certificate issued by Excel College Australia — a government-registered RTO (45200) and CRICOS-approved institution with international credibility." },
      { title: "Learn from Industry Leaders", description: "Training delivered by expert stylists with proven social media presence and years of real salon experience. Weft extensions, tape-ins, and beyond." },
      { title: "Global Recognition", description: "Your certificate carries weight internationally. Position yourself as a certified specialist and command premium pricing in the UK market." },
      { title: "Premium Student Kit Included", description: "Every student receives an official D.S. Hair extension kit to practice with — using the same professional-grade products trusted by UK salons." },
      { title: "Flexible Learning", description: "Video modules available on-demand. Learn at your own pace, revisit techniques anytime, and complete assessments when you are ready." },
      { title: "Career Advancement", description: "Stand out in a competitive market. Certified stylists attract more clients, charge higher prices, and build stronger reputations." },
    ],
    storyEyebrow: "Our Story",
    storyTitle: "A Global Partnership for UK Stylists",
    storyParas: [
      "D.S. Hair & Beauty has partnered with Excel College Australia — one of Australia's leading hair extension training institutions — to bring their world-class curriculum to the UK market.",
      "Excel College Australia is registered with the Australian Government as an RTO (Registered Training Organisation, RTO 45200) and is CRICOS approved for international students. Their programmes are recognised across the hair and beauty industry.",
      "Together, we are creating a pathway for UK stylists to access premium hair extension education and earn an internationally recognised certification — without leaving the UK.",
    ],
    credentialsTitle: "Key Credentials",
    credentials: [
      { title: "RTO 45200", description: "Registered Training Organisation (Australian Government)" },
      { title: "CRICOS Registered", description: "Approved to teach international students" },
      { title: "Expert-Led Training", description: "Curriculum developed by industry professionals" },
    ],
    waitlistTitle: "Join the Waitlist",
    waitlistSubtitle:
      "Be the first to know when the Academy opens. Early waitlist members receive priority access and exclusive launch offers.",
    nameLabel: "Your Name",
    namePlaceholder: "First & Last Name",
    emailLabel: "Email Address",
    emailPlaceholder: "you@yoursalon.co.uk",
    submitBtn: "Join the Waitlist",
    submittingBtn: "Submitting...",
    privacyNote: "We respect your privacy. No spam, ever.",
    successTitle: "You're on the List!",
    successMsg:
      "Thank you for joining our waitlist. We will notify you as soon as the Academy programme opens for enrollment.",
    successContactLabel: "Questions? Contact us at",
    successContactEmail: "academy@dshairbeauty.co.uk",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "When will the Academy launch?", a: "We are currently finalising the curriculum and approval processes. Join the waitlist to receive updates and be among the first to enrol." },
      { q: "Is this certification recognised in the UK?", a: "The certificate is issued by Excel College Australia (RTO 45200). While it is an industry qualification rather than a UK government-issued NVQ, it carries significant weight in the professional hair extension market." },
      { q: "Do I need to buy a kit to enrol?", a: "Yes. Every student receives a professional D.S. Hair extension kit as part of their enrollment. This ensures you are practicing with the same premium products used in the training modules." },
      { q: "How is the course delivered?", a: "The programme consists of video modules available on-demand through our online learning platform. You can learn at your own pace from anywhere in the world." },
    ],
  },
  de: {
    metaTitle: "Haarverlängerungs-Akademie | D.S HAIR & BEAUTY",
    metaDescription: "Professionelle Kurse zur Haarverlängerung in Manchester. Erlerne Tape-in, K-tip, Nano Ring, Weft & Butterfly Weft Applikation. CPD-zertifiziert. Präsenz- und Online-Optionen.",
    heroBadge: "Demnächst — Internationales Akademie-Programm",
    heroTitleLine1: "Meistere Haarverlängerungen.",
    heroTitleHighlight: "Werde zertifiziert.",
    heroSubtitle: "Ein exklusives internationales Ausbildungsprogramm, das australische Haarverlängerungstechniken von Weltklasse zu Stylisten im UK bringt — mit offizieller Zertifizierung von Excel College Australia.",
    waitlistCta: "Warteliste beitreten",
    learnMoreCta: "Mehr erfahren",
    poweredByLabel: "Unterstützt von",
    partner1Name: "Excel College Australia",
    partner1Sub: "RTO 45200 | CRICOS registriert",
    partnerWithLabel: "In Partnerschaft mit",
    partner2Name: "D.S Hair & Beauty",
    partner2Sub: "UK-Lieferant | Manchester",
    whyTitle: "Warum diese Akademie anders ist",
    whySubtitle: "Dies ist kein weiterer Online-Kurs. Dies ist ein Weg, zertifizierter Haarverlängerungs-Spezialist mit internationalen Qualifikationen zu werden.",
    features: [
      { title: "Offizielle australische Zertifizierung", description: "Erhalte ein Zertifikat der Excel College Australia — einer staatlich registrierten RTO (45200) und CRICOS-anerkannten Institution mit internationaler Glaubwürdigkeit." },
      { title: "Lerne von Branchenführern", description: "Schulung durch Expert*innen-Stylisten mit nachgewiesener Social-Media-Präsenz und jahrelanger echter Salonerfahrung. Weft-Verlängerungen, Tape-ins und mehr." },
      { title: "Globale Anerkennung", description: "Dein Zertifikat hat international Gewicht. Positioniere dich als zertifizierter Spezialist und erziele Premium-Preise auf dem UK-Markt." },
      { title: "Premium-Schüler-Set inklusive", description: "Jeder Schüler erhält ein offizielles D.S. Hair-Verlängerungsset zum Üben — mit denselben professionellen Produkten, die UK-Salons vertrauen." },
      { title: "Flexibles Lernen", description: "Video-Module on-demand verfügbar. Lerne in deinem Tempo, sieh Techniken jederzeit erneut und schließe Prüfungen ab, wenn du bereit bist." },
      { title: "Karriereförderung", description: "Hebe dich auf einem wettbewerbsintensiven Markt ab. Zertifizierte Stylisten gewinnen mehr Kunden, verlangen höhere Preise und bauen einen stärkeren Ruf auf." },
    ],
    storyEyebrow: "Unsere Geschichte",
    storyTitle: "Eine globale Partnerschaft für Stylisten im UK",
    storyParas: [
      "D.S. Hair & Beauty hat sich mit dem Excel College Australia — einer der führenden Einrichtungen für Haarverlängerungs-Ausbildung in Australia — zusammengetan, um deren Lehrplan von Weltklasse auf den UK-Markt zu bringen.",
      "Excel College Australia ist beim australischen Staat als RTO (Registered Training Organisation, RTO 45200) registriert und für internationale Studierende CRICOS-anerkannt. Ihre Programme werden in der Haar- und Schönheitsbranche anerkannt.",
      "Gemeinsam schaffen wir einen Weg für Stylisten im UK, Zugang zu erstklassiger Haarverlängerungs-Ausbildung zu erhalten und eine international anerkannte Zertifizierung zu erwerben — ohne das UK zu verlassen.",
    ],
    credentialsTitle: "Wichtige Qualifikationen",
    credentials: [
      { title: "RTO 45200", description: "Registered Training Organisation (australische Regierung)" },
      { title: "CRICOS registriert", description: "Zur Ausbildung internationaler Studierender zugelassen" },
      { title: "Expert-Led Training", description: "Lehrplan entwickelt von Branchenprofis" },
    ],
    waitlistTitle: "Warteliste beitreten",
    waitlistSubtitle: "Erfahre als Erster, wenn die Akademie öffnet. Frühe Mitglieder der Warteliste erhalten Vorrang-Zugang und exklusive Startangebote.",
    nameLabel: "Dein Name",
    namePlaceholder: "Vor- & Nachname",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "du@deinsalon.co.uk",
    submitBtn: "Warteliste beitreten",
    submittingBtn: "Wird gesendet...",
    privacyNote: "Wir respektieren deine Privatsphäre. Kein Spam, nie.",
    successTitle: "Du bist auf der Liste!",
    successMsg: "Danke, dass du unserer Warteliste beigetreten bist. Wir benachrichtigen dich, sobald das Akademie-Programm für Einschreibungen öffnet.",
    successContactLabel: "Fragen? Kontaktiere uns unter",
    successContactEmail: "academy@dshairbeauty.co.uk",
    faqTitle: "Häufig gestellte Fragen",
    faqs: [
      { q: "Wann startet die Akademie?", a: "Wir finalisieren derzeit den Lehrplan und die Genehmigungsprozesse. Tritt der Warteliste bei, um Updates zu erhalten und zu den Ersten zu gehören, die sich einschreiben." },
      { q: "Wird diese Zertifizierung im UK anerkannt?", a: "Das Zertifikat wird von Excel College Australia (RTO 45200) ausgestellt. Es handelt sich um eine Branchenqualifikation und nicht um einen vom UK-Staat ausgestellten NVQ, dennoch hat es großes Gewicht auf dem professionellen Haarverlängerungsmarkt." },
      { q: "Muss ich ein Set kaufen, um mich einzuschreiben?", a: "Ja. Jeder Schüler erhält ein professionelles D.S. Hair-Verlängerungsset im Rahmen der Einschreibung. So übst du mit denselben Premium-Produkten wie in den Trainingsmodulen." },
      { q: "Wie wird der Kurs vermittelt?", a: "Das Programm besteht aus Video-Modulen on-demand über unsere Online-Lernplattform. Du kannst in deinem eigenen Tempo von überall auf der Welt lernen." },
    ],
  },
  fr: {
    metaTitle: "Académie de formation aux extensions capillaires | D.S HAIR & BEAUTY",
    metaDescription: "Cours professionnels de pose d'extensions capillaires à Manchester. Apprenez pose tape-in, K-tip, nano ring, weft et butterfly weft. Certifié CPD. Options en présentiel et en ligne.",
    heroBadge: "Bientôt — Programme académique international",
    heroTitleLine1: "Maîtrisez les extensions capillaires.",
    heroTitleHighlight: "Obtenez une certification.",
    heroSubtitle: "Un programme de formation international exclusif qui apporte au UK les techniques australiennes d'extensions capillaires de classe mondiale — avec une certification officielle du Excel College Australia.",
    waitlistCta: "Rejoindre la liste d'attente",
    learnMoreCta: "En savoir plus",
    poweredByLabel: "Propulsé par",
    partner1Name: "Excel College Australia",
    partner1Sub: "RTO 45200 | Enregistré CRICOS",
    partnerWithLabel: "En partenariat avec",
    partner2Name: "D.S Hair & Beauty",
    partner2Sub: "Fournisseur UK | Manchester",
    whyTitle: "Pourquoi cette académie est différente",
    whySubtitle: "Ce n'est pas simplement un autre cours en ligne. C'est un tremplin pour devenir spécialiste certifié des extensions capillaires avec des qualifications internationales.",
    features: [
      { title: "Certification australienne officielle", description: "Recevez un certificat délivré par Excel College Australia — un RTO (45200) enregistré auprès du gouvernement et une institution agréée CRICOS jouissant d'une crédibilité internationale." },
      { title: "Apprenez auprès des leaders du secteur", description: "Formation dispensée par des stylistes experts avec une présence prouvée sur les réseaux sociaux et des années d'expérience réelle en salon. Extensions weft, tape-ins et plus encore." },
      { title: "Reconnaissance mondiale", description: "Votre certificat a de la valeur à l'international. Positionnez-vous comme spécialiste certifié et pratiquez des tarifs premium sur le marché UK." },
      { title: "Kit étudiant premium inclus", description: "Chaque étudiant reçoit un kit d'extensions D.S. Hair officiel pour s'entraîner — avec les mêmes produits professionnels de confiance des salons UK." },
      { title: "Apprentissage flexible", description: "Modules vidéo disponibles à la demande. Apprenez à votre rythme, revisez les techniques à tout moment et passez les évaluations quand vous êtes prêt." },
      { title: "Évolution de carrière", description: "Détachez-vous sur un marché concurrentiel. Les stylistes certifiés attirent plus de clients, pratiquent des prix plus élevés et bâtissent une meilleure réputation." },
    ],
    storyEyebrow: "Notre histoire",
    storyTitle: "Un partenariat mondial pour les stylistes UK",
    storyParas: [
      "D.S. Hair & Beauty s'est associé à Excel College Australia — l'une des principales institutions de formation aux extensions capillaires en Australia — pour proposer son programme de classe mondiale sur le marché UK.",
      "Excel College Australia est enregistré auprès du gouvernement australien en tant que RTO (Registered Training Organisation, RTO 45200) et agréé CRICOS pour les étudiants internationaux. Ses programmes sont reconnus dans l'industrie de la coiffure et de la beauté.",
      "Ensemble, nous créons un tremplin permettant aux stylistes UK d'accéder à une formation premium aux extensions capillaires et d'obtenir une certification reconnue internationalement — sans quitter le UK.",
    ],
    credentialsTitle: "Qualifications clés",
    credentials: [
      { title: "RTO 45200", description: "Registered Training Organisation (gouvernement australien)" },
      { title: "CRICOS enregistré", description: "Autorisé à enseigner aux étudiants internationaux" },
      { title: "Expert-Led Training", description: "Programme développé par des professionnels du secteur" },
    ],
    waitlistTitle: "Rejoindre la liste d'attente",
    waitlistSubtitle: "Soyez les premiers informés à l'ouverture de l'Académie. Les membres précoces de la liste d'attente bénéficient d'un accès prioritaire et d'offres de lancement exclusives.",
    nameLabel: "Votre nom",
    namePlaceholder: "Prénom & Nom",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "vous@votresalon.co.uk",
    submitBtn: "Rejoindre la liste d'attente",
    submittingBtn: "Envoi en cours...",
    privacyNote: "Nous respectons votre vie privée. Aucun spam, jamais.",
    successTitle: "Vous êtes sur la liste !",
    successMsg: "Merci de vous être inscrit à notre liste d'attente. Nous vous informerons dès l'ouverture du programme académique aux inscriptions.",
    successContactLabel: "Des questions ? Contactez-nous à",
    successContactEmail: "academy@dshairbeauty.co.uk",
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "Quand l'Académie sera-t-elle lancée ?", a: "Nous finalisons actuellement le programme et les processus d'approbation. Rejoignez la liste d'attente pour recevoir les mises à jour et faire partie des premiers inscrits." },
      { q: "Cette certification est-elle reconnue au UK ?", a: "Le certificat est délivré par Excel College Australia (RTO 45200). Bien qu'il s'agisse d'une qualification professionnelle plutôt que d'un NVQ délivré par le gouvernement UK, il pèse lourd sur le marché professionnel des extensions capillaires." },
      { q: "Dois-je acheter un kit pour m'inscrire ?", a: "Oui. Chaque étudiant reçoit un kit d'extensions D.S. Hair professionnel dans le cadre de son inscription. Cela garantit que vous vous entraînez avec les mêmes produits premium utilisés dans les modules de formation." },
      { q: "Comment le cours est-il dispensé ?", a: "Le programme se compose de modules vidéo disponibles à la demande via notre plateforme d'apprentissage en ligne. Vous pouvez apprendre à votre rythme depuis n'importe où dans le monde." },
    ],
  },
  ar: {
    metaTitle: "أكاديمية تدريب إكسسوارات الشعر | D.S HAIR & BEAUTY",
    metaDescription: "دورات تدريبية احترافية لتركيب إكسسوارات الشعر في مانشستر. تعلم تقنيات تايب-إن، وكي-تيب، ونانو رينغ، وويفت وبيترفلاي ويفت. معتمدة من CPD. خيارات حضورية وعبر الإنترنت.",
    heroBadge: "قريباً — البرنامج الأكاديمي الدولي",
    heroTitleLine1: "أتقن إكسسوارات الشعر.",
    heroTitleHighlight: "احصل على شهادة.",
    heroSubtitle: "برنامج تدريبي دولي حصري يجلب تقنيات إكسسوارات الشعر الأسترالية من الطراز العالمي إلى مصففي الشعر في UK — مع شهادة رسمية من Excel College Australia.",
    waitlistCta: "انضم لقائمة الانتظار",
    learnMoreCta: "اعرف المزيد",
    poweredByLabel: "مدعوم من",
    partner1Name: "Excel College Australia",
    partner1Sub: "RTO 45200 | مسجل في CRICOS",
    partnerWithLabel: "بشراكة مع",
    partner2Name: "D.S Hair & Beauty",
    partner2Sub: "مورّد UK | مانشستر",
    whyTitle: "لماذا تتميز هذه الأكاديمية",
    whySubtitle: "هذا ليس مجرد دورة أخرى عبر الإنترنت. إنه طريق لتصبح أخصائياً معتمداً لإكسسوارات الشعر بأوراق اعتماد دولية.",
    features: [
      { title: "شهادة أسترالية رسمية", description: "احصل على شهادة صادرة عن Excel College Australia — وهي منظمة RTO (45200) مسجلة لدى الحكومة ومؤسسة معتمدة من CRICOS ذات مصداقية دولية." },
      { title: "تعلّم من رواد الصناعة", description: "تدريب يقدّمه مصففون خبراء بوجود مثبت على وسائل التواصل الاجتماعي وسنوات من الخبرة الحقيقية في الصالون. إكسسوارات الويفت، والتايب-إن، والمزيد." },
      { title: "اعتراف عالمي", description: "تحمل شهادتك وزناً دولياً. تميّز كأخصائي معتمد وافرض أسعاراً مميزة في سوق UK." },
      { title: "مجموعة طالب متميزة مشمولة", description: "يحصل كل طالب على مجموعة إكسسوارات D.S. Hair رسمية للتدريب — بنفس المنتجات الاحترافية التي تثق بها صالونات UK." },
      { title: "تعلم مرن", description: "وحدات فيديو متاحة عند الطلب. تعلّم بالسرعة التي تناسبك، وراجع التقنيات في أي وقت، وأكمل التقييمات عندما تكون جاهزاً." },
      { title: "تطوير مهني", description: "تميّز في سوق تنافسي. يجتذب المصففون المعتمدون عملاء أكثر، ويفرضون أسعاراً أعلى، ويبنون سمعة أقوى." },
    ],
    storyEyebrow: "قصتنا",
    storyTitle: "شراكة عالمية لمصففي الشعر في UK",
    storyParas: [
      "تعاونت D.S. Hair & Beauty مع Excel College Australia — إحدى المؤسسات الرائدة لتدريب إكسسوارات الشعر في Australia — لجلب منهجها من الطراز العالمي إلى سوق UK.",
      "Excel College Australia مسجّلة لدى حكومة Australia بصفتها RTO (Registered Training Organisation, RTO 45200) ومعتمدة من CRICOS للطلاب الدوليين. وتُعترف برامجها في قطاع الشعر والتجميل.",
      "معاً، نحن نصنع طريقاً لمصففي الشعر في UK للوصول إلى تعليم متميز لإكسسوارات الشعر والحصول على شهادة معترف بها دولياً — دون مغادرة UK.",
    ],
    credentialsTitle: "أوراق الاعتماد الرئيسية",
    credentials: [
      { title: "RTO 45200", description: "Registered Training Organisation (حكومة Australia)" },
      { title: "CRICOS مسجل", description: "معتمدة لتعليم الطلاب الدوليين" },
      { title: "Expert-Led Training", description: "منهج طوّره مختصون في القطاع" },
    ],
    waitlistTitle: "انضم لقائمة الانتظار",
    waitlistSubtitle: "كن أول من يعلم عند افتتاح الأكاديمية. يحصل أعضاء قائمة الانتظار المبكرون على وصول ذي أولوية وعروض إطلاق حصرية.",
    nameLabel: "اسمك",
    namePlaceholder: "الاسم الأول والاسم الأخير",
    emailLabel: "عنوان البريد الإلكتروني",
    emailPlaceholder: "you@yoursalon.co.uk",
    submitBtn: "انضم لقائمة الانتظار",
    submittingBtn: "جارٍ الإرسال...",
    privacyNote: "نحترم خصوصيتك. لا رسائل مزعجة، أبداً.",
    successTitle: "أنت على القائمة!",
    successMsg: "شكراً لانضمامك إلى قائمة الانتظار. سنخطرك فور افتتاح البرنامج الأكاديمي للتسجيل.",
    successContactLabel: "أسئلة؟ تواصل معنا على",
    successContactEmail: "academy@dshairbeauty.co.uk",
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      { q: "متى سيتم إطلاق الأكاديمية؟", a: "نحن نعمل حالياً على وضع اللمسات الأخيرة على المنهج وإجراءات الاعتماد. انضم إلى قائمة الانتظار لتلقي التحديثات ولتكن من أوائل المسجلين." },
      { q: "هل هذه الشهادة معترف بها في UK؟", a: "تُصدر الشهادة من Excel College Australia (RTO 45200). ورغم أنها مؤهل مهني وليس NVQ صادراً عن حكومة UK، إلا أنها تحمل وزناً كبيراً في سوق إكسسوارات الشعر الاحترافي." },
      { q: "هل أحتاج لشراء مجموعة للتسجيل؟", a: "نعم. يحصل كل طالب على مجموعة إكسسوارات D.S. Hair احترافية ضمن تسجيله. هذا يضمن تدريبك بنفس المنتجات المميزة المستخدمة في وحدات التدريب." },
      { q: "كيف يُقدَّم الكورس؟", a: "يتكوّن البرنامج من وحدات فيديو متاحة عند الطلب عبر منصتنا للتعلم عبر الإنترنت. يمكنك التعلّم بالسرعة التي تناسبك من أي مكان في العالم." },
    ],
  },
  sv: {
    metaTitle: "Akademi för utbildning i hårförlängning | D.S HAIR & BEAUTY",
    metaDescription: "Professionella kurser i hårförlängning i Manchester. Lär dig tejp-in, K-tip, nano ring, weft och butterfly weft. CPD-certifierad. Alternativ för närundervisning och online.",
    heroBadge: "Kommer snart — Internationellt akademiprogram",
    heroTitleLine1: "Bemästra hårförlängning.",
    heroTitleHighlight: "Bli certifierad.",
    heroSubtitle: "Ett exklusivt internationellt utbildningsprogram som för australiensisk hårförlängningsteknik i världsklass till frisörer i UK — med officiell certifiering från Excel College Australia.",
    waitlistCta: "Gå med i väntelistan",
    learnMoreCta: "Läs mer",
    poweredByLabel: "Drivs av",
    partner1Name: "Excel College Australia",
    partner1Sub: "RTO 45200 | CRICOS-registrerad",
    partnerWithLabel: "I samarbete med",
    partner2Name: "D.S Hair & Beauty",
    partner2Sub: "UK-leverantör | Manchester",
    whyTitle: "Varför denna akademi är annorlunda",
    whySubtitle: "Detta är inte bara en till onlinekurs. Det är en väg till att bli en certifierad specialist på hårförlängning med internationella meriter.",
    features: [
      { title: "Officiell australiensisk certifiering", description: "Få ett certifikat utfärdat av Excel College Australia — en statligt registrerad RTO (45200) och CRICOS-godkänd institution med internationellt anseende." },
      { title: "Lär dig av branschledare", description: "Utbildning som ges av expertfrisörer med bevisad närvaro i sociala medier och många års verklig salongserfarenhet. Weft-förlängringar, tejp-in och mer." },
      { title: "Globalt erkännande", description: "Ditt certifikat har vikt internationellt. Positionera dig som certifierad specialist och ta premiumpriser på UK-marknaden." },
      { title: "Premium elevkit ingår", description: "Varje elev får ett officiellt D.S. Hair-förlängningskit att öva med — med samma professionella produkter som UK-salonger litar på." },
      { title: "Flexibelt lärande", description: "Videomoduler tillgängliga på begäran. Lär dig i din egen takt, repetera tekniker när som helst och genomför bedömningar när du är redo." },
      { title: "Karriärutveckling", description: "Stå ut på en konkurrensutsatt marknad. Certifierade frisörer lockar fler kunder, tar högre priser och bygger starkare rykte." },
    ],
    storyEyebrow: "Vår historia",
    storyTitle: "Ett globalt partnerskap för frisörer i UK",
    storyParas: [
      "D.S. Hair & Beauty har ingått ett partnerskap med Excel College Australia — en av de ledande institutionerna för utbildning i hårförlängring i Australia — för att föra deras läroplan i världsklass till UK-marknaden.",
      "Excel College Australia är registrerad hos den australiska regeringen som en RTO (Registered Training Organisation, RTO 45200) och är CRICOS-godkänd för internationella studenter. Deras program erkänns inom hårvårds- och skönhetsbranschen.",
      "Tillsammans skapar vi en väg för frisörer i UK att få tillgång till premiumutbildning i hårförlängning och erhålla en internationellt erkänd certifiering — utan att lämna UK.",
    ],
    credentialsTitle: "Viktiga meriter",
    credentials: [
      { title: "RTO 45200", description: "Registered Training Organisation (australiska regeringen)" },
      { title: "CRICOS-registrerad", description: "Godkänd att undervisa internationella studenter" },
      { title: "Expert-Led Training", description: "Läroplan utvecklad av branschprofessionella" },
    ],
    waitlistTitle: "Gå med i väntelistan",
    waitlistSubtitle: "Var först att få veta när akademin öppnar. Tidiga medlemmar i väntelistan får prioritetsåtkomst och exklusiva lanserbjudanden.",
    nameLabel: "Ditt namn",
    namePlaceholder: "För- och efternamn",
    emailLabel: "E-postadress",
    emailPlaceholder: "du@dinsalong.co.uk",
    submitBtn: "Gå med i väntelistan",
    submittingBtn: "Skickar...",
    privacyNote: "Vi respekterar din integritet. Inga spam, någonsin.",
    successTitle: "Du är med på listan!",
    successMsg: "Tack för att du gick med i vår väntelista. Vi meddelar dig så snart akademiprogrammet öppnar för anmälan.",
    successContactLabel: "Frågor? Kontakta oss på",
    successContactEmail: "academy@dshairbeauty.co.uk",
    faqTitle: "Vanliga frågor",
    faqs: [
      { q: "När lanseras akademin?", a: "Vi färdigställer för närvarande läroplanen och godkännandeprocesserna. Gå med i väntelistan för att få uppdateringar och vara bland de första att anmäla dig." },
      { q: "Är denna certifiering erkänd i UK?", a: "Certifikatet utfärdas av Excel College Australia (RTO 45200). Även om det är en yrkeskvalifikation snarare än en NVQ utfärdad av UK-regeringen, har den stort genomslag på den professionella marknaden för hårförlängning." },
      { q: "Måste jag köpa ett kit för att anmäla mig?", a: "Ja. Varje elev får ett professionellt D.S. Hair-förlängningskit som en del av sin anmälan. Detta säkerställer att du övar med samma premiumprodukter som används i utbildningsmodulerna." },
      { q: "Hur levereras kursen?", a: "Programmet består av videomoduler tillgängliga på begäran via vår onlineinlärningsplattform. Du kan lära dig i din egen takt var som helst i världen." },
    ],
  },
  pl: {
    metaTitle: "Akademia szkoleń z przedłużania włosów | D.S HAIR & BEAUTY",
    metaDescription: "Profesjonalne kursy przedłużania włosów w Manchesterze. Naucz się aplikacji tape-in, K-tip, nano ring, weft i butterfly weft. Certyfikowane CPD. Opcje stacjonarne i online.",
    heroBadge: "Wkrótce — Międzynarodowy Program Akademicki",
    heroTitleLine1: "Opanuj przedłużanie włosów.",
    heroTitleHighlight: "Zdobądź certyfikat.",
    heroSubtitle: "Ekskluzywny międzynarodowy program szkoleniowy, który przynosi australijskie techniki przedłużania włosów światowej klasy do stylistów w UK — z oficjalnym certyfikatem od Excel College Australia.",
    waitlistCta: "Dołącz do listy oczekujących",
    learnMoreCta: "Dowiedz się więcej",
    poweredByLabel: "Dostarczone przez",
    partner1Name: "Excel College Australia",
    partner1Sub: "RTO 45200 | Zarejestrowane w CRICOS",
    partnerWithLabel: "We współpracy z",
    partner2Name: "D.S Hair & Beauty",
    partner2Sub: "Dostawca UK | Manchester",
    whyTitle: "Dlaczego ta akademia jest inna",
    whySubtitle: "To nie jest po prostu kolejny kurs online. To ścieżka do zostania certyfikowanym specjalistą od przedłużania włosów z międzynarodowymi kwalifikacjami.",
    features: [
      { title: "Oficjalny australijski certyfikat", description: "Otrzymaj certyfikat wydany przez Excel College Australia — rządowo zarejestrowaną RTO (45200) i instytucję zatwierdzoną przez CRICOS, cieszącą się międzynarodową wiarygodnością." },
      { title: "Ucz się od liderów branży", description: "Szkolenie prowadzone przez ekspertów-stylistów z udokumentowaną obecnością w mediach społecznościowych i latami prawdziwego doświadczenia w salonie. Przedłużania weft, tape-in i nie tylko." },
      { title: "Globalne uznanie", description: "Twój certyfikat ma międzynarodowe znaczenie. Wyeksponuj się jako certyfikowany specjalista i żądaj cen premium na rynku UK." },
      { title: "Zestaw premium dla studenta w cenie", description: "Każdy student otrzymuje oficjalny zestaw do przedłużania włosów D.S. Hair do ćwiczeń — z tymi samymi profesjonalnymi produktami, którym ufają salony w UK." },
      { title: "Elastyczna nauka", description: "Moduły wideo dostępne na żądanie. Ucz się we własnym tempie, powtarzaj techniki w dowolnym momencie i zdawaj oceny, gdy będziesz gotowy." },
      { title: "Awans zawodowy", description: "Wyróżnij się na konkurencyjnym rynku. Certyfikowani styliści przyciągają więcej klientów, naliczają wyższe ceny i budują silniejszą reputację." },
    ],
    storyEyebrow: "Nasza historia",
    storyTitle: "Globalne partnerstwo dla stylistów z UK",
    storyParas: [
      "D.S. Hair & Beauty nawiązała współpracę z Excel College Australia — jedną z wiodących w Australia instytucji szkoleniowych z zakresu przedłużania włosów — aby przenieść ich program światowej klasy na rynek UK.",
      "Excel College Australia jest zarejestrowana w rządzie Australia jako RTO (Registered Training Organisation, RTO 45200) i zatwierdzona przez CRICOS dla studentów międzynarodowych. Jej programy są uznawane w branży fryzjerskiej i kosmetycznej.",
      "Wspólnie tworzymy ścieżkę dla stylistów z UK, aby uzyskać dostęp do premiumowej edukacji w zakresie przedłużania włosów i zdobyć międzynarodowo uznawany certyfikat — bez opuszczania UK.",
    ],
    credentialsTitle: "Kluczowe kwalifikacje",
    credentials: [
      { title: "RTO 45200", description: "Registered Training Organisation (rząd Australia)" },
      { title: "CRICOS zarejestrowane", description: "Zatwierdzona do nauczania studentów międzynarodowych" },
      { title: "Expert-Led Training", description: "Program opracowany przez profesjonalistów z branży" },
    ],
    waitlistTitle: "Dołącz do listy oczekujących",
    waitlistSubtitle: "Dowiedz się jako pierwszy, kiedy otworzy się Akademia. Wcześni członkowie listy oczekujących otrzymują priorytetowy dostęp i ekskluzywne oferty premierowe.",
    nameLabel: "Twoje imię i nazwisko",
    namePlaceholder: "Imię i nazwisko",
    emailLabel: "Adres e-mail",
    emailPlaceholder: "ty@twójsalon.co.uk",
    submitBtn: "Dołącz do listy oczekujących",
    submittingBtn: "Wysyłanie...",
    privacyNote: "Szanujemy Twoją prywatność. Żadnego spamu, nigdy.",
    successTitle: "Jesteś na liście!",
    successMsg: "Dziękujemy za dołączenie do naszej listy oczekujących. Powiadomimy Cię, gdy tylko program akademicki otworzy się na zapisy.",
    successContactLabel: "Pytania? Skontaktuj się z nami pod",
    successContactEmail: "academy@dshairbeauty.co.uk",
    faqTitle: "Często zadawane pytania",
    faqs: [
      { q: "Kiedy akademia zostanie uruchomiona?", a: "Obecnie finalizujemy program nauczania i procesy zatwierdzania. Dołącz do listy oczekujących, aby otrzymywać aktualizacje i być wśród pierwszych zapisanych." },
      { q: "Czy ten certyfikat jest uznawany w UK?", a: "Certyfikat jest wydawany przez Excel College Australia (RTO 45200). Choć jest to kwalifikacja branżowa, a nie NVQ wydany przez rząd UK, ma on duże znaczenie na profesjonalnym rynku przedłużania włosów." },
      { q: "Czy muszę kupić zestaw, aby się zapisać?", a: "Tak. Każdy student otrzymuje profesjonalny zestaw do przedłużania włosów D.S. Hair w ramach zapisu. Gwarantuje to, że ćwiczysz z tymi samymi produktami premium, które są używane w modułach szkoleniowych." },
      { q: "W jaki sposób jest prowadzony kurs?", a: "Program składa się z modułów wideo dostępnych na żądanie za pośrednictwem naszej internetowej platformy edukacyjnej. Możesz uczyć się we własnym tempie z dowolnego miejsca na świecie." },
    ],
  },
}

export function getAcademyContent(locale: Locale): AcademyContent {
  return academyContent[locale] ?? academyContent.en
}
