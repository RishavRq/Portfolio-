"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroSceneInner = dynamic(
  () => import("./HeroScene").then((mod) => mod.HeroScene),
  { ssr: false }
);

/**
 * Renders the Three.js particle universe only on the client, and only when
 * the user hasn't requested reduced motion. Falls back to a quiet static
 * gold glow gradient otherwise — same visual family, no JS cost.
 */
export function HeroSceneClient() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setShouldRender(!prefersReducedMotion);
  }, []);

  if (!shouldRender) {
    return (
      <div
        className="absolute inset-0 -z-10 bg-gold-glow"
        aria-hidden="true"
      />
    );
  }

  return <HeroSceneInner />;
}
