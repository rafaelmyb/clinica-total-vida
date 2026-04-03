import Link from "next/link";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export const CtaLink = ({
  href,
  children,
  className = "",
  variant = "primary",
}: CtaLinkProps) => {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles =
    variant === "primary"
      ? "bg-clinic-burgundy text-canvas hover:bg-clinic-burgundy-dark focus-visible:outline-clinic-burgundy"
      : "border border-clinic-burgundy/25 bg-transparent text-clinic-burgundy hover:bg-clinic-burgundy/5 focus-visible:outline-clinic-burgundy";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
};
