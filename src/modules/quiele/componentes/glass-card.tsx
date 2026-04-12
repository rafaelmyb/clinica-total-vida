"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  label?: string;
  title: string;
  body?: string;
  metric?: string;
  className?: string;
};

export const GlassCard = ({
  label,
  title,
  body,
  metric,
  className = "",
}: Props) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`rounded-3xl border border-white/60 bg-white/70 p-5 shadow-[var(--shadow-card)] backdrop-blur-md sm:p-6 ${className}`}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {label ? (
        <p className="text-xs font-medium uppercase tracking-wide text-muted">{label}</p>
      ) : null}
      <p className="mt-1 font-semibold text-ink">{title}</p>
      {body ? <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p> : null}
      {metric ? (
        <p className="mt-4 font-serif text-4xl font-semibold text-dra-taupe-deep">{metric}</p>
      ) : null}
    </motion.div>
  );
};
