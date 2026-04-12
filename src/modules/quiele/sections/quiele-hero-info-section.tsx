"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/container";
import { clinicContact } from "@/lib/clinica-content";
import { siteImages } from "@/lib/site-images";
import { QuieleHeroFlashStars } from "@/modules/quiele/componentes/quiele-hero-flash-stars";
import { PillButton } from "@/modules/quiele/componentes/pill-button";
import {
  quieleHero,
  quieleInfoCard,
} from "@/modules/quiele/content/quiele-page-content";

const fadeUp = {
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

const reducedMotionVariants = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
};

export const QuieleHeroInfoSection = () => {
  const reduce = useReducedMotion();

  return (
    <div className="relative pt-[calc(var(--site-header-height)+2.5rem)] sm:pt-[calc(var(--site-header-height)+3.5rem)] -mb-4">
      <Container>
        <div className="relative isolate">
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="lg:min-w-xl lg:-mt-20">
              <motion.p
                custom={1}
                initial="hidden"
                animate="show"
                variants={reduce ? reducedMotionVariants : fadeUp}
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
                variants={reduce ? reducedMotionVariants : fadeUp}
                className="mt-6 font-serif text-4xl font-semibold leading-tight text-dra-taupe-deep sm:text-5xl lg:text-[2.75rem]"
              >
                {quieleHero.title}
              </motion.h1>
              <motion.p
                custom={3}
                initial="hidden"
                animate="show"
                variants={reduce ? reducedMotionVariants : fadeUp}
                className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              >
                {quieleHero.description}
              </motion.p>
              <motion.div
                custom={4}
                initial="hidden"
                animate="show"
                variants={reduce ? reducedMotionVariants : fadeUp}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <PillButton
                  href={clinicContact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {quieleHero.ctaPrimary}
                </PillButton>
              </motion.div>
            </div>
            <div className="relative flex min-h-[280px] items-center justify-center lg:min-h-[420px]">
              <motion.div
                custom={0}
                initial="hidden"
                animate="show"
                variants={reduce ? reducedMotionVariants : fadeUp}
              >
                <Image
                  src={siteImages.doutoraQuiele.heroImage}
                  alt={siteImages.doutoraQuiele.altLogo}
                  width={540}
                  height={675}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1024px) 60vw, 540px"
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
