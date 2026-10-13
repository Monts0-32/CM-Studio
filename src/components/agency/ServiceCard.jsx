import React from "react";

export default function ServiceCard({ service }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-ink/12 bg-card/60 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_28px_60px_-34px_hsl(var(--shade)/0.45)]">
      <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">{service.n}</span>
      <h3 className="mt-6 font-heading text-2xl font-medium tracking-tight sm:text-[1.7rem]">{service.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{service.promise}</p>
      <p className="mt-5 font-heading text-sm tracking-tight text-foreground">{service.outcome}</p>

      <ul className="mt-6 grid gap-2.5 overflow-hidden text-sm text-muted-foreground transition-all duration-500 ease-out md:max-h-0 md:opacity-0 md:group-hover:max-h-48 md:group-hover:opacity-100">
        {service.specs.map((spec) => (
          <li key={spec} className="flex items-start gap-3">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {spec}
          </li>
        ))}
      </ul>
    </div>
  );
}