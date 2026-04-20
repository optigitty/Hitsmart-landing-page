import { Container } from "@/components/Container";
import { SectionIntro } from "@/components/SectionIntro";
import { SectionReveal } from "@/components/SectionReveal";

export function ContactSection() {
  return (
    <section id="contact" className="bg-bg-alt pt-16 md:pt-24">
      <SectionReveal>
        <Container>
          <SectionIntro label="Contact" title="Let&apos;s talk." />

          <div className="mt-10 space-y-5">
            <p className="font-body text-[20px] leading-relaxed text-text-primary">
              <span className="text-text-secondary">Email — </span>
              <a
                href="mailto:miles.wil.austin@gmail.com"
                className="font-display text-[28px] font-medium tracking-[-0.02em] text-accent underline-offset-4 hover:underline"
              >
                miles.wil.austin@gmail.com
              </a>
            </p>

            <p className="font-body text-[20px] leading-relaxed text-text-primary">
              <span className="text-text-secondary">Instagram — </span>
              <a
                href="https://instagram.com/optimilez"
                target="_blank"
                rel="noreferrer"
                className="font-display text-[28px] font-medium tracking-[-0.02em] text-accent underline-offset-4 hover:underline"
              >
                @optimilez
              </a>
            </p>
          </div>

          <footer className="mt-20 border-t border-hairline py-6">
            <p className="font-body text-[13px] text-white/50">
              © 2026 Fight Scale Media
            </p>
          </footer>
        </Container>
      </SectionReveal>
    </section>
  );
}
