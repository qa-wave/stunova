import Image from "next/image";

const LOGO_SRC = "/stunova-logo.jpg";

const widths = {
  xs: 80,
  sm: 120,
  md: 180,
  lg: 240,
} as const;

/**
 * Brand mark for Libuše Stuňová · Účetnictví.
 *
 * Uses the printed paper logo (cream bg, brown ink). On dark backgrounds
 * pass `tone="light"` and the logo is wrapped in a cream rounded card so
 * the JPG's paper texture sits naturally on dark.
 */
export function Logo({
  size = "sm",
  className = "",
  tone = "default",
}: {
  size?: keyof typeof widths;
  className?: string;
  tone?: "default" | "light";
}) {
  const w = widths[size];
  const h = Math.round(w * 0.78);

  if (tone === "light") {
    return (
      <span
        className={`inline-flex bg-[#f4ead4] rounded-xl p-2 ${className}`}
      >
        <Image
          src={LOGO_SRC}
          alt="Libuše Stuňová · Účetnictví"
          width={w}
          height={h}
          priority
          className="block w-auto h-auto"
          style={{ maxWidth: w }}
        />
      </span>
    );
  }

  return (
    <Image
      src={LOGO_SRC}
      alt="Libuše Stuňová · Účetnictví"
      width={w}
      height={h}
      priority
      className={`block w-auto h-auto ${className}`}
      style={{ maxWidth: w }}
    />
  );
}

/**
 * Hero placement of the logo — bigger, centered, with optional soft glow.
 */
export function LogoHero({
  width = 400,
  className = "",
}: {
  width?: number;
  className?: string;
}) {
  const h = Math.round(width * 0.78);
  return (
    <Image
      src={LOGO_SRC}
      alt="Libuše Stuňová · Účetnictví"
      width={width}
      height={h}
      priority
      className={`block w-auto h-auto ${className}`}
      style={{ maxWidth: width }}
    />
  );
}
