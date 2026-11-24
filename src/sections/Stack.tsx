import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getContent } from "@/lib/content";

export function Stack() {
  const { copy, stack } = getContent();
  const total = stack.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <section id="stack" aria-labelledby="stack-title" className="py-24 md:py-36">
      <Container>
        <SectionHeader
          id="stack-title"
          title={copy.stack.eyebrow}
          meta={`${stack.length} áreas · ${total} herramientas`}
        />
        <div className="corner-marks mt-14 grid grid-cols-1 gap-px border border-moss-line bg-moss-line sm:grid-cols-2 md:mt-20 lg:grid-cols-5">
          {stack.map((group) => (
            <div key={group.id} className="group bg-moss p-5 transition-colors duration-300 hover:bg-moss-2 md:p-6">
              <h3 className="label-mono flex items-center gap-2 text-signal">
                <span aria-hidden="true" className="size-1.5 bg-signal" />
                {group.title}
              </h3>
              <ul className="mt-5 grid gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[1.05rem] leading-snug text-paper">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
