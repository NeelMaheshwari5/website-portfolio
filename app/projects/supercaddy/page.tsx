import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  ArrowLeft,
  Boxes,
  CheckCircle2,
  Droplets,
  Factory,
  FoldHorizontal,
  Ruler,
  ScanLine
} from "lucide-react";

const designGoals = [
  {
    title: "Lower-effort use",
    icon: Accessibility,
    text:
      "Four integrated dispensers reduce the need to lift, open, and replace individual bottles, making common shower products easier to access with limited hand dexterity."
  },
  {
    title: "Compact storage",
    icon: FoldHorizontal,
    text:
      "A central hinge lets the caddy fold in half outside the shower, reducing the space it occupies in a dorm room or shared bathroom."
  },
  {
    title: "Cleaner placement",
    icon: Droplets,
    text:
      "Four rear suction cups hold the caddy on the shower wall, keeping products off the floor and positioning the dispensers within comfortable reach."
  }
];

const processSteps = [
  "Interviewed UIUC students about inconvenient everyday products and recurring problems in dorm life.",
  "Translated the research into priorities around durability, affordability, versatility, compactness, and ease of use.",
  "Compared several concepts with a Pugh matrix and retained the strongest dispensing, storage, and wall-mounting features.",
  "Built the complete assembly and individual components in CAD, including the folding structure and pumping mechanism.",
  "Created an exploded assembly, bill of materials, detailed part drawings, tolerance analysis, and a manufacturing proposal."
];

export default function SuperCaddyPage() {
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
              ME 170 / Computer-Aided Design
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              SuperCaddy
            </h1>
            <p className="mt-7 text-xl leading-9 text-graphite">
              A foldable, wall-mounted shower caddy with refillable dispensers,
              designed to simplify shared-bathroom routines for students and people
              with low hand dexterity.
            </p>
          </div>
          <div className="relative aspect-[6/5] overflow-hidden rounded-[8px] border border-line bg-field shadow-panel">
            <Image
              src="/images/supercaddy/assembly.jpg"
              alt="CAD assembly of the SuperCaddy shower organizer"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain p-5"
            />
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            The Design Brief
          </p>
          <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            A more accessible answer to a familiar dorm-room problem.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-9 text-graphite">
            Student interviews repeatedly identified conventional shower caddies as
            bulky, difficult to store, prone to collecting moisture, and awkward to
            use when no shelf is available. The team responded with a single product
            that combines dispensing, wall mounting, drainage, and compact storage.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {designGoals.map((goal) => {
              const Icon = goal.icon;
              return (
                <article
                  key={goal.title}
                  className="rounded-[8px] border border-line bg-white p-6 shadow-panel"
                >
                  <Icon className="h-6 w-6 text-teal" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {goal.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-graphite">{goal.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <ScanLine className="h-7 w-7 text-teal" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Product Development
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              From user research to engineering documentation.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              The project covered the complete early-stage design workflow rather
              than CAD alone. Requirements, concept selection, part design,
              tolerancing, manufacturing, and cost were treated as connected
              decisions.
            </p>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-[8px] border border-line bg-white p-5 shadow-panel"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-ink font-display text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-base leading-8 text-graphite">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/supercaddy/front-view.png"
                  alt="Front CAD view showing four SuperCaddy dispensers and drainage tray"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain p-5"
                />
              </div>
              <figcaption className="border-t border-line p-5 text-base leading-7 text-graphite">
                Four refillable dispensers sit above a detachable, perforated tray
                for smaller toiletries.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/supercaddy/rear-view.png"
                  alt="Rear CAD view showing the SuperCaddy suction cup layout"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain p-5"
                />
              </div>
              <figcaption className="border-t border-line p-5 text-base leading-7 text-graphite">
                The rear layout uses four suction cups and a central hinge to support
                wall mounting and folding.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink py-20 text-white md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <Boxes className="h-7 w-7 text-copper" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Assembly Definition
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Designed as a complete, documentable product.
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/72">
              The final package included part and assembly models, an exploded
              assembly drawing, a bill of materials, cross-sections, and detailed
              drawings for the back panel, tray, hinges, dispenser body, nozzle,
              button, lid, and top.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[8px] border border-white/14 bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/supercaddy/exploded-drawing.jpg"
                alt="SuperCaddy exploded engineering drawing with bill of materials"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain p-4"
              />
            </div>
            <figcaption className="border-t border-line bg-paper p-5 text-base leading-7 text-graphite">
              Exploded assembly drawing and nine-item bill of materials from the
              final report.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[16/6] overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
            <Image
              src="/images/supercaddy/tolerance-analysis.png"
              alt="Tolerance stack analysis for the SuperCaddy pumping mechanism"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain p-4"
            />
          </div>
          <div>
            <Ruler className="h-7 w-7 text-teal" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Pumping Mechanism
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Toleranced to limit wobble and leakage.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              The sliding shaft required a close fit with the dispenser body so
              product could not seep around the seal. A tight H7/h6 fit was selected,
              and radial and axial clearances were checked to keep the mechanism
              aligned while preserving its motion.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-field py-20">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          <article className="rounded-[8px] border border-line bg-white p-7 shadow-panel">
            <Factory className="h-7 w-7 text-copper" />
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
              Manufacturing direction
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              ABS and injection molding were proposed for the main parts to balance
              moisture resistance, durability, weight, and production cost. Flexible
              suction cups would be produced separately and attached during assembly.
            </p>
          </article>
          <article className="rounded-[8px] border border-line bg-white p-7 shadow-panel">
            <CheckCircle2 className="h-7 w-7 text-teal" />
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
              What the project developed
            </h2>
            <p className="mt-4 text-base leading-8 text-graphite">
              SuperCaddy connected user-centered product definition with parametric
              CAD, assembly planning, engineering drawings, fits and tolerances,
              material selection, and the economics of bringing a product to market.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
