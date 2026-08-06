import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { gallery } from "@/data/site";
import { Reveal } from "@/lib/reveal";
import { SectionHeading } from "./Brand";

/** Showroom gallery with a simple lightbox. */
export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="bg-background py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside Our Showroom"
          lead="A look at the cars and the space where seven decades of Trichy deals have been made."
        />

        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((src, index) => (
            <Reveal key={src} delay={(index % 4) * 70}>
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group relative block aspect-square w-full overflow-hidden rounded-md border border-border"
                aria-label={`Open showroom photo ${index + 1}`}
              >
                <img
                  src={src}
                  alt={`Rajan Cars showroom photo ${index + 1}`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/35"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Showroom photo"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-100 grid place-items-center bg-ink/90 p-4"
        >
          <button
            type="button"
            aria-label="Close photo"
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-gold text-gold"
          >
            <X className="size-5" />
          </button>
          <img
            src={gallery[active]}
            alt={`Rajan Cars showroom photo ${active + 1}`}
            className="max-h-[85vh] w-auto max-w-full rounded-lg border-2 border-gold object-contain"
          />
        </div>
      ) : null}
    </section>
  );
}
