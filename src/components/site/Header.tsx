import { useEffect, useState } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Link } from "./Link";
import { cn } from "@/lib/utils";
import { business, navLinks } from "@/data/site";
import { BrandButton, LogoEmblem } from "./Brand";

/** Black top bar: location + click-to-call + email. */
function TopBar() {
  return (
    <div className="bg-ink text-gold">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-4 py-2 text-xs sm:flex-row sm:justify-between">
        <p className="flex items-center gap-1.5">
          <MapPin className="size-3.5" aria-hidden />
          <span className="tracking-wide">{business.city}</span>
        </p>
        <div className="flex items-center gap-4">
          <a href={`tel:${business.phone}`} className="flex items-center gap-1.5 hover:text-gold-soft">
            <Phone className="size-3.5" aria-hidden />
            {business.phone}
          </a>
          <a
            href={`mailto:${business.email}`}
            className="flex items-center gap-1.5 hover:text-gold-soft"
          >
            <Mail className="size-3.5" aria-hidden />
            <span className="hidden sm:inline">{business.email}</span>
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className={cn("overflow-hidden transition-all duration-300", scrolled ? "h-0" : "h-auto")}>
        <TopBar />
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

          <nav className="hidden items-center gap-6 xl:flex">
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
              <Link to="/contact">Book a Test Drive</Link>
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
              <Link to="/contact" onClick={() => setOpen(false)}>
                Book a Test Drive
              </Link>
            </BrandButton>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
