"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let isHovering = false;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (dot.current) {
        dot.current.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(${isHovering ? 1.5 : 1})`;
        ring.current.style.borderColor = isHovering ? 'var(--color-umove-red)' : 'rgba(156, 24, 11, 0.4)';
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    requestAnimationFrame(animate);

    const interactiveEls = document.querySelectorAll("a, button, [role='button'], input, select, textarea");
    const enter = () => { isHovering = true; };
    const leave = () => { isHovering = false; };
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dot} className="fixed top-0 left-0 w-2 h-2 bg-[var(--color-umove-red)] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block" />
      <div ref={ring} className="fixed top-0 left-0 w-10 h-10 border-2 border-[var(--color-umove-red)]/40 rounded-full pointer-events-none z-[9998] transition-[border-color] duration-300 hidden lg:block" />
    </>
  );
}
