import type { ReactNode } from "react";
import {
  doutoraQuieleOpeningGroupClassName,
  doutoraQuieleOpeningVignetteClassName,
} from "@/lib/doutora-quiele-opening-background";

type Props = {
  children: ReactNode;
};

export const DoutoraQuieleOpeningGroup = ({ children }: Props) => (
  <div className={doutoraQuieleOpeningGroupClassName}>
    <div className={doutoraQuieleOpeningVignetteClassName} aria-hidden />
    <div className="relative z-10">{children}</div>
  </div>
);
