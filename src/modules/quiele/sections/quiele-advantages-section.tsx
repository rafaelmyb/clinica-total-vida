"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/container";
import { AdvantageCard } from "@/modules/quiele/componentes/advantage-card";
import { quieleAdvantages } from "@/modules/quiele/content/quiele-page-content";

export const QuieleAdvantagesSection = () => {
  const reduce = useReducedMotion();

  return (
    <section id="quiele-advantages" className="scroll-mt-24 bg-canvas py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <motion.p
            className="text-xs font-semibold uppercase tracking-widest text-dra-taupe-deep"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
          >
            {quieleAdvantages.eyebrow}
          </motion.p>
          <motion.h2
            className="max-w-xl font-serif text-3xl font-semibold text-dra-taupe-deep sm:text-4xl"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            {quieleAdvantages.title}
          </motion.h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {quieleAdvantages.cards.map((card, i) => (
            <motion.div
              key={card.number}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <AdvantageCard
                number={card.number}
                badge={card.badge}
                title={card.title}
                exploreLabel={card.exploreLabel}
                href="#contato"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
