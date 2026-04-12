"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { specialtyCategories, specialtyItems } from "@/lib/clinica-content";
import {
  sectionFadeTransition,
  viewportOnceTight,
} from "@/lib/motion-presets";
import { Container } from "@/components/container";

export const HomeSpecialtiesFilter = () => {
  const [cat, setCat] = useState<string>("all");
  const reduce = useReducedMotion();

  const filtered = useMemo(() => {
    if (cat === "all") return specialtyItems;
    return specialtyItems.filter((i) => i.categoryId === cat);
  }, [cat]);

  return (
    <section className="border-b border-slate-200/80 bg-brand from-slate-50 via-slate-50/90 to-[#eef1f6] py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnceTight}
            transition={sectionFadeTransition}
          >
            Especialidades e linhas de cuidado
          </motion.h2>
          <motion.p
            className="mt-4 text-base leading-relaxed text-white sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={viewportOnceTight}
            transition={{ ...sectionFadeTransition, delay: 0.1 }}
          >
            A Clínica Total Vida reúne uma ampla gama de especialidades e linhas
            de cuidado — da saúde mental ao corpo e às relações — para que você
            possa receber o cuidado que precisa.
          </motion.p>
        </div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filtrar por eixo de cuidado"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={viewportOnceTight}
          transition={{ ...sectionFadeTransition, delay: 0.06 }}
        >
          <FilterChip
            selected={cat === "all"}
            onClick={() => setCat("all")}
            id="all"
          >
            Todas
          </FilterChip>
          {specialtyCategories.map((c) => (
            <FilterChip
              key={c.id}
              selected={cat === c.id}
              onClick={() => setCat(c.id)}
              id={c.id}
            >
              {c.label}
            </FilterChip>
          ))}
        </motion.div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item, index) => (
            <motion.li
              key={item.id}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={viewportOnceTight}
              transition={{
                ...sectionFadeTransition,
                delay: Math.min(index * 0.05, 0.4),
              }}
            >
              <article className="group h-full rounded-2xl border border-black/6 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[var(--shadow-card-hover)]">
                <h3 className="font-semibold text-ink group-hover:text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

type FilterChipProps = {
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
  id: string;
};

const FilterChip = ({ children, selected, onClick, id }: FilterChipProps) => (
  <button
    type="button"
    role="tab"
    aria-selected={selected}
    id={`tab-${id}`}
    onClick={onClick}
    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      selected
        ? "bg-brand text-white shadow-md ring-2 ring-brand/30"
        : "bg-white/90 text-muted ring-1 ring-black/8 hover:bg-brand-soft/60 hover:text-brand-dark"
    }`}
  >
    {children}
  </button>
);
