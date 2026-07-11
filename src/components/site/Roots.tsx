import { motion } from "framer-motion";
import spices from "@/assets/roots-spices.jpg";
import tandoor from "@/assets/roots-tandoor.jpg";
import { FoilDivider, LeafGlyph } from "@/components/brand/LeafGlyph";

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }),
};

export function Roots() {
  return (
    <>
      <FoilDivider />
      <section id="roots" className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-10">
          {/* Copy */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <motion.p variants={rise} className="font-accent text-[11px] text-[color:var(--color-gold)] mb-6 flex items-center gap-3">
              <LeafGlyph className="h-3 w-3 rotate-[-12deg]" /> Our Roots
            </motion.p>
            <motion.h2 variants={rise} custom={1} className="font-display text-4xl md:text-6xl leading-[1.05] text-[color:var(--color-malai)]">
              Every great Indian meal <span className="italic text-[color:var(--color-gold)]">starts with a leaf.</span>
            </motion.h2>

            <div className="mt-8 space-y-5 font-body text-[color:var(--color-malai)]/80 text-[17px] leading-[1.75] max-w-[52ch]">
              <motion.p variants={rise} custom={2}>
                The banana leaf that becomes a plate at a wedding feast. The curry leaf that
                crackles in hot ghee and wakes up a whole pot of dal. The tea leaf steeped low
                and slow until it turns into chai. The paan leaf, folded and offered at the end
                of a meal, as if to say: <em>stay a little longer.</em>
              </motion.p>
              <motion.p variants={rise} custom={3}>
                Urban Leaf Café takes that idea and sets it down in the middle of the city. We
                cook the food of home — slow-simmered curries, tandoor-fired meats, breads
                pulled apart by hand — and serve it the way a fine table deserves: unhurried,
                generous, a little theatrical. Nothing here is diluted, and nothing here is
                fusion for fusion's sake. It's North India, plated with intention, in a room
                built for lingering.
              </motion.p>
            </div>

            <motion.blockquote
              variants={rise}
              custom={4}
              className="mt-12 border-l-2 border-[color:var(--color-marigold)] pl-6 max-w-lg"
            >
              <p className="font-display italic text-3xl md:text-4xl leading-tight text-[color:var(--color-malai)]">
                From root to ritual. That&rsquo;s the whole menu, really.
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Parallax image stack */}
          <div className="relative h-[380px] sm:h-[500px] md:h-[720px]">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute left-0 top-0 h-[58%] w-[68%] overflow-hidden rounded-sm shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
            >
              <img
                src={spices}
                alt="Overhead of whole Indian spices — cinnamon, star anise, saffron threads, dried red chilies — scattered on charcoal stone"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute right-0 bottom-0 h-[62%] w-[62%] overflow-hidden rounded-sm shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] border border-[color:var(--color-gold)]/20"
            >
              <img
                src={tandoor}
                alt="Dough being lowered by hand into a glowing tandoor oven, amber-orange embers inside"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="pointer-events-none absolute -left-6 top-4 font-display text-[8rem] italic text-[color:var(--color-marigold)]/10 select-none">
              &ldquo;
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
