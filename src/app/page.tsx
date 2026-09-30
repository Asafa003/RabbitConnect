import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Problems } from "@/components/sections/problems";
import { Solution } from "@/components/sections/solution";
import { Stats } from "@/components/sections/stats";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <Problems />
        <Solution />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
