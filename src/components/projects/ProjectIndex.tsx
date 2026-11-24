"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";
import type { ProjectImage, ProjectStatus } from "@/types/content";

export interface IndexEntry {
  slug: string;
  number: number;
  name: string;
  category: string;
  status: ProjectStatus;
  statusLabel: string;
  shortDescription: string;
  cover?: ProjectImage;
}

interface ProjectIndexProps {
  entries: IndexEntry[];
  label: string;
  noImageLabel: string;
}

/** Índice de obra: cada fila revela la lámina del proyecto en el marco lateral (escritorio). */
export function ProjectIndex({ entries, label, noImageLabel }: ProjectIndexProps) {
  const [activeSlug, setActiveSlug] = useState(entries[0]?.slug);
  const active = entries.find((entry) => entry.slug === activeSlug) ?? entries[0];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <nav aria-label={label} className="lg:col-span-8">
        <ol className="border-t border-signal">
          {entries.map((entry) => {
            const isActive = entry.slug === active?.slug;
            return (
              <li key={entry.slug} className="border-b border-line">
                <Link
                  href={`/proyectos/${entry.slug}`}
                  onMouseEnter={() => setActiveSlug(entry.slug)}
                  onFocus={() => setActiveSlug(entry.slug)}
                  className={cn(
                    "group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 gap-y-1 py-4 transition-[padding,background-color,color] duration-500 ease-out-expo md:grid-cols-[3.5rem_1fr_12rem_9rem] md:py-5",
                    isActive && "lg:bg-signal lg:px-4 lg:text-ink",
                  )}
                >
                  <span
                    className={cn(
                      "label-mono transition-colors",
                      isActive ? "text-faint lg:text-signal-ink" : "text-faint",
                    )}
                  >
                    {String(entry.number).padStart(2, "0")}
                  </span>
                  <span className="font-semiwide text-[clamp(1.35rem,3.2vw,2.5rem)] leading-none font-bold tracking-[-0.02em]">
                    {entry.name}
                  </span>
                  <span className={cn("hidden text-sm md:block", isActive ? "text-muted lg:text-signal-ink" : "text-muted")}>
                    {entry.category}
                  </span>
                  <span
                    className={cn(
                      "label-mono flex items-center justify-end gap-2",
                      isActive ? "text-muted lg:text-signal-ink" : "text-muted",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-[7px] rounded-full border",
                        entry.status === "online" ? "border-signal bg-signal" : "border-signal",
                        isActive && "lg:border-ink",
                        isActive && entry.status === "online" && "lg:bg-ink",
                      )}
                    />
                    <span className="hidden sm:inline">{entry.statusLabel}</span>
                    <span className="sr-only sm:hidden">{entry.statusLabel}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>

      <aside aria-hidden="true" className="hidden lg:col-span-4 lg:block">
        <div className="corner-marks sticky top-24 flex flex-col gap-3 border border-moss-line bg-moss p-3">
          <div className="relative aspect-[4/5] overflow-hidden bg-moss-2">
            <AnimatePresence initial={false} mode="popLayout">
              {active ? (
                <motion.div
                  key={active.slug}
                  className="absolute inset-0"
                  initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
                  animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {active.cover ? (
                    <Image
                      src={active.cover.src}
                      alt=""
                      fill
                      sizes="400px"
                      className="object-cover object-left-top"
                    />
                  ) : (
                    <div className="flex h-full flex-col justify-between p-5">
                      <span className="label-mono text-faint">{noImageLabel}</span>
                      <span className="font-wide text-[2.5rem] leading-[0.9] font-extrabold tracking-[-0.03em] text-moss-line uppercase">
                        {active.name}
                      </span>
                    </div>
                  )}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          {active ? (
            <div className="flex items-start justify-between gap-4 px-1 pb-1">
              <p className="text-sm text-muted">{active.shortDescription}</p>
              <ArrowRight className="mt-1 size-4 shrink-0 text-signal" />
            </div>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
