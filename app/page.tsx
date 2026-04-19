import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

function EyebrowChip({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("glass-chip", className)}>
      <span aria-hidden="true" className="chip-dot" />
      <span>{children}</span>
    </p>
  );
}

function CtaLink({
  href,
  children,
  className
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn("cta-pill", className)}
    >
      <span>{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-4 w-4 shrink-0"
        fill="none"
      >
        <path
          d="M3.5 8h8M8.5 3l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <EyebrowChip className="mb-4">{eyebrow}</EyebrowChip>
      <h2 className="section-title text-white">{title}</h2>
      {description ? <p className="section-sub">{description}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative z-10 bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-20 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full blur-3xl sm:h-[36rem] sm:w-[36rem]"
          style={{
            background:
              "radial-gradient(circle, rgba(58, 195, 92, 0.18) 0%, rgba(58, 195, 92, 0.08) 30%, rgba(0, 0, 0, 0) 72%)"
          }}
        />
        <div
          className="absolute left-[-10rem] top-[44rem] h-[22rem] w-[22rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(42, 163, 74, 0.12) 0%, rgba(42, 163, 74, 0.04) 42%, rgba(0, 0, 0, 0) 72%)"
          }}
        />
        <div
          className="absolute right-[-10rem] top-[86rem] h-[24rem] w-[24rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(58, 195, 92, 0.14) 0%, rgba(58, 195, 92, 0.05) 36%, rgba(0, 0, 0, 0) 72%)"
          }}
        />
      </div>

      <div className="page-shell relative">
        <header className="flex items-center justify-between py-6 sm:py-8">
          <Link
            href="/"
            className="text-[14px] font-semibold uppercase tracking-[0.18em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`${siteConfig.name} home`}
          >
            {siteConfig.nav.wordmark}
          </Link>
          <a
            href={siteConfig.subscribeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium tracking-[-0.01em] text-white/72 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-sm"
          >
            {siteConfig.nav.lettersLabel}
          </a>
        </header>

        <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center border-b border-white/10 py-16 text-center sm:min-h-[calc(100vh-6rem)] sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-12 h-72 rounded-full blur-3xl sm:inset-x-16 sm:h-96"
            style={{
              background:
                "radial-gradient(circle, rgba(58, 195, 92, 0.2) 0%, rgba(58, 195, 92, 0.09) 28%, rgba(0, 0, 0, 0) 70%)"
            }}
          />
          <div className="relative max-w-5xl">
            <EyebrowChip className="mb-10">{siteConfig.hero.eyebrow}</EyebrowChip>
            <h1 className="mx-auto max-w-[13ch] font-display text-[clamp(3.75rem,9vw,7rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-white text-balance">
              {siteConfig.hero.headline}
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/74 sm:text-xl sm:leading-9">
              {siteConfig.hero.subheadline}
            </p>
            <div className="mt-11 flex flex-col items-center gap-4">
              <CtaLink href={siteConfig.subscribeUrl}>
                {siteConfig.hero.ctaLabel}
              </CtaLink>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/38 sm:text-sm">
                {siteConfig.hero.disclaimer}
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <SectionIntro
            eyebrow={siteConfig.philosophy.eyebrow}
            title={siteConfig.philosophy.heading}
            description={siteConfig.philosophy.body}
          />
        </section>

        <section className="section-shell">
          <SectionIntro
            eyebrow={siteConfig.audience.eyebrow}
            title={siteConfig.audience.heading}
          />
          <ul className="mt-8 max-w-3xl space-y-3">
            {siteConfig.audience.items.map((item) => (
              <li key={item} className="flex items-start gap-3 py-1.5">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#3ac35c] shadow-[0_0_12px_rgba(58,195,92,0.7)]"
                />
                <p className="max-w-3xl text-[15px] leading-[1.5] text-white/84 sm:text-base">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section-shell">
          <SectionIntro
            eyebrow={siteConfig.recentLetters.eyebrow}
            title={siteConfig.recentLetters.heading}
          />
          <div className="mt-8 flex max-w-3xl flex-col gap-3">
            {siteConfig.recentLetters.items.map((letter) => (
              <article key={letter.url} className="panel-card">
                <a
                  href={letter.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block px-5 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-6 sm:py-6"
                >
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/42">
                    {letter.date}
                  </p>
                  <div className="mt-4 flex items-start justify-between gap-6">
                    <h3 className="max-w-3xl text-xl font-medium leading-[1.15] tracking-[-0.03em] text-white transition-colors group-hover:text-white/78 sm:text-[1.7rem]">
                      {letter.title}
                    </h3>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className="mt-1 hidden h-4 w-4 shrink-0 text-white/50 transition-transform group-hover:translate-x-1 group-hover:text-white sm:block"
                      fill="none"
                    >
                      <path
                        d="M3.5 8h8M8.5 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <CtaLink href={siteConfig.lettersArchiveUrl} className="text-sm">
              {siteConfig.recentLetters.readAllLabel}
            </CtaLink>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="panel-card px-6 py-10 text-center sm:px-8 sm:py-12">
            <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.2rem,4.5vw,4.1rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-white">
              {siteConfig.finalCta.heading}
            </h2>
            <div className="mt-6 flex justify-center">
              <CtaLink href={siteConfig.subscribeUrl}>
                {siteConfig.finalCta.ctaLabel}
              </CtaLink>
            </div>
          </div>
        </section>

        <footer className="flex flex-col gap-4 border-t border-white/10 py-7 text-[12px] text-white/34 sm:flex-row sm:items-center sm:justify-between sm:py-9">
          <p>{siteConfig.footer.copyright}</p>
          <nav
            aria-label="Social links"
            className="flex flex-wrap items-center gap-5 text-white/42"
          >
            {siteConfig.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white/78 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </footer>
      </div>
    </main>
  );
}
