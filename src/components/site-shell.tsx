import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type SiteShellProps = {
  children: React.ReactNode;
};

export const SiteShell = ({ children }: SiteShellProps) => (
  <>
    <SiteHeader />
    <main className="flex flex-1 flex-col">{children}</main>
    <SiteFooter />
  </>
);
