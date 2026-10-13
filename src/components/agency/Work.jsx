import React from "react";
import Reveal from "@/components/agency/Reveal";
import SectionHeading from "@/components/agency/SectionHeading";
import CaseCard from "@/components/agency/CaseCard";

const CASES = [
  {
    name: "Harbor & Vine",
    kind: "Family restaurant · Website + online orders",
    summary: "A 2014 site rebuilt around takeaway orders, live opening hours and table bookings.",
    stats: [
      { value: "+140%", label: "online orders" },
      { value: "0.4s", label: "load time" },
    ],
    image: "https://media.db.com/images/public/6ace7610a78db8a5eef7e899/1adf652d5_generated_image.png",
    alt: "Abstract frosted glass panels arranged like a website layout",
  },
  {
    name: "Bright Lane Bakery",
    kind: "Bakery · Online store",
    summary: "Weekly specials online, with collection slots and card payments on the doorstep.",
    stats: [
      { value: "+62%", label: "repeat orders" },
      { value: "5 wks", label: "to launch" },
    ],
    image: "https://media.db.com/images/public/6ace7610a78db8a5eef7e899/cf4ffde6e_generated_image.png",
    alt: "Abstract glass product cards floating above a pale blue surface",
  },
  {
    name: "Ellis & Co. Plumbing",
    kind: "Trades · Website + care plan",
    summary: "Emergency callouts, clear pricing and a booking form that reaches the right engineer.",
    stats: [
      { value: "3x", label: "more quote requests" },
      { value: "Top 3", label: "local search" },
    ],
    image: "https://media.db.com/images/public/6ace7610a78db8a5eef7e899/8b6747c75_generated_image.png",
    alt: "Abstract glowing glass waveform on a pale blue background",
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
      <SectionHeading
        index="02"
        label="Selected work"
        title="Small businesses, measured results."
        intro="No jargon, no vanity metrics — just what changed for the owner after launch."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {CASES.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.1} className="h-full">
            <CaseCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}