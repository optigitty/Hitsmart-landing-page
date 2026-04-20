type PropertyCardProps = {
  label: string;
  name: string;
  description: string;
  href: string;
};

export function PropertyCard({
  label,
  name,
  description,
  href,
}: PropertyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-white/15 bg-white/[0.04] p-8">
      <p className="font-body text-[12px] font-medium uppercase tracking-[0.08em] text-accent">
        {label}
      </p>
      <h3 className="mt-6 font-display text-[24px] font-medium tracking-[-0.02em] text-text-primary">
        {name}
      </h3>
      <p className="mt-3 max-w-[24ch] flex-1 font-body text-[15px] leading-7 text-text-secondary">
        {description}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex w-fit items-center gap-2 font-body text-[13px] font-medium text-accent underline-offset-4 hover:underline"
      >
        ↗ Visit
      </a>
    </article>
  );
}
