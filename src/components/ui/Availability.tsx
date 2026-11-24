import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

/** `onSignal` invierte los colores para usarlo sobre fondo lima. */
export function Availability({ className, onSignal }: { className?: string; onSignal?: boolean }) {
  const { available, label, unavailableLabel } = siteConfig.availability;
  const dot = onSignal ? "bg-ink" : "bg-signal";
  return (
    <p className={cn("label-mono inline-flex items-center gap-3", onSignal ? "text-ink" : "text-paper", className)}>
      <span aria-hidden="true" className="relative flex size-2">
        {available ? (
          <span className={cn("absolute inset-0 animate-ping rounded-full opacity-40 motion-reduce:hidden", dot)} />
        ) : null}
        <span className={cn("relative size-2 rounded-full", available ? dot : "bg-faint")} />
      </span>
      {available ? label : unavailableLabel}
    </p>
  );
}
