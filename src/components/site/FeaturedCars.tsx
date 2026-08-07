import { Fuel, Gauge, Settings2, MessageCircle } from "lucide-react";
import { cars, type Car } from "@/data/site";
import { Reveal } from "@/lib/reveal";
import { SectionHeading } from "./Brand";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919842458666"; // country code + number, no + or spaces

function buildWhatsAppLink(car: Car) {
  const message =
    `Hi Rajan Cars, I'm interested in the *${car.name}*` +
    `Please share more details. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

/** Car gallery with per-car WhatsApp enquiry. */
export function FeaturedCars() {
  return (
    <section id="cars" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4">
        <SectionHeading
          eyebrow="Inventory"
          title="Our Cars"
          lead="Explore our available cars and contact us for instant details."
        />

        {/* Gallery grid */}
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.map((car, index) => (
            <Reveal key={car.id} delay={(index % 4) * 90}>
              <article className="hover-lift flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)] hover:border-gold">
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.name} available at Rajan Cars Trichy`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <center><h3 className="text-base font-bold uppercase leading-snug">{car.name}</h3></center>

                  {/* Car number */}
                  

                  

                  <a
  href={buildWhatsAppLink(car)}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto flex items-center justify-center gap-2 rounded-md
             bg-[#D4A437] px-4 py-3
             text-sm font-bold uppercase tracking-wide
             text-[#1B1B1B]
             transition-all duration-300
             hover:bg-[#C7961D]
             hover:shadow-lg hover:-translate-y-0.5"
>
  <FaWhatsapp className="h-5 w-5 text-[#25D366]" />
  Send an Enquiry
</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}