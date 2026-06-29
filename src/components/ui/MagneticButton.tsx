"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: ReactNode;
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "secondary",
  external = false,
  icon,
  className,
}: MagneticButtonProps) {
  const ref = useMagnetic<HTMLSpanElement>(0.25);

  const baseStyles =
    "group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-sm tracking-tight transition-colors duration-300 ease-out";

  const variantStyles =
    variant === "primary"
      ? "bg-gold text-void hover:bg-gold-bright"
      : "border border-graphite-border text-ivory hover:border-gold/50 hover:text-gold";

  const content = (
    <span
      ref={ref}
      className={cn(baseStyles, variantStyles, "transition-transform", className)}
      style={{ transitionProperty: "transform, background-color, color, border-color" }}
    >
      {children}
      {icon}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}
