import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Code2,
  GraduationCap
} from "lucide-react";

const technicalCourses = [
  {
    code: "ME 400",
    title: "Energy Conversion Systems",
    term: "Spring 2026",
    category: "Thermal and Fluid Systems",
    description: "Performance and design of systems that convert thermal, mechanical, and electrical energy.",
    skills: ["Cycle analysis", "System efficiency", "Energy balances", "Performance tradeoffs"]
  },
  {
    code: "ME 371",
    title: "Mechanical Design II",
    term: "Spring 2026",
    category: "Design and Manufacturing",
    description: "Team-based machine design using gear trains, component analysis, FEA, prototyping, and physical testing.",
    skills: ["Machine design", "Gear analysis", "FEA", "Design validation"]
  },
  {
    code: "ME 340",
    title: "Dynamics of Mechanical Systems",
    term: "Spring 2026",
    category: "Mechanics and Dynamics",
    description: "Dynamic modeling of mechanical systems using equations of motion and system-response methods.",
    skills: ["Dynamic modeling", "Vibrations", "System response", "MATLAB"]
  },
  {
    code: "CS 225",
    title: "Data Structures",
    term: "Spring 2026",
    category: "Computing and Data",
    description: "Implementation and analysis of data structures and algorithms in C++.",
    skills: ["C++", "Algorithms", "Trees and graphs", "Complexity analysis"]
  },
  {
    code: "ME 370",
    title: "Mechanical Design I",
    term: "Fall 2025",
    category: "Design and Manufacturing",
    description: "Mechanism design and integration through a single-motor walking and dispensing robot.",
    skills: ["Linkage design", "Kinematics", "Gear ratios", "Prototype testing"]
  },
  {
    code: "ME 330",
    title: "Engineering Materials",
    term: "Fall 2025",
    category: "Design and Manufacturing",
    description: "Relationships among material structure, processing, properties, selection, and failure.",
    skills: ["Material selection", "Failure modes", "Phase behavior", "Processing-property links"]
  },
  {
    code: "STAT 400",
    title: "Statistics and Probability I",
    term: "Fall 2025",
    category: "Computing and Data",
    description: "Probability models, random variables, estimation, and statistical inference.",
    skills: ["Probability", "Distributions", "Inference", "Data interpretation"]
  },
  {
    code: "ME 310",
    title: "Fundamentals of Fluid Dynamics",
    term: "Spring 2025",
    category: "Thermal and Fluid Systems",
    description: "Conservation laws, internal and external flow, dimensional analysis, and pressure losses.",
    skills: ["Control volumes", "Pipe flow", "Dimensional analysis", "Fluid forces"]
  },
  {
    code: "TAM 251",
    title: "Introductory Solid Mechanics",
    term: "Spring 2025",
    category: "Mechanics and Dynamics",
    description: "Stress, strain, deformation, torsion, bending, and structural loading.",
    skills: ["Stress analysis", "Beam bending", "Torsion", "Deflection"]
  },
  {
    code: "TAM 212",
    title: "Introductory Dynamics",
    term: "Spring 2025",
    category: "Mechanics and Dynamics",
    description: "Kinematics and kinetics of particles and rigid bodies.",
    skills: ["Rigid-body motion", "Energy methods", "Momentum", "Kinematics"]
  },
  {
    code: "ECE 206",
    title: "Electrical and Electronic Circuits Laboratory",
    term: "Spring 2025",
    category: "Electrical Systems and Testing",
    description: "Hands-on circuit measurement, instrumentation, assembly, and experimental validation.",
    skills: ["Oscilloscopes", "Circuit assembly", "Measurement", "Lab documentation"]
  },
  {
    code: "ECE 205",
    title: "Electrical and Electronic Circuits",
    term: "Fall 2024",
    category: "Electrical Systems and Testing",
    description: "DC and AC circuit analysis, transient response, operational amplifiers, and electronics fundamentals.",
    skills: ["Circuit analysis", "Transient response", "Op-amps", "Electrical modeling"]
  },
  {
    code: "ME 200",
    title: "Thermodynamics",
    term: "Fall 2024",
    category: "Thermal and Fluid Systems",
    description: "Properties, energy balances, entropy, cycles, and thermodynamic system performance.",
    skills: ["First and second laws", "Cycle analysis", "Property tables", "Efficiency"]
  },
  {
    code: "TAM 210",
    title: "Introduction to Statics",
    term: "Fall 2024",
    category: "Mechanics and Dynamics",
    description: "Force systems, equilibrium, structures, centroids, and friction.",
    skills: ["Free-body diagrams", "Equilibrium", "Trusses", "Friction"]
  },
  {
    code: "CS 128",
    title: "Introduction to Computer Science II",
    term: "Fall 2024",
    category: "Computing and Data",
    description: "Object-oriented programming, memory, data structures, and software design in C++.",
    skills: ["C++", "Object-oriented design", "Memory management", "Debugging"]
  },
  {
    code: "ME 270",
    title: "Design for Manufacturability",
    term: "Spring 2024",
    category: "Design and Manufacturing",
    description: "Product design shaped by manufacturing, assembly, sustainability, materials, and cost.",
    skills: ["DFMA", "Process selection", "Circular design", "Design of experiments"]
  },
  {
    code: "CS 124",
    title: "Introduction to Computer Science I",
    term: "Spring 2024",
    category: "Computing and Data",
    description: "Programming fundamentals, algorithms, testing, and structured problem solving in Java.",
    skills: ["Java", "Algorithms", "Testing", "Problem decomposition"]
  },
  {
    code: "MATH 257",
    title: "Linear Algebra with Computational Applications",
    term: "Spring 2024",
    category: "Computing and Data",
    description: "Matrix methods, vector spaces, eigenvalues, and computational linear algebra.",
    skills: ["Matrix methods", "Eigenvalues", "Linear systems", "Computational modeling"]
  },
  {
    code: "ME 170",
    title: "Computer-Aided Design",
    term: "Fall 2023",
    category: "Design and Manufacturing",
    description: "Parametric part modeling, assemblies, drawings, tolerancing, and product-design communication.",
    skills: ["CAD", "Assemblies", "Engineering drawings", "Fits and tolerances"]
  }
];

const courseCategories = [
  {
    title: "Design and Manufacturing",
    description:
      "Product development from CAD and materials selection through mechanism design, prototyping, and validation."
  },
  {
    title: "Mechanics and Dynamics",
    description:
      "Analytical foundations for understanding forces, motion, deformation, and mechanical-system response."
  },
  {
    title: "Thermal and Fluid Systems",
    description:
      "Energy, thermodynamics, and fluid behavior applied to the analysis of mechanical systems."
  },
  {
    title: "Computing and Data",
    description:
      "Programming, algorithms, mathematics, and statistics used to solve and interpret engineering problems."
  },
  {
    title: "Electrical Systems and Testing",
    description:
      "Circuit analysis, instrumentation, and hands-on experimental measurement."
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
          <h2 className="font-display text-4xl font-semibold leading-[0.98] text-teal md:text-6xl">
            Technical Coursework
          </h2>
          <p className="mt-4 max-w-3xl font-display text-xl font-semibold leading-snug text-ink md:text-2xl">
            Completed courses grouped by engineering discipline.
          </p>
          <div className="mt-14 space-y-16">
            {courseCategories.map((category) => (
              <div key={category.title}>
                <div className="max-w-3xl border-l-2 border-copper pl-5">
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {category.title}
                  </h3>
                  <p className="mt-2 leading-7 text-graphite">{category.description}</p>
                </div>
                <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {technicalCourses
                    .filter((course) => course.category === category.title)
                    .map((course) => (
                      <article
                        key={course.code}
                        tabIndex={0}
                        className="group relative h-56 overflow-hidden rounded-[8px] border border-line bg-white p-6 shadow-panel outline-none transition hover:-translate-y-1 hover:border-teal hover:shadow-soft focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-4"
                      >
                        <div className="flex h-full flex-col">
                          <span className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-copper">
                            {course.code}
                          </span>
                          <h4 className="mt-7 font-display text-2xl font-semibold leading-tight text-ink">
                            {course.title}
                          </h4>
                          <p className="mt-auto text-sm font-medium text-steel">
                            {course.term}
                          </p>
                        </div>
                        <div className="absolute inset-0 flex translate-y-3 flex-col bg-ink p-6 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                          <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-copper">
                            {course.code} / {course.term}
                          </p>
                          <p className="mt-4 text-sm leading-6 text-white/72">
                            {course.description}
                          </p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {course.skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-[8px] border border-white/15 bg-white/8 px-2.5 py-1.5 text-xs font-medium text-white/85"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
              </div>
            ))}
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
