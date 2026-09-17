import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import systemsImage from "@/assets/operational-systems.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amin — Ecosystem Builder & Strategy Consultant" },
      { name: "description", content: "Building scalable operational systems, strategic brands, and high-value partnerships from Nairobi." },
      { property: "og:title", content: "Amin — Ecosystem Builder & Strategy Consultant" },
      { property: "og:description", content: "Building scalable operational systems, strategic brands, and high-value partnerships from Nairobi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="site-container flex min-h-[calc(100svh-5rem)] flex-col justify-between py-12 md:min-h-[calc(100svh-6rem)] md:py-20">
        <Reveal className="flex items-center justify-between">
          <p className="eyebrow">Strategy · Systems · Scale</p>
          <p className="hidden text-xs text-muted-foreground sm:block">Nairobi / Global</p>
        </Reveal>
        <Reveal variant="clip" className="max-w-6xl py-16 md:py-24" delay={100}>
          <h1 className="display-heading text-balance text-[3.4rem] sm:text-7xl md:text-8xl lg:text-[7.4rem]">
            I build the <span className="emerald-text italic">systems</span> that make ambitious ideas inevitable.
          </h1>
        </Reveal>
        <Reveal className="grid gap-8 border-t pt-7 md:grid-cols-[1fr_1.15fr] md:items-end" delay={220}>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
            <ArrowDownRight aria-hidden="true" className="size-4 text-primary" />
            Scroll to explore
          </div>
          <div>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">
              Ecosystem builder and strategy consultant engineering the operational backbone for ventures, institutions, and ideas built to scale.
            </p>
            <Button asChild className="mt-7">
              <Link to="/work">Explore selected work <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="site-container">
          <Reveal className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5">North star</p>
              <h2 className="display-heading text-5xl sm:text-6xl">Mission <span className="text-primary italic">&</span> vision</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Clear intent creates momentum. Strong systems make it repeatable.</p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal variant="scale">
            <article className="editorial-card emerald-panel flex min-h-80 flex-col justify-between p-7 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">01 / Mission</span>
              <div>
                <h3 className="display-heading mb-5 text-4xl sm:text-5xl">Turn complexity into <span className="text-primary italic">clarity.</span></h3>
                <p className="max-w-md leading-7 text-footer-muted">Build practical systems that align people, capital, and execution around the work that matters.</p>
              </div>
            </article>
            </Reveal>
            <Reveal variant="scale" delay={140}>
            <article className="editorial-card flex min-h-80 flex-col justify-between p-7 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">02 / Vision</span>
              <div>
                <h3 className="display-heading mb-5 text-4xl sm:text-5xl">An ecosystem built to <span className="text-primary italic">endure.</span></h3>
                <p className="max-w-md leading-7 text-muted-foreground">A future where African institutions scale with confidence, creative rigor, and operational independence.</p>
              </div>
            </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-container grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-28">
        <Reveal variant="clip" className="image-reveal emerald-image aspect-[4/3]">
          <img src={systemsImage} alt="Operational system maps and planning materials" width={1600} height={1104} loading="lazy" className="h-full w-full object-cover" />
        </Reveal>
        <Reveal className="md:pl-10" delay={140}>
          <p className="eyebrow mb-6">The practice</p>
          <h2 className="display-heading text-balance text-5xl sm:text-6xl">Strategy that moves from paper to <span className="text-primary italic">practice.</span></h2>
          <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground">I work at the point where vision becomes operating rhythm—building the architecture, partnerships, and tools that let teams move decisively.</p>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/about">More about the approach <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
