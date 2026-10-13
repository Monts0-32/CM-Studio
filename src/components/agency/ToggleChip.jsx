import React from "react";
import { Check } from "lucide-react";

export default function ToggleChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
        active
          ? "border-transparent bg-primary text-primary-foreground"
          : "border-ink/15 bg-background/50 text-muted-foreground hover:-translate-y-0.5 hover:border-ink/35 hover:text-foreground"
      }`}
    >
      {active && <Check className="h-3.5 w-3.5" />}
      {label}
    </button>
  );
}