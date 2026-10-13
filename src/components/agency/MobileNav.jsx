import React from "react";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/agency/ThemeToggle";
import useActiveSection from "@/hooks/useActiveSection";

const ITEMS = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "start", label: "Start" },
];

const IDS = ITEMS.map((item) => item.id);

export default function MobileNav() {
  const active = useActiveSection(IDS);

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border border-ink/12 bg-background/85 p-1 backdrop-blur-xl md:hidden">
      {ITEMS.map((item) => (
        <a key={item.id} href={`#${item.id}`} className="relative rounded-full px-4 py-2 text-xs">
          {active === item.id && (
            <motion.span
              layoutId="mobile-nav-active"
              className="absolute inset-0 rounded-full bg-primary"
              transition={{ type: "spring", stiffness: 400, damping: 34 }}
            />
          )}
          <span className={`relative z-10 ${active === item.id ? "text-primary-foreground" : "text-muted-foreground"}`}>
            {item.label}
          </span>
        </a>
      ))}
      <span className="mx-0.5 h-5 w-px bg-ink/15" />
      <div className="pr-1">
        <ThemeToggle variant="icon" />
      </div>
    </nav>
  );
}