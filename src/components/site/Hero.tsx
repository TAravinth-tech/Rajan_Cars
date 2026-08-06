import { Link } from "./Link";
import heroImage from "@/assets/hero-showroom.png";
import { BrandButton, SinceSeal } from "./Brand";
import { Reveal } from "@/lib/reveal";

/** Full-width hero with showroom photo, red/black gradient overlay and heritage seal. */
export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink">
      <img
        src={heroImage}
        alt="Row of polished pre-owned cars outside the Rajan Cars showroom"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:py-28 lg:grid-cols-[1.4fr_auto] lg:py-36">
        <div className="max-w-2xl">
          <Reveal delay={100}>
  <h1
    className="
      mt-6
      max-w-[700px]
      text-4xl
      font-extrabold
      uppercase
      leading-[1.05]
      text-white
      drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]
      sm:text-5xl
      lg:text-6xl
    "
  >
    TRICHY'S MOST TRUSTED
    <br />
    <span
      className="font-black"
      style={{
        color: "#D4A437",
        textShadow: "0 4px 18px rgba(0,0,0,0.45)",
      }}
    >
      USED CAR DEALER
    </span>
    <br />
    SINCE 1952
  </h1>
</Reveal>

          <Reveal delay={200}>
  <p
    className="mt-5 max-w-xl text-lg font-medium leading-relaxed sm:text-xl"
    style={{
      color: "#5d4121",
      textShadow: "0 2px 8px rgba(255,255,255,0.35)",
    }}
  >
    Buy, Sell &amp; Exchange Quality Pre-Owned Cars with Confidence
  </p>
</Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-3">
              <BrandButton asChild variant="gold" size="lg">
                <Link to="/services" hash="cars">Browse Cars</Link>
              </BrandButton>
              <BrandButton asChild variant="ghostLight" size="lg">
                <Link to="/services" hash="sell">Sell Your Car</Link>
              </BrandButton>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p
  className="mt-8 font-display text-base font-extrabold uppercase tracking-[0.15em] text-[#D4A437]"
  style={{
  textShadow: `
    0 0 10px rgba(255,215,120,0.75),
    0 0 22px rgba(212,164,55,0.55),
    0 0 35px rgba(212,164,55,0.35),
    0 3px 8px rgba(0,0,0,0.25)
  `,
}}
>
  70+ Years of Trust · Transparent Deals · Easy Finance
</p>
          </Reveal>
        </div>

        <Reveal delay={250} className="justify-self-start lg:justify-self-end">
          <SinceSeal size={160} />
        </Reveal>
      </div>
    </section>
  );
}
