export const business = {
  name: "Salong Magnifique",
  tagline: "Skönhetssalong med naglar, fransar & wellness i Fyrislund",
  description:
    "Välkommen till vår fantastiska skönhetssalong! Hos oss får du en lyxig och avkopplande upplevelse där vi tar hand om dig från topp till tå — naglar, fransar, lashlift, massage och ansiktsbehandling på Skomakargatan 5B i Fyrislund.",
  category: "Skönhetssalong",
  address: {
    street: "Skomakargatan 5B",
    postalCode: "754 34",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "076-219 20 21",
  phoneLink: "tel:+46762192021",
  email: "info@salongmagnifique.com" as string | null,
  emailLink: "mailto:info@salongmagnifique.com" as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/salong-magnifique-56745",
  bookingLabel: "Boka på Bokadirekt",
  websiteUrl: "https://salongmagnifique.com" as string | null,
  logoImage: "/images/logo.jpg" as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-2.jpg",
  facebookUrl: null as string | null,
  instagramUrl: "https://www.instagram.com/salong_magnifique_uppsala" as string | null,
  owner: "Salong Magnifique",
  rating: 4.8,
  reviewCount: 179,
  foundedYear: 2017,
  coordinates: { lat: 59.87, lng: 17.6691 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  trustBadges: [
    { label: "4,8 på Bokadirekt", icon: "star" },
    { label: "179+ verifierade omdömen", icon: "reviews" },
    { label: "Fransar, naglar & massage", icon: "location" },
    { label: "Fyrislund, Uppsala", icon: "student" },
  ],
  usps: [
    {
      title: "Helhetssalon",
      description: "Fransar, naglar, massage och ansiktsbehandling — allt på ett ställe.",
    },
    {
      title: "Wellness-fokus",
      description: "Kombinera skönhetsbehandling med avkopplande massage samma dag.",
    },
    {
      title: "Lugn miljö i Fyrislund",
      description: "Skomakargatan 5B — avskild från citystressen men nära allt.",
    },
    {
      title: "Erfaren personal",
      description: "Specialister inom fransar, naglar och hudvård under samma tak.",
    },
    {
      title: "Enkel bokning",
      description: "Boka online via Bokadirekt eller kontakta info@salongmagnifique.com.",
    },
    {
      title: "Höga betyg",
      description: "4,8 i snittbetyg visar att kunderna uppskattar kvalitet och service.",
    },
  ],
  services: [
    {
      id: "fransf-rl-ngning",
      name: "Fransförlängning",
      icon: "✨",
      description: "Fransförlängning hos Salong Magnifique — noggrant utfört med premiumprodukter och personlig service.",
      duration: "30–90 min",
      priceFrom: 1100,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "gel-naglar",
      name: "Gelénaglar",
      icon: "💅",
      description: "Gelénaglar hos Salong Magnifique — noggrant utfört med premiumprodukter och personlig service.",
      duration: "30–90 min",
      priceFrom: 500,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "lashlift",
      name: "Lashlift",
      icon: "💫",
      description: "Lashlift hos Salong Magnifique — noggrant utfört med premiumprodukter och personlig service.",
      duration: "30–90 min",
      priceFrom: 1200,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "klassisk-massage",
      name: "Klassisk massage",
      icon: "💆",
      description: "Klassisk massage hos Salong Magnifique — noggrant utfört med premiumprodukter och personlig service.",
      duration: "30–90 min",
      priceFrom: 800,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "ansiktsbehandling",
      name: "Ansiktsbehandling",
      icon: "🧖",
      description: "Ansiktsbehandling hos Salong Magnifique — noggrant utfört med premiumprodukter och personlig service.",
      duration: "30–90 min",
      priceFrom: 850,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Salongen", image: "/images/gallery-1.jpg" },
    { id: 2, label: "Naglar", image: "/images/gallery-2.jpg" },
    { id: 3, label: "Fransar", image: "/images/gallery-3.jpg" },
    { id: 4, label: "Behandling", image: "/images/gallery-4.jpg" },
    { id: 5, label: "Resultat", image: "/images/gallery-5.jpg" },
    { id: 6, label: "Skönhet", image: "/images/gallery-6.jpg" },
  ],
  testimonials: [
    {
      text: "Detta var min allra första nagelförlängning och jag är supernöjd. 🥰 Naglarna blev som jag önskade och hela besöket kändes tryggt och avslappnat. Erin var väldigt duktig, trevlig och lättsam, vilket gjorde besöket extra trevligt. Jag kände mig väl omhändertagen. Tack!",
      author: "Jessica A.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/salong-magnifique-56745",
      rating: 5,
      date: "2026-06-15",
    },
    {
      text: "Jag är så otroligt nöjd! Superfint jobb, Erin är så genuin och lyhörd och noggrann! Alltid otroligt nöjd! Rekommenderar VARMT!!",
      author: "Jenny G.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/salong-magnifique-56745",
      rating: 5,
      date: "2026-06-13",
    },
    {
      text: "Jag har bara gått till Erin tre gånger, men jag känner mig redan som hemma. Hon är en underbar kvinna och kan verkligen sitt jobb. Hon gör de bästa naglarna i Uppsala ❤️",
      author: "Mia C.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/salong-magnifique-56745",
      rating: 5,
      date: "2026-06-06",
    },
  ],
  about: {
    headline: "Din wellness-oas i Fyrislund",
    paragraphs: [
      "Välkommen till vår fantastiska skönhetssalong! Hos oss får du en lyxig och avkopplande upplevelse där vi tar hand om dig från topp till tå. Luta dig tillbaka, slappna av och låt oss ta hand om ditt välbefinnande.",
      "På Skomakargatan 5B i Fyrislund erbjuder vi naglar, fransförlängning, lashlift, massage, ansiktsbehandling och mer — med 4,8 i snittbetyg och 179 recensioner på Bokadirekt.",
      "Boka direkt via Bokadirekt, ring 076-219 20 21 eller maila info@salongmagnifique.com. Följ oss på Instagram @salong_magnifique_uppsala.",
    ],
  },
  faq: [
    {
      question: "Var ligger Salong Magnifique?",
      answer: "Vi finns på Skomakargatan 5B, 754 34 Uppsala. Enkelt att hitta — se karta på vår kontaktsida.",
    },
    {
      question: "Hur bokar jag tid hos Salong Magnifique?",
      answer: "Enklast bokar du via Bokadirekt på vår profilsida. Du kan också ringa 076-219 20 21 för personlig hjälp.",
    },
    {
      question: "Vad säger andra kunder om Salong Magnifique?",
      answer: "Vi har 4,8 i snittbetyg baserat på 179+ recensioner på Bokadirekt — ett förtroende vi värnar om.",
    },
    {
      question: "Vilka öppettider har ni?",
      answer: "Se aktuella öppettider på Bokadirekt eller kontaktsidan. Vi rekommenderar att boka tid i förväg.",
    },
    {
      question: "Kan jag avboka eller omboka min tid?",
      answer: "Ja, via Bokadirekt kan du hantera din bokning. Kontakta oss vid frågor så hjälper vi dig.",
    },
    {
      question: "Vilka behandlingar erbjuder ni?",
      answer: "Vi erbjuder Fransförlängning, Gelénaglar, Lashlift och mer. Se hela utbudet på vår tjänstesida.",
    },
    {
      question: "Kan jag boka flera behandlingar samma dag?",
      answer: "Ja, kontakta oss eller boka via Bokadirekt så hjälper vi dig kombinera behandlingar.",
    },
    {
      question: "Erbjuder ni presentkort?",
      answer: "Kontakta oss via telefon eller mejl för information om presentkort och paketpriser.",
    },
    {
      question: "Finns det parkering nära salongen?",
      answer: "Det finns gatuparkering och kollektivtrafik i närheten av Skomakargatan 5B i Uppsala.",
    },
  ],
  seoKeywords: [
    "skönhetssalong Fyrislund",
    "naglar Uppsala",
    "lashlift Uppsala",
    "massage Uppsala",
    "Salong Magnifique",
    "fransar Fyrislund",
  ],
  brandColors: {
    primary: "#4A1942",
    secondary: "#D4AF37",
    accent: "#FAF5FF",
    dark: "#2D0F28",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function formatPrice(amount: number | null) {
  if (amount === null) return "Pris på förfrågan";
  return `från ${amount} kr`;
}
