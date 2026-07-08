import type { SVGProps } from "react";

/**
 * The Unfurling Leaf — the site's signature glyph.
 * One hand-drawn betel/banana leaf silhouette, reused as a system:
 * hero mask, section-wipe clip-path, menu-card flip, foil dividers.
 * Keep the path stable — every reuse must render the same silhouette.
 */
export function LeafGlyph({
  className,
  strokeVein = false,
  ...rest
}: SVGProps<SVGSVGElement> & { strokeVein?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 160"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {/* betel-leaf silhouette, tapered tip, gently asymmetric */}
      <path d="M60 6 C 30 22, 8 58, 10 96 C 12 128, 34 152, 60 154 C 86 152, 108 128, 110 96 C 112 58, 90 22, 60 6 Z" />
      {strokeVein && (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.55"
        >
          <path d="M60 12 L60 150" />
          <path d="M60 40 C 46 46, 34 58, 24 76" />
          <path d="M60 40 C 74 46, 86 58, 96 76" />
          <path d="M60 70 C 44 78, 32 92, 22 110" />
          <path d="M60 70 C 76 78, 88 92, 98 110" />
          <path d="M60 100 C 48 108, 40 118, 34 132" />
          <path d="M60 100 C 72 108, 80 118, 86 132" />
        </g>
      )}
    </svg>
  );
}

/** Reusable foil-line + leaf divider. Drop between any two major sections. */
export function FoilDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`foil-divider py-8 px-6 ${className}`} aria-hidden="true">
      <LeafGlyph strokeVein className="h-5 w-5 rotate-[-8deg] text-[color:var(--color-gold)]" />
    </div>
  );
}
