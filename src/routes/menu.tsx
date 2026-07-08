import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
});

function MenuPage() {
  return (
    <div>
      <Nav />
      <main className="pt-40 pb-24 min-h-screen mx-auto max-w-[1100px] px-6 text-center">
        <p className="font-accent text-[11px] text-[color:var(--color-gold)]/80">Phase 3 · Coming next</p>
        <h1 className="font-display text-5xl md:text-6xl mt-4 text-[color:var(--color-malai)]">The Menu</h1>
        <p className="font-body text-[color:var(--color-malai)]/70 mt-4 max-w-xl mx-auto">
          The full 25–30 dish menu with leaf-flip chef&rsquo;s notes lands here after Phase 2 review.
        </p>
      </main>
    </div>
  );
}
