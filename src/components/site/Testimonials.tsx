import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeading } from "./Brand";
import { Reveal } from "@/lib/reveal";

/** Auto-sliding testimonial carousel. */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Trichy Says About Us"
          lead="Real words from customers who bought, sold or financed a car with Rajan Cars."
        />

        <Reveal className="w-full">
          <div className="overflow-hidden rounded-lg border-2 border-gold bg-card shadow-[var(--shadow-card)]">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((item) => (
                <figure
                  key={item.name}
                  className="flex w-full shrink-0 flex-col items-center gap-5 p-8 text-center sm:p-12"
                >
                  <Quote className="size-8 text-gold" aria-hidden />
                  <blockquote className="max-w-2xl text-base leading-relaxed text-foreground sm:text-lg">
                    “{item.quote}”
                  </blockquote>
                  <div className="flex gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-gold text-gold" aria-hidden />
                    ))}
                  </div>
                  <figcaption>
                    <span className="block font-display text-lg font-bold uppercase tracking-wide text-primary">
                      {item.name}
                    </span>
                    <span className="text-sm text-muted-foreground">{item.car}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="grid size-10 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="grid size-10 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
