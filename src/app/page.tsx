import { Metadata } from "next";
import Hero from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProjectsGallery from "@/components/home/ProjectsGallery";
import MarqueeStrip from "@/components/home/MarqueeStrip";
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
  title: "Shipping Container Hire, Sales, Storage & Modifications Perth | U-Move Australia",
  description:
    "U-Move Australia provides shipping container hire, sales, custom modifications, self-storage and mining solutions in Perth WA. 25+ years experience. Call (08) 9459 8888 for a free quote.",
  alternates: { canonical: "https://u-move.com.au" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How does U-Move's self-storage service work?", acceptedAnswer: { "@type": "Answer", text: "We deliver a shipping container to your location, you load it at your own pace, and we either leave it on-site or pick it up and store it at our 24/7 secure Henderson facility. It's up to 50% cheaper than traditional self-storage." } },
    { "@type": "Question", name: "What sizes of shipping containers does U-Move stock?", acceptedAnswer: { "@type": "Answer", text: "We stock 8ft, 10ft, 20ft, and 40ft containers in standard, high cube, pallet-wide, refrigerated, insulated, side-opening, open-top, flat-rack, and dangerous goods configurations." } },
    { "@type": "Question", name: "Can U-Move modify a shipping container before delivery?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our in-house Henderson workshop can install power, lighting, windows, shelving, insulation, air conditioning, and more. We build site offices, workshops, ablution blocks, crib rooms, cafes, and container homes." } },
    { "@type": "Question", name: "How much does it cost to hire or buy a container in Perth?", acceptedAnswer: { "@type": "Answer", text: "Pricing depends on container type, size, condition, and hire duration. Contact us at (08) 9459 8888 for a tailored quote within 1 business day." } },
    { "@type": "Question", name: "Does U-Move deliver containers across Western Australia?", acceptedAnswer: { "@type": "Answer", text: "Yes. We deliver to Perth metro, regional WA, and remote mining sites with competitive rates and fast turnaround." } },
    { "@type": "Question", name: "What mining container solutions does U-Move offer?", acceptedAnswer: { "@type": "Answer", text: "Purpose-built containers including rigging storage, crib rooms with AC (up to 10 people), hydration stations, tool stores, dangerous goods containers, and custom site offices." } },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Hero />
      <MarqueeStrip />
      <ServicesGrid />
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
