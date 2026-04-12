"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/container";

const phoneDisplay = "(69) 3215-4275";
const phoneHref = "tel:+556932154275";

const doutoraQuielePath = "/doutora-quiele-vieira";

export const SiteFooter = () => {
  const pathname = usePathname();
  const isQuielePage =
    pathname === doutoraQuielePath ||
    pathname.startsWith(`${doutoraQuielePath}/`);

  const shellClass = isQuielePage
    ? "mt-auto border-t border-dra-taupe-deep/20 bg-dra-taupe-deep"
    : "mt-auto border-t border-brand/10 bg-brand";

  const legalDividerClass = isQuielePage
    ? "mt-10 border-t border-white/15 pt-8 text-center text-xs text-white"
    : "mt-10 border-t border-black/[0.06] pt-8 text-center text-xs text-white";

  return (
    <footer className={shellClass}>
      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">Clínica Total Vida</p>
            <p className="mt-2 text-sm leading-relaxed text-white">
              Saúde mental e física — abordagem holística em Porto Velho, RO.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-white">
              Contato
            </h2>
            <p className="mt-3 text-sm text-white">
              <a
                href={phoneHref}
                className="font-medium text-white underline-offset-4 hover:underline"
              >
                {phoneDisplay}
              </a>
            </p>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-white">
              Endereço e horário
            </h2>
            <address className="mt-3 not-italic text-sm leading-relaxed text-white">
              Rua Uruguai, nº 2486, bairro Embratel
              <br />
              Porto Velho — RO, CEP 76820-856
            </address>
            <p className="mt-3 text-sm text-white">
              Segunda a sexta:{" "}
              <span className="font-medium text-white">08:00–21:00</span>
            </p>
          </div>
        </div>
        <p className={legalDividerClass}>
          © {new Date().getFullYear()} Clínica Total Vida · Todos os direitos
          reservados.{" "}
        </p>
      </Container>
    </footer>
  );
};
