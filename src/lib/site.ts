export type IconAsset = {
  src: string;
  /** Root width of the exported SVG (matches the Figma slot). */
  width: number;
  /** Root height of the exported SVG (matches the Figma slot). */
  height: number;
};

export const contact = {
  email: "support@rabbitconnect.com",
  partnershipsEmail: "partnerships@rabbitconnect.com",
  phone: "+234 800 000 0000",
  phoneHref: "tel:+2348000000000",
  address: "Ijebu ode, Nigeria",
} as const;

/*
 * Forms submit to /api/forms, which appends rows to the Google Sheet
 * "RabbitConnect Research" via the Apps Script in scripts/google-apps-script.js.
 * Configure GOOGLE_SHEETS_WEBAPP_URL (and optional GOOGLE_SHEETS_SECRET) in .env.local.
 */
export function mailto(subject: string, to: string = contact.email) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}`;
}

export const waitlistHref = "/#waitlist";
export const feedbackSectionHref = "/#feedback";

export type Role = "farmer" | "buyer" | "logistics";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Contact", href: "/#contact" },
] as const;

export const heroCopy =
  "We're building a digital platform connecting rabbit farmers, buyers and logistics partners to make trading simpler, more transparent and more efficient.";

export const benefits = [
  {
    title: "Better Market Access",
    body: "Reach buyers beyond your local market, from institutional buyers to retailers, and get your stock in front of them.",
  },
  {
    title: "Transparent Trading",
    body: "Create clearer processes around pricing, negotiation and transactions.",
  },
  {
    title: "Connected Logistics",
    body: "Make it easier to coordinate movement from producer to buyer.",
  },
] as const;

export const problems: readonly {
  title: string;
  body: string;
  icon: IconAsset;
}[] = [
  {
    title: "Opaque Pricing",
    body: "Limited access to reliable market information can make it difficult for producers and buyers to understand fair market value.",
    icon: { src: "/icons/pricing.svg", width: 21.25, height: 22.5 },
  },
  {
    title: "Logistics Gaps",
    body: "Moving rabbits efficiently from producers to buyers can be difficult, especially across fragmented supply chains.",
    icon: { src: "/icons/logistics.svg", width: 27.5, height: 20 },
  },
  {
    title: "Payment Friction",
    body: "Uncertainty around payments can make transactions slower and less predictable.",
    icon: { src: "/icons/payments.svg", width: 27.5, height: 20 },
  },
];

export type StepId = "list" | "discover" | "bid" | "transaction" | "logistics";

export const steps: readonly {
  id: StepId;
  title: string;
  body: string;
}[] = [
  {
    id: "list",
    title: "01 Farmers List",
    body: "Farmers could list their rabbit stock with details like breed, weight and health records.",
  },
  {
    id: "discover",
    title: "02 Buyers Discover",
    body: "Buyers could browse available stock by location, quantity and price range.",
  },
  {
    id: "bid",
    title: "03 Buyers Bid",
    body: "Institutional buyers and retailers could place competitive bids or make direct offers.",
  },
  {
    id: "transaction",
    title: "04 Transaction",
    body: "Payment would be held securely and released once delivery is confirmed.",
  },
  {
    id: "logistics",
    title: "05 Logistics",
    body: "Vetted logistics partners would coordinate pickup and delivery from farm to buyer.",
  },
];

export const roles: readonly {
  id: Role;
  label: string;
  body: string;
}[] = [
  {
    id: "farmer",
    label: "I'm a Farmer",
    body: "Tell us about pricing, finding buyers and getting paid.",
  },
  {
    id: "buyer",
    label: "I'm a Buyer",
    body: "Tell us what you need to source rabbits with confidence.",
  },
  {
    id: "logistics",
    label: "I'm a Logistics Partner",
    body: "Help us design reliable, low-loss transport routes.",
  },
];

export const footerBlurbLines = [
  "Building a more transparent,",
  "connected marketplace for",
  "Africa's rabbit value chain.",
] as const;

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Marketplace",
    links: [
      { label: "For Farmers", href: feedbackSectionHref },
      { label: "For Buyers", href: feedbackSectionHref },
      { label: "For Logistics Partners", href: feedbackSectionHref },
      { label: "Join the Waitlist", href: waitlistHref },
    ],
  },
] as const;

export type SocialId = "x" | "linkedin" | "instagram";

// Placeholder profiles until the official accounts are set up.
export const socials: readonly { id: SocialId; label: string; href: string }[] = [
  { id: "x", label: "X (Twitter)", href: "https://x.com/rabbitconnect" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/rabbitconnect" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/rabbitconnect" },
];

// Placeholder until a privacy policy page exists; required before collecting waitlist data.
export const legalLinks = [{ label: "Privacy Policy", href: "#" }] as const;
