import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectIndex, type IndexEntry } from "@/components/projects/ProjectIndex";
import { ProjectPlate, type PlateVariant } from "@/components/projects/ProjectPlate";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getContent, isShipped } from "@/lib/content";
import type { Project } from "@/types/content";

type Row = { kind: "single"; variant: PlateVariant; project: Project } | { kind: "pair"; projects: [Project, Project] };

/** Composición editorial que se repite cada cuatro proyectos: ancha, par, desplazada. */
function composeRows(list: Project[]): Row[] {
  const rows: Row[] = [];
  let i = 0;
  while (i < list.length) {
    const step = rows.length % 3;
    const current = list[i] as Project;
    const following = list[i + 1];
    if (step === 1 && following) {
      rows.push({ kind: "pair", projects: [current, following] });
      i += 2;
    } else {
      rows.push({ kind: "single", variant: step === 2 ? "offset" : "wide", project: current });
      i += 1;
    }
  }
  return rows;
}

export function Projects() {
  const { copy, projects } = getContent();
  const numberOf = (project: Project) => projects.indexOf(project) + 1;

  const shipped = projects.filter((project) => isShipped(project) && project.cover);
  const workshop = projects.filter((project) => !shipped.includes(project));
  const rows = composeRows(shipped);

  const entries: IndexEntry[] = projects.map((project) => ({
    slug: project.slug,
    number: numberOf(project),
    name: project.name,
    category: project.category,
    status: project.status,
    statusLabel: copy.status[project.status],
    shortDescription: project.shortDescription,
    cover: project.cover,
  }));

  const onlineCount = projects.filter(isShipped).length;
  const meta = `${onlineCount} online · ${projects.length - onlineCount} en desarrollo`;

  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="py-24 md:py-36">
      <Container>
        <SectionHeader id="proyectos-title" title={copy.projects.title} meta={meta} lede={copy.projects.lede} />

        <div className="mt-14 md:mt-20">
          <ProjectIndex entries={entries} label={copy.projects.indexLabel} noImageLabel={copy.projects.noImage} />
        </div>

        <div className="mt-24 grid gap-20 md:mt-36 md:gap-32">
          {rows.map((row) =>
            row.kind === "pair" ? (
              <div key={row.projects[0].slug} className="grid gap-20 md:grid-cols-12 md:gap-8">
                <ProjectPlate project={row.projects[0]} number={numberOf(row.projects[0])} variant="half" className="md:col-span-7" />
                <ProjectPlate
                  project={row.projects[1]}
                  number={numberOf(row.projects[1])}
                  variant="half"
                  className="md:col-span-5 md:mt-40"
                />
              </div>
            ) : (
              <div key={row.project.slug} className="grid md:grid-cols-12">
                <ProjectPlate
                  project={row.project}
                  number={numberOf(row.project)}
                  variant={row.variant}
                  className={row.variant === "offset" ? "md:col-span-10 md:col-start-3" : "md:col-span-12"}
                />
              </div>
            ),
          )}
        </div>

        {workshop.length > 0 ? (
          <Reveal className="mt-24 grid border border-line md:mt-36 lg:grid-cols-12">
            <div className="border-b border-line p-5 md:p-6 lg:col-span-3 lg:border-r lg:border-b-0">
              <h3 className="font-semiwide text-[clamp(1.5rem,2.4vw,2rem)] leading-none font-bold tracking-[-0.02em]">
                {copy.projects.workshopEyebrow}
              </h3>
              <p className="mt-3 text-sm text-muted">Proyectos que todavía no están publicados.</p>
            </div>
            <ul className="lg:col-span-9">
              {workshop.map((project) => (
                <li key={project.slug} className="border-b border-line last:border-b-0">
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="group grid gap-x-8 gap-y-2 p-5 transition-colors duration-300 hover:bg-plate md:grid-cols-12 md:items-baseline md:p-6"
                  >
                    <span className="label-mono text-faint md:col-span-1">{String(numberOf(project)).padStart(2, "0")}</span>
                    <span className="font-semiwide text-[1.5rem] leading-none font-bold tracking-[-0.02em] md:col-span-3">
                      {project.name}
                    </span>
                    <span className="text-muted md:col-span-5">{project.shortDescription}</span>
                    <span className="flex items-center justify-between gap-4 md:col-span-3 md:justify-end">
                      <StatusBadge status={project.status} />
                      <ArrowRight
                        className="size-4 text-faint transition-transform duration-300 ease-out-expo group-hover:translate-x-1 group-hover:text-paper"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
