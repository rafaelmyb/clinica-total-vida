"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/container";
import { clinicContact } from "@/lib/clinica-content";
import { siteImages } from "@/lib/site-images";
import { GlassCard } from "@/modules/quiele/componentes/glass-card";
import { PillButton } from "@/modules/quiele/componentes/pill-button";
import { quieleDisclaimer, quieleFeatureSplit } from "@/modules/quiele/content/quiele-page-content";

export const QuieleFeatureSplitSection = () => {
  const reduce = useReducedMotion();

  return (
    <section id="quiele-features" className="scroll-mt-24 bg-canvas py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -16 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-2xl font-semibold text-dra-taupe-deep sm:text-3xl">
              {quieleFeatureSplit.headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {quieleFeatureSplit.sub}
            </p>
            <div className="mt-8">
              <PillButton
                href={clinicContact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {quieleFeatureSplit.cta}
              </PillButton>
            </div>
            <p className="mt-6 text-xs text-muted">{quieleDisclaimer}</p>

            <ul className="mt-12 space-y-6 border-t border-dra-taupe-deep/10 pt-10">
              {quieleFeatureSplit.features.map((f, i) => (
                <motion.li
                  key={f.title}
                  className="grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-6"
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-dra-taupe-deep/25 text-lg font-light text-dra-taupe-deep"
                    aria-hidden
                  >
                    +
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-dra-taupe-deep">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{f.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            initial={reduce ? false : { opacity: 0, x: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-dra-taupe-deep/20 shadow-[var(--shadow-card)]">
              <Image
                src={siteImages.doutoraQuiele.photo7}
                alt="Ambiente e atendimento — Dra. Quiele Vieira"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="absolute bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-[min(100%,280px)]">
              <GlassCard
                label={quieleFeatureSplit.glassLabel}
                title={quieleFeatureSplit.glassTitle}
                body={quieleFeatureSplit.glassBody}
                metric={quieleFeatureSplit.glassMetric}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
