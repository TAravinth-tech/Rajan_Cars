import { BadgeCheck, FileCheck2, IndianRupee, Users } from "lucide-react";
import aboutImage from "@/assets/about-showroom.jpg";
import { Reveal } from "@/lib/reveal";
import { SectionHeading, SinceTag } from "./Brand";

const promises = [
  { icon: BadgeCheck, label: "Quality Checked Vehicles" },
  { icon: IndianRupee, label: "Transparent Pricing" },
  { icon: Users, label: "Experienced Staff" },
  { icon: FileCheck2, label: "Full Documentation Support" },
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <Reveal className="relative">
          <div aria-hidden className="absolute -left-3 -top-3 size-24 border-l-4 border-t-4 border-gold" />
          <img
            src={aboutImage}
            alt="Rajan Cars staff guiding a family through a pre-owned car in the Trichy showroom"
            width={1200}
            height={912}
            loading="lazy"
            className="relative w-full rounded-lg object-cover shadow-[var(--shadow-card)]"
          />
          <div
            aria-hidden
            className="absolute -bottom-3 -right-3 size-24 border-b-4 border-r-4 border-primary"
          />
        </Reveal>

        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title={
              <>
                Best Used Car Dealer in Trichy — <span className="text-primary">Rajan Cars</span>
              </>
            }
          />
          <Reveal delay={100} className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              For over seven decades, Rajan Cars has served families across Trichy and the
              surrounding districts as a trusted second-hand car dealership — offering a wide range
              of models to suit different budgets, families and driving needs.
            </p>
            <p>
              We are known for reliable vehicles, transparent dealing and strong after-sale support.
              Honest pricing and genuine quality assurance have built us a loyal customer base that
              keeps coming back, generation after generation.
            </p>
            <p>
              Visit the showroom to inspect cars in person, take a test drive, and get guided support
              from an experienced team through every step of the buying process.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Our Promise <SinceTag className="ml-2 align-middle" />
            </p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {promises.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-md border border-border bg-card p-3 shadow-[var(--shadow-card)]"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
