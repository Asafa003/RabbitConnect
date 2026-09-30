export type IconAsset = {
  src: string;
  /** Root width of the exported SVG (matches the Figma slot). */
  width: number;
  /** Root height of the exported SVG (matches the Figma slot). */
  height: number;
};

// Destinations are placeholders until those pages exist.
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
] as const;

export const contact = {
  email: "support@rabbitconnect.com",
  phone: "+254 700 000 000",
  phoneHref: "tel:+254700000000",
  address: "Ijebu ode, Nigeria",
} as const;

export const stats = [
  { value: "3.5M+", label: "Farmers trusted", valueClass: "text-primary" },
  { value: "66%", label: "Income increase", valueClass: "text-emerald" },
  { value: "2%", label: "Flat transaction fee", valueClass: "text-brown" },
] as const;

export const problems: readonly {
  title: string;
  body: string;
  icon: IconAsset;
}[] = [
  {
    title: "Opaque Pricing",
    body: "Middlemen exploit price knowledge gaps at the farm gate, often paying far below market value.",
    icon: { src: "/icons/pricing.svg", width: 21.25, height: 22.5 },
  },
  {
    title: "Logistics Gaps",
    body: "High mortality rates and damage during unoptimized transport routes hurt producer profits.",
    icon: { src: "/icons/logistics.svg", width: 27.5, height: 20 },
  },
  {
    title: "Delayed Payments",
    body: "Farmers often wait weeks for liquid cash after delivery, creating severe cash flow issues.",
    icon: { src: "/icons/payments.svg", width: 27.5, height: 20 },
  },
];

// Copy that carries the design's line breaks is stored as `lines` (see <Lines />).
export const steps: readonly {
  title: string;
  lines: readonly string[];
  icon: IconAsset;
}[] = [
  {
    title: "1. Farmers List",
    lines: [
      "Farmers upload certified rabbit stock with",
      "verified health records and weight using our app.",
    ],
    icon: { src: "/icons/step-list.svg", width: 29.325, height: 30 },
  },
  {
    title: "2. Buyers Bid",
    lines: [
      "Institutional buyers and retailers place",
      "competitive bids in real-time on our commodities",
      "board.",
    ],
    icon: { src: "/icons/step-bid.svg", width: 27, height: 28.5 },
  },
  {
    title: "3. Instant Pay",
    lines: [
      "Secure escrow and mobile money integration",
      "ensure immediate payout upon delivery",
      "confirmation.",
    ],
    icon: { src: "/icons/step-pay.svg", width: 28.5, height: 27 },
  },
];

export const heroLines = [
  "Bridging the gap between rural producers and global commercial logistics",
  "with speed, trust, and transparency. Join 3.5M+ farmers across the",
  "continent.",
] as const;

export const ctaLines = [
  "Join the thousands of farmers and buyers already transforming the trade across",
  "the continent.",
] as const;

export const footerBlurbLines = [
  "Empowering smallholder farmers",
  "across Africa through transparent",
  "trade and digital logistics solutions.",
] as const;

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Sustainability", href: "#" },
    ],
  },
  {
    title: "Marketplace",
    links: [
      { label: "Sell Rabbits", href: "#" },
      { label: "Buy Rabbits", href: "#" },
      { label: "Market Trends", href: "#" },
      { label: "Logistics Partners", href: "#" },
    ],
  },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
] as const;
