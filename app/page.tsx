"use client";

import { useState } from "react";

const ARIAL = '"Arial Narrow", "Helvetica Neue", sans-serif';
const MONO = '"Courier New", Courier, monospace';
const READABLE = '"Helvetica Neue", Helvetica, Arial, sans-serif';
const PINK = "#FF2D78";

const GERDA_PHOTOS = [
  "/gerda/IMG_5867.JPG",
  "/gerda/DSC_6694.JPG",
  "/gerda/IMG_5869.JPG",
  "/gerda/DSC_6734.JPG",
  "/gerda/IMG_5868.JPG",
  "/gerda/DSC_6738.JPG",
  "/gerda/IMG_5767.JPG",
  "/gerda/DSC_6756.JPG",
  "/gerda/IMG_5870.JPG",
  "/gerda/DSC_6759.JPG",
  "/gerda/IMG_5874.JPG",
  "/gerda/DSC_6782.JPG",
  "/gerda/IMG_5875.JPG",
  "/gerda/DSC_6788.JPG",
  "/gerda/IMG_5780.JPG",
  "/gerda/DSC_6790.JPG",
  "/gerda/DSC_6798.JPG",
  "/gerda/DSC_6806.JPG",
  "/gerda/DSC_6822.JPG",
  "/gerda/DSC_6830.JPG",
  "/gerda/DSC_6842.JPG",
];

export default function Home() {
  const [bePart, setBePart] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="bg-black min-h-screen" style={{ fontFamily: ARIAL, color: PINK }}>

      {/* ── Header ── */}
      <header className="flex justify-center items-center px-4 sm:px-[4vw] py-[8vw]">
        <span
          className="text-[18vw] sm:text-[12vw] font-black uppercase leading-none tracking-[-0.04em]"
          style={{ fontFamily: ARIAL, color: PINK }}
        >
          Musubi
        </span>
      </header>

      {/* ── Hero / Manifesto ── */}
      <section className="px-4 sm:px-[4vw] pt-[2vw] pb-[12vw] border-b border-[#1a1a1a] flex justify-center">
        <p
          className="text-[clamp(13px,1.5vw,22px)] leading-[1.9] max-w-[680px] text-center"
          style={{ fontFamily: READABLE, color: PINK }}
        >
          Willkommen bei Musubi.
          <br /><br />
          Kennst du dieses Gefühl? Die Partyszene fühlt sich oft an, als wäre sie für jemand anderen gemacht — für Menschen, die aus der Masse herausstechen, die eine Aura der Unnahbarkeit mit sich tragen. Sie vermeiden es, jemanden anzuschauen, oder wenn doch, starren sie direkt, als wärst du erst jetzt ihrer Aufmerksamkeit würdig.
          <br /><br />
          Was bringt uns dazu, so zu handeln?
          <br /><br />
          In der Soziologie gibt es einen Begriff dafür: <span style={{ fontWeight: "bold" }}>soziale Distinktion.</span> Sie beschreibt, wie Menschen sich von anderen abheben, um ihren eigenen sozialen Status zu erhöhen. Das erzeugt Ungleichheit, Neid und Selbstzweifel.
          <br /><br />
          Wir machen es anders. Wir begegnen uns auf Augenhöhe — selbstbewusst, aber immer respektvoll.
          <br /><br />
          Unsere Floors sind bewusst ohne erhöhte Bereiche gestaltet – keine Backstage-Areas, keine VIP-Tische, kein „besserer Platz" für irgendwen.
          <br /><br />
          Bei uns stehen alle auf derselben Ebene. So entsteht ein Raum, den jede*r gleich nutzen, erleben und betreten kann. Wir feiern gemeinsam statt getrennt – offen, respektvoll und auf Augenhöhe.
        </p>
      </section>

      {/* ── Phase 1 — GERDA ── */}
      <section className="px-4 sm:px-[4vw] pt-[6vw] pb-[10vw]">

        {/* Label */}
        <div className="mb-[4vw]">
          <span
            className="text-[clamp(28px,12vw,160px)] font-black uppercase leading-none tracking-[-0.04em] block"
            style={{ fontFamily: ARIAL, color: PINK }}
          >
            PHASE 1
          </span>
          <span
            className="text-[clamp(14px,3.5vw,52px)] font-black uppercase leading-none tracking-[-0.03em] block mt-2"
            style={{ fontFamily: ARIAL, color: PINK }}
          >
            I never wanted to be your weekend lover
          </span>
        </div>

        {/* Video */}
        <div className="mb-[4vw] flex justify-center">
          <video
            src="/phase1-recap.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-[480px]"
            style={{ mixBlendMode: "screen" }}
          />
        </div>

        {/* Location label */}
        <div className="mb-[3vw]">
          <span
            className="text-[clamp(12px,1.5vw,20px)] uppercase tracking-[0.15em] opacity-60"
            style={{ fontFamily: MONO, color: PINK }}
          >
            Prachtwerk Berlin
          </span>
        </div>

        {/* Masonry photo grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 sm:gap-3">
          {GERDA_PHOTOS.map((src, i) => (
            <div
              key={src}
              className="break-inside-avoid mb-2 sm:mb-3 overflow-hidden cursor-pointer group"
              onClick={() => setLightbox(src)}
            >
              <img
                src={src}
                alt={`Gerda ${i + 1}`}
                className="w-full block transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>

      </section>

      {/* ── Phase 2 ── */}
      <section className="px-4 sm:px-[4vw] pt-[6vw] pb-[10vw] border-t border-[#1a1a1a]">
        <span
          className="text-[clamp(28px,12vw,160px)] font-black uppercase leading-none tracking-[-0.04em] block"
          style={{ fontFamily: ARIAL, color: PINK }}
        >
          PHASE 2
        </span>
        <span
          className="text-[clamp(12px,1.5vw,20px)] uppercase tracking-[0.15em] opacity-60 block mt-3"
          style={{ fontFamily: MONO, color: PINK }}
        >
          Upcoming soon
        </span>
      </section>

      {/* ── Footer ── */}
      <footer className="px-4 sm:px-[4vw] py-8 flex flex-col sm:flex-row sm:justify-between sm:items-end border-t border-[#1a1a1a] gap-6 sm:gap-0">
        <div
          className="text-[10px] tracking-[0.2em] uppercase opacity-60 leading-relaxed"
          style={{ fontFamily: MONO, color: PINK }}
        >
          NO DISTINCTION<br />BERLIN, GERMANY
        </div>
        <button
          onClick={() => setBePart(true)}
          className="border-none cursor-pointer font-black tracking-[0.05em] uppercase text-sm px-6 py-3 leading-none self-start sm:self-auto transition-opacity hover:opacity-70"
          style={{ fontFamily: ARIAL, color: PINK, background: "transparent", outline: `1px solid ${PINK}` }}
        >
          BE PART OF IT
        </button>
        <div
          className="text-[10px] tracking-[0.2em] uppercase opacity-60"
          style={{ fontFamily: MONO, color: PINK }}
        >
          © 2026
        </div>
      </footer>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black z-[400] flex items-center justify-center cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-6 text-3xl font-black bg-transparent border-none cursor-pointer"
            style={{ color: PINK }}
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── Be Part Of It Modal ── */}
      {bePart && (
        <div className="fixed inset-0 bg-black z-[300] flex flex-col p-4 sm:p-[4vw]">
          <button
            onClick={() => setBePart(false)}
            className="self-start border-none cursor-pointer font-black text-base px-4 py-2 leading-none mb-10 bg-transparent"
            style={{ fontFamily: ARIAL, color: PINK }}
          >
            ←
          </button>
          <span
            className="text-[13vw] sm:text-[8vw] font-black uppercase leading-[0.9] block mb-6 tracking-[-0.04em]"
            style={{ fontFamily: ARIAL, color: PINK }}
          >
            BE PART<br />OF IT.
          </span>
          <p
            className="text-sm sm:text-base leading-relaxed opacity-70 max-w-sm mb-8"
            style={{ fontFamily: READABLE, color: PINK }}
          >
            Du willst mitmachen, spielen, ausstellen oder einfach dabei sein? Schreib uns.
          </p>
          <a
            href="mailto:musubi@gmail.com"
            className="self-start font-black tracking-[0.1em] uppercase no-underline text-xs px-6 py-3 leading-none hover:opacity-70 transition-opacity"
            style={{ fontFamily: ARIAL, color: PINK, outline: `1px solid ${PINK}` }}
          >
            musubi@gmail.com
          </a>
        </div>
      )}


    </div>
  );
}
