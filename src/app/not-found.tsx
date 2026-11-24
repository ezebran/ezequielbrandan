import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70dvh] flex-col justify-center py-24">
      <p className="label-mono text-faint">Error 404</p>
      <h1 className="font-wide mt-6 text-[clamp(3rem,12vw,9rem)] leading-[0.85] font-extrabold tracking-[-0.04em] uppercase">
        Sin obra
      </h1>
      <p className="mt-6 max-w-[44ch] text-muted">La página que buscás no existe o cambió de dirección.</p>
      <Link
        href="/"
        className="mt-10 inline-flex min-h-12 w-fit items-center gap-3 border border-paper px-5 py-3 font-medium transition-colors hover:border-signal hover:text-signal"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Volver al inicio
      </Link>
    </Container>
  );
}
