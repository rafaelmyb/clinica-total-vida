import Link from "next/link";
import { Container } from "@/components/container";
import {
  clinicContact,
  contactSectionCopy,
  teamTeaserCopy,
} from "@/lib/clinica-content";

type Props = {
  variant: "potthyer" | "quiele";
};

const sectionClass: Record<Props["variant"], string> = {
  potthyer:
    "border-t border-dr-gold/20 bg-gradient-to-b from-amber-50/70 via-canvas to-canvas py-14 sm:py-16 lg:py-20",
  quiele:
    "border-t border-dra-taupe-deep/15 bg-gradient-to-b from-dra-taupe/25 via-canvas to-canvas py-14 sm:py-16 lg:py-20",
};

const leftCardClass: Record<Props["variant"], string> = {
  potthyer:
    "rounded-[2rem] border border-dr-gold/20 bg-white p-8 shadow-[var(--shadow-card)] sm:p-10",
  quiele:
    "rounded-[2rem] border border-dra-taupe-deep/20 bg-white p-8 shadow-[var(--shadow-card)] sm:p-10",
};

const rightCardClass: Record<Props["variant"], string> = {
  potthyer:
    "flex flex-col justify-center rounded-[2rem] border border-dr-gold/18 bg-white/85 p-8 sm:p-10",
  quiele:
    "flex flex-col justify-center rounded-[2rem] border border-dra-taupe-deep/18 bg-white/90 p-8 sm:p-10",
};

const phoneLinkClass: Record<Props["variant"], string> = {
  potthyer:
    "font-semibold text-dr-gold underline-offset-4 hover:underline",
  quiele:
    "font-semibold text-dra-taupe-deep underline-offset-4 hover:underline",
};

const phoneFootnoteClass: Record<Props["variant"], string> = {
  potthyer: "font-medium text-dr-gold hover:underline",
  quiele: "font-medium text-dra-taupe-deep hover:underline",
};

const navLinkClass: Record<Props["variant"], string> = {
  potthyer:
    "inline-flex items-center justify-between rounded-xl border border-black/8 bg-white px-4 py-3 font-medium text-ink transition-colors hover:border-dr-gold/35 hover:bg-amber-50/50",
  quiele:
    "inline-flex items-center justify-between rounded-xl border border-black/8 bg-white px-4 py-3 font-medium text-ink transition-colors hover:border-dra-taupe-deep/30 hover:bg-dra-taupe/25",
};

const arrowClass: Record<Props["variant"], string> = {
  potthyer: "text-dr-gold",
  quiele: "text-dra-rose-gold",
};

export const DoctorContactSection = ({ variant }: Props) => {
  const phoneLink = phoneLinkClass[variant];
  const phoneFoot = phoneFootnoteClass[variant];
  const navLink = navLinkClass[variant];
  const arrow = arrowClass[variant];

  return (
    <section className={sectionClass[variant]}>
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-14">
          <div className={leftCardClass[variant]}>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              {contactSectionCopy.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {contactSectionCopy.intro}
            </p>
            <address className="mt-6 not-italic text-sm leading-relaxed text-ink sm:text-base">
              {clinicContact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 text-sm text-muted">
              <span className="font-medium text-ink">Telefone: </span>
              <a href={clinicContact.phoneHref} className={phoneLink}>
                {clinicContact.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 text-sm text-muted">
              <span className="font-medium text-ink">Horário: </span>
              {clinicContact.hoursWeekdays}
            </p>
            <p className="mt-2 text-sm text-muted">{clinicContact.weekendNote}</p>
          </div>

          <div className={rightCardClass[variant]}>
            <h3 className="text-xl font-bold text-ink sm:text-2xl">
              {teamTeaserCopy.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {teamTeaserCopy.lead}
            </p>
            <nav
              className="mt-8 flex flex-col gap-3 text-sm"
              aria-label="Páginas da equipe e início"
            >
              <Link href="/doutor-potthyer-vieira" className={navLink}>
                Dr. Potthyer Vieira
                <span className={arrow} aria-hidden>
                  →
                </span>
              </Link>
              <Link href="/doutora-quiele-vieira" className={navLink}>
                Dra. Quiele Vieira
                <span className={arrow} aria-hidden>
                  →
                </span>
              </Link>
              <Link href="/" className={navLink}>
                Voltar à clínica
                <span className={arrow} aria-hidden>
                  →
                </span>
              </Link>
            </nav>
            <p className="mt-8 text-xs text-muted">
              Prefere falar por telefone?{" "}
              <a href={clinicContact.phoneHref} className={phoneFoot}>
                {clinicContact.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
