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

export function Contact() {
  const { contact } = getCopy();
  const { email, social, location } = siteConfig;

  const channels = [
    { label: "LinkedIn", href: social.linkedin, Icon: LinkedinIcon },
    { label: "GitHub", href: social.github, Icon: GithubIcon },
  ].filter((channel) => channel.href);

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="border-t border-line bg-plate">
      <Container className="py-24 md:py-36">
        <Availability />

        <h2
          id="contacto-title"
          className="font-wide mt-10 text-[clamp(2.5rem,12vw,10.5rem)] leading-[0.82] font-extrabold tracking-[-0.04em] uppercase"
        >
          {contact.title}
        </h2>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-8">
          <div className="min-w-0 md:col-span-7">
            <p className="max-w-[44ch] text-[1.1rem] text-muted">{contact.lede}</p>
            {email ? (
              <div className="mt-8 flex flex-col items-start gap-5">
                <a
                  href={`mailto:${email}`}
                  className="font-semiwide link-underline text-[clamp(1.35rem,3.4vw,2.6rem)] leading-tight font-bold tracking-[-0.02em] break-all"
                >
                  {email}
                </a>
                <CopyButton value={email} label={contact.copy} copiedLabel={contact.copied} />
              </div>
            ) : (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex min-h-12 items-center gap-3 border border-paper bg-paper px-5 py-3 font-medium text-ink transition-colors duration-300 hover:border-signal hover:bg-signal"
              >
                {contact.linkedinCta}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            )}
          </div>

          <ul className="grid min-w-0 grid-cols-[minmax(0,1fr)] content-end md:col-span-5">
            {channels.map(({ label, href, Icon }) => (
              <li key={label} className="border-t border-line">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-16 items-center justify-between gap-4 py-3 transition-colors duration-300 hover:text-signal"
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <Icon className="size-5 shrink-0" />
                    <span className="min-w-0">
                      <span className="label-mono block text-faint">{label}</span>
                      <span className="block truncate text-paper">{handle(href)}</span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-5 shrink-0 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
            <li className="flex min-h-16 items-center gap-4 border-y border-line py-3">
              <MapPin className="size-5 shrink-0" aria-hidden="true" />
              <span>
                <span className="label-mono block text-faint">{contact.location}</span>
                <span className="block text-paper">
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
