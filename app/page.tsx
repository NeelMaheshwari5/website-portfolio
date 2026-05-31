"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Box,
  CircuitBoard,
  Cpu,
  Gauge,
  GraduationCap,
  Hammer,
  Linkedin,
  Mail,
  MapPin,
  Printer,
  Ruler,
  Trophy,
  Wrench
} from "lucide-react";

const nav = ["Work", "Projects", "Research", "Skills", "Contact"];

const stats = [
  { value: "3.67", label: "UIUC GPA" },
  { value: "20%", label: "Review time reduction" },
  { value: "3rd", label: "Engineering Open House" },
  { value: "2027", label: "Expected graduation" }
];

const experience = [
  {
    company: "thyssenkrupp UHDE India Pvt. Ltd.",
    role: "Mechanical Static Intern",
    place: "Mumbai, India",
    date: "Jul 2024 - Aug 2024",
    icon: Gauge,
    points: [
      "Studied refrigerated liquefied gas tanks across materials, design, and governing standards.",
      "Analyzed SIF/Flexibility differences in NozzlePRO and resolved axial flexibility miscalculations.",
      "Developed and onboarded an LLM-assisted boiler specification review workflow that reduced review time by 20%."
    ]
  },
  {
    company: "Arcatron Mobility Pvt. Ltd.",
    role: "Research and Design Intern",
    place: "Pune, India",
    date: "Jun 2021 - Jul 2022",
    icon: Ruler,
    points: [
      "Shadowed design leadership to observe full-cycle medical mobility product development.",
      "Built fluency in manufacturing workflows, CAD tools, 3D printing, and iterative prototyping.",
      "Designed wheelchair sub-assemblies contributing to a hemiplegic wheelchair engineered from scratch."
    ]
  }
];

const projects = [
  {
    title: "NovoPrint",
    tag: "ASME Product Development Team",
    date: "Jan 2025 - May 2025",
    icon: Printer,
    image: "/images/engineering-hero.png",
    summary:
      "Open-source, multi-extruder 6-DOF robotic arm for 3D printing, built with ASME at UIUC.",
    bullets: [
      "Designed and built a working multi-axis robotic arm prototype.",
      "Soldered sensors and servo motors daisy chained to the power supply.",
      "Placed 3rd at Spring 2025 UIUC Engineering Open House."
    ]
  },
  {
    title: "Autonomous Challenge",
    tag: "ASME XRC",
    date: "Feb 2025 - Mar 2025",
    icon: CircuitBoard,
    image: "/images/engineering-hero.png",
    summary:
      "Competition vehicle control system developed within HyperSkill software and rulebook constraints.",
    bullets: [
      "Designed a virtual autonomous vehicle under strict competition limits.",
      "Programmed block-based navigation logic for practice courses.",
      "Raced autonomously at E-Fest Tech Connect on Mar 22, 2025."
    ]
  },
  {
    title: "Hemiplegic Wheelchair",
    tag: "Mobility Product Design",
    date: "2021 - 2022",
    icon: Wrench,
    image: "/images/engineering-hero.png",
    summary:
      "Sub-assembly design and prototyping work for an accessibility-focused wheelchair platform.",
    bullets: [
      "Modeled components in SolidWorks and Fusion 360.",
      "Supported CAD and 3D printing tasks from concept through prototype.",
      "Connected manufacturing feedback to mechanical design decisions."
    ]
  }
];

const research = [
  {
    title: "ACRC Summer Research Assistant",
    date: "May 2025 - Jul 2025",
    text:
      "Worked with graduate students under Dr. Craig Bradshaw to build compressor testing infrastructure, assemble electrical components and housings, and test a smaller isobutane load stand.",
    tags: ["Compressor testing", "Instrumentation", "Thermal systems", "Load stands"]
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
      <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
        {eyebrow}
      </p>
      <h2
        className={`font-display text-3xl font-semibold leading-tight md:text-5xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 md:text-lg ${isDark ? "text-white/72" : "text-graphite"}`}>
        {text}
      </p>
    </motion.div>
  );
}

function EngineeringSketch() {
  return (
    <div className="relative h-full min-h-[260px] overflow-hidden rounded-[8px] border border-line bg-field">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(96,114,127,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(96,114,127,0.16)_1px,transparent_1px)] [background-size:28px_28px]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="absolute left-8 top-10 h-28 w-28 rounded-full border-[14px] border-steel/30"
      >
        <span className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-steel/60" />
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <span
            key={item}
            className="absolute left-1/2 top-1/2 h-2 w-14 origin-left rounded-full bg-steel/50"
            style={{ transform: `rotate(${item * 60}deg)` }}
          />
        ))}
      </motion.div>
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-8 h-32 w-40 border-l-[18px] border-t-[18px] border-copper/70"
      >
        <span className="absolute -right-6 -top-8 h-16 w-16 rounded-full border-[10px] border-copper/70" />
        <span className="absolute bottom-0 left-7 h-4 w-28 rounded-full bg-ink/75" />
      </motion.div>
      <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between border-t border-ink/20 pt-4 font-display text-xs uppercase tracking-[0.16em] text-steel">
        <span>CAD</span>
        <span>Prototype</span>
        <span>Test</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="noise overflow-hidden">
      <nav className="fixed left-0 right-0 top-0 z-40 border-b border-white/35 bg-paper/78 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <a href="#top" className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">
            NM
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-graphite transition hover:text-teal"
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="mailto:neel5@illinois.edu"
            className="inline-flex h-10 items-center gap-2 rounded-[8px] bg-ink px-4 text-sm font-semibold text-white transition hover:bg-teal"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
      </nav>

      <section id="top" className="relative min-h-screen overflow-hidden pt-16">
        <Image
          src="/images/engineering-hero.png"
          alt="Mechanical engineering lab with CAD workstation, robotic arm prototype, and test instrumentation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,247,242,0.96)_0%,rgba(247,247,242,0.86)_34%,rgba(247,247,242,0.16)_70%)]" />
        <div className="section-shell relative z-10 flex min-h-[calc(100vh-4rem)] items-center pb-20 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-[8px] border border-line bg-white/68 px-3 py-2 text-sm font-medium text-graphite shadow-panel backdrop-blur">
              <MapPin className="h-4 w-4 text-teal" />
              UIUC Mechanical Engineering, Computer Science Minor
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[0.98] text-ink md:text-7xl">
              Neel Maheshwari
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-graphite md:text-2xl">
              Mechanical engineer building practical systems across CAD, thermal testing,
              robotic 3D printing, and product development.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-12 items-center gap-2 rounded-[8px] bg-teal px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-ink"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/neel-maheshwari-9b9402245"
                className="inline-flex h-12 items-center gap-2 rounded-[8px] border border-ink/15 bg-white/72 px-5 text-sm font-semibold text-ink backdrop-blur transition hover:border-teal hover:text-teal"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="section-shell grid grid-cols-2 gap-px md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="px-4 py-8 md:py-10"
            >
              <p className="font-display text-4xl font-semibold text-ink">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-steel">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="work" className="py-24 md:py-32">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Professional Work"
            title="Engineering judgment across static equipment and mobility products."
            text="Neel's experience combines technical analysis, CAD-heavy development, and manufacturing-aware prototyping in high-consequence mechanical contexts."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {experience.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.company}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[8px] border border-line bg-white p-7 shadow-panel"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
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
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-field text-teal">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm leading-6 text-graphite">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-ink py-24 text-white md:py-32">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Selected Projects"
            title="Robotics, mobility, and autonomous systems shaped through iteration."
            text="These builds highlight practical prototyping, mechanical design, controls thinking, and the discipline to move from constraints to working demonstrations."
            tone="dark"
          />
          <div className="grid gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, delay: index * 0.08 }}
                  className="group grid overflow-hidden rounded-[8px] border border-white/12 bg-white/[0.045] md:grid-cols-[0.95fr_1.05fr]"
                >
                  <div className="image-shine relative min-h-[260px]">
                    <Image
                      src={project.image}
                      alt={`${project.title} engineering project visual`}
                      fill
                      sizes="(min-width: 768px) 46vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: index === 0 ? "62% center" : index === 1 ? "82% center" : "52% center" }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,32,28,0.04),rgba(23,32,28,0.58))]" />
                    <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-[8px] bg-white/90 px-3 py-2 text-sm font-semibold text-ink">
                      <Icon className="h-4 w-4 text-teal" />
                      {project.tag}
                    </div>
                  </div>
                  <div className="p-7 md:p-9">
                    <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper">
                          {project.date}
                        </p>
                        <h3 className="mt-2 font-display text-3xl font-semibold">{project.title}</h3>
                      </div>
                      {project.title === "NovoPrint" && (
                        <div className="flex items-center gap-2 rounded-[8px] border border-white/14 px-3 py-2 text-sm text-white/78">
                          <Trophy className="h-4 w-4 text-copper" />
                          Distinguished Technology Award
                        </div>
                      )}
                    </div>
                    <p className="max-w-2xl text-lg leading-8 text-white/78">{project.summary}</p>
                    <ul className="mt-7 grid gap-3 text-sm leading-6 text-white/72 md:grid-cols-3">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="border-l border-white/16 pl-4">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="research" className="py-24 md:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Research"
              title="Thermal systems work grounded in instrumentation and test infrastructure."
              text="Hands-on compressor testing work connected mechanical assembly, electrical housings, calibration, and safe experimentation with refrigerant systems."
            />
            {research.map((item) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                transition={{ duration: 0.55 }}
                className="rounded-[8px] border border-line bg-white p-7 shadow-panel"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm font-medium text-steel">{item.date}</p>
                  </div>
                  <Award className="h-6 w-6 text-copper" />
                </div>
                <p className="mt-5 leading-7 text-graphite">{item.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[8px] border border-line bg-field px-3 py-2 text-sm font-medium text-graphite"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <EngineeringSketch />
          </motion.div>
        </div>
      </section>

      <section id="skills" className="border-y border-line bg-white py-24 md:py-32">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Technical Stack"
            title="A practical toolkit for design, analysis, fabrication, and controls."
            text="The portfolio is organized around the tools and processes that show up repeatedly in Neel's work: CAD, programming, lab fabrication, and core mechanical engineering fundamentals."
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
                  className="rounded-[8px] border border-line bg-paper p-6"
                >
                  <Icon className="h-6 w-6 text-teal" />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-[8px] bg-white px-3 py-2 text-sm font-medium text-graphite"
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
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Education and Leadership
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
              UIUC Grainger College of Engineering
            </h2>
            <p className="mt-4 leading-7 text-graphite">
              Bachelor of Science in Mechanical Engineering, Computer Science Minor,
              James Scholar. Expected May 2027.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[8px] border border-line bg-white p-6 shadow-panel">
              <GraduationCap className="h-6 w-6 text-teal" />
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">Academic Focus</h3>
              <p className="mt-3 leading-7 text-graphite">
                Computer-aided design, thermodynamics, manufacturability, solid mechanics,
                engineering materials, and fluid dynamics.
              </p>
            </div>
            <div className="rounded-[8px] border border-line bg-white p-6 shadow-panel">
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
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold">Let's build the next prototype.</h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Available for mechanical engineering internships, research collaborations,
              product development work, and robotics-focused project teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:neel5@illinois.edu"
              className="inline-flex h-12 items-center gap-2 rounded-[8px] bg-white px-5 text-sm font-semibold text-ink transition hover:bg-field"
            >
              <Mail className="h-4 w-4" />
              neel5@illinois.edu
            </a>
            <a
              href="https://www.linkedin.com/in/neel-maheshwari-9b9402245"
              className="inline-flex h-12 items-center gap-2 rounded-[8px] border border-white/18 px-5 text-sm font-semibold text-white transition hover:border-copper hover:text-copper"
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
