import React from "react";
import Reveal from "@/components/agency/Reveal";

export default function SectionHeading({ index, label, title, intro }) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">{index}</span>
          <span className="h-px w-10 bg-ink/25" />
          <span className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground sm:text-xs">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}