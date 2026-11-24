import { copy as esCopy } from "@/content/es/copy";
import { experience as esExperience } from "@/content/es/experience";
import { projects as esProjects } from "@/content/es/projects";
import { stack as esStack } from "@/content/es/stack";
import type { Locale, Project } from "@/types/content";

/**
 * Punto único de acceso al contenido. Para sumar inglés:
 * crear src/content/en/* con la misma forma y agregar la entrada en `dictionaries`.
 */
const dictionaries = {
  es: { copy: esCopy, projects: esProjects, experience: esExperience, stack: esStack },
} satisfies Record<Locale, unknown>;

export const defaultLocale: Locale = "es";

export function getContent(locale: Locale = defaultLocale) {
  return dictionaries[locale];
}

export function getCopy(locale: Locale = defaultLocale) {
  return dictionaries[locale].copy;
}

export function getProjects(locale: Locale = defaultLocale): Project[] {
  return dictionaries[locale].projects;
}

export function getProject(slug: string, locale: Locale = defaultLocale) {
  const list = getProjects(locale);
  const index = list.findIndex((project) => project.slug === slug);
  if (index === -1) return null;
  const project = list[index] as Project;
  const previous = list[(index - 1 + list.length) % list.length] as Project;
  const next = list[(index + 1) % list.length] as Project;
  return { project, index, previous, next };
}

export function isShipped(project: Project) {
  return project.status === "online";
}
