// ============================================================================
// MASTER DETAILS — EDIT THIS SECTION ONLY
// ============================================================================

const BUSINESS_NAME = "Brownsville Fence Builders";
const TAGLINE = "Quality Fencing You Can Trust";
const PHONE_DISPLAY = "(956) 303-8258";
const PHONE_TEL = "tel:+19563038258";
const PHONE_RAW = "9563038258";
const EMAIL = "";
const CLIENT_EMAIL = "client@brownsvillefencebuilders.com";

const CITY = "Brownsville";
const STATE = "Texas";
const STATE_ABBR = "TX";
const COUNTY = "Cameron County";
const REGION = "Rio Grande Valley";

const PRIMARY_COLOR = "#3B2518";
const PRIMARY_DARK = "#1A1A1A";
const SECONDARY_COLOR = "#3D3D3D";
const ACCENT_COLOR = "#C4956A";

// Just type the area names — slugs generate automatically.
// Put your primary city FIRST.
const SERVICE_AREA_NAMES = [
  "Brownsville",
  "Harlingen",
  "San Benito",
  "Los Fresnos",
  "La Feria",
  "Rancho Viejo",
  "Port Isabel",
  "South Padre Island",
  "Mercedes",
];

// ============================================================================
// STOP EDITING HERE — Everything below auto-populates from above
// ============================================================================

function toSlug(name) {
  return name.toLowerCase().replace(/[&]/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const siteConfig = {
  businessName: BUSINESS_NAME,
  tagline: TAGLINE,
  niche: "Fencing",
  nicheLC: "fencing",

  phone: {
    display: PHONE_DISPLAY,
    tel: PHONE_TEL,
    raw: PHONE_RAW,
  },

  email: EMAIL,

  location: {
    city: CITY,
    state: STATE,
    stateAbbr: STATE_ABBR,
    county: COUNTY,
    region: REGION,
    fullAddress: `${CITY}, ${STATE_ABBR}`,
    mapQuery: `${CITY},+${STATE_ABBR}`,
  },

  services: [
    {
      name: "Chain-Link Fence",
      slug: "chain-link-fence",
      shortDesc: "Affordable, durable chain link fencing for security and property boundaries. Options for privacy slats, different heights, and coated finishes for residential and commercial properties.",
    },
    {
      name: "Vinyl Fence",
      slug: "vinyl-fence",
      shortDesc: "Low-maintenance vinyl fencing that resists warping, rot, and fading. Privacy, semi-privacy, and picket styles built to look great for decades with virtually no upkeep.",
    },
    {
      name: "Wood Fence",
      slug: "wood-fence",
      shortDesc: "Classic wood fencing built to handle local climate conditions. Privacy fences, picket fences, and custom designs using quality lumber and proven construction techniques.",
    },
    {
      name: "Wrought Iron Fence",
      slug: "wrought-iron-fence",
      shortDesc: "Elegant wrought iron fencing that combines timeless style with serious security. Custom ornamental iron fences and gates for homes and businesses.",
    },
    {
      name: "Metal Fence",
      slug: "metal-fence",
      shortDesc: "Modern metal fencing options including steel panels, corrugated metal, and aluminum. Durable, low-maintenance fences for contemporary style or industrial strength.",
    },
    {
      name: "Farm & Ranch Fence",
      slug: "farm-ranch-fence",
      shortDesc: "Agricultural fencing for farms, ranches, and rural properties. Pipe and rail, wire field fence, horse-safe no-climb, and livestock corrals for real working conditions.",
    },
    {
      name: "Fence Repair",
      slug: "fence-repair",
      shortDesc: "Fast, reliable fence repair for storm damage, leaning posts, broken boards, and general wear. We fix all fence types and materials. Full replacement is not always necessary.",
    },
    {
      name: "Commercial Fencing",
      slug: "commercial-fencing",
      shortDesc: "Professional commercial fencing for businesses, industrial sites, and multi-family properties. Security perimeters, access control, and durable fencing for high-traffic use.",
    },
  ],

  serviceAreas: SERVICE_AREA_NAMES.map((name, i) => ({
    name,
    slug: toSlug(name),
    ...(i === 0 ? { isPrimary: true } : {}),
  })),

  colors: {
    primary: PRIMARY_COLOR,
    primaryDark: PRIMARY_DARK,
    secondary: SECONDARY_COLOR,
    accent: ACCENT_COLOR,
    dark: "#1a1a1a",
    light: "#f5f5f5",
    white: "#ffffff",
    gray: "#555555",
  },

  images: {
    heroMain: "/images/fence-installer-1.jpeg",

    serviceCards: {
      "chain-link-fence": "/images/chain-link-fence-4.jpg",
      "vinyl-fence": "/images/vinyl-fence-1.jpeg",
      "wrought-iron-fence": "/images/wrought-iron-fence-1.jpeg",
      "wood-fence": "/images/wood-fence-4.jpg",
      "metal-fence": "/images/metal-fence-1.jpeg",
      "farm-ranch-fence": "/images/farm-ranch-fence-1.jpg",
      "fence-repair": "/images/fence-repair-2.jpg",
      "commercial-fencing": "/images/commercial-fencing-4.jpg",
    },

    gallery: [
      { src: "/images/wood-fence-3.jpg", alt: `Wood Fence in ${CITY}, ${STATE_ABBR}` },
      { src: "/images/vinyl-fence-2.jpeg", alt: `Vinyl Fence in ${CITY}, ${STATE_ABBR}` },
      { src: "/images/chain-link-fence-2.jpeg", alt: `Chain-Link Fence in ${CITY}, ${STATE_ABBR}` },
      { src: "/images/metal-fence-1.jpeg", alt: `Metal Fence in ${CITY}, ${STATE_ABBR}` },
      { src: "/images/vinyl-fence-1.jpeg", alt: `Privacy Fence in ${CITY}, ${STATE_ABBR}` },
      { src: "/images/farm-ranch-fence-1.jpg", alt: "Fence Installation Crew" },
    ],

    serviceGalleries: {
      "chain-link-fence": [
        "/images/chain-link-fence-2.jpeg",
        "/images/chain-link-fence-3.jpg",
        "/images/chain-link-fence-4.jpg",
        "/images/chain-link-fence-1.jpeg",
      ],
      "vinyl-fence": [
        "/images/vinyl-fence-1.jpeg",
        "/images/vinyl-fence-2.jpeg",
        "/images/vinyl-fence-3.jpg",
        "/images/vinyl-fence-4.jpg",
      ],
      "wood-fence": [
        "/images/wood-fence-1.jpeg",
        "/images/wood-fence-2.jpeg",
        "/images/wood-fence-3.jpg",
        "/images/wood-fence-4.jpg",
      ],
      "wrought-iron-fence": [
        "/images/wrought-iron-fence-1.jpeg",
        "/images/wrought-iron-fence-2.jpeg",
      ],
      "metal-fence": [
        "/images/metal-fence-1.jpeg",
        "/images/metal-fence-2.jpeg",
        "/images/metal-fence-3.jpg",
        "/images/metal-fence-4.jpg",
      ],
      "farm-ranch-fence": [
        "/images/farm-ranch-fence-1.jpg",
        "/images/farm-ranch-fence-2.jpg",
        "/images/farm-ranch-fence-3.jpg",
        "/images/farm-ranch-fence-4.jpg",
      ],
      "fence-repair": [
        "/images/fence-repair-2.jpg",
      ],
      "commercial-fencing": [
        "/images/commercial-fencing-1.jpeg",
        "/images/commercial-fencing-2.jpeg",
        "/images/commercial-fencing-3.jpg",
        "/images/commercial-fencing-4.jpg",
      ],
    },

    aboutWork: "/images/fence-installer-1.jpg",
    formImage: "/images/free-fence-quote-florence-sc.jpeg",
  },

  seo: {
    titleTemplate: "{page} | {businessName}",
    defaultTitle: `${BUSINESS_NAME} | Fencing Installation & Repair in ${CITY}, ${STATE_ABBR}`,
    defaultDescription: `Professional fencing contractor in ${CITY}, ${STATE_ABBR}. We install chain-link, vinyl, and wood fences. Call ${PHONE_DISPLAY} for a free estimate.`,
  },

  footerAbout: `At ${BUSINESS_NAME}, we specialize in custom fencing tailored to your needs. From privacy fences to decorative options, our skilled team ensures high-quality craftsmanship and durability.`,

  social: {
    facebook: "",
    instagram: "",
    google: "",
    yelp: "",
  },

  forms: {
    action: "https://lead-form-handler.zak-b7e.workers.dev",
    clientEmail: CLIENT_EMAIL,
    serviceOptions: [
      { value: "chain-link", label: "Chain-Link Fence" },
      { value: "vinyl", label: "Vinyl Fence" },
      { value: "wood", label: "Wood Fence" },
      { value: "wrought iron", label: "Wrought Iron Fence" },
      { value: "metal fence", label: "Metal Fence" },
      { value: "farm & ranch", label: "Farm & Ranch Fence" },
      { value: "commercial", label: "Commercial" },
      { value: "other", label: "Other" },
    ],
  },
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getFullLocation() {
  return `${siteConfig.location.city}, ${siteConfig.location.stateAbbr}`;
}

export function getSeoTitle(pageTitle) {
  if (!pageTitle) return siteConfig.seo.defaultTitle;
  return `${pageTitle} | ${siteConfig.businessName}`;
}

export function getServiceBySlug(slug) {
  return siteConfig.services.find(s => s.slug === slug);
}

export function getServiceAreaBySlug(slug) {
  return siteConfig.serviceAreas.find(a => a.slug === slug);
}
