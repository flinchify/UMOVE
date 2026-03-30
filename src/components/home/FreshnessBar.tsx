export default function FreshnessBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-2">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400">
        <div className="flex items-center gap-4">
          <span>Published by <strong className="text-gray-600">U-Move Australia</strong></span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">Last updated: <strong className="text-gray-600">30 March 2026</strong></span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">Reviewed by: <strong className="text-gray-600">U-Move Operations Team, Henderson WA</strong></span>
        </div>
        <span>Prices valid as of March 2026. All prices exclude GST &amp; delivery.</span>
      </div>
    </div>
  );
}
