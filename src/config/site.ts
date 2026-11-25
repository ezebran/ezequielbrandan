/** Dominio definitivo del portfolio. */
const primaryUrl = "https://ezequielbrandan.com.ar";

/**
 * URL pública con la que se arman canonical, Open Graph, sitemap y JSON-LD.
 * 1. NEXT_PUBLIC_SITE_URL, si está definida, manda.
 * 2. En producción de Vercel se usa el dominio de producción del proyecto: la URL *.vercel.app
 *    mientras no haya dominio propio, y ezequielbrandan.com.ar en cuanto se conecte.
 * 3. En cualquier otro caso, el dominio definitivo.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (process.env.VERCEL_ENV === "production" && vercelProduction) return `https://${vercelProduction}`;
  return primaryUrl;
}

const url = resolveSiteUrl();

/**
 * Configuración general del sitio.
 * Los campos vacíos ("") se ocultan en la interfaz hasta que se completen.
 */
export const siteConfig = {
  url,
  /** Solo el dominio definitivo se indexa; las URL temporales de Vercel quedan con noindex. */
  indexable: url === primaryUrl,
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
