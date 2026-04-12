"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/container";
import { Marquee } from "@/modules/quiele/componentes/marquee";
import {
  quieleHistory,
  quieleHistoryMarqueeItems,
} from "@/modules/quiele/content/quiele-page-content";
import { siteImages } from "@/lib/site-images";

export const QuieleHistoryTimelineSection = () => {
  const reduce = useReducedMotion();
  const milestones = quieleHistory.milestones;
  const [selected, setSelected] = useState(Math.floor(milestones.length / 2));

  const active = milestones[selected];

  return (
    <section
      id="quiele-history"
      className="scroll-mt-24 bg-canvas"
      // pb-14 pt-4 sm:pb-16 sm:pt-6
    >
      <Marquee items={quieleHistoryMarqueeItems} />
      {/* <Container className="mt-14">
        <p className="text-sm font-medium text-dra-taupe-deep">{quieleHistory.label}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {quieleHistory.intro}
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,200px)_1fr] lg:gap-16">
          <nav aria-label="Marcos da clínica">
            <ul className="flex flex-col gap-3">
              {milestones.map((m, i) => {
                const isSel = i === selected;
                return (
                  <li key={m.year}>
                    <button
                      type="button"
                      onClick={() => setSelected(i)}
                      className={`w-full text-left font-serif transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dra-taupe-deep ${
                        isSel
                          ? "text-4xl font-bold text-dra-taupe-deep sm:text-5xl"
                          : "text-lg text-muted hover:text-dra-taupe-deep/80 sm:text-xl"
                      }`}
                    >
                      {m.year}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.year}
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm leading-relaxed text-muted sm:text-base">{active.text}</p>
              </motion.div>
            </AnimatePresence>
            <motion.div
              className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-dra-taupe-deep/15 shadow-[var(--shadow-card)]"
              initial={reduce ? false : { opacity: 0, scale: 0.98 }}
              whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={siteImages.doutoraQuiele.photo7}
                alt="Ambiente Clínica Total Vida"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
            </motion.div>
          </div>
        </div>
      </Container> */}
    </section>
  );
};
