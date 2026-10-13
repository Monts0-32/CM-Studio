import React from "react";
import Reveal from "@/components/agency/Reveal";

const STATS = [
  { value: "120+", label: "Small business sites launched" },
  { value: "0.9s", label: "Median load time on our builds" },
  { value: "3–4 wks", label: "Typical call to launch" },
  { value: "9 in 10", label: "Clients still with us after year three" },
];

export default function StatStrip() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink/10 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07} className="bg-background/70 p-6 sm:p-7">
            <p className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}