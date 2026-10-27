import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import Bloom from "@/components/agency/Bloom";
import PageBackdrop from "@/components/agency/PageBackdrop";

// Override password lives in .env.local as VITE_SITE_LOCK_PASSWORD
// (gitignored — set it in your build environment for production deploys).
const SITE_LOCK_PASSWORD = import.meta.env.VITE_SITE_LOCK_PASSWORD;

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

const rise = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function SiteLock({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  if (!SITE_LOCK_PASSWORD) {
    console.warn(
      "SiteLock: VITE_SITE_LOCK_PASSWORD is not set — no password will unlock the site. Add it to .env.local."
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (SITE_LOCK_PASSWORD && password === SITE_LOCK_PASSWORD) {
      markSiteUnlocked();
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <div className="grain relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-16 sm:px-8">
      <PageBackdrop />
      <div className="relative w-full max-w-2xl">
        <Bloom className="-top-[30rem] right-[-14rem] scale-75" />
        <div className="relative z-10">
          <motion.div
            {...rise(0)}
            className="flex items-center gap-3 border-b border-ink/25 pb-5"
          >
            <span className="h-2 w-2 rounded-full bg-foreground" />
            <p className="text-[0.6rem] uppercase tracking-[0.34em] text-muted-foreground sm:text-xs">
              CM Studios
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

          <motion.form
            {...rise(0.3)}
            onSubmit={handleSubmit}
            className="mt-14 border-t border-ink/15 pt-8"
          >
            <label
              htmlFor="site-lock-password"
              className="text-[0.6rem] uppercase tracking-[0.34em] text-muted-foreground sm:text-xs"
            >
              Site admin override
            </label>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Lock className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="site-lock-password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="Password"
                  className="w-full rounded-full border border-ink/25 bg-card/70 py-3 pl-12 pr-5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Unlock
              </button>
            </div>
            {error && (
              <p className="mt-3 text-sm text-destructive">
                Incorrect password. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}