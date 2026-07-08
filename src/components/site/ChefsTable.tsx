import { motion } from "framer-motion";
import biryani from "@/assets/dish-biryani-signature.jpg";
import { LeafGlyph } from "@/components/brand/LeafGlyph";

export function ChefsTable() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-tandoor)] py-24 md:py-32">
      {/* Full-bleed image with warm scrim */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:col-span-7 aspect-[4/3] overflow-hidden rounded-sm border border-[color:var(--color-gold)]/25 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.8)]"
        >
          <img
            src={biryani}
            alt="A sealed clay handi biryani with the golden dough crust freshly cracked open, fragrant steam rising"
            loading="lazy"
            width={1600}
            height={1100}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-tandoor)]/50 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="md:col-span-5"
        >
          <p className="font-accent text-[11px] text-[color:var(--color-gold)] mb-6 flex items-center gap-3">
            <LeafGlyph className="h-3 w-3 rotate-[-12deg]" /> The Chef&rsquo;s Table
          </p>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.02] text-[color:var(--color-malai)]">
            Lucknowi <span className="italic text-[color:var(--color-gold)]">Dum</span> Biryani
          </h2>
          <p className="font-body mt-6 text-[color:var(--color-malai)]/80 text-lg leading-[1.7]">
            Basmati and marinated meat, sealed under dough and steamed in its own perfume for
            forty-five minutes. We bring it to the table still sealed. The first crack of the crust
            is half the experience.
          </p>

          <div className="mt-10 flex items-baseline gap-4">
            <span className="font-accent text-[11px] text-[color:var(--color-malai)]/60">Serves Two</span>
            <span className="font-display text-5xl text-[color:var(--color-marigold)]">₹680</span>
          </div>

          <a
            href="#reserve"
            className="mt-10 inline-flex items-center gap-3 font-accent text-[12px] px-8 py-4 rounded-sm bg-[color:var(--color-sindoor)] text-[color:var(--color-malai)] hover:bg-[color:var(--color-marigold)] hover:text-[color:var(--color-tandoor)] transition-colors shadow-[0_20px_50px_-20px_rgba(122,21,38,0.7)]"
          >
            Taste the Signature <LeafGlyph className="h-4 w-4 rotate-[-12deg]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
