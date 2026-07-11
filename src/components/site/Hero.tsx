import { motion, useReducedMotion } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";
import heroPoster from "@/assets/hero-poster.jpg";
import { LeafGlyph } from "@/components/brand/LeafGlyph";

/** CTA button with a small "magnetic" pull toward the cursor. */
function MagneticButton({
  children,
  variant,
  href,
}: {
  children: ReactNode;
  variant: "filled" | "outline";
  href: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base =
    "font-accent text-[12px] px-8 py-4 rounded-sm transition-[background,color,border] duration-300 inline-flex items-center justify-center will-change-transform";
  const styles =
    variant === "filled"
      ? "bg-[color:var(--color-marigold)] text-[color:var(--color-tandoor)] hover:bg-[color:var(--color-gold)] shadow-[0_20px_50px_-20px_rgba(225,137,43,0.75)]"
      : "border border-[color:var(--color-malai)]/70 text-[color:var(--color-malai)] hover:bg-[color:var(--color-malai)] hover:text-[color:var(--color-tandoor)]";

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${styles}`}
      style={{ transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s, color 0.3s" }}
    >
      {children}
    </a>
  );
}

/** Restrained steam wisps behind the headline. */
function Steam() {
  const wisps = [0, 1.4, 2.8, 4.2, 5.6];
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-1/3 mx-auto flex w-40 justify-around" aria-hidden="true">
      {wisps.map((delay, i) => (
        <span
          key={i}
          className="animate-steam block h-24 w-8 rounded-full bg-[color:var(--color-malai)]/8 blur-2xl"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-[color:var(--color-tandoor)]">
      {/* Poster / Ken-Burns backdrop. Real video source drops in at /assets/hero-loop.mp4 later. */}
      <div className="absolute inset-0">
        <motion.img
          src={heroPoster}
          alt="A chef's hands tearing a blistered amritsari kulcha beside a glowing tandoor oven, warm steam rising"
          width={1920}
          height={1280}
          className="h-full w-full object-cover will-change-transform transform-gpu"
          initial={{ scale: 1.08 }}
          animate={reduce ? { scale: 1.14 } : { scale: 1.04 }}
          transition={{ duration: reduce ? 15 : 8, ease: "easeOut" }}
          fetchPriority="high"
        />
        {/* Gradient scrim: legible text at the bottom, breathe at the top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-tandoor)]/40 via-transparent to-[color:var(--color-tandoor)]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-tandoor)]/50 via-transparent to-transparent" />
      </div>

      {/* Steam */}
      {!reduce && <Steam />}

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-accent text-[11px] text-[color:var(--color-gold)] mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[color:var(--color-gold)]/60" />
          Fine North Indian Dining
        </motion.p>

        {/* Headline with unfurling-leaf clip-path reveal */}
        <h1
          className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.95] tracking-[-0.02em] text-[color:var(--color-malai)]"
          style={{
            animation: reduce ? undefined : "leaf-unfurl 1.6s cubic-bezier(0.22, 1, 0.36, 1) both",
            animationDelay: "0.1s",
          }}
        >
          Urban <span className="italic text-[color:var(--color-gold)]">Leaf</span> Café
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-display italic text-2xl md:text-3xl text-[color:var(--color-malai)]/85 mt-6 max-w-xl"
        >
          From Root to Ritual.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton variant="filled" href="#reserve">Reserve Your Table</MagneticButton>
          <MagneticButton variant="outline" href="/menu">View The Menu</MagneticButton>
        </motion.div>
      </div>

      {/* Leaf-shaped scroll cue */}
      <motion.a
        href="#roots"
        aria-label="Scroll to story"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[color:var(--color-marigold)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <LeafGlyph
          strokeVein
          className="h-8 w-8 animate-leaf-bob drop-shadow-[0_6px_16px_rgba(225,137,43,0.4)]"
        />
      </motion.a>
    </section>
  );
}
