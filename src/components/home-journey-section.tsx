"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { journeySteps } from "@/lib/clinica-content";
import {
  sectionFadeTransition,
  viewportOnceTight,
} from "@/lib/motion-presets";
import { Container } from "@/components/container";

const accentRing: Record<(typeof journeySteps)[number]["accent"], string> = {
  blue: "border-blue-500 bg-blue-50 text-blue-700 ring-blue-200",
  amber: "border-amber-500 bg-amber-50 text-amber-900 ring-amber-200",
  brand: "border-brand bg-brand-soft text-brand-dark ring-brand/25",
};

const lineColor: Record<(typeof journeySteps)[number]["accent"], string> = {
  blue: "from-blue-400 to-amber-400",
  amber: "from-amber-400 to-brand/50",
  brand: "from-brand/55 to-brand/15",
};

export const HomeJourneySection = () => {
  const [active, setActive] = useState<string>(journeySteps[0].id);
  const reduce = useReducedMotion();

  const current = journeySteps.find((s) => s.id === active) ?? journeySteps[0];

  return (
    <section className="bg-transparent py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            className="text-xs font-semibold uppercase tracking-widest text-brand-muted"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnceTight}
            transition={sectionFadeTransition}
          >
            Como organizamos o cuidado
          </motion.p>
          <motion.h2
            className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnceTight}
            transition={{ ...sectionFadeTransition, delay: 0.08 }}
          >
            Do primeiro contato ao acompanhamento
          </motion.h2>
          <motion.p
            className="mt-4 text-base leading-relaxed text-muted sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnceTight}
            transition={{ ...sectionFadeTransition, delay: 0.16 }}
          >
            Nada de promessas automáticas: o que descrevemos aqui é o fluxo
            humano e profissional que orienta a experiência na Clínica Total
            Vida — para que você saiba o que esperar em cada etapa.
          </motion.p>
        </div>

        <motion.div
          className="mx-auto mt-12 max-w-6xl rounded-[2rem] border border-black/[0.06] bg-white p-6 shadow-[var(--shadow-card)] sm:p-10 lg:p-12"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={viewportOnceTight}
          transition={{ ...sectionFadeTransition, delay: 0.06 }}
        >
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2 lg:flex-nowrap">
            {journeySteps.map((step, i) => {
              const isOn = step.id === active;
              return (
                <div
                  key={step.id}
                  className="flex min-w-0 items-center gap-2 lg:min-w-0 lg:flex-1 lg:justify-center"
                >
                  <button
                    type="button"
                    onClick={() => setActive(step.id)}
                    className={`cursor-pointer flex min-w-0 w-full max-w-[min(100%,22rem)] items-center gap-2 rounded-2xl border-2 px-3 py-2.5 text-left transition-all duration-200 ring-2 ring-transparent sm:min-w-[200px] sm:gap-3 sm:px-4 sm:py-3 lg:max-w-none lg:min-w-0 lg:flex-1 lg:px-2.5 lg:py-2 ${
                      isOn
                        ? `${accentRing[step.accent]} shadow-md`
                        : "border-black/10 bg-white/80 text-muted hover:border-brand/25 hover:bg-brand-soft/40"
                    }`}
                    aria-pressed={isOn}
                    aria-expanded={isOn}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold sm:h-9 sm:w-9 sm:text-sm ${
                        isOn ? "bg-white/80" : "bg-black/[0.04]"
                      }`}
                    >
                      {step.id}
                    </span>
                    <span className="min-w-0 text-left text-xs font-semibold leading-snug text-ink sm:text-sm sm:leading-snug lg:text-[0.8125rem]">
                      {step.title}
                    </span>
                  </button>
                  {i < journeySteps.length - 1 && (
                    <div
                      className={`mx-0.5 hidden h-0.5 w-6 shrink-0 bg-gradient-to-r sm:block sm:w-8 lg:mx-0 lg:w-5 ${lineColor[step.accent]}`}
                      aria-hidden
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-12">
            <div>
              <p className="text-sm font-medium text-brand">{current.short}</p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                {current.detail}
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {current.bullets.map((b) => (
                  <li
                    key={b}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-soft/80 px-3 py-1.5 text-sm text-brand-dark"
                  >
                    <span className="text-brand" aria-hidden>
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="relative overflow-hidden rounded-2xl border border-black/6 bg-gradient-to-br from-brand-soft/90 to-white p-5 shadow-inner"
              aria-hidden
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
                Em poucas palavras
              </p>
              <div className="mt-4 space-y-3 text-sm text-ink/90">
                <div className="rounded-xl bg-white/90 p-3 shadow-sm ring-1 ring-black/5">
                  <span className="text-muted">Etapa ativa · </span>
                  <span className="font-medium">{current.title}</span>
                </div>
                <div className="rounded-xl bg-white/60 p-3 ring-1 ring-brand/10">
                  {current.differential}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 flex items-start gap-2 border-t border-black/6 pt-8 text-sm text-muted sm:items-center sm:justify-center">
            <span className="text-lg" aria-hidden>
              ⚡
            </span>
            <span>
              Transparência no processo ajuda você a chegar mais preparado à
              consulta — e a construir confiança com a equipe ao longo do tempo.
            </span>
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
