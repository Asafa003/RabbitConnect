import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const title = "RabbitConnect — The Rabbit Exchange for Africa";
const description =
  "RabbitConnect is a proposed digital marketplace connecting rabbit farmers, buyers and logistics partners through transparent pricing and secure payments. Join the waitlist and help shape it.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title,
  description,
  openGraph: {
    type: "website",
    siteName: "RabbitConnect",
    title,
    description,
    images: [{ url: "/images/hero-rabbit.jpg", alt: "Rabbit farming in Africa" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-rabbit.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
