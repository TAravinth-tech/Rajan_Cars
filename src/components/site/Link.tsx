import { useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from "react";

type LinkProps = {
  to: string;
  hash?: string;
  children?: ReactNode;
  /** Extra props applied when the current page matches `to`. */
  activeProps?: { className?: string };
  /** `exact: true` matches only the identical path (used for the "/" link). */
  activeOptions?: { exact?: boolean };
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/**
 * MPA link. Each page is its own HTML document, so navigation is a plain
 * full-page anchor. Keeps the `to` / `hash` / `activeProps` API the page
 * components already used.
 */
export function Link({
  to,
  hash,
  children,
  activeProps,
  activeOptions,
  className,
  ...rest
}: LinkProps) {
  const [pathname, setPathname] = useState<string | null>(null);
  useEffect(() => setPathname(window.location.pathname), []);

  const normalize = (p: string) => (p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p);
  const target = normalize(to);
  const active =
    pathname !== null &&
    (activeOptions?.exact
      ? normalize(pathname) === target
      : normalize(pathname) === target ||
        (target !== "/" && normalize(pathname).startsWith(`${target}/`)));

  const href = `${to}${hash ? `#${hash}` : ""}`;
  const classes = [className, active ? activeProps?.className : undefined]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classes || undefined} {...rest}>
      {children}
    </a>
  );
}
