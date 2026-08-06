import { Link } from "./Link";
import { useMemo, useState } from "react";
import { Fuel, Gauge, Settings2 } from "lucide-react";
import { cars, formatPrice, type Car } from "@/data/site";
import { Reveal } from "@/lib/reveal";
import { BrandButton, SectionHeading } from "./Brand";

type Filters = { brand: string; budget: string; fuel: string; body: string };

const ALL = "All";

const budgets = [
  { label: ALL, test: () => true },
  { label: "Under ₹5 Lakh", test: (c: Car) => c.price < 500000 },
  { label: "₹5 – 10 Lakh", test: (c: Car) => c.price >= 500000 && c.price < 1000000 },
  { label: "Above ₹10 Lakh", test: (c: Car) => c.price >= 1000000 },
];

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-left">
      <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-md border border-input bg-background px-3 text-sm focus:border-gold focus:outline-hidden focus:ring-2 focus:ring-gold/40"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

/** Featured inventory grid with client-side filtering. */
export function FeaturedCars() {
  const [filters, setFilters] = useState<Filters>({
    brand: ALL,
    budget: ALL,
    fuel: ALL,
    body: ALL,
  });

  const brands = useMemo(() => [ALL, ...new Set(cars.map((c) => c.brand))], []);
  const fuels = useMemo(() => [ALL, ...new Set(cars.map((c) => c.fuel))], []);
  const bodies = useMemo(() => [ALL, ...new Set(cars.map((c) => c.body))], []);

  const visible = cars.filter((car) => {
    const budgetTest = budgets.find((b) => b.label === filters.budget)?.test ?? (() => true);
    return (
      (filters.brand === ALL || car.brand === filters.brand) &&
      (filters.fuel === ALL || car.fuel === filters.fuel) &&
      (filters.body === ALL || car.body === filters.body) &&
      budgetTest(car)
    );
  });

  return (
    <section id="cars" className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4">
        <SectionHeading
          eyebrow="Inventory"
          title="Featured Cars for Sale"
          lead="A snapshot of what's on the floor right now. Visit the showroom for the full, always-changing stock."
        />

        {/* Filter bar */}
        <Reveal className="w-full">
          <div className="grid gap-4 rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)] sm:grid-cols-2 lg:grid-cols-4">
            <Select
              label="Brand"
              value={filters.brand}
              options={brands}
              onChange={(brand) => setFilters((f) => ({ ...f, brand }))}
            />
            <Select
              label="Budget Range"
              value={filters.budget}
              options={budgets.map((b) => b.label)}
              onChange={(budget) => setFilters((f) => ({ ...f, budget }))}
            />
            <Select
              label="Fuel Type"
              value={filters.fuel}
              options={fuels}
              onChange={(fuel) => setFilters((f) => ({ ...f, fuel }))}
            />
            <Select
              label="Body Type"
              value={filters.body}
              options={bodies}
              onChange={(body) => setFilters((f) => ({ ...f, body }))}
            />
          </div>
        </Reveal>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((car, index) => (
            <Reveal key={car.id} delay={(index % 4) * 90}>
              <article className="hover-lift flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)] hover:border-gold">
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={car.image}
                    alt={`${car.name} available at Rajan Cars Trichy`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-widest text-gold">
                    {car.year}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-base font-bold uppercase leading-snug">{car.name}</h3>
                  <p className="font-display text-2xl font-bold text-primary">
                    {formatPrice(car.price)}
                  </p>
                  <ul className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Fuel className="size-3.5 text-gold" aria-hidden /> {car.fuel}
                    </li>
                    <li className="flex items-center gap-2">
                      <Gauge className="size-3.5 text-gold" aria-hidden />{" "}
                      {car.km.toLocaleString("en-IN")} km
                    </li>
                    <li className="flex items-center gap-2">
                      <Settings2 className="size-3.5 text-gold" aria-hidden /> {car.transmission}
                    </li>
                  </ul>
                  <div className="mt-auto flex flex-col gap-2 pt-2">
                    <BrandButton asChild variant="dark" size="sm">
                      <Link to="/contact">View Details</Link>
                    </BrandButton>
                    <BrandButton asChild variant="outline" size="sm">
                      <Link to="/contact">Enquire Now</Link>
                    </BrandButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No cars match those filters right now — call us on 9842458666 and we'll source one for
            you.
          </p>
        ) : null}
      </div>
    </section>
  );
}
