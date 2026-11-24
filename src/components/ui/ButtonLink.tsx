import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

const base =
  "group inline-flex min-h-12 items-center gap-3 border px-5 py-3 text-[0.95rem] font-medium transition-colors duration-300 ease-out-expo";

const variants = {
  primary: "border-signal bg-signal text-ink hover:border-signal-soft hover:bg-signal-soft",
  secondary: "border-line-strong text-paper hover:border-signal hover:text-signal",
} as const;

export function ButtonLink({ href, children, variant = "primary", external, className }: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);
  if (external || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
