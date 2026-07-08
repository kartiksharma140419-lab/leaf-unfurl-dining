import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { FoilDivider } from "@/components/brand/LeafGlyph";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />

        {/* Phase-2 placeholder anchors so the nav links resolve during review. */}
        <FoilDivider />
        <section id="roots" className="mx-auto max-w-[1100px] px-6 py-24 text-center">
          <p className="font-accent text-[11px] text-[color:var(--color-gold)]/80">
            Phase 2 · Coming next
          </p>
          <h2 className="font-display text-4xl md:text-5xl mt-4 text-[color:var(--color-malai)]">
            Our Roots &amp; the Chef&rsquo;s Table
          </h2>
          <p className="font-body text-[color:var(--color-malai)]/70 mt-4 max-w-xl mx-auto">
            The story, the pull-quote, and the sealed-handi biryani reveal land here after your
            review of Phase 1.
          </p>
        </section>
      </main>
    </div>
  );
}
