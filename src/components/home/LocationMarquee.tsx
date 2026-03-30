"use client";

export default function LocationMarquee() {
  const locations = ["Henderson", "Fremantle", "Rockingham", "Mandurah", "Joondalup", "Midland", "Armadale", "Kalgoorlie", "Geraldton", "Albany", "Bunbury", "Karratha", "Port Hedland", "Broome", "Western Australia"];
  return (
    <div className="bg-[var(--color-umove-navy)] py-4 overflow-hidden border-y border-white/10">
      <div className="animate-marquee-slow flex whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4">
            {locations.map(loc => (
              <span key={`${i}-${loc}`} className="text-white/60 font-bold text-sm uppercase tracking-wider flex items-center gap-8">
                {loc}
                <span className="text-white/20">●</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
