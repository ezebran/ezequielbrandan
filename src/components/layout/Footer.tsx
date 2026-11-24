import { ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { getCopy } from "@/lib/content";

export function Footer() {
  const { footer } = getCopy();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-plate">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-6">
        <p className="label-mono text-muted">
          © {year} {siteConfig.name}
        </p>
        <p className="label-mono text-faint">{footer.built}</p>
        <a
          href="#top"
          className="label-mono inline-flex min-h-11 items-center gap-2 text-muted transition-colors hover:text-paper"
        >
          {footer.top}
          <ArrowUp className="size-3.5" aria-hidden="true" />
        </a>
      </Container>
    </footer>
  );
}
