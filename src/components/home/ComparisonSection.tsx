"use client";

import AnimatedSection from "@/components/AnimatedSection";
import QuoteButton from "@/components/QuoteButton";

export default function ComparisonSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
            <span className="text-[var(--color-umove-red)] font-bold text-xs uppercase tracking-[0.3em]">Why U-Move</span>
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[var(--color-umove-navy)] uppercase tracking-tight">
            How We Compare in 2026
          </h2>
          <p className="mt-4 text-gray-500">U-Move Australia vs traditional self-storage facilities and other container providers in Perth. Data sourced from industry averages as of March 2026.</p>
        </AnimatedSection>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-[var(--color-umove-navy)]">
                <th className="text-left py-4 px-4 text-gray-500 font-medium">Feature</th>
                <th className="text-center py-4 px-4 bg-[var(--color-umove-red)]/5"><span className="font-display text-[var(--color-umove-red)] uppercase">U-Move Australia</span></th>
                <th className="text-center py-4 px-4 text-gray-500">Traditional Self-Storage</th>
                <th className="text-center py-4 px-4 text-gray-500">Other Container Providers</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Monthly cost (20ft equivalent)", umove: "From $110/mo", trad: "$250–$400/mo", other: "$120–$200/mo" },
                { feature: "Door-to-door delivery", umove: "✓ Included", trad: "✗ You transport", other: "Varies" },
                { feature: "24/7 secure facility", umove: "✓ Henderson WA", trad: "✓ Most facilities", other: "Varies" },
                { feature: "Container modifications", umove: "✓ In-house workshop", trad: "✗ Not available", other: "✗ Outsourced or N/A" },
                { feature: "Mining & industrial solutions", umove: "✓ Specialist", trad: "✗ Not available", other: "Limited" },
                { feature: "Wind/water/vermin proof", umove: "✓ All containers", trad: "Varies by unit", other: "✓ Most containers" },
                { feature: "Years in Perth", umove: "25+ years (est. 2000)", trad: "Varies", other: "Varies" },
                { feature: "Container sizes available", umove: "10ft, 20ft, 40ft + specialty", trad: "Fixed unit sizes", other: "20ft, 40ft typical" },
                { feature: "Pricing transparency", umove: "Published March 2026", trad: "Often quote-only", other: "Varies" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-gray-700 font-medium">{row.feature}</td>
                  <td className="py-3 px-4 text-center font-bold text-[var(--color-umove-navy)] bg-[var(--color-umove-red)]/5">{row.umove}</td>
                  <td className="py-3 px-4 text-center text-gray-500">{row.trad}</td>
                  <td className="py-3 px-4 text-center text-gray-500">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-xs text-gray-400 text-center">
          <p>Source: U-Move internal data and industry comparison, March 2026. Traditional self-storage pricing based on published rates from major Perth providers including Kennards Storage and National Storage. Container provider data based on market averages across WA.</p>
        </div>

        <div className="mt-8 text-center">
          <QuoteButton className="px-8 py-4">Get Our Best Price</QuoteButton>
        </div>
      </div>
    </section>
  );
}
