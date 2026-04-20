import { Container } from "@/components/Container";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionIntro } from "@/components/SectionIntro";
import { SectionReveal } from "@/components/SectionReveal";

const properties = [
  {
    label: "Instagram",
    name: "@optimilez",
    description: "Personal brand. 30K followers in two months.",
    href: "https://instagram.com/optimilez",
  },
  {
    label: "Instagram",
    name: "@goodvibesmma",
    description: "Combat sports page. Grown from zero to 70K.",
    href: "https://instagram.com/goodvibesmma",
  },
  {
    label: "App",
    name: "HitSmart",
    description: "AI boxing analysis. Live on the App Store.",
    href: "https://hitsmart.app",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-bg-primary py-16 md:py-24">
      <SectionReveal>
        <Container>
          <SectionIntro label="About" title="Why I know how to do this." />

          <p className="mt-8 max-w-[680px] font-body text-[16px] leading-[1.65] text-white/90">
            I&apos;ve generated over 70 million views and 100,000 followers in the
            combat sports niche over the past few years. I&apos;m a fighter myself
            — I trained and coached at McGill&apos;s boxing club. I know how to
            edit, I know how to make videos people actually watch, and I know
            how to grow accounts from zero. I&apos;m ready to bring all of that to
            your gym.
          </p>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.name} {...property} />
            ))}
          </div>
        </Container>
      </SectionReveal>
    </section>
  );
}
