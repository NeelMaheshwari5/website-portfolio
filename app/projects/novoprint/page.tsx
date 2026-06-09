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
      "I modeled the base, Z-axis gearbox, and gripper in Fusion 360, designing around printed tolerances, practical assembly, and easy part replacement."
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
  "Used small direction changes on the Z-axis to understand the gearbox backlash.",
  "Monitored the CAN network while all joints moved and confirmed termination at the two bus ends."
];

export default function NovoPrintPage() {
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
              src="/images/novoprint/z-axis-gearbox.png"
              alt="Fusion 360 model of the NovoPrint Z-axis gearbox"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Z-Axis Gearbox
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              A compact printed reducer for vertical motion.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              I modeled a cycloidal-style stage in Fusion 360. A lobed disk engages
              multiple pin rollers to spread contact and increase torque, while the
              split housing locates opposing deep-groove bearings around the input
              and output. The design was intended to remain printable, serviceable,
              and adaptable for a lightweight extruder.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="lg:order-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] border border-line bg-white shadow-panel">
              <Image
                src="/images/novoprint/gripper-cad.png"
                alt="Fusion 360 model of the NovoPrint servo-driven gripper"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Swappable End Effector
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              A servo-driven gripper built for quick changes.
            </h2>
            <p className="mt-6 text-lg leading-9 text-graphite">
              The gripper converts a small servo rotation into horizontal jaw motion
              through a geared mechanism. Two guide rails keep the jaws aligned, and
              textured faces improve hold on printed parts. A four-screw mounting
              pattern lets the assembly replace the extruder without redesigning the
              rest of the arm.
            </p>
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
