import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { HeroSlideshow } from "@/components/hero-slideshow";
import infrastructureImage from "@/assets/strathmore-ai-summit-group.jpg";
import systemsImage from "@/assets/operational-systems.jpg";
import techGarageImage from "@/assets/us-embassy-tech-garage.jpg";
import hackhouseImage from "@/assets/hackhouse-photo-session.jpg";

const heroImages = [
  { src: techGarageImage, position: "center" },
  { src: hackhouseImage, position: "center" },
];

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [
    { title: "Selected Work — Amin" },
    { name: "description", content: "Spaces, programs, and strategy designed for durable, institution-scale impact." },
    { property: "og:title", content: "Selected Work — Amin" },
    { property: "og:description", content: "Spaces, programs, and strategy designed for durable impact." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: WorkPage,
});

// Mzizi Wellness has no confirmed live URL yet — add `href` once you send it.
const products = [
  { name: "Crevia", copy: "Strategic brand and ecosystem design—the studio behind Crevia Summit, AI Summit, and Freelancers Summit.", href: "https://www.crevia.app/" },
  { name: "Mzizi Wellness", copy: "Details coming soon.", href: null },
];

const projects = [
  { number: "01", type: "Spaces & programs", title: "Spaces and programs that convene action", copy: "I shape the environments where your founders, institutions, and communities can exchange ideas and build trust—then design the programs and processes that keep that momentum coordinated instead of chaotic.", image: infrastructureImage, alt: "Group of AI Summit attendees on the steps at Strathmore University", aspect: "aspect-[16/9]", width: 2400, height: 1350 },
  { number: "02", type: "Strategy & operations", title: "Strategy that survives contact with reality", copy: "I build the decision rights, cadences, and escalation paths that turn a plan into daily practice—not just a slide deck everyone forgets by Friday.", image: systemsImage, alt: "Strategy maps and planning materials", aspect: "aspect-[4/3]", width: 1600, height: 1104 },
];

const ventures = [
  {
    number: "01",
    title: "Programs",
    copy: "Among the programs I've architected: the Founders' Diagnostic at Suluhu Studio, a strategy framework that moves early-stage operators from unverified assumptions to proven market traction, and Heartspark Academy's masterclass curriculum for organizational development.",
  },
  {
    number: "02",
    title: "Partnerships",
    copy: "Among the institutional alliances I've forged: Nairobi Garage, iHub Nairobi, and Strathmore University—turning premium venue access and institutional credibility into the infrastructure that scaled Crevia's regional talent network from zero to one.",
  },
  {
    number: "03",
    title: "Strategy & Operations",
    copy: "Among the operations I've directed: three flagship regional summits for Crevia end-to-end, and the internal processes and B2B pipeline that turned Heartspark Consultancy into a team-led enterprise.",
  },
];

function WorkPage() {
  return (
    <>
      <section className="photo-hero text-footer-foreground">
        <HeroSlideshow images={heroImages} />
        <div className="site-container absolute inset-x-0 bottom-0 z-10 flex flex-col gap-6 pb-14 md:pb-20">
          <Reveal><p className="hero-eyebrow">Selected work</p></Reveal>
          <Reveal variant="clip" delay={180} className="max-w-4xl">
            <h1 className="display-heading text-balance text-5xl sm:text-7xl md:text-8xl">Infrastructure for ideas with <span className="text-primary italic">consequence.</span></h1>
          </Reveal>
          <Reveal delay={380}>
            <p className="max-w-xl text-lg leading-8 text-footer-muted">Spaces, programs, and strategy designed to outlast the moment—so your institution can do more of what's next.</p>
          </Reveal>
          <Reveal delay={480}>
            <Button asChild size="lg">
              <Link to="/contact">Let's talk <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="site-container pt-20 md:pt-28">
        <Reveal className="mb-12">
          <p className="eyebrow mb-5">Products</p>
          <h2 className="display-heading text-5xl sm:text-6xl">Things I've <span className="text-primary italic">built.</span></h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product, index) =>
            product.href ? (
              <Reveal key={product.name} variant="scale" delay={index * 140}>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noreferrer"
                  className="editorial-card flex h-full flex-col justify-between p-7 md:p-10"
                >
                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl">{product.name}</h3>
                    <p className="mt-4 max-w-md leading-7 text-muted-foreground">{product.copy}</p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Visit site <ArrowUpRight aria-hidden="true" className="size-4" />
                  </span>
                </a>
              </Reveal>
            ) : (
              <Reveal key={product.name} variant="scale" delay={index * 140}>
                <div className="editorial-card flex h-full flex-col justify-between p-7 md:p-10 opacity-70">
                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl">{product.name}</h3>
                    <p className="mt-4 max-w-md leading-7 text-muted-foreground">{product.copy}</p>
                  </div>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </section>

      <section className="site-container pt-20 pb-24 md:pt-28 md:pb-32">
        <Reveal className="mb-12">
          <p className="eyebrow mb-5">How it comes together</p>
          <h2 className="display-heading text-5xl sm:text-6xl">Where strategy becomes <span className="text-primary italic">structure.</span></h2>
        </Reveal>
        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => (
          <article key={project.number} className="grid gap-8 md:grid-cols-12 md:items-end">
            <Reveal variant="clip" className={`image-reveal emerald-image ${project.aspect} md:col-span-8 ${index % 2 ? "md:order-2" : ""}`}>
              <img src={project.image} alt={project.alt} width={project.width} height={project.height} loading={index ? "lazy" : "eager"} className="h-full w-full object-cover" />
            </Reveal>
            <Reveal delay={220} className={`border-t pt-6 md:col-span-4 ${index % 2 ? "md:order-1" : ""}`}>
              <div className="mb-12 flex justify-between text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"><span>{project.number}</span><span>{project.type}</span></div>
              <h2 className="display-heading text-4xl sm:text-5xl">{project.title}</h2>
              <p className="mt-5 leading-7 text-muted-foreground">{project.copy}</p>
            </Reveal>
          </article>
          ))}
        </div>
      </section>

      <section className="emerald-wash border-y py-20 md:py-28">
        <div className="site-container grid gap-12 md:grid-cols-[0.65fr_1.35fr]">
          <Reveal>
            <div>
              <p className="eyebrow">What I've built</p>
              <h2 className="display-heading mt-5 max-w-md text-4xl sm:text-5xl">Three years, <span className="text-primary italic">zero to one.</span></h2>
            </div>
          </Reveal>
          <div className="divide-y border-y">
            {ventures.map((item) => (
              <Reveal key={item.number} delay={Number(item.number) * 140}>
                <article className="grid gap-2 py-9 sm:grid-cols-[4rem_1fr]">
                  <span className="text-xs font-semibold text-primary">{item.number}</span>
                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl">{item.title}</h3>
                    <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{item.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container pb-20 md:pb-28">
        <Reveal variant="scale" className="partnership-gradient flex min-h-96 flex-col justify-between rounded-lg p-8 text-primary-foreground md:flex-row md:items-end md:p-14">
          <div><p className="mb-8 text-xs font-semibold uppercase tracking-[0.16em] opacity-70">Partnerships</p><h2 className="display-heading max-w-3xl text-5xl sm:text-6xl md:text-7xl">Shape the room.<br />Own your outcome.</h2></div>
          <Button asChild className="mt-10 shrink-0 md:mt-0"><Link to="/contact">Start a conversation <ArrowRight aria-hidden="true" /></Link></Button>
        </Reveal>
      </section>
    </>
  );
}
