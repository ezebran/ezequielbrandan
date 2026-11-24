import { getCopy } from "@/lib/content";
import { cn } from "@/lib/cn";
import type { ProjectStatus } from "@/types/content";

export function StatusBadge({ status, className }: { status: ProjectStatus; className?: string }) {
  const label = getCopy().status[status];
  return (
    <span className={cn("label-mono inline-flex items-center gap-2 text-muted", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "size-[7px] rounded-full border",
          status === "online" ? "border-paper bg-paper" : "border-signal bg-transparent",
        )}
      />
      {label}
    </span>
  );
}
