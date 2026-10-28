import React from "react";

const LOGO_SRC = `${import.meta.env.BASE_URL}cm-logo.png`;

const SIZES = {
  md: { tile: "h-9 w-9 rounded-[0.7rem]", word: "text-sm" },
  sm: { tile: "h-7 w-7 rounded-[0.55rem]", word: "text-xs" },
};

export default function BrandMark({ size = "md" }) {
  const s = SIZES[size];

  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`brand-tile relative flex shrink-0 items-center justify-center overflow-hidden ${s.tile}`}
      >
        <img
          src={LOGO_SRC}
          alt="CM Studios"
          width={320}
          height={320}
          className="relative z-10 h-full w-full object-cover"
        />
      </span>
      <span className={`font-heading font-medium tracking-tight text-muted-foreground ${s.word}`}>
        Studios
      </span>
    </span>
  );
}
