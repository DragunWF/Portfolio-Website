interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionContainer({
  children,
  id,
  className = "",
}: SectionContainerProps) {
  return (
    // LAYOUT TWEAK: Adjust max-width here (e.g., max-w-5xl, max-w-6xl, max-w-7xl) to control desktop margins
    <section
      id={id}
      className={`max-w-7xl mx-auto w-full px-6 md:px-8 ${className}`}
    >
      {children}
    </section>
  );
}
