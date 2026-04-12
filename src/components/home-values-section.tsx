"use client";

import Image from "next/image";
import {
  homeTeamSectionIntro,
  homeTeamSpotlightImageAlt,
  homeTeamSpotlights,
} from "@/lib/clinica-content";
import { siteImages } from "@/lib/site-images";
import { Container } from "@/components/container";

const spotlightImages = [
  siteImages.doutorPotthyer.doutorPotthyer,
  siteImages.doutoraQuiele.quieleClinica,
] as const;

export const HomeValuesSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-brand/8 bg-gradient-to-br from-[#fff9f4] via-white to-brand-soft/25 py-14 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-soft/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-32 h-64 w-64 rounded-full bg-brand-gold-soft/40 blur-3xl" />
      <Container>
        <div className="flex flex-col gap-12 lg:items-center lg:gap-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
              {homeTeamSectionIntro.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {homeTeamSectionIntro.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {homeTeamSectionIntro.lead}
            </p>
          </div>

          <div className="flex w-full flex-col gap-12 lg:gap-16">
            {homeTeamSpotlights.map((spot, i) => {
              const imageSrc = spotlightImages[i];
              const imageOnRight = i % 2 === 1;
              return (
                <article
                  key={i}
                  className={`group relative flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8 xl:gap-12 ${
                    imageOnRight ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-brand/12 via-transparent to-brand-gold/10 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100 lg:rounded-3xl"
                    aria-hidden
                  />

                  <div
                    // href={spot.href}
                    className={`relative mx-auto w-full max-w-[min(100%,380px)] shrink-0 overflow-hidden rounded-4xl border border-black/8 bg-white shadow-(--shadow-card) ring-0 transition-all duration-500 hover:border-brand/25 hover:shadow-(--shadow-card-hover) focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:mx-0 ${
                      imageOnRight ? "lg:origin-right" : "lg:origin-left"
                    }`}
                  >
                    <span className="absolute left-4 bottom-4 z-10 inline-flex items-center rounded-full border border-white/50 bg-white/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-brand shadow-sm backdrop-blur-sm">
                      {spot.imageBadge}
                    </span>
                    <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/6]">
                      <Image
                        src={imageSrc}
                        alt={homeTeamSpotlightImageAlt}
                        width={480}
                        height={560}
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 1024px) 100vw, 380px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand/20 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <span className="sr-only">
                      Abrir página com mais informações sobre a equipe
                    </span>
                  </div>

                  <div
                    className="home-team-value-card relative flex min-w-0 flex-1 animate-fade-up flex-col justify-center overflow-hidden rounded-3xl border border-black/[0.07] p-6 shadow-sm sm:p-8"
                    style={i === 1 ? { animationDelay: "90ms" } : undefined}
                  >
                    <div
                      className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-brand to-brand-gold"
                      aria-hidden
                    />
                    <h4 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                      {spot.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                      {spot.description}
                    </p>
                    {/* <Link
                      href={spot.href}
                      className="group/cta mt-6 inline-flex items-center gap-2 self-start rounded-full border border-brand/20 bg-brand-soft/50 px-4 py-2 text-sm font-semibold text-brand transition-colors hover:border-brand/40 hover:bg-brand-soft"
                    >
                      <span>Saiba mais</span>
                      <span
                        className="inline-block transition-transform duration-300 group-hover/cta:translate-x-0.5"
                        aria-hidden
                      >
                        →
                      </span>
                    </Link> */}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
