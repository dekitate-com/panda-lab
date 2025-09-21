import { sva } from "@/styled-system/css";
import * as React from "react";

const avatar = sva({
  slots: ["root", "image", "name"],
  base: {
    root: { display: "inline-flex", alignItems: "center", gap: "3" },
    image: { borderRadius: "full", bg: "gray.4", color: "gray.12", display: "grid", placeItems: "center" },
    name: { fontWeight: "600" },
  },
  variants: {
    size: {
      sm: { image: { w: "8", h: "8", fontSize: "sm" }, name: { fontSize: "sm" } },
      md: { image: { w: "10", h: "10", fontSize: "md" }, name: { fontSize: "md" } },
      lg: { image: { w: "12", h: "12", fontSize: "lg" }, name: { fontSize: "lg" } },
    },
  },
  defaultVariants: { size: "md" },
});

export type AvatarVariants = Parameters<typeof avatar>[0];
export type AvatarProps = AvatarVariants & { name: string; src?: string; className?: string };

export function AvatarSva({ name, src, className, ...variants }: AvatarProps) {
  const c = avatar(variants);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span className={`${c.root} ${className ?? ""}`}>
      <span className={c.image}>{src ? <img src={src} alt={name} className={c.image} /> : initials}</span>
      <span className={c.name}>{name}</span>
    </span>
  );
}


