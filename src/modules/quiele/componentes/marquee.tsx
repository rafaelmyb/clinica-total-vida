"use client";

type Props = {
  items: readonly string[];
  className?: string;
};

const PHRASE_GAP = "\u2003 / \u2003";

export const Marquee = ({ items, className = "" }: Props) => {
  const segment = items.map((t) => `${t}`).join(PHRASE_GAP);

  const full = `${segment}${PHRASE_GAP}`.repeat(4);

  const trackClass =
    "whitespace-nowrap font-semibold uppercase leading-none tracking-[-0.02em] text-[clamp(1.85rem,5vw,4.5rem)]";

  return (
    <div
      className={`relative overflow-hidden bg-transparent py-6 md:py-20 ${className}`}
    >
      <div
        className="flex w-max animate-quiele-marquee gap-10 pr-10"
        aria-hidden
      >
        <span className={`${trackClass} text-dra-taupe-deep`}>{full}</span>
        <span className={`${trackClass} text-dra-rose-gold/90`}>{full}</span>
      </div>
    </div>
  );
};
