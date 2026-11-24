import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export function Availability({ className }: { className?: string }) {
  const { available, label, unavailableLabel } = siteConfig.availability;
  return (
    <p className={cn("label-mono inline-flex items-center gap-3 text-paper", className)}>
      <span aria-hidden="true" className="relative flex size-2">
        {available ? (
          <span className="absolute inset-0 animate-ping rounded-full bg-signal opacity-40 motion-reduce:hidden" />
        ) : null}
        <span className={cn("relative size-2 rounded-full", available ? "bg-signal" : "bg-faint")} />
      </span>
      {available ? label : unavailableLabel}
    </p>
  );
}
