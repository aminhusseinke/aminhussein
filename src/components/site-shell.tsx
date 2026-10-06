import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { socialLinks } from "@/lib/social-links";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/work" as const, label: "Work" },
  { to: "/speaking" as const, label: "Speaking" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <div className="site-container flex h-20 items-center justify-between md:h-24">
          <Link to="/" className="brand-wordmark" aria-label="Amin Hussein, home">
            <span className="brand-wordmark-text">Amin Hussein</span>
            <svg className="brand-wordmark-swoosh" viewBox="0 0 200 40" fill="none" aria-hidden="true">
              <path d="M2 16 C 30 32, 55 34, 78 26 C 110 14, 150 4, 196 2" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </Link>
          <div className="flex items-center gap-2 md:gap-4">
            <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex md:gap-3">
              {links.map((link) => {
                const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`nav-link ${active ? "nav-link-active" : ""}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Button asChild size="sm" className="hidden shrink-0 md:inline-flex">
              <Link to="/contact" aria-label="Contact Amin">
                <Mail aria-hidden="true" className="size-3.5" />
                <span>Contact</span>
              </Link>
            </Button>
            <MobileNav links={links} pathname={pathname} />
          </div>
        </div>
      </header>
      <main key={pathname} className="route-enter">{children}</main>
      <footer className="footer-gradient text-footer-foreground">
        <div className="site-container py-12 md:py-16">
          <div className="grid gap-12 md:grid-cols-[1fr_auto_auto] md:items-end md:gap-16">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.18em] text-footer-muted">Navigate</p>
              <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-3">
                {links.map((link) => (
                  <Link key={link.to} to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.18em] text-footer-muted">Connect</p>
              <nav aria-label="Social media" className="flex flex-wrap gap-4">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                    aria-label={`${label} (opens in a new tab)`}
                  >
                    <Icon aria-hidden="true" className="size-4" />
                    <span>{label}</span>
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-2 text-sm text-footer-foreground">
              <MapPin aria-hidden="true" className="size-4" />
              <span>Based in Nairobi, Kenya</span>
            </div>
          </div>
          <div className="mt-14 flex items-end justify-between border-t border-footer-line pt-7">
            <p className="font-display text-3xl sm:text-4xl">Own your story.</p>
            <ArrowUpRight aria-hidden="true" className="hidden size-6 sm:block" />
          </div>
        </div>
      </footer>
    </div>
  );
}
