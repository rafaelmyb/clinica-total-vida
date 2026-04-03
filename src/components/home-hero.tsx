"use client";

import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import { clinicContact, heroCopy } from "@/lib/clinica-content";
import { siteImages } from "@/lib/site-images";
import { Container } from "@/components/container";
import { ScheduleConsultationLink } from "@/components/schedule-consultation-link";
import { useMediaQuery } from "usehooks-ts";

const overlaySweep =
  "pointer-events-none absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100";

export const HomeHero = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section className="flex min-h-[100dvh] items-center overflow-hidden bg-transparent pb-16 pt-[calc(var(--site-header-height)+2.5rem)] sm:pb-20 sm:pt-[calc(var(--site-header-height)+3.5rem)]">
      <Container className="max-w-full sm:!px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_auto]">
          <div className="relative z-10 flex flex-col items-center lg:items-start">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand shadow-sm backdrop-blur-sm sm:text-sm">
              <span className="text-base leading-none" aria-hidden>
                ✦
              </span>
              {heroCopy.badge}
            </p>

            <h1 className="mt-6 text-center text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:text-left">
              {heroCopy.titleBefore}
              <span className="text-brand">{heroCopy.titleHighlight}</span>
            </h1>

            <p className="mt-6 max-w-xl text-center text-base leading-relaxed text-muted sm:text-lg lg:text-left">
              {heroCopy.lead}
            </p>

            {isMobile ? (
              <div className="flex w-full min-w-0 justify-center overflow-x-auto bg-transparent xl:!pr-16 pt-8">
                <Image
                  src={siteImages.clinica.logo}
                  alt={siteImages.clinica.altLogo}
                  width={1210}
                  height={709}
                  priority
                  unoptimized
                  className="h-auto sm:w-[560px] w-[320px] max-w-none shrink-0 bg-transparent object-contain"
                />
              </div>
            ) : null}

            <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3 lg:justify-start">
              <ScheduleConsultationLink variant="hero" className="shrink-0" />
              <a
                href={clinicContact.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-brand/15 bg-white/80 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider shadow-sm backdrop-blur-sm transition-[border-color] duration-300 ease-out hover:border-brand sm:text-sm"
                aria-label={`${heroCopy.instagramCta} — Instagram @clinicatotalvida`}
              >
                <span
                  className={`${overlaySweep} bg-brand`}
                  aria-hidden
                />
                <span className="relative z-10 flex items-center gap-2 text-brand transition-colors duration-300 ease-out group-hover:text-white">
                  <InstagramIcon
                    className="h-5 w-5 shrink-0"
                    aria-hidden
                  />
                  {heroCopy.instagramCta}
                </span>
              </a>
            </div>

            <ul className="mt-8 flex max-w-full flex-nowrap justify-center gap-2 lg:justify-start sm:flex-wrap sm:gap-2.5">
              {heroCopy.pills.map((pill) => (
                <li key={pill.label} className="min-w-0 flex-1 sm:flex-initial">
                  <div className="group flex w-full min-w-full max-w-full flex-col items-start rounded-xl border border-brand/10 bg-white/90 px-2.5 py-1.5 text-left shadow-[--shadow-card] transition-transform duration-200 hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[--shadow-card-hover] sm:w-auto sm:rounded-2xl sm:px-4 sm:py-2.5">
                    <span className="text-xs font-semibold leading-tight text-ink sm:text-sm sm:leading-snug">
                      {pill.label}
                    </span>
                    <span className="text-[0.6875rem] leading-tight text-muted transition-colors group-hover:text-brand-muted sm:text-xs sm:leading-snug">
                      {pill.hint}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs leading-relaxed text-muted sm:text-sm">
              {heroCopy.footnote}
            </p>
          </div>

          {!isMobile ? (
            <div className="flex w-full min-w-0 justify-center overflow-x-auto bg-transparent xl:!pr-16">
              <Image
                src={siteImages.clinica.logo}
                alt={siteImages.clinica.altLogo}
                width={1210}
                height={709}
                priority
                unoptimized
                className="h-auto sm:w-[560px] w-[320px] max-w-none shrink-0 bg-transparent object-contain"
              />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
};
