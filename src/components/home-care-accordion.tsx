"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  careAccordionColumnIntro,
  careModelAccordion,
} from "@/lib/clinica-content";
import {
  sectionFadeTransition,
  viewportOnceTight,
} from "@/lib/motion-presets";
import { siteImages } from "@/lib/site-images";
import { Container } from "@/components/container";

export const HomeCareAccordion = () => {
  const [openId, setOpenId] = useState<string>(careModelAccordion[0].id);
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-brand/8 bg-brand/10 py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/90 px-3 py-1 text-xs font-semibold text-brand shadow-sm"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnceTight}
            transition={sectionFadeTransition}
          >
            <span aria-hidden>✨</span>
            Organização do cuidado
          </motion.p>
          <motion.h2
            className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnceTight}
            transition={{ ...sectionFadeTransition, delay: 0.08 }}
          >
            Clínica com visão de conjunto — e atenção ao seu caso
          </motion.h2>
          <motion.p
            className="mt-4 text-base leading-relaxed text-muted sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnceTight}
            transition={{ ...sectionFadeTransition, delay: 0.16 }}
          >
            Enquanto cada profissional aprofunda sua especialidade, a
            instituição se preocupa em manter padrões de acolhimento, ética e
            continuidade. Abaixo, três pilares que orientam como trabalhamos;
            clique para expandir.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div className="flex flex-col gap-8 lg:gap-10">
            <motion.div
              className="max-w-xl space-y-4 text-left"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={viewportOnceTight}
              transition={{ ...sectionFadeTransition, delay: 0.06 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                {careAccordionColumnIntro.eyebrow}
              </p>
              <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                {careAccordionColumnIntro.title}
              </h3>
              {careAccordionColumnIntro.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed text-muted sm:text-base"
                >
                  {para}
                </p>
              ))}
            </motion.div>
            <div className="space-y-3">
            {careModelAccordion.map((item, accIndex) => {
              const isOpen = openId === item.id;
              const staggerDelay = Math.min(accIndex * 0.06, 0.24);
              return (
                <motion.div
                  key={item.id}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={viewportOnceTight}
                  transition={{ ...sectionFadeTransition, delay: staggerDelay }}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
                    isOpen
                      ? "border-brand/30 bg-white shadow-[var(--shadow-card)]"
                      : "border-black/8 bg-white/70 hover:border-brand/20"
                  }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                    onClick={() => setOpenId(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-ink">
                      {item.title}
                    </span>
                    <span
                      className={`text-brand transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    >
                      <Chevron />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="animate-fade-up border-t border-black/6 px-5 pb-5 pt-2">
                      <p className="text-sm leading-relaxed text-muted">
                        {item.summary}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {item.points.map((p) => (
                          <li
                            key={p}
                            className="flex gap-2 text-sm text-ink/90 before:mt-1.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-brand"
                          >
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              );
            })}
            </div>
          </div>

          <motion.div
            className="relative"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnceTight}
            transition={{ ...sectionFadeTransition, delay: 0.1 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[var(--shadow-card)] sm:aspect-[5/6]">
              <Image
                src={siteImages.clinica.recepcao}
                alt="Ambiente e identidade visual da clínica"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/25 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-lg ring-1 ring-black/5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Presença local
                </p>
                <p className="mt-1 text-sm font-medium text-ink">
                  Porto Velho — equipe e salas no mesmo endereço
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

const Chevron = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
