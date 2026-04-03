type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: CardProps) => (
  <div
    className={`rounded-2xl border border-black/5 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8 ${className}`}
  >
    {children}
  </div>
);
