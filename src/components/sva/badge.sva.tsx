import { sva } from "@/styled-system/css";
import * as React from "react";

const badge = sva({
  slots: ["root"],
  base: {
    root: { display: "inline-flex", alignItems: "center", gap: "2", fontWeight: "600", borderRadius: "full" },
  },
  variants: {
    size: {
      sm: { root: { fontSize: "xs", h: "6", px: "2.5" } },
      md: { root: { fontSize: "sm", h: "7", px: "3" } },
      lg: { root: { fontSize: "md", h: "8", px: "3.5" } },
    },
    tone: {
      neutral: { root: { bg: "gray.3", color: "gray.12" } },
      brand: { root: { bg: "blue.3", color: "blue.12" } },
      success: { root: { bg: "green.3", color: "green.12" } },
      warning: { root: { bg: "yellow.3", color: "yellow.12" } },
      error: { root: { bg: "red.3", color: "red.12" } },
    },
  },
  defaultVariants: { size: "md", tone: "neutral" },
});

export type BadgeVariants = Parameters<typeof badge>[0];
export type BadgeProps = BadgeVariants & { children?: React.ReactNode; className?: string };

export function BadgeSva({ children, className, ...variants }: BadgeProps) {
  const c = badge(variants);
  return <span className={`${c.root} ${className ?? ""}`}>{children}</span>;
}


