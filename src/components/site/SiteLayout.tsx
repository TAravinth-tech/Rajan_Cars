import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { CheckeredDivider } from "./Brand";

/** Shared chrome for every page: header, main content, footer, floating actions. */
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <CheckeredDivider />
      <Footer />
      <FloatingActions />
    </div>
  );
}

/** Compact page banner used by inner pages (about / services / contact). */
export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-16 sm:py-20">
      <div aria-hidden className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative mx-auto max-w-7xl px-4">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold uppercase leading-tight text-ink-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <span className="gold-rule mt-5 block" />
        {lead ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/75">{lead}</p>
        ) : null}
      </div>
    </section>
  );
}
