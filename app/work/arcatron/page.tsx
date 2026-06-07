import Link from "next/link";
import {
  Accessibility,
  ArrowLeft,
  Box,
  CheckCircle2,
  MapPin,
  Printer,
  Ruler
} from "lucide-react";

const stages = [
  {
    icon: Ruler,
    title: "Design observation",
    text:
      "Shadowed the Head of Design and Research to understand how product requirements moved through design decisions, review, and development."
  },
  {
    icon: Box,
    title: "CAD development",
    text:
      "Completed company design tasks and modeled parts using SolidWorks and Fusion 360 while learning how geometry responds to manufacturing constraints."
  },
  {
    icon: Printer,
    title: "Rapid prototyping",
    text:
      "Used CAD and 3D printing projects to test ideas physically, sharpen modeling technique, and connect digital design with fabrication."
  }
];

export default function ArcatronPage() {
  return (
    <main className="noise min-h-screen bg-paper">
      <nav className="border-b border-line bg-paper/90 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-graphite transition hover:text-teal"
          >
            <ArrowLeft className="h-4 w-4" />
            Professional Work
          </Link>
          <Link
            href="/"
            className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink"
          >
            NM
          </Link>
        </div>
      </nav>

      <header className="border-b border-line bg-white py-20 md:py-28">
        <div className="section-shell">
          <div className="flex max-w-4xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                Research and Design Intern
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
                Arcatron Mobility
              </h1>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-steel">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal" />
                  Pune, India
                </span>
                <span>June 2021 - July 2022</span>
              </div>
            </div>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[8px] bg-field text-teal">
              <Accessibility className="h-8 w-8" />
            </div>
          </div>
          <p className="mt-10 max-w-3xl text-xl leading-9 text-graphite">
            A long-form introduction to mobility product development, combining design
            observation with CAD exercises, 3D-printed prototypes, and wheelchair
            sub-assembly work.
          </p>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Development Process
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-ink md:text-4xl">
            Learning product design through the full build cycle.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <article
                  key={stage.title}
                  className="rounded-[8px] border border-line bg-white p-6 shadow-panel"
                >
                  <Icon className="h-6 w-6 text-copper" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {stage.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-graphite">{stage.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20">
        <div className="section-shell grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[8px] bg-ink p-7 text-white">
            <Accessibility className="h-7 w-7 text-copper" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-copper">
              Featured Contribution
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Hemiplegic wheelchair development
            </h2>
            <p className="mt-5 leading-8 text-white/72">
              Designed wheelchair sub-assemblies as part of a hemiplegic wheelchair
              engineered from scratch. The work connected component geometry with
              accessibility goals, assembly needs, and practical manufacturing decisions.
            </p>
          </div>
          <div className="rounded-[8px] border border-line bg-white p-7">
            <CheckCircle2 className="h-7 w-7 text-teal" />
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
              Engineering takeaways
            </h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-graphite">
              <li>Product design improves through rapid physical feedback.</li>
              <li>CAD choices must account for assembly and manufacturing workflows.</li>
              <li>Mobility products require careful attention to the user&apos;s functional needs.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="section-shell">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all professional work
          </Link>
        </div>
      </footer>
    </main>
  );
}
