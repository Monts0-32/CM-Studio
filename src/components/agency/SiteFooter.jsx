import React from "react";
import BrandMark from "@/components/agency/BrandMark";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { label: "Websites & redesigns", href: "#services" },
      { label: "Online stores", href: "#services" },
      { label: "Care & growth", href: "#services" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Selected work", href: "#work" },
      { label: "How we work", href: "#process" },
      { label: "Start a project", href: "#start" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com" },
      { label: "Instagram", href: "https://www.instagram.com" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-ink/15">
      <div className="mx-auto max-w-6xl px-5 pb-28 pt-16 sm:px-8 md:pb-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <BrandMark size="sm" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A small web studio building and looking after websites and online stores for local businesses.
            </p>
            <div className="mt-6 grid gap-2 text-sm">
              <a href="mailto:hello@lumenstudio.co" className="text-foreground transition-colors hover:text-muted-foreground">
                hello@lumenstudio.co
              </a>
              <a href="tel:+442079460000" className="text-foreground transition-colors hover:text-muted-foreground">
                +44 20 7946 0000
              </a>
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">{column.title}</p>
              <ul className="mt-5 grid gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground transition-colors duration-300 hover:text-muted-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink/12 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CM Studios. Built for small businesses.</p>
          <p>Mon–Fri, 9am–6pm</p>
        </div>
      </div>
    </footer>
  );
}