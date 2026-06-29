"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILLS } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="relative section-padding py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Skills" title="What's In The Toolkit" />

        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="rounded-2xl border border-graphite-border bg-graphite-surface p-6 md:p-7"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gold mb-6">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.45,
                      delay: groupIndex * 0.1 + i * 0.05,
                    }}
                    className="flex items-center gap-3"
                  >
                    <span className="relative h-1.5 w-1.5 rounded-full bg-gold/70 shrink-0" />
                    <span className="text-ivory text-sm md:text-base">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
