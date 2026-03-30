"use client";

import Image from "next/image";

function openQuoteModal() {
  window.dispatchEvent(new Event("open-quote-modal"));
}

export default function CTASection() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--color-umove-navy)] container-grid overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image src="/images/IMG_2795-1024x736.png" alt="" fill className="object-cover" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — big headline */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase leading-[1.05]">
              Tell us what you need & we&apos;ll send our best price.
            </h2>
            <div className="mt-8 space-y-4">
              <a href="tel:0894598888" className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-[var(--color-umove-red)] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="font-display text-2xl text-white">(08) 9459 8888</div>
                  <div className="text-gray-400 text-sm">Mon-Fri 8am-4pm</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <div className="text-white font-bold">836 Cockburn Road</div>
                  <div className="text-gray-400 text-sm">Henderson, WA 6166</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div className="text-white font-bold">Mon – Fri: 8:00am – 4:00pm</div>
                  <div className="text-gray-400 text-sm">Sat – Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — quick quote CTA */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="font-display text-2xl uppercase text-[var(--color-umove-navy)]">Get a Container Quote</h3>
            <p className="text-gray-500 text-sm mt-1 mb-6">Fill in your details and we&apos;ll get back to you within 1 business day.</p>
            <form onSubmit={(e) => { e.preventDefault(); openQuoteModal(); }} className="space-y-3">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[var(--color-umove-red)]" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[var(--color-umove-red)]" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[var(--color-umove-red)]" />
              <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[var(--color-umove-red)]">
                <option>Select Service...</option>
                <option>Container Sales</option>
                <option>Container Hire</option>
                <option>Self Storage</option>
                <option>Modifications</option>
                <option>Mining & Industrial</option>
              </select>
              <textarea placeholder="Tell us what you need..." rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[var(--color-umove-red)] resize-none" />
              <button type="submit" className="w-full bg-[var(--color-umove-red)] hover:bg-[var(--color-umove-red-light)] text-white font-bold py-4 uppercase text-sm tracking-wider transition-all hover:shadow-lg">
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
