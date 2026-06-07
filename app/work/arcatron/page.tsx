import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  ArrowLeft,
  Box,
  CheckCircle2,
  Factory,
  Gauge,
  MapPin,
  Printer,
  Settings,
  Wrench
} from "lucide-react";

const operation = [
  {
    title: "Near-side drive",
    text:
      "The inner hand-wheel connects directly to the rear wheel on the user's operating side."
  },
  {
    title: "Cross-chair transfer",
    text:
      "The outer hand-wheel sends torque through a compact transfer mechanism to the far rear wheel."
  },
  {
    title: "One-hand steering",
    text:
      "Pushing both inputs together moves straight; favoring either input creates the turning moment needed to arc or pivot."
  }
];

const designDecisions = [
  {
    title: "Split rear axle",
    text:
      "An early through-axle blocked the wheelchair's folding path. Replacing it with a two-piece axle and coupler preserved alignment while allowing the chair to collapse."
  },
  {
    title: "Existing OEM parts",
    text:
      "The design reused parts and suppliers already familiar to the factory, reducing new tooling, simplifying service, and keeping the concept closer to production reality."
  },
  {
    title: "Safer wheel geometry",
    text:
      "A low-spoke molded wheel was selected over a bicycle-style rim to balance manufacturing cost, user safety, durability, and practical load distribution."
  },
  {
    title: "Accessible maintenance",
    text:
      "C-clips, reachable rods and cables, standard caster modules, and familiar shop tolerances were retained so common repairs would not require specialized tools."
  }
];

const gearTypes = ["Spur", "Helical", "Bevel", "Herringbone", "Worm"];

const cadImages = [
  {
    src: "/images/frido/wheelchair-cad-assembly.png",
    alt: "SolidWorks CAD assembly of the foldable one-hand-drive wheelchair concept",
    title: "Full SolidWorks assembly",
    caption:
      "A complete wheelchair assembly used to evaluate the frame, folding members, footrests, caster placement, and hand-wheel layout."
  },
  {
    src: "/images/frido/wheelchair-cad-side.png",
    alt: "Side view SolidWorks CAD model of the wheelchair concept",
    title: "Side packaging view",
    caption:
      "A closer side view showing the coaxial wheel layout and the space needed around the rear wheels and front caster modules."
  },
  {
    src: "/images/frido/wheelchair-cad-rear.png",
    alt: "Rear three-quarter SolidWorks CAD model of the wheelchair concept",
    title: "Rear mechanism view",
    caption:
      "A rear three-quarter view used to reason through axle routing, hand-wheel reach, and the folding constraints around the chair frame."
  }
];

const nextSteps = [
  "Add a selector clutch that locks both hand-wheels together for easier straight-line travel.",
  "Evaluate a belt or chain transfer to reduce rod-end maintenance without sacrificing foldability.",
  "Run a structured ergonomics study covering grip diameter, spacing, angle, comfort, and control.",
  "Build and test a physical prototype with hemiplegic users and rehabilitation professionals."
];

export default function FridoPage() {
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
          <div className="grid gap-10 lg:grid-cols-[1fr_0.38fr] lg:items-start">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                Research and Design Intern
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
                Frido
              </h1>
              <p className="mt-3 text-sm font-medium text-steel">
                Formerly Arcatron Mobility
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-steel">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal" />
                  Pune, India
                </span>
                <span>June 2021 - July 2022</span>
              </div>
              <p className="mt-10 max-w-3xl text-xl leading-9 text-graphite">
                A year-long introduction to accessible product development that
                culminated in a prototype-ready concept for a foldable manual
                wheelchair that can be propelled and steered with one hand.
              </p>
            </div>
            <div className="flex min-h-40 items-center justify-center rounded-[8px] border border-line bg-field p-8 shadow-panel">
              <div className="relative h-20 w-full max-w-52">
                <Image
                  src="/images/companies/arcatron-frido.png"
                  alt="Frido logo"
                  fill
                  sizes="208px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              The Design Challenge
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Independent mobility with one functional arm.
            </h2>
          </div>
          <div className="rounded-[8px] bg-ink p-7 text-white md:p-9">
            <Accessibility className="h-8 w-8 text-copper" />
            <p className="mt-6 text-lg leading-8 text-white/78">
              Hemiplegia can leave one side of the body paralyzed, making a standard
              self-propelled wheelchair difficult to use without assistance. Powered
              alternatives exist, but they add cost, weight, charging needs, and more
              components to maintain.
            </p>
            <p className="mt-5 text-lg leading-8 text-white/78">
              The goal was a fully mechanical chair that offered true one-hand
              propulsion and steering while staying lightweight, foldable, affordable,
              and familiar to manufacture.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-20 md:py-28">
        <div className="section-shell">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            How It Works
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-ink md:text-4xl">
            Two hand-wheels, two driven wheels, one operating side.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-graphite">
            Two coaxial hand-wheels sit on the same side of the chair. They let the
            user control each rear wheel independently without reaching across the
            body or relying on motors and electronics.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {operation.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[8px] border border-line bg-paper p-6 shadow-panel"
              >
                <span className="font-display text-sm font-semibold text-copper">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-graphite">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div className="mb-10 max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              CAD Evidence
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              SolidWorks views that drove the design decisions.
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite">
              These CAD views show the concept at the stage where the folding frame,
              rear wheel layout, caster packaging, and one-hand drive mechanism could
              be checked together as an assembly.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {cadImages.map((image, index) => (
              <figure
                key={image.src}
                className={`overflow-hidden rounded-[8px] border border-line bg-white shadow-panel ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className={`relative ${index === 0 ? "aspect-[16/8]" : "aspect-[16/9]"}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={index === 0 ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
                    className="object-cover object-left-top"
                  />
                </div>
                <figcaption className="border-t border-line p-5">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {image.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-graphite">
                    {image.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Designing Around the Fold
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Making the mechanism practical, buildable, and serviceable.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {designDecisions.map((decision, index) => (
              <article
                key={decision.title}
                className="rounded-[8px] border border-line bg-white p-7 shadow-panel"
              >
                <div className="flex items-center justify-between">
                  <Wrench className="h-6 w-6 text-teal" />
                  <span className="font-display text-sm font-semibold text-copper">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
                  {decision.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-graphite">
                  {decision.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20 md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div className="rounded-[8px] border border-line bg-white p-7">
            <Factory className="h-7 w-7 text-teal" />
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
              Learning from the factory
            </h2>
            <p className="mt-5 text-base leading-8 text-graphite">
              Before designing the chair, I followed the factory workflow from raw
              steel tube preparation through cutting, bending, tack welding, powder
              coating, final assembly, and quality inspection. That exposure made the
              CAD work more grounded in how parts are actually held, joined, checked,
              stored, repaired, and shipped.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Tube cutting and bending",
                "Tack welding and fixtures",
                "Final assembly",
                "Quality inspection"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[8px] border border-line bg-paper px-4 py-3 text-sm font-medium text-graphite"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[8px] bg-ink p-7 text-white">
            <Box className="h-7 w-7 text-copper" />
            <h2 className="mt-5 font-display text-2xl font-semibold">
              CAD and prototype skills
            </h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              SolidWorks became the main design environment for wheel, caster, frame,
              footrest, armrest, seat, axle, and folding assemblies. I also learned
              model slicing, PLA print preparation, nozzle and bed temperature setup,
              and three-axis printer calibration.
            </p>
            <div className="mt-7 flex items-center gap-3 border-t border-white/15 pt-6">
              <Printer className="h-5 w-5 text-copper" />
              <span className="text-sm font-semibold text-white/80">
                CAD decisions checked through assembly and fold-path interference
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Supporting CAD Practice
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Learning how different gears are modeled.
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite">
              Before tackling the wheelchair assembly, I practiced modeling common
              gear geometries in SolidWorks. The exercises developed comfort with
              revolves, sweeps, helixes, cuts, mirrors, and circular patterns.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {gearTypes.map((gear) => (
              <div
                key={gear}
                className="flex min-h-28 items-center justify-center rounded-[8px] border border-line bg-white p-5 text-center shadow-panel"
              >
                <div>
                  <Settings className="mx-auto h-6 w-6 text-copper" />
                  <p className="mt-3 font-display text-lg font-semibold text-ink">
                    {gear} gear
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-20 md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Outcome
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Prototype-ready, but not released as a product.
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite">
              I owned the concept from factory study through SolidWorks assemblies
              and bench-level validation, then presented it for internal prototyping.
              The company chose not to create a new SKU because regional demand was
              too narrow for a small manufacturer with portions of production
              outsourced.
            </p>
            <p className="mt-5 text-lg leading-8 text-graphite">
              The result was still a complete engineering proposal: a lightweight,
              mechanical solution that protected folding capability, reused existing
              parts, and prioritized predictable control and independent mobility.
            </p>
          </div>
          <div className="rounded-[8px] bg-field p-7">
            <Gauge className="h-7 w-7 text-teal" />
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
              What I would test next
            </h3>
            <ul className="mt-5 space-y-4 text-base leading-8 text-graphite">
              {nextSteps.map((step) => (
                <li key={step} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal" />
                  <span>{step}</span>
                </li>
              ))}
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
