/**
 * Configuración general del sitio.
 * Los campos vacíos ("") se ocultan en la interfaz hasta que se completen.
 */
export const siteConfig = {
  url: "https://ezequielbrandan.com.ar",
  locale: "es-AR",
  name: "Ezequiel Brandan",
  shortName: "E·Brandan",
  role: "Senior Frontend Engineer",
  focus: ["React", "Next.js", "TypeScript"],
  location: {
    city: "Santiago del Estero",
    country: "Argentina",
    countryCode: "AR",
    /** Coordenadas de la ciudad, usadas como detalle editorial en el Hero. */
    coordinates: "27°47′S 64°16′O",
  },
  /** Si se deja vacío, el contacto principal pasa a ser LinkedIn. */
  email: "ezebran@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/ezequiel-brandan-64944962/",
    github: "https://github.com/ezebran",
  },
  availability: {
    /** Cambiar a false para mostrar el indicador apagado. */
    available: true,
    label: "Disponible para proyectos freelance",
    unavailableLabel: "Sin disponibilidad por ahora",
  },
} as const;

export type SiteConfig = typeof siteConfig;
