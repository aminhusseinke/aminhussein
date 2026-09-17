import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import spaceImage from "@/assets/nairobi-infrastructure.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Amin" },
    { name: "description", content: "A Nairobi-based strategy consultant scaling complex initiatives, brand architecture, and institutional partnerships." },
    { property: "og:title", content: "About — Amin" },
    { property: "og:description", content: "A proven track record building initiatives from zero to one in Nairobi." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="site-container grid gap-12 py-16 md:grid-cols-[0.7fr_1.3fr] md:py-24">
        <Reveal><p className="eyebrow self-start">About the work</p></Reveal>
        <Reveal variant="clip" delay={100}>
          <h1 className="display-heading text-balance text-5xl sm:text-7xl md:text-8xl">I help ambitious teams make the leap from <span className="text-primary italic">possible</span> to proven.</h1>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-muted-foreground">My work sits between strategy and execution: turning early conviction into clear operating models, credible brands, and partnerships with the power to unlock scale.</p>
        </Reveal>
      </section>

      <section className="site-container pb-20 md:pb-28">
        <Reveal variant="clip" className="image-reveal emerald-image aspect-[16/8] md:aspect-[16/7]">
          <img src={spaceImage} alt="A contemporary collaborative institution in Nairobi" width={1600} height={1104} className="h-full w-full object-cover" />
        </Reveal>
      </section>

      <section className="emerald-wash border-y py-20 md:py-28">
        <div className="site-container grid gap-12 md:grid-cols-[0.65fr_1.35fr]">
          <Reveal><div><p className="eyebrow">Track record</p></div></Reveal>
          <div className="divide-y border-y">
            {[
              ["01", "Zero to one", "Designed the systems, narratives, and decision structures that move complex Nairobi initiatives from concept to credible launch."],
              ["02", "Brand architecture", "Built strategic brand foundations that align purpose, positioning, programs, and public expression into one coherent system."],
              ["03", "Institutional partnerships", "Developed high-trust relationships across the public, private, and social sectors to unlock long-term value and shared momentum."],
            ].map(([number, title, copy]) => (
              <Reveal key={number} delay={Number(number) * 90}>
              <article className="grid gap-5 py-9 sm:grid-cols-[4rem_1fr]">
                <span className="text-xs font-semibold text-primary">{number}</span>
                <div><h2 className="font-display text-3xl sm:text-4xl">{title}</h2><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{copy}</p></div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-end md:py-28">
        <Reveal><h2 className="display-heading max-w-3xl text-5xl sm:text-6xl">The right structure changes what a team can <span className="emerald-text italic">believe.</span></h2></Reveal>
        <Reveal delay={140}><Button asChild><Link to="/work">See the work <ArrowRight aria-hidden="true" /></Link></Button></Reveal>
      </section>
    </>
  );
}
