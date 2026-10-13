import React from "react";
import Reveal from "@/components/agency/Reveal";
import SectionHeading from "@/components/agency/SectionHeading";
import ServiceCard from "@/components/agency/ServiceCard";

const SERVICES = [
  {
    n: "01",
    title: "Websites & Redesigns",
    promise: "A site that looks like the business you actually run — and loads before your customer gives up.",
    outcome: "Most redesigns lift enquiries within the first month.",
    specs: [
      "Bespoke design, no templates",
      "Words, photos and tone sorted with you",
      "Built to load in under a second",
      "Update your own text and photos",
    ],
  },
  {
    n: "02",
    title: "Online Stores",
    promise: "Selling online without the platform headaches, the hidden fees or the lost orders.",
    outcome: "Checkout, stock and delivery handled properly.",
    specs: [
      "Products, photos and variations set up",
      "Payments, delivery and tax rules",
      "Abandoned basket emails",
      "Simple stock and order reporting",
    ],
  },
  {
    n: "03",
    title: "Care & Growth",
    promise: "The site keeps working long after launch day — and keeps showing up in local searches.",
    outcome: "Hosting, fixes and search on one monthly plan.",
    specs: [
      "Hosting, backups and security",
      "Local search and Google profile",
      "Monthly content updates",
      "Same-day fixes when something breaks",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        index="01"
        label="What we do"
        title="Three things, done properly."
        intro="The site, the shop and the upkeep — everything a small business needs online, from one studio."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1} className="h-full">
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}