"use client";

import { useState } from "react";

const ARIAL = '"Arial Narrow", "Helvetica Neue", sans-serif';
const BAYARD = '"Bayard", Georgia, serif';
const MONO = '"Courier New", Courier, monospace';
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
  const [expanded, setExpanded] = useState<number | null>(null);
  const [info, setInfo] = useState(false);
  const [bePart, setBePart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
const event = selected !== null ? events[selected] : null;

  return (
    <div style={{ background: "#000", minHeight: "100vh", fontFamily: ARIAL }}>

      {/* ── Header ── */}
      <header style={{
        background: "#000",
      }}>
        {/* ── Header Zeile ── */}
        <div style={{ padding: "1.5vh 2vw", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", gap: "3vw", alignItems: "flex-start" }}>
            <button
              onClick={() => setInfo(true)}
              style={{ fontFamily: ARIAL, fontSize: "8vw", fontWeight: 900, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#fff", background: "none", border: "none", cursor: "pointer", padding: 0, lineHeight: 1 }}
            >
              INFO
            </button>
          </div>
          <div style={{
            fontFamily: ARIAL,
            fontSize: "8vw",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            color: "#fff",
            whiteSpace: "nowrap",
            lineHeight: 1,
          }}>
            MUSUBI
          </div>
        </div>
      </header>

      {/* ── Main ── */}
      <main>

        {/* ── NEXT EVENT Hero ── */}
        {(() => {
          const ev = events[0];
          return (
            <div style={{ borderBottom: "1px solid #222", padding: "4vw 4vw 5vw" }}>
              {/* Label */}
              <div style={{ marginBottom: "2.5vw" }}>
                <span style={{ fontFamily: MONO, fontSize: "1vw", letterSpacing: "0.3em", textTransform: "uppercase", color: ev.color, opacity: 0.85 }}>
                  — NEXT EVENT
                </span>
              </div>

              {/* Center: Image + Neon-Panel nebeneinander, zentriert */}
              <div style={{ display: "flex", justifyContent: "center", gap: "3vw", alignItems: "stretch" }}>
                {/* Bild */}
                <div style={{ width: "38vw", flexShrink: 0 }}>
                  <img
                    src={ev.poster!}
                    alt={ev.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "grayscale(100%)" }}
                  />
                </div>

                {/* Neon-Panel */}
                <div style={{
                  width: "28vw",
                  background: ev.color,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "2.5vw",
                }}>
                  {/* Titel + Datum/Venue unten */}
                  <div>
                    <span style={{
                      fontFamily: BAYARD, fontSize: "5.5vw", fontWeight: 400,
                      lineHeight: 0.88, letterSpacing: "-0.03em",
                      color: "#000", whiteSpace: "pre-line", display: "block",
                      marginBottom: "1.2em",
                    }}>
                      {ev.title}
                    </span>
                    <span style={{ fontFamily: MONO, fontSize: "1.4vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "#000", opacity: 0.65, display: "block" }}>
                      COMING SOON
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ── Upcoming Events ── */}
        <div style={{ borderBottom: "1px solid #222" }}>
          {/* Label */}
          <div style={{ padding: "3vw 4vw 0" }}>
            <span style={{ fontFamily: MONO, fontSize: "1vw", letterSpacing: "0.3em", textTransform: "uppercase", color: "#fff", opacity: 0.3 }}>
              — UPCOMING
            </span>
          </div>
          {events.slice(1).map((ev, i) => (
            <div key={i} style={{ borderTop: "1px solid #1a1a1a", padding: "2.2vw 4vw", display: "flex", alignItems: "center", gap: "3vw" }}>
              {/* Neon-Punkt */}
              <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: ev.color, flexShrink: 0 }} />
              {/* COMING SOON */}
              <span style={{ fontFamily: MONO, fontSize: "1.2vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", opacity: 0.4, flexShrink: 0, width: "16vw" }}>
                COMING SOON
              </span>
              {/* Titel */}
              <span style={{ fontFamily: ARIAL, fontSize: "2.2vw", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", color: "#fff", lineHeight: 1, flex: 1 }}>
                {ev.title.replace(/\n/g, " ")}
              </span>
            </div>
          ))}
        </div>

      </main>

      {/* ── Footer ── */}
      <footer style={{
        padding: "4vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderTop: "1px solid #222",
        marginTop: "2vw",
      }}>
        <div>
          <div style={{ fontFamily: MONO, fontSize: "0.65vw", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.35, lineHeight: 1.8 }}>
            MUSUBI<br />BERLIN, GERMANY
          </div>
        </div>
        <button
          onClick={() => setBePart(true)}
          style={{
            background: "#fff",
            border: "none",
            cursor: "pointer",
            fontFamily: ARIAL,
            fontSize: "1.4vw",
            fontWeight: 900,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#000",
            padding: "0.6em 1.6em",
            lineHeight: 1,
          }}
        >
          BE PART OF IT
        </button>
        <div style={{ fontFamily: MONO, fontSize: "0.65vw", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.35 }}>
          © 2026
        </div>
      </footer>

      {/* ── Event Vollbild ── */}
      {event && (
        <div style={{ position: "fixed", inset: 0, background: "#000", zIndex: 300, overflow: "hidden", display: "flex", flexDirection: "column", padding: "3vw 4vw" }}>

          {/* ── Top Bar: Pfeil + Datum/Venue ── */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "3vw", flexShrink: 0 }}>
            <button
              onClick={() => setSelected(null)}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: ARIAL, fontSize: "2vw", fontWeight: 900, color: event.color, padding: 0, lineHeight: 1 }}
            >
              ←
            </button>
            <span style={{ fontFamily: MONO, fontSize: "1.5vw", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.4, color: "#fff" }}>
              {event.date} — {event.venue}
            </span>
          </div>

          {/* ── Titel ── */}
          <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <span style={{ fontFamily: BAYARD, fontSize: "5vw", fontWeight: 400, lineHeight: 0.9, letterSpacing: "-0.03em", whiteSpace: "pre-line", color: event.color }}>
                {event.title}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ── Be Part Of It Modal ── */}
      {bePart && (
        <div style={{ position: "fixed", inset: 0, background: "#000", zIndex: 300, display: "flex", flexDirection: "column", padding: "4vw" }}>
          <button
            onClick={() => setBePart(false)}
            style={{
              alignSelf: "flex-start",
              background: "#fff",
              border: "none",
              cursor: "pointer",
              fontFamily: ARIAL,
              fontSize: "2vw",
              fontWeight: 900,
              color: "#000",
              padding: "0.3em 0.8em",
              lineHeight: 1,
              marginBottom: "5vw",
            }}
          >
            ←
          </button>
          <span style={{ fontFamily: ARIAL, fontSize: "8vw", fontWeight: 900, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#fff", lineHeight: 0.9, display: "block", marginBottom: "3vw" }}>
            BE PART<br />OF IT.
          </span>
          <p style={{ fontFamily: BAYARD, fontSize: "1.6vw", lineHeight: 1.8, color: "#fff", opacity: 0.6, maxWidth: "50vw", margin: "0 0 3vw 0" }}>
            You want to join, play, exhibit or just be part of it? Write us.
          </p>
          <a
            href="mailto:fritzcosmod@gmail.com"
            style={{
              alignSelf: "flex-start",
              fontFamily: ARIAL,
              fontSize: "1.2vw",
              fontWeight: 900,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#000",
              background: "#fff",
              textDecoration: "none",
              padding: "0.6em 1.6em",
              lineHeight: 1,
            }}
          >
            fritzcosmod@gmail.com
          </a>
        </div>
      )}

      {/* ── Info Modal ── */}
      {info && (
        <div style={{ position: "fixed", inset: 0, background: "#000", zIndex: 300, display: "flex", flexDirection: "column", overflow: "hidden" }}>

          {/* ── Top Bar ── */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2vw 3vw", flexShrink: 0, borderBottom: "1px solid #1a1a1a" }}>
            <span style={{ fontFamily: ARIAL, fontSize: "5vw", fontWeight: 900, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#fff", lineHeight: 1 }}>
              INFO
            </span>
            <button
              onClick={() => setInfo(false)}
              style={{ fontFamily: ARIAL, fontSize: "5vw", fontWeight: 900, letterSpacing: "-0.04em", textTransform: "uppercase", color: "#fff", background: "none", border: "none", cursor: "pointer", lineHeight: 1, padding: 0 }}
            >
              ✕
            </button>
          </div>

          {/* ── Content: nur Englisch ── */}
          <div style={{ flex: 1, overflowY: "auto", padding: "4vw 6vw", maxWidth: "70vw" }}>
            <p style={{ fontFamily: READABLE, fontSize: "1.65vw", lineHeight: 1.75, color: "#fff", margin: "0 0 1.6em 0" }}>
              Do you know this feeling? The party world feels like it was made for someone else. For people who stand out from the crowd. Who give themselves an air of untouchability. Not looking at anyone — or if they do, very directly, as if you are now worthy of their attention.
            </p>
            <p style={{ fontFamily: READABLE, fontSize: "1.65vw", lineHeight: 1.75, color: "#fff", margin: "0 0 1.6em 0" }}>
              What is it that makes us act this way?
            </p>
            <p style={{ fontFamily: READABLE, fontSize: "1.65vw", lineHeight: 1.75, color: "#fff", margin: "0 0 1.6em 0" }}>
              There is a term for this in sociology: <span style={{ color: "#FF2D78" }}>Social Distinction.</span> It means marking how one differs from others in order to elevate one's own social status above theirs.
            </p>
            <p style={{ fontFamily: READABLE, fontSize: "1.65vw", lineHeight: 1.75, color: "#fff", margin: "0 0 1.6em 0" }}>
              It promotes inequality, envy and self-doubt.
            </p>
            <div style={{ borderTop: "1px solid #FF2D78", margin: "2.5vw 0", opacity: 0.4 }} />
            <p style={{ fontFamily: ARIAL, fontSize: "3.2vw", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", color: "#fff", lineHeight: 1.1, margin: "0 0 0.5em 0" }}>
              We do it differently.
            </p>
            <p style={{ fontFamily: READABLE, fontSize: "1.65vw", lineHeight: 1.75, color: "#fff", opacity: 0.65, margin: 0 }}>
              We act as equals. We are confident and at the same time respectful.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
