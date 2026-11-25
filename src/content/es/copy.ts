/**
 * Textos de la interfaz. Al sumar inglés, se crea content/en/copy.ts con la misma forma.
 * TODO: revisar el borrador de "Sobre mí".
 */
export const copy = {
  nav: [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "experiencia", label: "Experiencia" },
    { id: "proyectos", label: "Proyectos" },
    { id: "contacto", label: "Contacto" },
  ],
  hero: {
    claim: "Frontend con criterio de arquitectura.",
    description:
      "Desarrollo interfaces con React y Next.js para proyectos empresariales y construyo productos digitales propios en producción. Hoy estoy llevando ese oficio hacia AI Product Engineering: productos donde la IA es parte de la experiencia.",
    primaryCta: "Ver proyectos",
    secondaryCta: "Contactar",
  },
  about: {
    eyebrow: "Sobre mí",
    title: "Producto y código, a la misma distancia.",
    lead: "Soy desarrollador frontend y estoy llevando mi carrera hacia AI Product Engineering. Trabajo con React, Next.js y TypeScript, y me importa tanto cómo se usa una interfaz como cómo está construida por dentro.",
    columns: [
      {
        label: "En equipo",
        text: "Desde 2018 trabajé en equipos de producto y de software a medida: fui Tech Leader frontend, mentor de un curso de React y Next.js y desarrollador full stack. Hoy, a través de una consultora tecnológica, desarrollo el frontend de proyectos para Galicia Seguros con React, Next.js y APIs.",
      },
      {
        label: "Por mi cuenta",
        text: "En paralelo construyo y publico productos propios: un medio digital, una red de directorios de radio online para Argentina, Colombia, Brasil, España y el Reino Unido, y un proyecto de fútbol. Me llevan a recorrer todo el camino, desde la interfaz hasta la base de datos, el SEO técnico y el despliegue. Ese recorrido completo es el que ahora llevo a productos con IA.",
      },
    ],
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Dónde trabajo",
    current: "Actual",
    projectsLabel: "Proyecto",
    stackLabel: "Stack",
  },
  projects: {
    eyebrow: "Proyectos",
    title: "Obra",
    lede: "Productos propios publicados y en desarrollo. Cada uno tiene su ficha.",
    indexLabel: "Índice de obra",
    workshopEyebrow: "En el taller",
    workshopTitle: "En desarrollo",
    viewProject: "Ver proyecto",
    visitSite: "Visitar sitio",
    noImage: "Sin capturas todavía",
  },
  stack: {
    eyebrow: "Stack",
    title: "Herramientas de trabajo",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Hablemos.",
    lede: "Para proyectos freelance, colaboraciones o una conversación sobre un puesto.",
    copy: "Copiar email",
    copied: "Copiado",
    linkedinCta: "Escribime por LinkedIn",
    location: "Ubicación",
  },
  project: {
    back: "Volver a proyectos",
    context: "Contexto",
    problem: "Problema",
    solution: "Solución",
    role: "Mi participación",
    decisions: "Decisiones técnicas",
    learnings: "Aprendizajes",
    gallery: "Galería",
    status: "Estado",
    category: "Categoría",
    technologies: "Tecnologías",
    site: "Sitio",
    repository: "Código",
    previous: "Anterior",
    next: "Siguiente",
    workshopNote: "Este proyecto está en desarrollo. La ficha se completa a medida que avanza.",
  },
  status: {
    online: "Online",
    "en-desarrollo": "En desarrollo",
    experimental: "Experimental",
  },
  footer: {
    built: "Hecho con Next.js. Publicado en Vercel.",
    top: "Volver arriba",
  },
} as const;

export type Copy = typeof copy;
