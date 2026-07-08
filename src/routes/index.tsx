import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Roots } from "@/components/site/Roots";
import { ChefsTable } from "@/components/site/ChefsTable";
import { Marquee } from "@/components/site/Marquee";
import { MenuPreview } from "@/components/site/MenuPreview";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { Reservation } from "@/components/site/Reservation";
import { LeafClub } from "@/components/site/LeafClub";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <Roots />
        <ChefsTable />
        <Marquee />
        <MenuPreview />
        <Gallery />
        <Reviews />
        <Reservation />
        <LeafClub />
      </main>
      <Footer />
    </div>
  );
}
