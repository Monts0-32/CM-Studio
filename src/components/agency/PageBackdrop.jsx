import React from "react";

export default function PageBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="canvas-layer canvas-light absolute inset-0">
        <div className="glow-cool-light absolute -right-48 -top-64 h-[52rem] w-[52rem] rounded-full blur-[90px]" />
        <div className="glow-warm-light absolute -bottom-56 -left-40 h-[38rem] w-[38rem] rounded-full blur-[90px]" />
      </div>
      <div className="canvas-layer canvas-dark absolute inset-0">
        <div className="glow-cool-dark absolute -right-48 -top-64 h-[52rem] w-[52rem] rounded-full blur-[90px]" />
        <div className="glow-warm-dark absolute -bottom-56 -left-40 h-[38rem] w-[38rem] rounded-full blur-[90px]" />
      </div>
    </div>
  );
}