import React from "react";
import "./AIVisual.scss";

// A distinct hue per variant so every project/card gets its own look.
const HUES = [243, 268, 199, 287, 161, 222, 18, 330, 142, 256];

/**
 * Animated, 3D-style "AI core" visual used in place of static images/logos.
 * Pure CSS animation (tilted orbital rings + pulsing neural core + orbiting
 * nodes), so it is cheap to render many instances.
 */
export default function AIVisual({variant = 0, size = "card"}) {
  const hue = HUES[variant % HUES.length];
  return (
    <div
      className={`ai-visual ai-visual-${size}`}
      style={{"--ai-hue": hue}}
      aria-hidden="true"
    >
      <div className="ai-visual-grid"></div>
      <div className="ai-stage">
        <div className="ai-ring ai-ring-1"></div>
        <div className="ai-ring ai-ring-2"></div>
        <div className="ai-ring ai-ring-3"></div>
        <div className="ai-core"></div>
        <span className="ai-node ai-node-1"></span>
        <span className="ai-node ai-node-2"></span>
        <span className="ai-node ai-node-3"></span>
        <span className="ai-node ai-node-4"></span>
      </div>
    </div>
  );
}
