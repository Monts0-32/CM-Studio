import React from "react";

export default function PageBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="canvas-layer canvas-light absolute inset-0">
        <div className="glow glow-cool-light absolute inset-0" />
        <div className="glow glow-warm-light absolute inset-0" />
      </div>
      <div className="canvas-layer canvas-dark absolute inset-0">
        <div className="glow glow-cool-dark absolute inset-0" />
        <div className="glow glow-warm-dark absolute inset-0" />
      </div>
    </div>
  );
}
