import React from "react";
import { motion } from "framer-motion";
import Bloom from "@/components/agency/Bloom";
import PageBackdrop from "@/components/agency/PageBackdrop";

const LOGO_SRC = `${import.meta.env.BASE_URL}cm-logo.png`;

export const isSiteUnlocked = () => {
  try {
    return window.sessionStorage.getItem("cm-studio-site-unlocked") === "true";
  } catch {
    return false;
  }
};

export const markSiteUnlocked = () => {
  try {
    window.sessionStorage.setItem("cm-studio-site-unlocked", "true");
  } catch {
    // Storage unavailable — unlock still lasts for this page session in memory.
  }
};

export const clearSiteUnlocked = () => {
  try {
    window.sessionStorage.removeItem("cm-studio-site-unlocked");
  } catch {
    // Nothing to clear if storage is unavailable.
  }
};

const rise = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function SiteLock() {
  return (
    <div className="grain relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-16 sm:px-8">
      <PageBackdrop />
      <Bloom />
      <div className="relative z-10 w-full max-w-2xl">
        <motion.div
          {...rise(0)}
          className="flex items-center justify-between gap-4 border-b border-ink/25 pb-5"
        >
          <div className="flex items-center gap-3">
            <img
              src={LOGO_SRC}
              alt="CM Studios"
              width={320}
              height={320}
              className="h-9 w-9 rounded-[0.7rem] object-cover"
            />
            <p className="text-[0.6rem] uppercase tracking-[0.34em] text-muted-foreground sm:text-xs">
              CM Studios
            </p>
          </div>
          <p className="text-[0.6rem] uppercase tracking-[0.34em] text-muted-foreground sm:text-xs">
            In development
          </p>
        </motion.div>

        <motion.h1
          {...rise(0.1)}
          className="mt-14 font-heading text-5xl font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-6xl"
        >
          We&rsquo;re sorry
          <span className="ml-3 inline-block h-4 w-4 rounded-full bg-accent sm:h-6 sm:w-6 md:h-8 md:w-8" />
        </motion.h1>
        <motion.p
          {...rise(0.2)}
          className="mt-6 font-heading text-2xl leading-[1.15] tracking-tight text-foreground/85 sm:text-3xl"
        >
          CM Studios is in development.
          <br />
          Please come back later!
        </motion.p>

        <motion.div {...rise(0.3)} className="mt-14 border-t border-ink/15 pt-8">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-foreground" />
            <p className="text-[0.6rem] uppercase tracking-[0.34em] text-muted-foreground sm:text-xs">
              Site access is restricted while development is underway
            </p>
          </div>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            We&rsquo;re putting the finishing touches on the new site. Check back shortly — and thanks
            for your patience.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
