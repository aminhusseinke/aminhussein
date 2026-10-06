import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { socialLinks } from "@/lib/social-links";

type NavLink = { to: "/" | "/work" | "/speaking" | "/contact"; label: string };

export function MobileNav({ links, pathname }: { links: NavLink[]; pathname: string }) {
  const gridLinks: NavLink[] = [...links, { to: "/contact", label: "Contact" }];
  const [open, setOpen] = useState(false);
  // The overlay is portaled to <body> (below) so it escapes the header's own
  // position:relative/z-index:20 stacking context — otherwise page content
  // with its own z-index (e.g. the Contact hero's z-index:10 heading) can
  // paint through it instead of being covered. Portaling needs `document`,
  // which doesn't exist during SSR, so it's deferred until after mount.
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close automatically whenever navigation actually happens, and lock
  // background scroll while the overlay is up.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const overlay = (
    <div
      id="mobile-nav-panel"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className={`mobile-nav-overlay partnership-gradient text-footer-foreground ${open ? "is-open" : ""}`}
    >
      <div className="site-container flex h-20 items-center justify-end">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => setOpen(false)}
          className="mobile-nav-trigger"
          aria-label="Close menu"
        >
          <X aria-hidden="true" className="size-5" />
        </button>
      </div>

      <nav aria-label="Main navigation" className="mobile-nav-links-grid site-container">
        {gridLinks.map((link, index) => {
          const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`mobile-nav-link-card ${active ? "is-active" : ""}`}
              style={{ transitionDelay: open ? `${120 + index * 70}ms` : "0ms" }}
            >
              <span className="mobile-nav-link-top">
                <span className="mobile-nav-link-index">0{index + 1}</span>
                <ArrowUpRight aria-hidden="true" className="mobile-nav-link-arrow size-5" />
              </span>
              <span className="mobile-nav-link-label">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div
        className="mobile-nav-footer site-container"
        style={{ transitionDelay: open ? `${120 + gridLinks.length * 70}ms` : "0ms" }}
      >
        <a href="mailto:hh.aminhussein@gmail.com" className="flex items-center gap-2 text-sm text-footer-muted">
          <Mail aria-hidden="true" className="size-4" />
          hh.aminhussein@gmail.com
        </a>
        <div className="flex gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              className="social-link"
            >
              <Icon aria-hidden="true" className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mobile-nav-trigger md:hidden"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
      >
        <Menu aria-hidden="true" className="size-5" />
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </>
  );
}
