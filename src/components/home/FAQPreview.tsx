"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const faqs = [
  {
    q: "How does U-Move's self-storage service work?",
    a: "We deliver a secure shipping container directly to your home or business. You pack it at your own pace — take a day or a week. When you're ready, we either leave it on your property or collect it and store it at our 24/7 monitored Henderson facility. It's up to 50% cheaper than traditional self-storage units in Perth.",
  },
  {
    q: "What container sizes does U-Move stock in 2026?",
    a: "As of March 2026, we stock 10ft, 20ft, and 40ft shipping containers in standard, high cube, side-opening, refrigerated, insulated, flat-rack, open-top, and dangerous goods configurations. All containers are wind, water, and vermin-proof with heavy-duty lockboxes. Our 20ft standard is the most popular choice for households and small businesses.",
  },
  {
    q: "Can you modify a container before delivery?",
    a: "Yes. Our in-house Henderson workshop handles all modifications — power, lighting, windows, shelving, insulation, air conditioning, plumbing, and more. We build site offices, workshops, ablution blocks, crib rooms, hydration stations, cafes, and container homes. All work is done by our own team with over 20 years of modification experience.",
  },
  {
    q: "How much does it cost to hire or buy a container in Perth?",
    a: "In March 2026, used 20ft containers start from approximately $2,100 + GST, and new 20ft containers from $3,200 + GST. Container hire starts from around $5 per day. 40ft containers range from $3,100 (used) to $6,700 (new). Delivery within Perth metro costs $250–$450. All prices exclude GST. Contact us at (08) 9459 8888 for an exact quote.",
  },
  {
    q: "Does U-Move deliver across all of Western Australia?",
    a: "Yes. We deliver to all Perth metropolitan suburbs (Henderson, Fremantle, Rockingham, Joondalup, Midland, Armadale, Mandurah) plus regional WA including Bunbury, Kalgoorlie, Geraldton, Karratha, Port Hedland, and Broome. Perth metro delivery typically takes 2–3 business days. Regional deliveries take 5–14 days depending on distance.",
  },
  {
    q: "What mining and industrial container solutions does U-Move offer?",
    a: "We supply purpose-built containers for WA mining and industrial operations: rigging storage containers with heavy-duty racks, insulated crib rooms with AC and kitchenette (seating for up to 10), hydration stations for heat stress management, 40ft tool stores with shelving and check-in counters, and AS1940-compliant dangerous goods containers for fuels and chemicals.",
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
                  <motion.svg
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-gray-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
