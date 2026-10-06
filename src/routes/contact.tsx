import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { socialLinks } from "@/lib/social-links";
import { CONTACT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Amin" },
      { name: "description", content: "Get in touch for partnerships, speaking, and new ventures." },
      { property: "og:title", content: "Contact — Amin" },
      { property: "og:description", content: "Get in touch for partnerships, speaking, and new ventures." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (older browser, non-secure context) — the
      // email is still visible as plain text to select and copy manually.
    }
  };

  return (
    <>
      <section className="contact-hero partnership-gradient text-footer-foreground">
        <div className="site-container contact-hero-layout">
          <Reveal><p className="hero-eyebrow">Contact</p></Reveal>
          <Reveal variant="clip" delay={180}>
            <h1 className="display-heading text-balance text-5xl sm:text-7xl md:text-8xl">Let's write what's <span className="text-primary italic">next.</span></h1>
          </Reveal>
          <Reveal delay={380}>
            <p className="max-w-xl text-lg leading-8 text-footer-muted">Whether you're exploring a partnership, have a project in mind, or just want to say hello—I'd love to hear from you.</p>
          </Reveal>
        </div>
      </section>

      <section className="site-container py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <Reveal>
            <p className="eyebrow mb-6">Get in touch</p>
            <h2 className="display-heading mb-10 text-5xl sm:text-6xl">Find me.</h2>

            <div className="flex items-center gap-4">
              <span className="contact-icon-badge"><Mail aria-hidden="true" className="size-5" /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Email</p>
                <p className="text-lg">{CONTACT_EMAIL}</p>
              </div>
            </div>

            <p className="mt-14 mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Follow</p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  className="contact-social-icon"
                >
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal variant="scale" delay={160}>
            <article className="editorial-card p-8 md:p-12">
              <h3 className="font-display text-3xl sm:text-4xl">Send a message</h3>
              <p className="mt-4 max-w-md leading-7 text-muted-foreground">Email me directly and I'll aim to respond within 1–2 business days.</p>
              <Button size="lg" className="mt-9 w-full sm:w-auto" onClick={handleCopy}>
                {copied ? "Copied" : "Copy email address"}
                {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
              </Button>
              <p className="mt-3 text-xs text-muted-foreground" aria-live="polite">
                {copied ? "Copied to clipboard" : "Click to copy the address"}
              </p>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
