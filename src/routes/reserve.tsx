import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reservation } from "@/components/site/Reservation";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Urban Leaf Café" },
      { name: "description", content: "Book your table at Urban Leaf Café. The table's better with you at it." },
      { property: "og:title", content: "Reserve a Table — Urban Leaf Café" },
      { property: "og:description", content: "Book your table at Urban Leaf Café." },
    ],
  }),
  component: ReservePage,
});

function ReservePage() {
  return (
    <div>
      <Nav />
      <main className="pt-32">
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
