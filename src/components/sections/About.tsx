"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Workflow,
  Code2,
  Rocket,
  Lightbulb,
  Cpu,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT } from "@/lib/content";

const ICONS = [Brain, Workflow, Code2, Rocket, Lightbulb, Cpu];

export function About() {
  return (
    <section id="about" className="relative section-padding py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="About" title={ABOUT.title} />

        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-20">
          <div className="space-y-5">
            {ABOUT.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-ivory-dim text-base md:text-lg leading-relaxed text-balance"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {ABOUT.interests.map((interest, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col gap-3 p-5 rounded-2xl bg-graphite-surface border border-graphite-border hover:border-gold/40 transition-colors duration-300"
                >
                  <Icon
                    size={18}
                    className="text-gold/80 group-hover:text-gold transition-colors"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm font-medium text-ivory leading-snug">
                    {interest}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
