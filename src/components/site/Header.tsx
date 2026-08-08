import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Link } from "./Link";
import { cn } from "@/lib/utils";
import { business, navLinks } from "@/data/site";
import { BrandButton, LogoEmblem } from "./Brand";

/** Black top bar: location + click-to-call + email. */
function TopBar() {
  return (
    <div className="bg-[#3B2416] text-gold/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs">
        <p className="flex min-w-0 items-center gap-1.5 truncate">
          <MapPin className="size-3.5 shrink-0 text-gold" aria-hidden />
          <span className="truncate tracking-wide">{business.city}</span>
        </p>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={`tel:${business.phone}`}
            className="flex items-center gap-1.5 whitespace-nowrap transition-colors duration-200 hover:text-gold-soft"
          >
            <Phone className="size-3.5 shrink-0 text-gold" aria-hidden />
            <span>{business.phone}</span>
          </a>

          <span className="hidden h-3.5 w-px bg-gold/25 sm:block" aria-hidden />

          <a
            href={`mailto:${business.email}`}
            className="hidden items-center gap-1.5 whitespace-nowrap transition-colors duration-200 hover:text-gold-soft sm:flex"
          >
            <Mail className="size-3.5 shrink-0 text-gold" aria-hidden />
            <span>{business.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}


/** Sticky white navbar that shrinks on scroll. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const scrolledRef = useRef(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    // Hysteresis: different thresholds for entering vs. leaving the
    // "scrolled" state so the header doesn't flicker back and forth
    // when the scroll position hovers near a single cutoff.
    const DOWN_THRESHOLD = 60;
    const UP_THRESHOLD = 20;

    const evaluate = () => {
      tickingRef.current = false;
      const y = window.scrollY;

      if (!scrolledRef.current && y > DOWN_THRESHOLD) {
        scrolledRef.current = true;
        setScrolled(true);
      } else if (scrolledRef.current && y < UP_THRESHOLD) {
        scrolledRef.current = false;
        setScrolled(false);
      }
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(evaluate);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/*
        grid-template-rows animates smoothly between 0fr and 1fr, unlike
        height: auto <-> 0, which snaps instantly and causes the "shake"
        because everything below it jumps in one frame instead of easing.
      */}
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: scrolled ? "0fr" : "1fr" }}
      >
        <div className="min-h-0">
          
        </div>
      </div>

      <div
        className={cn(
          "border-b-2 border-gold bg-background transition-all duration-300",
          scrolled ? "shadow-[var(--shadow-card)]" : "",
        )}
      >
        <div
          className={cn(
            "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 transition-all duration-300 lg:flex lg:justify-between",
            scrolled ? "py-2" : "py-3",
          )}
        >
          <Link to="/" className="flex min-w-0 items-center">
            <LogoEmblem size={scrolled ? 44 : 60} className="transition-all duration-300" />
          </Link>

          <nav className="hidden items-center gap-10 xl:gap-12 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                activeProps={{ className: "text-primary after:w-full" }}
                activeOptions={{ exact: link.href === "/" }}
                className="relative font-display text-sm font-medium uppercase tracking-wide text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <BrandButton asChild variant="red" size="sm" className="hidden sm:inline-flex">
              <Link to="/contact/">Book a Test Drive</Link>
            </BrandButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-10 shrink-0 place-items-center rounded-md border border-border text-foreground xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open ? (
          <nav className="border-t border-border bg-background px-4 pb-4 xl:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border py-3 font-display text-sm font-medium uppercase tracking-wide hover:text-primary"
                    activeProps={{ className: "text-primary" }}
                    activeOptions={{ exact: link.href === "/" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <BrandButton asChild variant="red" size="md" className="mt-4 w-full">
              <Link to="/contact/" onClick={() => setOpen(false)}>
                Book a Test Drive
              </Link>
            </BrandButton>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
