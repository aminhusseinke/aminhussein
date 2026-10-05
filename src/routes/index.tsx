import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { LogoMarquee } from "@/components/logo-marquee";
import systemsImage from "@/assets/operational-systems.jpg";
import profileImage from "@/assets/amin-profile-cutout.png";
import suluhuLogo from "@/assets/suluhu-logo-white.svg";
import nairobiGarageLogo from "@/assets/nairobi-garage-logo.webp";
import ihubLogo from "@/assets/ihub-logo.png";
import strathmoreLogo from "@/assets/strathmore-university-logo.png";
import heartsparkLogo from "@/assets/heartspark-logo.png";
import americanSpacesLogo from "@/assets/american-spaces-logo.jpg";
import hackhouseLogo from "@/assets/hackhouse-full.svg";
import islamicallyCorrectLogo from "@/assets/islamically-correct-podcast-logo.jpg";

// Crevia has no logo file yet, so it stays a text mark — add a `src` once
// one is available.
const companyLogos = [
  { name: "Suluhu Studio", src: suluhuLogo, invert: true },
  { name: "Crevia", placeholderSize: "1.35rem" },
  { name: "Nairobi Garage", src: nairobiGarageLogo },
  { name: "iHub Nairobi", src: ihubLogo, invert: true },
  { name: "Strathmore University", src: strathmoreLogo },
  { name: "Heartspark Consultancy", src: heartsparkLogo, imageHeight: "3.2rem" },
  { name: "American Spaces", src: americanSpacesLogo, imageHeight: "4.2rem" },
  { name: "Hackhouse", src: hackhouseLogo, imageHeight: "1.9rem" },
  { name: "Islamically Correct Podcast", src: islamicallyCorrectLogo, imageHeight: "3.9rem" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amin — Strategy Consultant for African Brands & Entrepreneurs" },
      { name: "description", content: "Helping entrepreneurs and brands scale across Africa the right way—through strategy, programs, and partnerships." },
      { property: "og:title", content: "Amin — Strategy Consultant for African Brands & Entrepreneurs" },
      { property: "og:description", content: "Helping entrepreneurs and brands scale across Africa the right way—through strategy, programs, and partnerships." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="home-hero partnership-gradient text-footer-foreground">
        <div className="site-container home-hero-layout">
          <Reveal className="relative z-10 flex items-center justify-between">
            <p className="hero-eyebrow">
              Hello, I’m Amin. <span className="wave-emoji" aria-hidden="true">👋</span>
            </p>
            <p className="hidden text-xs text-footer-muted sm:block">Nairobi / Global</p>
          </Reveal>

          <Reveal variant="clip" className="relative z-10 py-10 md:py-14" delay={180}>
            <h1 className="display-heading home-hero-title">
              I help brands scale across Africa,<br />
              <span className="text-primary italic">the right way.</span>
            </h1>
          </Reveal>

          <Reveal variant="scale" className="home-hero-portrait" delay={340}>
            <img
              src={profileImage}
              alt="Amin Hassan Hussein"
              width={768}
              height={768}
              fetchPriority="high"
              className="relative z-10 h-full w-full object-contain object-bottom"
            />
          </Reveal>

          <Reveal className="home-hero-footer" delay={480}>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
              <ArrowDownRight aria-hidden="true" className="size-4 text-primary" />
              Scroll to explore
            </div>
            <div className="relative z-20 max-w-xl">
              <p className="text-base leading-7 text-footer-muted md:text-lg">
                I help founders and brands scale across Africa through strategy, programs, and partnerships—so you own the story, not just survive it.
              </p>
              <Button asChild className="mt-6">
                <Link to="/work">Explore selected work <ArrowRight aria-hidden="true" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b py-14 md:py-16">
        <div className="site-container mb-9">
          <Reveal><p className="eyebrow">Companies I've worked with</p></Reveal>
        </div>
        <Reveal variant="scale">
          <LogoMarquee items={companyLogos} />
        </Reveal>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="site-container">
          <Reveal className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5">North star</p>
              <h2 className="display-heading text-5xl sm:text-6xl">Mission <span className="text-primary italic">&</span> vision</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Clear intent creates momentum. Strong strategy makes it repeatable.</p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal variant="scale">
            <article className="editorial-card emerald-panel flex min-h-80 flex-col justify-between p-7 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">01 / Mission</span>
              <div>
                <h3 className="display-heading mb-5 text-4xl sm:text-5xl">Turn your complexity into <span className="text-primary italic">clarity.</span></h3>
                <p className="max-w-md leading-7 text-footer-muted">I design the strategy that aligns your people, capital, and execution around the work that matters.</p>
              </div>
            </article>
            </Reveal>
            <Reveal variant="scale" delay={220}>
            <article className="editorial-card flex min-h-80 flex-col justify-between p-7 md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">02 / Vision</span>
              <div>
                <h3 className="display-heading mb-5 text-4xl sm:text-5xl">African brands built to <span className="text-primary italic">endure.</span></h3>
                <p className="max-w-md leading-7 text-muted-foreground">A future where African entrepreneurs and brands scale with confidence, creative rigor, and strategic independence.</p>
              </div>
            </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="site-container grid gap-10 py-20 md:grid-cols-2 md:items-center md:py-28">
        <Reveal variant="clip" className="image-reveal emerald-image aspect-[4/3]">
          <img src={systemsImage} alt="Strategy maps and planning materials" width={1600} height={1104} loading="lazy" className="h-full w-full object-cover" />
        </Reveal>
        <Reveal className="md:pl-10" delay={220}>
          <p className="eyebrow mb-6">The practice</p>
          <h2 className="display-heading text-balance text-5xl sm:text-6xl">Strategy that moves from paper to <span className="text-primary italic">practice.</span></h2>
          <p className="mt-7 max-w-lg text-base leading-7 text-muted-foreground">I work at the point where your vision becomes a growth plan—turning early conviction into clear strategy, credible brands, and partnerships built to unlock scale on your terms.</p>
        </Reveal>
      </section>

      <section className="emerald-wash border-y py-20 md:py-28">
        <div className="site-container grid gap-12 md:grid-cols-[0.65fr_1.35fr]">
          <Reveal>
            <div>
              <p className="eyebrow">Track record</p>
              <h2 className="display-heading mt-5 max-w-md text-4xl sm:text-5xl">I help ambitious teams make the leap from <span className="text-primary italic">possible</span> to proven.</h2>
            </div>
          </Reveal>
          <div className="divide-y border-y">
            {[
              ["01", "Zero to one", "Designed the strategy, narratives, and decision structures that move complex Nairobi initiatives from concept to credible launch."],
              ["02", "Brand architecture", "Built strategic brand foundations that align purpose, positioning, programs, and public expression into one coherent strategy."],
              ["03", "Institutional partnerships", "Developed high-trust relationships across the public, private, and social sectors to unlock long-term value and shared momentum."],
            ].map(([number, title, copy]) => (
              <Reveal key={number} delay={Number(number) * 140}>
                <article className="grid gap-5 py-9 sm:grid-cols-[4rem_1fr]">
                  <span className="text-xs font-semibold text-primary">{number}</span>
                  <div><h3 className="font-display text-3xl sm:text-4xl">{title}</h3><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{copy}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-end md:py-28">
        <Reveal><h2 className="display-heading max-w-3xl text-5xl sm:text-6xl">The right structure is how your team comes to <span className="emerald-text italic">own its story.</span></h2></Reveal>
        <Reveal delay={220}><Button asChild><Link to="/work">See the work <ArrowRight aria-hidden="true" /></Link></Button></Reveal>
      </section>
    </>
  );
}
