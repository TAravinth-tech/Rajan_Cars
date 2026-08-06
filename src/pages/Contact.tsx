import { Contact } from "@/components/site/Contact";
import { Gallery } from "@/components/site/Gallery";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get In Touch"
        title="Visit Our Trichy Showroom"
        lead="Drop in for a test drive, call us for today's stock, or send an enquiry and our team will get back to you the same day."
      />
      <Contact />
      <Gallery />
    </SiteLayout>
  );
}

export default ContactPage;
