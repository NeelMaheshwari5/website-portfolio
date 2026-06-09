import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Boxes,
  Code2,
  Droplets,
  Factory,
  Flame,
  GraduationCap,
  Ruler,
  Shapes
} from "lucide-react";

const mechanicalCourses = [
  {
    title: "Computer-Aided Design",
    icon: Ruler,
    text:
      "Parametric modeling, assemblies, engineering drawings, design communication, and CAD workflows used across mechanical projects."
  },
  {
    title: "Thermodynamics",
    icon: Flame,
    text:
      "Energy balances, thermodynamic properties, cycles, efficiency, and the analytical foundation used in thermal-system work."
  },
  {
    title: "Design for Manufacturability",
    icon: Factory,
    text:
      "Design decisions shaped by fabrication processes, assembly planning, material use, tolerances, cost, and production constraints."
  },
  {
    title: "Solid Mechanics",
    icon: Shapes,
    text:
      "Stress, strain, deformation, loading, and structural behavior used to reason about mechanical components and assemblies."
  },
  {
    title: "Engineering Materials",
    icon: Boxes,
    text:
      "Material structure, properties, selection, failure behavior, and the relationship between processing and performance."
  },
  {
    title: "Fluid Dynamics",
    icon: Droplets,
    text:
      "Fluid statics, conservation principles, internal flow, pressure losses, and the behavior of mechanical flow systems."
  }
];

const computingFocus = [
  "Java and object-oriented programming",
  "Python for technical workflows",
  "MATLAB for engineering computation",
  "C++ fundamentals",
  "Block-based control logic"
];

const academicRoles = [
  {
    course: "ME 170",
    role: "CAD Lab Grader and Course Assistant",
    text:
      "Supported CAD lab sessions, reviewed design work, and helped students develop stronger modeling habits."
  },
  {
    course: "CS 124",
    role: "Programming Tutor",
    text:
      "Guided first-year students through programming fundamentals, debugging, and structured problem solving."
  },
  {
    course: "ECE 205",
    role: "Course Grader",
    text:
      "Evaluated problem sets covering foundational circuit-analysis concepts."
  },
  {
    course: "ME 200",
    role: "Course Grader",
    text:
      "Reviewed thermodynamics problem sets and assessed analytical work."
  }
];

export default function CourseworkPage() {
  return (
    <main className="noise min-h-screen bg-paper">
      <nav className="border-b border-line bg-paper/90 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-graphite transition hover:text-teal"
          >
            <ArrowLeft className="h-4 w-4" />
            Portfolio
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
          <div className="flex max-w-4xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                Academic Foundation
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
                Coursework
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-graphite">
                Mechanical engineering fundamentals supported by a computer science
                minor and reinforced through teaching, tutoring, and course grading.
              </p>
            </div>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[8px] bg-field text-teal">
              <GraduationCap className="h-8 w-8" />
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Mechanical Engineering
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Core subjects applied across design, analysis, and testing.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mechanicalCourses.map((course) => {
              const Icon = course.icon;
              return (
                <article
                  key={course.title}
                  className="rounded-[8px] border border-line bg-white p-6 shadow-panel"
                >
                  <Icon className="h-6 w-6 text-teal" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {course.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-graphite">
                    {course.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20 md:py-28">
        <div className="section-shell grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[8px] bg-ink p-7 text-white">
            <Code2 className="h-7 w-7 text-copper" />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-copper">
              Computer Science Minor
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">
              Computing for engineering problems.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              Programming coursework supports automation, technical computation,
              controls thinking, and clearer problem decomposition.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {computingFocus.map((item) => (
              <div
                key={item}
                className="flex min-h-24 items-center gap-3 rounded-[8px] border border-line bg-white p-5 shadow-panel"
              >
                <BookOpen className="h-5 w-5 shrink-0 text-teal" />
                <p className="font-medium leading-7 text-graphite">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Teaching and Course Support
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
            Coursework reinforced by helping others learn it.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {academicRoles.map((item) => (
              <article
                key={item.course}
                className="rounded-[8px] border border-line bg-white p-6 shadow-panel"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-copper">
                    {item.course}
                  </span>
                  <BookOpen className="h-5 w-5 text-teal" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  {item.role}
                </h3>
                <p className="mt-4 text-base leading-8 text-graphite">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-white py-10">
        <div className="section-shell">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </div>
      </footer>
    </main>
  );
}
