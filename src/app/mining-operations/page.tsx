import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  title: "Mining Container Solutions Perth | On-Site Storage for Mining & Industrial",
  description:
    "U-Move provides purpose-built container solutions for mining and industrial operations in WA. Rigging storage, crib rooms, hydration stations, tool stores, dangerous goods containers. Call (08) 9459 8888.",
  alternates: { canonical: "https://u-move.com.au/mining-operations" },
};

const solutions = [
  { title: "Rigging Storage", image: "/images/rigging-container-scaled-1-768x1024.jpeg", alt: "Rigging storage container for mining", desc: "Secure and organise your lifting gear with heavy-duty rigging containers. Racks, hooks, and compartments keep slings, chains, shackles, and straps safe and ready. Forklift pockets and crane points for easy transport." },
  { title: "Crib Rooms", image: "/images/Crib-room-scaled-1-768x1024.jpeg", alt: "Container crib room modification for mining", desc: "Comfortable break spaces for up to 10 people. Features insulation, reverse-cycle air conditioning, stainless-steel kitchenette with hot/cold water, and energy-efficient lighting. Perfect for remote sites." },
  { title: "Hydration Stations", image: "/images/Hydration-Station-1024x768.jpeg", alt: "Container hydration station for mining workers", desc: "Combat heat stress with shaded, air-conditioned spaces for workers to cool down and rehydrate. Options include mains water or storage pods, ice machines, and seating." },
  { title: "Tool Stores", image: "/images/Storage-1024x768.jpg", alt: "40ft modified container tool store", desc: "40-foot modified containers with shelving, lighting, custom doors, and counters for tool check-in/out. Secure, weatherproof, and relocatable for mining, construction, and industrial worksites." },
  { title: "Dangerous Goods Containers", image: "/images/IMG_2064_2-768x1024.jpg", alt: "Dangerous goods shipping container", desc: "Purpose-built to safely store and transport hazardous materials such as chemicals, fuels, and flammable liquids. Robust steel construction with bunding and safety features." },
];

export default function MiningOperationsPage() {
  return (
    <>
      <PageHero
        title="Mining & Industrial Solutions"
        subtitle="Purpose-built container solutions designed for the demanding needs of mining, construction, and industrial operations across WA."
        image="/images/Mining_and_operations_cover_image-scaled-1-768x1024.jpg"
        imageAlt="U-Move mining and industrial container solutions Western Australia"
        breadcrumbs={[{ label: "Mining & Operations", href: "/mining-operations" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[var(--color-umove-red)]" />
              <span className="text-[var(--color-umove-red)] font-semibold text-sm uppercase tracking-[0.2em]">Mining & industrial</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built tough for tough worksites</h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              At U-Move Australia, we provide custom container modifications designed for the demanding needs of mining and industrial operations. With decades of experience supporting mining operations, project supply, shutdowns, and the oil & gas industry, we deliver durable, purpose-built solutions that meet strict site requirements and timelines.
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {solutions.map((sol, i) => (
              <AnimatedSection key={sol.title} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[direction:rtl] lg:*:[direction:ltr]' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <Image src={sol.image} alt={sol.alt} width={800} height={600} className="w-full h-auto object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{sol.title}</h3>
                    <p className="mt-4 text-gray-600 leading-relaxed">{sol.desc}</p>
                    <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-[var(--color-umove-red)] font-semibold hover:gap-3 transition-all">
                      Request a quote
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-umove-red)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Need containers for your mine site?</h2>
          <p className="mt-4 text-white/80 text-lg">We design, build, and deliver to remote WA sites. Tell us what you need.</p>
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
