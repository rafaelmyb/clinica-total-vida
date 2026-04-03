import { clinicContact, contactSectionCopy } from "@/lib/clinica-content";
import { Container } from "@/components/container";

const WHATSAPP_URL = "https://wa.me/+556932154275";
const WHATSAPP_DISPLAY = "(69) 3215-4275";

export const HomeContactSection = () => {
  return (
    <section className="border-t border-brand/15 bg-gradient-to-b from-brand-soft/55 via-brand-soft/25 to-canvas py-14 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto w-full gap-10">
          <div className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
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
              <span className="font-medium text-ink">WhatsApp: </span>
              <a
                href={WHATSAPP_URL}
                className="font-semibold text-brand underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </p>
            <p className="mt-3 text-sm text-muted">
              <span className="font-medium text-ink">Instagram: </span>
              <a
                href={clinicContact.instagramHref}
                className="inline-flex items-center gap-2 font-semibold text-brand underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Clínica Total Vida (@clinicatotalvida)"
              >
                <span>@clinicatotalvida</span>
              </a>
            </p>
            <p className="mt-3 text-sm text-muted">
              <span className="font-medium text-ink">Horário: </span>
              {clinicContact.hoursWeekdays}
            </p>
            <p className="mt-2 text-sm text-muted">
              {clinicContact.weekendNote}
            </p>
          </div>

          {/* <div className="flex flex-col justify-center rounded-[2rem] border border-brand/15 bg-white/80 p-8 sm:p-10">
            <h3 className="text-xl font-bold text-ink sm:text-2xl">
              {teamTeaserCopy.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {teamTeaserCopy.lead}
            </p>
            <nav
              className="mt-8 flex flex-col gap-3 text-sm"
              aria-label="Páginas da equipe"
            >
              <Link
                href="/doutor-potthyer-vieira"
                className="inline-flex items-center justify-between rounded-xl border border-black/8 bg-white px-4 py-3 font-medium text-ink transition-colors hover:border-brand/30 hover:bg-brand-soft/40"
              >
                Dr. Potthyer Vieira
                <span className="text-brand" aria-hidden>
                  →
                </span>
              </Link>
              <Link
                href="/doutora-quiele-vieira"
                className="inline-flex items-center justify-between rounded-xl border border-black/8 bg-white px-4 py-3 font-medium text-ink transition-colors hover:border-brand/30 hover:bg-brand-soft/40"
              >
                Dra. Quiele Vieira
                <span className="text-brand" aria-hidden>
                  →
                </span>
              </Link>
            </nav>
            <p className="mt-8 text-xs text-muted">
              Prefere falar por telefone?{" "}
              <a
                href={clinicContact.phoneHref}
                className="font-medium text-brand hover:underline"
              >
                {clinicContact.phoneDisplay}
              </a>
            </p>
          </div> */}
        </div>
      </Container>
    </section>
  );
};
