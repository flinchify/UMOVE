"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = ["Self Storage", "Container Sales (New)", "Container Sales (Used)", "Container Hire", "Custom Modification", "Mining & Industrial", "Removals", "Other"];

export default function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-quote-modal", handler);
    return () => window.removeEventListener("open-quote-modal", handler);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => { setOpen(false); setSubmitted(false); }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => { setOpen(false); setSubmitted(false); }} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-display text-2xl uppercase text-[var(--color-umove-navy)]">Quote Request Sent</h3>
                  <p className="mt-2 text-gray-500">We&apos;ll get back to you within 1 business day.</p>
                  <p className="mt-1 text-sm text-gray-400">For urgent enquiries call <a href="tel:0894598888" className="text-[var(--color-umove-red)] font-bold">(08) 9459 8888</a></p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="font-display text-2xl uppercase text-[var(--color-umove-navy)]">Get a Free Quote</h3>
                    <p className="text-gray-500 text-sm mt-1">We&apos;ll send our best price within 1 business day.</p>
                  </div>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Name *</label>
                        <input type="text" required className="mt-1 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none text-sm" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone *</label>
                        <input type="tel" required className="mt-1 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none text-sm" placeholder="04XX XXX XXX" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email *</label>
                      <input type="email" required className="mt-1 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none text-sm" placeholder="you@example.com" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Service</label>
                        <select className="mt-1 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none text-sm">
                          <option value="">Select...</option>
                          {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Container Size</label>
                        <select className="mt-1 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none text-sm">
                          <option value="">Select...</option>
                          <option>10ft</option><option>20ft</option><option>40ft</option><option>Not sure</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                      <textarea rows={3} className="mt-1 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none text-sm resize-none" placeholder="Tell us what you need..." />
                    </div>
                    {/* Simple human verification */}
                    <div>
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Verification: What is 3 + 4? *</label>
                      <input type="text" required pattern="7" title="Please enter the correct answer" className="mt-1 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none text-sm" placeholder="Your answer" />
                    </div>
                    <button type="submit" className="w-full bg-[var(--color-umove-red)] hover:bg-[var(--color-umove-red-light)] text-white font-bold py-4 uppercase text-sm tracking-wider transition-all hover:shadow-lg">
                      Submit Quote Request
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
