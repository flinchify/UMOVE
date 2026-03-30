"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

const projects = [
  { title: "Custom Workshop", subtitle: "40ft modified", image: "/images/Work-Shop-1024x768.jpg", alt: "Container workshop modification" },
  { title: "Mining Crib Room", subtitle: "20ft insulated + AC", image: "/images/Crib-room-scaled-1-768x1024.jpeg", alt: "Container crib room for mining" },
  { title: "Lube Room", subtitle: "Modified for oil & gas", image: "/images/Modified-Containers-Perth-Transported-Lube-Rooms--1024x689.jpg", alt: "Container lube room modification" },
  { title: "Container Cafe", subtitle: "Hospitality conversion", image: "/images/shipping-container-cafe-designs.jpg", alt: "Shipping container cafe design" },
];

export default function ProjectsGallery() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-umove-cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
            <span className="text-[var(--color-umove-red)] font-bold text-xs uppercase tracking-[0.3em]">Our Projects</span>
            <div className="h-[2px] w-12 bg-[var(--color-umove-red)]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-umove-navy)] uppercase tracking-tight">
            Container Modification Projects
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden h-80 card-hover cursor-pointer">
                <Image src={p.image} alt={p.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-umove-navy)] via-[var(--color-umove-navy)]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-[var(--color-umove-red)] text-xs font-bold uppercase tracking-wider mb-1">{p.subtitle}</div>
                  <h3 className="text-white font-bold text-xl uppercase">{p.title}</h3>
                  <div className="mt-2 h-0.5 w-0 group-hover:w-12 bg-[var(--color-umove-red)] transition-all duration-500" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/modifications" className="inline-flex items-center gap-2 bg-[var(--color-umove-red)] text-white font-bold px-8 py-4 uppercase text-sm tracking-wider btn-fill hover:shadow-lg transition-shadow">
            View all modifications
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
