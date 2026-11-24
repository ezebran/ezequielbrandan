import { JsonLd } from "@/components/seo/JsonLd";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Experience } from "@/sections/Experience";
import { Hero } from "@/sections/Hero";
import { Projects } from "@/sections/Projects";
import { Stack } from "@/sections/Stack";

export default function HomePage() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
    </>
  );
}
