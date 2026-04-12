import type { Metadata } from "next";
import { DoutoraQuieleOpeningGroup } from "@/components/doutora-quiele-opening-group";
import { DoctorContactSection } from "@/components/doctor-contact-section";
import { QuieleAdvantagesSection } from "@/modules/quiele/sections/quiele-advantages-section";
import { QuieleFeatureSplitSection } from "@/modules/quiele/sections/quiele-feature-split-section";
import { QuieleHeroInfoSection } from "@/modules/quiele/sections/quiele-hero-info-section";
import { QuieleHistoryTimelineSection } from "@/modules/quiele/sections/quiele-history-timeline-section";
import { QuieleMarqueeMissionSection } from "@/modules/quiele/sections/quiele-marquee-mission-section";
import { QuieleServiceStepperSection } from "@/modules/quiele/sections/quiele-service-stepper-section";
import { QuieleServicesGridSection } from "@/modules/quiele/sections/quiele-services-grid-section";
import { QuieleStatsJourneySection } from "@/modules/quiele/sections/quiele-stats-journey-section";
import { QuieleTeamShowcaseSection } from "@/modules/quiele/sections/quiele-team-showcase-section";
import { HomeContactSection } from "@/components/home-contact-section";

export const metadata: Metadata = {
  title: "Dra. Quiele Vieira | Clínica Total Vida",
  description:
    "Estética facial, toxina botulínica e harmonização — Dra. Quiele Vieira na Clínica Total Vida, Porto Velho.",
};

export default function DoutoraQuielePage() {
  return (
    <>
      <DoutoraQuieleOpeningGroup>
        <QuieleHeroInfoSection />
      </DoutoraQuieleOpeningGroup>

      <QuieleMarqueeMissionSection />
      <QuieleStatsJourneySection />
      {/* <QuieleFeatureSplitSection /> */}
      <QuieleServiceStepperSection />
      {/* <QuieleAdvantagesSection /> */}
      <QuieleServicesGridSection />
      <QuieleTeamShowcaseSection />
      <QuieleHistoryTimelineSection />

      {/* <DoctorContactSection variant="quiele" /> */}
      <HomeContactSection />
    </>
  );
}
