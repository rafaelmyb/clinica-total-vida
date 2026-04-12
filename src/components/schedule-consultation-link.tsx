"use client";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { clinicContact } from "@/lib/clinica-content";

const overlaySweep =
  "pointer-events-none absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100";

const inlineAnchorClass =
  "group relative inline-flex items-center overflow-hidden rounded-full border border-brand/15 bg-white/80 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider shadow-sm backdrop-blur-sm transition-[border-color] duration-300 ease-out hover:border-brand sm:text-sm";

const heroAnchorClass =
  "group relative inline-flex items-center overflow-hidden rounded-full border border-white/20 bg-brand px-4 py-2.5 text-xs font-semibold uppercase tracking-wider shadow-sm transition-[border-color] duration-300 ease-out hover:border-brand/15 sm:text-sm";

/** Same layout as clinic hero; primary fill uses Quiele taupe instead of brand burgundy. */
const quieleHeroAnchorClass =
  "group relative inline-flex items-center overflow-hidden rounded-full border border-white/20 bg-dra-taupe-deep px-4 py-2.5 text-xs font-semibold uppercase tracking-wider shadow-sm transition-[border-color] duration-300 ease-out hover:border-white/35 sm:text-sm";

type Props = {
  className?: string;
  variant?: "inline" | "fullWidth" | "hero" | "quiele";
};

export const ScheduleConsultationLink = ({
  className,
  variant = "fullWidth",
}: Props) => {
  const layoutClass =
    variant === "fullWidth" ? "w-full justify-center py-3.5" : "";
  const isHeroLayout = variant === "hero" || variant === "quiele";

  const anchorClass = [
    variant === "quiele"
      ? quieleHeroAnchorClass
      : isHeroLayout
        ? heroAnchorClass
        : inlineAnchorClass,
    !isHeroLayout ? layoutClass : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const sweepBg = isHeroLayout ? "bg-white" : "bg-brand";

  const heroTextHoverClass =
    variant === "quiele"
      ? "group-hover:text-dra-taupe-deep"
      : "group-hover:text-brand";

  return (
    <a
      href={clinicContact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={anchorClass}
    >
      <span className={`${overlaySweep} ${sweepBg}`} aria-hidden />
      {isHeroLayout ? (
        <span className="relative z-10 flex items-center gap-2">
          <WhatsAppIcon
            className="h-5 w-5 shrink-0 text-[#25D366]"
            aria-hidden
          />
          <span
            className={`text-white transition-colors duration-300 ease-out ${heroTextHoverClass}`}
          >
            Agendar consulta
          </span>
        </span>
      ) : (
        <span className="relative z-10 flex items-center gap-2 text-brand transition-colors duration-300 ease-out group-hover:text-white">
          <WhatsAppIcon
            className="h-5 w-5 shrink-0 text-[#25D366] transition-colors duration-300 ease-out"
            aria-hidden
          />
          {variant === "inline" ? "" : "Agendar consulta"}
        </span>
      )}
    </a>
  );
};
