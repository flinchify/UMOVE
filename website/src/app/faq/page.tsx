import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQs | Shipping Container Questions Answered",
  description:
    "Find answers to common questions about shipping container hire, sales, storage, and modifications in Perth. U-Move Australia — 25+ years experience. Call (08) 9459 8888.",
  alternates: { canonical: "https://u-move.com.au/faq" },
};

const faqs = [
  { q: "How does U-Move's self-storage service work?", a: "We deliver a shipping container to your location, you load it at your own pace, and we either leave it on-site or pick it up and store it at our 24/7 secure Henderson facility. It's up to 50% cheaper than traditional self-storage." },
  { q: "What sizes of shipping containers do you stock?", a: "We stock 8ft, 10ft, 20ft, and 40ft containers in standard, high cube, pallet-wide, refrigerated, insulated, side-opening, open-top, flat-rack, and dangerous goods configurations. All containers are wind, water, and vermin-proof." },
  { q: "Can you modify a container before delivery?", a: "Yes. Our in-house Henderson workshop can install power, lighting, windows, shelving, insulation, air conditioning, plumbing, kitchenettes, and more. We build everything from site offices to container homes." },
  { q: "How much does it cost to hire or buy a container?", a: "Pricing depends on container type, size, condition, and hire duration. We offer competitive rates across Perth and WA. Contact us at (08) 9459 8888 or sales@u-move.com.au for a tailored quote within 1 business day." },
  { q: "Do you deliver across Western Australia?", a: "Yes. We deliver to Perth metro, regional WA, and remote mining sites. Our fleet handles residential, commercial, and industrial deliveries with competitive rates and fast turnaround." },
  { q: "What mining container solutions do you offer?", a: "We supply purpose-built containers for mining including rigging storage, crib rooms with AC and kitchenette (up to 10 people), hydration stations, tool stores, dangerous goods containers, and custom site offices." },
  { q: "Is your storage facility secure?", a: "Yes. Our Henderson facility is monitored 24/7 with security systems. All containers are lockable with heavy-duty lockboxes, and they're wind, water, and vermin-proof." },
  { q: "What's the difference between hiring and buying a container?", a: "Hiring is ideal for temporary needs — no large upfront cost, flexible terms, and we handle maintenance. Buying gives you full ownership with no ongoing fees, and you can modify or resell it." },
  { q: "How long does delivery take?", a: "For standard containers in stock, we can typically deliver within 2-5 business days across Perth metro. Regional and remote deliveries may take longer depending on location." },
  { q: "Can I store a vehicle in a container?", a: "Yes. Our 20ft and 40ft containers are popular for vehicle and boat storage. They're weatherproof, lockable, and keep your vehicle protected from the elements." },
  { q: "Do you offer container modifications for residential use?", a: "Absolutely. We build container homes, granny flats, home offices, pool houses, workshops, and more. All modifications are done in-house at our Henderson workshop to your specifications." },
  { q: "What condition are used containers in?", a: "Our used containers are inspected and graded. They're all wind, water, and vermin-proof with functional doors and locks. Some may have cosmetic wear but are fully functional for storage and transport." },
  { q: "Can I visit your Henderson facility?", a: "Yes. You're welcome to visit our facility at 836 Cockburn Road, Henderson WA 6166, Monday to Friday 8am-4pm. Give us a call first at (08) 9459 8888 to let us know you're coming." },
  { q: "Do you provide packing services?", a: "We can arrange professional packing services for our storage customers. Contact us for pricing and availability." },
  { q: "What areas in Perth do you service?", a: "We service all Perth metropolitan suburbs including Henderson, Fremantle, Rockingham, Mandurah, Joondalup, Midland, Armadale, and everywhere in between. We also deliver to regional WA and remote mine sites." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions about our container services."
        image="/images/IMG_7419-1024x768.jpg"
        imageAlt="Shipping containers at U-Move facility"
        breadcrumbs={[{ label: "FAQs", href: "/faq" }]}
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
