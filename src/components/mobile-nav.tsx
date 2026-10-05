import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, Menu, X } from "lucide-react";
import { socialLinks } from "@/lib/social-links";

type NavLink = { to: "/" | "/work" | "/speaking"; label: string };

export function MobileNav({ links, pathname }: { links: NavLink[]; pathname: string }) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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

        <nav aria-label="Main navigation" className="mobile-nav-links site-container">
          {links.map((link, index) => {
            const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`mobile-nav-link ${active ? "text-primary" : ""}`}
                style={{ transitionDelay: open ? `${120 + index * 70}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="mobile-nav-link text-primary"
            style={{ transitionDelay: open ? `${120 + links.length * 70}ms` : "0ms" }}
          >
            Contact
          </Link>
        </nav>

        <div
          className="mobile-nav-footer site-container"
          style={{ transitionDelay: open ? `${120 + (links.length + 1) * 70}ms` : "0ms" }}
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
    </>
  );
}
