import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mic, Users, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { HeroSlideshow } from "@/components/hero-slideshow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import freelancersSummitImage from "@/assets/freelancers-summit-speaking.jpg";
import creviaSummitImage from "@/assets/crevia-summit-speaking.jpg";
import speakingSessionWideImage from "@/assets/speaking-session-wide.jpg";
import aiSummitImage from "@/assets/ai-summit-speaking.jpg";
import americanSpacesTalkImage from "@/assets/american-spaces-speaking-talk.jpg";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Speaking — Amin" },
      { name: "description", content: "Keynotes, workshops, and panel moderation on strategy, brand, and scaling businesses across Africa." },
      { property: "og:title", content: "Speaking — Amin" },
      { property: "og:description", content: "Keynotes, workshops, and panel moderation on strategy, brand, and scaling businesses across Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpeakingPage,
});

// ai-summit-speaking.jpg is a tall portrait shot; on a wide hero, object-cover
// only shows the vertical middle of the source, which sits below his head. A
// higher focal point keeps him in frame instead of cropping to the chairs.
const heroImages = [
  { src: americanSpacesTalkImage, position: "center" },
  { src: creviaSummitImage, position: "center" },
  { src: freelancersSummitImage, position: "center" },
  { src: speakingSessionWideImage, position: "center" },
  { src: aiSummitImage, position: "50% 22%" },
];

const topics = [
  {
    title: "Building for Africa",
    copy: "How to navigate the realities of the African startup ecosystem. Focuses on practical entrepreneurship, identifying genuine community problems, and building scalable solutions from the ground up.",
  },
];

const formats = [
  {
    icon: Users,
    title: "Panel moderation",
    copy: "Structured, well-paced moderation that draws sharp answers out of your panel and keeps it moving with purpose.",
  },
  {
    icon: Presentation,
    title: "Keynotes",
    copy: "I'll build a tight talk on strategy, brand, or scaling across Africa—shaped around your audience and your format.",
  },
  {
    icon: Mic,
    title: "Workshops",
    copy: "Hands-on sessions that leave your team with a working framework, not just a slide deck.",
  },
];

const engagements = [
  { event: "Good International School STEM Career Fair Programme", role: "Speaker", location: "Nairobi, Kenya", date: "September 2026", copy: "A STEM-focused career fair helping primary school students explore pathways into science, technology, and entrepreneurship." },
  { event: "Crevia Summit", role: "Host", location: "Nairobi, Kenya", date: "June 2026", copy: "A flagship regional convening on personal branding and career growth, produced by Crevia for East Africa's young professionals." },
  { event: "AI Summit", role: "Host", location: "Nairobi, Kenya", date: "August 2025", copy: "Themed \"Building AI for Impact\"—exploring how AI can solve the real challenges Africa faces today." },
  { event: "Freelancers Summit", role: "Host & panel moderator", location: "Nairobi, Kenya", date: "October 2024", copy: "A summit for Kenya's freelance and independent-work community on building sustainable income outside traditional employment." },
];

function SpeakingPage() {
  return (
    <>
      <section className="photo-hero text-footer-foreground">
        <HeroSlideshow images={heroImages} />
        <div className="site-container absolute inset-x-0 bottom-0 z-10 flex flex-col gap-6 pb-14 md:pb-20">
          <Reveal><p className="hero-eyebrow">Speaking</p></Reveal>
          <Reveal variant="clip" delay={180} className="max-w-3xl">
            <h1 className="display-heading text-balance text-5xl sm:text-7xl md:text-8xl">Talks that build <span className="text-primary italic">what lasts.</span></h1>
          </Reveal>
          <Reveal delay={380}>
            <Button asChild size="lg">
              <Link to="/contact">Let's talk <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="emerald-wash border-y py-20 md:py-28">
        <div className="site-container grid gap-12 md:grid-cols-[0.65fr_1.35fr]">
          <Reveal><p className="eyebrow self-start">Formats</p></Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {formats.map(({ icon: Icon, title, copy }, index) => (
              <Reveal key={title} variant="scale" delay={index * 140}>
                <article className="editorial-card flex h-full flex-col gap-5 p-7">
                  <Icon aria-hidden="true" className="size-6 text-primary" />
                  <div>
                    <h3 className="font-display text-2xl">{title}</h3>
                    <p className="mt-3 leading-6 text-muted-foreground">{copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container py-20 md:py-28">
        <Reveal className="mb-12"><p className="eyebrow">Topics</p><h2 className="display-heading mt-5 text-5xl sm:text-6xl">What I speak/moderate <span className="text-primary italic">about.</span></h2></Reveal>
        <Reveal delay={180}>
          <Accordion type="single" collapsible className="border-t">
            {topics.map((topic, index) => (
              <AccordionItem key={topic.title} value={topic.title}>
                <AccordionTrigger className="py-6 text-left text-xl font-display font-normal sm:text-2xl">
                  <span><span className="mr-3 text-primary">{index + 1}.</span>{topic.title}</span>
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl text-base leading-7 text-muted-foreground">{topic.copy}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      <section className="site-container pb-20 md:pb-28">
        <Reveal className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5">Track record</p>
            <h2 className="display-heading text-5xl sm:text-6xl">Selected <span className="text-primary italic">engagements.</span></h2>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="divide-y border-y">
            {engagements.map((item) => (
              <div key={`${item.event}-${item.date}`} className="grid gap-2 py-7 sm:grid-cols-[1fr_auto_auto] sm:items-start sm:gap-8">
                <div>
                  <p className="font-display text-xl">{item.event}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{item.copy}</p>
                </div>
                <div className="mt-1 flex items-center gap-2 sm:contents">
                  <span className="text-sm text-muted-foreground">{item.location}</span>
                  <span className="text-xs text-muted-foreground sm:hidden" aria-hidden="true">•</span>
                  <span className="whitespace-nowrap text-sm font-semibold">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="site-container pb-20 md:pb-28">
        <Reveal variant="scale" className="partnership-gradient flex min-h-96 flex-col justify-between rounded-lg p-8 text-primary-foreground md:flex-row md:items-end md:p-14">
          <div>
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.16em] opacity-70">Speaking inquiries</p>
            <h2 className="display-heading max-w-3xl text-5xl sm:text-6xl md:text-7xl">Bring your story<br />into the room.</h2>
          </div>
          <Button asChild className="mt-10 shrink-0 md:mt-0">
            <Link to="/contact">Start a conversation <ArrowRight aria-hidden="true" /></Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
