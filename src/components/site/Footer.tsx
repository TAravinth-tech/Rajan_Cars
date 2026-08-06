import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { business, navLinks } from "@/data/site";
import { Link } from "./Link";
import { LogoEmblem } from "./Brand";

const services = [
  { label: "Used Car Sales", href: "/services" },
  { label: "Used Car Buying", href: "/services" },
  { label: "Car Finance Assistance", href: "/services" },
  { label: "Exchange & Upgrade", href: "/services" },
  { label: "Test Drives", href: "/contact" },
];

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground" style={{
    background: "#3B2416",
  }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <LogoEmblem size={68} className="rounded-md bg-ink-foreground p-2" />
          </div>
          <p className="text-sm leading-relaxed text-ink-foreground/70">
            Trichy's legacy used car dealership — buying, selling, exchanging and financing quality
            pre-owned cars for families since 1952.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-gold/50 text-gold transition-colors hover:bg-gold hover:text-gold-foreground"
              >
                <Icon className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Quick Links
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-ink-foreground/75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Services
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-ink-foreground/75">
            {services.map((service) => (
              <li key={service.label}>
                <Link to={service.href} className="transition-colors hover:text-gold">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold">
            Contact
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-foreground/75">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <span>{business.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="size-4 shrink-0 text-gold" aria-hidden />
              <a href={`tel:${business.phone}`} className="hover:text-gold">
                {business.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="size-4 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${business.email}`} className="hover:text-gold">
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/25">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-5 text-xs text-ink-foreground/60 sm:flex-row sm:justify-between">
          <p>© 2026 Rajan Cars. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-gold">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
