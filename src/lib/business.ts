export const business = {
  name: "Salong Magnifique",
  tagline: "Beauty, nails & wellness in Fyrislund",
  description: "Multi-service beauty salon offering nails, lashes, massage, facials, and microneedling.",
  category: "Beauty",
  address: {
    street: "Skomakargatan 5B",
    postalCode: "754 34",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "076-219 20 21",
  phoneLink: "tel:+46762192021",
  email: "info@salongmagnifique.com",
  emailLink: "mailto:info@salongmagnifique.com",
  bookingUrl: "https://www.bokadirekt.se/places/salong-magnifique-56745",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Salong Magnifique",
  rating: 4.8,
  reviewCount: 178,
  foundedYear: null as number | null,
  coordinates: { lat: 59.845, lng: 17.66 },
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
  usps: [
    {
      title: "Certifierad behandling",
      description: "Skönhetsbehandlingar med omsorg hos Salong Magnifique.",
    },
    {
      title: "Personlig service",
      description: "Varje besök anpassas efter dina önskemål.",
    },
    {
      title: "Populärt val",
      description: "Starkt betyg med 178 recensioner.",
    },
    {
      title: "Bekvämt läge",
      description: "Finns på Skomakargatan 5B i Uppsala.",
    },
  ],
  services: [
    {
      id: "fransf-rl-ngning",
      name: "Fransförlängning",
      description: "Professionell fransförlängning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "gel-naglar",
      name: "Gelénaglar",
      description: "Professionell gelénaglar med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "lashlift",
      name: "Lashlift",
      description: "Professionell lashlift med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "klassisk-massage",
      name: "Klassisk massage",
      description: "Professionell klassisk massage med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "ansiktsbehandling",
      name: "Ansiktsbehandling",
      description: "Professionell ansiktsbehandling med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Salong Magnifique. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Salong Magnifique varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  seoKeywords: [
    "skönhetssalong Fyrislund",
    "naglar Uppsala",
    "lashlift Uppsala",
    "massage Uppsala",
  ],
  brandColors: {
    primary: "#8b4a6b",
    secondary: "#e8b4bc",
    accent: "#fdf6f8",
    dark: "#5c2d42",
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
