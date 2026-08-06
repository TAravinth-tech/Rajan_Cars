import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/Services";
import { StatsBar } from "@/components/site/StatsBar";
import { Testimonials } from "@/components/site/Testimonials";
import { CheckeredDivider } from "@/components/site/Brand";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Story"
        title="Seven Decades of Trust on Madurai Main Road"
        lead="Rajan Cars has been Trichy's dependable name in pre-owned cars since 1952 — built on honest dealing, quality vehicles and lifelong customer relationships."
      />
      <StatsBar />
      <About />
      <CheckeredDivider />
      <WhyChooseUs />
      <Testimonials />
    </SiteLayout>
  );
}

export default AboutPage;
