import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";
import { Services } from "@/components/site/Services";
import { FeaturedCars } from "@/components/site/FeaturedCars";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { CheckeredDivider } from "@/components/site/Brand";
import { SiteLayout } from "@/components/site/SiteLayout";

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <StatsBar />
      <Services />
      <CheckeredDivider />
      <FeaturedCars />
      <Testimonials />
      <Gallery />
    </SiteLayout>
  );
}

export default Index;
