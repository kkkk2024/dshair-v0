// FAQ data keyed by product tag — used by both Server & Client Components
export const TAG_FAQS: Record<string, { q: string; a: string }[]> = {
  ponytail: [
    {
      q: "How long does a ponytail extension last with proper care?",
      a: "With daily wear and proper care, our ponytail extensions typically last 6–12 months. Advise clients to gently comb from ends up, avoid heat above 180°C, and store in the provided velvet bag when not in use.",
    },
    {
      q: "Can I colour-match a ponytail extension to my client's highlights?",
      a: "Yes. We stock 31 colours including balayage shades. For clients with multi-tonal hair, we recommend going 1 shade lighter than their darkest tone — the hair falls naturally over the base, blending seamlessly.",
    },
    {
      q: "What's the best way to upsell ponytail extensions in salon?",
      a: "Bundle it with a trim or blow-dry service. Our data shows clients who buy a ponytail extension return 3× more often for refits and colour services. Show them the instant transformation before & after photos.",
    },
  ],
  "clip-in": [
    {
      q: "What's the difference between 7-piece and 9-piece clip-in sets?",
      a: "7-piece sets are ideal for adding volume or a mid-high ponytail; 9-piece sets include extra side pieces for fuller coverage from ear to ear. Recommend 9-piece for clients with thin hair or those wanting a full dramatic look.",
    },
    {
      q: "Can clip-in extensions be heat-styled?",
      a: "Yes — all our clip-ins are 100% Remy human hair and can be curled, straightened, or tonged up to 180°C. Always advise a heat protectant. For salon safety, do not exceed 200°C.",
    },
    {
      q: "How do I help clients choose between seamless and weft clip-ins?",
      a: "Seamless clip-ins lay completely flat against the scalp — best for fine hair or clients who wear updos. Weft clip-ins are slightly more visible but offer greater volume and are more budget-friendly.",
    },
  ],
  weft: [
    {
      q: "Hand-tied vs machine weft — which should I recommend?",
      a: "Hand-tied wefts are ultra-thin (3–5mm), sewn into a micro-braid track for a completely invisible finish — ideal for fine hair. Machine wefts are bonded or sewn in and can handle more frequent wash and wear. Match to your client's hair density and lifestyle.",
    },
    {
      q: "How many bundles do I need for a full head of weft extensions?",
      a: "For a classic full install: 3–4 bundles depending on head size and desired thickness. For extra volume or longer lengths (20\"+), budget 4–5 bundles. Always recommend ordering 1 extra bundle — clients prefer having a spare for colour matching or future repairs.",
    },
    {
      q: "What's the maintenance cycle for hand-tied weft extensions?",
      a: "Clients should return every 6–8 weeks for a re-tension. The hair itself lasts 3–6 months with proper care. Schedule your next service appointment before they leave the salon to ensure retention.",
    },
  ],
  bangs: [
    {
      q: "Can fringe extensions work for clients with naturally wavy hair?",
      a: "Absolutely. Our fringe pieces blend naturally with wavy textures. For best results, recommend a slight texturising cut after installation — this softens the line where the fringe meets the natural hair.",
    },
    {
      q: "How do I match a fringe extension to a client with grey hair?",
      a: "We carry 31 colours including pure silver and grey tones. For clients going grey gradually, a balayage fringe extension creates a natural root shadow effect — no need for full colour commitment.",
    },
    {
      q: "What's the minimum hair length for fringe extensions?",
      a: "Clients need at least 3–4 inches of natural hair at the front hairline for the clips to grip securely. If hair is shorter, recommend a clip-in fringe or a trial consultation first.",
    },
  ],
  fringe: [
    {
      q: "Can fringe extensions work for clients with naturally wavy hair?",
      a: "Absolutely. Our fringe pieces blend naturally with wavy textures. For best results, recommend a slight texturising cut after installation — this softens the line where the fringe meets the natural hair.",
    },
    {
      q: "How do I match a fringe extension to a client with grey hair?",
      a: "We carry 31 colours including pure silver and grey tones. For clients going grey gradually, a balayage fringe extension creates a natural root shadow effect — no need for full colour commitment.",
    },
    {
      q: "What's the minimum hair length for fringe extensions?",
      a: "Clients need at least 3–4 inches of natural hair at the front hairline for the clips to grip securely. If hair is shorter, recommend a clip-in fringe or a trial consultation first.",
    },
  ],
  "tape-in": [
    {
      q: "How long do tape-in extensions last before needing a re-fit?",
      a: "Tape-ins typically last 6–8 weeks before re-tensioning. The bonds can be removed with adhesive remover, cleaned, and re-taped up to 2–3 times before needing replacement. After 3 rounds, recommend a fresh set.",
    },
    {
      q: "Can tape-ins be applied over highlights or bleached roots?",
      a: "Avoid applying tape directly over freshly bleached or highlighted scalp — wait 48–72 hours post-colour. Tape-ins can be applied over pre-lightened lengths without issue. Always patch-test the adhesive on clients with sensitive skin.",
    },
    {
      q: "How do I prevent tape-ins from slipping on fine or oily hair?",
      a: "For fine or slippery hair, use a scalp primer before application and apply the tape slightly below the natural hairline. On very oily scalps, recommend a dry shampoo between washes to extend bond life. For clients with this issue, Nano Ring may be a better long-term option.",
    },
  ],
  "k-tip": [
    {
      q: "What's the maintenance schedule for K-tip keratin bond extensions?",
      a: "K-tip extensions last 3–4 months before needing a full re-fit. Recommend clients return every 6 weeks for a re-tension check. Remind them: no oil-based products near the bonds, and avoid sleeping with wet hair.",
    },
    {
      q: "Can K-tip extensions be used on clients with very short hair?",
      a: "Yes — K-tip is the go-to method for shorter hair. The small individual bonds can be applied as close as 1cm from the scalp, making it ideal for pixie-to-lob transformations. Recommend starting with a bob-length natural hair base.",
    },
    {
      q: "How do I prevent keratin bonds from melting in humid weather?",
      a: "Avoid saunas, steam rooms, and intense exercise for 48 hours after application. Advise clients to tie hair up loosely during workouts and use a cool shot on the dryer rather than hot air near the bonds. In humid climates, a bond-sealing spray is recommended.",
    },
  ],
  nano: [
    {
      q: "What's the smallest bond size available for nano ring extensions?",
      a: "Our nano rings are 3mm — the smallest on the market. This makes them virtually invisible even in fine, thin hair. For clients with extremely fragile hair, we recommend consultation first to assess scalp and hair health.",
    },
    {
      q: "Can nano ring extensions be installed without heat?",
      a: "Yes — nano rings require no heat during installation, making them the safest method for compromised or fragile hair. The tiny copper or aluminium rings are crimped with pliers (no glue, no keratin heat). Perfect for health-conscious clients.",
    },
    {
      q: "How do I match colours for nano extensions on clients with very dark hair?",
      a: "For very dark or jet-black hair, always recommend ordering a sample pack first. Our natural black (#1B) and off-black (#2) tones are subtly different — hold the sample against the root in natural daylight for an accurate match.",
    },
  ],
  butterfly: [
    {
      q: "What makes butterfly weft different from standard hand-tied weft?",
      a: "Butterfly weft features a unique continuous-loop construction with no cut tracks — the hair is distributed evenly across an ultra-thin 0.5mm base, eliminating shedding and creating a seamless curtain effect. It's the fastest-installing professional weft on the market.",
    },
    {
      q: "Can butterfly wefts be cut anywhere on the track?",
      a: "Yes — unlike traditional wefts, butterfly wefts can be cut at any point along the track without unraveling. This allows for fully custom installs: create a half-head, 3/4 head, or full head using exactly the right amount of hair for each client.",
    },
    {
      q: "How many butterfly weft packs for a full-head salon install?",
      a: "Most clients need 3–4 packs for a full, luxurious head. For clients wanting extreme volume or ultra-long lengths (24\"+), budget 5 packs. Butterfly weft is lightweight enough (approx. 30g per track) that even 4 packs add minimal weight.",
    },
  ],
  "hair-topper": [
    {
      q: "Silk base vs mono base vs mesh base — how do I choose for my client?",
      a: "Silk base (best): completely undetectable knots, ideal for parting and styling any direction. Mono base (good): natural knot appearance, breathable, best value. Mesh base (standard): lightweight, invisible roots, excellent for volume loss at the crown. Match to your client's level of hair loss and budget.",
    },
    {
      q: "Can a topper be worn every day?",
      a: "Yes — all our toppers can be worn daily with proper care. For clients with significant hair loss, we recommend removing the topper at night to extend its lifespan. With daily wear, expect the base to last 6–12 months before requiring replacement.",
    },
    {
      q: "How do I blend a topper seamlessly with my client's natural hair?",
      a: "Layer, texturise, and thin the connection point between the topper and natural hair using point-cutting shears. Colour the topper 1 shade lighter than the client's darkest natural tone for the most natural blend. For clients with grey hair, apply a root smudge product at the part.",
    },
  ],
}
