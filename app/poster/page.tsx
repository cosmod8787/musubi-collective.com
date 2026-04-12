"use client";

import { useState } from "react";

const variants = [
  { bg: "#ffffff", text: "#0f0f0f", label: "White" },
  { bg: "#0f0f0f", text: "#ffffff", label: "Black" },
  { bg: "#F5E83C", text: "#0f0f0f", label: "Yellow" },
  { bg: "#FF3D8B", text: "#0f0f0f", label: "Pink" },
];

export default function PosterPage() {
  const [active, setActive] = useState(0);
  const v = variants[active];
  const isDark = v.bg === "#0f0f0f" || v.bg === "#FF3D8B";

  return (
    <>
      {/* Controls */}
      <div className="px-6 md:px-16 py-8 border-b border-stone-100 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-stone-400 mb-3">
              Colour
            </p>
            <div className="flex gap-3">
              {variants.map((variant, i) => (
                <button
                  key={variant.label}
                  onClick={() => setActive(i)}
                  title={variant.label}
                  className={`w-8 h-8 border-2 transition-all ${
                    active === i ? "border-black scale-110" : "border-stone-200"
                  }`}
                  style={{ backgroundColor: variant.bg }}
                />
              ))}
            </div>
          </div>
          <button
            onClick={() => window.print()}
            className="font-body text-sm tracking-wider uppercase bg-black text-white px-8 py-3 hover:bg-stone-800 transition-colors"
          >
            Print / Download
          </button>
        </div>
      </div>

      {/* Poster */}
      <div className="flex justify-center items-start px-6 md:px-16 py-12 print:p-0">
        <div
          className="relative w-full max-w-xl overflow-hidden print:max-w-none print:w-screen print:h-screen"
          style={{
            aspectRatio: "1 / 1.414",
            backgroundColor: v.bg,
            color: v.text,
          }}
        >

          {/* Giant rotated background letter */}
          <div
            className="absolute font-heading font-bold select-none pointer-events-none"
            style={{
              fontSize: "clamp(12rem, 45vw, 36rem)",
              lineHeight: 1,
              opacity: 0.055,
              bottom: "-8%",
              right: "-10%",
              color: v.text,
              letterSpacing: "-0.05em",
              transform: "rotate(-8deg)",
            }}
          >
            N
          </div>

          {/* Accent block top-left — off-grid */}
          <div
            className="absolute"
            style={{
              width: "28%",
              height: "3px",
              backgroundColor: "#F5E83C",
              top: "7%",
              left: "8%",
            }}
          />

          {/* Small rotated tag */}
          <p
            className="absolute font-body tracking-widest uppercase"
            style={{
              fontSize: "clamp(0.35rem, 0.7vw, 0.5rem)",
              opacity: 0.45,
              top: "6.5%",
              left: "8%",
              letterSpacing: "0.2em",
              marginTop: "8px",
              color: v.text,
            }}
          >
            est. 2022 — collectiveformatx
          </p>

          {/* Main NO — very large, left-aligned, top */}
          <h1
            className="absolute font-heading font-bold leading-none tracking-tighter"
            style={{
              fontSize: "clamp(5rem, 20vw, 16rem)",
              top: "10%",
              left: "6%",
              color: v.text,
            }}
          >
            NO
          </h1>

          {/* DISTINCTION — shifted right, slightly lower */}
          <h1
            className="absolute font-heading font-bold leading-none tracking-tighter"
            style={{
              fontSize: "clamp(2.2rem, 8.5vw, 6.5rem)",
              top: "30%",
              left: "8%",
              color: v.text,
            }}
          >
            DISTINCTION
          </h1>

          {/* Pink accent line cutting through */}
          <div
            className="absolute"
            style={{
              width: "55%",
              height: "3px",
              backgroundColor: "#FF3D8B",
              top: "46%",
              left: "8%",
            }}
          />

          {/* Vertical text right side */}
          <p
            className="absolute font-body tracking-widest uppercase"
            style={{
              fontSize: "clamp(0.35rem, 0.65vw, 0.5rem)",
              color: v.text,
              opacity: 0.4,
              right: "6%",
              top: "18%",
              writingMode: "vertical-rl",
              letterSpacing: "0.2em",
            }}
          >
            Feel good — not just look good
          </p>

          {/* Tagline — light, medium size */}
          <p
            className="absolute font-heading font-light leading-tight"
            style={{
              fontSize: "clamp(0.9rem, 2.8vw, 2rem)",
              top: "50%",
              left: "8%",
              color: v.text,
              maxWidth: "72%",
            }}
          >
            Feel good,<br />
            <span style={{ fontWeight: 600 }}>not just look good.</span>
          </p>

          {/* Teal block — geometric accent, off-center */}
          <div
            className="absolute"
            style={{
              width: "14%",
              height: "14%",
              backgroundColor: "#00C4B0",
              bottom: "24%",
              right: "8%",
              opacity: isDark ? 0.9 : 1,
            }}
          />

          {/* Manifesto lines — bottom left, stacked tight */}
          <div
            className="absolute"
            style={{
              bottom: "14%",
              left: "8%",
              color: v.text,
            }}
          >
            {[
              "No gatekeeping.",
              "No hierarchy.",
              "No wrong answer.",
            ].map((line) => (
              <p
                key={line}
                className="font-heading font-light"
                style={{
                  fontSize: "clamp(0.55rem, 1.4vw, 1rem)",
                  lineHeight: 1.3,
                  opacity: 0.7,
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Yellow dot — random accent */}
          <div
            className="absolute rounded-full"
            style={{
              width: "clamp(12px, 2.5vw, 20px)",
              height: "clamp(12px, 2.5vw, 20px)",
              backgroundColor: "#F5E83C",
              bottom: "18%",
              left: "52%",
            }}
          />

          {/* Bottom strip */}
          <div
            className="absolute bottom-0 left-0 right-0 flex"
            style={{ height: "3px" }}
          >
            <div style={{ flex: 1, backgroundColor: "#F5E83C" }} />
            <div style={{ flex: 1, backgroundColor: "#FF3D8B" }} />
            <div style={{ flex: 1, backgroundColor: "#00C4B0" }} />
          </div>

        </div>
      </div>

      <style>{`
        @media print {
          @page { margin: 0; size: A2 portrait; }
          body { margin: 0; background: transparent; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </>
  );
}
