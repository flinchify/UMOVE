"use client";

import StatCounter from "@/components/StatCounter";

export default function StatsSection() {
  return (
    <section className="py-16 bg-[var(--color-umove-navy)] container-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter end={25} suffix="+" label="Years Experience" />
          <StatCounter end={5000} suffix="+" label="Containers Delivered" />
          <StatCounter end={100} suffix="%" label="WA Coverage" />
          <StatCounter end={24} suffix="/7" label="Secure Facility" />
        </div>
        <p className="text-center text-white/30 text-[10px] mt-6 uppercase tracking-wider">
          Based on U-Move Australia internal records, 2000–2026. Henderson WA facility operational data.
        </p>
      </div>
    </section>
  );
}
