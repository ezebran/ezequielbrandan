import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";
import { getCopy } from "@/lib/content";

export function About() {
  const { about } = getCopy();
  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="py-24 md:py-36">
      <Container>
        <SectionHeader
          id="sobre-mi-title"
          title={about.eyebrow}
          meta={`${siteConfig.location.city}, ${siteConfig.location.country}`}
        />
        <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <p className="font-display text-[clamp(1.6rem,3.2vw,2.75rem)] leading-[1.12] font-medium tracking-[-0.02em]">
              {about.lead}
            </p>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:col-start-9 lg:grid-cols-1">
            {about.columns.map((column, i) => (
              <Reveal key={column.label} delay={i * 0.08} className="corner-marks border border-moss-line bg-moss p-5">
                <h3 className="label-mono text-signal">{column.label}</h3>
                <p className="mt-3 max-w-[52ch] text-muted">{column.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
