"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/container";
import { Marquee } from "@/modules/quiele/componentes/marquee";
import { quieleMarqueeItems, quieleMission } from "@/modules/quiele/content/quiele-page-content";

export const QuieleMarqueeMissionSection = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="quiele-marquee-mission"
      className="scroll-mt-24 bg-canvas pb-12 pt-4 sm:pb-16"
    >
      <Marquee items={quieleMarqueeItems} />
      <Container className="mt-12 sm:mt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
          <motion.p
            className="max-w-3xl text-lg leading-relaxed text-ink sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {quieleMission.textBefore}
            <span className="text-muted">{quieleMission.textAccent}</span>
          </motion.p>
          <motion.p
            className="max-w-xs text-[10px] font-semibold uppercase leading-relaxed tracking-widest text-muted lg:pt-2"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.45 }}
          >
            {quieleMission.label}
          </motion.p>
        </div>
      </Container>
    </section>
  );
};
