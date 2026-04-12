"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Step = { id: string; label: string };

type Props = {
  steps: readonly Step[];
  className?: string;
};

const VB = 400;

/**
 * Circles share one common point (anchor) at the top-right; centers sit along
 * the ray toward bottom-left — same geometry as the MYDNA reference (nested
 * arcs growing from a single origin).
 */
const ANCHOR = { x: 312, y: 76 };
/** Unit vector from anchor toward bottom-left (direction of growth). */
const DIR = { x: -1 / Math.SQRT2, y: 1 / Math.SQRT2 };

/** Increasing radii = visually larger rings expanding from the anchor. */
const RADII = [34, 56, 80, 104, 130, 156] as const;

/** Uniform stroke: dra-taupe-deep — same visibility on every ring. */
const RING_STROKE = "rgb(143 122 99 / 0.72)";
const RING_STROKE_WIDTH = 1.25;

type RingDef = { cx: number; cy: number; r: number };

function ringsThroughAnchor(): RingDef[] {
  return RADII.map((r) => ({
    cx: ANCHOR.x + r * DIR.x,
    cy: ANCHOR.y + r * DIR.y,
    r,
  }));
}

/** Angle (from ring center) to the anchor — all circles pass through ANCHOR. */
function angleToAnchor(ring: RingDef): number {
  return Math.atan2(ANCHOR.y - ring.cy, ANCHOR.x - ring.cx);
}

type Node = {
  step: Step;
  index: number;
  x: number;
  y: number;
};

/**
 * Places step 0 at the anchor; others sweep clockwise along successive rings
 * (larger index → larger ring + angle offset) so labels follow the reference path.
 */
function buildNodes(steps: readonly Step[], rings: RingDef[]): Node[] {
  const n = steps.length;

  return steps.map((step, index) => {
    if (index === 0) {
      return { step, index, x: ANCHOR.x, y: ANCHOR.y };
    }

    const ringIdx = Math.min(index, rings.length - 1);
    const ring = rings[ringIdx];
    const base = angleToAnchor(ring);
    /** Sweep along the visible arc (away from overlap), ~⅔ of π spread across steps */
    const sweep = (index / Math.max(n - 1, 1)) * 1.15 * Math.PI;
    const phi = base + sweep * 0.95;
    const x = ring.cx + ring.r * Math.cos(phi);
    const y = ring.cy + ring.r * Math.sin(phi);
    return { step, index, x, y };
  });
}

export const JourneyGraphic = ({ steps, className = "" }: Props) => {
  const reduce = useReducedMotion();
  const filterId = useId().replace(/:/g, "");
  const rootRef = useRef<HTMLDivElement>(null);
  const graphicInView = useInView(rootRef, { once: true, margin: "-10% 0px" });
  const [finePointer, setFinePointer] = useState(false);
  const [narrowScreen, setNarrowScreen] = useState(false);

  useEffect(() => {
    const mqFine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const mqNarrow = window.matchMedia("(max-width: 639px)");
    const syncFine = () => setFinePointer(mqFine.matches);
    const syncNarrow = () => setNarrowScreen(mqNarrow.matches);
    syncFine();
    syncNarrow();
    mqFine.addEventListener("change", syncFine);
    mqNarrow.addEventListener("change", syncNarrow);
    return () => {
      mqFine.removeEventListener("change", syncFine);
      mqNarrow.removeEventListener("change", syncNarrow);
    };
  }, []);

  const rings = ringsThroughAnchor();
  const nodes = buildNodes(steps, rings);

  const ringStrokeW = narrowScreen ? 1.65 : RING_STROKE_WIDTH;
  const showGraphicSvg = reduce || graphicInView;
  const allowDrift = Boolean(finePointer && !reduce);

  const svgGraphic = (
    <svg
      viewBox={`0 0 ${VB} ${VB}`}
      className="absolute inset-0 block h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <filter
          id={`quiele-node-glow-${filterId}`}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="2"
            result="blur"
          />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g
        style={{
          opacity: showGraphicSvg ? 1 : 0,
          transition: reduce ? undefined : "opacity 0.45s ease",
        }}
      >
        {rings.map((ring) => (
          <circle
            key={`ring-${ring.r}`}
            cx={ring.cx}
            cy={ring.cy}
            r={ring.r}
            fill="none"
            stroke={RING_STROKE}
            strokeWidth={ringStrokeW}
            vectorEffect="nonScalingStroke"
          />
        ))}
        {nodes.map(({ x, y, index }) => (
          <g key={`dot-${index}`}>
            {index === 0 ? (
              <circle
                cx={x}
                cy={y}
                r={16}
                fill="none"
                stroke="rgb(201 160 136 / 0.5)"
                strokeWidth="2"
                filter={`url(#quiele-node-glow-${filterId})`}
              />
            ) : null}
            <circle
              cx={x}
              cy={y}
              r={index === 0 ? 5.5 : 4}
              fill={
                index === 0 ? "rgb(201 160 136)" : "rgb(143 122 99 / 0.88)"
              }
            />
          </g>
        ))}
      </g>
    </svg>
  );

  const labels = (
    <ul className="pointer-events-none absolute inset-0 m-0 list-none p-0">
      {nodes.map(({ step, index, x, y }) => {
        let px: number;
        let py: number;
        if (index === 0) {
          /** Anchor step: label sits above-left of the common tangent point (reference). */
          px = (ANCHOR.x - 20) / VB;
          py = (ANCHOR.y - 26) / VB;
        } else {
          const ringIdx = Math.min(index, rings.length - 1);
          const ring = rings[ringIdx];
          const ox = x - ring.cx;
          const oy = y - ring.cy;
          const olen = Math.hypot(ox, oy) || 1;
          px = (x + (ox / olen) * 14) / VB;
          py = (y + (oy / olen) * 14) / VB;
        }

        return (
          <motion.li
            key={step.id}
            className="absolute inline-flex w-max max-w-[min(100%,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-dra-taupe-deep/12 bg-white/95 px-3 py-2 text-left text-[11px] font-medium leading-none text-dra-taupe-deep shadow-md sm:px-3.5 sm:py-2.5 sm:text-sm"
            style={{
              left: `${px * 100}%`,
              top: `${py * 100}%`,
            }}
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + index * 0.05, duration: 0.35 }}
          >
            <span
              className={`inline-flex h-2 w-2 shrink-0 rounded-full ${
                index === 0
                  ? "bg-dra-rose-gold shadow-[0_0_8px_rgb(201_160_136/0.7)]"
                  : "bg-dra-taupe/85"
              }`}
              aria-hidden
            />
            <span className="whitespace-nowrap">{step.label}</span>
          </motion.li>
        );
      })}
    </ul>
  );

  return (
    <div
      ref={rootRef}
      className={`relative mx-auto w-full max-w-[min(100%,520px)] aspect-square overflow-visible ${className}`}
    >
      {allowDrift ? (
        <motion.div
          className="absolute inset-0 overflow-visible"
          initial={false}
          animate={{ rotate: [0, 0.6, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        >
          {svgGraphic}
          {labels}
        </motion.div>
      ) : (
        <div className="absolute inset-0 overflow-visible">
          {svgGraphic}
          {labels}
        </div>
      )}
    </div>
  );
};
