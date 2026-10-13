import { useEffect, useState } from "react";

const KEY = "lumen-theme";

const applyTheme = (theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
};

export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem(KEY);
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}