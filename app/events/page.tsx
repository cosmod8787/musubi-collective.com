import Link from "next/link";

const events = [
  {
    id: 1,
    title: "After Midnight",
    date: "SA 15. MÄR 2026",
    time: "23:00 – Open End",
    venue: "Club der Polnischen Versager",
    city: "Berlin",
    tags: ["Musik", "Performance"],
    accent: "bg-amber",
  },
  {
    id: 2,
    title: "New Wave Sunday",
    date: "SO 29. MÄR 2026",
    time: "16:00 – 22:00",
    venue: "Salon Zur Wilden Renate",
    city: "Berlin",
    tags: ["DJ Set", "Visuelle Kunst"],
    accent: "bg-concrete",
  },
  {
    id: 3,
    title: "Frühlingskollektiv",
    date: "SO 12. APR 2026",
    time: "14:00 – 22:00",
    venue: "RAW-Gelände",
    city: "Berlin",
    tags: ["Gruppenausstellung", "Live-Musik", "Workshop"],
    accent: "bg-red",
  },
  {
    id: 4,
    title: "Offenes Atelier",
    date: "SA 26. APR 2026",
    time: "18:00 – 00:00",
    venue: "Studio Berlin-Mitte",
    city: "Berlin",
    tags: ["Offenes Atelier", "Getränke"],
    accent: "bg-amber",
  },
  {
    id: 5,
    title: "Pride Wave",
    date: "SO 7. JUN 2026",
    time: "22:00 – Open End",
    venue: "Tresor",
    city: "Berlin",
    tags: ["Musik", "Tanz", "Gemeinschaft"],
    accent: "bg-red",
  },
  {
    id: 6,
    title: "Sommersessions",
    date: "SA 4. JUL 2026",
    time: "16:00 – 00:00",
    venue: "Holzmarkt 25",
    city: "Berlin",
    tags: ["Draußen", "Live", "DJ"],
    accent: "bg-concrete",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Header */}
      <section className="px-4 sm:px-6 md:px-16 py-16 sm:py-20 md:py-28 border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-widest uppercase text-muted mb-4">
            Spielzeit 2026
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-8xl text-sand tracking-tight leading-none">
            Veranstaltungen
          </h1>
        </div>
      </section>

      {/* Event Grid */}
      <section className="px-4 sm:px-6 md:px-16 py-10 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 sm:gap-y-16">
            {events.map((event) => (
              <article key={event.id} className="group cursor-pointer">
                <div
                  className={`${event.accent} aspect-[4/3] mb-6 flex items-end p-6 transition-opacity group-hover:opacity-80`}
                >
                  <span className="font-heading text-xl text-sand">
                    {event.title}
                  </span>
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h2 className="font-heading text-xl text-sand leading-tight">
                    {event.title}
                  </h2>
                </div>
                <p className="font-body text-xs tracking-widest uppercase text-muted mb-1">
                  {event.date} · {event.time}
                </p>
                <p className="font-body text-xs tracking-widest uppercase text-concrete mb-5">
                  {event.venue}, {event.city}
                </p>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] tracking-widest uppercase text-muted border border-border px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4 sm:px-6 md:px-16 bg-surface mt-10">
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
