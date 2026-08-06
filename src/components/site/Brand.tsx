import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/lib/reveal";
import logoUrl from "@/assets/rajan-cars-logo.png";

/* ------------------------------------------------------------------ *
 * Brand primitives: logo, heritage badge, buttons, dividers.
 * ------------------------------------------------------------------ */

/** Official Rajan Cars wordmark logo (gold car silhouette + "Since 1952"). */
export function LogoEmblem({ className, size = 56 }: { className?: string; size?: number }) {
  return (
    <img
      src={logoUrl}
      alt="Rajan Cars logo — gold car silhouette wordmark with Since 1952"
      className={cn("select-none object-contain", className)}
      style={{ height: size, width: "auto" }}
    />
  );
}


/** Circular gold "Since 1952" seal, styled after the logo ring. */
export function SinceSeal({ className, size = 132 }: { className?: string; size?: number }) {
  return (
    <div
      className={cn(
        "relative grid shrink-0 place-items-center rounded-full text-center",
        className,
      )}
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 35% 30%, #4a2e1c, #2b1810 75%)",
        boxShadow:
          "0 0 0 1px rgba(212,175,55,0.35), 0 4px 14px rgba(0,0,0,0.45), inset 0 0 12px rgba(0,0,0,0.5)",
      }}
      aria-label="Serving Trichy since 1952"
    >
      {/* Outer ring */}
      <div
        className="absolute inset-[3px] rounded-full border-[1.5px]"
        style={{ borderColor: "rgba(212,175,55,0.55)" }}
      />

      {/* Decorative dotted ring */}
      <svg
        className="absolute inset-0"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="none"
          stroke="rgba(212,175,55,0.6)"
          strokeWidth="0.6"
          strokeDasharray="1.2 3.4"
        />
      </svg>

      {/* Inner medallion */}
      <div
        className="relative flex flex-col items-center justify-center rounded-full border"
        style={{
          width: size * 0.72,
          height: size * 0.72,
          borderColor: "rgba(212,175,55,0.45)",
          background:
            "linear-gradient(180deg, rgba(212,175,55,0.06), transparent 60%)",
        }}
      >
        <span
          className="font-display text-gold"
          style={{
            fontSize: size * 0.075,
            letterSpacing: "0.32em",
            opacity: 0.9,
          }}
        >
          SINCE
        </span>

        {/* small separator flourish */}
        <div className="my-0.5 flex items-center gap-1">
          <span className="h-px w-3 bg-gold/50" />
          <span className="h-1 w-1 rotate-45 bg-gold/70" />
          <span className="h-px w-3 bg-gold/50" />
        </div>

        <span
          className="font-display font-bold leading-none text-gold"
          style={{
            fontSize: size * 0.24,
            textShadow: "0 1px 2px rgba(0,0,0,0.4)",
          }}
        >
          1952
        </span>

        <span
          className="mt-1 font-display text-gold/70"
          style={{
            fontSize: size * 0.055,
            letterSpacing: "0.22em",
          }}
        >
          
        </span>
      </div>
    </div>
  );
}

/** Small inline heritage tag used next to the wordmark. */
export function SinceTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-gold px-2 py-[2px] font-display text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-gold-foreground",
        className,
      )}
    >
      Since 1952
    </span>
  );
}

/** Decorative checkered racing-flag divider strip. */
export function CheckeredDivider({ className }: { className?: string }) {
  return <div aria-hidden className={cn("checkered-strip w-full", className)} />;
}

export const brandButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-display font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        red: "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]",
        gold: "bg-gold text-gold-foreground hover:-translate-y-0.5 hover:shadow-[var(--shadow-gold)]",
        outline:
          "border-2 border-gold text-gold hover:-translate-y-0.5 hover:bg-gold hover:text-gold-foreground",
        ghostLight:
          "border-2 border-ink-foreground/70 text-ink-foreground hover:-translate-y-0.5 hover:bg-ink-foreground hover:text-ink",
        dark: "bg-ink text-ink-foreground hover:-translate-y-0.5 hover:bg-ink-soft hover:shadow-[var(--shadow-card)]",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
      },
    },
    defaultVariants: { variant: "red", size: "md" },
  },
);

export function BrandButton({
  className,
  variant,
  size,
  asChild,
  ...props
}: ComponentProps<"button"> & VariantProps<typeof brandButtonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(brandButtonVariants({ variant, size }), className)} {...props} />;
}

/** Section heading block: eyebrow + title + gold rule + optional lead. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      {eyebrow ? (
        <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "max-w-3xl text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <span className="gold-rule" />
      {lead ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed",
            tone === "light" ? "text-ink-foreground/75" : "text-muted-foreground",
          )}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
