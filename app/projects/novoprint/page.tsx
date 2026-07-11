import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  Cable,
  CheckCircle2,
  Cog,
  Move3d,
  Trophy,
  Wrench
} from "lucide-react";

const contributions = [
  {
    title: "Mechanical design",
    icon: Cog,
    text:
      "I modeled the base and extruder mounting bracket in Fusion 360, designing around printed tolerances, service access, and clean assembly."
  },
  {
    title: "Electrical integration",
    icon: Cable,
    text:
      "I soldered and assembled the electronics, daisy-chained six CAN-bus servos, connected joint endstops, and organized grounding at a central point in the base."
  },
  {
    title: "Build and test",
    icon: Wrench,
    text:
      "I helped turn the CAD into a functioning system, then checked homing, joint motion, coordinated paths, positioning repeatability, backlash, and CAN stability."
  }
];

const tests = [
  "Homed and jogged all six joints to verify motor direction, endstops, and zero positions.",
  "Ran coordinated multi-joint moves along straight and curved paths while checking for stutter or faults.",
  "Returned the arm to marked poses to evaluate repeatable positioning.",
  "Checked small direction changes at the joints to understand backlash and repeatability.",
  "Monitored the CAN network while all joints moved and confirmed termination at the two bus ends."
];

export default function NovoPrintPage() {
  return (
    <main className="noise min-h-screen bg-paper">
      <nav className="border-b border-line bg-ink text-white backdrop-blur-xl [&_a]:text-white [&_svg]:text-white">
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
        <div className="section-shell grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              ASME Product Development Team / Spring 2025
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              NovoPrint
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-graphite">
              A low-cost, student-built 6-DOF robotic arm created to explore printing
              on curved and angled surfaces beyond conventional flat-layer systems.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-[8px] border border-line bg-field px-4 py-3 text-sm font-semibold text-ink">
              <Trophy className="h-5 w-5 text-copper" />
              Distinguished Technology Award, UIUC Engineering Open House
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[8px] border border-line bg-field shadow-panel">
            <Image
              src="/images/novoprint/assembled-arm.jpeg"
              alt="Partially assembled NovoPrint robotic arm with wiring visible"
              fill
              priority
              sizes="(min-width: 1024px) 34vw, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            The Build
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Designed for accessible fabrication and practical iteration.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-9 text-graphite">
            The arm was developed as a mostly 3D-printed system using PLA and PETG,
            with standard nuts, bolts, and washers as the primary purchased hardware.
            Friction-fit hex pockets kept fasteners captive without heat-set inserts,
            which made assembly and rework quicker during a fast team build.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {contributions.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[8px] border border-line bg-white p-6 shadow-panel"
                >
                  <Icon className="h-6 w-6 text-teal" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-graphite">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
            <Image
              src="/images/novoprint/assembled-arm.jpeg"
              alt="Partially assembled NovoPrint robotic arm showing the end effector area"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Extruder Mounting
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              A printed bracket that made the extruder easier to mount, adjust, and service.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              I designed the extruder mounting bracket so the toolhead could attach
              securely to the robotic arm without making the rest of the structure
              difficult to assemble. The bracket was shaped around printed part
              clearances, fastener access, wiring paths, and the need to remove or
              adjust the extruder during testing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Assembly Planning
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              The build sequence was treated as part of the design.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              Beyond individual CAD parts, I worked through how the arm would
              actually come together on the bench. That meant planning fastening
              order, keeping tools clear of tight spaces, routing wires before
              joints became boxed in, and making sure printed parts could be
              replaced without tearing down the whole mechanism.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Fastener Access",
                text: "Mounting points were placed so common tools could reach them after neighboring parts were installed."
              },
              {
                title: "Wire Routing",
                text: "Cable paths were considered early so the CAN-bus wiring could move cleanly with the arm."
              },
              {
                title: "Serviceability",
                text: "The toolhead and printed modules were kept practical to remove, inspect, and revise during testing."
              }
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[8px] border border-line bg-white p-6 shadow-panel"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-graphite">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink py-20 text-white md:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <Cable className="h-7 w-7 text-copper" />
              <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                Controls and Wiring
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
                One bus connecting six joints.
              </h2>
              <p className="mt-6 text-lg leading-9 text-white/72">
                Six servos were daisy-chained across CAN_H and CAN_L, with a 12 V
                supply and a USB-to-CAN adapter connecting the arm to a host computer.
                Joint endstops were routed to nearby controllers and the grounds met
                at a star point in the base to reduce loop problems.
              </p>
            </div>
            <figure className="overflow-hidden rounded-[8px] border border-white/14 bg-white/[0.04]">
              <div className="relative aspect-[16/5]">
                <Image
                  src="/images/novoprint/can-wiring.jpg"
                  alt="CAN-bus wiring layout for the six NovoPrint servo joints"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="border-t border-white/12 p-5 text-base leading-7 text-white/68">
                Wiring plan showing the adapter, power trunk, six servo controllers,
                and joint endstops.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Move3d className="h-7 w-7 text-teal" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Motion Testing
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Proving the system could move reliably.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              This phase focused on motion rather than print-quality or load
              characterization. ROS handled motion planning, while a lightweight
              serial connection carried commands to the arm.
            </p>
          </div>
          <div className="grid gap-4">
            {tests.map((test) => (
              <div
                key={test}
                className="flex gap-4 rounded-[8px] border border-line bg-white p-5 shadow-panel"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal" />
                <p className="text-base leading-8 text-graphite">{test}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white py-20">
        <div className="section-shell">
          <div className="max-w-4xl rounded-[8px] border border-line bg-field p-7 md:p-10">
            <Bot className="h-7 w-7 text-copper" />
            <h2 className="mt-5 font-display text-3xl font-semibold text-ink">
              What I took from the project
            </h2>
            <p className="mt-5 text-lg leading-9 text-graphite">
              NovoPrint gave me experience carrying parts from an empty CAD file
              through printing, assembly, wiring, and system-level debugging. The
              biggest lesson was that good mechanical design includes the realities
              of fabrication, service access, wiring, and testing from the start.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
