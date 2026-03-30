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

export const metadata: Metadata = {
  title: "Shipping Containers Perth | Hire, Sales & Modifications | U-Move",
  description:
    "U-Move Australia — Perth's trusted container company since 2000. Hire, buy, store or modify shipping containers. 25+ years experience. Henderson WA. (08) 9459 8888.",
  alternates: { canonical: "https://u-move.com.au" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How does U-Move's self-storage service work?", acceptedAnswer: { "@type": "Answer", text: "We deliver a secure shipping container directly to your home or business. You pack it at your own pace. When ready, we either leave it on your property or collect it and store it at our 24/7 monitored Henderson facility. It's up to 50% cheaper than traditional self-storage units in Perth." } },
    { "@type": "Question", name: "What container sizes does U-Move stock in 2026?", acceptedAnswer: { "@type": "Answer", text: "As of March 2026, we stock 10ft, 20ft, and 40ft shipping containers in standard, high cube, side-opening, refrigerated, insulated, flat-rack, open-top, and dangerous goods configurations. All containers are wind, water, and vermin-proof with heavy-duty lockboxes." } },
    { "@type": "Question", name: "Can you modify a container before delivery?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our in-house Henderson workshop handles all modifications — power, lighting, windows, shelving, insulation, air conditioning, plumbing, and more. We build site offices, workshops, ablution blocks, crib rooms, hydration stations, cafes, and container homes. All work is done by our team with over 20 years of experience." } },
    { "@type": "Question", name: "How much does it cost to hire or buy a container in Perth?", acceptedAnswer: { "@type": "Answer", text: "In March 2026, used 20ft containers start from approximately $2,100 + GST, and new 20ft containers from $3,200 + GST. Container hire starts from around $5 per day. 40ft containers range from $3,100 (used) to $6,700 (new). Delivery within Perth metro costs $250-$450. All prices exclude GST. Contact (08) 9459 8888 for an exact quote." } },
    { "@type": "Question", name: "Does U-Move deliver across all of Western Australia?", acceptedAnswer: { "@type": "Answer", text: "Yes. We deliver to all Perth metropolitan suburbs plus regional WA including Bunbury, Kalgoorlie, Geraldton, Karratha, Port Hedland, and Broome. Perth metro delivery typically takes 2-3 business days. Regional deliveries take 5-14 days depending on distance." } },
    { "@type": "Question", name: "What mining and industrial container solutions does U-Move offer?", acceptedAnswer: { "@type": "Answer", text: "We supply purpose-built containers for WA mining and industrial operations: rigging storage with heavy-duty racks, insulated crib rooms with AC and kitchenette for up to 10 people, hydration stations for heat stress management, 40ft tool stores with shelving, and AS1940-compliant dangerous goods containers for fuels and chemicals." } },
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
      <FAQPreview />
      <LocationMarquee />
      <CTASection />
    </>
  );
}
