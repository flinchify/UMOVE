import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  title: "Container Hire Perth | Short & Long Term Shipping Container Rental",
  description:
    "Hire shipping containers in Perth with flexible terms. 10ft, 20ft, 40ft containers for short or long-term rental. Competitive rates, fast delivery. U-Move Australia. Call (08) 9459 8888.",
  alternates: { canonical: "https://u-move.com.au/container-hire" },
};

export default function ContainerHirePage() {
  return (
    <>
      <PageHero
        title="Container Hire"
        subtitle="Flexible short and long-term container rental in Perth. No upfront purchase cost, competitive rates, fast delivery."
        image="/images/unnamed-6-1024x768.jpg"
        imageAlt="Shipping container available for hire from U-Move Perth"
        breadcrumbs={[{ label: "Shipping Containers", href: "/shipping-containers" }, { label: "Container Hire", href: "/container-hire" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[var(--color-umove-red)]" />
                <span className="text-[var(--color-umove-red)] font-semibold text-sm uppercase tracking-[0.2em]">Container hire</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Affordable container hire in Perth
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Need a container without the upfront cost of buying? U-Move offers affordable container hire in Perth with flexible terms to suit your needs. Whether it&apos;s for moving house, a temporary worksite, or extra storage, our hire service makes it easy.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Choose from 10ft, 20ft, 40ft and high-cube containers, available for short or long-term hire. All containers are wind, water, and vermin-proof, and fully lockable.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "From 1 week", desc: "Minimum hire period" },
                  { label: "All sizes", desc: "10ft, 20ft, 40ft" },
                  { label: "Fast delivery", desc: "Across Perth & WA" },
                  { label: "No lock-in", desc: "Flexible terms" },
                ].map((item) => (
                  <div key={item.label} className="bg-[var(--color-umove-gray)] rounded-xl p-4">
                    <div className="font-bold text-gray-900">{item.label}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/Mods-3566-1024x768.jpg"
                  alt="Shipping container available for hire in Perth"
                  width={1024}
                  height={768}
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* When to hire */}
      <section className="py-16 md:py-24 bg-[var(--color-umove-gray)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">When to Hire a Container</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Moving House", desc: "Pack at your pace before the move. No rush, no multiple trips to a storage unit." },
              { title: "Construction Sites", desc: "Secure on-site storage for tools, materials, and equipment during your build." },
              { title: "Events & Pop-ups", desc: "Temporary container spaces for markets, festivals, and retail pop-ups." },
              { title: "Renovations", desc: "Store furniture and belongings safely while your home is being renovated." },
              { title: "Business Overflow", desc: "Extra warehouse space without the commitment of a long lease." },
              { title: "Seasonal Stock", desc: "Flexible storage that scales with your business demands throughout the year." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-umove-red)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Need a container on hire?</h2>
          <p className="mt-4 text-white/80 text-lg">Competitive rates with flexible terms. Get a quote today.</p>
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
