import { cva, cx } from "@/styled-system/css";
import * as React from "react";

const defaults = { size: "md" } as const;

const rootCva = cva({
  base: { display: "inline-flex", alignItems: "center", gap: "3" },
  variants: { size: { sm: {}, md: {}, lg: {} } },
  defaultVariants: defaults,
});

const imageCva = cva({
  base: { borderRadius: "full", bg: "gray.4", color: "gray.12", display: "grid", placeItems: "center" },
  variants: {
    size: {
      sm: { w: "8", h: "8", fontSize: "sm" },
      md: { w: "10", h: "10", fontSize: "md" },
      lg: { w: "12", h: "12", fontSize: "lg" },
    },
  },
  defaultVariants: defaults,
});

const nameCva = cva({
  base: { fontWeight: "600" },
  variants: { size: { sm: { fontSize: "sm" }, md: { fontSize: "md" }, lg: { fontSize: "lg" } } },
  defaultVariants: defaults,
});

export type AvatarVariants = NonNullable<Parameters<typeof rootCva>[0]>;
export type AvatarProps = AvatarVariants & { name: string; src?: string; className?: string };

export function AvatarCva({ name, src, size, className }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span className={cx(rootCva({ size }), className)}>
      <span className={imageCva({ size })}>{src ? <img src={src} alt={name} className={cx(imageCva({ size }))} /> : initials}</span>
      <span className={nameCva({ size })}>{name}</span>
    </span>
  );
}


