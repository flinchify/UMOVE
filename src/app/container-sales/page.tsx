import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  title: "Shipping Containers for Sale Perth | New & Used Sea Containers",
  description:
    "Buy new and used shipping containers in Perth from U-Move Australia. 10ft, 20ft, 40ft sizes. Standard, high cube, refrigerated, insulated. One of WA's largest inventories. Fast delivery. Call (08) 9459 8888.",
  alternates: { canonical: "https://u-move.com.au/container-sales" },
};

const containerTypes = [
  { name: "Standard Containers", desc: "General purpose, wind/water/vermin-proof. Available in 10ft, 20ft, and 40ft." },
  { name: "High Cube Containers", desc: "Extra vertical space — 2.89m internal height vs 2.38m standard. Ideal for tall items or conversion projects." },
  { name: "Refrigerated Containers", desc: "Temperature-controlled storage for food, pharmaceuticals, or temperature-sensitive goods." },
  { name: "Insulated Containers", desc: "Thermal protection without active cooling. Great for wine storage, workshops, or climate-sensitive items." },
  { name: "Side-Opening Containers", desc: "Full side access for wide loads or easy forklift entry. Perfect for workshops and retail pop-ups." },
  { name: "Dangerous Goods Containers", desc: "Purpose-built for chemicals, fuels, and flammable liquids with safety features to reduce spill and ignition risks." },
];

export default function ContainerSalesPage() {
  return (
    <>
      <PageHero
        title="Containers for Sale"
        subtitle="One of WA's largest inventories. New and used shipping containers in every size, delivered to your door."
        image="/images/Qualiity_containers_to_buy-scaled-1-768x1024.jpg"
        imageAlt="Quality new and used shipping containers for sale at U-Move Perth"
        breadcrumbs={[{ label: "Shipping Containers", href: "/shipping-containers" }, { label: "Container Sales", href: "/container-sales" }]}
      />

      {/* Answer first */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[var(--color-umove-red)]" />
                <span className="text-[var(--color-umove-red)] font-semibold text-sm uppercase tracking-[0.2em]">Container sales</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                New & used sea containers for sale in Perth
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Looking to buy a shipping container in Perth? U-Move has one of the largest container inventories in WA, with new and second-hand containers available for immediate purchase and delivery.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Whether you need a container for storage, transport, a workshop, or a custom conversion project, we have the right size and type at a competitive price. All containers are wind, water, and vermin-proof with heavy-duty lockboxes.
              </p>

              <h3 className="mt-8 text-xl font-bold text-gray-900">Why buy from U-Move?</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Full ownership and flexibility — no ongoing hire costs",
                  "Modify and customise for any purpose",
                  "Wide range: standard, high-cube, refrigerated, insulated, and more",
                  "New and budget-friendly used options",
                  "Fast delivery across Perth metro and beyond",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-[var(--color-umove-red)] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/Various-20ft-New-Build-Containers-min.jpg"
                    alt="Row of new 20ft shipping containers available for purchase at U-Move Perth"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/Used-40ft-scaled-1-1024x768.jpeg"
                      alt="Used 40ft shipping container for sale"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/images/Easy-Open-Door-Handle-Close.jpg"
                      alt="Shipping container security door handle close-up"
                      width={400}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Container types */}
      <section className="py-16 md:py-24 bg-[var(--color-umove-gray)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Container Types Available</h2>
            <p className="mt-4 text-lg text-gray-600">We stock specialty containers for every need.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {containerTypes.map((type, i) => (
              <AnimatedSection key={type.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <h3 className="text-lg font-bold text-gray-900">{type.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{type.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Container Sizes</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { size: "10ft", ext: "3.10m x 2.44m x 2.59m", int: "2.98m x 2.35m x 2.38m", image: "/images/10ft-1024x1024.png", href: "/10ft-container" },
              { size: "20ft", ext: "6.05m x 2.44m x 2.59m", int: "5.90m x 2.35m x 2.38m", image: "/images/20ft-1024x1024.png", href: "/20ft-container" },
              { size: "40ft", ext: "12.19m x 2.44m x 2.59m", int: "12.01m x 2.35m x 2.38m", image: "/images/40ft-1024x1024.png", href: "/40ft-container" },
            ].map((c, i) => (
              <AnimatedSection key={c.size} delay={i * 0.1}>
                <Link href={c.href} className="group block bg-[var(--color-umove-gray)] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 text-center">
                  <Image src={c.image} alt={`${c.size} shipping container dimensions`} width={300} height={300} className="mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[var(--color-umove-red)] transition-colors">{c.size} Container</h3>
                  <div className="mt-3 text-sm text-gray-500">External: {c.ext}</div>
                  <div className="text-sm text-gray-500">Internal: {c.int}</div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-umove-red)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to buy a container?</h2>
          <p className="mt-4 text-white/80 text-lg">Get a competitive quote on new or used containers, delivered anywhere in WA.</p>
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
