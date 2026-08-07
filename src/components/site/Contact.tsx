import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/data/site";
import { Reveal } from "@/lib/reveal";
import { BrandButton, SectionHeading } from "./Brand";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(160),
  interest: z.string().trim().min(1, "Please choose an option"),
  message: z.string().trim().min(5, "Tell us a little more").max(1000),
});

// WhatsApp number the enquiry should be sent to (country code + number, digits only)
const WHATSAPP_NUMBER = "919842458666";

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});

    const message = [
      "*New Enquiry — Rajan Cars*",
      "",
      `*Name:* ${data.name}`,
      `*Phone:* ${data.phone}`,
      `*Email:* ${data.email}`,
      `*Interested In:* ${data.interest}`,
      "",
      "*Message:*",
      data.message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSent(true);
  };

  const field =
    "h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus:border-gold focus:outline-hidden focus:ring-2 focus:ring-gold/40";

  return (
    <section id="contact" className="bg-[#F8F4EC] py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4">
        <SectionHeading
          tone="dark"
          eyebrow="Contact"
          title={<span className="text-ink">Visit Our Showroom</span>}
          lead="Walk in for a test drive, or send us a message and we'll get back to you the same day."
        />

        <div className="grid w-full items-start gap-8 lg:grid-cols-2">
          {/* Details + map */}
          <Reveal className="flex flex-col gap-6">
            <div className="rounded-lg border-t-4 border-gold bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
              <ul className="flex flex-col gap-5">
                <li className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <MapPin className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
                      Address
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {business.address}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
                      Phone
                    </h3>
                    <a href={`tel:${business.phone}`} className="mt-1 block text-sm hover:text-primary">
                      {business.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Mail className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
                      Email
                    </h3>
                    <a
                      href={`mailto:${business.email}`}
                      className="mt-1 block text-sm hover:text-primary"
                    >
                      {business.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Clock className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
                      Showroom Hours
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Monday – Sunday, 9:00 AM – 9:00 PM 
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-lg border-2 border-gold">
              <iframe
                title="Rajan Cars showroom location on Google Maps"
                src={business.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
              />
            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={120}>
            <div className="rounded-lg border-t-4 border-gold bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <CheckCircle2 className="size-12 text-primary" aria-hidden />
                  <h3 className="text-xl font-bold uppercase">Your Enquiry Has Been Submitted</h3>
                  <p className="text-sm text-muted-foreground">
                    Thank you for reaching out to Rajan Cars.We will get back to you as soon as possible.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-2 text-xs font-semibold uppercase tracking-wide text-primary underline underline-offset-4"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="grid gap-4">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                    Send an Enquiry
                  </h3>

                  {[
                    { name: "name", placeholder: "Your Name", type: "text" },
                    { name: "phone", placeholder: "Phone Number", type: "tel" },
                    { name: "email", placeholder: "Email Address", type: "email" },
                  ].map((input) => (
                    <div key={input.name} className="flex flex-col gap-1">
                      <input
                        name={input.name}
                        type={input.type}
                        placeholder={input.placeholder}
                        maxLength={160}
                        className={field}
                      />
                      {errors[input.name] ? (
                        <span className="text-xs text-destructive">{errors[input.name]}</span>
                      ) : null}
                    </div>
                  ))}

                  <div className="flex flex-col gap-1">
                    <select name="interest" defaultValue="" className={field}>
                      <option value="" disabled>
                        Interested In…
                      </option>
                      <option value="Buy a Car">Buy a Car</option>
                      <option value="Sell a Car">Sell a Car</option>
                      <option value="Finance Enquiry">Finance Enquiry</option>
                    </select>
                    {errors["interest"] ? (
                      <span className="text-xs text-destructive">{errors["interest"]}</span>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-1">
                    <textarea
                      name="message"
                      rows={5}
                      maxLength={1000}
                      placeholder="Tell us which car or service you're interested in"
                      className="w-full rounded-md border border-input bg-background p-3 text-sm focus:border-gold focus:outline-hidden focus:ring-2 focus:ring-gold/40"
                    />
                    {errors["message"] ? (
                      <span className="text-xs text-destructive">{errors["message"]}</span>
                    ) : null}
                  </div>

                  <BrandButton type="submit" variant="gold" size="md">
                    Submit Enquiry
                  </BrandButton>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}