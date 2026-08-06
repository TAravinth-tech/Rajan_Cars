import { Services, WhyChooseUs } from "@/components/site/Services";
import { FeaturedCars } from "@/components/site/FeaturedCars";
import { SellYourCar } from "@/components/site/SellYourCar";
import { Finance } from "@/components/site/Finance";
import { CheckeredDivider } from "@/components/site/Brand";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Buy, Sell, Exchange & Finance — All Under One Roof"
        lead="From choosing the right pre-owned car to loan approval and RC transfer, our team handles every step of the process for you."
      />
      <Services />
      <FeaturedCars />
      <SellYourCar />
      <Finance />
      <CheckeredDivider />
      <WhyChooseUs />
    </SiteLayout>
  );
}

export default ServicesPage;
