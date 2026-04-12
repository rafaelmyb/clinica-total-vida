/** Shared Framer Motion presets (hero stagger + scroll sections). */

export const heroFadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * i,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export const reducedMotionHeroVariants = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
};

export const viewportOnceTight = { once: true, margin: "-80px" as const };

export const sectionFadeTransition = { duration: 0.5 };
