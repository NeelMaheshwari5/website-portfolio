import Link from "next/link";
import {
  ArrowLeft,
  CircuitBoard,
  Droplets,
  FlaskConical,
  Gauge,
  ScanLine,
  Scale,
  SlidersHorizontal
} from "lucide-react";

const overviewStats = [
  { label: "Research Area", value: "Yield-stress fluids" },
  { label: "Surface", value: "Permeable mesh" },
  { label: "Current Focus", value: "Servo-controlled release" }
];

const experimentContext = [
  {
    title: "Prior experiment",
    icon: Droplets,
    text:
      "Blackwell's dissertation studied how yield-stress fluid drops behave when they impact permeable meshes. Depending on drop energy, material rheology, and mesh geometry, the fluid could either adhere to the mesh, pass through it, or split into smaller transmitted droplets."
  },
  {
    title: "What carries forward",
    icon: FlaskConical,
    text:
      "The current work keeps the core question: how much fluid is retained by the mesh versus transmitted through it, and how do repeatable drop conditions change that balance?"
  },
  {
    title: "What changes",
    icon: CircuitBoard,
    text:
      "Instead of manually opening a dropper or release mechanism, the new setup is being designed around servo actuation so drop release can be controlled more repeatably and eventually tuned through timing, angle, or opening profile."
  }
];

const designWork = [
  "Designing a servo-driven dropper mechanism that can open repeatably without disturbing the fluid before release.",
  "Thinking through fixture geometry so the drop path, mesh location, and collection region stay aligned between trials.",
  "Leaving room in the design for calibration, cleaning, and quick changes to the dropper or mesh hardware.",
  "Connecting the mechanical release design to the larger experimental goal: controlled impact conditions and trustworthy transmitted-fluid measurements."
];

const measurementOptions = [
  {
    title: "Sponge capture plus micro-CT",
    icon: ScanLine,
    text:
      "One concept is to capture transmitted fluid in a sponge-like collector and use micro-CT scanning to estimate how much fluid entered the porous volume. This could give spatial information, but it adds scan setup, segmentation, and material-contrast challenges."
  },
  {
    title: "Direct mass measurement",
    icon: Scale,
    text:
      "A simpler path is to collect the transmitted fluid and measure mass before and after the event. This is easier to validate and compare across trials, but the collection setup has to avoid losses from splash, residue, evaporation, or fluid left on fixture surfaces."
  },
  {
    title: "Hybrid workflow",
    icon: Gauge,
    text:
      "A likely design direction is to use weighing as the primary quantitative metric while keeping micro-CT or another imaging method as a possible secondary check when the distribution inside a collector matters."
  }
];

const skills = [
  "Servo mechanism design",
  "Experimental fixture design",
  "Yield-stress fluid testing",
  "Mesh transmittance measurement",
  "CAD packaging",
  "Measurement tradeoff analysis",
  "Micro-CT planning",
  "Mass-balance validation"
];

export default function EwoldtResearchPage() {
  return (
    <main className="noise min-h-screen bg-paper">
      <nav className="border-b border-line bg-ink text-white backdrop-blur-xl [&_a]:text-white [&_svg]:text-white">
        <div className="section-shell flex h-16 items-center justify-between">
          <Link
            href="/#research"
            className="inline-flex items-center gap-2 text-sm font-semibold text-graphite transition hover:text-teal"
          >
            <ArrowLeft className="h-4 w-4" />
            Research
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
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            Ewoldt Research Group
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Servo-controlled drop impact testing for fluids moving through mesh.
          </h1>
          <p className="mt-7 max-w-4xl text-lg leading-8 text-graphite md:text-xl">
            I am helping develop a new experimental setup inspired by prior yield-stress
            fluid drop-impact work. The goal is to make drop release more repeatable with
            servo actuation and compare ways to measure how much fluid passes through a
            permeable mesh.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {overviewStats.map((stat) => (
              <div key={stat.label} className="card-3d rounded-[8px] border border-line bg-field p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-ink">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Research Context
          </p>
          <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            From manual drop release toward a more controlled apparatus.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-9 text-graphite">
            The reference work examined yield-stress fluids impacting periodic meshes and
            perforated sheets, using drop mass, impact speed, fluid concentration, and mesh
            geometry to map when material transmitted through the mesh or remained captured
            by it. The new setup keeps that physical question but shifts attention toward
            mechanism design and repeatable release control.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {experimentContext.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="card-3d rounded-[8px] border border-line bg-white p-6">
                  <Icon className="h-7 w-7 text-teal" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-graphite">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20 md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[8px] bg-ink p-7 text-white md:p-9">
            <SlidersHorizontal className="h-8 w-8 text-copper" />
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight">
              Current design work centers on the release mechanism.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              The servo system is still being designed, so the current engineering problem is
              not only whether the experiment works, but how to make the release motion
              consistent, cleanable, adjustable, and gentle enough to avoid changing the drop
              before impact.
            </p>
          </div>
          <div className="grid gap-4">
            {designWork.map((item, index) => (
              <div key={item} className="card-3d flex gap-4 rounded-[8px] border border-line bg-white p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-copper font-display text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-base leading-7 text-graphite">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Measurement Strategy
          </p>
          <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            The main open question is how to measure transmitted fluid cleanly.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-9 text-graphite">
            The dissertation used mass collected below the mesh as a direct measurement of
            transmittance. In this version, several collection strategies are still under
            consideration because the measurement method needs to work with the fluid,
            mesh, fixture geometry, and available imaging or weighing tools.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {measurementOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article key={option.title} className="card-3d rounded-[8px] border border-line bg-white p-6">
                  <Icon className="h-7 w-7 text-teal" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{option.title}</h3>
                  <p className="mt-4 text-base leading-8 text-graphite">{option.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              What I Am Learning
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-4xl">
              Designing the fixture means designing the data quality.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-white/76">
              This project is forcing the mechanical design and measurement plan to develop
              together. A clean servo mechanism is only useful if it improves repeatability,
              and a measurement method is only useful if it captures transmitted fluid
              without adding a larger source of uncertainty.
            </p>
          </div>
          <div className="rounded-[8px] border border-white/14 bg-white/[0.055] p-6">
            <h3 className="font-display text-xl font-semibold">Skills and tools</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-[8px] border border-white/16 bg-white/8 px-3 py-2 text-sm font-medium text-white/85"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
