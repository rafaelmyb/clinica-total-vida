"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  targetId: string;
  label?: string;
};

export const ScrollIndicator = ({ targetId, label = "Role para mais" }: Props) => {
  const reduce = useReducedMotion();

  const scrollTo = () => {
    const el = document.getElementById(targetId);
    el?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollTo}
      className="group inline-flex items-center gap-2 rounded-full bg-dra-taupe-deep px-4 py-2.5 text-xs font-medium uppercase tracking-wider text-canvas shadow-lg transition-shadow hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dra-taupe-deep"
      whileHover={reduce ? undefined : { y: -2 }}
      aria-label={`${label}, ir para a próxima seção`}
    >
      <span>{label}</span>
      <span
        className="inline-block transition-transform group-hover:translate-y-0.5"
        aria-hidden
      >
        ↓
      </span>
    </motion.button>
  );
};
