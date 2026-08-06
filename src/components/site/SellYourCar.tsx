

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
    "h-11 w-full rounded-md border border-[#D4AF37]/40 bg-[#4A2E1C]/40 px-3 text-sm text-[#F5E9D3] placeholder:text-[#F5E9D3]/50 focus:border-[#D4AF37] focus:outline-hidden focus:ring-2 focus:ring-[#D4AF37]/40";

  return (
    <section id="sell" className="relative overflow-hidden bg-[#3B2416] py-20 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-25"
        style={{ background: "linear-gradient(135deg, #3B2416 0%, #5A3A22 50%, #D4AF37 150%)" }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4">
        <SectionHeading
          tone="light"
          eyebrow="Sell Your Car"
          title={<span className="text-[#F5E9D3]">Sell Your Car in Three Simple Steps</span>}
          lead="No haggling, no waiting weeks for a buyer. Bring your car in and drive out settled."
        />

        <div className="grid w-full gap-6 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 120}>
              <div
                className="group flex h-full flex-col gap-3 rounded-lg border border-[#D4AF37]/40 bg-[#4A2E1C] p-7 transform-gpu transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:border-[#D4AF37]/70 hover:shadow-lg hover:shadow-black/30"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-[#D4AF37] font-display text-lg font-bold text-[#3B2416]">
                    {index + 1}
                  </span>
                  <Icon className="size-6 text-[#D4AF37]" aria-hidden />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-[#F5E9D3]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-[#F5E9D3]/70">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {!showForm ? (
          <Reveal delay={200}>
            <BrandButton
              variant="gold"
              size="lg"
              asChild
              className="bg-[#D4AF37] text-[#3B2416] hover:bg-[#E5C158]"
            >
              <a href="/contact/">Book a Consultation</a>
            </BrandButton>
          </Reveal>
        ) : (
          <Reveal className="w-full max-w-2xl">
            <div className="rounded-lg border border-[#D4AF37]/50 bg-[#4A2E1C] p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-6 text-center">
                  <CheckCircle2 className="size-10 text-[#D4AF37]" aria-hidden />
                  <h3 className="text-xl font-bold uppercase text-[#F5E9D3]">
                    Valuation Request Received
                  </h3>
                  <p className="text-sm text-[#F5E9D3]/75">
                    Thank you — our team will call you on the number provided within one working day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
                  <h3 className="sm:col-span-2 font-display text-lg font-bold uppercase tracking-wide text-[#D4AF37]">
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
                        <span className="text-xs text-[#E5C158]">{errors[input.name]}</span>
                      ) : null}
                    </div>
                  ))}
                  <div className="flex flex-col gap-1 sm:col-span-2">
                    <select name="condition" defaultValue="" className={field}>
                      <option value="" disabled className="bg-[#3B2416] text-[#F5E9D3]">
                        Car Condition
                      </option>
                      <option value="Excellent">Excellent</option>
                      <option value="Good">Good</option>
                      <option value="Average">Average</option>
                      <option value="Needs Work">Needs Work</option>
                    </select>
                    {errors['condition'] ? (
                      <span className="text-xs text-[#E5C158]">{errors['condition']}</span>
                    ) : null}
                  </div>
                  <BrandButton
                    type="submit"
                    variant="gold"
                    size="md"
                    className="sm:col-span-2 bg-[#D4AF37] text-[#3B2416] hover:bg-[#E5C158]"
                  >
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