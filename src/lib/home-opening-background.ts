/**
 * Single wrapper for hero + journey: one gradient + one vignette over the
 * combined height (avoids a seam from painting the same radial twice).
 */
export const homeOpeningGroupClassName =
  "relative overflow-hidden border-b border-brand/10 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,#f3e9ec_0%,#faf8f7_45%,#f5f0f2_100%)]";

export const homeOpeningVignetteClassName =
  "pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_60%,rgba(92,26,46,0.06),transparent_50%)]";
