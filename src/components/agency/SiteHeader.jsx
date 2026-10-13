import React from "react";
import BrandMark from "@/components/agency/BrandMark";
import NavLinks from "@/components/agency/NavLinks";
import MobileNav from "@/components/agency/MobileNav";
import ThemeToggle from "@/components/agency/ThemeToggle";

export default function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" aria-label="CM Studios" className="group inline-flex items-center">
            <BrandMark />
          </a>
          <div className="flex items-center gap-5">
            <NavLinks />
            <a
              href="#start"
              className="hidden rounded-full bg-primary px-4 py-2 text-xs font-medium tracking-wide text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              Start a project
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <MobileNav />
    </>
  );
}