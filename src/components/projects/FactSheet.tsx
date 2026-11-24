import type { ReactNode } from "react";

export interface Fact {
  label: string;
  value: ReactNode;
}

/**
 * Ficha técnica clave/valor. Los hechos sin valor no se pasan.
 * `row` la despliega en columnas, para cuando el proyecto todavía no tiene textos al lado.
 */
export function FactSheet({ facts, layout = "stack" }: { facts: Fact[]; layout?: "stack" | "row" }) {
  if (facts.length === 0) return null;
  if (layout === "row") {
    return (
      <dl className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-ink px-4 py-4">
            <dt className="label-mono text-faint">{fact.label}</dt>
            <dd className="mt-2 min-w-0 text-[0.95rem] break-words text-paper">{fact.value}</dd>
          </div>
        ))}
      </dl>
    );
  }
  return (
    <dl className="border border-line">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="flex items-start justify-between gap-6 border-b border-line px-4 py-3.5 last:border-b-0"
        >
          <dt className="label-mono shrink-0 pt-0.5 text-faint">{fact.label}</dt>
          <dd className="min-w-0 text-right text-[0.95rem] break-words text-paper">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
