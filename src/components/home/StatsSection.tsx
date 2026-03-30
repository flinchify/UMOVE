"use client";

import StatCounter from "@/components/StatCounter";

export default function StatsSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter end={25} suffix="+" label="Years Experience" />
          <StatCounter end={5000} suffix="+" label="Containers Delivered" />
          <StatCounter end={100} suffix="%" label="WA Coverage" />
          <StatCounter end={24} suffix="/7" label="Secure Facility" />
        </div>
      </div>
    </section>
  );
}
