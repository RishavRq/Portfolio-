"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, ChevronDown } from "lucide-react";
import { HeroSceneClient } from "@/components/three/HeroSceneClient";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HERO, SITE } from "@/lib/content";

const headlineLetters = HERO.headline.split("");

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden section-padding"
    >
      <HeroSceneClient />

      {/* Vertical gold build-line — the page's signature thread, starts here */}
      <div
        className="absolute left-1/2 top-[78%] bottom-0 w-px bg-gradient-to-b from-gold/40 to-transparent -translate-x-1/2 hidden md:block"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-6 bg-gold/60" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-gold">
            {HERO.eyebrow}
          </span>
          <span className="h-px w-6 bg-gold/60" />
        </motion.div>

        <h1 className="font-display font-semibold text-[13vw] md:text-[6.5rem] leading-[0.95] tracking-tightest text-ivory flex flex-wrap justify-center">
          {headlineLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.035,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={letter === " " ? "w-3 md:w-5" : undefined}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-mono text-sm md:text-base text-gold tracking-wide"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-ivory-dim text-base md:text-lg max-w-xl text-balance leading-relaxed"
        >
          {HERO.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#projects" variant="primary" icon={<ArrowRight size={15} />}>
            View Projects
          </MagneticButton>
          <MagneticButton
            href={SITE.github}
            external
            icon={<Github size={15} />}
          >
            GitHub
          </MagneticButton>
          <MagneticButton href="#contact" icon={<Mail size={15} />}>
            Contact
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-ivory-faint"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-gold/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
