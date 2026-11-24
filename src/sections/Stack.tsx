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
        <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 md:mt-20 lg:grid-cols-5">
          {stack.map((group) => (
            <div key={group.id} className="bg-ink p-5 md:p-6">
              <h3 className="label-mono text-faint">{group.title}</h3>
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
