import React from "react";

export default function Bloom({ className = "" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="bloom absolute -right-[20rem] -top-[24rem] h-[50rem] w-[50rem] rounded-full opacity-90 blur-[70px]" />
      <svg
        className="absolute -bottom-20 -left-12 h-[24rem] w-[24rem] text-ink/5"
        viewBox="0 0 400 400"
        fill="none"
        stroke="currentColor"
      >
        <polygon points="200,40 340,120 340,280 200,360 60,280 60,120" strokeWidth="1" />
        <polygon points="200,92 300,150 300,250 200,308 100,250 100,150" strokeWidth="1" />
      </svg>
    </div>
  );
}