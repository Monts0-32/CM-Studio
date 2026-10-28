import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Bloom from "@/components/agency/Bloom";

const LOGO_SRC = `${import.meta.env.BASE_URL}cm-logo.png`;

const rise = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <Bloom />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16">
        <motion.div
          {...rise(0)}
          className="flex items-end justify-between gap-6 border-b border-ink/25 pb-5"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-foreground" />
            <p className="text-[0.6rem] uppercase tracking-[0.34em] text-muted-foreground sm:text-xs">
              Independent web studio
            </p>
          </div>
          <div className="hidden text-right sm:block">
            <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">Now</p>
            <p className="mt-1 text-sm text-foreground">Taking on two projects this quarter</p>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <motion.h1
            {...rise(0.1)}
            className="font-heading text-[3.2rem] font-extrabold leading-[0.9] tracking-[-0.045em] sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem]"
          >
            Small business
            <img
              src={LOGO_SRC}
              alt="CM Studios"
              width={320}
              height={320}
              className="logo-dissolve ml-2 hidden h-[4.75rem] w-[4.75rem] object-contain align-[0.02em] sm:inline-block md:hidden lg:inline-block"
            />
          </motion.h1>
          <motion.div {...rise(0.2)} className="md:pb-3">
            <p className="font-heading text-2xl leading-[1.15] tracking-tight text-foreground/85 sm:text-3xl">
              Websites, online stores,
              <br />
              and the care they need.
            </p>
          </motion.div>
        </div>

        <motion.div
          {...rise(0.3)}
          className="mt-14 flex flex-col gap-7 border-t border-ink/15 pt-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We design, build and look after fast, modern websites for local businesses — the kind that get
            found, get trusted, and get ordered from.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#start"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="rounded-full border border-ink/25 px-6 py-3 text-sm text-foreground transition-colors duration-300 hover:bg-card/70"
            >
              See the work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}