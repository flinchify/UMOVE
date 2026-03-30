"use client";

import { useState } from "react";

const services = [
  "Self Storage",
  "Container Sales (New)",
  "Container Sales (Used)",
  "Container Hire",
  "Custom Modification",
  "Mining & Industrial",
  "Removals",
  "Other",
];

const containerSizes = ["10ft", "20ft", "40ft", "Not sure"];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-12 text-center">
        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <h3 className="text-2xl font-bold text-gray-900">Quote request sent</h3>
        <p className="mt-2 text-gray-600">We&apos;ll get back to you within 1 business day. For urgent enquiries, call <a href="tel:0894598888" className="text-[var(--color-umove-red)] font-semibold">(08) 9459 8888</a>.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Request a Quote</h2>
        <p className="mt-1 text-gray-500">We offer competitive pricing across all container services.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none transition-all" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input type="text" id="company" name="company" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none transition-all" placeholder="Company name (optional)" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none transition-all" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
          <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none transition-all" placeholder="04XX XXX XXX" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Required *</label>
          <select id="service" name="service" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none transition-all bg-white">
            <option value="">Select a service</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">Container Size</label>
          <select id="size" name="size" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none transition-all bg-white">
            <option value="">Select a size</option>
            {containerSizes.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Delivery Location</label>
        <input type="text" id="location" name="location" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none transition-all" placeholder="Suburb or site address" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
        <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-umove-red)]/20 focus:border-[var(--color-umove-red)] outline-none transition-all resize-none" placeholder="Tell us more about what you need..." />
      </div>

      <button
        type="submit"
        className="w-full bg-[var(--color-umove-red)] hover:bg-[var(--color-umove-red-light)] text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
      >
        Submit Quote Request
      </button>
      <p className="text-xs text-gray-400 text-center">We&apos;ll respond within 1 business day. Your information is kept private.</p>
    </form>
  );
}
