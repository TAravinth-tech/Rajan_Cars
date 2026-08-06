import { Link } from "./Link";
import { useMemo, useState } from "react";
import { Calculator, FileText, Percent, ShieldCheck } from "lucide-react";
import { Reveal } from "@/lib/reveal";
import { BrandButton, SectionHeading } from "./Brand";
import { formatPrice } from "@/data/site";

const points = [
  {
    icon: ShieldCheck,
    title: "Trusted Finance Partners",
    body: "We work with established banks and NBFCs that regularly fund used-car purchases in Trichy.",
  },
  {
    icon: FileText,
    title: "Paperwork Handled",
    body: "Our staff prepare and verify your documents so approvals move without back-and-forth.",
  },
  {
    icon: Percent,
    title: "Competitive Interest",
    body: "Rates and tenures compared across partners so your EMI fits your monthly budget.",
  },
];

/** EMI = P·r·(1+r)^n / ((1+r)^n − 1) */
function calculateEmi(principal: number, annualRate: number, months: number) {
  const r = annualRate / 12 / 100;
  if (r === 0) return principal / months;
  const factor = Math.pow(1 + r, months);
  return (principal * r * factor) / (factor - 1);
}

export function Finance() {
  const [amount, setAmount] = useState(500000);
  const [tenure, setTenure] = useState(48);
  const [rate, setRate] = useState(11);

  const { emi, total, interest } = useMemo(() => {
    const value = calculateEmi(amount, rate, tenure);
    return { emi: value, total: value * tenure, interest: value * tenure - amount };
  }, [amount, rate, tenure]);

  const field =
    "h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus:border-gold focus:outline-hidden focus:ring-2 focus:ring-gold/40";

  return (
    <section id="finance" className="bg-background py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4">
        <SectionHeading
          eyebrow="Finance & EMI"
          title="Easy Car Finance, Simply Explained"
          lead="Choose your car, share your documents, and we coordinate the loan with our partners. Most approvals come through in a few working days."
        />

        <div className="grid w-full items-start gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            {points.map(({ icon: Icon, title, body }, index) => (
              <Reveal key={title} delay={index * 100}>
                <div className="hover-lift flex gap-4 rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-bold uppercase tracking-wide">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* EMI calculator */}
          <Reveal delay={150}>
            <div className="rounded-lg border-2 border-gold bg-card p-6 shadow-[var(--shadow-gold)] sm:p-8">
              <h3 className="flex items-center gap-2 text-xl font-bold uppercase tracking-wide">
                <Calculator className="size-5 text-primary" aria-hidden /> EMI Calculator
              </h3>

              <div className="mt-6 grid gap-5">
                <label className="flex flex-col gap-2">
                  <span className="flex items-center justify-between text-sm font-medium">
                    Loan Amount <span className="text-primary">{formatPrice(amount)}</span>
                  </span>
                  <input
                    type="range"
                    min={100000}
                    max={2500000}
                    step={25000}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="accent-[var(--primary)]"
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium">Tenure (months)</span>
                    <select
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className={field}
                    >
                      {[12, 24, 36, 48, 60, 72, 84].map((m) => (
                        <option key={m} value={m}>
                          {m} months
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium">Interest Rate (% p.a.)</span>
                    <input
                      type="number"
                      min={5}
                      max={24}
                      step={0.25}
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value) || 0)}
                      className={field}
                    />
                  </label>
                </div>

                <div className="rounded-md bg-ink p-5 text-center">
                  <p className="font-display text-xs uppercase tracking-[0.24em] text-gold">
                    Estimated Monthly EMI
                  </p>
                  <p className="mt-1 font-display text-4xl font-bold text-ink-foreground">
                    {formatPrice(Math.round(emi))}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-ink-foreground/70">
                    <p>
                      Total Interest
                      <span className="mt-0.5 block font-semibold text-gold">
                        {formatPrice(Math.round(interest))}
                      </span>
                    </p>
                    <p>
                      Total Payable
                      <span className="mt-0.5 block font-semibold text-gold">
                        {formatPrice(Math.round(total))}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  Indicative figures only. Final EMI depends on the lender, your profile and the car
                  selected.
                </p>

                <BrandButton asChild variant="red" size="md">
                  <Link to="/contact/">Check Your Eligibility</Link>
                </BrandButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
