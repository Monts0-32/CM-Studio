import React from "react";
import { motion } from "framer-motion";
import useActiveSection from "@/hooks/useActiveSection";

const ITEMS = [
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "studio", label: "Studio" },
];

const IDS = ITEMS.map((item) => item.id);

export default function NavLinks() {
  const active = useActiveSection(IDS);

  return (
    <nav className="hidden items-center gap-7 md:flex">
      {ITEMS.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group relative py-2 text-sm transition-colors duration-300"
          >
            <span className={isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}>
              {item.label}
            </span>
            {isActive ? (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-x-0 -bottom-0.5 h-px bg-foreground"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            ) : (
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-foreground/40 transition-transform duration-300 group-hover:scale-x-100" />
            )}
          </a>
        );
      })}
    </nav>
  );
}