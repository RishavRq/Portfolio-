"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center flex flex-col items-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 mb-4",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-6 bg-gold/60" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tighter text-ivory text-balance">
        {title}
      </h2>
    </motion.div>
  );
}
