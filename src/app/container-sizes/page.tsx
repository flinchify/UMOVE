import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/QuoteButton";

export const metadata: Metadata = {
  title: "Container Sizes | 10ft, 20ft & 40ft Shipping Containers Perth",
  description:
    "Compare 10ft, 20ft, and 40ft shipping container sizes with exact dimensions. All containers wind, water, and vermin-proof. U-Move Australia Perth. Call (08) 9459 8888.",
  alternates: { canonical: "https://u-move.com.au/container-sizes" },
};

const sizes = [
  { size: "10ft", ext: { l: "3.10m", w: "2.44m", h: "2.59m" }, int: { l: "2.98m", w: "2.35m", h: "2.38m" }, image: "/images/10ft-1024x1024.png", href: "/10ft-container", desc: "Compact and versatile. Ideal for small storage, garden sheds, or tight residential spaces." },
  { size: "20ft", ext: { l: "6.05m", w: "2.44m", h: "2.59m" }, int: { l: "5.90m", w: "2.35m", h: "2.38m" }, image: "/images/20ft-1024x1024.png", href: "/20ft-container", desc: "The most popular size. Perfect for household storage, small business, workshops, or construction." },
  { size: "40ft", ext: { l: "12.19m", w: "2.44m", h: "2.59m" }, int: { l: "12.01m", w: "2.35m", h: "2.38m" }, image: "/images/40ft-1024x1024.png", href: "/40ft-container", desc: "Maximum capacity. Best for large-scale storage, industrial use, or container conversion projects." },
];

export default function ContainerSizesPage() {
  return (
    <>
      <PageHero
        title="Container Sizes"
        subtitle="Choosing the right container size is easier than you think. We stock a full range for every need."
        image="/images/20ft-Standard-Tall.jpg"
        imageAlt="Shipping container sizes available at U-Move Perth"
        breadcrumbs={[{ label: "Container Sizes", href: "/container-sizes" }]}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600 leading-relaxed">All containers are wind, water, and vermin-proof, and fully lockable. Available for sale, hire, or storage.</p>
          </AnimatedSection>

          <div className="space-y-20">
            {sizes.map((c, i) => (
              <AnimatedSection key={c.size}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <Image src={c.image} alt={`${c.size} shipping container dimensions diagram`} width={500} height={500} className="mx-auto" />
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{c.size} Container</h2>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">{c.desc}</p>

                    <div className="mt-8 bg-[var(--color-umove-gray)] rounded-2xl p-6">
                      <h3 className="font-bold text-gray-900 mb-4">Dimensions</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">External (L x W x H)</div>
                          <div className="text-lg font-semibold text-gray-900">{c.ext.l} x {c.ext.w} x {c.ext.h}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Internal (L x W x H)</div>
                          <div className="text-lg font-semibold text-gray-900">{c.int.l} x {c.int.w} x {c.int.h}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                      <Link href={c.href} className="bg-[var(--color-umove-red)] text-white font-semibold px-6 py-3 rounded-none hover:bg-[var(--color-umove-red-light)] transition-all">View Details</Link>
                      <Link href="/contact" className="border-2 border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-none hover:border-[var(--color-umove-red)] hover:text-[var(--color-umove-red)] transition-all">Get a Quote</Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--color-umove-gray)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Specialty Containers</h2>
            <p className="mt-4 text-lg text-gray-600">Beyond standard sizes, we also stock:</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["High Cube (extra height)", "Refrigerated", "Insulated", "Side-Opening", "Open-Top", "Flat Rack", "Pallet-Wide", "Dangerous Goods"].map((type, i) => (
              <AnimatedSection key={type} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-5 shadow-sm flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--color-umove-red)] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="font-medium text-gray-900">{type}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-umove-red)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Not sure which size you need?</h2>
          <p className="mt-4 text-white/80 text-lg">Tell us what you&apos;re storing and we&apos;ll recommend the right container.</p>
          <div className="mt-8">
            <QuoteButton variant="white" className="px-8 py-4">Get a Free Quote</QuoteButton>
          </div>
        </div>
      </section>
    </>
  );
}
