import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Project } from "@/types/content";

interface DeviceShotsProps {
  project: Project;
  /** Valor de `sizes` para la captura de escritorio. */
  sizes: string;
  /** Superpone la captura mobile si existe. */
  withMobile?: boolean;
  priority?: boolean;
  className?: string;
}

/** Lámina: captura de escritorio con la captura mobile superpuesta en la esquina. */
export function DeviceShots({ project, sizes, withMobile = true, priority, className }: DeviceShotsProps) {
  const { cover } = project;
  if (!cover) return null;
  const mobile = withMobile ? project.gallery?.find((image) => image.device === "mobile") : undefined;

  return (
    <div className={cn("relative", className)}>
      <div className="relative aspect-[16/10] overflow-hidden border border-line bg-plate-2">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.015]"
        />
      </div>
      {mobile ? (
        <div className="absolute right-[4%] -bottom-[8%] w-[22%] max-w-[220px] min-w-[84px] overflow-hidden border border-line-strong bg-ink p-1 shadow-[0_24px_48px_-12px_rgb(0_0_0/0.6)]">
          <div className="relative aspect-[390/844] overflow-hidden">
            <Image src={mobile.src} alt={mobile.alt} fill sizes="(min-width: 1024px) 220px, 22vw" className="object-cover object-top" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
