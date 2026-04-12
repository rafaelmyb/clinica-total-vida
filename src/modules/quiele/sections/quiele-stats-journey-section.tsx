"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/container";
import { JourneyGraphic } from "@/modules/quiele/componentes/journey-graphic";
import { StatCounter } from "@/modules/quiele/componentes/stat-counter";
import {
  quieleJourneySteps,
  quieleMissionStatement,
  quieleStats,
} from "@/modules/quiele/content/quiele-page-content";

export const QuieleStatsJourneySection = () => {
  const reduce = useReducedMotion();

  return (
    <section id="quiele-stats" className="scroll-mt-24 bg-dra-taupe/15 py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-w-0 flex-col gap-8 lg:gap-10">
            <motion.p
              className="text-2xl font-semibold leading-snug text-dra-taupe-deep sm:text-[1.65rem] lg:text-3xl lg:leading-tight"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              {quieleMissionStatement.headline}
              <span className="font-normal text-muted">{quieleMissionStatement.headlineAccent}</span>
            </motion.p>

            <div className="overflow-hidden rounded-2xl border border-dra-taupe-deep/10 bg-white/40">
              <div className="grid grid-cols-2">
                {quieleStats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className={[
                      "min-w-0 p-4 sm:p-5 lg:p-6",
                      i % 2 === 0 ? "border-r border-dra-taupe-deep/10" : "",
                      i < 2 ? "border-b border-dra-taupe-deep/10" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                  >
                    <StatCounter
                      variant="hero"
                      value={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                      isDecimal={"isDecimal" in stat ? stat.isDecimal : undefined}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-dra-taupe-deep sm:mb-6 sm:text-left">
              Jornada da beleza
            </p>
            <JourneyGraphic className="w-full" steps={quieleJourneySteps} />
          </div>
        </div>
      </Container>
    </section>
  );
};
