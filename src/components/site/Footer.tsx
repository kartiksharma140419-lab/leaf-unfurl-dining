import { LeafGlyph, FoilDivider } from "@/components/brand/LeafGlyph";

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--color-tandoor)] pt-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 md:grid-cols-4 md:px-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <LeafGlyph strokeVein className="h-8 w-8 text-[color:var(--color-marigold)]" />
            <span className="font-display text-2xl leading-none text-[color:var(--color-malai)]">
              Urban <span className="italic text-[color:var(--color-gold)]">Leaf</span> Café
            </span>
          </div>
          <p className="font-display italic text-xl text-[color:var(--color-malai)]/70 mt-6 max-w-md">
            From root to ritual. That&rsquo;s the whole menu, really.
          </p>

          {/* Small embedded map placeholder */}
          <div className="mt-8 h-40 max-w-md overflow-hidden rounded-sm border border-[color:var(--color-gold)]/20">
            <iframe
              title="Urban Leaf Café location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.2085%2C28.6115%2C77.2225%2C28.6215&layer=mapnik"
              className="h-full w-full grayscale contrast-125 opacity-80"
              loading="lazy"
            />
          </div>
        </div>

        {/* Hours */}
        <div>
          <p className="font-accent text-[10px] text-[color:var(--color-gold)] mb-4">Hours</p>
          <ul className="space-y-2 font-body text-sm text-[color:var(--color-malai)]/80">
            <li className="flex justify-between gap-4"><span>Tue – Thu</span><span>6pm – 11pm</span></li>
            <li className="flex justify-between gap-4"><span>Fri – Sat</span><span>6pm – 12am</span></li>
            <li className="flex justify-between gap-4"><span>Sunday</span><span>12pm – 11pm</span></li>
            <li className="flex justify-between gap-4 text-[color:var(--color-malai)]/50"><span>Monday</span><span>Closed</span></li>
          </ul>
        </div>

        {/* Visit */}
        <div>
          <p className="font-accent text-[10px] text-[color:var(--color-gold)] mb-4">Visit</p>
          <address className="not-italic font-body text-sm text-[color:var(--color-malai)]/80 leading-[1.7]">
            14 Marigold Lane<br />
            Khan Market, New Delhi<br />
            110003
          </address>
          <p className="font-body text-sm text-[color:var(--color-malai)]/80 mt-4">
            <a href="tel:+911141234567" className="hover:text-[color:var(--color-marigold)] transition-colors">
              +91 11 4123 4567
            </a>
          </p>
          <p className="font-body text-sm text-[color:var(--color-malai)]/80">
            <a href="mailto:hello@urbanleaf.cafe" className="hover:text-[color:var(--color-marigold)] transition-colors">
              hello@urbanleaf.cafe
            </a>
          </p>

          <div className="mt-6 flex gap-3">
            {[
              { l: "IG", h: "#" }, { l: "FB", h: "#" }, { l: "TW", h: "#" },
            ].map((s) => (
              <a
                key={s.l}
                href={s.h}
                aria-label={s.l}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-gold)]/40 font-accent text-[10px] text-[color:var(--color-malai)] hover:bg-[color:var(--color-marigold)] hover:border-[color:var(--color-marigold)] hover:text-[color:var(--color-tandoor)] transition-colors"
              >
                {s.l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <FoilDivider />
      </div>
      <div className="pb-8 text-center">
        <p className="font-accent text-[10px] text-[color:var(--color-malai)]/50">
          © {new Date().getFullYear()} Urban Leaf Café · Every Leaf Holds a Feast
        </p>
      </div>
    </footer>
  );
}
