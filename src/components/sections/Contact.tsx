"use client";

import { motion } from "framer-motion";
import { Mail, Github, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/content";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: `github.com/${SITE.githubHandle}`,
    href: SITE.github,
    icon: Github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative section-padding py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something"
          align="center"
        />

        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {CONTACT_METHODS.map((method, i) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-graphite-border bg-graphite-surface p-6 hover:border-gold/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-full bg-graphite-elevated border border-graphite-border group-hover:border-gold/40 transition-colors">
                    <Icon size={17} className="text-gold" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-ivory-faint mb-1">
                      {method.label}
                    </div>
                    <div className="text-ivory text-sm font-medium">
                      {method.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-ivory-faint group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
