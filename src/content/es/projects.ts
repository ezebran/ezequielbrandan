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
    slug: "radios-online",
    name: "Radios Online",
    shortDescription: "Red de cinco directorios de radio online: Argentina, Colombia, Brasil, España y Reino Unido.",
    description:
      "Cinco directorios para escuchar radio en vivo, uno por país. Cada sitio está en el idioma de su audiencia y reúne las emisoras de su mercado. Entre los cinco suman más de 1.000 usuarios diarios.",
    category: "Directorios · 5 países",
    status: "online",
    cover: {
      src: "/projects/radios-argentinas/cover.webp",
      alt: "Portada de Radios Argentinas en Vivo, uno de los cinco directorios de la red.",
      width: 2400,
      height: 1500,
      device: "desktop",
    },
    metrics: [{ label: "Audiencia", value: "Más de 1.000 usuarios diarios entre los cinco sitios" }],
    sites: [
      {
        name: "Radios Argentinas en Vivo",
        url: "https://radiosargentinasenvivo.com.ar",
        market: "Argentina",
        language: "Español",
        image: {
          src: "/projects/radios-argentinas/cover.webp",
          alt: "Portada de Radios Argentinas en Vivo con la grilla de emisoras.",
          width: 2400,
          height: 1500,
          device: "desktop",
        },
      },
      {
        name: "Radios Colombianas",
        url: "https://radioscolombianas.com",
        market: "Colombia",
        language: "Español",
        image: {
          src: "/projects/radios-colombianas/cover.webp",
          alt: "Portada de Radios Colombianas con la grilla de emisoras.",
          width: 2400,
          height: 1500,
          device: "desktop",
        },
      },
      {
        name: "Rádios do Brasil",
        url: "https://radiosdobrasil.com",
        market: "Brasil",
        language: "Portugués",
        image: {
          src: "/projects/radios-brasil/cover.webp",
          alt: "Portada de Rádios do Brasil con la grilla de emisoras y el listado por estado.",
          width: 2400,
          height: 1500,
          device: "desktop",
        },
      },
      {
        name: "Radios Españolas",
        url: "https://radiosespanolas.es",
        market: "España",
        language: "Español",
        image: {
          src: "/projects/radios-espanolas/cover.webp",
          alt: "Portada de Radios Españolas con la grilla de emisoras y el listado por comunidad.",
          width: 2400,
          height: 1500,
          device: "desktop",
        },
      },
      {
        name: "UK Radios Live",
        url: "https://ukradioslive.co.uk",
        market: "Reino Unido",
        language: "Inglés",
        image: {
          src: "/projects/uk-radios/cover.webp",
          alt: "Portada de UK Radios Live con la grilla de emisoras y el listado por región.",
          width: 2400,
          height: 1500,
          device: "desktop",
        },
      },
    ],
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
