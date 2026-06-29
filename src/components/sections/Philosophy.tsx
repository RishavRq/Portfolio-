"use client";

import { motion } from "framer-motion";
import { PHILOSOPHY } from "@/lib/content";

export function Philosophy() {
  return (
    <section className="relative section-padding py-32 md:py-44 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gold-glow opacity-60"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-3xl text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-2xl md:text-4xl font-medium tracking-tight text-ivory leading-tight text-balance"
        >
          &ldquo;{PHILOSOPHY.quote}&rdquo;
        </motion.blockquote>

        <div className="mt-12 flex items-center justify-center gap-4 md:gap-7 flex-wrap">
          {PHILOSOPHY.words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              className="font-mono text-sm md:text-base uppercase tracking-[0.15em] text-gold"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
