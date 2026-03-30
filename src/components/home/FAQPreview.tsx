"use client";

import { useState } from "react";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const faqs = [
  {
    q: "How does U-Move's self-storage service work?",
    a: "U-Move delivers a shipping container to your door, you pack it, and we store it at our secure Henderson facility — up to 50% cheaper than traditional self-storage in Perth. You can pack at your own pace over days or weeks. When ready, we either leave the container on your property for on-site storage, or collect it and store it at our 24/7 monitored, CCTV-secured Henderson yard at 836 Cockburn Road. Access your container by appointment during business hours.",
  },
  {
    q: "What container sizes does U-Move stock in 2026?",
    a: "U-Move stocks 10ft, 20ft, and 40ft shipping containers in eight configurations as of March 2026. Available types include standard, high cube, side-opening, refrigerated, insulated, flat-rack, open-top, and AS1940-compliant dangerous goods containers. All containers are wind-proof, water-proof, and vermin-proof with heavy-duty lockboxes fitted as standard. The 20ft standard container is our most popular choice for Perth households and small businesses.",
  },
  {
    q: "Can you modify a container before delivery?",
    a: "Yes — U-Move's in-house workshop at Henderson WA handles all container modifications before delivery. We fit power, lighting, windows, doors, shelving, insulation, air conditioning, and plumbing. Popular builds include site offices, workshops, ablution blocks, crib rooms, hydration stations, cafes, and container homes. Our modification team has over 20 years of experience and all work is completed on-site in Henderson before the container is delivered to you.",
  },
  {
    q: "How much does it cost to hire or buy a container in Perth?",
    a: "In March 2026: used 20ft containers from $2,100 + GST, new 20ft from $3,200 + GST, and container hire from $5/day. Full pricing: 40ft used from $3,100 + GST, 40ft new from $6,200 + GST, 40ft high cube new from $6,700 + GST. Hire rates: 20ft from $5/day, 40ft from $8/day. Perth metro delivery costs $250–$450 depending on location. All prices exclude GST. Call (08) 9459 8888 for an exact quote tailored to your requirements.",
  },
  {
    q: "Does U-Move deliver across all of Western Australia?",
    a: "Yes — U-Move delivers shipping containers to every suburb in Perth and across all of regional Western Australia. Perth metro suburbs covered include Henderson, Fremantle, Rockingham, Joondalup, Midland, Armadale, and Mandurah, with delivery in 2–3 business days. Regional WA coverage includes Bunbury, Kalgoorlie, Geraldton, Karratha, Port Hedland, and Broome, with delivery in 5–14 business days depending on distance from Henderson.",
  },
  {
    q: "What mining and industrial container solutions does U-Move offer?",
    a: "U-Move supplies five purpose-built container types for WA mining and industrial operations. These include: (1) rigging storage containers with heavy-duty racking systems, (2) insulated crib rooms with air conditioning and kitchenette seating up to 10 workers, (3) hydration stations designed for heat stress management on remote sites, (4) 40ft tool stores with shelving and check-in counters, and (5) AS1940-compliant dangerous goods containers for storing fuels and chemicals. All mining containers are built to withstand WA conditions and can be modified to meet specific site requirements.",
  },
];

export default function FAQPreview() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
            <span className="text-[var(--color-umove-red)] font-bold text-xs uppercase tracking-[0.3em]">FAQ</span>
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[var(--color-umove-navy)] uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500">Last updated: March 2026</p>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--color-umove-red)]/30 transition-colors">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">{faq.q}</h3>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Answer always in DOM for crawlers — CSS hides visually, HTML remains for extraction */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                  aria-hidden={open !== i}
                >
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/faq" className="text-[var(--color-umove-red)] font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2 hover:gap-3 transition-all">
            View all FAQs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
