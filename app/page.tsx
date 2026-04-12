"use client";

import { useState } from "react";

const BAYARD = '"Bayard", Georgia, serif';
const MONO = '"Courier New", Courier, monospace';
const ARIAL = '"Arial Narrow", "Helvetica Neue", sans-serif';
const READABLE = '"Helvetica Neue", Helvetica, Arial, sans-serif';

const NEON = ["#FF2D78", "#00FFB2", "#FFE600", "#00CFFF", "#FF6B00", "#BF5FFF"];

const events = [
  {
    title: "FOOD\nSLEEP\nSEX\nSHELTER\nBEAUTY",
    poster: "/archive-3.jpg",
    color: NEON[0],
    date: "",
    venue: "",
    lineup: [],
  },
  {
    title: "I NEVER WANTED TO\nBE YOUR WEEKEND LOVER",
    poster: "/archive-1.jpg",
    color: NEON[0],
    date: "",
    venue: "",
    lineup: [],
  },
  {
    title: "YOU NEVER CHANGE THINGS\nBY FIGHTING THE EXISTING\nREALITY.",
    poster: "/photo-2996.jpg",
    color: NEON[0],
    date: "",
    venue: "",
    lineup: [],
  },
  {
    title: "BUILD A NEW MODEL THAT MAKES\nTHE EXISTING MODEL OBSOLETE.",
    poster: "/photo-3041.jpg",
    color: NEON[0],
    date: "",
    venue: "",
    lineup: [],
  },
];

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);
  const [info, setInfo] = useState(false);
  const [bePart, setBePart] = useState(false);
  const event = selected !== null ? events[selected] : null;
  const ev = events[0];

  return (
    <div className="bg-black min-h-screen" style={{ fontFamily: ARIAL }}>

      {/* ── Header ── */}
      <header className="bg-black">
        <div className="flex justify-between items-start px-4 sm:px-[4vw] py-3 sm:py-[1.5vh]">
          <button
            onClick={() => setInfo(true)}
            className="text-[14vw] sm:text-[8vw] font-black uppercase text-white bg-transparent border-none cursor-pointer p-0 leading-none tracking-[-0.04em]"
            style={{ fontFamily: ARIAL }}
          >
            INFO
          </button>
          <div
            className="text-[14vw] sm:text-[8vw] font-black uppercase text-white whitespace-nowrap leading-none tracking-[-0.04em]"
            style={{ fontFamily: ARIAL }}
          >
            MUSUBI
          </div>
        </div>
      </header>

      {/* ── Main ── */}
      <main>

        {/* ── NEXT EVENT Hero ── */}
        <div className="border-b border-[#222] px-4 sm:px-[4vw] pb-8 sm:pb-[5vw] pt-4 sm:pt-[4vw]">
          {/* Label */}
          <div className="mb-4 sm:mb-[2.5vw]">
            <span
              className="text-[10px] sm:text-[clamp(10px,1vw,14px)] tracking-[0.3em] uppercase opacity-85"
              style={{ fontFamily: MONO, color: ev.color }}
            >
              — NEXT EVENT
            </span>
          </div>

          {/* Stack on mobile, side-by-side on md+ */}
          <div className="flex flex-col md:flex-row md:justify-center md:items-stretch gap-4 md:gap-[3vw]">
            {/* Image */}
            <div className="w-full md:w-[38vw] flex-shrink-0">
              <img
                src={ev.poster}
                alt={ev.title}
                className="w-full h-full object-cover block grayscale aspect-[4/3] md:aspect-auto"
              />
            </div>

            {/* Neon Panel */}
            <div
              className="w-full md:w-[28vw] flex flex-col justify-between p-6 sm:p-8 md:p-[2.5vw]"
              style={{ background: ev.color }}
            >
              <div>
                <span
                  className="block mb-6 md:mb-[1.2em] whitespace-pre-line text-[11vw] sm:text-[7vw] md:text-[5.5vw] leading-[0.88] tracking-[-0.03em] text-black font-normal"
                  style={{ fontFamily: BAYARD }}
                >
                  {ev.title}
                </span>
                <span
                  className="block text-[11px] sm:text-[clamp(11px,1.4vw,18px)] tracking-[0.2em] uppercase text-black opacity-65"
                  style={{ fontFamily: MONO }}
                >
                  COMING SOON
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Upcoming Events ── */}
        <div className="border-b border-[#222]">
          <div className="px-4 sm:px-[4vw] pt-6 sm:pt-[3vw] pb-0">
            <span
              className="text-[10px] sm:text-[clamp(10px,1vw,13px)] tracking-[0.3em] uppercase text-white opacity-30"
              style={{ fontFamily: MONO }}
            >
              — UPCOMING
            </span>
          </div>

          {events.slice(1).map((ev, i) => (
            <div
              key={i}
              className="border-t border-[#1a1a1a] px-4 sm:px-[4vw] py-4 md:py-[2.2vw] flex items-center gap-3 md:gap-[3vw]"
            >
              {/* Dot */}
              <div
                className="w-2 h-2 md:w-[0.6vw] md:h-[0.6vw] rounded-full flex-shrink-0"
                style={{ background: ev.color }}
              />
              {/* Coming Soon label */}
              <span
                className="text-[10px] sm:text-[clamp(10px,1.2vw,15px)] tracking-[0.2em] uppercase text-white opacity-40 flex-shrink-0 w-20 sm:w-[16vw]"
                style={{ fontFamily: MONO }}
              >
                COMING SOON
              </span>
              {/* Title */}
              <span
                className="text-[4.5vw] sm:text-[3vw] md:text-[2.2vw] font-black tracking-[-0.03em] uppercase text-white leading-tight flex-1 min-w-0"
                style={{ fontFamily: ARIAL }}
              >
                {ev.title.replace(/\n/g, " ")}
              </span>
            </div>
          ))}
        </div>

      </main>

      {/* ── Footer ── */}
      <footer className="px-4 sm:px-[4vw] py-8 md:py-[4vw] flex flex-col sm:flex-row sm:justify-between sm:items-end border-t border-[#222] mt-4 md:mt-[2vw] gap-6 sm:gap-0">
        <div
          className="text-[10px] md:text-[clamp(10px,0.65vw,11px)] tracking-[0.2em] uppercase opacity-35 leading-relaxed"
          style={{ fontFamily: MONO }}
        >
          MUSUBI<br />BERLIN, GERMANY
        </div>
        <button
          onClick={() => setBePart(true)}
          className="bg-white border-none cursor-pointer font-black tracking-[0.05em] uppercase text-black text-sm md:text-[1.4vw] px-6 py-3 leading-none self-start sm:self-auto"
          style={{ fontFamily: ARIAL }}
        >
          BE PART OF IT
        </button>
        <div
          className="text-[10px] md:text-[clamp(10px,0.65vw,11px)] tracking-[0.2em] uppercase opacity-35"
          style={{ fontFamily: MONO }}
        >
          © 2026
        </div>
      </footer>

      {/* ── Event Vollbild ── */}
      {event && (
        <div className="fixed inset-0 bg-black z-[300] overflow-hidden flex flex-col p-4 sm:p-[3vw_4vw]">
          <div className="flex items-center justify-between mb-8 md:mb-[3vw] flex-shrink-0">
            <button
              onClick={() => setSelected(null)}
              className="text-[8vw] md:text-[2vw] font-black bg-transparent border-none cursor-pointer p-0 leading-none"
              style={{ color: event.color, fontFamily: ARIAL }}
            >
              ←
            </button>
            <span
              className="text-[10px] md:text-[1.5vw] tracking-[0.2em] uppercase opacity-40 text-white"
              style={{ fontFamily: MONO }}
            >
              {event.date} — {event.venue}
            </span>
          </div>
          <div className="flex flex-1 min-h-0 items-start">
            <span
              className="text-[9vw] md:text-[5vw] font-normal leading-[0.9] tracking-[-0.03em] whitespace-pre-line"
              style={{ fontFamily: BAYARD, color: event.color }}
            >
              {event.title}
            </span>
          </div>
        </div>
      )}

      {/* ── Be Part Of It Modal ── */}
      {bePart && (
        <div className="fixed inset-0 bg-black z-[300] flex flex-col p-4 sm:p-[4vw]">
          <button
            onClick={() => setBePart(false)}
            className="self-start bg-white border-none cursor-pointer font-black text-black text-base md:text-[2vw] px-4 py-2 leading-none mb-10 md:mb-[5vw]"
            style={{ fontFamily: ARIAL }}
          >
            ←
          </button>
          <span
            className="text-[13vw] sm:text-[8vw] font-black uppercase text-white leading-[0.9] block mb-6 tracking-[-0.04em]"
            style={{ fontFamily: ARIAL }}
          >
            BE PART<br />OF IT.
          </span>
          <p
            className="text-sm sm:text-base md:text-[1.6vw] leading-relaxed text-white opacity-60 max-w-sm md:max-w-[50vw] mb-8"
            style={{ fontFamily: BAYARD }}
          >
            You want to join, play, exhibit or just be part of it? Write us.
          </p>
          <a
            href="mailto:fritzcosmod@gmail.com"
            className="self-start font-black tracking-[0.1em] uppercase text-black bg-white no-underline text-xs md:text-[1.2vw] px-6 py-3 leading-none"
            style={{ fontFamily: ARIAL }}
          >
            fritzcosmod@gmail.com
          </a>
        </div>
      )}

      {/* ── Info Modal ── */}
      {info && (
        <div className="fixed inset-0 bg-black z-[300] flex flex-col overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-[3vw] py-4 sm:py-[2vw] flex-shrink-0 border-b border-[#1a1a1a]">
            <span
              className="text-[10vw] sm:text-[5vw] font-black uppercase text-white leading-none tracking-[-0.04em]"
              style={{ fontFamily: ARIAL }}
            >
              INFO
            </span>
            <button
              onClick={() => setInfo(false)}
              className="text-[10vw] sm:text-[5vw] font-black uppercase text-white bg-transparent border-none cursor-pointer leading-none p-0 tracking-[-0.04em]"
              style={{ fontFamily: ARIAL }}
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-[6vw] py-8 sm:py-[4vw] max-w-full md:max-w-[70vw]">
            <p
              className="text-sm sm:text-base md:text-[1.65vw] leading-[1.75] text-white mb-5 md:mb-[1.6em]"
              style={{ fontFamily: READABLE }}
            >
              Do you know this feeling? The party world feels like it was made for someone else. For people who stand out from the crowd. Who give themselves an air of untouchability. Not looking at anyone — or if they do, very directly, as if you are now worthy of their attention.
            </p>
            <p
              className="text-sm sm:text-base md:text-[1.65vw] leading-[1.75] text-white mb-5 md:mb-[1.6em]"
              style={{ fontFamily: READABLE }}
            >
              What is it that makes us act this way?
            </p>
            <p
              className="text-sm sm:text-base md:text-[1.65vw] leading-[1.75] text-white mb-5 md:mb-[1.6em]"
              style={{ fontFamily: READABLE }}
            >
              There is a term for this in sociology:{" "}
              <span style={{ color: "#FF2D78" }}>Social Distinction.</span> It means marking how one differs from others in order to elevate one&apos;s own social status above theirs.
            </p>
            <p
              className="text-sm sm:text-base md:text-[1.65vw] leading-[1.75] text-white mb-5 md:mb-[1.6em]"
              style={{ fontFamily: READABLE }}
            >
              It promotes inequality, envy and self-doubt.
            </p>
            <div className="border-t border-[#FF2D78] my-8 md:my-[2.5vw] opacity-40" />
            <p
              className="text-2xl sm:text-3xl md:text-[3.2vw] font-black uppercase text-white leading-[1.1] tracking-[-0.03em] mb-2"
              style={{ fontFamily: ARIAL }}
            >
              We do it differently.
            </p>
            <p
              className="text-sm sm:text-base md:text-[1.65vw] leading-[1.75] text-white opacity-65"
              style={{ fontFamily: READABLE }}
            >
              We act as equals. We are confident and at the same time respectful.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
