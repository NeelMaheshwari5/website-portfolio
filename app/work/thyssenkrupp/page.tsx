import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  CheckCircle2,
  ClipboardList,
  FileSearch,
  Flame,
  Gauge,
  MapPin,
  Snowflake,
  TimerReset
} from "lucide-react";

const focusAreas = [
  {
    title: "Cryogenic storage systems",
    text:
      "Built a foundation in refrigerated liquefied gas tank systems, including where different tank configurations are used, how component materials are selected, and how engineering codes shape design decisions."
  },
  {
    title: "NozzlePRO investigation",
    text:
      "Compared finite element analysis outputs across NozzlePRO versions, focusing on stress intensification factors and flexibility factors after a code and formula update produced unexpected results."
  },
  {
    title: "Boiler specification review",
    text:
      "Supported RUDY, an LLM-assisted review workflow for technical bid evaluation, by studying boiler systems, reading vendor-facing documents, and validating generated specifications."
  }
];

const investigationSteps = [
  "Reviewed refrigerated tank types, tank component materials, and applicable standards before moving into software-driven analysis.",
  "Manually checked NozzlePRO flexibility-factor calculations to understand why two software versions did not align with expected formula changes.",
  "Studied D-type boiler components, process flow, technical offers, and boiler-efficiency equations to build enough context for document review.",
  "Read technical specifications, material requisitions, annexures, process data sheets, vendor offers, and technical query documents before validating RUDY outputs."
];

const rudyDetails = [
  {
    title: "Document understanding",
    text:
      "Mapped where key information lived across specification packages so generated responses could be checked against the source documents quickly."
  },
  {
    title: "Template review",
    text:
      "Compared RUDY-generated parameter entries against the TBE-TR template and refined cases where vendor-specific information needed clearer handling."
  },
  {
    title: "Vendor offer upload",
    text:
      "Uploaded vendor offer packages from Thermax and ISGEC as part of the next review stage, while identifying where senior engineering guidance was needed."
  }
];

export default function ThyssenkruppPage() {
  return (
    <main className="noise min-h-screen bg-paper">
      <nav className="border-b border-line bg-paper/90 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-graphite transition hover:text-teal"
          >
            <ArrowLeft className="h-4 w-4" />
            Professional Work
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
                Mechanical Static Intern
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
                thyssenkrupp UHDE India
              </h1>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-steel">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-teal" />
                  Mumbai, India
                </span>
                <span>July 2024 - August 2024</span>
              </div>
            </div>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[8px] bg-field text-teal">
              <Gauge className="h-8 w-8" />
            </div>
          </div>
          <p className="mt-10 max-w-3xl text-xl leading-9 text-graphite">
            A five-week internship focused on static equipment engineering, cryogenic
            storage systems, nozzle analysis, boiler fundamentals, and LLM-assisted
            technical bid evaluation.
          </p>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            What I Worked On
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold text-ink md:text-4xl">
            From equipment fundamentals to engineering workflow improvement.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {focusAreas.map((area, index) => (
              <article
                key={area.title}
                className="rounded-[8px] border border-line bg-white p-6 shadow-panel"
              >
                <span className="font-display text-sm font-semibold text-copper">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {area.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-graphite">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              How I Approached the Work
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Learning the system before judging the result.
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite">
              The internship began with background research and moved into applied
              engineering review. Each assignment required enough domain knowledge to
              tell whether a software result, specification, or vendor response made
              mechanical sense.
            </p>
          </div>
          <div className="grid gap-4">
            {investigationSteps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-[8px] border border-line bg-paper p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-field font-display text-sm font-semibold text-teal">
                  {index + 1}
                </span>
                <p className="text-base leading-8 text-graphite">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-[8px] border border-line bg-white p-7 shadow-panel">
              <Snowflake className="h-7 w-7 text-teal" />
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                Cryogenic tank foundation
              </h2>
              <p className="mt-4 text-base leading-8 text-graphite">
                Refrigerated liquefied gas storage systems were studied from the ground
                up: tank categories, use cases, material choices, component function,
                and the standards used to evaluate design acceptability.
              </p>
            </article>
            <article className="rounded-[8px] border border-line bg-white p-7 shadow-panel">
              <FileSearch className="h-7 w-7 text-copper" />
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                NozzlePRO discrepancy work
              </h2>
              <p className="mt-4 text-base leading-8 text-graphite">
                The software task centered on why updated formulas did not produce the
                expected output shift. In-plane, out-plane, and torsional flexibility
                factors remained unchanged, while axial flexibility differed sharply,
                prompting a manual formula-by-formula check.
              </p>
            </article>
            <article className="rounded-[8px] border border-line bg-white p-7 shadow-panel">
              <Flame className="h-7 w-7 text-copper" />
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
                Boiler systems learning
              </h2>
              <p className="mt-4 text-base leading-8 text-graphite">
                To review boiler specifications with more confidence, I studied
                boiler types, D-type boiler components, process schematics, direct and
                indirect efficiency equations, and the role each component plays in
                the operating cycle.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-field py-20">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          <div className="rounded-[8px] bg-ink p-7 text-white">
            <Bot className="h-7 w-7 text-copper" />
            <h2 className="mt-5 font-display text-2xl font-semibold">RUDY workflow</h2>
            <p className="mt-4 text-lg leading-8 text-white/72">
              RUDY helped convert large technical document packages into structured
              TBE-TR parameters. I reviewed the generated entries against source
              specifications, marked vendor-specific cases for adjustment, and helped
              make the process faster for boiler specification review.
            </p>
            <div className="mt-7 flex items-center gap-3 border-t border-white/15 pt-6">
              <TimerReset className="h-5 w-5 text-copper" />
              <span className="font-display text-3xl font-semibold">20%</span>
              <span className="text-sm text-white/65">review time reduction</span>
            </div>
          </div>
          <div className="rounded-[8px] border border-line bg-white p-7">
            <CheckCircle2 className="h-7 w-7 text-teal" />
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
              Engineering takeaways
            </h2>
            <ul className="mt-5 space-y-4 text-base leading-8 text-graphite">
              <li>Software outputs are only useful when the underlying assumptions and formulas are understood.</li>
              <li>Codes, specifications, data sheets, and vendor offers all connect during technical bid evaluation.</li>
              <li>LLM-assisted review works best when paired with careful engineering validation.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white py-20 md:py-28">
        <div className="section-shell">
          <div className="mb-10 max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Work Samples
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Screenshots from the internship report.
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite">
              These images document the references, component study, and review
              interface used during the internship.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-[8px] border border-line bg-paper shadow-panel">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/thyssenkrupp/nozzlepro-evidence.png"
                  alt="NozzlePRO documentation used while reviewing stress intensification and flexibility factors"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-line p-5 text-base leading-7 text-graphite">
                NozzlePRO documentation referenced while comparing allowable loads,
                stress intensification factors, and flexibility behavior.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[8px] border border-line bg-paper shadow-panel">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/thyssenkrupp/boiler-components-evidence.png"
                  alt="Spreadsheet documenting D-type boiler components, descriptions, and significance"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-line p-5 text-base leading-7 text-graphite">
                Component-by-component study of a D-type boiler, including function,
                location, and importance within the process.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[8px] border border-line bg-paper shadow-panel lg:col-span-2">
              <div className="relative aspect-[16/8]">
                <Image
                  src="/images/thyssenkrupp/rudy-evidence.png"
                  alt="RUDY interface showing technical specification review for a gas-fired boiler package"
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="border-t border-line p-5 text-base leading-7 text-graphite">
                RUDY&apos;s structured review interface for a gas-fired boiler package,
                where generated specifications were checked against source documents.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div className="mb-10 max-w-3xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              Working with RUDY
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
              From source documents to checked specifications.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {rudyDetails.map((item) => (
              <article
                key={item.title}
                className="rounded-[8px] border border-line bg-white p-6 shadow-panel"
              >
                <ClipboardList className="h-6 w-6 text-teal" />
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-graphite">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="section-shell">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal transition hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all professional work
          </Link>
        </div>
      </footer>
    </main>
  );
}
