"use client";

interface Props {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "outline" | "white";
}

function openQuoteModal() {
  window.dispatchEvent(new Event("open-quote-modal"));
}

export default function QuoteButton({ className = "", children, variant = "primary" }: Props) {
  const base = "inline-flex items-center justify-center font-bold uppercase text-sm tracking-wider transition-all";
  const variants = {
    primary: "bg-[var(--color-umove-red)] hover:bg-[var(--color-umove-red-light)] text-white hover:shadow-lg",
    outline: "border-2 border-white/30 text-white hover:bg-white/10",
    white: "bg-white text-[var(--color-umove-red)] hover:bg-gray-100",
  };

  return (
    <button onClick={openQuoteModal} className={`${base} ${variants[variant]} ${className}`}>
      {children || "Get a Free Quote"}
    </button>
  );
}
