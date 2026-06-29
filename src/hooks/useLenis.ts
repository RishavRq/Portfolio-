"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * Initializes Lenis smooth scrolling and keeps GSAP ScrollTrigger in sync.
 * Mounted once at the root layout level via <SmoothScrollProvider>.
 */
export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Drive Lenis with GSAP's ticker (single source of truth) once GSAP
    // is loaded, falling back to a plain rAF loop until then so scrolling
    // works immediately on mount.
    let usingGsapTicker = false;
    let rafId: number;
    function raf(time: number) {
      if (!usingGsapTicker) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
    }
    rafId = requestAnimationFrame(raf);

    let cleanupGsapSync: (() => void) | undefined;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const onScroll = () => ScrollTrigger.update();
      lenis.on("scroll", onScroll);

      const tickerCallback = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
      usingGsapTicker = true;
      cancelAnimationFrame(rafId);

      cleanupGsapSync = () => {
        lenis.off("scroll", onScroll);
        gsap.ticker.remove(tickerCallback);
      };
    })();

    return () => {
      cancelAnimationFrame(rafId);
      cleanupGsapSync?.();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
