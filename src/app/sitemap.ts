import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    ...getProjects().map((project) => ({
      url: absoluteUrl(`/proyectos/${project.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: project.status === "online" ? 0.8 : 0.5,
    })),
  ];
}
