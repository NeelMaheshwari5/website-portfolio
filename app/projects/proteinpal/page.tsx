import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Boxes,
  CheckCircle2,
  Cog,
  Footprints,
  PackageOpen,
  Ruler,
  Settings2
} from "lucide-react";

const requirements = [
  "Travel 10 m in a reasonably straight line.",
  "Maintain an average speed of at least 4 m/min.",
  "Dispense one payload every 2 m for five total releases.",
  "Carry at least five payloads weighing no more than 25 g each.",
  "Use one motor to power both walking and dispensing without external control.",
  "Remain stable and fit within an 18 x 18 x 30 cm shoebox volume."
];

const ratios = [
  { path: "Motor to central shaft", ratio: "39:8" },
  { path: "Central shaft to legs", ratio: "25:19" },
  { path: "Central shaft to auger drive", ratio: "32:1" }
];

export default function ProteinPalPage() {
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
        <div className="section-shell grid gap-10 py-16 md:py-24 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              ME 370 / Mechanical Design I
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              ProteinPal
            </h1>
            <p className="mt-7 text-xl leading-9 text-graphite">
              A single-motor walking robot that coordinates four Klann-linkage legs
              with a twin-auger dispenser to deliver protein bars at fixed intervals
              along a ten-meter path.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] border border-line bg-field shadow-panel">
            <Image
              src="/images/proteinpal/prototype.png"
              alt="Completed ProteinPal walking protein-bar dispenser"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <PackageOpen className="h-7 w-7 text-teal" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Design Brief
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Walk, carry, and dispense with one mechanical input.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              ProteinPal was designed as an autonomous delivery concept for gym-goers.
              The challenge was to synchronize locomotion and payload release without
              separate motors or external control, while keeping the motion visible
              and understandable through transparent acrylic walls.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {requirements.map((requirement) => (
              <div
                key={requirement}
                className="flex gap-4 rounded-[8px] border border-line bg-white p-5 shadow-panel"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal" />
                <p className="text-base leading-8 text-graphite">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[6/5] overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
            <Image
              src="/images/proteinpal/assembly-cad.png"
              alt="Fusion 360 assembly of ProteinPal showing legs, gears, and twin augers"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain p-4"
            />
          </div>
          <div>
            <Settings2 className="h-7 w-7 text-teal" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Integrated Architecture
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              One drivetrain, two coordinated functions.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              Motor power drives the legs on one side and crosses the chassis through
              a central shaft to the opposite pair. A sprocket on that shaft also
              transfers motion through a chain, worm, and helical gear to the
              dispenser, allowing the legs to cycle quickly while the augers advance
              payloads at a much slower, controlled rate.
            </p>
            <div className="mt-8 grid gap-3">
              {ratios.map((item) => (
                <div
                  key={item.path}
                  className="flex items-center justify-between gap-5 rounded-[8px] border border-line bg-white px-5 py-4"
                >
                  <span className="text-base text-graphite">{item.path}</span>
                  <span className="font-display text-lg font-semibold text-copper">
                    {item.ratio}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <Footprints className="h-7 w-7 text-copper" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Walking Mechanism
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              A phased Klann gait for stable forward motion.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              Two six-bar Klann legs were mounted on each side. The left and right
              sets were phased by half a central-gear rotation, so one side remained
              in contact with the ground while the other returned for its next step.
              Small center wheels were added to improve stability.
            </p>
            <p className="mt-5 text-lg leading-9 text-graphite">
              Position, velocity, and acceleration analysis estimated a walking speed
              of roughly 0.676 in/s and helped define the creeping gait before the
              physical assembly was finalized.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
            <div className="relative aspect-[16/6]">
              <Image
                src="/images/proteinpal/gait-analysis.png"
                alt="Klann linkage foot-path and gait analysis"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain p-4"
              />
            </div>
            <figcaption className="border-t border-line p-5 text-base leading-7 text-graphite">
              Linkage simulation used to study foot trajectory and phase the two
              sides of the robot.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-line bg-ink py-20 text-white md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[8px] border border-white/14 bg-white">
            <Image
              src="/images/proteinpal/side-cad.png"
              alt="Side CAD view of ProteinPal's auger dispenser and leg gear train"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain p-4"
            />
          </div>
          <div>
            <Cog className="h-7 w-7 text-copper" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Dispensing Mechanism
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Twin augers index one payload at a time.
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/72">
              Two screws rotate inward to move each protein-bar container toward the
              outlet. Standardized payload boxes include grooves that seat into the
              screw threads, keeping the bars aligned and reducing sliding, mixing,
              and jams as the robot walks.
            </p>
            <p className="mt-5 text-lg leading-9 text-white/72">
              The outlet and guide geometry allow one payload to clear before the
              next advances, while the gear reduction sets the release spacing from
              the robot&apos;s travel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Boxes className="h-7 w-7 text-teal" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Detailed Design
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Built from a fully defined mechanical assembly.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              The final package combined transparent acrylic panels, printed augers,
              custom payload boxes, steel shafts, gears, sprockets, bearings, and
              linkage components. The exploded drawing documented the assembly and
              bill of materials before fabrication and final integration.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/proteinpal/exploded-drawing.jpg"
                alt="ProteinPal exploded assembly drawing and parts list"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-3"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="border-t border-line bg-field py-20 md:py-28">
        <div className="section-shell">
          <Ruler className="h-7 w-7 text-copper" />
          <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            Final Performance
          </p>
          <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Reliable dispensing with a useful lesson in walking calibration.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-[8px] border border-line bg-white p-6 shadow-panel">
              <p className="font-display text-3xl font-semibold text-teal">185 cm</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                First release
              </h3>
              <p className="mt-3 text-base leading-8 text-graphite">
                The first payload dropped close to the two-meter target.
              </p>
            </article>
            <article className="rounded-[8px] border border-line bg-white p-6 shadow-panel">
              <p className="font-display text-3xl font-semibold text-teal">193-199 cm</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                Remaining spacing
              </h3>
              <p className="mt-3 text-base leading-8 text-graphite">
                Later payloads were released consistently near the intended interval.
              </p>
            </article>
            <article className="rounded-[8px] border border-line bg-white p-6 shadow-panel">
              <p className="font-display text-3xl font-semibold text-teal">&gt;4 m/min</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                Walking speed
              </h3>
              <p className="mt-3 text-base leading-8 text-graphite">
                Average speed remained above the baseline requirement.
              </p>
            </article>
          </div>
          <p className="mt-8 max-w-4xl text-lg leading-9 text-graphite">
            The dispenser performed consistently, while straight-line motion varied
            with gait phasing, surface friction, and wheel behavior. A future version
            would add more dimensional margin around the shoebox boundary and use
            repeated gait calibration to reduce directional drift.
          </p>
        </div>
      </section>
    </main>
  );
}
