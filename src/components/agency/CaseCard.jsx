import React from "react";
import { Image } from "@/components/ui/image";

export default function CaseCard({ item }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/12 bg-card/60">
      <div className="relative overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          className="h-52 w-full transition-transform duration-700 group-hover:scale-[1.04] sm:h-56"
          fittingType="fill"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <p className="text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">{item.kind}</p>
        <h3 className="mt-4 font-heading text-2xl font-medium tracking-tight">{item.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
        <div className="mt-7 grid grid-cols-2 gap-4 border-t border-ink/12 pt-6">
          {item.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-2xl font-semibold tracking-tight">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}