export function Marquee() {
  const items = [
    "Slow-Cooked",
    "Charcoal-Fired",
    "Hand-Rolled",
    "Shared With Love",
    "Steeped Slowly",
    "Torn, Never Cut",
  ];
  // Duplicate for seamless loop
  const loop = [...items, ...items, ...items, ...items];
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-[color:var(--color-gold)]/25 bg-[color:var(--color-tandoor)] py-5"
    >
      <div className="animate-marquee flex whitespace-nowrap will-change-transform">
        {loop.map((w, i) => (
          <span
            key={i}
            className="font-accent text-[13px] mx-8 flex items-center gap-8 text-[color:var(--color-malai)]/80"
          >
            {w}
            <span className="text-[color:var(--color-marigold)]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
