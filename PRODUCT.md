# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Fijado por el brief: Next.js (App Router) + React + TypeScript estricto + Tailwind CSS + Motion + Lucide React. Contenido en archivos TypeScript locales; sin base de datos, backend, CMS ni autenticación. Deploy en Vercel Hobby desde GitHub. Dominio: ezequielbrandan.com.ar.

## Users

Recruiters, CTOs, Engineering Managers y empresas tecnológicas evaluando a un candidato frontend senior; también potenciales clientes freelance y colaboradores. Llegan desde LinkedIn, GitHub o un link directo, escanean en minutos y deciden si contactar.

## Product Purpose

Portfolio personal de Ezequiel Brandan. Posicionarlo como **Senior Frontend Engineer | React, Next.js & TypeScript**, mostrando experiencia, criterio de arquitectura y productos digitales construidos. Éxito: el visitante entiende el perfil en segundos, explora al menos un proyecto y llega al contacto (mailto, LinkedIn, GitHub).

## Positioning

Combina experiencia en proyectos empresariales dentro de una consultora tecnológica (incluido un proyecto para Galicia Seguros) con productos digitales propios publicados y en producción: medios, directorios de radio y contenidos deportivos con tráfico real, más productos en desarrollo. Está llevando su carrera de frontend hacia AI Product Engineering; esa transición se comunica como dirección, sin atribuirse experiencia en IA que no esté confirmada.

## Operating Context

- Ubicación: Santiago del Estero, Argentina.
- Idioma inicial: español; arquitectura preparada para sumar inglés más adelante.
- Estado de disponibilidad configurable; valor inicial: "Disponible para proyectos freelance".

## Capabilities and Constraints

- Proyectos y experiencia como datos tipados independientes de los componentes.
- Ruta de detalle `/proyectos/[slug]`; campos vacíos no se renderizan.
- Contacto por `mailto` (sin formulario ni servicios pagos).
- Sin scripts externos innecesarios; prioridad en Core Web Vitals.

## Evidence on Hand

Proyectos reales:
- La Nueva Tele — https://lanuevatele.com.ar (publicado)
- Radios Argentinas en Vivo — https://radiosargentinasenvivo.com.ar (publicado)
- Radios Colombianas — https://radioscolombianas.com (publicado)
- Rádios do Brasil — https://radiosdobrasil.com (publicado)
- Radios Españolas — https://radiosespanolas.es (publicado)
- UK Radios Live — https://ukradioslive.co.uk (publicado)
- MuchoFulbo — https://muchofulbo.com (publicado)
- EventoDe — fotos por QR proyectadas en pantallas durante eventos (en desarrollo)
- PomoMood — Pomodoro con ejercicios de respiración (experimental)

Imágenes: capturas de los sitios en vivo; EventoDe y PomoMood sin material todavía.

Experiencia laboral confirmada desde el perfil de LinkedIn (2018 a la actualidad), cargada en `src/content/es/experience.ts`. Email y GitHub confirmados en `src/config/site.ts`.

**Ausencias que no se deben inventar:** certificaciones, métricas, resultados, nombre de la consultora actual, detalles internos de clientes, rol y stack de cada proyecto propio.

## Product Principles

1. Demostrar, no declarar: los proyectos reales son la prueba.
2. Nada inventado: lo que falta queda como placeholder explícito.
3. Confidencialidad: ningún detalle interno de clientes empresariales.
4. Honestidad de estado: lo que está en desarrollo se presenta como tal.
5. La calidad del propio sitio (performance, accesibilidad, detalle) es parte del argumento.

## Accessibility & Inclusion

WCAG AA de contraste, navegación completa por teclado, foco visible, `prefers-reduced-motion` respetado, sin scroll horizontal de 360px a 1440px.
