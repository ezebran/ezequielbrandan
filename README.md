# ezequielbrandan.com.ar

Portfolio personal de Ezequiel Brandan, Senior Frontend Engineer.

Next.js (App Router) · React · TypeScript estricto · Tailwind CSS v4 · Motion · Lucide React.
Todo el sitio se genera de forma estática: no usa base de datos, backend, CMS, variables de entorno ni servicios pagos.

## Requisitos

- Node.js 20.9 o superior (probado con Node 22).
- npm.

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio queda en http://localhost:3000.

| Comando             | Qué hace                                      |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo.                        |
| `npm run build`     | Build de producción (todas las páginas estáticas). |
| `npm run start`     | Sirve el build de producción.                  |
| `npm run lint`      | ESLint con las reglas de Next.js.              |
| `npm run typecheck` | Verificación de tipos con TypeScript.          |

## Dónde editar el contenido

No hace falta tocar componentes para cambiar contenido.

| Archivo                          | Contenido                                                          |
| -------------------------------- | ------------------------------------------------------------------ |
| `src/config/site.ts`             | Nombre, dominio, **email**, **GitHub**, LinkedIn, ubicación, disponibilidad. |
| `src/content/es/projects.ts`     | Proyectos: agregar, editar, reordenar o borrar.                    |
| `src/content/es/experience.ts`   | Experiencia laboral.                                               |
| `src/content/es/stack.ts`        | Tecnologías agrupadas por área.                                    |
| `src/content/es/copy.ts`         | Textos de la interfaz (Hero, Sobre mí, Contacto, etc.).            |
| `public/projects/<slug>/`        | Imágenes de cada proyecto (WebP recomendado).                      |

Los campos opcionales que quedan vacíos no se muestran. Por ejemplo, si `email` está vacío, el contacto principal pasa a ser LinkedIn; si `github` está vacío, el enlace no aparece.

### Agregar un proyecto

1. Sumá un objeto al arreglo de `src/content/es/projects.ts` con, como mínimo, `slug`, `name`, `shortDescription`, `category` y `status` (`"online"`, `"en-desarrollo"` o `"experimental"`).
2. Si tiene capturas, copialas a `public/projects/<slug>/` y completá `cover` (y `gallery` si querés). Una captura con `device: "mobile"` se superpone a la portada.
3. La página `/proyectos/<slug>`, el índice, el sitemap y la metadata se generan solos.

Los proyectos `online` con portada aparecen como láminas en la home; el resto aparece en el bloque «En el taller».

### Disponibilidad

En `src/config/site.ts`, `availability.available` prende o apaga el indicador y `availability.label` cambia el texto.

## Estructura

```
src/
├─ app/            rutas, layout, metadata, sitemap, robots, imagen Open Graph
├─ sections/       secciones de la home (Hero, About, Experience, Projects, Stack, Contact)
├─ components/     ui/, layout/, projects/, motion/, seo/
├─ content/es/     contenido en español
├─ config/         configuración del sitio
├─ types/          tipos de contenido
└─ lib/            acceso al contenido, SEO y utilidades
```

Para sumar inglés más adelante: crear `src/content/en/` con la misma forma que `content/es/`, registrarlo en `src/lib/content.ts` y agregar la ruta `/en`.

## SEO

- Metadata por página, Open Graph y Twitter Cards (`src/lib/seo.ts`).
- URLs canónicas basadas en `siteConfig.url`.
- `sitemap.xml` y `robots.txt` generados por Next.js.
- JSON-LD de `Person` y `WebSite` en la home, y de `CreativeWork` en cada proyecto.
- Imagen Open Graph generada en el build (`src/app/opengraph-image.tsx`).
- Fuentes servidas desde el propio dominio con `next/font`.

La URL pública se resuelve en `src/config/site.ts`:

- Si existe `NEXT_PUBLIC_SITE_URL`, se usa esa.
- En producción de Vercel se usa el dominio de producción del proyecto (`VERCEL_PROJECT_PRODUCTION_URL`): la URL `*.vercel.app` mientras no haya dominio propio, y `ezequielbrandan.com.ar` en cuanto se conecte.
- Solo el dominio definitivo se indexa. Con una URL temporal, el sitio sale con `noindex` y `robots.txt` bloquea a los buscadores.

Si cambia el dominio definitivo, actualizá `primaryUrl` en `src/config/site.ts`.

## Subir a GitHub

```bash
git add .
git commit -m "Portfolio inicial"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```

## Deploy en Vercel (plan Hobby)

1. Entrá a https://vercel.com con tu cuenta de GitHub.
2. **Add New → Project** e importá el repositorio.
3. Vercel detecta Next.js solo. No hace falta configurar variables de entorno ni cambiar comandos.
4. **Deploy**. Cada push a `main` publica una versión nueva; cada pull request genera una vista previa.

### Dominio propio

1. En el proyecto de Vercel: **Settings → Domains** y agregá `ezequielbrandan.com.ar` (y `www.ezequielbrandan.com.ar` redirigiendo al dominio principal).
2. Vercel te muestra los registros DNS a cargar en tu proveedor del dominio (para `.com.ar`, NIC Argentina o el DNS que uses).
3. Cuando el dominio verifique, el certificado HTTPS se emite solo.
4. Hacé un **Redeploy** del último deploy de producción: así canonical, sitemap y Open Graph pasan al dominio propio y el sitio empieza a indexarse.

## Checklist antes de publicar

- [ ] Email en `src/config/site.ts`.
- [ ] URL de GitHub en `src/config/site.ts`.
- [ ] Empresa, puesto y período en `src/content/es/experience.ts`.
- [ ] Revisar el borrador de «Sobre mí» en `src/content/es/copy.ts`.
- [ ] Completar rol, tecnologías, problema y decisiones de cada proyecto.
