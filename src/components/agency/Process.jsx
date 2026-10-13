import React from "react";
import Reveal from "@/components/agency/Reveal";
import SectionHeading from "@/components/agency/SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "A 30-minute call",
    time: "Week 0",
    body: "We look at your current site, your customers and what isn't working. Plain English, no jargon, no obligation.",
  },
  {
    n: "02",
    title: "Fixed scope and quote",
    time: "Week 1",
    body: "You get a written plan — pages, timeline and one fixed price. Nothing moves without you saying so.",
  },
  {
    n: "03",
    title: "Design, build, launch",
    time: "Weeks 2–4",
    body: "We design in the open and you review at each stage, so there are no surprises on launch day.",
  },
  {
    n: "04",
    title: "Care and growth",
    time: "Ongoing",
    body: "Hosting, updates, local search and a monthly note on what's working. One contact, no ticket queues.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        index="03"
        label="How it works"
        title="No surprises, start to finish."
        intro="Four steps, one fixed price, and a launch date you can plan your opening around."
      />
      <div className="mt-14">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="grid gap-4 border-t border-ink/15 py-8 md:grid-cols-[5rem_1.1fr_1.6fr] md:items-baseline">
              <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">{s.n}</span>
              <h3 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">{s.title}</h3>
              <div>
                <p className="text-base leading-relaxed text-muted-foreground">{s.body}</p>
                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground/80">{s.time}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}