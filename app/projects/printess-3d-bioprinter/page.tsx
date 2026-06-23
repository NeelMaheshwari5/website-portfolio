import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Boxes,
  CircuitBoard,
  Gauge,
  GitBranch,
  Layers3,
  MonitorCog,
  Move3D,
  Pipette,
  ShieldCheck,
  Syringe,
  Wrench
} from "lucide-react";

const buildSteps = [
  {
    title: "Printed and cut structure",
    text:
      "The frame is built from 3D-printed brackets, acrylic plates, heat-set inserts, screws, and off-the-shelf motion hardware instead of custom machined parts.",
    icon: Boxes
  },
  {
    title: "Linear motion axes",
    text:
      "Linear stepper motors drive the stage and vertical axes, giving the printer controlled X, Y, Z, and auxiliary motion for placing material precisely.",
    icon: Move3D
  },
  {
    title: "Syringe extrusion module",
    text:
      "A syringe barrel and plunger holder translate motor motion into controlled material flow through a dispensing tip or nozzle.",
    icon: Syringe
  },
  {
    title: "Open-source controls",
    text:
      "The electronics use open-source firmware and G-code workflows, with Pronterface used for manual axis control, calibration, and running print programs.",
    icon: CircuitBoard
  }
];

const workflow = [
  "Assemble the frame, braces, motion axes, and stage so the gantry moves squarely without binding.",
  "Install the syringe holder and plunger drive, then check that the extrusion axis moves smoothly.",
  "Wire the control board, stepper drivers, motors, and power supply before uploading the appropriate firmware.",
  "Use Pronterface to jog each axis, set coordinates, run G-code, and verify that the nozzle height and toolpath match the planned print.",
  "Tune deposition by adjusting material consistency, nozzle size, feed rate, extrusion distance, and the gap between the dispensing tip and substrate."
];

const takeaways = [
  {
    title: "Accessible bioprinting hardware",
    text:
      "The project shows how useful research equipment can be made from approachable manufacturing methods and a carefully documented open-source design."
  },
  {
    title: "Precision through calibration",
    text:
      "Small setup choices, especially nozzle height, syringe pressurization, axis speed, and motor alignment, have an outsized effect on print quality."
  },
  {
    title: "Mechanical design for iteration",
    text:
      "The modular syringe holders, platform attachments, cooling options, and nozzle configurations make the printer adaptable for different material experiments."
  }
];

export default function PrintessBioprinterPage() {
  return (
    <main className="noise min-h-screen bg-paper">
      <nav className="border-b border-line bg-ink text-white backdrop-blur-xl [&_a]:text-white [&_svg]:text-white">
        <div className="section-shell flex h-16 items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-electric"
          >
            <ArrowLeft className="h-4 w-4" />
            Projects
          </Link>
          <Link href="/" className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
            NM
          </Link>
        </div>
      </nav>

      <header className="border-b border-line bg-white">
        <div className="section-shell grid gap-10 py-16 md:py-24 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-electric">
              In-progress bioprinting build
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              Printess 3D Bioprinter
            </h1>
            <p className="mt-7 text-xl leading-9 text-graphite">
              A low-cost, open-source direct-ink-writing bioprinter being assembled
              and tested to deposit soft materials through syringe-driven extrusion.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Direct ink writing", "Syringe extrusion", "G-code control", "Open-source hardware"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-field px-4 py-2 text-sm font-semibold text-ink shadow-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="card-3d relative aspect-[4/5] overflow-hidden rounded-[8px] border border-line bg-ink">
            <Image
              src="/images/printess/printessa.webp"
              alt="Printess 3D bioprinter with dual syringe extrusion heads"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Pipette className="h-7 w-7 text-electric" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-electric">
              What it does
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              A compact platform for controlled deposition of soft materials.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-9 text-graphite">
            <p>
              Printess is designed for direct ink writing, where a material is pushed
              from a syringe through a small dispensing tip while the printer moves
              along a programmed path. Instead of melting plastic filament like a
              standard FDM printer, the system can place soft materials, gels, and
              experimental inks onto a substrate.
            </p>
            <p>
              The value of the design is that it makes bioprinting hardware more
              accessible. The public Printess project describes the printer as an
              open-source system that can be built from 3D-printed parts,
              laser-cut panels, and off-the-shelf components, making it useful for
              teaching labs and early-stage research setups.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20 md:py-28">
        <div className="section-shell">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-electric">
            How we made it
          </p>
          <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            The build combines printed mechanics, linear stepper motion, syringe
            extrusion, and open-source controls.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {buildSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="card-3d rounded-[8px] border border-line bg-white p-6"
                >
                  <Icon className="h-6 w-6 text-electric" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-graphite">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <Wrench className="h-7 w-7 text-electric" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-electric">
              Build and setup workflow
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              From hardware assembly to first controlled toolpaths.
            </h2>
            <div className="mt-8 space-y-4">
              {workflow.map((item, index) => (
                <div
                  key={item}
                  className="card-3d flex gap-4 rounded-[8px] border border-line bg-white p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-electric text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-base leading-8 text-graphite">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="card-3d rounded-[8px] border border-line bg-ink p-7 text-white">
            <MonitorCog className="h-7 w-7 text-electric" />
            <h3 className="mt-5 font-display text-2xl font-semibold">
              Control logic
            </h3>
            <p className="mt-5 text-base leading-8 text-white/76">
              The printer is operated through G-code, with familiar commands for
              absolute and relative positioning, line moves, feed rates, coordinate
              resets, and dwell timing. For printing, the toolpath has to coordinate
              stage motion with syringe-plunger travel so the deposited line width
              and extrusion volume stay consistent.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["G90 / G91", "G92 origining", "G1 motion", "Feed-rate tuning"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-[8px] border border-white/12 bg-white/8 px-4 py-3 text-sm font-semibold text-white"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-white py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="card-3d relative aspect-[4/5] overflow-hidden rounded-[8px] border border-line bg-field">
            <Image
              src="/images/printess/printessa.webp"
              alt="Close view of the Printess syringe-based material extrusion system"
              fill
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Gauge className="h-7 w-7 text-electric" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-electric">
              My role
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Building toward a reliable student research tool.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              I am using the Printess construction and operation manual as the
              baseline for assembly, setup, and testing. The work involves
              understanding how the printed components constrain the motion system,
              checking the fit of the syringe/extruder hardware, wiring and
              configuring the controls, and preparing the printer for repeatable
              deposition tests.
            </p>
            <p className="mt-5 text-lg leading-9 text-graphite">
              Because the project is still active, the current focus is on getting
              the mechanics, electronics, and software workflow to behave together:
              smooth motor travel, reliable syringe actuation, correct nozzle
              positioning, and G-code that can place material without dragging,
              under-extruding, or over-pressurizing the syringe.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div className="max-w-4xl">
            <Layers3 className="h-7 w-7 text-electric" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-electric">
              Engineering takeaways
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              The hard part is not just making the printer move, it is making
              material placement predictable.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {takeaways.map((item) => (
              <article
                key={item.title}
                className="card-3d rounded-[8px] border border-line bg-white p-6"
              >
                <GitBranch className="h-6 w-6 text-electric" />
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-graphite">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink py-16 text-white">
        <div className="section-shell grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <ShieldCheck className="h-7 w-7 text-electric" />
            <h2 className="mt-4 font-display text-2xl font-semibold">
              Current status
            </h2>
          </div>
          <p className="text-base leading-8 text-white/76">
            This page reflects an in-progress build. The printer is being developed
            for prototyping, education, and research workflows, not for clinical or
            medical use. More photos, test prints, and performance notes can be added
            once the system has completed more hands-on validation.
          </p>
        </div>
      </section>
    </main>
  );
}
