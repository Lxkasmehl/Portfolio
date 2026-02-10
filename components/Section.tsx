type Props = {
  title: string;
  children: React.ReactNode;
};

export function Section({ title, children }: Props) {
  return (
    <section
      className="pt-10 mt-10 first:mt-0 first:pt-0 first:border-0 border-t"
      style={{ borderColor: "var(--color-border)" }}
    >
      {title ? (
        <h2
          className="font-display text-lg font-bold mb-5"
          style={{ color: "var(--color-accent)" }}
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
