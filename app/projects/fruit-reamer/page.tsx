import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Boxes,
  CheckCircle2,
  Cog,
  DraftingCompass,
  Recycle
} from "lucide-react";

const designDecisions = [
  {
    title: "Reuse the drive",
    icon: Cog,
    text:
      "The coffee grinder's crank handle, handle head, shaft axle, and related interface were retained because the same rotary input could drive a citrus reamer."
  },
  {
    title: "Recover the material",
    icon: Recycle,
    text:
      "Unused low-carbon-steel grinder parts were proposed as feedstock for a stainless-steel reamer, extending the material's value instead of discarding it."
  },
  {
    title: "Add purpose-built vessels",
    icon: Boxes,
    text:
      "Separate PET components hold the fruit and collect the juice, using impact-resistant, chemically resistant geometry suited to injection molding."
  }
];

const assemblyNotes = [
  "The original grinder can be opened with one screwdriver; most remaining connections twist or pull apart.",
  "The reused crank components remain functionally unchanged in the new product.",
  "The crank handle and shaft axle could be consolidated because they share material and do not move relative to one another.",
  "The redesigned assembly contains seven parts, compared with a theoretical minimum of six."
];

export default function FruitReamerPage() {
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
          <Link
            href="/"
            className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink"
          >
            NM
          </Link>
        </div>
      </nav>

      <header className="border-b border-line bg-white">
        <div className="section-shell grid gap-10 py-16 md:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              ME 270 / Design Challenge
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              Fruit Reamer
            </h1>
            <p className="mt-7 text-xl leading-9 text-graphite">
              A manual citrus juicer designed around the reusable crank mechanism of
              a coffee grinder, with disassembly, material recovery, and long-term
              durability guiding the redesign.
            </p>
          </div>
          <div className="relative aspect-[4/5] max-h-[640px] overflow-hidden rounded-[8px] border border-line bg-field shadow-panel">
            <Image
              src="/images/fruit-reamer/assembly-cad.png"
              alt="Fusion 360 assembly of the Fruit Reamer manual citrus juicer"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain p-4"
            />
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            The Challenge
          </p>
          <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Give an existing mechanism a useful second life.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-9 text-graphite">
            The project began with a manual coffee grinder: a cylindrical product
            whose hand crank rotates a central shaft and burr. I repurposed that same
            motion for a citrus juicer, replacing the grinding components with a
            conical reamer and containers for holding fruit and collecting juice.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {designDecisions.map((decision) => {
              const Icon = decision.icon;
              return (
                <article
                  key={decision.title}
                  className="rounded-[8px] border border-line bg-white p-6 shadow-panel"
                >
                  <Icon className="h-6 w-6 text-teal" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {decision.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-graphite">
                    {decision.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <DraftingCompass className="h-7 w-7 text-teal" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Ideation
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Comparing ways to apply the crank.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              Early concepts explored different fruit holders, reamer positions,
              collection methods, and cutting approaches. The selected direction
              kept the familiar cylindrical form and used the crank to rotate the
              reamer beneath a supported piece of fruit.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/fruit-reamer/ideation-sketches.jpg"
                alt="Ideation sketches exploring three crank-driven juicer concepts"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain p-4"
              />
            </div>
            <figcaption className="border-t border-line p-5 text-base leading-7 text-graphite">
              Three concepts developed around the grinder&apos;s reusable rotary
              mechanism.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Recycle className="h-7 w-7 text-copper" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Design for Disassembly
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Reuse what already performs the right motion.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              The redesign centered on parts that could be recovered without
              modification. This reduced the need for new components and made the
              transformation from grinder to juicer easier to understand and
              assemble.
            </p>
          </div>
          <div className="grid gap-4">
            {assemblyNotes.map((note) => (
              <div
                key={note}
                className="flex gap-4 rounded-[8px] border border-line bg-white p-5 shadow-panel"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal" />
                <p className="text-base leading-8 text-graphite">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink py-20 text-white md:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Materials and Durability
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Selected for moisture, wear, and repeated use.
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/72">
              Stainless steel was selected for the reamer because it resists
              corrosion and wear better than low-carbon steel in a wet food-contact
              application. PET was selected for the fruit and juice containers for
              its impact, chemical, and heat resistance.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-[8px] border border-white/14 bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/fruit-reamer/reamer-drawing.png"
                  alt="Engineering drawing of the stainless-steel citrus reamer"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain p-3"
                />
              </div>
              <figcaption className="border-t border-line bg-paper p-5 text-base leading-7 text-graphite">
                Dimensioned stainless-steel reamer with channels for extracting and
                directing juice.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[8px] border border-white/14 bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/fruit-reamer/crank-drawing.png"
                  alt="Engineering drawing of the reused low-carbon-steel crank handle"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain p-3"
                />
              </div>
              <figcaption className="border-t border-line bg-paper p-5 text-base leading-7 text-graphite">
                Crank geometry carried into the new product to preserve the
                grinder&apos;s immediate functionality.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <BarChart3 className="h-7 w-7 text-teal" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Hypothetical Experiment
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Estimating what controls juicing time.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              A two-factor experiment was proposed using crank speed at 30 and 60 RPM
              and fruit diameter at 53 and 70 mm. The response was the time required
              to juice the fruit. The analysis suggested rotation speed would have a
              slightly larger effect than fruit diameter.
            </p>
          </div>
          <div className="grid gap-6">
            <figure className="overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
              <div className="relative aspect-[16/6]">
                <Image
                  src="/images/fruit-reamer/experiment-table.png"
                  alt="Two-factor design of experiment calculations for the Fruit Reamer"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-contain"
                />
              </div>
            </figure>
            <figure className="overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/fruit-reamer/confidence-intervals.png"
                  alt="Confidence interval chart comparing crank speed and fruit diameter effects"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-contain p-3"
                />
              </div>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
