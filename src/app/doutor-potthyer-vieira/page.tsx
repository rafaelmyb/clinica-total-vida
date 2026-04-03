import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { DoctorContactSection } from "@/components/doctor-contact-section";
import { DoutorPotthyerOpeningGroup } from "@/components/doutor-potthyer-opening-group";
import { Section } from "@/components/section";
import { clinicContact } from "@/lib/clinica-content";
import { doutorPotthyerFocusAreas } from "@/lib/doutor-potthyer-content";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Dr. Potthyer Vieira | Clínica Total Vida",
  description:
    "Perfil do Dr. Potthyer Vieira — Clínica Total Vida, Porto Velho.",
};

export default function DoutorPotthyerPage() {
  return (
    <>
      <DoutorPotthyerOpeningGroup>
        <section className="overflow-hidden bg-transparent pb-16 pt-[calc(var(--site-header-height)+2.5rem)] sm:pt-[calc(var(--site-header-height)+3.5rem)]">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="mb-6 inline-flex rounded-2xl border border-dr-gold/30 bg-white/90 p-4 shadow-sm">
                  <Image
                    src={siteImages.doutorPotthyer.logo}
                    alt={siteImages.doutorPotthyer.altLogo}
                    width={240}
                    height={130}
                    className="h-auto w-full max-w-[240px] object-contain"
                    sizes="(max-width: 1024px) 60vw, 240px"
                    priority
                  />
                </div>
                <p className="inline-flex items-center gap-2 rounded-full border border-dr-gold/25 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink shadow-sm backdrop-blur-sm sm:text-sm">
                  <span className="text-base leading-none text-dr-gold" aria-hidden>
                    ✦
                  </span>
                  Clínica Total Vida · Porto Velho
                </p>
                <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                  Dr. Potthyer Vieira
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                  Atenção clínica com presença acolhedora e foco no cuidado
                  integrado ao time da clínica — sempre com base em avaliação
                  profissional individualizada.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={clinicContact.phoneHref}
                    className="inline-flex items-center justify-center rounded-full bg-dr-gold px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-dr-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dr-gold"
                  >
                    {clinicContact.phoneDisplay}
                  </a>
                  <CtaLink href="/" variant="secondary">
                    Voltar à clínica
                  </CtaLink>
                </div>
              </div>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-dr-gold/25 shadow-[var(--shadow-card)]">
                <Image
                  src={siteImages.doutorPotthyer.photo6}
                  alt="Dr. Potthyer Vieira — imagem de referência na clínica"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-transparent pb-14 pt-0 sm:pb-16 lg:pb-20">
          <Container className="max-w-3xl">
            <div className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
              <h2 className="font-serif text-2xl font-semibold text-ink">
                Sobre o profissional
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                <span className="font-medium text-ink">
                  Informações em atualização.
                </span>{" "}
                Biografia detalhada, formação acadêmica e registro profissional
                (CRM) serão publicadas após aprovação do conteúdo pelo cliente.
                Enquanto isso, o atendimento segue sendo organizado pela
                recepção da Clínica Total Vida.
              </p>
            </div>
          </Container>
        </section>
      </DoutorPotthyerOpeningGroup>

      <Section className="bg-dr-gold/[0.05]">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-dr-gold">
              Atuação
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-ink sm:text-3xl">
              Áreas de atuação
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Visão geral do perfil — não substitui avaliação individual nem
              confirma especialidades médicas não validadas pelo cliente.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {doutorPotthyerFocusAreas.map((item) => (
              <li key={item.title}>
                <Card className="h-full !rounded-[2rem] border border-dr-gold/25 bg-white/90 shadow-[var(--shadow-card)]">
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <article className="group relative flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-14">
            <div
              className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-dr-gold/12 via-transparent to-dr-bronze-light/10 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100 lg:rounded-3xl"
              aria-hidden
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-dr-gold/25 shadow-[var(--shadow-card)] lg:max-w-[min(100%,560px)] lg:shrink-0">
              <Image
                src={siteImages.doutorPotthyer.photo7}
                alt="Ambiente de atendimento — referência visual Dr. Potthyer Vieira"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative flex flex-col justify-center">
              <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
                Presença na clínica
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                As imagens de referência reforçam a identidade visual e o
                ambiente da Clínica Total Vida. Horários e disponibilidade
                específicos do profissional devem ser confirmados com a
                recepção.
              </p>
              <p className="mt-4 text-sm text-muted">
                {clinicContact.hoursWeekdays} · {clinicContact.weekendNote}
              </p>
            </div>
          </article>
        </Container>
      </Section>

      <DoctorContactSection variant="potthyer" />
    </>
  );
}
