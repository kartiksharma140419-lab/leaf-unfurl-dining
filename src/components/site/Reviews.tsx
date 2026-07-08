import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FoilDivider, LeafGlyph } from "@/components/brand/LeafGlyph";

const REVIEWS = [
  { quote: "Best butter chicken I've had outside my grandmother's kitchen — and she'd be the first to admit it.", name: "Ananya R." },
  { quote: "We came in for a quick dinner and left three hours and two chais later. Not sorry about it.", name: "Karan M." },
  { quote: "The naan alone is worth crossing the city for. Everything else is a bonus.", name: "Priya S." },
  { quote: "Asked for 'not too spicy.' They understood exactly what that meant. Rare skill.", name: "Rohan T." },
  { quote: "The biryani arrives sealed and you crack it open at the table — my daughter now thinks all rice comes wrapped like a present.", name: "Meera K." },
  { quote: "Fine dining that still feels like someone's home. That balance is very hard to get right, and they've got it.", name: "Aditya V." },
];

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 text-[color:var(--color-marigold)]" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <>
      <FoilDivider />
      <section
        id="reviews"
        className="relative overflow-hidden py-24 md:py-32"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="mx-auto max-w-[1000px] px-6 text-center">
          <p className="font-accent text-[11px] text-[color:var(--color-gold)] mb-4 flex items-center justify-center gap-3">
            <LeafGlyph className="h-3 w-3 rotate-[-12deg]" /> What the City is Saying
          </p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-[color:var(--color-malai)] max-w-3xl mx-auto">
            The nicest thing anyone said to us this week.
          </h2>

          <div className="relative mt-14 h-[280px] md:h-[240px]">
            {REVIEWS.map((r, i) => (
              <motion.figure
                key={i}
                initial={false}
                animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0 : 20 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center px-4"
                style={{ pointerEvents: i === index ? "auto" : "none" }}
              >
                <Stars />
                <blockquote className="font-display text-2xl md:text-[28px] italic leading-[1.35] text-[color:var(--color-malai)] mt-6 max-w-[42ch]">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="font-accent text-[11px] text-[color:var(--color-gold)] mt-6">
                  — {r.name}
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-[color:var(--color-marigold)]" : "w-1.5 bg-[color:var(--color-malai)]/25"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
