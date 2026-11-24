import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/Reveal";
import { DeviceShots } from "@/components/projects/DeviceShots";
import { FactSheet, type Fact } from "@/components/projects/FactSheet";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { siteConfig } from "@/config/site";
import { getCopy, getProject, getProjects } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";
import type { Project } from "@/types/content";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = getProject(slug);
  if (!result) return {};
  const { project } = result;
  const path = `/proyectos/${project.slug}`;
  const images = project.cover
    ? [{ url: project.cover.src, width: project.cover.width, height: project.cover.height, alt: project.cover.alt }]
    : undefined;
  return {
    title: project.name,
    description: project.shortDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      title: `${project.name} · ${siteConfig.name}`,
      description: project.shortDescription,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} · ${siteConfig.name}`,
      description: project.shortDescription,
      ...(images ? { images: images.map((image) => image.url) } : {}),
    },
  };
}

function hostname(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

function TextBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="grid gap-3 border-t border-line pt-5 md:grid-cols-12 md:gap-8">
      <h2 className="label-mono text-signal md:col-span-3">{title}</h2>
      <div className="max-w-[62ch] text-[1.05rem] text-muted md:col-span-9 [&_li]:flex [&_li]:gap-3">{children}</div>
    </Reveal>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true" className="mt-[0.8rem] h-px w-3 shrink-0 bg-faint" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NeighborLink({ project, direction, label }: { project: Project; direction: "previous" | "next"; label: string }) {
  const Icon = direction === "previous" ? ArrowLeft : ArrowRight;
  return (
    <Link
      href={`/proyectos/${project.slug}`}
      className={
        "group flex min-h-40 flex-col justify-between gap-6 bg-ink p-5 transition-colors duration-300 hover:bg-signal hover:text-ink md:p-8 " +
        (direction === "next" ? "md:items-end md:text-right" : "")
      }
    >
      <span className="label-mono inline-flex items-center gap-2 text-signal group-hover:text-signal-ink">
        {direction === "previous" ? <Icon className="size-3.5" aria-hidden="true" /> : null}
        {label}
        {direction === "next" ? <Icon className="size-3.5" aria-hidden="true" /> : null}
      </span>
      <span className="font-wide text-[clamp(1.75rem,4vw,3.5rem)] leading-[0.9] font-extrabold tracking-[-0.03em] uppercase">
        {project.name}
      </span>
    </Link>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const result = getProject(slug);
  if (!result) notFound();
  const { project, index, previous, next } = result;
  const copy = getCopy();
  const t = copy.project;

  const facts: Fact[] = [
    { label: t.status, value: <StatusBadge status={project.status} className="text-paper" /> },
    { label: t.category, value: project.category },
  ];
  if (project.technologies?.length) facts.push({ label: t.technologies, value: project.technologies.join(" · ") });
  if (project.url)
    facts.push({
      label: t.site,
      value: (
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1.5">
          {hostname(project.url)}
          <ArrowUpRight className="size-3.5 shrink-0" aria-hidden="true" />
        </a>
      ),
    });
  if (project.repository)
    facts.push({
      label: t.repository,
      value: (
        <a href={project.repository} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1.5">
          {hostname(project.repository)}
          <ArrowUpRight className="size-3.5 shrink-0" aria-hidden="true" />
        </a>
      ),
    });

  // La primera captura mobile ya se muestra superpuesta a la portada.
  const overlay = project.cover ? project.gallery?.find((image) => image.device === "mobile") : undefined;
  const gallery = (project.gallery ?? []).filter((image) => image !== overlay);
  const isWorkshop = project.status !== "online";
  const hasStory = Boolean(
    project.description ||
      project.problem ||
      project.solution ||
      project.role ||
      project.decisions?.length ||
      project.learnings?.length,
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description ?? project.shortDescription,
    url: absoluteUrl(`/proyectos/${project.slug}`),
    ...(project.url ? { sameAs: project.url } : {}),
    ...(project.cover ? { image: absoluteUrl(project.cover.src) } : {}),
    creator: { "@id": `${siteConfig.url}/#person` },
    inLanguage: siteConfig.locale,
  };

  return (
    <article>
      <JsonLd data={jsonLd} />

      <Container className="pt-8 md:pt-12">
        <Link
          href="/#proyectos"
          className="label-mono inline-flex min-h-11 items-center gap-2 text-muted transition-colors hover:text-paper"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          {t.back}
        </Link>

        <header className="mt-8 grid gap-6 border-t border-signal pt-6 md:mt-12 md:grid-cols-12 md:gap-8">
          <p className="label-mono text-signal md:col-span-1">{String(index + 1).padStart(2, "0")}</p>
          <div className="md:col-span-11">
            <h1 className="font-wide text-[clamp(2.75rem,9vw,8rem)] leading-[0.86] font-extrabold tracking-[-0.04em] uppercase">
              {project.name}
            </h1>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <p className="font-display max-w-[34ch] text-[clamp(1.25rem,2.2vw,1.75rem)] leading-[1.2] font-medium tracking-[-0.01em]">
                {project.shortDescription}
              </p>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center gap-3 border border-signal bg-signal px-5 py-3 font-medium text-ink transition-colors duration-300 hover:border-signal-soft hover:bg-signal-soft"
                >
                  {copy.projects.visitSite}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        </header>
      </Container>

      <Container className="mt-12 md:mt-16">
        {project.cover ? (
          <DeviceShots
            project={project}
            priority
            sizes="(min-width: 1320px) 1240px, (min-width: 768px) calc(100vw - 80px), calc(100vw - 40px)"
          />
        ) : (
          <div className="corner-marks flex aspect-[16/7] flex-col justify-between border border-moss-line bg-moss p-5 md:p-8">
            <span className="label-mono text-faint">{copy.projects.noImage}</span>
            <span aria-hidden="true" className="font-wide text-[clamp(2.5rem,10vw,9rem)] leading-[0.85] font-extrabold tracking-[-0.04em] text-signal uppercase">
              {copy.projects.workshopEyebrow}
            </span>
          </div>
        )}
      </Container>

      {!hasStory ? (
        <Container className={project.cover ? "mt-24 md:mt-32" : "mt-12"}>
          <FactSheet facts={facts} layout="row" />
          {isWorkshop ? <p className="mt-4 text-sm text-muted">{t.workshopNote}</p> : null}
        </Container>
      ) : (
      <Container className="mt-24 grid gap-12 md:mt-32 lg:grid-cols-12 lg:gap-8">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <FactSheet facts={facts} />
            {isWorkshop ? <p className="mt-4 text-sm text-muted">{t.workshopNote}</p> : null}
          </div>
        </aside>

        <div className="grid content-start gap-12 lg:col-span-8">
          {project.description ? (
            <TextBlock title={t.context}>
              <p>{project.description}</p>
            </TextBlock>
          ) : null}
          {project.problem ? (
            <TextBlock title={t.problem}>
              <p>{project.problem}</p>
            </TextBlock>
          ) : null}
          {project.solution ? (
            <TextBlock title={t.solution}>
              <p>{project.solution}</p>
            </TextBlock>
          ) : null}
          {project.role ? (
            <TextBlock title={t.role}>
              <p>{project.role}</p>
            </TextBlock>
          ) : null}
          {project.decisions?.length ? (
            <TextBlock title={t.decisions}>
              <List items={project.decisions} />
            </TextBlock>
          ) : null}
          {project.learnings?.length ? (
            <TextBlock title={t.learnings}>
              <List items={project.learnings} />
            </TextBlock>
          ) : null}
        </div>
      </Container>
      )}

      {gallery.length > 0 ? (
        <Container as="section" aria-labelledby="galeria" className="mt-24 md:mt-32">
          <h2 id="galeria" className="label-mono border-t border-line pt-5 text-faint">
            {t.gallery}
          </h2>
          <ul className="mt-8 flex flex-wrap items-start gap-6">
            {gallery.map((image) => (
              <li
                key={image.src}
                className={
                  "border border-line bg-plate p-1.5 " +
                  (image.device === "mobile" ? "w-[min(100%,320px)]" : "w-full md:w-[calc(50%-12px)]")
                }
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes={image.device === "mobile" ? "320px" : "(min-width: 768px) 50vw, 100vw"}
                  className="h-auto w-full"
                />
              </li>
            ))}
          </ul>
        </Container>
      ) : null}

      <nav aria-label="Otros proyectos" className="mt-24 border-t border-line md:mt-36">
        <div className="mx-auto grid max-w-[1320px] gap-px bg-line md:grid-cols-2">
          <NeighborLink project={previous} direction="previous" label={t.previous} />
          <NeighborLink project={next} direction="next" label={t.next} />
        </div>
      </nav>
    </article>
  );
}
