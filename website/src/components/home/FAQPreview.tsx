"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const faqs = [
  {
    q: "How does U-Move's self-storage service work?",
    a: "We deliver a shipping container to your location, you load it at your own pace, and we either leave it on-site or pick it up and store it at our 24/7 secure Henderson facility. It's up to 50% cheaper than traditional self-storage.",
  },
  {
    q: "What sizes of shipping containers does U-Move stock?",
    a: "We stock 8ft, 10ft, 20ft, and 40ft containers in standard, high cube, pallet-wide, refrigerated, insulated, side-opening, open-top, flat-rack, and dangerous goods configurations. All containers are wind, water, and vermin-proof.",
  },
  {
    q: "Can U-Move modify a container before delivery?",
    a: "Yes. Our in-house Henderson workshop can install power, lighting, windows, shelving, insulation, air conditioning, and more. We build site offices, workshops, ablution blocks, crib rooms, cafes, and container homes to your exact specifications.",
  },
  {
    q: "How much does it cost to hire or buy a container in Perth?",
    a: "Pricing depends on container type, size, condition, and hire duration. We offer competitive rates across Perth and WA. Contact us at (08) 9459 8888 or sales@u-move.com.au for a tailored quote within 1 business day.",
  },
  {
    q: "Does U-Move deliver containers across Western Australia?",
    a: "Yes. We deliver to Perth metro, regional WA, and remote mining sites. Our fleet handles transport for residential, commercial, and industrial deliveries with competitive rates and fast turnaround.",
  },
  {
    q: "What mining container solutions does U-Move offer?",
    a: "We supply purpose-built containers for mining and industrial operations including rigging storage, crib rooms with AC and kitchenette (up to 10 people), hydration stations, tool stores, dangerous goods containers, and custom site offices.",
  },
];

export default function FAQPreview() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Quick answers to the most common questions about our container services.
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--color-umove-orange)]/30 transition-colors">
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
          <Link
            href="/faq"
            className="text-[var(--color-umove-orange)] hover:text-[var(--color-umove-orange-light)] font-semibold inline-flex items-center gap-2 transition-colors"
          >
            View all FAQs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
