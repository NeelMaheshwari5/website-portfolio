import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Accessibility,
  ArrowUpRight,
  Cog,
  FoldHorizontal,
  Ruler
} from "lucide-react";

const designPriorities = [
  {
    title: "One-handed propulsion",
    icon: Cog,
    text:
      "The mechanism was developed to transfer input from one side of the chair so both rear wheels could be driven by a user with limited movement on one side."
  },
  {
    title: "Foldable structure",
    icon: FoldHorizontal,
    text:
      "The drive concept had to work with a wheelchair frame that could still fold for transport and storage."
  },
  {
    title: "Buildable geometry",
    icon: Ruler,
    text:
      "CAD decisions were informed by fabrication, assembly, available components, and feedback from the manufacturing floor."
  }
];

export default function HemiplegicWheelchairPage() {
  return (
    <main className="noise min-h-screen bg-paper">
      <nav className="border-b border-line bg-paper/90 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-graphite transition hover:text-teal"
          >
            <ArrowLeft className="h-4 w-4" />
            Projects
          </Link>
          <Link href="/" className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">
            NM
          </Link>
        </div>
      </nav>

      <header className="border-b border-line bg-white py-16 md:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Mobility Product Design / 2021 - 2022
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              Hemiplegic Wheelchair
            </h1>
            <p className="mt-7 text-xl leading-9 text-graphite">
              A foldable wheelchair concept designed to let a user propel both rear
              wheels through one-handed input.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] border border-line bg-field shadow-panel">
            <Image
              src="/images/frido/wheelchair-cad-assembly.png"
              alt="CAD assembly of the one-hand-drive wheelchair mechanism"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-contain p-4"
            />
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div className="max-w-4xl">
            <Accessibility className="h-8 w-8 text-teal" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Design Goal
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Make independent movement more practical.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              I worked on the mechanical concept and CAD for an accessibility-focused
              wheelchair platform during my time with Arcatron Mobility, now Frido.
              The central challenge was coordinating both drive wheels from one side
              without losing the folding behavior expected from a portable chair.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {designPriorities.map((priority) => {
              const Icon = priority.icon;
              return (
                <article key={priority.title} className="rounded-[8px] border border-line bg-white p-6 shadow-panel">
                  <Icon className="h-6 w-6 text-teal" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{priority.title}</h3>
                  <p className="mt-4 text-base leading-8 text-graphite">{priority.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20 md:py-28">
        <div className="section-shell grid gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/frido/wheelchair-cad-side.png"
                alt="Side view of the wheelchair CAD assembly"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-4"
              />
            </div>
            <figcaption className="border-t border-line p-5 text-base leading-7 text-graphite">
              Side-view packaging used to check how the drive components fit around
              the chair frame.
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/frido/wheelchair-cad-rear.png"
                alt="Rear view of the wheelchair CAD assembly"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-4"
              />
            </div>
            <figcaption className="border-t border-line p-5 text-base leading-7 text-graphite">
              Rear-view study of the mechanism connecting the one-handed input to
              the wheel assembly.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <Link
            href="/work/arcatron"
            className="group flex max-w-3xl items-center justify-between gap-6 rounded-[8px] border border-line bg-ink p-6 text-white transition hover:-translate-y-1 hover:border-teal hover:bg-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-4"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-copper">
                Related Internship
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold">
                Read the full Frido experience
              </h2>
            </div>
            <ArrowUpRight className="h-6 w-6 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
