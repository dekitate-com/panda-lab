// components/card.sva.tsx
import { sva } from "@/styled-system/css";
import * as React from "react";

const card = sva({
  slots: ["root", "title", "icon", "body"] as const,
  base: {
    root:  { display: "flex", gap: "3", p: "4", borderWidth: "1px", borderRadius: "2xl", bg: "white" },
    title: { fontWeight: "700" },
    icon:  { w: "6", h: "6", flexShrink: 0 },
    body:  { color: "gray.11" },
  },
  variants: {
    size: {
      sm: { root: { p: "3" }, title: { fontSize: "sm" }, body: { fontSize: "xs" } },
      md: { root: { p: "4" }, title: { fontSize: "md" }, body: { fontSize: "sm" } },
      lg: { root: { p: "5" }, title: { fontSize: "lg" }, body: { fontSize: "md" } },
    },
    tone: {
      neutral: { root: { borderColor: "gray.6", bg: "gray.1" } },
      brand:   { root: { borderColor: "blue.7", bg: "blue.1" }, title: { color: "blue.11" } },
    },
  },
  defaultVariants: { size: "md", tone: "neutral" },
});

export type CardVariants = Parameters<typeof card>[0];
export type CardProps = CardVariants & {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export function CardSva({ title, icon, children, className, ...variants }: CardProps) {
  const c = card(variants);
  return (
    <div className={`${c.root} ${className ?? ""}`}>
      {icon && <div className={c.icon}>{icon}</div>}
      <div>
        <div className={c.title}>{title}</div>
        <div className={c.body}>{children}</div>
      </div>
    </div>
  );
}
