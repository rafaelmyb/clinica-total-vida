"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Container } from "@/components/container";
import { clinicContact } from "@/lib/clinica-content";
import { PillButton } from "@/modules/quiele/componentes/pill-button";
import { quieleStepper } from "@/modules/quiele/content/quiele-page-content";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dra-taupe-deep";

/** Tailwind `md` breakpoint — horizontal stepper scroll only below this width. */
const isMobileStepper = () =>
  typeof window !== "undefined" &&
  !window.matchMedia("(min-width: 768px)").matches;

export const QuieleServiceStepperSection = () => {
  const reduce = useReducedMotion();
  const baseId = useId();
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const steps = quieleStepper.steps;
  const transitionClass = reduce
    ? ""
    : "transition-[color,opacity] duration-300 ease-out";

  const focusTab = useCallback((index: number) => {
    tabRefs.current[index]?.focus();
  }, []);

  const scrollTabIntoViewCenter = useCallback(
    (index: number) => {
      if (!isMobileStepper()) return;
      const tab = tabRefs.current[index];
      if (!tab) return;
      tab.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        inline: "center",
        block: "nearest",
      });
    },
    [reduce],
  );

  const updateActiveFromScrollAnchor = useCallback(() => {
    const root = scrollRef.current;
    if (!root || !isMobileStepper()) return;

    const rootRect = root.getBoundingClientRect();
    const anchorX = rootRect.left + rootRect.width / 2;

    let bestIndex = 0;
    let bestDist = Number.POSITIVE_INFINITY;

    tabRefs.current.forEach((tab, i) => {
      if (!tab) return;
      const r = tab.getBoundingClientRect();
      const center = r.left + r.width / 2;
      const d = Math.abs(center - anchorX);
      if (d < bestDist) {
        bestDist = d;
        bestIndex = i;
      }
    });

    setActive((prev) => (prev !== bestIndex ? bestIndex : prev));
  }, []);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        updateActiveFromScrollAnchor();
      });
    };

    const onResize = () => {
      updateActiveFromScrollAnchor();
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const initialRaf = requestAnimationFrame(() => {
      updateActiveFromScrollAnchor();
    });

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(initialRaf);
      root.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [updateActiveFromScrollAnchor]);

  const onTabKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = Math.min(index + 1, steps.length - 1);
        setActive(next);
        scrollTabIntoViewCenter(next);
        focusTab(next);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prev = Math.max(index - 1, 0);
        setActive(prev);
        scrollTabIntoViewCenter(prev);
        focusTab(prev);
      } else if (e.key === "Home") {
        e.preventDefault();
        setActive(0);
        scrollTabIntoViewCenter(0);
        focusTab(0);
      } else if (e.key === "End") {
        e.preventDefault();
        const last = steps.length - 1;
        setActive(last);
        scrollTabIntoViewCenter(last);
        focusTab(last);
      }
    },
    [focusTab, scrollTabIntoViewCenter, steps.length],
  );

  return (
    <section
      id="quiele-stepper"
      className="scroll-mt-24 bg-white py-14 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-2xl lg:flex-1">
            <h2 className="font-serif text-3xl font-semibold leading-tight text-dra-taupe-deep sm:text-4xl">
              {quieleStepper.title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted lg:hidden">
              {quieleStepper.description}
            </p>
          </div>
          <p className="hidden max-w-md text-sm leading-relaxed text-muted lg:block lg:text-right">
            {quieleStepper.description}
          </p>
          <div className="lg:shrink-0">
            <PillButton
              href={clinicContact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {quieleStepper.cta}
            </PillButton>
          </div>
        </div>

        <div className="relative mt-14 pt-10">
          <div
            ref={scrollRef}
            className="-mx-4 snap-x snap-mandatory overflow-x-auto overflow-y-visible scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:snap-none md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Etapas do cuidado estético"
            aria-describedby={`${baseId}-hint`}
          >
            <div className="relative w-max min-w-full md:w-full">
              <div
                className="pointer-events-none absolute inset-x-8 top-5 h-px bg-dra-taupe-deep/15 md:inset-x-0"
                aria-hidden
              />
              <div className="flex min-w-max gap-0 md:grid md:min-w-0 md:grid-cols-4 md:gap-6">
                {steps.map((step, index) => {
                  const isActive = index === active;
                  const tabId = `${baseId}-tab-${step.id}`;
                  return (
                    <button
                      key={step.id}
                      id={tabId}
                      ref={(el) => {
                        tabRefs.current[index] = el;
                      }}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => {
                        setActive(index);
                        scrollTabIntoViewCenter(index);
                      }}
                      onKeyDown={(e) => onTabKeyDown(e, index)}
                      className={`group cursor-pointer relative flex w-[min(85vw,calc(100vw-3rem))] shrink-0 snap-center flex-col border-0 bg-transparent px-6 text-left first:pl-8 last:pr-8 md:w-auto md:px-0 md:first:pl-0 md:last:pr-0 ${focusRing}`}
                    >
                      <span
                        className={`relative z-10 mx-auto mb-5 mt-3 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${transitionClass} ${
                          isActive
                            ? "bg-dra-rose-gold shadow-[0_0_0_6px_rgb(201_160_136/0.25)]"
                            : "border border-dra-taupe/60 bg-white group-hover:border-dra-taupe"
                        }`}
                        aria-hidden
                      >
                        {isActive ? (
                          <span className="h-2 w-2 rounded-full bg-white" />
                        ) : null}
                      </span>
                      <span
                        className={`mb-2 text-center text-[11px] leading-snug sm:text-xs ${transitionClass} ${
                          isActive
                            ? "font-semibold text-dra-taupe-deep"
                            : "font-medium text-muted opacity-40"
                        }`}
                      >
                        {step.title}
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${transitionClass} ${
                          isActive
                            ? "text-dra-taupe-deep"
                            : "text-muted opacity-32"
                        }`}
                      >
                        {step.detail}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
