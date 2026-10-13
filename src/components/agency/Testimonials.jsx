import React from "react";
import Reveal from "@/components/agency/Reveal";
import SectionHeading from "@/components/agency/SectionHeading";

const QUOTES = [
  {
    quote: "Our old site took forty seconds to load on a phone. The new one is instant, and Fridays are fully booked.",
    name: "Marta Ellis",
    business: "Ellis & Co. Plumbing",
  },
  {
    quote: "We went from taking orders over the phone to taking them online in the same week we launched.",
    name: "Dan Whitfield",
    business: "Harbor & Vine",
  },
  {
    quote: "Everything is explained in plain English, and a real person answers when something needs fixing.",
    name: "Priya Raghavan",
    business: "Bright Lane Bakery",
  },
];

export default function Testimonials() {
  return (
    <section id="studio" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        index="04"
        label="The studio"
        title="Small team, local clients, plain English."
        intro="We take on a handful of businesses at a time, so you always talk to the person doing the work."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {QUOTES.map((q, i) => (
          <Reveal key={q.name} delay={i * 0.1} className="h-full">
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-ink/12 bg-card/60 p-7">
              <blockquote className="font-heading text-lg leading-snug tracking-tight">“{q.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-ink/12 pt-4 text-sm text-muted-foreground">
                <span className="text-foreground">{q.name}</span> · {q.business}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}