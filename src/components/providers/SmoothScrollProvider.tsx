"use client";

import { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { useLenis } from "@/hooks/useLenis";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useLenis();
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
