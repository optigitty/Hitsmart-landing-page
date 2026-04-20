import type { ReactNode } from "react";

type SectionIntroProps = {
  label: string;
  title: string;
  description?: ReactNode;
  descriptionClassName?: string;
  titleClassName?: string;
};

export function SectionIntro({
  label,
  title,
  description,
  descriptionClassName = "",
  titleClassName = "",
}: SectionIntroProps) {
  return (
    <div className="max-w-[980px]">
      <p className="mb-5 font-body text-[13px] font-medium uppercase tracking-[0.08em] text-accent">
        {label}
      </p>
      <h2
        className={`max-w-[14ch] font-display text-[clamp(32px,4vw,52px)] font-medium leading-[1.1] tracking-[-0.03em] text-text-primary text-balance ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <div className={descriptionClassName}>
          {description}
        </div>
      ) : null}
    </div>
  );
}
