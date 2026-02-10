type Props = {
  title: string;
  children: React.ReactNode;
};

export function Section({ title, children }: Props) {
  return (
    <section
      className="pt-8 mt-8 first:mt-0 first:pt-0 first:border-0 border-t"
      style={{ borderColor: "var(--color-border)" }}
    >
      {title ? (
        <h2
          className="text-xs font-semibold uppercase tracking-wider mb-4"
          style={{ color: "var(--color-text-muted)" }}
        >
          {title}
        </h2>
      ) : null}
      <div className="space-y-6" style={{ color: "var(--color-text)" }}>
        {children}
      </div>
    </section>
  );
}
