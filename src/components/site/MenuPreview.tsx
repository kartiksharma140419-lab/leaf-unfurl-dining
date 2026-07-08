import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { HOMEPAGE_TEASER, type Dish } from "@/data/menu";
import { FoilDivider, LeafGlyph } from "@/components/brand/LeafGlyph";

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

export function DishCard({ dish, i = 0 }: { dish: Dish; i?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-[color:var(--color-gold)]/15 bg-[color:var(--color-card)]"
    >
      {dish.chefsPick && (
        <span className="absolute left-4 top-4 z-10 font-accent text-[9px] px-2.5 py-1 bg-[color:var(--color-sindoor)] text-[color:var(--color-malai)] shadow-md">
          Chef&rsquo;s Pick
        </span>
      )}
      {dish.image && (
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-tandoor)]/80 via-transparent to-transparent" />

          {/* Leaf-flip chef's note */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
            <div className="relative bg-[color:var(--color-tandoor)]/95 backdrop-blur-md p-5 border-t border-[color:var(--color-marigold)]/30">
              <LeafGlyph className="absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-6 text-[color:var(--color-marigold)]" />
              <p className="font-body text-[13px] leading-[1.6] text-[color:var(--color-malai)]/90 italic">
                &ldquo;{dish.description.split(".")[0]}.&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl leading-tight text-[color:var(--color-malai)]">{dish.name}</h3>
          <span className="font-accent text-[13px] text-[color:var(--color-marigold)] shrink-0">₹{dish.price}</span>
        </div>
        <div className="flex items-center gap-3">
          <Chilis n={dish.spice} />
        </div>
        {!dish.image && (
          <p className="font-body text-[13px] leading-[1.65] text-[color:var(--color-malai)]/65 mt-1">
            {dish.description}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export function MenuPreview() {
  return (
    <>
      <FoilDivider />
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-16 flex flex-col items-center text-center">
            <p className="font-accent text-[11px] text-[color:var(--color-gold)] mb-4 flex items-center gap-3">
              <LeafGlyph className="h-3 w-3 rotate-[-12deg]" /> The Menu
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-[color:var(--color-malai)] max-w-3xl">
              A little of everything we&rsquo;re <span className="italic text-[color:var(--color-gold)]">proud of.</span>
            </h2>
            <p className="font-body mt-5 text-[color:var(--color-malai)]/70 max-w-xl">
              Eight favourites off the full list. Hover a dish for the chef&rsquo;s note.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {HOMEPAGE_TEASER.map((d, i) => (
              <DishCard key={d.slug} dish={d} i={i} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              to="/menu"
              className="font-accent text-[12px] px-8 py-4 rounded-sm border border-[color:var(--color-malai)]/60 text-[color:var(--color-malai)] hover:bg-[color:var(--color-malai)] hover:text-[color:var(--color-tandoor)] transition-colors"
            >
              See the Full Menu →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
