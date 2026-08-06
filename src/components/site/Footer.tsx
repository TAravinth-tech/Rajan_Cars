

import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { business, navLinks } from "@/data/site";
import { Link } from "./Link";
import { LogoEmblem } from "./Brand";

const services = [
  { label: "Used Car Sales", href: "/services/" },
  { label: "Used Car Buying", href: "/services/" },
  { label: "Car Finance Assistance", href: "/services/" },
  { label: "Exchange & Upgrade", href: "/services/" },
  { label: "Test Drives", href: "/contact/" },
];

/** Simple inline WhatsApp glyph (lucide-react has no brand icons). */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2C6.486 2 2.004 6.482 2.004 12c0 1.85.499 3.66 1.446 5.245L2 22l4.887-1.416A9.96 9.96 0 0 0 12.004 22C17.522 22 22.004 17.518 22.004 12S17.522 2 12.004 2Zm0 18.09c-1.663 0-3.29-.446-4.712-1.29l-.338-.2-2.898.84.85-2.826-.222-.35a8.09 8.09 0 0 1-1.27-4.264c0-4.475 3.64-8.11 8.115-8.11 4.475 0 8.115 3.635 8.115 8.11 0 4.474-3.64 8.09-8.115 8.09Z" />
    </svg>
  );
}

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/p/Rajan-Cars-Trichy-100076666506316/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/rajancarstrichysince1952/" },
  { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/919842458666" },
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
                target="_blank"
                rel="noopener noreferrer"
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
            <li className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <span>
                <span className="block text-ink-foreground/90">Mon – Sun</span>
                <span className="block">9:00 AM – 9:00 PM</span>
              </span>
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