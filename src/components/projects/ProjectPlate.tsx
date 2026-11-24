import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getCopy } from "@/lib/content";
import { cn } from "@/lib/cn";
import type { Project } from "@/types/content";
import { DeviceShots } from "./DeviceShots";

export type PlateVariant = "wide" | "half" | "offset";

interface ProjectPlateProps {
  project: Project;
  number: number;
  variant: PlateVariant;
  className?: string;
}

const sizesByVariant: Record<PlateVariant, string> = {
  wide: "(min-width: 1320px) 1240px, (min-width: 768px) calc(100vw - 80px), calc(100vw - 40px)",
  half: "(min-width: 1320px) 720px, (min-width: 768px) 55vw, calc(100vw - 40px)",
  offset: "(min-width: 1320px) 1030px, (min-width: 768px) 80vw, calc(100vw - 40px)",
};

export function ProjectPlate({ project, number, variant, className }: ProjectPlateProps) {
  const copy = getCopy().projects;
  const href = `/proyectos/${project.slug}`;
  const titleId = `plate-${project.slug}`;

  return (
    <Reveal className={className}>
      <article aria-labelledby={titleId} className="group">
        <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
          <DeviceShots project={project} sizes={sizesByVariant[variant]} withMobile={variant !== "half"} />
        </Link>

        <div
          className={cn(
            "grid gap-x-8 gap-y-3 border-b border-line py-5",
            project.gallery?.some((image) => image.device === "mobile") && variant !== "half" ? "mt-[9%] sm:mt-14" : "mt-5",
            variant === "half" ? "" : "md:grid-cols-12",
          )}
        >
          <p className="label-mono text-faint md:col-span-1">{String(number).padStart(2, "0")}</p>
          <div className={variant === "half" ? "" : "md:col-span-7"}>
            <h3 id={titleId} className="font-semiwide text-[clamp(1.5rem,2.6vw,2.25rem)] leading-none font-bold tracking-[-0.02em]">
              <Link href={href} className="hover:text-signal focus-visible:text-signal">
                {project.name}
              </Link>
            </h3>
            <p className="mt-2 max-w-[52ch] text-muted">{project.shortDescription}</p>
          </div>
          <div
            className={cn(
              "flex flex-wrap items-center gap-x-6 gap-y-2",
              variant === "half" ? "" : "md:col-span-4 md:flex-col md:items-end md:justify-between",
            )}
          >
            <StatusBadge status={project.status} />
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                href={href}
                className="label-mono inline-flex min-h-11 items-center gap-2 text-paper transition-colors hover:text-signal"
                aria-label={`${copy.viewProject}: ${project.name}`}
              >
                {copy.viewProject}
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono inline-flex min-h-11 items-center gap-2 text-muted transition-colors hover:text-paper"
                  aria-label={`${copy.visitSite}: ${project.name} (abre en otra pestaña)`}
                >
                  {copy.visitSite}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
