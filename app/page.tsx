import { Nav } from "@/components/chrome/Nav";
import { Footer } from "@/components/chrome/Footer";
import { Hero } from "@/components/sections/Hero";
import { Promise as ProductPromise } from "@/components/sections/Promise";
import { Economics } from "@/components/sections/Economics";
import { Verdicts } from "@/components/sections/Verdicts";
import { Verification } from "@/components/sections/Verification";
import { Ai } from "@/components/sections/Ai";
import { Lifecycle } from "@/components/sections/Lifecycle";
import { Driver } from "@/components/sections/Driver";
import { Showcase } from "@/components/sections/Showcase";
import { Outcomes } from "@/components/sections/Outcomes";
import { Delegation } from "@/components/sections/Delegation";
import { Audience } from "@/components/sections/Audience";
import { Integrations } from "@/components/sections/Integrations";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <ProductPromise />
        <Economics />
        <Verdicts />
        <Verification />
        <Ai />
        <Lifecycle />
        <Driver />
        <Showcase />
        <Outcomes />
        <Delegation />
        <Audience />
        <Integrations />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
