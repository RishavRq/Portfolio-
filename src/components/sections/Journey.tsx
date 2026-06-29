"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TIMELINE } from "@/lib/content";
type GsapContext = ReturnType<typeof gsap.context>;
export function Journey() {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: GsapContext | undefined;

    (async () => {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.gsap;
      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current;
      const line = lineRef.current;
      if (!container || !line) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 70%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      });
    })();

    return () => ctx?.revert();
  }, []);

  return (
    <section id="journey" className="relative section-padding py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Journey" title="The Build Log" />

        <div ref={containerRef} className="relative">
          {/* Track (dim) */}
          <div className="absolute left-[7px] md:left-[15px] top-2 bottom-2 w-px bg-graphite-border" />
          {/* Progress line (gold, animated) — continuation of the hero's build-line */}
          <div
            ref={lineRef}
            className="absolute left-[7px] md:left-[15px] top-2 bottom-2 w-px bg-gold origin-top scale-y-0"
            style={{ transform: "scaleY(0)" }}
          />

          <div className="space-y-14">
            {TIMELINE.map((entry, i) => (
              <motion.div
                key={entry.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10 md:pl-14"
              >
                <span className="absolute left-0 top-1 w-3.5 h-3.5 md:w-[1.9rem] md:h-[1.9rem] rounded-full bg-graphite-elevated border border-gold/50 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                </span>

                <div className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-2">
                  {entry.year}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-medium text-ivory tracking-tight mb-2">
                  {entry.title}
                </h3>
                {entry.description && (
                  <p className="text-ivory-dim text-sm md:text-base leading-relaxed max-w-lg">
                    {entry.description}
                  </p>
                )}

                {entry.projects && (
                  <div className="mt-4 grid sm:grid-cols-2 gap-3 max-w-lg">
                    {entry.projects.map((p) => (
                      <div
                        key={p.name}
                        className="rounded-xl border border-graphite-border bg-graphite-surface p-4"
                      >
                        <div className="text-ivory font-medium text-sm">
                          {p.name}
                        </div>
                        <div className="text-ivory-faint text-xs mt-1">
                          {p.tag}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {entry.bullets && (
                  <ul className="mt-3 flex flex-wrap gap-2 max-w-lg">
                    {entry.bullets.map((b) => (
                      <li
                        key={b}
                        className="font-mono text-xs px-3 py-1.5 rounded-full border border-graphite-border text-ivory-dim"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
