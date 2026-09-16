import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import infrastructureImage from "@/assets/nairobi-infrastructure.jpg";
import systemsImage from "@/assets/operational-systems.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [
    { title: "Selected Work — Amin" },
    { name: "description", content: "Selected physical and digital infrastructure projects designed for durable, institution-scale impact." },
    { property: "og:title", content: "Selected Work — Amin" },
    { property: "og:description", content: "Physical and digital infrastructure designed for durable impact." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: WorkPage,
});

const projects = [
  { number: "01", type: "Physical infrastructure", title: "Spaces that convene ambition", copy: "Shaping environments where founders, institutions, and communities can exchange ideas, build trust, and move work forward.", image: infrastructureImage, alt: "Collaborative civic innovation space in Nairobi" },
  { number: "02", type: "Digital infrastructure", title: "Systems that coordinate action", copy: "Designing the operational layers—workflows, tools, governance, and information architecture—that make growth coherent rather than chaotic.", image: systemsImage, alt: "Operational systems maps and planning materials" },
];

function WorkPage() {
  return (
    <>
      <section className="site-container py-16 md:py-24">
        <p className="eyebrow mb-8">Selected work</p>
        <h1 className="display-heading max-w-5xl text-balance text-5xl sm:text-7xl md:text-8xl">Infrastructure for ideas with <span className="text-primary italic">consequence.</span></h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">Physical and digital systems designed to outlast the moment—and expand what institutions can do next.</p>
      </section>

      <section className="site-container space-y-20 pb-24 md:space-y-28 md:pb-32">
        {projects.map((project, index) => (
          <article key={project.number} className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className={`image-reveal aspect-[4/3] md:col-span-8 ${index % 2 ? "md:order-2" : ""}`}>
              <img src={project.image} alt={project.alt} width={1600} height={1104} loading={index ? "lazy" : "eager"} className="h-full w-full object-cover" />
            </div>
            <div className={`border-t pt-6 md:col-span-4 ${index % 2 ? "md:order-1" : ""}`}>
              <div className="mb-12 flex justify-between text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"><span>{project.number}</span><span>{project.type}</span></div>
              <h2 className="display-heading text-4xl sm:text-5xl">{project.title}</h2>
              <p className="mt-5 leading-7 text-muted-foreground">{project.copy}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="site-container pb-20 md:pb-28">
        <div className="partnership-gradient flex min-h-96 flex-col justify-between rounded-lg p-8 text-primary-foreground md:flex-row md:items-end md:p-14">
          <div><p className="mb-8 text-xs font-semibold uppercase tracking-[0.16em] opacity-70">Partnerships</p><h2 className="display-heading max-w-3xl text-5xl sm:text-6xl md:text-7xl">Shape the room.<br />Become a partner.</h2></div>
          <Button asChild className="mt-10 shrink-0 md:mt-0"><a href="mailto:hello@amin.studio?subject=Partnership%20conversation">Start a conversation <ArrowRight aria-hidden="true" /></a></Button>
        </div>
      </section>
    </>
  );
}
