"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/content";

const STATUS_STYLES: Record<string, string> = {
  Active: "text-gold border-gold/40",
  Archived: "text-ivory-faint border-graphite-border",
  Concept: "text-ivory-dim border-graphite-border",
};

export function Projects() {
  return (
    <section id="projects" className="relative section-padding py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Projects" title="Things I've Built" />

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-graphite-border bg-graphite-surface/60 backdrop-blur-sm p-6 md:p-7 min-h-[260px] overflow-hidden transition-colors duration-300 hover:border-gold/40"
            >
              {/* Glassmorphism glow on hover */}
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gold/0 group-hover:bg-gold/10 blur-3xl transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-display text-xl md:text-2xl font-medium text-ivory tracking-tight">
                    {project.name}
                  </h3>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 mt-1"
                  >
                    <ArrowUpRight
                      size={18}
                      className="text-ivory-faint group-hover:text-gold transition-colors"
                    />
                  </motion.div>
                </div>
                <p className="text-ivory-dim text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 mt-6 flex items-center justify-between flex-wrap gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-graphite-border text-ivory-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.status && (
                  <span
                    className={`font-mono text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full border ${STATUS_STYLES[project.status]}`}
                  >
                    {project.status}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
