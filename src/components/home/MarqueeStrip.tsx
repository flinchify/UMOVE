"use client";

export default function MarqueeStrip() {
  const items = ["Wholesale Prices", "Fast Delivery", "Direct to the Public", "25+ Years Experience", "Perth & All of WA", "24/7 Secure Facility"];
  return (
    <div className="bg-[var(--color-umove-red)] py-3 overflow-hidden" role="marquee" aria-label="U-Move key benefits: wholesale prices, fast delivery, 25+ years experience">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-6 px-3">
            {items.map((text) => (
              <span key={`${i}-${text}`} className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-6" aria-hidden={i > 0 ? "true" : undefined}>
                {text}
                <span className="text-white/30 text-xs" aria-hidden="true">&#9733;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
