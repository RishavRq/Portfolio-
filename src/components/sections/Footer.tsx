"use client";

import { ArrowUp } from "lucide-react";
import { SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative section-padding py-10 border-t border-graphite-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <p className="font-mono text-xs text-ivory-faint">
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <a
          href="#hero"
          className="flex items-center gap-1.5 font-mono text-xs text-ivory-faint hover:text-gold transition-colors"
        >
          Back to top
          <ArrowUp size={12} />
        </a>
      </div>
    </footer>
  );
}
