import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Container Modifications Perth | Shipping Container Fitouts",
  description:
    "U-Move specialises in custom shipping container modifications in Perth. Site offices, workshops, ablution blocks, cafes, container homes, mining containers. In-house Henderson workshop. Call (08) 9459 8888.",
  alternates: { canonical: "https://u-move.com.au/modifications" },
};

const projects = [
  { title: "Site Offices", image: "/images/Mods-3568-1024x768.jpg", alt: "Modified shipping container site office by U-Move Perth", desc: "Fully fitted offices with power, lighting, insulation, AC, and networking." },
  { title: "Workshops", image: "/images/Work-Shop-1024x768.jpg", alt: "U-Move container workshop modification Henderson", desc: "Heavy-duty workshops with workbenches, tool storage, ventilation, and power." },
  { title: "Ablution Blocks", image: "/images/20ft-Aublution-0011-1024x768.jpg", alt: "20ft ablution block container modification", desc: "Plumbed toilet and shower facilities for construction and mining sites." },
  { title: "Lube Rooms", image: "/images/Modified-Containers-Perth-Transported-Lube-Rooms--1024x689.jpg", alt: "Modified container lube room for mining operations", desc: "Fluid storage and dispensing rooms built to strict safety standards." },
  { title: "Container Cafes", image: "/images/shipping-container-cafe-designs.jpg", alt: "Shipping container cafe design", desc: "Fully fitted food and beverage spaces for markets, events, and permanent locations." },
  { title: "Container Homes", image: "/images/Black-Box-Shipping-Container-Home-exterior-1024x572.jpeg", alt: "Shipping container home exterior", desc: "Residential conversions with full insulation, plumbing, electrical, and finishes." },
  { title: "Retail & Pop-ups", image: "/images/conversions-tailored-to-your-business-1024x768.jpg", alt: "Container conversion for business use", desc: "Eye-catching retail spaces, showrooms, and brand activation units." },
  { title: "Hydration Stations", image: "/images/Hydration-Station-1024x768.jpeg", alt: "Container hydration station for mining workers", desc: "Air-conditioned spaces for workers to cool down and rehydrate on-site." },
];

export default function ModificationsPage() {
  return (
    <>
      <PageHero
        title="Custom Modifications"
        subtitle="Our Henderson workshop transforms standard containers into fully functional spaces — built to your exact specifications."
        image="/images/July-14-008-Inside-1024x768.jpg"
        imageAlt="Inside a modified shipping container with custom interior by U-Move Perth"
        breadcrumbs={[{ label: "Shipping Containers", href: "/shipping-containers" }, { label: "Modifications", href: "/modifications" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[var(--color-umove-red)]" />
                <span className="text-[var(--color-umove-red)] font-semibold text-sm uppercase tracking-[0.2em]">In-house workshop</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Custom-built containers to suit your needs
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                At U-Move Australia, we specialise in high-quality, custom shipping container modifications for residential, commercial, industrial, and mining use. With over two decades of experience, our Perth-based team transforms standard containers into fully functional spaces tailored to your exact requirements.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We are highly experienced in supporting mining operations, project supply, shutdowns, and the oil & gas industry — delivering durable, purpose-built solutions that meet strict site requirements and timelines.
              </p>
              <h3 className="mt-8 text-lg font-bold text-gray-900">What we can install:</h3>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {["Power & lighting", "Air conditioning", "Insulation", "Windows & doors", "Shelving & racking", "Plumbing", "Kitchenettes", "Workbenches", "Security systems", "Custom paint"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[var(--color-umove-red)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Mods-3568-1024x768.jpg"
                  alt="Modified shipping container by U-Move Perth"
                  width={1024}
                  height={768}
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects gallery */}
      <section className="py-16 md:py-24 bg-[var(--color-umove-gray)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Modification Projects</h2>
            <p className="mt-4 text-lg text-gray-600">From offices to homes — we build it all.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.06}>
                <div className="group relative rounded-2xl overflow-hidden h-72 shadow-sm hover:shadow-xl transition-all duration-500">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    <p className="text-white/70 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-umove-red)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Have a custom container project?</h2>
          <p className="mt-4 text-white/80 text-lg">Tell us what you need — we&apos;ll design and build it at our Henderson workshop.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[var(--color-umove-red)] font-bold px-8 py-4 rounded-none hover:bg-gray-100 transition-all">
              Get a Free Quote
            </Link>
            <a href="tel:0894598888" className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-none hover:bg-white/10 transition-all">
              (08) 9459 8888
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
