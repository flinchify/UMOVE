import { Metadata } from "next";
import Hero from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProjectsGallery from "@/components/home/ProjectsGallery";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import DeliveryBanner from "@/components/home/DeliveryBanner";
import TrustStrip from "@/components/home/TrustStrip";
import SalesSection from "@/components/home/SalesSection";
import HireSection from "@/components/home/HireSection";
import ModificationsSection from "@/components/home/ModificationsSection";
import PricingPreview from "@/components/home/PricingPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQPreview from "@/components/home/FAQPreview";
import LocationMarquee from "@/components/home/LocationMarquee";
import CTASection from "@/components/home/CTASection";
import StatsSection from "@/components/home/StatsSection";
import FreshnessBar from "@/components/home/FreshnessBar";
import ComparisonSection from "@/components/home/ComparisonSection";
import AuthoritySection from "@/components/home/AuthoritySection";
import AuthorBio from "@/components/home/AuthorBio";

export const metadata: Metadata = {
  title: "Shipping Containers Perth | Hire, Sales & Mods | U-Move",
  description:
    "U-Move Australia — Perth's trusted container company since 2000. Buy from $2,100, hire from $5/day, custom mods, self-storage & mining solutions. Henderson WA. (08) 9459 8888.",
  alternates: { canonical: "https://u-move.com.au" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How does U-Move's self-storage service work?", acceptedAnswer: { "@type": "Answer", text: "U-Move delivers a shipping container to your door, you pack it, and we store it at our secure Henderson facility — up to 50% cheaper than traditional self-storage in Perth. You can pack at your own pace over days or weeks. When ready, we either leave the container on your property for on-site storage, or collect it and store it at our 24/7 monitored, CCTV-secured Henderson yard at 836 Cockburn Road." } },
    { "@type": "Question", name: "What container sizes does U-Move stock in 2026?", acceptedAnswer: { "@type": "Answer", text: "U-Move stocks 10ft, 20ft, and 40ft shipping containers in eight configurations as of March 2026. Available types include standard, high cube, side-opening, refrigerated, insulated, flat-rack, open-top, and AS1940-compliant dangerous goods containers. All containers are wind-proof, water-proof, and vermin-proof with heavy-duty lockboxes fitted as standard." } },
    { "@type": "Question", name: "Can you modify a container before delivery?", acceptedAnswer: { "@type": "Answer", text: "Yes — U-Move's in-house workshop at Henderson WA handles all container modifications before delivery. We fit power, lighting, windows, doors, shelving, insulation, air conditioning, and plumbing. Popular builds include site offices, workshops, ablution blocks, crib rooms, hydration stations, cafes, and container homes." } },
    { "@type": "Question", name: "How much does it cost to hire or buy a container in Perth?", acceptedAnswer: { "@type": "Answer", text: "In March 2026: used 20ft containers from $2,100 + GST, new 20ft from $3,200 + GST, and container hire from $5/day. 40ft used from $3,100 + GST, 40ft new from $6,200 + GST. Hire rates: 20ft from $5/day, 40ft from $8/day. Perth metro delivery costs $250–$450. All prices exclude GST. Call (08) 9459 8888 for an exact quote." } },
    { "@type": "Question", name: "Does U-Move deliver across all of Western Australia?", acceptedAnswer: { "@type": "Answer", text: "Yes — U-Move delivers shipping containers to every suburb in Perth and across all of regional Western Australia. Perth metro delivery in 2–3 business days. Regional WA including Bunbury, Kalgoorlie, Geraldton, Karratha, Port Hedland, and Broome in 5–14 business days." } },
    { "@type": "Question", name: "What mining and industrial container solutions does U-Move offer?", acceptedAnswer: { "@type": "Answer", text: "U-Move supplies five purpose-built container types for WA mining and industrial operations: rigging storage containers with heavy-duty racking, insulated crib rooms with AC and kitchenette for up to 10 workers, hydration stations for heat stress management, 40ft tool stores with shelving, and AS1940-compliant dangerous goods containers for fuels and chemicals." } },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Shipping Containers Perth | U-Move Australia",
  description: "Perth's trusted container company since 2000. Hire, buy, store or modify shipping containers across WA.",
  url: "https://u-move.com.au",
  datePublished: "2025-08-01",
  dateModified: "2026-03-30",
  author: { "@type": "Organization", name: "U-Move Australia", url: "https://u-move.com.au" },
  publisher: { "@type": "Organization", name: "U-Move Australia" },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <Hero />
      <MarqueeStrip />
      <FreshnessBar />
      <TrustStrip />
      <ServicesGrid />
      <DeliveryBanner />
      <StatsSection />
      <SalesSection />
      <ProjectsGallery />
      <HireSection />
      <ModificationsSection />
      <PricingPreview />
      <TestimonialsSection />
      <ComparisonSection />
      <AuthoritySection />
      <FAQPreview />
      <AuthorBio />
      <LocationMarquee />
      <CTASection />
    </>
  );
}
