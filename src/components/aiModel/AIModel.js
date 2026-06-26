import React from "react";
import "./AIModel.scss";

/* ============================================================
   Eight genuinely distinct animated "AI models".
   Each is a different geometry/animation (not a recolor).
   All share the site's cool indigo/violet/cyan palette.
   ============================================================ */

// 0 — Neural network graph (pulsing nodes + firing edges)
function NeuralNet() {
  const nodes = [
    [18, 28],
    [50, 14],
    [82, 30],
    [24, 66],
    [54, 56],
    [80, 72]
  ];
  const edges = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [2, 5],
    [3, 4],
    [4, 5],
    [1, 3],
    [4, 2]
  ];
  return (
    <svg
      className="aim-neural"
      viewBox="0 0 100 86"
      preserveAspectRatio="xMidYMid meet"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          className="aim-edge"
          style={{animationDelay: `${i * 0.22}s`}}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="3.6"
          className="aim-nnode"
          style={{animationDelay: `${i * 0.25}s`}}
        />
      ))}
    </svg>
  );
}

// 1 — Rotating wireframe cube (true CSS 3D)
function Cube() {
  return (
    <div className="aim-cube-scene">
      <div className="aim-cube">
        <span className="aim-face aim-face-front"></span>
        <span className="aim-face aim-face-back"></span>
        <span className="aim-face aim-face-right"></span>
        <span className="aim-face aim-face-left"></span>
        <span className="aim-face aim-face-top"></span>
        <span className="aim-face aim-face-bottom"></span>
      </div>
    </div>
  );
}

// 2 — Radar sweep over concentric rings with blips
function Radar() {
  return (
    <div className="aim-radar">
      <span className="aim-radar-ring"></span>
      <span className="aim-radar-ring r2"></span>
      <span className="aim-radar-ring r3"></span>
      <span className="aim-radar-cross"></span>
      <span className="aim-radar-sweep"></span>
      <span className="aim-blip b1"></span>
      <span className="aim-blip b2"></span>
      <span className="aim-blip b3"></span>
    </div>
  );
}

// 3 — Tilted orbital rings with orbiting electrons
function Orbits() {
  return (
    <div className="aim-orbits">
      <span className="aim-oring o1"></span>
      <span className="aim-oring o2"></span>
      <span className="aim-oring o3"></span>
      <span className="aim-ocore"></span>
      <span className="aim-electron e1"></span>
      <span className="aim-electron e2"></span>
      <span className="aim-electron e3"></span>
    </div>
  );
}

// 4 — Linear equalizer / waveform bars
function Equalizer() {
  const bars = Array.from({length: 11});
  return (
    <div className="aim-eq">
      {bars.map((_, i) => (
        <span
          key={i}
          className="aim-bar"
          style={{animationDelay: `${(i % 6) * 0.13}s`}}
        ></span>
      ))}
    </div>
  );
}

// 5 — Document scan: grid of cells lighting up under a moving scan line
function DocScan() {
  const cells = Array.from({length: 24});
  return (
    <div className="aim-doc">
      <div className="aim-doc-grid">
        {cells.map((_, i) => (
          <span
            key={i}
            className="aim-cell"
            style={{
              animationDelay: `${(i % 6) * 0.12 + Math.floor(i / 6) * 0.25}s`
            }}
          ></span>
        ))}
      </div>
      <span className="aim-doc-scan"></span>
    </div>
  );
}

// 6 — Circular audio visualizer (radial bars around a core)
function CircAudio() {
  const bars = Array.from({length: 24});
  return (
    <div className="aim-circ">
      {bars.map((_, i) => (
        <span
          key={i}
          className="aim-cbar"
          style={{
            transform: `rotate(${i * 15}deg) translateY(-30px)`,
            animationDelay: `${i * 0.05}s`
          }}
        ></span>
      ))}
      <span className="aim-circ-core"></span>
    </div>
  );
}

// 7 — Rotating double helix (DNA)
function Helix() {
  const rows = Array.from({length: 11});
  return (
    <div className="aim-helix">
      {rows.map((_, i) => (
        <div
          key={i}
          className="aim-helix-row"
          style={{top: `${i * 9}%`, animationDelay: `${i * -0.18}s`}}
        >
          <span className="aim-helix-dot a"></span>
          <span className="aim-helix-rung"></span>
          <span className="aim-helix-dot b"></span>
        </div>
      ))}
    </div>
  );
}

const MODELS = [
  NeuralNet,
  Cube,
  Radar,
  Orbits,
  Equalizer,
  DocScan,
  CircAudio,
  Helix
];

export default function AIModel({variant = 0, size = "card"}) {
  const idx = ((variant % MODELS.length) + MODELS.length) % MODELS.length;
  const Model = MODELS[idx];
  return (
    <div className={`aim aim-${size} aim-v${idx}`} aria-hidden="true">
      <div className="aim-backdrop"></div>
      <div className="aim-stage">
        <Model />
      </div>
    </div>
  );
}
