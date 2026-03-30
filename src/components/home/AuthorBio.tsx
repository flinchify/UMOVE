import AnimatedSection from "@/components/AnimatedSection";

export default function AuthorBio() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-start gap-6 bg-gray-50 rounded-2xl p-6 md:p-8">
            <div className="w-16 h-16 rounded-full bg-[var(--color-umove-navy)] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xl">UM</span>
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-bold text-[var(--color-umove-navy)]">U-Move Australia Operations Team</h3>
                <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-full">Verified Business</span>
              </div>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                This page is written and maintained by the U-Move Australia operations team based at 836 Cockburn Road, Henderson WA 6166. 
                U-Move has been supplying, modifying, and delivering shipping containers across Western Australia since 2000. 
                Our team has over 25 years of combined experience in container logistics, modifications, and self-storage solutions. 
                All pricing, specifications, and service information on this page is reviewed monthly and was last verified on 30 March 2026.
              </p>
              <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                <span>ABN registered</span>
                <span>|</span>
                <span>Est. 2000</span>
                <span>|</span>
                <span>Henderson, WA</span>
                <span>|</span>
                <span>(08) 9459 8888</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
