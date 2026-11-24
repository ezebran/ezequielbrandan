import type { Experience } from "@/types/content";

/**
 * Experiencia laboral, en el orden en que se muestra (fuente: perfil de LinkedIn).
 * No incluir detalles internos de sistemas de clientes.
 */
export const experience: Experience[] = [
  {
    id: "galicia-seguros",
    company: "Galicia Seguros",
    role: "Frontend Developer React",
    period: "Nov 2023 — Actualidad",
    current: true,
    location: "Remoto · Argentina",
    summary:
      "Desarrollo frontend en proyectos empresariales, a través de una consultora tecnológica: construcción de interfaces con React y Next.js e integración con APIs.",
    technologies: ["React", "Next.js", "APIs REST"],
  },
  {
    id: "folcode",
    company: "Folcode",
    role: "Frontend Developer Ssr",
    period: "Ago 2022 — Oct 2023",
    location: "Remoto · Argentina",
    highlights: [
      "Desarrollo frontend con React, Next.js, TypeScript, Tailwind y MUI.",
      "Mantenimiento de sistemas e infraestructura.",
      "Trabajo con metodologías ágiles.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "MUI"],
  },
  {
    id: "folcademy",
    company: "Folcademy",
    role: "Mentor del curso de React y Next.js",
    period: "Nov 2022 — Feb 2023",
    location: "Remoto · Jornada parcial",
    highlights: [
      "Mentoría de estudiantes del curso de React y Next.js.",
      "Corrección de entregas y trabajos prácticos.",
    ],
    technologies: ["React", "Next.js"],
  },
  {
    id: "nodo-tecnologico",
    company: "Nodo Tecnológico Santiago del Estero",
    role: "Fullstack Developer",
    period: "Mar 2018 — Ago 2022",
    location: "Presencial · Santiago del Estero",
    highlights: [
      "Desarrollo de landing pages con Sass y Bootstrap.",
      "Desarrollo de sistemas con Laravel y React.",
    ],
    technologies: ["React", "Laravel", "Sass", "Bootstrap"],
  },
  {
    id: "wembii",
    company: "Wembii",
    role: "Frontend Developer",
    period: "Ene 2022 — Jul 2022",
    location: "Remoto · Argentina",
    highlights: ["Desarrollo frontend con React y TypeScript.", "Mantenimiento de sistemas e infraestructura."],
    technologies: ["React", "TypeScript"],
  },
  {
    id: "deuslink",
    company: "Deuslink Software",
    role: "Frontend Tech Leader",
    period: "Jul 2021 — Dic 2021",
    location: "Remoto",
    highlights: [
      "Desarrollo frontend con React, Next.js y TypeScript.",
      "Revisión de pull requests.",
      "Definición de las herramientas de los proyectos.",
      "Participación en el proceso de diseño y en reuniones con clientes.",
    ],
    technologies: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "somos-lumba",
    company: "Somos Lumba",
    role: "Full Stack Developer",
    period: "Jul 2020 — Jun 2021",
    location: "Remoto · Argentina",
    highlights: [
      "Desarrollo frontend con React, Next.js y TypeScript.",
      "Desarrollo backend con Laravel o Node.js y Express.",
      "Landing pages con React, Tailwind o Styled Components.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "Laravel"],
  },
];
