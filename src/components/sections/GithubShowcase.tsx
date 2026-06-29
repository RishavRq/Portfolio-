"use client";

import { motion } from "framer-motion";
import { Github, GitFork, Star, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SITE, GITHUB_REPOS_FALLBACK } from "@/lib/content";

/**
 * NOTE ON LIVE DATA:
 * This section currently renders static repo cards from
 * `GITHUB_REPOS_FALLBACK` in src/lib/content.ts — edit that array directly
 * with real repo names/descriptions as they're published.
 *
 * To switch to live data later: create an app/api/github/route.ts that
 * fetches `https://api.github.com/users/RishavRq/repos?sort=updated`
 * server-side (avoids exposing rate limits client-side), and replace the
 * `.map(GITHUB_REPOS_FALLBACK)` below with a fetch to that route inside a
 * Server Component — no other markup needs to change.
 */
export function GithubShowcase() {
  return (
    <section id="github" className="relative section-padding py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Open Source" title="On GitHub" />

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {GITHUB_REPOS_FALLBACK.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-graphite-border bg-graphite-surface p-6 hover:border-gold/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-4 text-ivory-faint">
                <Github size={15} />
                <span className="font-mono text-sm text-ivory">
                  {repo.name}
                </span>
              </div>
              <p className="text-ivory-dim text-sm leading-relaxed mb-5 min-h-[40px]">
                {repo.description}
              </p>
              <div className="flex items-center justify-between text-ivory-faint">
                <span className="font-mono text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gold/60" />
                  {repo.language}
                </span>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="flex items-center gap-1">
                    <Star size={12} /> —
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> —
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contribution-style visualization — ambient, not claiming specific data */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-graphite-border bg-graphite-surface p-6 md:p-8 mb-10"
        >
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ivory-faint">
              Contribution Rhythm
            </span>
            <span className="font-mono text-xs text-ivory-faint">
              github.com/{SITE.githubHandle}
            </span>
          </div>
          <ContributionGrid />
        </motion.div>

        <div className="flex justify-center">
          <MagneticButton href={SITE.github} external icon={<ArrowRight size={15} />}>
            View Full Profile
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

/**
 * Ambient grid pattern echoing a GitHub contribution graph's visual texture.
 * Deliberately not tied to real commit data — it's a style cue, not a claim.
 */
function ContributionGrid() {
  const weeks = 26;
  const days = 7;

  return (
    <div className="overflow-x-auto pb-2">
      <div
        className="grid gap-1 min-w-[480px]"
        style={{
          gridTemplateColumns: `repeat(${weeks}, minmax(0,1fr))`,
          gridTemplateRows: `repeat(${days}, minmax(0,1fr))`,
          gridAutoFlow: "column",
        }}
      >
        {Array.from({ length: weeks * days }).map((_, i) => {
          // Deterministic pseudo-pattern for visual rhythm only
          const intensity = (i * 7 + i * i * 3) % 11;
          const opacity =
            intensity < 5 ? 0.06 : intensity < 8 ? 0.25 : intensity < 10 ? 0.5 : 0.85;
          return (
            <div
              key={i}
              className="aspect-square rounded-[2px]"
              style={{ backgroundColor: `rgba(201, 162, 75, ${opacity})` }}
            />
          );
        })}
      </div>
    </div>
  );
}
