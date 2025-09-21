import { sva } from "@/styled-system/css";
import * as React from "react";

const tag = sva({
  slots: ["root"],
  base: { root: { display: "inline-flex", alignItems: "center", gap: "2", borderRadius: "xl", borderWidth: "1px" } },
  variants: {
    size: {
      sm: { root: { fontSize: "xs", h: "6", px: "2.5" } },
      md: { root: { fontSize: "sm", h: "7", px: "3" } },
      lg: { root: { fontSize: "md", h: "8", px: "3.5" } },
    },
    tone: {
      neutral: { root: { bg: "gray.1", borderColor: "gray.6", color: "gray.12" } },
      brand: { root: { bg: "blue.1", borderColor: "blue.7", color: "blue.12" } },
      success: { root: { bg: "green.1", borderColor: "green.7", color: "green.12" } },
    },
  },
  defaultVariants: { size: "md", tone: "neutral" },
});

export type TagVariants = Parameters<typeof tag>[0];
export type TagProps = TagVariants & { children?: React.ReactNode; className?: string };

export function TagSva({ children, className, ...variants }: TagProps) {
  const c = tag(variants);
  return <span className={`${c.root} ${className ?? ""}`}>{children}</span>;
}


