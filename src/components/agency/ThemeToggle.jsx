import React from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/useTheme";

export default function ThemeToggle({ variant = "switch" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 text-foreground transition-colors duration-300 hover:bg-card/70"
      >
        {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
      </button>
    );
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={toggleTheme}
      className="relative flex h-9 w-[4.25rem] shrink-0 items-center rounded-full border border-ink/20 bg-card/50 px-1 transition-colors duration-500 hover:border-ink/35"
    >
      <Sun className="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-muted-foreground" />
      <Moon className="pointer-events-none absolute right-2.5 h-3.5 w-3.5 text-muted-foreground" />
      <motion.span
        className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background"
        initial={false}
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </motion.span>
    </button>
  );
}