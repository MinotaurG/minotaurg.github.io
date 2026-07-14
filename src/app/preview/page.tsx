"use client";

import { useState } from "react";

type Variant = "1" | "2" | "off";

export default function PreviewPage() {
  const [labyrinth, setLabyrinth] = useState<Variant>("1");
  const [minotaur, setMinotaur] = useState<Variant>("2");
  const [architecture, setArchitecture] = useState<Variant>("2");
  const [geometric, setGeometric] = useState(true);
  const [opacity, setOpacity] = useState(15);

  return (
    <main className="min-h-screen pt-20">
      {/* Controls */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-surface-800/95 backdrop-blur-md border-b border-border px-8 py-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
          <div>
            <p className="text-text-muted font-mono text-xs mb-2">Labyrinth</p>
            <div className="flex gap-1">
              {(["1", "2", "off"] as Variant[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setLabyrinth(v)}
                  className={`px-2 py-1 rounded text-xs ${
                    labyrinth === v
                      ? "bg-gold-500 text-surface-900"
                      : "bg-surface-700 text-text-secondary"
                  }`}
                >
                  {v === "off" ? "Off" : `V${v}`}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-text-muted font-mono text-xs mb-2">Minotaur</p>
            <div className="flex gap-1">
              {(["1", "2", "off"] as Variant[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setMinotaur(v)}
                  className={`px-2 py-1 rounded text-xs ${
                    minotaur === v
                      ? "bg-gold-500 text-surface-900"
                      : "bg-surface-700 text-text-secondary"
                  }`}
                >
                  {v === "off" ? "Off" : `V${v}`}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-text-muted font-mono text-xs mb-2">Architecture</p>
            <div className="flex gap-1">
              {(["1", "2", "off"] as Variant[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setArchitecture(v)}
                  className={`px-2 py-1 rounded text-xs ${
                    architecture === v
                      ? "bg-gold-500 text-surface-900"
                      : "bg-surface-700 text-text-secondary"
                  }`}
                >
                  {v === "off" ? "Off" : `V${v}`}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-text-muted font-mono text-xs mb-2">Geometric</p>
            <button
              onClick={() => setGeometric(!geometric)}
              className={`px-2 py-1 rounded text-xs ${
                geometric
                  ? "bg-gold-500 text-surface-900"
                  : "bg-surface-700 text-text-secondary"
              }`}
            >
              {geometric ? "On" : "Off"}
            </button>
          </div>

          <div>
            <p className="text-text-muted font-mono text-xs mb-2">
              Opacity: {opacity}%
            </p>
            <input
              type="range"
              min="5"
              max="40"
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Hero preview */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 overflow-hidden pt-32">
        <div className="absolute inset-0">
          {/* Labyrinth layer */}
          {labyrinth !== "off" && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(/visuals/labyrinth-${labyrinth}.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: opacity / 100,
              }}
            />
          )}

          {/* Architecture layer */}
          {architecture !== "off" && (
            <div
              className="absolute bottom-0 left-0 right-0 h-2/3"
              style={{
                backgroundImage: `url(/visuals/architecture-${architecture}.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "bottom center",
                opacity: opacity / 100,
                maskImage: "linear-gradient(to top, black 30%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to top, black 30%, transparent 100%)",
              }}
            />
          )}

          {/* Minotaur layer */}
          {minotaur !== "off" && (
            <div
              className="absolute right-0 top-0 bottom-0 w-1/2 md:w-2/5"
              style={{
                backgroundImage: `url(/visuals/minotaur-${minotaur}.jpeg)`,
                backgroundSize: "contain",
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
                opacity: (opacity + 5) / 100,
                maskImage:
                  "linear-gradient(to left, black 40%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to left, black 40%, transparent 100%)",
              }}
            />
          )}

          {/* Geometric overlay */}
          {geometric && (
            <div className="absolute inset-0 opacity-[0.04]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="greek-key"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M0 0h60v15h-45v30h30v-15h-15v-15h30v45h-60z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-gold-400"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#greek-key)" />
              </svg>
            </div>
          )}

          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface-900/90 via-surface-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-900 via-transparent to-surface-900/80" />
        </div>

        {/* Content */}
        <div className="relative max-w-5xl mx-auto w-full">
          <p className="text-gold-400 font-mono text-sm tracking-widest uppercase mb-4">
            Enter the Labyrinth
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-8xl font-black tracking-tight mb-4">
            MinotaurG
          </h1>
          <p className="text-text-secondary text-xl md:text-2xl mb-8 max-w-2xl">
            Software engineer building across TypeScript, Rust, Go, Python, and
            Java. Systems thinker. Product builder. Open-source contributor.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="border border-gold-500 text-gold-400 px-6 py-3 font-medium">
              View Work
            </span>
            <span className="border border-border text-text-secondary px-6 py-3">
              Get in Touch
            </span>
          </div>
        </div>
      </section>

      {/* Recipes */}
      <section className="px-8 py-16 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6">
            Suggested Combinations
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => {
                setLabyrinth("1");
                setMinotaur("2");
                setArchitecture("off");
                setGeometric(true);
                setOpacity(15);
              }}
              className="bg-surface-800 border border-border rounded-lg p-4 text-left hover:border-gold-600 transition-colors"
            >
              <p className="text-gold-400 font-mono text-xs mb-1">Combo A</p>
              <p className="text-text-secondary text-sm">
                Circular labyrinth + smoky minotaur + geometric. Clean and mythic.
              </p>
            </button>
            <button
              onClick={() => {
                setLabyrinth("off");
                setMinotaur("2");
                setArchitecture("2");
                setGeometric(false);
                setOpacity(20);
              }}
              className="bg-surface-800 border border-border rounded-lg p-4 text-left hover:border-gold-600 transition-colors"
            >
              <p className="text-gold-400 font-mono text-xs mb-1">Combo B</p>
              <p className="text-text-secondary text-sm">
                Parthenon base + minotaur. Dramatic, heavy atmosphere.
              </p>
            </button>
            <button
              onClick={() => {
                setLabyrinth("1");
                setMinotaur("off");
                setArchitecture("2");
                setGeometric(true);
                setOpacity(12);
              }}
              className="bg-surface-800 border border-border rounded-lg p-4 text-left hover:border-gold-600 transition-colors"
            >
              <p className="text-gold-400 font-mono text-xs mb-1">Combo C</p>
              <p className="text-text-secondary text-sm">
                Labyrinth + architecture + geometric. No figure, pure environment.
              </p>
            </button>
            <button
              onClick={() => {
                setLabyrinth("1");
                setMinotaur("2");
                setArchitecture("2");
                setGeometric(true);
                setOpacity(12);
              }}
              className="bg-surface-800 border border-border rounded-lg p-4 text-left hover:border-gold-600 transition-colors"
            >
              <p className="text-gold-400 font-mono text-xs mb-1">Combo D</p>
              <p className="text-text-secondary text-sm">
                Everything layered, low opacity. Maximum depth.
              </p>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
