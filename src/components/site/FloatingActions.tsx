import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { business } from "@/data/site";

/** Fixed stacked action buttons: WhatsApp, call, back to top. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${business.phoneIntl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Rajan Cars on WhatsApp"
        className="grid size-12 place-items-center rounded-full bg-gold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform duration-300 hover:-translate-y-1"
      >
        <MessageCircle className="size-5" aria-hidden />
      </a>
      <a
        href={`tel:${business.phone}`}
        aria-label="Call Rajan Cars now"
        className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-1"
      >
        <Phone className="size-5" aria-hidden />
      </a>
      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid size-12 place-items-center rounded-full bg-ink text-gold shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
        >
          <ArrowUp className="size-5" aria-hidden />
        </button>
      ) : null}
    </div>
  );
}
