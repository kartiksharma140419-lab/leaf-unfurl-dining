import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LeafGlyph } from "@/components/brand/LeafGlyph";

type NavLink = { label: string; href: string };
const LINKS: NavLink[] = [
  { label: "Story", href: "/#roots" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#reviews" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[color:var(--color-tandoor)]/80 backdrop-blur-xl border-b border-[color:var(--color-gold)]/25"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10 md:py-5"
      >
        {/* Wordmark */}
        <Link to="/" className="group flex items-center gap-3">
          <LeafGlyph
            strokeVein
            className="h-7 w-7 text-[color:var(--color-marigold)] transition-transform duration-500 group-hover:rotate-[-12deg]"
          />
          <span className="font-display text-2xl md:text-[26px] leading-none tracking-tight text-[color:var(--color-malai)]">
            Urban <span className="italic text-[color:var(--color-gold)]">Leaf</span>
          </span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="font-accent text-[11px] text-[color:var(--color-malai)]/80 hover:text-[color:var(--color-marigold)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Reserve CTA — always visible */}
        <a
          href="/#reserve"
          className="font-accent text-[11px] px-5 py-3 rounded-sm bg-[color:var(--color-marigold)] text-[color:var(--color-tandoor)] hover:bg-[color:var(--color-gold)] transition-colors shadow-[0_10px_30px_-10px_rgba(225,137,43,0.6)]"
        >
          Reserve a Table
        </a>
      </nav>
    </header>
  );
}
