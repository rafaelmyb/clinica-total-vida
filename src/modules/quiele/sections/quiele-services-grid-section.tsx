"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/container";
import { clinicContact } from "@/lib/clinica-content";
import { siteImages } from "@/lib/site-images";
import { ServiceCard } from "@/modules/quiele/componentes/service-card";
import { quieleServicesGrid } from "@/modules/quiele/content/quiele-page-content";

const imageByKey = {
  rinoplastia: siteImages.doutoraQuiele.rinoplastia,
  preenchimentoLabial: siteImages.doutoraQuiele.preenchimentoLabial,
  botox: siteImages.doutoraQuiele.botox,
  mento: siteImages.doutoraQuiele.mento,
  fiosPDO: siteImages.doutoraQuiele.fiosPDO,
} as const;

function serviceItemGridClass(index: number) {
  const base = "sm:col-span-1 lg:col-span-4";
  if (index < 3) return base;
  if (index === 3) return `${base} lg:col-start-3`;
  return `${base} lg:col-start-7`;
}

export const QuieleServicesGridSection = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="quiele-services"
      className="scroll-mt-24 bg-white py-14 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <motion.h2
            className="max-w-3xl font-serif text-2xl font-semibold leading-snug text-dra-taupe-deep sm:text-3xl lg:text-4xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
          >
            {quieleServicesGrid.headline}
            <span className="text-dra-rose-gold">
              {quieleServicesGrid.headlineAccent}
            </span>
            {quieleServicesGrid.headlineAfter}
          </motion.h2>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-end">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              {quieleServicesGrid.label}
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-dra-taupe-deep/10 pt-14">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-12 lg:gap-8">
            {quieleServicesGrid.items.map((item, i) => (
              <motion.div
                key={item.id}
                className={`h-full ${serviceItemGridClass(i)}`}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.12, duration: 0.45 }}
              >
                <ServiceCard
                  title={item.title}
                  description={item.description}
                  imageSrc={imageByKey[item.imageKey]}
                  imageAlt={item.title}
                  href={clinicContact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
