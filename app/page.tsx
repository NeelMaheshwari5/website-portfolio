"use client";

import { type CSSProperties, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Box,
  BriefcaseBusiness,
  CircuitBoard,
  Cpu,
  FlaskConical,
  FolderKanban,
  Gauge,
  GraduationCap,
  Hammer,
  PackageOpen,
  Linkedin,
  Mail,
  MapPin,
  Printer,
  Recycle,
  Ruler,
  Trophy
} from "lucide-react";

const experience = [
  {
    company: "thyssenkrupp UHDE India Pvt. Ltd.",
    role: "Mechanical Static Intern",
    place: "Mumbai, India",
    date: "Jul 2024 - Aug 2024",
    href: "/work/thyssenkrupp",
    logo: "/images/companies/thyssenkrupp.svg",
    logoAlt: "thyssenkrupp logo",
    darkLogoBand: true,
    overview:
      "Static equipment analysis spanning refrigerated gas storage, nozzle flexibility, engineering standards, and a faster boiler specification review workflow.",
    skills: ["Static equipment", "Nozzle analysis", "Engineering codes", "Technical bid review", "LLM validation"]
  },
  {
    company: "Frido",
    role: "Research and Design Intern",
    place: "Pune, India",
    date: "Jun 2021 - Jul 2022",
    href: "/work/arcatron",
    logo: "/images/companies/arcatron-frido.png",
    logoAlt: "Frido logo",
    darkLogoBand: false,
    overview:
      "Designed a foldable, one-hand-drive wheelchair concept while learning CAD, prototyping, factory workflows, and accessible product development.",
    skills: ["SolidWorks", "Fusion 360", "Mechanism design", "3D printing", "Design for accessibility"]
  }
];

const projects = [
  {
    title: "NovoPrint",
    tag: "ASME Product Development Team",
    date: "Jan 2025 - May 2025",
    href: "/projects/novoprint",
    icon: Printer,
    image: "/images/novoprint/assembled-arm.jpeg",
    summary:
      "A mostly 3D-printed, 6-DOF robotic arm developed to explore non-planar printing on curved and angled surfaces.",
    skills: ["Fusion 360", "CAN bus", "3D printing", "Gearbox design", "System testing"]
  },
  {
    title: "ASME Autonomous Challenge",
    tag: "ASME XRC",
    date: "Feb 2025 - Mar 2025",
    href: "/projects/autonomous-challenge",
    icon: CircuitBoard,
    image: "/images/engineering-hero.png",
    summary:
      "A rule-constrained autonomous vehicle programmed in HyperSkill to navigate competition courses without driver input.",
    skills: ["Control logic", "Autonomous systems", "Constraint analysis", "Iterative testing"]
  },
  {
    title: "Printess 3D Bioprinter",
    tag: "Bioprinting Project",
    date: "In progress",
    href: "/projects/printess-3d-bioprinter",
    icon: Printer,
    image: "/images/printess/printessa.webp",
    summary:
      "An in-progress bioprinting project focused on precise material deposition, motion control, and clean mechanical packaging.",
    skills: ["Bioprinting", "Precision motion", "Mechanical packaging", "CAD", "Prototype planning"]
  },
  {
    title: "TriShift",
    tag: "ME 371 Mechanical Design",
    date: "Spring 2026",
    href: "/projects/trishift",
    icon: Gauge,
    image: "/images/trishift/completed-vehicle.png",
    summary:
      "A competition vehicle with a constant-mesh transmission that shifts between high torque, high speed, and reverse.",
    skills: ["Gear-train design", "Machine components", "FEA", "Tradeoff analysis", "Physical testing"]
  },
  {
    title: "ProteinPal",
    tag: "ME 370 Mechanical Design",
    date: "Fall 2025",
    href: "/projects/proteinpal",
    icon: PackageOpen,
    image: "/images/proteinpal/prototype.png",
    summary:
      "A single-motor walking robot that uses Klann-linkage legs and twin augers to dispense protein bars at fixed travel intervals.",
    skills: ["Linkage analysis", "Gear ratios", "Auger design", "CAD integration", "Prototype calibration"]
  },
  {
    title: "Fruit Juicer",
    tag: "ME 270 Design Challenge",
    date: "Spring 2024",
    href: "/projects/fruit-reamer",
    icon: Recycle,
    image: "/images/fruit-reamer/assembly-cad.png",
    summary:
      "A manual citrus juicer that repurposes a coffee grinder's crank mechanism through design for disassembly and circular material use.",
    skills: ["Circular design", "Design for disassembly", "Material selection", "CAD", "Design of experiments"]
  },
  {
    title: "SuperCaddy",
    tag: "ME 170 Product Design",
    date: "Fall 2023",
    href: "/projects/supercaddy",
    icon: Ruler,
    image: "/images/supercaddy/assembly.jpg",
    summary:
      "A foldable, wall-mounted shower caddy with refillable dispensers, designed for dorm living and users with low hand dexterity.",
    skills: ["User research", "Concept selection", "GD&T", "Tolerance analysis", "Design for manufacturing"]
  }
];

const research = [
  {
    title: "ACRC Summer Research Assistant",
    date: "May 2025 - Jul 2025",
    href: "/research/acrc",
    overview:
      "Built compressor-test infrastructure for flammable refrigerant research, including electrical enclosure CAD, load-stand instrumentation, and isobutane pressure testing.",
    skills: ["Electrical enclosure CAD", "Instrumentation", "LabVIEW data capture", "Leak testing", "Pressure testing"]
  },
  {
    title: "Ewoldt Research Group",
    date: "In progress",
    href: "/research/ewoldt",
    overview:
      "Ongoing research work connected to mechanical systems and experimental engineering. More details will be added as the project develops.",
    skills: ["Research planning", "Experimental work", "Mechanical design", "Technical communication"]
  }
];

const skillGroups = [
  {
    title: "CAD and Analysis",
    icon: Box,
    skills: ["Inventor", "AutoCAD", "Fusion 360", "SolidWorks", "Creo", "FEA", "Cura"]
  },
  {
    title: "Programming",
    icon: Cpu,
    skills: ["Java", "MATLAB", "Python", "C++", "LLM workflows"]
  },
  {
    title: "Fabrication",
    icon: Hammer,
    skills: ["3D printing", "Copper brazing", "Soldering", "Power tools", "Woodworking"]
  },
  {
    title: "Coursework",
    icon: BookOpen,
    skills: [
      "Thermodynamics",
      "Solid mechanics",
      "Fluid dynamics",
      "Design for manufacturability",
      "Engineering materials"
    ]
  }
];

const leadership = [
  "Vice President, Pi Tau Sigma Mechanical Engineering Honor Society",
  "ME 170 CAD Lab Grader and Course Assistant",
  "CS 124 Tutor for programming fundamentals",
  "ECE 205 and ME 200 Grader"
];

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Coursework", href: "/coursework" },
  { label: "Contact", href: "#contact" }
];

const heroActions = [
  { label: "Internships", href: "#work", icon: BriefcaseBusiness },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Research", href: "#research", icon: FlaskConical },
  { label: "Coursework", href: "/coursework", icon: BookOpen, isLink: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/neel-maheshwari-9b9402245",
    icon: Linkedin,
    external: true
  }
];

const heroHighlights = [
  {
    label: "Ewoldt Research",
    title: "Gel-patterned fiberglass mesh composites",
    href: "/research/ewoldt",
    detail: "Designing heat-cured gel patterns on fiberglass mesh with a gel 3D printer.",
    tags: ["Gel printing", "Fiberglass mesh", "Composite testing"]
  },
  {
    label: "Printess",
    title: "Low-cost 3D bioprinter build",
    href: "/projects/printess-3d-bioprinter",
    detail: "Working through construction, syringe extrusion, calibration, and operation.",
    tags: ["Bioprinting", "Motion control", "Syringe extrusion"]
  }
];

const heroProcess = ["Design", "Build", "Test", "Iterate"];
const tunnelRays = Array.from({ length: 34 }, (_, index) => index);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function SectionTitle({
  eyebrow,
  title,
  text,
  tone = "light"
}: {
  eyebrow: string;
  title: string;
  text: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-10 max-w-3xl"
    >
      <h2
        className={`font-display text-4xl font-semibold leading-[0.98] md:text-6xl ${
          isDark ? "text-copper" : "text-teal"
        }`}
      >
        {eyebrow}
      </h2>
      <p
        className={`mt-4 max-w-2xl font-display text-xl font-semibold leading-snug md:text-2xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </p>
      <p className={`mt-3 max-w-2xl text-sm leading-6 md:text-base ${isDark ? "text-white/68" : "text-graphite"}`}>
        {text}
      </p>
    </motion.div>
  );
}

export default function Home() {
  const [navOnDark, setNavOnDark] = useState(true);
  const { scrollYProgress } = useScroll();
  const scrollScaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 28,
    mass: 0.2
  });

  useEffect(() => {
    const updateNav = () => {
      const sample = document.elementFromPoint(window.innerWidth / 2, 88);
      const section = sample?.closest("section, footer");
      const sectionId = section?.id;
      setNavOnDark(sectionId === "top" || sectionId === "projects" || sectionId === "skills" || sectionId === "contact");
    };

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", updateNav);

    return () => {
      window.removeEventListener("scroll", updateNav);
      window.removeEventListener("resize", updateNav);
    };
  }, []);

  return (
    <main className="noise overflow-hidden">
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-illiniOrange via-teal to-illiniBlue"
        style={{ scaleX: scrollScaleX }}
        aria-hidden="true"
      />
      <nav
        className={`fixed left-0 right-0 top-0 z-40 border-b backdrop-blur-xl transition duration-300 ${
          navOnDark
            ? "border-white/10 bg-ink/72 text-white"
            : "border-line bg-paper/92 text-ink shadow-panel"
        }`}
      >
        <div className="section-shell flex h-16 items-center justify-between gap-5">
          <a href="#top" className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
            NM
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`group/nav relative overflow-hidden rounded-[8px] px-3 py-2 text-sm font-semibold transition duration-300 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-illiniOrange after:transition-transform after:duration-300 hover:-translate-y-0.5 hover:after:scale-x-100 ${
                  navOnDark
                    ? "text-white/72 hover:bg-white/8 hover:text-white"
                    : "text-graphite hover:bg-field hover:text-illiniBlue"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="top"
        className="relative min-h-screen overflow-hidden bg-illiniBlue pt-16 text-white"
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty("--cursor-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
          event.currentTarget.style.setProperty("--cursor-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--cursor-x, 62%) var(--cursor-y, 42%), rgba(255, 95, 5, 0.22), rgba(37, 99, 235, 0.1) 20%, transparent 40%), radial-gradient(circle at 84% 22%, rgba(248, 250, 252, 0.1), transparent 26%), linear-gradient(135deg, rgba(19, 41, 75, 0.2), rgba(17, 24, 39, 0.72))"
          }}
        />
        <div className="hero-infinity-portal" aria-hidden="true">
          {["left", "right"].map((side) => (
            <div key={side} className={`portal-lobe portal-lobe-${side}`}>
              <div className="portal-core" />
              {tunnelRays.map((ray) => (
                <span
                  key={`${side}-${ray}`}
                  style={{ "--ray-index": ray } as CSSProperties}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-24 h-40 w-1 bg-gradient-to-b from-illiniOrange to-transparent" />
        <div className="absolute bottom-10 right-[8%] hidden h-px w-72 bg-gradient-to-r from-transparent via-illiniOrange/70 to-transparent lg:block" />
        <div className="section-shell relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-12 pb-20 pt-16 lg:grid-cols-[minmax(0,1fr)_360px]">
          <motion.div
            className="max-w-4xl"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/8 px-3 py-2 text-sm font-medium text-white/78 backdrop-blur">
              <MapPin className="h-4 w-4 shrink-0 text-illiniOrange" />
              UIUC Mechanical Engineering, Computer Science Minor
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[0.98] text-white md:text-7xl">
              Neel Maheshwari
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/72 md:text-2xl">
              Mechanical engineer building working hardware across robotic 3D printing,
              thermal test systems, experimental materials, and product-driven CAD.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Illinois engineering", "CAD to build", "Research hardware"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.065] px-3 py-1.5 text-xs font-semibold text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 flex max-w-2xl flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/48">
              {heroProcess.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-white/68">
                    {step}
                  </span>
                  {index < heroProcess.length - 1 && (
                    <span className="h-px w-7 bg-gradient-to-r from-illiniOrange/70 to-teal/60" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-9 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {heroActions.map((action) => {
                const Icon = action.icon;
                const className =
                  "button-3d group inline-flex min-h-[3.25rem] items-center justify-between gap-3 overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.075] px-4 py-3 text-sm font-semibold text-white backdrop-blur hover:border-illiniOrange/80 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-illiniOrange focus-visible:ring-offset-4 focus-visible:ring-offset-illiniBlue";
                const content = (
                  <>
                    <span className="inline-flex min-w-0 items-center gap-2 whitespace-nowrap">
                      <Icon className="h-4 w-4 shrink-0 text-white/88" />
                      {action.label}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] border border-white/10 bg-white/[0.07] text-illiniOrange transition group-hover:border-illiniOrange/50 group-hover:bg-illiniOrange group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.4} />
                    </span>
                  </>
                );

                if (action.isLink) {
                  return (
                    <Link key={action.label} href={action.href} className={className}>
                      {content}
                    </Link>
                  );
                }

                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noreferrer" : undefined}
                    className={className}
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </motion.div>
          <motion.aside
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
            className="relative hidden lg:block"
            aria-label="Current engineering focus areas"
          >
            <div className="absolute -inset-6 rounded-[8px] bg-[radial-gradient(circle_at_50%_12%,rgba(255,95,5,0.2),transparent_55%)] blur-2xl" />
            <div className="card-3d relative overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.075] p-5 text-white backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                  Current Build Space
                </p>
                <span className="h-2 w-2 rounded-full bg-illiniOrange shadow-[0_0_18px_rgba(255,95,5,0.82)]" />
              </div>
              <p className="mt-4 text-sm leading-6 text-white/62">
                The hands-on work I am actively developing right now.
              </p>
              <div className="mt-5 space-y-4">
                {heroHighlights.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-[8px] border border-white/10 bg-ink/36 p-4 transition hover:border-illiniOrange/45 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-illiniOrange">
                        {item.label}
                      </p>
                      <span className="font-display text-xs font-semibold text-white/32">
                        0{index + 1}
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-lg font-semibold leading-tight text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      {item.detail}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-[0.68rem] font-semibold text-white/68"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="work" className="py-24 md:py-32">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Professional Work"
            title="Engineering judgment across static equipment and mobility products."
            text="My experience combines technical analysis, CAD-heavy development, and manufacturing-aware prototyping in high-consequence mechanical contexts."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {experience.map((item, index) => {
              return (
                <motion.div
                  key={item.company}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group"
                >
                  <Link
                    href={item.href}
                    className="card-3d flex h-full min-h-[330px] cursor-pointer flex-col overflow-hidden rounded-[8px] border-2 border-ink/12 bg-white hover:border-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-4"
                  >
                    <div
                      className={`flex items-center justify-between border-b px-7 py-5 ${
                        item.darkLogoBand
                          ? "border-white/10 bg-ink"
                          : "border-line bg-field/70"
                      }`}
                    >
                      <div className="relative h-10 w-40">
                        <Image
                          src={item.logo}
                          alt={item.logoAlt}
                          fill
                          sizes="160px"
                          className="object-contain object-left"
                        />
                      </div>
                    </div>
                    <div className="relative flex flex-1 flex-col overflow-hidden p-7">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-copper">
                          {item.role}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                          {item.company}
                        </h3>
                        <p className="mt-2 text-sm text-steel">
                          {item.place} / {item.date}
                        </p>
                      </div>
                      <p className="mt-6 text-base leading-7 text-graphite">{item.overview}</p>
                      <div className="mt-auto flex items-center justify-between border-t border-line pt-5 text-teal">
                        <span className="text-sm font-semibold">Read more</span>
                        <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      <div className="absolute inset-0 flex translate-y-3 flex-col bg-ink p-7 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
                          Skills gained
                        </p>
                        <h3 className="mt-3 font-display text-2xl font-semibold">{item.company}</h3>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-[8px] border border-white/16 bg-white/8 px-3 py-2 text-sm font-medium text-white/85"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="mt-auto flex items-center justify-between border-t border-white/15 pt-5">
                          <span className="text-sm font-semibold">Read more</span>
                          <ArrowUpRight className="h-5 w-5 text-copper" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-ink py-24 text-white md:py-32">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Projects"
            title="Robotics, mobility, and autonomous systems shaped through iteration."
            text="These builds highlight practical prototyping, mechanical design, controls thinking, and the discipline to move from constraints to working demonstrations."
            tone="dark"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px 180px 0px" }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className="group"
                >
                  <Link
                    href={project.href}
                    className="card-3d flex h-full min-h-[510px] cursor-pointer flex-col overflow-hidden rounded-[8px] border border-white/14 bg-white/[0.055] hover:border-teal hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                  >
                    <div className="image-shine relative aspect-[4/3] overflow-hidden border-b border-white/12">
                      <Image
                        src={project.image}
                        alt={`${project.title} engineering project visual`}
                        fill
                        sizes="(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw"
                        className={`transition duration-500 group-hover:scale-[1.025] ${
                          project.title === "Printess 3D Bioprinter"
                            ? "object-contain bg-field p-2"
                            : project.title === "NovoPrint"
                              ? "object-cover object-center"
                              : project.title === "ASME Autonomous Challenge"
                                ? "object-cover object-[78%_center]"
                                : "object-cover object-center"
                        }`}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,26,31,0.02),rgba(23,26,31,0.5))]" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-[8px] bg-white/92 px-3 py-2 text-xs font-semibold text-ink shadow-panel">
                        <Icon className="h-4 w-4 text-teal" />
                        {project.tag}
                      </div>
                    </div>
                    <div className="relative flex flex-1 flex-col overflow-hidden p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                            {project.date}
                          </p>
                          <h3 className="mt-2 font-display text-2xl font-semibold">
                            {project.title}
                          </h3>
                        </div>
                        {project.title === "NovoPrint" && (
                          <Trophy className="mt-1 h-5 w-5 shrink-0 text-copper" />
                        )}
                      </div>
                      <p className="mt-5 text-base leading-7 text-white/72">
                        {project.summary}
                      </p>
                      <div className="mt-auto flex items-center justify-between border-t border-white/14 pt-5">
                        <span className="text-sm font-semibold text-white">Read more</span>
                        <ArrowUpRight className="h-5 w-5 text-copper transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                      <div className="absolute inset-0 flex translate-y-3 flex-col bg-graphite p-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
                          Skills gained
                        </p>
                        <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                          {project.title}
                        </h3>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-[8px] border border-white/16 bg-white/8 px-3 py-2 text-sm font-medium text-white/85"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="mt-auto flex items-center justify-between border-t border-white/14 pt-5">
                          <span className="text-sm font-semibold text-white">Read more</span>
                          <ArrowUpRight className="h-5 w-5 text-copper" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="research" className="py-24 md:py-32">
        <div className="section-shell">
            <SectionTitle
              eyebrow="Research"
              title="Experimental engineering across thermal systems and emerging research."
              text="My research work spans compressor-test infrastructure, instrumentation, electrical enclosure design, and new lab work that is still developing."
            />
          <div className="grid gap-5 md:grid-cols-2">
            {research.map((item) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className="group"
              >
                <Link
                  href={item.href}
                  className="card-3d flex h-full min-h-[360px] cursor-pointer flex-col overflow-hidden rounded-[8px] border border-line bg-white outline-none hover:border-teal focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-4"
                >
                  <div className="relative flex flex-1 flex-col overflow-hidden p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-copper">
                          {item.date}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                          {item.title}
                        </h3>
                      </div>
                      <FlaskConical className="mt-1 h-6 w-6 shrink-0 text-teal" />
                    </div>
                    <p className="mt-5 leading-7 text-graphite">{item.overview}</p>
                    <div className="mt-auto flex items-center justify-between border-t border-line pt-5 text-teal">
                      <span className="text-sm font-semibold">Read more</span>
                      <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <div className="absolute inset-0 flex translate-y-3 flex-col bg-ink p-7 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper">
                        Skills gained
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold">{item.title}</h3>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-[8px] border border-white/16 bg-white/8 px-3 py-2 text-sm font-medium text-white/85"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex items-center justify-between border-t border-white/15 pt-5">
                        <span className="text-sm font-semibold">Read more</span>
                        <ArrowUpRight className="h-5 w-5 text-copper" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-ink py-24 text-white md:py-32">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Technical Stack"
            title="A practical toolkit for design, analysis, fabrication, and controls."
            text="The portfolio is organized around the tools and processes used repeatedly across my work: CAD, programming, lab fabrication, and core mechanical engineering fundamentals."
            tone="dark"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="card-3d rounded-[8px] border border-white/14 bg-white p-6"
                >
                  <Icon className="h-6 w-6 text-teal" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-[8px] border border-line bg-field px-3 py-2 text-sm font-medium text-ink"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-[0.98] text-teal md:text-6xl">
              Education and Leadership
            </h2>
            <p className="mt-4 font-display text-xl font-semibold text-ink md:text-2xl">
              UIUC Grainger College of Engineering
            </p>
            <p className="mt-3 text-sm leading-6 text-graphite md:text-base">
              Bachelor of Science in Mechanical Engineering, Computer Science Minor,
              James Scholar. Expected May 2027.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="card-3d rounded-[8px] border border-line bg-white p-6">
              <GraduationCap className="h-6 w-6 text-teal" />
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">Academic Focus</h3>
              <p className="mt-3 leading-7 text-graphite">
                Computer-aided design, thermodynamics, manufacturability, solid mechanics,
                engineering materials, and fluid dynamics.
              </p>
            </div>
            <div className="card-3d rounded-[8px] border border-line bg-white p-6">
              <Award className="h-6 w-6 text-copper" />
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">Leadership</h3>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-graphite">
                {leadership.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-ink py-16 text-white">
        <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-[0.98] text-copper md:text-5xl">
              Contact
            </h2>
            <p className="mt-4 font-display text-xl font-semibold">
              Let&apos;s build the next prototype.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 md:text-base">
              Available for mechanical engineering internships, research collaborations,
              product development work, and robotics-focused project teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:neel5@illinois.edu"
              className="button-3d inline-flex h-12 items-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-ink hover:bg-field"
            >
              <Mail className="h-4 w-4" />
              neel5@illinois.edu
            </a>
            <a
              href="https://www.linkedin.com/in/neel-maheshwari-9b9402245"
              className="button-3d inline-flex h-12 items-center gap-2 rounded-[8px] border border-white/18 px-5 text-sm font-semibold text-white hover:border-copper hover:text-copper"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
