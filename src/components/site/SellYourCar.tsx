import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, ClipboardList, IndianRupee, KeySquare } from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { BrandButton, SectionHeading } from "./Brand";

const steps = [
  { icon: ClipboardList, title: "Share Car Details", body: "Tell us the model, year and condition." },
  { icon: IndianRupee, title: "Get Fair Valuation", body: "We quote against real market value." },
  { icon: KeySquare, title: "Get Paid & Hand Over", body: "Instant payment, paperwork handled." },
];

const valuationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid phone number"),
  model: z.string().trim().min(2, "Enter your car model").max(80),
  year: z
    .string()
    .trim()
    .regex(/^(19|20)\d{2}$/, "Enter a valid year"),
  condition: z.string().trim().min(1, "Select a condition"),
});

/** Sell Your Car — 3-step process plus a validated valuation request form. */
export function SellYourCar() {
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    const result = valuationSchema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const field =
    "h-11 w-full rounded-md border border-gold/40 bg-ink-foreground/5 px-3 text-sm text-ink-foreground placeholder:text-ink-foreground/50 focus:border-gold focus:outline-hidden focus:ring-2 focus:ring-gold/40";

  return (
    <section id="sell" className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{ background: "var(--gradient-red)" }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4">
        <SectionHeading
          tone="light"
          eyebrow="Sell Your Car"
          title={<span className="text-ink-foreground">Sell Your Car in Three Simple Steps</span>}
          lead="No haggling, no waiting weeks for a buyer. Bring your car in and drive out settled."
        />

        <div className="grid w-full gap-6 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 120}>
              <div className="hover-lift flex h-full flex-col gap-3 rounded-lg border border-gold/40 bg-ink-soft p-7">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-gold font-display text-lg font-bold text-gold-foreground">
                    {index + 1}
                  </span>
                  <Icon className="size-6 text-gold" aria-hidden />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-ink-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-foreground/70">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {!showForm ? (
          <Reveal delay={200}>
            <BrandButton variant="gold" size="lg" onClick={() => setShowForm(true)}>
              Get a Free Valuation
            </BrandButton>
          </Reveal>
        ) : (
          <Reveal className="w-full max-w-2xl">
            <div className="rounded-lg border border-gold/50 bg-ink-soft p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-6 text-center">
                  <CheckCircle2 className="size-10 text-gold" aria-hidden />
                  <h3 className="text-xl font-bold uppercase text-ink-foreground">
                    Valuation Request Received
                  </h3>
                  <p className="text-sm text-ink-foreground/75">
                    Thank you — our team will call you on the number provided within one working day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
                  <h3 className="sm:col-span-2 font-display text-lg font-bold uppercase tracking-wide text-gold">
                    Free Car Valuation
                  </h3>
                  {[
                    { name: "name", placeholder: "Your Name", type: "text" },
                    { name: "phone", placeholder: "Phone Number", type: "tel" },
                    { name: "model", placeholder: "Car Model", type: "text" },
                    { name: "year", placeholder: "Year of Manufacture", type: "text" },
                  ].map((input) => (
                    <div key={input.name} className="flex flex-col gap-1">
                      <input
                        name={input.name}
                        type={input.type}
                        placeholder={input.placeholder}
                        maxLength={80}
                        className={field}
                      />
                      {errors[input.name] ? (
                        <span className="text-xs text-gold-soft">{errors[input.name]}</span>
                      ) : null}
                    </div>
                  ))}
                  <div className="flex flex-col gap-1 sm:col-span-2">
                    <select name="condition" defaultValue="" className={field}>
                      <option value="" disabled>
                        Car Condition
                      </option>
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Average">Average</option>
                      <option value="Needs Work">Needs Work</option>
                    </select>
                    {errors['condition'] ? (
                      <span className="text-xs text-gold-soft">{errors['condition']}</span>
                    ) : null}
                  </div>
                  <BrandButton type="submit" variant="gold" size="md" className="sm:col-span-2">
                    Request My Valuation
                  </BrandButton>
                </form>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
