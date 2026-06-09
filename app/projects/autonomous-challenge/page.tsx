import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Blocks,
  Bot,
  Flag,
  Route,
  SlidersHorizontal
} from "lucide-react";

const stages = [
  {
    title: "Work within the rulebook",
    icon: SlidersHorizontal,
    text:
      "The virtual vehicle had to be configured within the competition's component and performance limits, making tradeoffs part of the design process."
  },
  {
    title: "Build the control logic",
    icon: Blocks,
    text:
      "I used HyperSkill's block-based tools to create autonomous navigation behavior and organize the vehicle's response to course conditions."
  },
  {
    title: "Test on practice courses",
    icon: Route,
    text:
      "Repeated practice runs helped refine the logic before the vehicle competed at E-Fest Tech Connect on March 22, 2025."
  }
];

export default function AutonomousChallengePage() {
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
          <Link href="/" className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">
            NM
          </Link>
        </div>
      </nav>

      <header className="relative min-h-[520px] overflow-hidden">
        <Image
          src="/images/engineering-hero.png"
          alt="Engineering workspace used as a visual for the autonomous systems project"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,32,28,0.96),rgba(23,32,28,0.78)_48%,rgba(23,32,28,0.25))]" />
        <div className="section-shell relative flex min-h-[520px] items-center py-16 text-white">
          <div className="max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              ASME XRC / Spring 2025
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Autonomous Challenge
            </h1>
            <p className="mt-7 text-xl leading-9 text-white/76">
              A virtual autonomous vehicle designed and programmed in HyperSkill to
              complete competition courses without driver input.
            </p>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div className="flex max-w-4xl items-start gap-5">
            <Bot className="mt-1 h-8 w-8 shrink-0 text-teal" />
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                Project Overview
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
                Controls decisions shaped by competition constraints.
              </h2>
              <p className="mt-6 text-lg leading-9 text-graphite">
                The challenge combined vehicle configuration with autonomous logic.
                I had to interpret the event rules, assemble an allowed virtual
                system, and program behavior that could navigate repeatably across
                the available practice environments.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <article key={stage.title} className="rounded-[8px] border border-line bg-white p-6 shadow-panel">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-teal" />
                    <span className="font-display text-sm font-semibold text-copper">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{stage.title}</h3>
                  <p className="mt-4 text-base leading-8 text-graphite">{stage.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20">
        <div className="section-shell">
          <div className="max-w-4xl rounded-[8px] bg-ink p-7 text-white md:p-10">
            <Flag className="h-7 w-7 text-copper" />
            <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Competition
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              E-Fest Tech Connect
            </h2>
            <p className="mt-5 text-lg leading-9 text-white/72">
              The completed vehicle raced autonomously on March 22, 2025. The project
              strengthened my understanding of structured control logic, constraint
              management, and the value of iterative testing before a live event.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
