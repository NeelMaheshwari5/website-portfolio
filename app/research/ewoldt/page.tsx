import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EwoldtComingSoonPage() {
  return (
    <main className="noise min-h-screen bg-paper">
      <nav className="border-b border-line bg-ink text-white backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">
          <Link href="/#research" className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-copper">
            <ArrowLeft className="h-4 w-4" />
            Research
          </Link>
          <Link href="/" className="font-display text-sm font-semibold uppercase tracking-[0.18em]">
            NM
          </Link>
        </div>
      </nav>

      <section className="section-shell flex min-h-[calc(100vh-4rem)] items-center py-20">
        <div className="max-w-3xl">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Ewoldt Research Group
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-ink md:text-7xl">
            More Information Coming Soon
          </h1>
          <p className="mt-6 text-lg leading-8 text-graphite">
            This research page is being held as a placeholder while the work develops.
          </p>
        </div>
      </section>
    </main>
  );
}
