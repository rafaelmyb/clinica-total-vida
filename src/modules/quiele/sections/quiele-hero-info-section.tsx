"use client";

import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/container";
import {
  heroFadeUpVariants,
  reducedMotionHeroVariants,
} from "@/lib/motion-presets";
import { ScheduleConsultationLink } from "@/components/schedule-consultation-link";
import { clinicContact, heroCopy } from "@/lib/clinica-content";
import { siteImages } from "@/lib/site-images";
import { QuieleHeroFlashStars } from "@/modules/quiele/componentes/quiele-hero-flash-stars";
import {
  quieleHero,
  quieleInfoCard,
} from "@/modules/quiele/content/quiele-page-content";

const overlaySweep =
  "pointer-events-none absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100";

export type QuieleHeroInfoSectionProps = {
  instagramHref?: string;
  instagramAriaLabel?: string;
};

export const QuieleHeroInfoSection = ({
  instagramHref = clinicContact.instagramHref,
  instagramAriaLabel,
}: QuieleHeroInfoSectionProps = {}) => {
  const reduce = useReducedMotion();

  const instagramButtonAriaLabel =
    instagramAriaLabel ??
    (instagramHref === clinicContact.instagramHref
      ? `${heroCopy.instagramCta} — Instagram @clinicatotalvida`
      : `${heroCopy.instagramCta} — Instagram`);

  return (
    <div className="relative pt-[calc(var(--site-header-height)+2.5rem)] sm:pt-[calc(var(--site-header-height)+3.5rem)] -mb-4">
      <Container>
        <div className="relative isolate">
          <div className="relative z-10 grid items-center gap-4 lg:grid-cols-2 lg:gap-14">
            <div className="flex flex-col items-center text-center lg:min-w-xl lg:-mt-20 lg:items-start lg:text-left">
              <motion.p
                custom={1}
                initial="hidden"
                animate="show"
                variants={
                  reduce ? reducedMotionHeroVariants : heroFadeUpVariants
                }
                className="inline-flex items-center gap-2 rounded-full border border-dra-taupe-deep/20 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-dra-taupe-deep shadow-sm backdrop-blur-sm sm:text-sm"
              >
                <span
                  className="text-base leading-none text-dra-rose-gold"
                  aria-hidden
                >
                  ✦
                </span>
                {quieleHero.eyebrow}
              </motion.p>
              <motion.h1
                custom={2}
                initial="hidden"
                animate="show"
                variants={
                  reduce ? reducedMotionHeroVariants : heroFadeUpVariants
                }
                className="mt-6 font-serif text-4xl font-semibold leading-tight text-dra-taupe-deep sm:text-5xl lg:text-[2.75rem]"
              >
                {quieleHero.title}
              </motion.h1>
              <motion.p
                custom={3}
                initial="hidden"
                animate="show"
                variants={
                  reduce ? reducedMotionHeroVariants : heroFadeUpVariants
                }
                className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
              >
                {quieleHero.description}
              </motion.p>
              <motion.div
                custom={4}
                initial="hidden"
                animate="show"
                variants={
                  reduce ? reducedMotionHeroVariants : heroFadeUpVariants
                }
                className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              >
                <ScheduleConsultationLink
                  variant="quiele"
                  className="shrink-0"
                />
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-dra-taupe-deep/20 bg-white/80 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider shadow-sm backdrop-blur-sm transition-[border-color] duration-300 ease-out hover:border-dra-taupe-deep sm:text-sm"
                  aria-label={instagramButtonAriaLabel}
                >
                  <span
                    className={`${overlaySweep} bg-dra-taupe-deep`}
                    aria-hidden
                  />
                  <span className="relative z-10 flex items-center gap-2 text-dra-taupe-deep transition-colors duration-300 ease-out group-hover:text-canvas">
                    <InstagramIcon className="h-5 w-5 shrink-0" aria-hidden />
                    {heroCopy.instagramCta}
                  </span>
                </a>
              </motion.div>
            </div>
            <div className="relative flex min-h-[300px] items-center justify-center overflow-visible sm:min-h-[280px] lg:min-h-[420px]">
              <motion.div
                custom={0}
                initial="hidden"
                animate="show"
                variants={
                  reduce ? reducedMotionHeroVariants : heroFadeUpVariants
                }
                className="w-full max-w-[min(100%,640px)] sm:max-w-[540px] lg:max-w-none"
              >
                <Image
                  src={siteImages.doutoraQuiele.heroImage}
                  alt={siteImages.doutoraQuiele.altLogo}
                  width={540}
                  height={675}
                  className="h-auto w-full origin-center scale-[1.08] object-contain sm:scale-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 540px"
                  priority
                />
              </motion.div>
            </div>
          </div>

          <QuieleHeroFlashStars />
        </div>
      </Container>

      <Container className="-mt-4">
        <div className="rounded-t-[2.5rem] border border-dra-taupe-deep/12 bg-canvas p-8 shadow-(--shadow-card)] backdrop-blur-sm sm:p-10 lg:rounded-t-[3rem]">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
            <div className="font-serif text-7xl font-bold leading-none text-dra-taupe-deep/15 sm:text-8xl">
              {quieleInfoCard.sectionNumber}
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {quieleInfoCard.date}
                </p>
                <h2 className="mt-2 font-serif text-xl font-semibold text-dra-taupe-deep sm:text-2xl">
                  {quieleInfoCard.subtitle}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                {quieleInfoCard.body}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
