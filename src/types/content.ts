export type Locale = "es";

export type ProjectStatus = "online" | "en-desarrollo" | "experimental";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Encuadre de la captura. Las capturas mobile se superponen a las de escritorio. */
  device: "desktop" | "mobile";
}

export interface Project {
  slug: string;
  name: string;
  /** Una línea. Se usa en el índice, las láminas y la metadata. */
  shortDescription: string;
  /** Descripción completa. Se muestra como "Contexto" en la página del proyecto. */
  description?: string;
  category: string;
  status: ProjectStatus;
  cover?: ProjectImage;
  gallery?: ProjectImage[];
  technologies?: string[];
  url?: string;
  repository?: string;
  /** Mi participación. */
  role?: string;
  problem?: string;
  solution?: string;
  decisions?: string[];
  learnings?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  /** Texto libre, por ejemplo "2023 — Actualidad". Vacío si todavía no se confirmó. */
  period?: string;
  current?: boolean;
  location?: string;
  summary?: string;
  highlights?: string[];
  /** Proyectos destacados dentro del puesto. Solo nombres públicos y confirmados. */
  projects?: string[];
  technologies?: string[];
}

export interface StackGroup {
  id: string;
  title: string;
  items: string[];
}
