import Image from "next/image";
import type { IconAsset } from "@/lib/site";

/**
 * Renders one of the exported Figma SVGs at its native size.
 * The icons are decorative; meaning is always carried by adjacent text.
 */
export function Icon({
  icon,
  className,
}: {
  icon: IconAsset;
  className?: string;
}) {
  return (
    <Image
      src={icon.src}
      alt=""
      aria-hidden="true"
      width={icon.width}
      height={icon.height}
      className={className}
    />
  );
}
