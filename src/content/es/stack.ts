import type { StackGroup } from "@/types/content";

export const stack: StackGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Zustand"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "NestJS", "APIs REST"],
  },
  {
    id: "database",
    title: "Database",
    items: ["MySQL", "Supabase"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    items: ["Vercel", "Hostinger", "Despliegue de aplicaciones web", "SEO técnico"],
  },
  {
    id: "tools",
    title: "Tools",
    items: ["Git", "Axios", "WordPress", "WooCommerce"],
  },
];
