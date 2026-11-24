import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getContent } from "@/lib/content";
import { cn } from "@/lib/cn";
import type { Experience as ExperienceItem } from "@/types/content";

function firstYear(items: ExperienceItem[]) {
  const years = items.flatMap((item) => item.period?.match(/\d{4}/g) ?? []).map(Number);
  return years.length ? Math.min(...years) : null;
}

export function Experience() {
  const { copy, experience } = getContent();
  const since = firstYear(experience);
  const meta = [`${experience.length} puestos`, since ? `desde ${since}` : null].filter(Boolean).join(" · ");

  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="py-24 md:py-36">
      <Container>
        <SectionHeader id="experiencia-title" title={copy.experience.eyebrow} meta={meta} />

        <ol className="mt-14 md:mt-20">
          {experience.map((item) => (
            <li key={item.id} className="border-b border-line first:border-t">
              <Reveal
                className={cn(
                  "grid gap-x-8 gap-y-4 md:grid-cols-12",
                  item.current ? "py-10 md:py-14" : "py-7 md:py-9",
                )}
              >
                <div className="flex items-start gap-3 md:col-span-3">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-[0.3rem] size-2 shrink-0 rounded-full",
                      item.current ? "bg-signal" : "border border-line-strong",
                    )}
                  />
                  <div>
                    <p className={cn("label-mono", item.current ? "text-paper" : "text-muted")}>{item.period}</p>
                    {item.location ? <p className="label-mono mt-1 text-faint">{item.location}</p> : null}
                  </div>
                </div>

                <div className="md:col-span-4">
                  <h3
                    className={cn(
                      "font-semiwide leading-[1.02] font-bold tracking-[-0.02em]",
                      item.current ? "text-[clamp(1.75rem,3vw,2.5rem)]" : "text-[clamp(1.3rem,2vw,1.6rem)]",
                    )}
                  >
                    {item.company}
                  </h3>
                  <p className="mt-2 text-paper">{item.role}</p>
                </div>

                <div className="grid content-start gap-4 md:col-span-5">
                  {item.summary ? <p className="max-w-[56ch] text-muted">{item.summary}</p> : null}
                  {item.highlights?.length ? (
                    <ul className="grid gap-1.5 text-muted">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span aria-hidden="true" className="mt-[0.8rem] h-px w-3 shrink-0 bg-faint" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {item.technologies?.length ? (
                    <p className="font-mono text-[0.8rem] text-faint">
                      <span className="sr-only">{copy.experience.stackLabel}: </span>
                      {item.technologies.join(" · ")}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
