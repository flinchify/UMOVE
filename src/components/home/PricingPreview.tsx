"use client";

import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import QuoteButton from "@/components/QuoteButton";
import { getPricingVisibility } from "@/lib/pricing-store";

const allContainers = [
  { id: "20ft-std-new", name: "20ft Standard", image: "/images/20ft-Standard-Tall.jpg", newPrice: "From $3,200", usedPrice: "From $2,100", popular: false },
  { id: "20ft-hc-new", name: "20ft High Cube", image: "/images/IMG_2081-768x1024.jpg", newPrice: "From $3,800", usedPrice: "Request Quote", popular: true },
  { id: "40ft-hc-new", name: "40ft High Cube", image: "/images/IMG_7419-1024x768.jpg", newPrice: "From $6,200", usedPrice: "From $3,100", popular: false },
];

export default function PricingPreview() {
  const [containers, setContainers] = useState(allContainers);

  useEffect(() => {
    const updateVisibility = () => {
      const vis = getPricingVisibility();
      if (Object.keys(vis).length > 0) {
        setContainers(allContainers.filter(c => vis[c.id] !== false));
      } else {
        setContainers(allContainers);
      }
    };
    updateVisibility();
    window.addEventListener("pricing-updated", updateVisibility);
    return () => window.removeEventListener("pricing-updated", updateVisibility);
  }, []);

  if (containers.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-[var(--color-umove-cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
            <span className="text-[var(--color-umove-red)] font-bold text-xs uppercase tracking-[0.3em]">Latest offers</span>
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-[var(--color-umove-navy)] uppercase tracking-tight">
            Container Pricing
          </h2>
          <p className="mt-2 text-gray-500">Prices exclude GST & delivery. For current pricing, contact us.</p>
        </AnimatedSection>

        <div className={`grid gap-6 ${containers.length === 3 ? "md:grid-cols-3" : containers.length === 2 ? "md:grid-cols-2 max-w-3xl mx-auto" : "max-w-md mx-auto"}`}>
          {containers.map((c, i) => (
            <AnimatedSection key={c.id} delay={i * 0.1}>
              <div className={`relative bg-white rounded-2xl overflow-hidden card-hover ${c.popular ? "ring-2 ring-[var(--color-umove-red)]" : "border border-gray-200"}`}>
                {c.popular && (
                  <div className="absolute top-4 right-4 bg-[var(--color-umove-red)] text-white text-xs font-bold px-3 py-1 rounded-full z-10">Popular</div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <Image src={c.image} alt={`${c.name} shipping container for sale`} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-[var(--color-umove-navy)] uppercase">{c.name}</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Buy New</span>
                      <span className="font-bold text-[var(--color-umove-navy)]">{c.newPrice}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-500">Buy Used</span>
                      <span className="font-bold text-[var(--color-umove-navy)]">{c.usedPrice}</span>
                    </div>
                  </div>
                  <QuoteButton className="mt-6 w-full py-3">Get Best Price</QuoteButton>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
