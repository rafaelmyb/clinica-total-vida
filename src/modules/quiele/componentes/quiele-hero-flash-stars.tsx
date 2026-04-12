import { memo, type CSSProperties } from "react";

/**
 * Paparazzi stars — kept toward corners/edges (avoid ~35–65% “content” band).
 * % = anchor center; larger `size` = easier to see.
 * `hasOnMobile: false` → `hidden md:block` (omit on small viewports).
 */
const cameraFlashes = [
  {
    top: "-5%",
    left: "20%",
    size: 100,
    floatDuration: 9.5,
    floatDelay: 0,
    flashDuration: 3.4,
    flashDelay: 0,
    hasOnMobile: true,
  },
  {
    top: "2%",
    left: "60%",
    size: 120,
    floatDuration: 10,
    floatDelay: 1.1,
    flashDuration: 3.8,
    flashDelay: 0.2,
    hasOnMobile: false,
  },
  {
    top: "34%",
    left: "-10%",
    size: 112,
    floatDuration: 7.8,
    floatDelay: 0.3,
    flashDuration: 3.1,
    flashDelay: 0.9,
    hasOnMobile: true,
  },
  {
    top: "70%",
    left: "40%",
    size: 108,
    floatDuration: 9,
    floatDelay: 1.4,
    flashDuration: 3.6,
    flashDelay: 0.1,
    hasOnMobile: false,
  },
  {
    top: "26%",
    left: "105%",
    size: 128,
    floatDuration: 8.6,
    floatDelay: 0.8,
    flashDuration: 2.7,
    flashDelay: 1.2,
    hasOnMobile: true,
  },
  {
    top: "70%",
    left: "110%",
    size: 124,
    floatDuration: 9.2,
    floatDelay: 0.2,
    flashDuration: 3.2,
    flashDelay: 0.6,
    hasOnMobile: true,
  },
  {
    top: "91%",
    left: "-10%",
    size: 130,
    floatDuration: 8.8,
    floatDelay: 1.7,
    flashDuration: 3.5,
    flashDelay: 0.3,
    hasOnMobile: true,
  },
] as const;

const FLASH_STAR_PATH =
  "M 0 -44 L 9.99 -13.75 L 41.85 -13.6 L 16.17 5.25 L 25.86 35.6 L 0 17 L -25.86 35.6 L -16.17 5.25 L -41.85 -13.6 L -9.99 -13.75 Z";

/** Single defs document-wide id — all star SVGs reference this gradient. */
const FlashStarSvg = () => (
  <svg
    viewBox="-50 -50 100 100"
    className="h-full w-full overflow-visible"
    aria-hidden
  >
    <path
      d={FLASH_STAR_PATH}
      fill="url(#quiele-hero-star-gradient)"
      stroke="rgb(120 90 70 / 0.42)"
      strokeWidth="2"
      strokeLinejoin="round"
      paintOrder="stroke fill"
    />
  </svg>
);

export const QuieleHeroFlashStars = memo(() => {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 overflow-visible select-none"
      aria-hidden
    >
      <svg
        width={0}
        height={0}
        className="absolute overflow-hidden"
        aria-hidden
      >
        <defs>
          <linearGradient
            id="quiele-hero-star-gradient"
            x1="-45"
            y1="-50"
            x2="45"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#fffefa" />
            <stop offset="55%" stopColor="#ffe8cc" />
            <stop offset="100%" stopColor="#e8b88a" />
          </linearGradient>
        </defs>
      </svg>

      {cameraFlashes.map((f, i) => {
        const dim = `min(${f.size}px, 32vw)`;
        return (
          <div
            key={`flash-${i}`}
            className={[
              "absolute -translate-x-1/2 -translate-y-1/2 transform-gpu",
              f.hasOnMobile ? "" : "hidden md:block",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{ top: f.top, left: f.left }}
          >
            <div
              className="animate-quiele-hero-flash-float"
              style={{
                animationDuration: `${f.floatDuration}s`,
                animationDelay: `${f.floatDelay}s`,
              }}
            >
              <div
                className="quiele-hero-star-glow flex items-center justify-center animate-quiele-hero-star-flash"
                style={
                  {
                    width: dim,
                    height: dim,
                    "--flash-duration": `${f.flashDuration}s`,
                    "--flash-delay": `${f.flashDelay}s`,
                    "--flash-stagger": `${i * 0.32}s`,
                  } as CSSProperties
                }
              >
                <span className="inline-flex h-full w-full">
                  <FlashStarSvg />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

QuieleHeroFlashStars.displayName = "QuieleHeroFlashStars";
