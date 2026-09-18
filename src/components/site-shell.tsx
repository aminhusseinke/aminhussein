import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { ReactNode } from "react";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/work" as const, label: "Work" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <div className="site-container flex h-20 items-center justify-between md:h-24">
          <Link to="/" className="flex items-center gap-3" aria-label="Amin, home">
            <span className="brand-mark">A</span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em]">Amin</span>
          </Link>
          <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-3">
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
        </div>
      </header>
      <main key={pathname} className="route-enter">{children}</main>
      <footer className="footer-gradient text-footer-foreground">
        <div className="site-container py-12 md:py-16">
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
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
            <div className="flex items-center gap-2 text-sm text-footer-foreground">
              <MapPin aria-hidden="true" className="size-4" />
              <span>Based in Nairobi, Kenya</span>
            </div>
          </div>
          <div className="mt-14 flex items-end justify-between border-t border-footer-line pt-7">
            <p className="font-display text-3xl sm:text-4xl">Build what endures.</p>
            <ArrowUpRight aria-hidden="true" className="hidden size-6 sm:block" />
          </div>
        </div>
      </footer>
    </div>
  );
}
