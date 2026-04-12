import Link from "next/link";

const works = [
  { title: "Fluss", artist: "Maya Osei", year: "2025", medium: "Installation", accent: "bg-red", size: "tall" },
  { title: "Grenzenlos", artist: "Leon Schreiber", year: "2025", medium: "Fotoreihe", accent: "bg-surface-2", size: "wide" },
  { title: "Puls", artist: "Anisa Khalid", year: "2025", medium: "Video, Klang", accent: "bg-concrete", size: "square" },
  { title: "Wurzelsystem", artist: "Tomás Rivera", year: "2024", medium: "Skulptur", accent: "bg-surface", size: "wide" },
  { title: "Chromatisch", artist: "Zara Chen", year: "2025", medium: "Illustrationsreihe", accent: "bg-amber", size: "tall" },
  { title: "Drift", artist: "Kai Müller", year: "2025", medium: "Klanginstallation", accent: "bg-red", size: "square" },
  { title: "Schwelle", artist: "Noa Levi", year: "2024", medium: "Choreografie, Video", accent: "bg-concrete", size: "wide" },
  { title: "Zweite Haut", artist: "Frida Berger", year: "2025", medium: "Textil, Performance", accent: "bg-surface-2", size: "tall" },
  { title: "Echo", artist: "Maya Osei", year: "2024", medium: "Performance", accent: "bg-amber", size: "square" },
  { title: "Versammlung", artist: "Kollektiv", year: "2025", medium: "Kollaborative Installation", accent: "bg-red", size: "wide" },
  { title: "Raster", artist: "Zara Chen", year: "2024", medium: "Druckreihe", accent: "bg-surface", size: "square" },
  { title: "Stille", artist: "Leon Schreiber", year: "2024", medium: "Fotografie", accent: "bg-concrete", size: "tall" },
];

const sizeMap: Record<string, string> = {
  square: "aspect-square",
  wide: "aspect-[16/9]",
  tall: "aspect-[3/4]",
};

const filters = ["Alle", "Installation", "Fotografie", "Video", "Skulptur", "Illustration", "Klang", "Performance", "Textil"];

export default function WorksPage() {
  return (
    <>
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-16 py-16 sm:py-20 md:py-28 border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-muted mb-4">
              Portfolio
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl text-sand tracking-tight leading-none">
              Werke
            </h1>
          </div>
          <p className="font-body text-sm text-muted max-w-xs leading-relaxed">
            Eine Auswahl von Werken der Kollektiv-Mitglieder und gemeinschaftlichen
            Projekten, 2024–2026.
          </p>
        </div>
      </section>

      {/* Filterleiste */}
      <section className="px-4 sm:px-6 md:px-16 py-4 sm:py-6 border-b border-border sticky top-14 bg-black z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-6 overflow-x-auto">
          {filters.map((filter, i) => (
            <button
              key={filter}
              className={`font-body text-xs tracking-widest uppercase whitespace-nowrap transition-colors ${
                i === 0
                  ? "text-sand border-b border-sand pb-0.5"
                  : "text-muted hover:text-sand"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Werke Grid */}
      <section className="px-4 sm:px-6 md:px-16 py-10 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {works.map((work, i) => (
              <article key={i} className="break-inside-avoid group cursor-pointer">
                <div
                  className={`${work.accent} ${sizeMap[work.size]} w-full mb-3 flex items-end p-5 transition-opacity group-hover:opacity-80 border border-border`}
                >
                  <span className="font-heading text-lg text-sand/30">
                    {work.title}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-heading text-base text-sand">
                      {work.title}
                    </p>
                    <p className="font-body text-xs text-muted">
                      {work.artist} · {work.medium}
                    </p>
                  </div>
                  <span className="font-body text-xs text-concrete mt-0.5">
                    {work.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Auftragsarbeit CTA */}
      <section className="px-4 sm:px-6 md:px-16 py-14 sm:py-20 border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-red mb-4">
              — Auftragsarbeit
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-sand leading-tight">
              Auf der Suche nach etwas,
              <br />
              <span className="underline-red">das für dich gemacht ist?</span>
            </h2>
          </div>
          <Link
            href="/about"
            className="font-body text-xs tracking-widest uppercase bg-red text-sand px-8 py-3 hover:bg-red/80 transition-colors whitespace-nowrap"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4 sm:px-6 md:px-16 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Link href="/" className="font-heading text-xl tracking-widest uppercase text-sand">
            Bridge 'n' Bass
          </Link>
          <p className="font-body text-xs text-concrete">
            Berlin, Deutschland — collectiveformatx@gmail.com
          </p>
          <p className="font-body text-xs text-concrete">© 2026</p>
        </div>
      </footer>
    </>
  );
}
