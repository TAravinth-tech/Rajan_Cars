import {
  ArrowRight,
  Banknote,
  CarFront,
  ClipboardCheck,
  Gauge,
  HandCoins,
  KeyRound,
  Landmark,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { SectionHeading } from "./Brand";

const services = [
  {
    icon: CarFront,
    title: "Used Car Sales",
    body: "A wide range of quality pre-owned cars from trusted brands, each carefully inspected for performance and reliability. Multiple models and price ranges to fit every budget and lifestyle.",
    href: "/contact/",
  },
  {
    icon: HandCoins,
    title: "Used Car Buying",
    body: "Sell your car quickly and easily. We give a fair evaluation based on real condition and current market value, with a simple, transparent process from start to finish.",
    href: "/contact/",
  },
  {
    icon: Landmark,
    title: "Car Finance Assistance",
    body: "Car loan and EMI support through trusted finance partners. Our staff assist with loan options, documentation and approvals so your purchase stays stress-free.",
    href: "/contact/",
  },
];

const reasons = [
  { icon: ShieldCheck, label: "Reliable Vehicles" },
  { icon: Wallet, label: "Fair & Transparent Pricing" },
  { icon: Banknote, label: "Easy EMI & Finance Options" },
  { icon: KeyRound, label: "Test Drive Before You Buy" },
  { icon: ClipboardCheck, label: "Complete Documentation Support" },
  { icon: Gauge, label: "74 Years of Trusted Service" },
];

export function Services() {
  return (
    <section id="services" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          lead="Everything you need to buy, sell or finance a pre-owned car — under one roof in Trichy."
        />

        <div className="grid w-full gap-6 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body, href }, index) => (
            <Reveal key={title} delay={index * 120}>
              <article className="hover-lift group flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-card)] hover:border-gold">
                <span className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="text-xl font-bold uppercase tracking-wide">{title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                <a
                  href={href}
                  className="inline-flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wider text-primary transition-colors group-hover:text-gold"
                >
                  Book a Visit <ArrowRight className="size-4" aria-hidden />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Choose Rajan Cars"
          lead="Three generations of Trichy families have trusted us with their car purchases. Here's why."
        />
        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, label }, index) => (
            <Reveal key={label} delay={index * 80}>
              <div className="hover-lift flex h-full items-center gap-4 rounded-lg border-l-4 border-gold bg-card p-5 shadow-[var(--shadow-card)]">
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-secondary text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold uppercase tracking-wide">{label}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
