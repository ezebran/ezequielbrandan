"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

interface NavItem {
  id: string;
  label: string;
}

export function Navbar({ items }: { items: readonly NavItem[] }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string>(isHome ? "inicio" : "proyectos");
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Sección activa según el scroll (solo en la home).
  useEffect(() => {
    if (!isHome) return;
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        const last = visible[visible.length - 1];
        if (last) setActive(last.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome, items]);

  // Menú mobile: bloquea el scroll, cierra con Escape y mantiene el foco dentro.
  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    document.body.style.overflow = "hidden";
    const focusables = () =>
      Array.from(panelRef.current?.querySelectorAll<HTMLElement>("a, button") ?? []).concat(toggle ?? []);
    focusables()[0]?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const list = focusables();
      const first = list[0];
      const last = list[list.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  // Cierra el menú al pasar a escritorio.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 860px)");
    const onChange = () => query.matches && setOpen(false);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink">
      <div className="mx-auto flex h-16 w-full max-w-[1320px] items-center justify-between gap-6 px-5 md:px-10">
        <Link
          href="/"
          className="font-wide inline-flex min-h-11 items-center text-[0.95rem] font-extrabold tracking-[0.02em] uppercase"
        >
          {siteConfig.shortName}
          <span className="sr-only">, inicio</span>
        </Link>

        <nav aria-label="Principal" className="hidden min-[860px]:block">
          <ul className="flex items-center gap-8">
            {items.map((item) => {
              const current = isHome && active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={href(item.id)}
                    aria-current={current ? "location" : undefined}
                    className={cn(
                      "relative flex items-center gap-2 py-2 text-sm transition-colors duration-300",
                      current ? "text-paper" : "text-muted hover:text-paper",
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-1.5 bg-signal transition-transform duration-300 ease-out-expo",
                        current ? "scale-100" : "scale-0",
                      )}
                    />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="label-mono -mr-2 inline-flex min-h-11 items-center gap-2 px-2 text-paper min-[860px]:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={panelRef}
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between overflow-y-auto border-t border-line bg-ink px-5 pt-6 pb-10 min-[860px]:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav aria-label="Principal mobile">
              <ul className="flex flex-col">
                {items.map((item) => (
                  <li key={item.id} className="border-b border-line">
                    <a
                      href={href(item.id)}
                      onClick={() => setOpen(false)}
                      className="font-wide flex items-center justify-between py-4 text-[clamp(1.75rem,8vw,2.5rem)] leading-none font-extrabold tracking-[-0.02em] uppercase"
                    >
                      {item.label}
                      {isHome && active === item.id ? (
                        <span aria-hidden="true" className="size-2 bg-signal" />
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="label-mono mt-10 text-muted">
              {siteConfig.location.city}, {siteConfig.location.countryCode}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
