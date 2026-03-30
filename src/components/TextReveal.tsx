"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  scrub?: boolean;
}

export default function TextReveal({ children, className = "", tag: Tag = "h2", delay = 0, scrub = false }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const words = children.split(" ");
    ref.current.innerHTML = words
      .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full">${word}</span></span>`)
      .join(" ");

    const spans = ref.current.querySelectorAll("span > span");

    if (scrub) {
      gsap.to(spans, {
        y: 0,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          end: "top 40%",
          scrub: 1,
        },
      });
    } else {
      gsap.to(spans, {
        y: 0,
        duration: 1,
        stagger: 0.04,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }
  }, [children, delay, scrub]);

  return <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>{children}</Tag>;
}
