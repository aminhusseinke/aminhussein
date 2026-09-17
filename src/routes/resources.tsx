import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [
    { title: "Operational Resources — Amin" },
    { name: "description", content: "Practical operational templates for clearer decisions, stronger partnerships, and repeatable execution." },
    { property: "og:title", content: "Operational Resources — Amin" },
    { property: "og:description", content: "Practical templates for clearer decisions and repeatable execution." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ResourcesPage,
});

const templates = [
  ["01", "Operating Rhythm", "A one-page framework for turning priorities into a focused weekly cadence."],
  ["02", "Partnership Brief", "A clear structure for aligning opportunity, value exchange, and next actions."],
  ["03", "Decision Log", "A lightweight record that keeps context, ownership, and momentum visible."],
];

function ResourcesPage() {
  return (
    <section className="partnership-gradient text-primary-foreground">
      <div className="site-container py-16 md:py-24">
        <Reveal><p className="eyebrow mb-8 text-footer-muted">Resources</p></Reveal>
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <Reveal variant="clip" delay={100}><h1 className="display-heading text-balance text-6xl sm:text-7xl md:text-8xl">Operational tools for work that needs to <span className="text-primary italic">move.</span></h1></Reveal>
          <Reveal delay={200}>
            <p className="font-display text-2xl leading-9 text-footer-foreground">A considered set of templates for clearer decisions, stronger partnerships, and repeatable execution.</p>
            <Button asChild variant="inverse" className="mt-8">
              <a href="data:text/plain;charset=utf-8,AMIN%20OPERATIONAL%20TEMPLATES%0A%0A1.%20Operating%20Rhythm%0A2.%20Partnership%20Brief%0A3.%20Decision%20Log" download="amin-operational-templates.txt">Download the collection <ArrowDownToLine aria-hidden="true" /></a>
            </Button>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-footer-line md:mt-28">
          {templates.map(([number, title, copy]) => (
            <Reveal key={number} delay={Number(number) * 90}>
            <article className="group grid gap-5 border-b border-footer-line py-8 transition-colors duration-500 hover:bg-background/5 sm:grid-cols-[4rem_1fr_auto] sm:items-center md:py-10">
              <span className="text-xs font-semibold text-primary">{number}</span>
              <div><h2 className="font-display text-3xl md:text-4xl">{title}</h2><p className="mt-2 max-w-xl text-sm leading-6 text-footer-muted">{copy}</p></div>
              <ArrowRight aria-hidden="true" className="hidden size-5 transition-transform group-hover:translate-x-1 sm:block" />
            </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 max-w-xl text-xs leading-5 text-footer-muted">Built to be adapted, not admired. Use what helps, change what does not, and keep the system close to the work.</p>
      </div>
    </section>
  );
}
