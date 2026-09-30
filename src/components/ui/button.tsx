import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "solid" | "outline" | "outline-filled";
type Size = "sm" | "lg";
type Typeface = "heading" | "body-bold";

type ButtonStyleOptions = {
  variant?: Variant;
  size?: Size;
  /** The design uses Montserrat on header/hero buttons and bold Open Sans on the CTA buttons. */
  typeface?: Typeface;
  className?: string;
};

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const sizes: Record<Size, string> = {
  sm: "h-11 rounded-lg px-6",
  lg: "h-14 rounded-xl px-10",
};

const variants: Record<Variant, string> = {
  solid: "bg-primary text-white hover:bg-forest",
  outline: "border-2 border-primary text-primary hover:bg-primary/5",
  "outline-filled":
    "border-2 border-primary bg-background text-primary hover:bg-surface",
};

// Only filled buttons carry a shadow; its depth scales with the button size.
const solidShadows: Record<Size, string> = {
  sm: "shadow-md",
  lg: "shadow-xl",
};

const typefaces: Record<Typeface, string> = {
  heading: "font-heading",
  "body-bold": "font-body font-bold",
};

export function buttonStyles({
  variant = "solid",
  size = "lg",
  typeface = "heading",
  className,
}: ButtonStyleOptions = {}) {
  return [
    base,
    sizes[size],
    variants[variant],
    variant === "solid" && solidShadows[size],
    typefaces[typeface],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function ButtonLink({
  variant,
  size,
  typeface,
  className,
  ...props
}: ButtonStyleOptions & ComponentProps<typeof Link>) {
  return (
    <Link
      className={buttonStyles({ variant, size, typeface, className })}
      {...props}
    />
  );
}
