import type { Project } from "@/types/content";

/**
 * Proyectos. El orden de este arreglo es el orden en el sitio.
 * Los campos opcionales que no estén definidos no se muestran.
 * TODO: completar role, technologies, problem, solution, decisions, learnings y repository de cada proyecto.
 */
export const projects: Project[] = [
  {
    slug: "la-nueva-tele",
    name: "La Nueva Tele",
    shortDescription: "Portal digital de noticias.",
    category: "Medio digital",
    status: "online",
    url: "https://lanuevatele.com.ar",
    cover: {
      src: "/projects/la-nueva-tele/cover.webp",
      alt: "Portada de La Nueva Tele en escritorio.",
      width: 2400,
      height: 1500,
      device: "desktop",
    },
    gallery: [
      {
        src: "/projects/la-nueva-tele/mobile.webp",
        alt: "La Nueva Tele en un teléfono.",
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
  },
  {
    slug: "radios-argentinas-en-vivo",
    name: "Radios Argentinas en Vivo",
    shortDescription: "Directorio de emisoras de radio online de Argentina.",
    category: "Directorio · Argentina",
    status: "online",
    url: "https://radiosargentinasenvivo.com.ar",
    cover: {
      src: "/projects/radios-argentinas/cover.webp",
      alt: "Portada de Radios Argentinas en Vivo con la grilla de emisoras.",
      width: 2400,
      height: 1500,
      device: "desktop",
    },
  },
  {
    slug: "radios-colombianas",
    name: "Radios Colombianas",
    shortDescription: "Directorio de emisoras online de Colombia.",
    category: "Directorio · Colombia",
    status: "online",
    url: "https://radioscolombianas.com",
    cover: {
      src: "/projects/radios-colombianas/cover.webp",
      alt: "Portada de Radios Colombianas con la grilla de emisoras.",
      width: 2400,
      height: 1500,
      device: "desktop",
    },
  },
  {
    slug: "muchofulbo",
    name: "MuchoFulbo",
    shortDescription: "Proyecto digital de contenidos y actualidad futbolística.",
    category: "Contenidos · Fútbol",
    status: "online",
    url: "https://muchofulbo.com",
    cover: {
      src: "/projects/muchofulbo/cover.webp",
      alt: "Portada de MuchoFulbo con los partidos del día.",
      width: 2400,
      height: 1500,
      device: "desktop",
    },
    gallery: [
      {
        src: "/projects/muchofulbo/mobile.webp",
        alt: "MuchoFulbo en un teléfono.",
        width: 780,
        height: 1688,
        device: "mobile",
      },
    ],
  },
  {
    slug: "eventode",
    name: "EventoDe",
    shortDescription:
      "Plataforma para eventos: las fotos se comparten con un código QR y se proyectan en pantallas durante el evento.",
    description:
      "Plataforma digital para eventos. Permite compartir fotografías mediante códigos QR y visualizarlas en pantallas durante los eventos.",
    category: "Plataforma de eventos",
    status: "en-desarrollo",
  },
  {
    slug: "pomomood",
    name: "PomoMood",
    shortDescription: "Aplicación de productividad basada en la técnica Pomodoro, con ejercicios de respiración.",
    category: "Productividad",
    status: "experimental",
  },
];
