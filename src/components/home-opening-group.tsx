import type { ReactNode } from "react";
import {
  homeOpeningGroupClassName,
  homeOpeningVignetteClassName,
} from "@/lib/home-opening-background";

type Props = {
  children: ReactNode;
};

export const HomeOpeningGroup = ({ children }: Props) => (
  <div className={homeOpeningGroupClassName}>
    <div className={homeOpeningVignetteClassName} aria-hidden />
    <div className="relative z-10">{children}</div>
  </div>
);
