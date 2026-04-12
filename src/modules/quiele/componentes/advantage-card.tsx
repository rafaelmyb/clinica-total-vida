"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  number: string;
  badge: string;
  title: string;
  exploreLabel: string;
  href?: string;
  className?: string;
};

export const AdvantageCard = ({
  number,
  badge,
  title,
  exploreLabel,
  href = "#contato",
  className = "",
}: Props) => {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className={`group relative flex min-h-[280px] flex-col overflow-hidden rounded-[2rem] border border-dra-taupe-deep/10 bg-dra-taupe/10 p-6 shadow-[var(--shadow-card)] sm:min-h-[320px] ${className}`}
      whileHover={reduce ? undefined : { scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full border border-dra-taupe-deep/20 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-dra-taupe-deep">
          {badge}
        </span>
        <span
          className="text-2xl font-light text-dra-rose-gold/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        >
          ↗
        </span>
      </div>
      <h3 className="relative z-10 mt-8 max-w-[85%] font-serif text-xl font-semibold text-dra-taupe-deep">
        {title}
      </h3>
      <span
        className="pointer-events-none absolute bottom-4 left-4 font-serif text-7xl font-extralight leading-none text-dra-taupe-deep/[0.12] sm:text-8xl"
        aria-hidden
      >
        {number}
      </span>
      <div className="mt-auto pt-6">
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full border border-dra-taupe-deep/25 bg-white/90 px-4 py-2 text-xs font-medium text-dra-taupe-deep transition-colors hover:border-dra-taupe-deep/50 hover:bg-white"
        >
          {exploreLabel}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-dra-taupe/30 text-sm">
            ◆
          </span>
        </Link>
      </div>
    </motion.article>
  );
};
