import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Las radios se publicaban como proyectos separados; ahora son uno solo.
  async redirects() {
    return ["radios-argentinas-en-vivo", "radios-colombianas", "radios-do-brasil", "radios-espanolas", "uk-radios-live"].map(
      (slug) => ({ source: `/proyectos/${slug}`, destination: "/proyectos/radios-online", permanent: true }),
    );
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
