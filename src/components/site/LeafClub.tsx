import { useState, type FormEvent } from "react";
import { LeafGlyph } from "@/components/brand/LeafGlyph";

export function LeafClub() {
  const [value, setValue] = useState("");
  const [joined, setJoined] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    setJoined(true);
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-24 border-t border-[color:var(--color-gold)]/15">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-10">
        <div>
          <p className="font-accent text-[11px] text-[color:var(--color-gold)] mb-4 flex items-center gap-3">
            <LeafGlyph className="h-3 w-3 rotate-[-12deg]" /> Leaf Club
          </p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-[color:var(--color-malai)]">
            Join the <span className="italic text-[color:var(--color-gold)]">Leaf Club.</span>
          </h2>
          <p className="font-body mt-4 text-[color:var(--color-malai)]/75 text-[15px] leading-[1.7] max-w-lg">
            First slice of every seasonal dessert, a birthday dessert on the house, priority seating
            on weekends. No card to carry. Just your phone number and an appetite.
          </p>
        </div>

        {joined ? (
          <div className="flex items-center gap-4 rounded-sm border border-[color:var(--color-marigold)]/40 bg-[color:var(--color-marigold)]/8 px-6 py-5">
            <LeafGlyph strokeVein className="h-8 w-8 text-[color:var(--color-marigold)]" />
            <div>
              <p className="font-display text-lg italic text-[color:var(--color-malai)]">You&rsquo;re in.</p>
              <p className="font-body text-sm text-[color:var(--color-malai)]/70">
                We&rsquo;ll be in touch when the first seasonal dessert lands.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-3 md:flex-row">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Phone number or email"
              className="flex-1 rounded-sm border border-[color:var(--color-malai)]/25 bg-[color:var(--color-tandoor)]/60 px-5 py-4 font-body text-[15px] text-[color:var(--color-malai)] placeholder:text-[color:var(--color-malai)]/40 focus:border-[color:var(--color-marigold)] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="font-accent text-[12px] px-7 py-4 rounded-sm bg-[color:var(--color-marigold)] text-[color:var(--color-tandoor)] hover:bg-[color:var(--color-gold)] transition-colors shadow-[0_16px_40px_-16px_rgba(225,137,43,0.55)]"
            >
              Join the Leaf Club
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
