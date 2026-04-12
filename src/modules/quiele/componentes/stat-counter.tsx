"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Props = {
  value: number;
  suffix?: string;
  label: string;
  isDecimal?: boolean;
  /** Larger type + full-width rule under the number (stats + journey section). */
  variant?: "default" | "hero";
  className?: string;
};

const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

export const StatCounter = ({
  value,
  suffix = "",
  label,
  isDecimal,
  variant = "default",
  className = "",
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(() => (reduce ? value : 0));

  useEffect(() => {
    if (!inView || reduce) return;
    let frame: number;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = easeOutCubic(t);
      const v = isDecimal
        ? Math.round((value * eased) * 10) / 10
        : Math.round(value * eased);
      setDisplay(v);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, isDecimal, reduce]);

  const n = reduce ? value : display;
  const formatted = isDecimal ? n.toFixed(1) : n.toLocaleString("pt-BR");

  const isHero = variant === "hero";

  const numberClass = isHero
    ? "font-serif text-5xl font-semibold tabular-nums text-dra-taupe-deep sm:text-6xl"
    : "font-serif text-4xl font-semibold tabular-nums text-dra-taupe-deep sm:text-5xl";

  const lineClass = isHero
    ? "mt-3 h-px w-full bg-dra-taupe-deep/15"
    : "mt-3 h-px w-12 bg-dra-rose-gold/50";

  const labelClass = isHero
    ? "mt-4 text-sm leading-relaxed text-muted sm:text-base"
    : "mt-3 text-sm leading-relaxed text-muted";

  return (
    <div ref={ref} className={`min-w-0 ${className}`}>
      <p className={numberClass}>
        {formatted}
        {suffix}
      </p>
      <div className={lineClass} />
      <p className={labelClass}>{label}</p>
    </div>
  );
};
