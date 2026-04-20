import { Container } from "@/components/Container";
import { ReelCard } from "@/components/ReelCard";
import { SectionIntro } from "@/components/SectionIntro";
import { SectionReveal } from "@/components/SectionReveal";

export function OpportunitySection() {
  return (
    <section id="work" className="bg-bg-alt py-16 md:py-24">
      <SectionReveal>
        <Container>
          <SectionIntro
            label="What's Possible"
            title="You know the benefits of combat sport."
            description={
              <p className="mt-6 max-w-[640px] font-body text-[clamp(18px,1.8vw,22px)] font-normal leading-[1.5] text-white/70">
                Now it&apos;s time for everybody else to know — and for you to
                pack your classes, fill your personal training schedule, and
                grow your gym.
              </p>
            }
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ReelCard caption="Mic'd coach · IG Reel" />
            <ReelCard caption="Mic'd coach · IG Reel" />
            <ReelCard caption="Mic'd coach · IG Reel" />
          </div>

          <p className="mx-auto mt-12 max-w-[720px] text-center font-body text-[15px] leading-7 text-text-secondary">
            Some gyms are already taking over with content — packing their
            classes and their personal training schedules. There&apos;s no reason
            yours shouldn&apos;t be next.
          </p>
        </Container>
      </SectionReveal>
    </section>
  );
}
