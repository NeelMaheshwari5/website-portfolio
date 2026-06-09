import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Cog,
  Gauge,
  Layers3,
  Scale,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

const transmissionModes = [
  {
    title: "High torque",
    ratio: "14.06:1",
    text:
      "A two-stage compound 16-tooth to 60-tooth gear train prioritized pulling force for the strength event."
  },
  {
    title: "High speed",
    ratio: "0.5:1",
    text:
      "A 60-tooth to 30-tooth arrangement increased wheel speed and helped the vehicle exceed the target velocity."
  },
  {
    title: "Reverse",
    ratio: "0.79:1",
    text:
      "A 48-tooth to 38-tooth path provided controlled reverse motion for the agility course."
  }
];

const performance = [
  { label: "Strength", result: "1 kg to 4 kg" },
  { label: "Speed", result: "0.8 m/s to 1.0 m/s" },
  { label: "Agility", result: "0 to 5 traversals" },
  { label: "Efficiency", result: "Passed 60% target" },
  { label: "Durability", result: "Passed drop test" },
  { label: "Cost", result: "$23.92" }
];

export default function TriShiftPage() {
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
              ME 371 / Mechanical Design II
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              TriShift
            </h1>
            <p className="mt-7 text-xl leading-9 text-graphite">
              A competition vehicle built around a servo-shifted constant-mesh
              transmission, balancing pulling strength, speed, agility, durability,
              efficiency, and a strict cost target.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[8px] border border-line bg-field shadow-panel">
            <Image
              src="/images/trishift/completed-vehicle.png"
              alt="Completed TriShift vehicle with exposed transmission and impact protection"
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
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Transmission Architecture
          </p>
          <h2 className="mt-3 max-w-4xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Three operating modes from one continuously meshed drivetrain.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-9 text-graphite">
            A rack-and-pinion and cam-follower mechanism uses a servo to engage two
            dog clutches. One clutch selects the compound high-torque path, the other
            selects reverse, and disengaging both leaves the high-speed path active.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {transmissionModes.map((mode) => (
              <article
                key={mode.title}
                className="rounded-[8px] border border-line bg-white p-6 shadow-panel"
              >
                <Gauge className="h-6 w-6 text-teal" />
                <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-copper">
                  {mode.ratio}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {mode.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-graphite">{mode.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
            <Image
              src="/images/trishift/high-torque-geartrain.png"
              alt="CAD view of the TriShift compound high-torque gear train"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain p-4"
            />
          </div>
          <div>
            <Cog className="h-7 w-7 text-teal" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Gear-Train Iteration
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              More torque in a smaller package.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              The original 12-tooth to 72-tooth strength stage produced a ratio of
              6:1 but required a large gear and another stage simply to route power
              to the axle. Replacing it with two compact 16-tooth to 60-tooth stages
              raised the ratio to 14.06:1 and improved the lifting result from 1 kg
              to 4 kg.
            </p>
            <p className="mt-5 text-lg leading-9 text-graphite">
              The tradeoff was additional gear contact, alignment sensitivity, and
              friction, all of which became important during physical testing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Scale className="h-7 w-7 text-copper" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Gear Analysis
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Checking the most heavily loaded printed gear.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              The final driven spur gear in the high-torque path was evaluated under
              a conservative stall-torque condition. The Lewis bending equation was
              used with the load carried by one tooth at the pitch radius. The
              analysis indicated that the PLA gear was adequate, with a reported
              factor of safety above 3.7.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/trishift/gear-free-body.png"
                alt="Free-body diagram of the high-torque gear pair"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-4"
              />
            </div>
            <figcaption className="border-t border-line p-5 text-base leading-7 text-graphite">
              Tangential and radial forces used to estimate gear-tooth bending stress.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-line bg-ink py-20 text-white md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <Layers3 className="h-7 w-7 text-copper" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Impact Protection
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Dissipating the drop before it reached the electronics.
            </h2>
            <p className="mt-6 text-lg leading-9 text-white/72">
              The durability concept placed foam above a suspended roof plate,
              supported by four corner springs over the protected chassis. Energy
              would be absorbed progressively through foam compression and spring
              deflection instead of transferring directly into the transmission and
              control hardware.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[8px] border border-white/14 bg-white">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/trishift/impact-system.png"
                alt="Layer diagram of the TriShift foam, roof, springs, chassis, and electronics"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-contain p-4"
              />
            </div>
          </figure>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
            <Image
              src="/images/trishift/roof-safety-factor.png"
              alt="Fusion 360 safety-factor result for the TriShift roof plate"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain"
            />
          </div>
          <div>
            <ShieldCheck className="h-7 w-7 text-teal" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Structural Validation
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              The roof remained within the target range.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              A 120 N equivalent static load was applied to the roof model after
              translating the impact through an impact factor. Fusion 360 predicted
              a minimum safety factor of 3.604 and a maximum displacement of
              0.377 mm, consistent with the vehicle surviving the physical drop test.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-field py-20 md:py-28">
        <div className="section-shell">
          <TrendingUp className="h-7 w-7 text-copper" />
          <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            Competition Results
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Iteration produced measurable gains across the events.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {performance.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-[8px] border border-line bg-white p-5 shadow-panel"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-teal" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-steel">
                    {item.label}
                  </p>
                  <p className="mt-1 font-display text-xl font-semibold text-ink">
                    {item.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-lg leading-9 text-graphite">
            The final vehicle met the speed, agility, efficiency, durability, cost,
            and payload goals. It lifted 4 kg against a 5 kg stretch target, leaving
            strength as the clearest opportunity for another design cycle.
          </p>
        </div>
      </section>
    </main>
  );
}
