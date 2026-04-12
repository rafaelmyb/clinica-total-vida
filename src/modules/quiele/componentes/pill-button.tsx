"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "outline" | "solid";
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export const PillButton = ({
  href,
  children,
  variant = "outline",
  className = "",
  ...linkProps
}: Props) => {
  const reduce = useReducedMotion();

  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dra-taupe-deep";

  const styles =
    variant === "outline"
      ? "border border-dra-taupe-deep/40 bg-transparent text-dra-taupe-deep hover:bg-dra-taupe-deep hover:text-canvas"
      : "border border-dra-taupe-deep bg-dra-taupe-deep text-canvas hover:bg-dra-taupe-deep/90";

  return (
    <motion.span
      className="inline-flex"
      whileHover={reduce ? undefined : { scale: 1.03 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
    >
      <Link href={href} className={`${base} ${styles} ${className}`} {...linkProps}>
        {children}
      </Link>
    </motion.span>
  );
};
