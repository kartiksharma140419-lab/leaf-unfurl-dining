import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LeafGlyph } from "@/components/brand/LeafGlyph";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

type NavLink = { label: string; href: string };
const LINKS: NavLink[] = [
  { label: "Story", href: "/#roots" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#reviews" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        {/* Mobile Navigation Trigger */}
        <div className="flex md:hidden items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open Menu"
                className="p-2 text-[color:var(--color-malai)]/80 hover:text-[color:var(--color-marigold)] transition-colors focus:outline-none cursor-pointer"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-[color:var(--color-tandoor)] border-r border-[color:var(--color-gold)]/25 text-[color:var(--color-malai)] p-8 flex flex-col justify-between"
            >
              <div>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center gap-3 mb-12">
                  <LeafGlyph
                    strokeVein
                    className="h-7 w-7 text-[color:var(--color-marigold)]"
                  />
                  <span className="font-display text-2xl leading-none tracking-tight text-[color:var(--color-malai)]">
                    Urban <span className="italic text-[color:var(--color-gold)]">Leaf</span>
                  </span>
                </div>
                <ul className="flex flex-col gap-6">
                  {LINKS.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        onClick={() => setIsOpen(false)}
                        className="font-accent text-lg text-[color:var(--color-malai)]/80 hover:text-[color:var(--color-marigold)] transition-colors block py-2"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border-t border-[color:var(--color-gold)]/20 pt-6">
                <a
                  href="/#reserve"
                  onClick={() => setIsOpen(false)}
                  className="font-accent text-center text-[11px] px-5 py-4 rounded-sm bg-[color:var(--color-marigold)] text-[color:var(--color-tandoor)] hover:bg-[color:var(--color-gold)] transition-colors shadow-[0_10px_30px_-10px_rgba(225,137,43,0.6)] block w-full"
                >
                  Reserve a Table
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

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
