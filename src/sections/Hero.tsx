import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Availability } from "@/components/ui/Availability";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";
import { getContent, isShipped } from "@/lib/content";

export function Hero() {
  const { copy, projects } = getContent();
  const [firstName, ...rest] = siteConfig.name.split(" ");
  const lastName = rest.join(" ");
  const shipped = projects.filter(isShipped).length;
  const contactHref = siteConfig.email ? `mailto:${siteConfig.email}` : "#contacto";

  const socials = [
    { label: "GitHub", href: siteConfig.social.github, Icon: GithubIcon },
    { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  ].filter((social) => social.href);

  const facts = [
    { label: "Experiencia", value: "Desde 2018" },
    { label: "Stack base", value: siteConfig.focus.join(" / ") },
    { label: "En producción", value: `${shipped} proyectos propios` },
    { label: "Actualmente", value: "Galicia Seguros" },
  ];

  return (
    <section id="inicio" aria-labelledby="hero-title" className="border-b border-line">
      <Container className="pt-8 md:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <Availability />
          <p className="label-mono text-muted">
            {siteConfig.location.coordinates} · {siteConfig.location.city}, {siteConfig.location.countryCode}
          </p>
        </div>

        <h1
          id="hero-title"
          className="font-wide mt-10 text-[clamp(2.5rem,13.4vw,11.5rem)] leading-[0.84] font-extrabold tracking-[-0.04em] uppercase md:mt-14"
        >
          <span className="name-line">
            <span>{firstName}</span>
          </span>
          <span className="name-line text-right">
            <span>{lastName}</span>
          </span>
          <span className="sr-only">
            , {siteConfig.role}. {siteConfig.focus.join(", ")}.
          </span>
        </h1>

        <div className="mt-10 grid gap-10 pb-12 md:mt-14 md:grid-cols-12 md:gap-8 md:pb-16">
          <p className="font-mono text-[0.85rem] leading-relaxed md:col-span-4 lg:col-span-4" aria-hidden="true">
            {siteConfig.role}
            <br />
            <span className="text-muted">{siteConfig.focus.join(" · ")}</span>
          </p>

          <div className="md:col-span-8 lg:col-span-5">
            <p className="font-display max-w-[18ch] text-[clamp(1.6rem,2.8vw,2.4rem)] leading-[1.05] font-semibold tracking-[-0.015em]">
              {copy.hero.claim}
            </p>
            <p className="mt-4 max-w-[48ch] text-muted">{copy.hero.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="#proyectos">
                {copy.hero.primaryCta}
                <ArrowDownRight
                  className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </ButtonLink>
              <ButtonLink href={contactHref} variant="secondary">
                {copy.hero.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          {socials.length > 0 ? (
            <ul className="flex flex-col self-end md:col-span-12 lg:col-span-3" aria-label="Redes">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-mono group flex min-h-11 items-center justify-between gap-4 border-t border-line text-muted transition-colors duration-300 hover:text-paper"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="size-4" />
                      {label}
                    </span>
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>

      <dl className="grid grid-cols-2 gap-px border-t border-line bg-line md:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-ink px-5 py-4 md:px-10">
            <dt className="label-mono text-faint">{fact.label}</dt>
            <dd className="mt-1 font-mono text-[0.8rem] text-paper">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
