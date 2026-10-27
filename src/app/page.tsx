import { Benefits } from "@/components/sections/benefits";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Industry } from "@/components/sections/industry";
import { Problems } from "@/components/sections/problems";
import { Solution } from "@/components/sections/solution";
import { Waitlist } from "@/components/sections/waitlist";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Benefits />
        <Problems />
        <Solution />
        <Industry />
        <Waitlist />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
