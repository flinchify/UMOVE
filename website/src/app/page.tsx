import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ContainerSizesPreview from "@/components/home/ContainerSizesPreview";
import FAQPreview from "@/components/home/FAQPreview";
import CTASection from "@/components/home/CTASection";

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
    {
      "@type": "Question",
      name: "How does U-Move's self-storage service work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver a shipping container to your location, you load it at your own pace, and we either leave it on-site or pick it up and store it at our 24/7 secure Henderson facility. It's up to 50% cheaper than traditional self-storage.",
      },
    },
    {
      "@type": "Question",
      name: "What sizes of shipping containers does U-Move stock?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We stock 8ft, 10ft, 20ft, and 40ft containers in standard, high cube, pallet-wide, refrigerated, insulated, side-opening, open-top, flat-rack, and dangerous goods configurations. All containers are wind, water, and vermin-proof.",
      },
    },
    {
      "@type": "Question",
      name: "Can U-Move modify a shipping container before delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our in-house Henderson workshop can install power, lighting, windows, shelving, insulation, air conditioning, and more. We build site offices, workshops, ablution blocks, crib rooms, cafes, and container homes to your exact specifications.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to hire or buy a container in Perth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on container type, size, condition, and hire duration. We offer competitive rates across Perth and WA. Contact us at (08) 9459 8888 or sales@u-move.com.au for a tailored quote within 1 business day.",
      },
    },
    {
      "@type": "Question",
      name: "Does U-Move deliver containers across Western Australia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We deliver to Perth metro, regional WA, and remote mining sites. Our fleet handles transport for residential, commercial, and industrial deliveries with competitive rates and fast turnaround.",
      },
    },
    {
      "@type": "Question",
      name: "What mining container solutions does U-Move offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We supply purpose-built containers for mining and industrial operations including rigging storage, crib rooms with AC and kitchenette (up to 10 people), hydration stations, tool stores, dangerous goods containers, and custom site offices.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      <ContainerSizesPreview />
      <FAQPreview />
      <CTASection />
    </>
  );
}
