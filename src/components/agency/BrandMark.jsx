import React from "react";

const SIZES = {
  md: { tile: "h-9 w-9 rounded-[0.7rem]", mark: "text-[0.85rem]", word: "text-sm" },
  sm: { tile: "h-7 w-7 rounded-[0.55rem]", mark: "text-[0.68rem]", word: "text-xs" },
};

export default function BrandMark({ size = "md" }) {
  const s = SIZES[size];

  return (
    <span className="flex items-center gap-2.5">
      <span className={`brand-tile relative flex shrink-0 items-center justify-center overflow-hidden ${s.tile}`}>
        <span className={`relative z-10 font-heading font-extrabold leading-none tracking-[-0.02em] ${s.mark}`}>CM</span>
      </span>
      <span className={`font-heading font-medium tracking-tight text-muted-foreground ${s.word}`}>Studios</span>
    </span>
  );
}