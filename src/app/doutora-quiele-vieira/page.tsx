import type { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/card";
import { Container } from "@/components/container";
import { CtaLink } from "@/components/cta-link";
import { DoctorContactSection } from "@/components/doctor-contact-section";
import { DoutoraQuieleOpeningGroup } from "@/components/doutora-quiele-opening-group";
import { Section } from "@/components/section";
import { clinicContact } from "@/lib/clinica-content";
import { doutoraQuieleHighlights } from "@/lib/doutora-quiele-content";
import { siteImages } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Dra. Quiele Vieira | Clínica Total Vida",
  description:
    "Perfil da Dra. Quiele Vieira — Clínica Total Vida, Porto Velho.",
};

export default function DoutoraQuielePage() {
  return (
    <>
      <DoutoraQuieleOpeningGroup>
        <section className="overflow-hidden bg-transparent pb-16 pt-[calc(var(--site-header-height)+2.5rem)] sm:pt-[calc(var(--site-header-height)+3.5rem)]">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="mb-6 inline-flex rounded-2xl border border-dra-rose-gold/40 bg-white/90 p-5 shadow-sm">
                  <Image
                    src={siteImages.doutoraQuiele.logo}
                    alt={siteImages.doutoraQuiele.altLogo}
                    width={240}
                    height={130}
                    className="h-auto w-full max-w-[240px] object-contain"
                    sizes="(max-width: 1024px) 60vw, 240px"
                    priority
                  />
                </div>
                <p className="inline-flex items-center gap-2 rounded-full border border-dra-taupe-deep/20 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-dra-taupe-deep shadow-sm backdrop-blur-sm sm:text-sm">
                  <span
                    className="text-base leading-none text-dra-rose-gold"
                    aria-hidden
                  >
                    ✦
                  </span>
                  Clínica Total Vida · Porto Velho
                </p>
                <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-dra-taupe-deep sm:text-5xl">
                  Dra. Quiele Vieira
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                  Um atendimento com atmosfera cuidadosa — pensado para combinar
                  acolhimento, clareza e a proposta integrada da clínica.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={clinicContact.phoneHref}
                    className="inline-flex items-center justify-center rounded-full border border-dra-taupe-deep/35 bg-dra-taupe-deep px-5 py-2.5 text-sm font-medium text-canvas transition-colors hover:bg-dra-taupe-deep/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dra-taupe-deep"
                  >
                    {clinicContact.phoneDisplay}
                  </a>
                  <CtaLink href="/" variant="secondary">
                    Voltar à clínica
                  </CtaLink>
                </div>
              </div>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-dra-taupe-deep/25 shadow-[var(--shadow-card)]">
                <Image
                  src={siteImages.doutoraQuiele.photo6}
                  alt="Dra. Quiele Vieira — imagem de referência na clínica"
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
              <h2 className="font-serif text-2xl font-semibold text-dra-taupe-deep">
                Sobre a profissional
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                <span className="font-medium text-ink">
                  Informações em atualização.
                </span>{" "}
                Biografia, formação e detalhes de registro profissional serão
                publicados após envio e aprovação do material pelo cliente. Para
                agendamento ou dúvidas, utilize o telefone da clínica.
              </p>
            </div>
          </Container>
        </section>
      </DoutoraQuieleOpeningGroup>

      <Section className="bg-dra-taupe/15">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-dra-taupe-deep">
              Cuidado
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-dra-taupe-deep sm:text-3xl">
              Como a Dra. Quiele cuida
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Princípios gerais — o plano terapêutico individual é definido em
              consulta.
            </p>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {doutoraQuieleHighlights.map((item) => (
              <li key={item.title}>
                <Card className="h-full !rounded-[2rem] border border-dra-taupe-deep/20 bg-white/95 p-6 shadow-[var(--shadow-card)]">
                  <h3 className="font-serif text-lg font-semibold text-dra-taupe-deep">
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
              className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-dra-taupe/25 via-transparent to-dra-rose-gold/10 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100 lg:rounded-3xl"
              aria-hidden
            />
            <div className="relative order-2 flex flex-col justify-center lg:order-1">
              <h2 className="font-serif text-2xl font-semibold text-dra-taupe-deep sm:text-3xl">
                Referência visual
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                As fotografias de referência acompanham a identidade da Dra.
                Quiele e do ambiente da Clínica Total Vida. Conteúdo textual
                específico pode ser acrescentado quando o briefing estiver
                completo.
              </p>
            </div>
            <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-dra-taupe-deep/25 shadow-[var(--shadow-card)] lg:order-2 lg:max-w-[min(100%,560px)] lg:shrink-0">
              <Image
                src={siteImages.doutoraQuiele.photo7}
                alt="Ambiente de atendimento — referência visual Dra. Quiele Vieira"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </article>
        </Container>
      </Section>

      <DoctorContactSection variant="quiele" />
    </>
  );
}
