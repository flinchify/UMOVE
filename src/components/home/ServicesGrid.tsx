"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Storage Containers", image: "/images/U-Move-Storage-Container-Outside-House.jpg", alt: "Self-storage container Perth", href: "/self-storage", desc: "Delivered to your door. Up to 50% cheaper than traditional storage." },
  { title: "Container Sales", image: "/images/Qualiity_containers_to_buy-scaled-1-768x1024.jpg", alt: "Containers for sale Perth", href: "/container-sales", desc: "New & used containers. WA's largest inventory." },
  { title: "Container Hire", image: "/images/unnamed-6-1024x768.jpg", alt: "Container hire Perth", href: "/container-hire", desc: "Flexible terms, competitive rates, fast delivery." },
  { title: "Custom Modifications", image: "/images/Modified-Containers-Perth-Transported-Lube-Rooms--1024x689.jpg", alt: "Modified containers Perth", href: "/modifications", desc: "Offices, workshops, cafes, homes — built in Henderson." },
  { title: "Mining & Industrial", image: "/images/Mining_and_operations_cover_image-scaled-1-768x1024.jpg", alt: "Mining containers WA", href: "/mining-operations", desc: "Crib rooms, tool stores, hydration stations, DG containers." },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
            <span className="text-[var(--color-umove-red)] font-bold text-xs uppercase tracking-[0.3em]">Our Services</span>
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-umove-navy)] uppercase tracking-tight">
            Shipping Container Solutions in Perth & WA
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            Six core services backed by 25+ years of experience. Affordable, flexible, and convenient solutions for every need.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.href} delay={i * 0.08}>
              <Link href={s.href} className="group block card-hover">
                <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={s.image} alt={s.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-umove-navy)]/80 via-[var(--color-umove-navy)]/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide">{s.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                    <div className="mt-3 flex items-center gap-2 text-[var(--color-umove-red)] font-bold text-sm group-hover:gap-3 transition-all">
                      Learn more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
