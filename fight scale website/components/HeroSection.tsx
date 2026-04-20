import { Container } from "@/components/Container";
import { SectionReveal } from "@/components/SectionReveal";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col bg-bg-primary">
      <Container className="flex flex-1 flex-col py-6 md:py-8">
        <header className="flex items-start justify-between gap-6">
          <a
            href="#top"
            className="font-display text-[20px] font-medium tracking-[-0.01em] text-text-primary"
          >
            Fight Scale Media
          </a>

          <nav aria-label="Section navigation">
            <ul className="flex flex-wrap items-center justify-end gap-2 font-body text-[14px] font-medium text-text-secondary">
              {navItems.map((item, index) => (
                <li key={item.href} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">·</span> : null}
                  <a href={item.href} className="hover:text-text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <SectionReveal className="flex flex-1 items-center justify-center">
          <div className="flex w-full justify-center py-16">
            <h1
              id="top"
              className="max-w-[10ch] text-center font-display text-[clamp(48px,7vw,96px)] font-medium leading-[1.05] tracking-[-0.03em] text-text-primary text-balance"
            >
              Building More Fighters Through Content
            </h1>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
