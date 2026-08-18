import type { Locale } from "../config"

export interface RetStep { num: string; title: string; desc: string }
export interface RetItem { label: string; value: string }
export interface RetHour { day: string; time: string }
export interface ReturnsContent {
  metaTitle: string
  metaDescription: string
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  breadcrumb: string
  sec1Title: string
  sec1Desc: string
  sec2Title: string
  sec2Desc: string
  sec2Bullets: string[]
  sec2Alert: string
  sec3Title: string
  sec3Steps: RetStep[]
  sec4Title: string
  sec4Desc: string
  sec5Title: string
  sec5Desc: string
  sec5Note: string
  qrTitle: string
  qrItems: RetItem[]
  helpTitle: string
  helpDesc: string
  helpCta: string
  hoursTitle: string
  hours: RetHour[]
}

export const returnsContent: Record<Locale, ReturnsContent> = {
  en: {
    metaTitle: "Returns & Refunds Policy | D.S HAIR & BEAUTY",
    metaDescription: "30-day return policy on unused D.S Hair & Beauty products. Free returns by post for UK orders. Refunds processed within 5 working days of receipt.",
    heroEyebrow: "Customer Information",
    heroTitle: "Returns & Refunds",
    heroSubtitle: "30-day return window on unused products. Free returns by post for UK customers. Refunds processed within 5 working days of receipt.",
    breadcrumb: "Returns Policy",
    sec1Title: "30-day return window",
    sec1Desc: "You have 30 days from the day you receive your order to request a return. After that, unfortunately we can't offer a refund or exchange — unless the item is faulty (see below).",
    sec2Title: "Eligibility",
    sec2Desc: "To be eligible for a return, your item must be:",
    sec2Bullets: [
      "Unused and unopened — in the same condition you received it.",
      "In its original packaging, with all tags and seals intact.",
      "Accompanied by the receipt or proof of purchase."
    ],
    sec2Alert: "Opened or used hair extensions cannot be returned for hygiene reasons — this is industry-standard and applies to all professional hair extension suppliers in the UK.",
    sec3Title: "How to start a return",
    sec3Steps: [
      { num: "1", title: "Email us at returns@dshairbeauty.co.uk", desc: "Include your order number, the items you want to return and the reason. We'll send you a returns reference and the return address within one working day." },
      { num: "2", title: "Pack your return securely", desc: "Use the original packaging where possible. Include your returns reference inside the parcel so we can match it back to your order." },
      { num: "3", title: "Post it back", desc: "UK customers: we email you a pre-paid Royal Mail label — drop the parcel at any post office. International customers: return by your preferred tracked service; return postage is at your cost." },
      { num: "4", title: "Refund issued", desc: "Once your return is received and inspected, we'll email you to confirm approval. Refunds go back to your original payment method within 5 working days." }
    ],
    sec4Title: "Faulty or damaged items",
    sec4Desc: "If your order arrives damaged, faulty or not as described, please email us within 7 days of receipt with photos of the issue. We'll arrange a free return and either a replacement or full refund — whichever you prefer. This does not affect your statutory rights under the Consumer Rights Act 2015.",
    sec5Title: "Late or missing refunds",
    sec5Desc: "If you haven't received your refund within 5 working days of our confirmation email, please check your bank account again, then contact your card issuer — it can take a few days for refunds to post officially.",
    sec5Note: "Still nothing? Email returns@dshairbeauty.co.uk and we'll sort it out.",
    qrTitle: "Quick reference",
    qrItems: [
      { label: "Return window", value: "30 days" },
      { label: "UK return cost", value: "Free" },
      { label: "Refund time", value: "5 working days" },
      { label: "Faulty window", value: "7 days" }
    ],
    helpTitle: "Need help?",
    helpDesc: "Drop us an email and our team will pick it up within one working day.",
    helpCta: "Start a return",
    hoursTitle: "Hours",
    hours: [
      { day: "Mon–Fri", time: "09:00–17:30" },
      { day: "Saturday", time: "10:00–14:00" },
      { day: "Sunday", time: "Closed" }
    ]
  },
  de: {
    metaTitle: "Rückgabe- & Erstattungsrichtlinie | D.S HAIR & BEAUTY",
    metaDescription: "30-tägige Rückgabefrist für unbenutzte Produkte von D.S Hair & Beauty. Kostenlose Rücksendung per Post für UK-Bestellungen. Erstattungen innerhalb von 5 Werktagen nach Erhalt bearbeitet.",
    heroEyebrow: "Kundeninformation",
    heroTitle: "Rückgabe & Erstattung",
    heroSubtitle: "30-tägige Rückgabefrist für unbenutzte Produkte. Kostenlose Rücksendung per Post für Kunden im UK. Erstattungen innerhalb von 5 Werktagen nach Erhalt.",
    breadcrumb: "Rückgaberichtlinie",
    sec1Title: "30-tägige Rückgabefrist",
    sec1Desc: "Sie haben 30 Tage ab Erhalt Ihrer Bestellung Zeit, um eine Rückgabe zu beantragen. Danach können wir leider keine Erstattung oder keinen Umtausch anbieten — es sei denn, der Artikel ist fehlerhaft (siehe unten).",
    sec2Title: "Voraussetzungen",
    sec2Desc: "Damit ein Artikel für eine Rückgabe infrage kommt, muss er:",
    sec2Bullets: [
      "Unbenutzt und ungeöffnet — im selben Zustand wie beim Erhalt.",
      "In der Originalverpackung, mit allen Etiketten und Siegeln intakt.",
      "Mit dem Kassenbon oder dem Kaufbeleg."
    ],
    sec2Alert: "Geöffnete oder benutzte Haarverlängerungen können aus Hygienegünden nicht zurückgegeben werden — dies ist Branchenstandard und gilt für alle professionellen Anbieter von Haarverlängerungen im UK.",
    sec3Title: "So starten Sie eine Rückgabe",
    sec3Steps: [
      { num: "1", title: "Schreiben Sie uns an returns@dshairbeauty.co.uk", desc: "Geben Sie Ihre Bestellnummer, die Artikel, die Sie zurückgeben möchten, und den Grund an. Wir senden Ihnen innerhalb eines Werktags eine Rücksende-Referenz und die Retourenadresse." },
      { num: "2", title: "Verpacken Sie Ihre Rückgabe sicher", desc: "Verwenden Sie nach Möglichkeit die Originalverpackung. Legen Sie Ihre Rücksende-Referenz in das Paket, damit wir es Ihrer Bestellung zuordnen können." },
      { num: "3", title: "Senden Sie es zurück", desc: "Kunden im UK: Wir senden Ihnen ein vorfrankiertes Royal Mail-Etikett per E-Mail — geben Sie das Paket in einer Postfiliale ab. Internationale Kunden: Rücksendung mit einem eigenen Sendungsverfolgungsdienst; die Rücksendekosten tragen Sie." },
      { num: "4", title: "Erstattung ausgestellt", desc: "Sobald Ihre Rückgabe eingegangen und geprüft ist, bestätigen wir die Genehmigung per E-Mail. Erstattungen gehen innerhalb von 5 Werktagen an Ihre ursprüngliche Zahlungsmethode zurück." }
    ],
    sec4Title: "Fehlerhafte oder beschädigte Artikel",
    sec4Desc: "Wenn Ihre Bestellung beschädigt, fehlerhaft oder nicht wie beschrieben ankommt, schreiben Sie uns bitte innerhalb von 7 Tagen nach Erhalt mit Fotos des Problems. Wir arrangieren eine kostenlose Rücksendung und entweder einen Ersatz oder eine volle Erstattung — wie Sie möchten. Dies berührt Ihre gesetzlichen Rechte nach dem Consumer Rights Act 2015 nicht.",
    sec5Title: "Verspätete oder fehlende Erstattungen",
    sec5Desc: "Wenn Sie Ihre Erstattung nicht innerhalb von 5 Werktagen nach unserer Bestätigungs-E-Mail erhalten haben, prüfen Sie bitte erneut Ihr Bankkonto und wenden Sie sich dann an Ihren Kartenaussteller — es kann einige Tage dauern, bis Erstattungen offiziell gebucht werden.",
    sec5Note: "Immer noch nichts? Schreiben Sie an returns@dshairbeauty.co.uk und wir kümmern uns darum.",
    qrTitle: "Kurzübersicht",
    qrItems: [
      { label: "Rückgabefrist", value: "30 days" },
      { label: "UK-Rücksendekosten", value: "Free" },
      { label: "Erstattungszeit", value: "5 working days" },
      { label: "Fehlerfenster", value: "7 days" }
    ],
    helpTitle: "Brauchen Sie Hilfe?",
    helpDesc: "Schreiben Sie uns eine E-Mail, und unser Team meldet sich innerhalb eines Werktags.",
    helpCta: "Rückgabe starten",
    hoursTitle: "Öffnungszeiten",
    hours: [
      { day: "Mon–Fri", time: "09:00–17:30" },
      { day: "Saturday", time: "10:00–14:00" },
      { day: "Sunday", time: "Closed" }
    ]
  },
  fr: {
    metaTitle: "Politique de retours et remboursements | D.S HAIR & BEAUTY",
    metaDescription: "Politique de retour sous 30 jours pour les produits D.S Hair & Beauty non utilisés. Retours gratuits par la poste pour les commandes au Royaume-Uni. Remboursements traités sous 5 jours ouvrés après réception.",
    heroEyebrow: "Informations client",
    heroTitle: "Retours & Remboursements",
    heroSubtitle: "Délai de retour de 30 jours pour les produits non utilisés. Retours gratuits par la poste pour les clients au Royaume-Uni. Remboursements traités sous 5 jours ouvrés après réception.",
    breadcrumb: "Politique de retour",
    sec1Title: "Délai de retour de 30 jours",
    sec1Desc: "Vous disposez de 30 jours à compter de la réception de votre commande pour demander un retour. Passé ce délai, nous ne pouvons malheureusement pas proposer un remboursement ou un échange — sauf si l'article est défectueux (voir ci-dessous).",
    sec2Title: "Éligibilité",
    sec2Desc: "Pour être éligible à un retour, votre article doit être :",
    sec2Bullets: [
      "Non utilisé et non ouvert — dans le même état que lors de la réception.",
      "Dans son emballage d'origine, avec toutes les étiquettes et les sceaux intacts.",
      "Accompagné du reçu ou de la preuve d'achat."
    ],
    sec2Alert: "Les extensions capillaires ouvertes ou utilisées ne peuvent pas être retournées pour des raisons d'hygiène — c'est une norme du secteur qui s'applique à tous les fournisseurs professionnels d'extensions capillaires au Royaume-Uni.",
    sec3Title: "Comment initier un retour",
    sec3Steps: [
      { num: "1", title: "Écrivez-nous à returns@dshairbeauty.co.uk", desc: "Indiquez votre numéro de commande, les articles que vous souhaitez retourner et la raison. Nous vous enverrons une référence de retour et l'adresse de retour sous un jour ouvré." },
      { num: "2", title: "Emballez votre retour soigneusement", desc: "Utilisez si possible l'emballage d'origine. Indiquez votre référence de retour à l'intérieur du colis afin que nous puissions le associer à votre commande." },
      { num: "3", title: "Renvoyez-le", desc: "Clients au Royaume-Uni : nous vous envoyons par e-mail une étiquette Royal Mail prépayée — déposez le colis dans n'importe quel bureau de poste. Clients internationaux : retour par le service suivi de votre choix ; les frais de retour sont à votre charge." },
      { num: "4", title: "Remboursement émis", desc: "Dès réception et inspection de votre retour, nous vous enverrons un e-mail pour confirmer l'approbation. Les remboursements sont effectués sur votre moyen de paiement d'origine sous 5 jours ouvrés." }
    ],
    sec4Title: "Articles défectueux ou endommagés",
    sec4Desc: "Si votre commande arrive endommagée, défectueuse ou non conforme à la description, écrivez-nous dans les 7 jours suivant la réception avec des photos du problème. Nous organiserons un retour gratuit et un remplacement ou un remboursement intégral — selon votre préférence. Cela n'affecte pas vos droits statutaires en vertu du Consumer Rights Act 2015.",
    sec5Title: "Remboursements tardifs ou manquants",
    sec5Desc: "Si vous n'avez pas reçu votre remboursement sous 5 jours ouvrés après notre e-mail de confirmation, vérifiez à nouveau votre compte bancaire, puis contactez votre émetteur de carte — l'inscription officielle des remboursements peut prendre quelques jours.",
    sec5Note: "Toujours rien ? Écrivez à returns@dshairbeauty.co.uk et nous réglerons le problème.",
    qrTitle: "Référence rapide",
    qrItems: [
      { label: "Délai de retour", value: "30 days" },
      { label: "Coût de retour UK", value: "Free" },
      { label: "Délai de remboursement", value: "5 working days" },
      { label: "Délai défectueux", value: "7 days" }
    ],
    helpTitle: "Besoin d'aide ?",
    helpDesc: "Envoyez-nous un e-mail et notre équipe vous répondra sous un jour ouvré.",
    helpCta: "Démarrer un retour",
    hoursTitle: "Horaires",
    hours: [
      { day: "Mon–Fri", time: "09:00–17:30" },
      { day: "Saturday", time: "10:00–14:00" },
      { day: "Sunday", time: "Closed" }
    ]
  },
  ar: {
    metaTitle: "سياسة الإرجاع والاسترداد | D.S HAIR & BEAUTY",
    metaDescription: "سياسة إرجاع خلال 30 يوماً للمنتجات غير المستخدمة من D.S Hair & Beauty. إرجاع مجاني بالبريد للطلبات في المملكة المتحدة. تتم معالجة الاسترداد خلال 5 أيام عمل من الاستلام.",
    heroEyebrow: "معلومات العملاء",
    heroTitle: "الإرجاع والاسترداد",
    heroSubtitle: "فترة إرجاع مدتها 30 يوماً للمنتجات غير المستخدمة. إرجاع مجاني بالبريد للعملاء في المملكة المتحدة. تتم معالجة الاسترداد خلال 5 أيام عمل من الاستلام.",
    breadcrumb: "سياسة الإرجاع",
    sec1Title: "فترة إرجاع مدتها 30 يوماً",
    sec1Desc: "لديك 30 يوماً من تاريخ استلام طلبك لطلب إرجاع. بعد ذلك، لا يمكننا لسوء الحظ تقديم استرداد أو استبدال — ما لم يكن المنتج معيباً (انظر أدناه).",
    sec2Title: "شروط الأهلية",
    sec2Desc: "لكي تكون مؤهلاً للإرجاع، يجب أن يكون العنصر:",
    sec2Bullets: [
      "غير مستخدم وغير مفتوح — بنفس الحالة التي استلمته بها.",
      "في عبوته الأصلية، مع جميع البطاقات والأختام سليمة.",
      "مصحوباً بإيصال أو دليل على الشراء."
    ],
    sec2Alert: "لا يمكن إرجاع وصلات الشعر المفتوحة أو المستخدمة لأسباب صحية — وهذا معيار معتمد في القطاع ويطبق على جميع موردي وصلات الشعر الاحترافيين في المملكة المتحدة.",
    sec3Title: "كيفية بدء عملية إرجاع",
    sec3Steps: [
      { num: "1", title: "راسلنا على returns@dshairbeauty.co.uk", desc: "يتضمن رقم طلبك، والعناصر التي تريد إرجاعها والسبب. سنرسل لك رقم مرجع الإرجاع وعنوان الإرجاع خلال يوم عمل واحد." },
      { num: "2", title: "غلّف طرد الإرجاع بأمان", desc: "استخدم العبوة الأصلية إن أمكن. ضع رقم مرجع الإرجاع داخل الطرد حتى نتمكن من ربطه بطلبك." },
      { num: "3", title: "أعد إرساله", desc: "عملاء المملكة المتحدة: نرسل لك بريداً إلكترونياً بطابع Royal Mail مدفوع مسبقاً — سلّم الطرد في أي مكتب بريد. العملاء الدوليون: الإرجاع عبر خدمة التتبع التي تفضلها؛ وتكلفة بريد الإرجاع على نفقتك." },
      { num: "4", title: "إصدار الاسترداد", desc: "بمجرد استلام طرد الإرجال وفحصه، سنرسل لك بريداً إلكترونياً لتأكيد الموافقة. تتم الاستردادات إلى طريقة الدفع الأصلية خلال 5 أيام عمل." }
    ],
    sec4Title: "العناصر المعيبة أو التالفة",
    sec4Desc: "إذا وصل طلبك تالفاً أو معيباً أو لا يطابق الوصف، يرجى مراسلتنا خلال 7 أيام من الاستلام مع صور للمشكلة. سنرتب إرجاعاً مجانياً وإما استبدالاً أو استرداداً كاملاً — كما تفضل. لا يؤثر ذلك على حقوقك القانونية بموجب Consumer Rights Act 2015.",
    sec5Title: "عمليات الاسترداد المتأخرة أو المفقودة",
    sec5Desc: "إذا لم تستلم استردادك خلال 5 أيام عمل من بريد التأكيد الخاص بنا، يرجى التحقق من حسابك البنكي مرة أخرى، ثم تواصل مع مُصدِر بطاقتك — قد يستغرق تسجيل الاستردادات رسمياً بضعة أيام.",
    sec5Note: "ما زال لا شيء؟ راسلنا على returns@dshairbeauty.co.uk وسنتولى الأمر.",
    qrTitle: "مرجع سريع",
    qrItems: [
      { label: "فترة الإرجاع", value: "30 days" },
      { label: "تكلفة الإرجاع في المملكة المتحدة", value: "Free" },
      { label: "مدة الاسترداد", value: "5 working days" },
      { label: "فترة العيب", value: "7 days" }
    ],
    helpTitle: "تحتاج مساعدة؟",
    helpDesc: "أرسل لنا بريداً إلكترونياً وسيتولاه فريقنا خلال يوم عمل واحد.",
    helpCta: "بدء عملية إرجاع",
    hoursTitle: "ساعات العمل",
    hours: [
      { day: "Mon–Fri", time: "09:00–17:30" },
      { day: "Saturday", time: "10:00–14:00" },
      { day: "Sunday", time: "Closed" }
    ]
  },
  sv: {
    metaTitle: "Retur- och återbetalningspolicy | D.S HAIR & BEAUTY",
    metaDescription: "30 dagars returrätt på oanvända produkter från D.S Hair & Beauty. Fri retur med post för beställningar i Storbritannien. Återbetalningar hanteras inom 5 arbetsdagar från mottagandet.",
    heroEyebrow: "Kundinformation",
    heroTitle: "Returer & Återbetalningar",
    heroSubtitle: "30 dagars returperiod för oanvända produkter. Fri retur med post för kunder i Storbritannien. Återbetalningar hanteras inom 5 arbetsdagar från mottagandet.",
    breadcrumb: "Returpolicy",
    sec1Title: "30 dagars returperiod",
    sec1Desc: "Du har 30 dagar från det att du tar emot din beställning för att begära en retur. Därefter kan vi tyvärr inte erbjuda återbetalning eller byte — såvida inte varan är defekt (se nedan).",
    sec2Title: "Villkor",
    sec2Desc: "För att vara berättigad till retur måste din vara:",
    sec2Bullets: [
      "Oanvänd och oöppnad — i samma skick som vid mottagandet.",
      "I sin originalförpackning, med alla etiketter och förseglingar intakta.",
      "Åtföljas av kvitto eller köpebevis."
    ],
    sec2Alert: "Öppnade eller använda hårförlängningar kan inte returneras av hygieniska skäl — detta är branschstandard och gäller alla professionella leverantörer av hårförlängningar i Storbritannien.",
    sec3Title: "Så startar du en retur",
    sec3Steps: [
      { num: "1", title: "Mejla oss på returns@dshairbeauty.co.uk", desc: "Ange ditt ordernummer, vilka varor du vill returnera och anledningen. Vi skickar dig en returreferens och returadressen inom en arbetsdag." },
      { num: "2", title: "Packa din retur säkert", desc: "Använd originalförpackningen om möjligt. Lägg din returreferens i paketet så att vi kan koppla ihop det med din order." },
      { num: "3", title: "Skicka tillbaka den", desc: "Kunder i Storbritannien: vi mejlar dig en förbetald Royal Mail-etikett — lämna paketet på vilket postkontor som helst. Internationella kunder: retur med din föredragna spårbara tjänst; returportot betalar du själv." },
      { num: "4", title: "Återbetalning utfärdas", desc: "När din retur har tagits emot och kontrollerats mejlar vi dig för att bekräfta godkännandet. Återbetalningar går tillbaka till din ursprungliga betalningsmetod inom 5 arbetsdagar." }
    ],
    sec4Title: "Defekta eller skadade varor",
    sec4Desc: "Om din beställning anländer skadad, defekt eller inte som beskrivet, mejla oss inom 7 dagar från mottagandet med foton på felet. Vi ordnar en fri retur och antingen ett ersättnings- eller fullständigt återbetalning — beroende på vad du föredrar. Detta påverkar inte dina lagstadgade rättigheter enligt Consumer Rights Act 2015.",
    sec5Title: "Försenade eller saknade återbetalningar",
    sec5Desc: "Om du inte har fått din återbetalning inom 5 arbetsdagar från vårt bekräftelsemail, kontrollera ditt bankkonto igen och kontakta sedan ditt kortföretag — det kan ta några dagar innan återbetalningar bokförs officiellt.",
    sec5Note: "Fortfarande inget? Mejla returns@dshairbeauty.co.uk så löser vi det.",
    qrTitle: "Snabbreferens",
    qrItems: [
      { label: "Returperiod", value: "30 days" },
      { label: "Returkostnad UK", value: "Free" },
      { label: "Återbetalningstid", value: "5 working days" },
      { label: "Reklamationsfönster", value: "7 days" }
    ],
    helpTitle: "Behöver du hjälp?",
    helpDesc: "Mejla oss så tar vårt team hand om det inom en arbetsdag.",
    helpCta: "Starta en retur",
    hoursTitle: "Öppettider",
    hours: [
      { day: "Mon–Fri", time: "09:00–17:30" },
      { day: "Saturday", time: "10:00–14:00" },
      { day: "Sunday", time: "Closed" }
    ]
  },
  pl: {
    metaTitle: "Polityka zwrotów i zwrotów pieniędzy | D.S HAIR & BEAUTY",
    metaDescription: "30-dniowy okres zwrotu na nieużywane produkty D.S Hair & Beauty. Darmowe zwroty pocztą dla zamówień z Wielkiej Brytanii. Zwroty pieniędzy realizowane w ciągu 5 dni roboczych od otrzymania.",
    heroEyebrow: "Informacje dla klienta",
    heroTitle: "Zwroty i zwroty pieniędzy",
    heroSubtitle: "30-dniowy okres zwrotu na nieużywane produkty. Darmowe zwroty pocztą dla klientów z Wielkiej Brytanii. Zwroty pieniędzy realizowane w ciągu 5 dni roboczych od otrzymania.",
    breadcrumb: "Polityka zwrotów",
    sec1Title: "30-dniowy okres zwrotu",
    sec1Desc: "Masz 30 dni od dnia otrzymania zamówienia na zgłoszenie zwrotu. Po tym czasie niestety nie możemy zaoferować zwrotu ani wymiany — chyba że towar jest wadliwy (patrz poniżej).",
    sec2Title: "Uprawnienia do zwrotu",
    sec2Desc: "Aby kwalifikować się do zwrotu, Twój towar musi być:",
    sec2Bullets: [
      "Nieużywany i nieotwarty — w takim samym stanie, w jakim go otrzymałeś.",
      "W oryginalnym opakowaniu, ze wszystkimi etykietami i plombami nienaruszonymi.",
      "Dołączony do paragonu lub dowodu zakupu."
    ],
    sec2Alert: "Otwartych lub używanych przedłużeń włosów nie można zwrócić ze względów higienicznych — to standard branżowy, który dotyczy wszystkich profesjonalnych dostawców przedłużeń włosów w Wielkiej Brytanii.",
    sec3Title: "Jak rozpocząć zwrot",
    sec3Steps: [
      { num: "1", title: "Napisz do nas na returns@dshairbeauty.co.uk", desc: "Podaj numer zamówienia, rzeczy, które chcesz zwrócić, oraz powód. Wyślemy Ci numer referencyjny zwrotu oraz adres zwrotu w ciągu jednego dnia roboczego." },
      { num: "2", title: "Zabezpiecz swój zwrot w paczce", desc: "Jeśli to możliwe, użyj oryginalnego opakowania. Dołącz numer referencyjny zwrotu wewnątrz paczki, abyśmy mogli powiązać ją z Twoim zamówieniem." },
      { num: "3", title: "Odsyłaj go", desc: "Klienci z Wielkiej Brytanii: wyślemy Ci e-mailem opłaconą z góry etykietę Royal Mail — zostaw paczkę w dowolnym urzędzie pocztowym. Klienci zagraniczni: zwrot wybraną przez Ciebie usługą ze śledzeniem; koszt przesyłki zwrotnej pokrywasz sam." },
      { num: "4", title: "Wydanie zwrotu", desc: "Po otrzymaniu i sprawdzeniu zwrotu wyślemy Ci e-mail z potwierdzeniem zatwierdzenia. Zwroty pieniędzy trafiają na Twoją pierwotną metodę płatności w ciągu 5 dni roboczych." }
    ],
    sec4Title: "Wadliwe lub uszkodzone towary",
    sec4Desc: "Jeśli Twoje zamówienie dotrze uszkodzone, wadliwe lub niezgodne z opisem, napisz do nas w ciągu 7 dni od otrzymania ze zdjęciem problemu. Zorganizujemy darmowy zwrot oraz wymianę lub pełny zwrot pieniędzy — zależnie od Twojej preferencji. Nie narusza to Twoich ustawowych praw na mocy Consumer Rights Act 2015.",
    sec5Title: "Opóźnione lub brakujące zwroty",
    sec5Desc: "Jeśli nie otrzymałeś zwrotu w ciągu 5 dni roboczych od naszego e-maila z potwierdzeniem, sprawdź ponownie swoje konto bankowe, a następnie skontaktuj się z wydawcą karty — księgowanie zwrotów może zająć kilka dni.",
    sec5Note: "Wciąż nic? Napisz na returns@dshairbeauty.co.uk, a my to załatwimy.",
    qrTitle: "Szybka referencja",
    qrItems: [
      { label: "Okres zwrotu", value: "30 days" },
      { label: "Koszt zwrotu UK", value: "Free" },
      { label: "Czas zwrotu", value: "5 working days" },
      { label: "Okno na wady", value: "7 days" }
    ],
    helpTitle: "Potrzebujesz pomocy?",
    helpDesc: "Napisz do nas e-mail, a nasz zespół zajmie się nim w ciągu jednego dnia roboczego.",
    helpCta: "Rozpocznij zwrot",
    hoursTitle: "Godziny",
    hours: [
      { day: "Mon–Fri", time: "09:00–17:30" },
      { day: "Saturday", time: "10:00–14:00" },
      { day: "Sunday", time: "Closed" }
    ]
  }
}

export function getReturnsContent(locale: Locale): ReturnsContent {
  return returnsContent[locale] ?? returnsContent.en
}
