"use client";

import { useRef, useEffect } from "react";

/**
 * Gives an element a subtle magnetic pull toward the cursor on hover.
 * Returns a ref to attach to the target element.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    function handleMouseMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el!.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    }

    function handleMouseLeave() {
      el!.style.transform = "translate(0px, 0px)";
    }

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
}
