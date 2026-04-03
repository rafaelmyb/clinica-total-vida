import type { ReactNode } from "react";
import {
  doutorPotthyerOpeningGroupClassName,
  doutorPotthyerOpeningVignetteClassName,
} from "@/lib/doutor-potthyer-opening-background";

type Props = {
  children: ReactNode;
};

export const DoutorPotthyerOpeningGroup = ({ children }: Props) => (
  <div className={doutorPotthyerOpeningGroupClassName}>
    <div className={doutorPotthyerOpeningVignetteClassName} aria-hidden />
    <div className="relative z-10">{children}</div>
  </div>
);
