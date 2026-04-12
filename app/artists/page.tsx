import Link from "next/link";

const artists = [
  {
    name: "Maya Osei",
    medium: "Bildende Kunst, Performance",
    bio: "Maya arbeitet an der Schnittstelle von Körper und Raum. Ihre Installationen ziehen Fremde in gemeinsame Momente, die sie nicht erwartet haben.",
    accent: "bg-amber",
    initial: "MO",
  },
  {
    name: "Leon Schreiber",
    medium: "Fotografie, Film",
    bio: "Dokumentarfotograf und Filmemacher. Leon lichtet die Menschen ab, an denen andere vorbeigehen — und lässt einen innehalten.",
    accent: "bg-concrete",
    initial: "LS",
  },
  {
    name: "Anisa Khalid",
    medium: "Musik, DJ",
    bio: "Anisa macht Musik, die Kulturen verbindet, ohne um Erlaubnis zu fragen. Auf einer Tanzfläche verwandeln ihre Sets Fremde in ein und dieselbe Person.",
    accent: "bg-red",
    initial: "AK",
  },
  {
    name: "Tomás Rivera",
    medium: "Skulptur, Installation",
    bio: "Tomás baut aus dem, was andere wegwerfen. Seine Räume laden ein — zum Berühren, Hinterfragen, und noch ein bisschen länger zu bleiben.",
    accent: "bg-surface",
    initial: "TR",
    textLight: true,
  },
  {
    name: "Zara Chen",
    medium: "Illustration, Grafikdesign",
    bio: "Zara gestaltet die visuelle Identität von Nächten, Alben und Bewegungen. Ihre Arbeit lässt Menschen das Gefühl haben, dazuzugehören, bevor sie überhaupt eingetreten sind.",
    accent: "bg-amber",
    initial: "ZC",
  },
  {
    name: "Kai Müller",
    medium: "Sounddesign, Musik",
    bio: "Kai verwandelt Textur in Klang — von Feldaufnahmen im Wald bis zum Clubboden. Er erschafft den Klangraum, in dem Menschen loslassen.",
    accent: "bg-concrete",
    initial: "KM",
  },
  {
    name: "Noa Levi",
    medium: "Tanz, Choreografie",
    bio: "Noa choreografiert für Bühnen, Straßen und Clubs. Ihre Arbeit erinnert daran, dass Körper genug sind — und dass gemeinsames Bewegen etwas verändert.",
    accent: "bg-red",
    initial: "NL",
  },
  {
    name: "Frida Berger",
    medium: "Textilien, Mode",
    bio: "Frida macht Kleidung, die Geschichten trägt. Was du trägst, ist wie du auftrittst — und sie glaubt, dass jeder verdient, vollständig aufzutreten.",
    accent: "bg-surface-2",
    initial: "FB",
    textLight: true,
  },
];

export default function ArtistsPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-16 py-20 md:py-28 border-b border-border bg-surface">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-widest uppercase text-muted mb-4">
            Das Kollektiv
          </p>
          <h1 className="font-heading text-6xl md:text-8xl text-sand tracking-tight leading-none">
            Künstler:innen
          </h1>
        </div>
      </section>

      {/* Künstler Grid */}
      <section className="px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {artists.map((artist, i) => (
              <article key={i} className="group">
                <div
                  className={`${artist.accent} aspect-[3/4] mb-5 flex items-center justify-center border border-border`}
                >
                  <span className="font-heading text-4xl text-sand/20">
                    {artist.initial}
                  </span>
                </div>
                <h2 className="font-heading text-lg text-sand mb-1">
                  {artist.name}
                </h2>
                <p className="font-body text-[10px] tracking-widest uppercase text-muted mb-3">
                  {artist.medium}
                </p>
                <p className="font-body text-sm text-concrete leading-relaxed">
                  {artist.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mitmachen CTA */}
      <section className="px-6 md:px-16 py-20 md:py-28 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-body text-xs tracking-widest uppercase text-red mb-6">
            — Teil davon werden
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-sand mb-6 leading-tight">
            Keine Türsteher.
            <br />
            Keine Hierarchien.
          </h2>
          <p className="font-body text-sm text-muted max-w-md mx-auto mb-10 leading-relaxed">
            Meld dich, wenn du mitmachen willst.
          </p>
          <Link
            href="/about"
            className="font-body text-xs tracking-widest uppercase bg-red text-sand px-8 py-3 hover:bg-red/80 transition-colors inline-block"
          >
            Das Manifest lesen
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6 md:px-16 bg-surface">
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
