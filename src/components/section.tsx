type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export const Section = ({ children, className = "", id }: SectionProps) => (
  <section id={id} className={`py-14 sm:py-16 lg:py-20 ${className}`}>
    {children}
  </section>
);
