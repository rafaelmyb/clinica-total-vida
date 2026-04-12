type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: Props) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-widest text-dra-taupe-deep">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-serif text-2xl font-semibold text-dra-taupe-deep sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm text-muted sm:text-base">{subtitle}</p>
      ) : null}
    </div>
  );
};
