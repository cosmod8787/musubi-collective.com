import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="px-6 md:px-16 py-20 md:py-28 border-b border-surface">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-widest uppercase text-muted mb-4">
            Wer wir sind
          </p>
          <h1 className="font-heading text-6xl md:text-8xl text-sand tracking-tight leading-none">
            Über uns
          </h1>
        </div>
      </section>

      {/* Konzept */}
      <section className="px-6 md:px-16 py-20 md:py-32 border-b border-surface bg-surface">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-muted sticky top-24">
              Das Konzept
            </p>
          </div>
          <div className="space-y-8">
            <p className="font-heading text-3xl md:text-4xl text-sand leading-snug">
              <span className="underline-amber">
                Warum fühlt sich Kultur so oft wie die Party von jemand anderem an?
              </span>
            </p>
            <p className="font-body text-base text-muted leading-relaxed">
              Bridge 'n' Bass ist ein Berliner Kollektiv. Gegründet 2022. Wir machen
              Veranstaltungen, Kunst und Musik — für alle, die sich sonst nicht
              eingeladen fühlen.
            </p>
            <p className="font-body text-base text-muted leading-relaxed">
              Kein Dresscode. Kein VIP. Nur Leute und das, was sie machen.
            </p>
          </div>
        </div>
      </section>

      {/* Zitat */}
      <section className="px-6 md:px-16 py-20 md:py-28 bg-red border-b border-surface">
        <div className="max-w-4xl mx-auto">
          <blockquote className="font-heading text-4xl md:text-6xl text-sand leading-tight">
            &ldquo;Gut fühlen,
            <br />
            nicht nur gut aussehen.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Manifest */}
      <section className="px-6 md:px-16 py-20 md:py-32 border-b border-surface bg-surface">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-muted sticky top-24">
              Das Manifest
            </p>
          </div>
          <div className="space-y-6">
            {[
              "Wir schaffen Raum für Kunst, die nicht in eine Schublade passt.",
              "Wir spielen Musik, die Grenzen zwischen Genres überwindet — ohne Entschuldigung.",
              "Wir unterstützen Künstler:innen in jeder Phase — von der ersten Ausstellung bis zur etablierten Praxis.",
              "Wir gestalten Veranstaltungen, die sich nach etwas anfühlen, nicht nur gut aussehen.",
              "Wir glauben an freien Eintritt und Solidarpreise, wo immer es möglich ist.",
              "Wir sind anti-rassistisch, feministisch und queer-bejahend — immer.",
              "Wir teilen Ressourcen, Anerkennung und Raum.",
              "Wir sind Berlin — aber wir sind nicht nur Berlin.",
              "Wir sind Bridge 'n' Bass.",
            ].map((line, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="font-body text-xs text-concrete pt-1 min-w-[2rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-heading text-xl md:text-2xl text-sand leading-snug">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werte */}
      <section className="px-6 md:px-16 py-20 md:py-32 border-b border-surface">
        <div className="max-w-7xl mx-auto">
          <p className="font-body text-xs tracking-widest uppercase text-muted mb-12">
            Wofür wir stehen
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "Offenheit",
                accent: "bg-amber",
                text: "Kunst und Kultur für alle — unabhängig von Herkunft, Budget oder Biografie.",
              },
              {
                label: "Zusammenarbeit",
                accent: "bg-red",
                text: "Wir bauen gemeinsam. Disziplinen verbinden sich. Hierarchien lösen sich auf. Neues entsteht.",
              },
              {
                label: "Authentizität",
                accent: "bg-concrete",
                text: "Kein Trend-Chasing. Keine Algorithmus-Optimierung. Nur ehrliche Arbeit, mit Absicht gemacht.",
              },
            ].map(({ label, accent, text }) => (
              <div key={label}>
                <div className={`${accent} h-1 w-12 mb-6`} />
                <h3 className="font-heading text-2xl text-sand mb-3">
                  {label}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section className="px-6 md:px-16 py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-red mb-6">
              — Kontakt
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-sand leading-tight mb-6">
              Interesse an einer
              <br />
              Zusammenarbeit?
            </h2>
            <p className="font-body text-sm text-muted leading-relaxed mb-8">
              Schreib uns.
            </p>
            <a
              href="mailto:collectiveformatx@gmail.com"
              className="font-body text-xs tracking-widest uppercase bg-red text-sand px-8 py-3 hover:bg-red/80 transition-colors inline-block"
            >
              Nachricht senden
            </a>
          </div>
          <div className="space-y-6 pt-2">
            {[
              { label: "Studio", value: "Revaler Str. 99, 10245 Berlin" },
              { label: "E-Mail", value: "collectiveformatx@gmail.com" },
              { label: "Instagram", value: "@collectiveformatx" },
            ].map(({ label, value }) => (
              <div key={label} className="border-b border-border pb-6">
                <p className="font-body text-xs tracking-widest uppercase text-muted mb-1">
                  {label}
                </p>
                <p className="font-body text-sm text-sand">{value}</p>
              </div>
            ))}
          </div>
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
