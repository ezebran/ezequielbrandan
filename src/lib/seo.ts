import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getCopy, getProjects } from "@/lib/content";

export const defaultTitle = `${siteConfig.name} · ${siteConfig.role}`;
export const defaultDescription = `${siteConfig.name}, ${siteConfig.role} especializado en React, Next.js y TypeScript. Proyectos empresariales y productos digitales propios desde ${siteConfig.location.city}, ${siteConfig.location.country}.`;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: defaultTitle, template: `%s · ${siteConfig.name}` },
  description: defaultDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    siteConfig.name,
    "Senior Frontend Engineer",
    "Desarrollador frontend",
    "React",
    "Next.js",
    "TypeScript",
    siteConfig.location.city,
    "Argentina",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: siteConfig.name,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: { index: true, follow: true },
  formatDetection: { email: false, telephone: false, address: false },
};

export function personJsonLd() {
  const sameAs = [siteConfig.social.linkedin, siteConfig.social.github].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.role,
    description: getCopy().hero.description,
    ...(siteConfig.email ? { email: `mailto:${siteConfig.email}` } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressCountry: siteConfig.location.countryCode,
    },
    knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "NestJS", "SEO técnico"],
    sameAs,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.locale,
    author: { "@id": `${siteConfig.url}/#person` },
    hasPart: getProjects().map((project) => ({
      "@type": "CreativeWork",
      name: project.name,
      url: absoluteUrl(`/proyectos/${project.slug}`),
    })),
  };
}
