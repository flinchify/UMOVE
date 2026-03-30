"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface Props {
  faqs: { q: string; a: string }[];
}

export default function FAQAccordion({ faqs }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <AnimatedSection key={i} delay={i * 0.03}>
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
  );
}
