import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeaderProps {
  id: string;
  title: string;
  /** Dato concreto sobre el contenido de la sección (cantidad, estado). */
  meta?: ReactNode;
  lede?: string;
  className?: string;
}

export function SectionHeader({ id, title, meta, lede, className }: SectionHeaderProps) {
  return (
    <header className={cn("grid gap-6 border-t border-signal pt-6 lg:grid-cols-12 lg:gap-10", className)}>
      <h2
        id={id}
        className="font-wide text-[clamp(2rem,7vw,5rem)] leading-[0.9] font-extrabold tracking-[-0.03em] uppercase lg:col-span-8"
      >
        {title}
      </h2>
      <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end lg:justify-between lg:text-right">
        {meta ? <p className="label-mono text-signal">{meta}</p> : null}
        {lede ? <p className="max-w-[36ch] text-muted">{lede}</p> : null}
      </div>
    </header>
  );
}
