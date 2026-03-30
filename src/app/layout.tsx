import type { Metadata } from "next";
import { Work_Sans, Anton } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import GrainOverlay from "@/components/GrainOverlay";
import QuoteModal from "@/components/QuoteModal";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://u-move.com.au"),
  title: {
    default: "U-Move Australia | Shipping Container Hire, Sales, Storage & Modifications Perth",
    template: "%s | U-Move Australia",
  },
  description: "Perth's trusted shipping container company with 25+ years experience. Container hire, sales, custom modifications, self-storage & mining solutions. Henderson WA. Call (08) 9459 8888.",
  keywords: ["shipping containers Perth", "container hire Perth", "container sales Perth", "self storage Perth", "container modifications Perth", "shipping container Henderson WA", "mining containers Perth", "sea containers for sale Perth"],
  authors: [{ name: "U-Move Australia" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://u-move.com.au",
    siteName: "U-Move Australia",
    title: "U-Move Australia | Shipping Container Solutions Perth",
    description: "Perth's trusted shipping container company. Hire, sales, modifications, self-storage & mining solutions. 25+ years experience.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "U-Move Australia" }],
  },
  twitter: { card: "summary_large_image", title: "U-Move Australia | Shipping Containers Perth", description: "Container hire, sales, modifications & storage. 25+ years in Perth WA." },
  alternates: { canonical: "https://u-move.com.au" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://u-move.com.au/#organization",
      name: "U-Move Australia",
      url: "https://u-move.com.au",
      logo: { "@type": "ImageObject", url: "https://u-move.com.au/images/U-Move-logo-copy.png" },
      contactPoint: { "@type": "ContactPoint", telephone: "+61894598888", contactType: "sales", areaServed: "AU", availableLanguage: "English" },
      sameAs: ["https://www.facebook.com/umoveaustralia/", "https://www.instagram.com/umove_australia/", "https://www.tiktok.com/@u.move.australia"],
      foundingDate: "2000",
      knowsAbout: ["shipping containers", "container hire", "container sales", "container modifications", "self storage", "mining containers"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://u-move.com.au/#localbusiness",
      name: "U-Move Australia",
      url: "https://u-move.com.au",
      telephone: "(08) 9459 8888",
      email: "sales@u-move.com.au",
      address: { "@type": "PostalAddress", streetAddress: "836 Cockburn Road", addressLocality: "Henderson", addressRegion: "WA", postalCode: "6166", addressCountry: "AU" },
      geo: { "@type": "GeoCoordinates", latitude: -32.1471, longitude: 115.7744 },
      openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "16:00" },
      priceRange: "$$",
      description: "Perth's trusted shipping container company. Hire, sales, modifications, self-storage and mining solutions across WA. 25+ years experience. Updated March 2026.",
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5", ratingCount: "127", reviewCount: "94" },
    },
    { "@type": "WebSite", "@id": "https://u-move.com.au/#website", url: "https://u-move.com.au", name: "U-Move Australia", publisher: { "@id": "https://u-move.com.au/#organization" } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${workSans.variable} ${anton.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-body antialiased bg-white text-gray-900">
        <SmoothScroll />
        <GrainOverlay />
        <Header />
        <main>{children}</main>
        <Footer />
        <QuoteModal />
      </body>
    </html>
  );
}
