import { ArrowUpRight, MapPin } from "lucide-react";
import { Availability } from "@/components/ui/Availability";
import { Container } from "@/components/ui/Container";
import { CopyButton } from "@/components/ui/CopyButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";
import { getCopy } from "@/lib/content";

function handle(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

/** Cierre de la página sobre fondo lima. */
export function Contact() {
  const { contact } = getCopy();
  const { email, social, location } = siteConfig;

  const channels = [
    { label: "LinkedIn", href: social.linkedin, Icon: LinkedinIcon },
    { label: "GitHub", href: social.github, Icon: GithubIcon },
  ].filter((channel) => channel.href);

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-signal text-ink selection:bg-ink selection:text-signal">
      <Container className="py-24 md:py-36">
        <Availability onSignal />

        <h2
          id="contacto-title"
          className="font-wide mt-10 text-[clamp(2.5rem,12vw,10.5rem)] leading-[0.82] font-extrabold tracking-[-0.04em] uppercase"
        >
          {contact.title}
        </h2>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-8">
          <div className="min-w-0 md:col-span-7">
            <p className="max-w-[44ch] text-[1.1rem] text-signal-ink">{contact.lede}</p>
            {email ? (
              <div className="mt-8 flex flex-col items-start gap-5">
                <a
                  href={`mailto:${email}`}
                  className="font-semiwide text-[clamp(1.35rem,3.4vw,2.6rem)] leading-tight font-bold tracking-[-0.02em] break-all underline decoration-ink/30 decoration-2 underline-offset-[0.2em] transition-colors hover:decoration-ink focus-visible:outline-ink"
                >
                  {email}
                </a>
                <CopyButton
                  value={email}
                  label={contact.copy}
                  copiedLabel={contact.copied}
                  className="label-mono inline-flex min-h-11 items-center gap-2 border border-ink bg-ink px-4 text-signal transition-colors duration-300 hover:bg-transparent hover:text-ink focus-visible:outline-ink"
                />
              </div>
            ) : (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center gap-3 border border-ink bg-ink px-5 py-3 font-medium text-signal transition-colors duration-300 hover:bg-transparent hover:text-ink focus-visible:outline-ink"
              >
                {contact.linkedinCta}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
          </div>

          <ul className="grid min-w-0 grid-cols-[minmax(0,1fr)] content-end md:col-span-5">
            {channels.map(({ label, href, Icon }) => (
              <li key={label} className="border-t border-ink/25">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-16 items-center justify-between gap-4 py-3 focus-visible:outline-ink"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <Icon className="size-5 shrink-0" />
                    <span className="min-w-0">
                      <span className="label-mono block text-signal-ink">{label}</span>
                      <span className="block truncate font-medium">{handle(href)}</span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-5 shrink-0 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
            <li className="flex min-h-16 items-center gap-4 border-y border-ink/25 py-3">
              <MapPin className="size-5 shrink-0" aria-hidden="true" />
              <span>
                <span className="label-mono block text-signal-ink">{contact.location}</span>
                <span className="block font-medium">
                  {location.city}, {location.country}
                </span>
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
