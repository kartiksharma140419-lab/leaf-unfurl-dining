import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reservation } from "@/components/site/Reservation";
import { MENU } from "@/data/menu";
import { DishCard } from "@/components/site/MenuPreview";
import { FoilDivider, LeafGlyph } from "@/components/brand/LeafGlyph";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The Menu — Urban Leaf Café" },
      {
        name: "description",
        content:
          "Slow-simmered curries, tandoor-fired meats, and breads pulled apart by hand. The full Urban Leaf Café menu — North India, plated with intention.",
      },
      { property: "og:title", content: "The Menu — Urban Leaf Café" },
      {
        property: "og:description",
        content: "Every dish, every price, every chef's note. From small plates to sweet endings.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="relative">
      <Nav />
      <main>
        {/* Header */}
        <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 text-center">
          <div className="mx-auto max-w-3xl px-6">
            <p className="font-accent text-[11px] text-[color:var(--color-gold)] mb-6 flex items-center justify-center gap-3">
              <LeafGlyph className="h-3 w-3 rotate-[-12deg]" /> The Full Menu
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-[color:var(--color-malai)]">
              From root <span className="italic text-[color:var(--color-gold)]">to ritual.</span>
            </h1>
            <p className="font-body mt-6 text-[color:var(--color-malai)]/70 text-lg leading-[1.7]">
              Six courses, twenty-eight dishes, one philosophy: cook the food of home,
              and serve it the way a fine table deserves.
            </p>
          </div>
        </section>

        {/* Category jump nav */}
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 border-y border-[color:var(--color-gold)]/20 py-5">
            {MENU.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="font-accent text-[11px] text-[color:var(--color-malai)]/70 hover:text-[color:var(--color-marigold)] transition-colors"
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>

        {/* Categories */}
        {MENU.map((cat) => (
          <section id={cat.id} key={cat.id} className="relative py-12 md:py-24">
            <div className="mx-auto max-w-[1400px] px-6 md:px-10">
              <div className="mb-12 max-w-2xl">
                <p className="font-accent text-[10px] text-[color:var(--color-gold)] mb-3">
                  {String(MENU.indexOf(cat) + 1).padStart(2, "0")}
                </p>
                <h2 className="font-display text-4xl md:text-5xl leading-tight text-[color:var(--color-malai)]">
                  {cat.title}
                </h2>
                <p className="font-body mt-4 text-[color:var(--color-malai)]/65 text-[15px] leading-[1.7] italic">
                  {cat.blurb}
                </p>
              </div>

              {/* Photo cards */}
              {cat.dishes.some((d) => d.image) && (
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mb-10">
                  {cat.dishes.filter((d) => d.image).map((d, i) => (
                    <DishCard key={d.slug} dish={d} i={i} />
                  ))}
                </div>
              )}

              {/* Text-only rows for the extras */}
              {cat.dishes.some((d) => !d.image) && (
                <ul className="divide-y divide-[color:var(--color-gold)]/12 border-y border-[color:var(--color-gold)]/12">
                  {cat.dishes.filter((d) => !d.image).map((d) => (
                    <li key={d.slug} className="grid grid-cols-[1fr_auto] gap-6 py-6 md:grid-cols-[1fr_1.5fr_auto] md:gap-10 items-baseline">
                      <div>
                        <h3 className="font-display text-xl md:text-2xl text-[color:var(--color-malai)]">{d.name}</h3>
                        <div className="mt-2">
                          <Chilis n={d.spice} />
                        </div>
                      </div>
                      <p className="font-body text-[14px] leading-[1.65] text-[color:var(--color-malai)]/70 hidden md:block">
                        {d.description}
                      </p>
                      <span className="font-accent text-[13px] text-[color:var(--color-marigold)] whitespace-nowrap justify-self-end">
                        ₹{d.price}
                      </span>
                      <p className="font-body text-[13px] leading-[1.65] text-[color:var(--color-malai)]/65 md:hidden col-span-2 mt-1">
                        {d.description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="mt-4">
              <FoilDivider />
            </div>
          </section>
        ))}

        <div className="text-center pb-8">
          <Link
            to="/"
            className="font-accent text-[11px] text-[color:var(--color-malai)]/70 hover:text-[color:var(--color-marigold)] transition-colors"
          >
            ← Back to the Room
          </Link>
        </div>

        <Reservation />
      </main>
      <Footer />
    </div>
  );
}

function Chilis({ n }: { n: 1 | 2 | 3 }) {
  return (
    <span aria-label={`Spice level ${n} of 3`} className="inline-flex items-center gap-0.5">
      {[1, 2, 3].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-3 w-3 ${i <= n ? "text-[color:var(--color-marigold)]" : "text-[color:var(--color-malai)]/20"}`}
          fill="currentColor"
        >
          <path d="M13 3c-1.5 0-2.6 1.1-3.2 2.2-.5 1-1.4 1.6-2.5 1.6-1 0-1.8-.5-2.3-.5-.6 0-1 .5-1 1.1 0 3.8 3.4 7.2 7.8 8.3 1.1.3 2.2.3 3.2.1 3.5-.6 6.2-3.3 6.9-6.7.1-.7-.4-1.3-1.1-1.3-2.9 0-5.4-1.8-6.6-4.3-.2-.3-.5-.5-.9-.5H13z" />
        </svg>
      ))}
    </span>
  );
}
