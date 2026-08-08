import { useEffect, useState } from "react";
import { useInView } from "@/lib/reveal";

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 74, suffix: "", label: "Years in Business" },
  { value: 50000, suffix: "+", label: "Cars Sold" },
  { value: 0, suffix: "Easy EMI", label: "Finance Options" },
  { value: 0, suffix: "Trusted", label: "by Trichy Families" },
];

/** Counts up from 0 to `target` once visible. */
function Counter({ target, suffix, run }: { target: number; suffix: string; run: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!run || target === 0) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [run, target]);

  if (target === 0) {
    return <span className="font-display text-3xl font-bold text-gold sm:text-4xl">{suffix}</span>;
  }

  return (
    <span className="font-display text-4xl font-bold text-gold sm:text-5xl">
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/** Red trust bar with animated counters. */
export function StatsBar() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section
  aria-label="Rajan Cars in numbers"
  className="bg-[#F8F4EC] border-y border-[#E8DCC6]"
>
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 text-center lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-5">
            <Counter target={stat.value} suffix={stat.suffix} run={inView} />
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#5C4A2D] sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}