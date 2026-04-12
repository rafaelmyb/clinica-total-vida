"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/container";
import { siteImages } from "@/lib/site-images";
import { quieleTeam } from "@/modules/quiele/content/quiele-page-content";

export const QuieleTeamShowcaseSection = () => {
  const reduce = useReducedMotion();
  const active = quieleTeam.members[0];

  return (
    <section
      id="quiele-team"
      className="scroll-mt-24 bg-dra-taupe/15 py-14 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-3xl font-semibold text-dra-taupe-deep sm:text-4xl">
            {quieleTeam.title}
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[2rem]">
          <AnimatePresence mode="wait">
            <motion.article
              key="quiele-team-showcase"
              initial={reduce ? undefined : { opacity: 0, x: 20 }}
              animate={reduce ? undefined : { opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="grid gap-8 bg-white/80 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-dra-taupe-deep/15">
                <Image
                  src={siteImages.doutoraQuiele.doutoraQuiele}
                  alt="Dra. Quiele Vieira"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 45vw"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-semibold text-dra-taupe-deep">
                  {active.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{active.role}</p>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  {active.bio}
                </p>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};
