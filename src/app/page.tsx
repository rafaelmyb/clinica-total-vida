import type { Metadata } from "next";
import { HomeCareAccordion } from "@/components/home-care-accordion";
import { HomeContactSection } from "@/components/home-contact-section";
import { HomeHero } from "@/components/home-hero";
import { HomeJourneySection } from "@/components/home-journey-section";
import { HomeOpeningGroup } from "@/components/home-opening-group";
import { HomeSpecialtiesFilter } from "@/components/home-specialties-filter";
import { HomeValuesSection } from "@/components/home-values-section";

export const metadata: Metadata = {
  title: "Clínica Total Vida — Saúde mental e física em Porto Velho",
  description:
    "Clínica em Porto Velho (RO): cuidado integrado, equipe multidisciplinar e linhas de atenção em saúde mental e física. Informações institucionais e contato.",
};

export default function HomePage() {
  return (
    <>
      <HomeOpeningGroup>
        <HomeHero />
        <HomeJourneySection />
      </HomeOpeningGroup>
      <HomeCareAccordion />
      <HomeValuesSection />
      <HomeSpecialtiesFilter />
      <HomeContactSection />
    </>
  );
}
