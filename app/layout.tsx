import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Pinyon_Script, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pinyon",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

// TODO: Set per-page canonical via generateMetadata or metadata.alternates.canonical
export const metadata: Metadata = {
  metadataBase: new URL("https://compassionatecleaning.info"),
  title: "Compassionate Cleaning · Judgment-free home cleaning in NYC",
  description:
    "NYC cleaning service for people living with anxiety, depression, ADHD, bipolar, and hoarding — alongside busy households who simply need help. Insured, bonded, since 2019.",
  openGraph: {
    title: "Compassionate Cleaning · Judgment-free home cleaning in NYC",
    description:
      "NYC cleaning service for people living with anxiety, depression, ADHD, bipolar, and hoarding — alongside busy households who simply need help. Insured, bonded, since 2019.",
    url: "https://compassionatecleaning.info",
    siteName: "Compassionate Cleaning",
    images: [
      {
        // TODO: Create og-image.jpg (1200x630) with logo and tagline
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Compassionate Cleaning",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compassionate Cleaning · Judgment-free home cleaning in NYC",
    description:
      "NYC cleaning service for people living with anxiety, depression, ADHD, bipolar, and hoarding — alongside busy households who simply need help. Insured, bonded, since 2019.",
    images: ["/og-image.jpg"],
  },
};

// TODO: Move page.tsx to server component or use generateMetadata in a parent layout for proper SSR metadata

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "CleaningService"],
  name: "Compassionate Cleaning, LLC",
  url: "https://compassionatecleaning.info",
  telephone: "+1-917-832-2500",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New York",
    addressRegion: "NY",
    addressCountry: "US",
  },
  areaServed: [
    "Manhattan",
    "Brooklyn",
    "Queens",
    "Bronx",
    "Staten Island",
    "Long Island",
    "Yonkers",
    "Westchester County",
  ],
  priceRange: "$$",
  openingHours: "Mo-Fr 09:00-17:00",
  foundingDate: "2019",
  description:
    "NYC cleaning service for people living with anxiety, depression, ADHD, bipolar, and hoarding — alongside busy households who simply need help. Insured, bonded, since 2019.",
  // TODO: Add Instagram, Facebook, Google Business Profile URLs
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://compassionatecleaning.info" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} ${pinyon.variable} ${jetbrains.variable}`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
