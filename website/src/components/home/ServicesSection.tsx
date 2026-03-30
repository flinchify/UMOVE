"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Self Storage",
    description: "We deliver a secure container to your door. Pack at your pace, then store on-site or at our 24/7 monitored Henderson facility. Up to 50% cheaper than traditional storage.",
    href: "/self-storage",
    image: "/images/U-Move-Storage-Container-Outside-House.jpg",
    imageAlt: "U-Move shipping container delivered to a Perth home for self-storage",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    ),
  },
  {
    title: "Container Sales",
    description: "One of WA's largest inventories of new and used shipping containers. 10ft, 20ft, and 40ft sizes available, including high cube, refrigerated, insulated, and specialty units.",
    href: "/container-sales",
    image: "/images/Qualiity_containers_to_buy-scaled-1-768x1024.jpg",
    imageAlt: "Quality new and used shipping containers for sale at U-Move Perth",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
    ),
  },
  {
    title: "Container Hire",
    description: "Flexible short and long-term container hire with competitive rates. Choose from 10ft, 20ft, 40ft and high-cube containers. Fast delivery across Perth and beyond.",
    href: "/container-hire",
    image: "/images/unnamed-6-1024x768.jpg",
    imageAlt: "Shipping container available for hire from U-Move Perth",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: "Custom Modifications",
    description: "Our Henderson workshop transforms standard containers into fully functional spaces. Site offices, workshops, ablution blocks, cafes, homes, and more — built to your exact specs.",
    href: "/modifications",
    image: "/images/Modified-Containers-Perth-Transported-Lube-Rooms--1024x689.jpg",
    imageAlt: "Custom modified shipping container by U-Move Perth for commercial use",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    ),
  },
  {
    title: "Mining & Industrial",
    description: "Purpose-built containers for mining operations. Rigging storage, crib rooms with AC, hydration stations, tool stores, and dangerous goods containers. Built for tough worksites.",
    href: "/mining-operations",
    image: "/images/Mining_and_operations_cover_image-scaled-1-768x1024.jpg",
    imageAlt: "U-Move mining and industrial container solutions for WA worksites",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
  },
  {
    title: "Removals",
    description: "Container-based moving made easy. We deliver, you pack, and we transport or store. Trusted by Perth families for over 25 years. A smarter way to move house.",
    href: "/removals",
    image: "/images/Craig-0816-018-1024x768.jpg",
    imageAlt: "U-Move container delivery truck for removals in Perth",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-umove-gray)]" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We specialise in six core services across Perth and greater WA. With over 25 years of industry experience, we deliver affordable, flexible, and convenient container solutions for every need.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.href} {...service} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
