import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Boxes,
  CircuitBoard,
  FlaskConical,
  Gauge,
  ShieldCheck,
  Thermometer
} from "lucide-react";

const overviewStats = [
  { label: "Research Area", value: "Compressor Testing" },
  { label: "Working Fluid", value: "Isobutane" },
  { label: "Systems", value: "Large and small load stands" }
];

const contributionAreas = [
  {
    title: "Electrical schematic to enclosure design",
    icon: CircuitBoard,
    text:
      "I helped develop the electrical schematic used for the large compressor load stands, then translated that layout into CAD-based electrical enclosures. The work connected disconnects, transformers, contactors, power distribution, VFD routing, and sensor/data pathways into physical packaging that could be reviewed and built."
  },
  {
    title: "Instrumentation on the isobutane stand",
    icon: Thermometer,
    text:
      "On the smaller flammable-fluid load stand, I helped mount temperature and pressure sensors at the required measurement points and prepared the tubing with insulating padding so the setup could produce more reliable thermal and pressure readings during checkout."
  },
  {
    title: "Pressure testing and LabVIEW checkout",
    icon: Gauge,
    text:
      "Testing work included leak checks, pressure tests, and using LabVIEW to record pressure-sensor data. I adjusted valves during setup to move the stand toward expected pressures while monitoring the instrument response."
  }
];

const systemNotes = [
  "The reference load-stand design was built around flammable refrigerants and compressor performance testing, with safety treated as a primary design driver.",
  "The report describes a hot-gas-bypass architecture, pressure and temperature instrumentation, LabVIEW data acquisition, NI cRIO hardware, a VFD-driven compressor circuit, and hardwired safety controls.",
  "Safety logic included pressure, temperature, water-flow, gas-detection, and emergency-stop inputs intended to de-energize the compressor path when a critical condition was detected."
];

const testingSteps = [
  "Mounted and checked pressure and temperature sensors on the smaller stand.",
  "Applied insulating padding around copper tubing to reduce unwanted heat exchange with the room.",
  "Performed leak testing and pressure testing before moving into refrigerant-side checkout.",
  "Used LabVIEW to record pressure-sensor readings while valves were adjusted toward target operating conditions."
];

const skills = [
  "Electrical enclosure CAD",
  "Schematic interpretation",
  "Pressure instrumentation",
  "Temperature instrumentation",
  "LabVIEW data capture",
  "Valve-based flow control",
  "Leak and pressure testing",
  "Flammable-fluid safety awareness"
];

export default function AcrcResearchPage() {
  return (
    <main className="noise min-h-screen bg-paper">
      <nav className="border-b border-line bg-paper/90 backdrop-blur-xl">
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
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              ACRC Research
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              Flammable-fluid compressor load stand support.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-graphite md:text-xl">
              I supported compressor testing infrastructure by helping turn electrical
              schematics into CAD enclosure layouts, instrumenting a smaller isobutane
              load stand, and running early leak, pressure, and data-acquisition checks.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {overviewStats.map((stat) => (
                <div key={stat.label} className="rounded-[8px] border border-line bg-field p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
                    {stat.label}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-ink">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <figure className="overflow-hidden rounded-[8px] border border-line bg-field shadow-panel">
            <div className="relative aspect-[16/11]">
              <Image
                src="/images/acrc/electrical-connections-load-stand-1.png"
                alt="Electrical connection schematic for a compressor load stand"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover object-[34%_25%]"
              />
            </div>
            <figcaption className="border-t border-line bg-white p-5 text-sm leading-6 text-graphite">
              Electrical connection schematic used as the basis for enclosure-layout and
              packaging work on the larger compressor load stands.
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            My Role
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Schematic work, CAD packaging, instrumentation, and test setup.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {contributionAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article key={area.title} className="rounded-[8px] border border-line bg-white p-6 shadow-panel">
                  <Icon className="h-7 w-7 text-teal" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{area.title}</h3>
                  <p className="mt-4 text-base leading-8 text-graphite">{area.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20 md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[8px] bg-ink p-7 text-white md:p-9">
            <FlaskConical className="h-8 w-8 text-copper" />
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight">
              Why the smaller isobutane stand mattered.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              Isobutane is flammable, so the smaller stand gave the lab a focused setup
              for carefully checking instrumentation, pressure behavior, and basic
              operating response before moving to higher-capacity equipment.
            </p>
          </div>
          <div className="grid gap-4">
            {testingSteps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[8px] border border-line bg-white p-5 shadow-panel">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-teal font-display text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-base leading-7 text-graphite">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              System Context
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Compressor performance testing with safety built into the system.
            </h2>
            <div className="mt-8 space-y-4">
              {systemNotes.map((note) => (
                <p key={note} className="rounded-[8px] border border-line bg-white p-5 text-lg leading-8 text-graphite shadow-panel">
                  {note}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-[8px] border border-line bg-white p-7 shadow-panel">
            <ShieldCheck className="h-8 w-8 text-copper" />
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
              Safety and instrumentation focus
            </h3>
            <p className="mt-4 text-base leading-8 text-graphite">
              The design review emphasized controlled compressor loading, reliable sensor
              data, and shutdown behavior for high-risk conditions such as gas detection,
              high pressure, high temperature, and water-flow loss.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Pressure switches", "Temperature switches", "Gas detection", "Emergency stop", "VFD shutdown"].map((item) => (
                <span key={item} className="rounded-[8px] bg-field px-3 py-2 text-sm font-medium text-graphite">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-20 md:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Evidence
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Electrical layout work connected the schematic to buildable hardware.
            </h2>
            <p className="mt-4 text-lg leading-8 text-graphite">
              The schematic shows the kind of power and control routing that had to be
              translated into enclosure geometry, component placement, conduit paths, and
              accessible service layout for the load-stand hardware.
            </p>
          </div>
          <figure className="mt-10 overflow-hidden rounded-[8px] border border-line bg-field shadow-panel">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/acrc/electrical-connections-load-stand-1.png"
                alt="Large-format electrical schematic for load stand compressor power and control connections"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="border-t border-line bg-paper p-5 text-base leading-7 text-graphite">
              High-level electrical connections for the load stand, including power entry,
              disconnects, transformer, DC supply, VFD path, and compressor connection.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[8px] bg-ink p-7 text-white">
            <Boxes className="h-8 w-8 text-copper" />
            <h2 className="mt-5 font-display text-3xl font-semibold">What this strengthened.</h2>
            <p className="mt-5 text-base leading-8 text-white/72">
              The work blended mechanical lab setup with electrical packaging and
              instrumentation, which made the project a useful bridge between CAD,
              testing, and research operations.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-[8px] border border-line bg-white px-4 py-3 text-sm font-medium text-graphite shadow-panel"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
