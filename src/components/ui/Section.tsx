interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "cream" | "navy" | "ivory" | "parchment";
  id?: string;
}

const backgrounds = {
  white: "bg-white",
  ivory: "bg-ivory",
  cream: "bg-ivory",
  parchment: "bg-parchment",
  navy: "bg-navy text-white",
};

export function Section({
  children,
  className = "",
  background = "ivory",
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-24 ${backgrounds[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4 leading-tight">{title}</h2>
      {subtitle && (
        <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
