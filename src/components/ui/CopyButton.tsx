"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

interface CopyButtonProps {
  value: string;
  label: string;
  copiedLabel: string;
}

export function CopyButton({ value, label, copiedLabel }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="label-mono inline-flex min-h-11 items-center gap-2 border border-line-strong px-4 text-paper transition-colors duration-300 hover:border-paper"
    >
      {copied ? (
        <Check className="size-4 text-signal" aria-hidden="true" />
      ) : (
        <Copy className="size-4" aria-hidden="true" />
      )}
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
