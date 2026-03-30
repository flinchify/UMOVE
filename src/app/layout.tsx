import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://u-move.com.au"),
  title: {
    default: "U-Move Australia | Shipping Container Hire, Sales, Storage & Modifications Perth",
    template: "%s | U-Move Australia",
  },
  description:
    "Perth's trusted shipping container company with 25+ years experience. Container hire, sales, custom modifications, self-storage & mining solutions. Henderson WA. Call (08) 9459 8888.",
  keywords: [
    "shipping containers Perth",
    "container hire Perth",
    "container sales Perth",
    "self storage Perth",
    "container modifications Perth",
    "shipping container Henderson WA",
    "mining containers Perth",
    "container storage Western Australia",
    "sea containers for sale Perth",
    "modified shipping containers Perth",
  ],
  authors: [{ name: "U-Move Australia" }],
  creator: "U-Move Australia",
  publisher: "U-Move Australia",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://u-move.com.au",
    siteName: "U-Move Australia",
    title: "U-Move Australia | Shipping Container Solutions Perth",
    description:
      "Perth's trusted shipping container company. Hire, sales, modifications, self-storage & mining solutions. 25+ years experience. Henderson WA.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "U-Move Australia — Shipping Container Solutions Perth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "U-Move Australia | Shipping Containers Perth",
    description:
      "Container hire, sales, modifications & storage. 25+ years in Perth WA. Call (08) 9459 8888.",
  },
  alternates: {
    canonical: "https://u-move.com.au",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://u-move.com.au/#organization",
      name: "U-Move Australia",
      url: "https://u-move.com.au",
      logo: {
        "@type": "ImageObject",
        url: "https://u-move.com.au/images/U-Move-logo-copy.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+61894598888",
        contactType: "sales",
        areaServed: "AU",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.facebook.com/umoveaustralia/",
        "https://www.instagram.com/umove_australia/",
        "https://www.tiktok.com/@u.move.australia",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://u-move.com.au/#localbusiness",
      name: "U-Move Australia",
      image: "https://u-move.com.au/images/U-Move-logo-copy.png",
      url: "https://u-move.com.au",
      telephone: "(08) 9459 8888",
      email: "sales@u-move.com.au",
      address: {
        "@type": "PostalAddress",
        streetAddress: "836 Cockburn Road",
        addressLocality: "Henderson",
        addressRegion: "WA",
        postalCode: "6166",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -32.1471,
        longitude: 115.7744,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "16:00",
      },
      priceRange: "$$",
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: -31.9505,
          longitude: 115.8605,
        },
        geoRadius: "100000",
      },
      description:
        "Perth's trusted shipping container company with 25+ years experience. Container hire, sales, custom modifications, self-storage, removals and mining solutions across Western Australia.",
      foundingDate: "2000",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 10,
        maxValue: 50,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Container Services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Self Storage",
            description: "Mobile container storage delivered to your door. Up to 50% cheaper than traditional storage.",
          },
          {
            "@type": "OfferCatalog",
            name: "Container Sales",
            description: "New and used shipping containers for sale. 10ft, 20ft, 40ft and specialty containers.",
          },
          {
            "@type": "OfferCatalog",
            name: "Container Hire",
            description: "Short and long-term container hire with competitive rates and fast delivery.",
          },
          {
            "@type": "OfferCatalog",
            name: "Custom Modifications",
            description: "Container modifications for mining, commercial, industrial and residential use.",
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://u-move.com.au/#website",
      url: "https://u-move.com.au",
      name: "U-Move Australia",
      publisher: { "@id": "https://u-move.com.au/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
