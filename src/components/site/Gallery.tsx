import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import { FoilDivider, LeafGlyph } from "@/components/brand/LeafGlyph";

const SHOTS = [
  { src: g1, alt: "A candlelit private dining table with brass thali plates and tumblers", caption: "The Dining Room" },
  { src: g2, alt: "An intimate booth in deep sindoor maroon velvet with a warm brass table lamp", caption: "The Private Nook" },
  { src: g3, alt: "Chef silhouetted at a glowing tandoor station with amber flames", caption: "The Tandoor Station" },
  { src: g4, alt: "Close-up of a brass thali place-setting with a single fresh marigold flower", caption: "The Table Set" },
];

export function Gallery() {
  return (
    <>
      <FoilDivider />
      <section id="gallery" className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-accent text-[11px] text-[color:var(--color-gold)] mb-4 flex items-center gap-3">
                <LeafGlyph className="h-3 w-3 rotate-[-12deg]" /> Inside Urban Leaf
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-[color:var(--color-malai)] max-w-2xl">
                A room built for <span className="italic text-[color:var(--color-gold)]">lingering.</span>
              </h2>
            </div>
            <p className="font-body text-[color:var(--color-malai)]/60 text-sm md:text-right md:max-w-xs">
              Drag or scroll horizontally. It's meant to feel like a film reel.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 md:px-10 pb-6"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {SHOTS.map((s, i) => (
            <figure
              key={i}
              className="relative shrink-0 snap-start w-[80vw] md:w-[520px] aspect-[4/5] overflow-hidden rounded-sm border border-[color:var(--color-gold)]/15"
            >
              <img src={s.src} alt={s.alt} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-tandoor)]/85 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 flex items-baseline justify-between">
                <span className="font-display text-2xl text-[color:var(--color-malai)]">{s.caption}</span>
                <span className="font-accent text-[10px] text-[color:var(--color-gold)]">0{i + 1} / 0{SHOTS.length}</span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </section>
    </>
  );
}
