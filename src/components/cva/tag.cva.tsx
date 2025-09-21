import { cva, cx } from "@/styled-system/css";
import * as React from "react";

const defaults = { size: "md", tone: "neutral" } as const;

const tagCva = cva({
  base: { display: "inline-flex", alignItems: "center", gap: "2", borderRadius: "xl", borderWidth: "1px" },
  variants: {
    size: {
      sm: { fontSize: "xs", h: "6", px: "2.5" },
      md: { fontSize: "sm", h: "7", px: "3" },
      lg: { fontSize: "md", h: "8", px: "3.5" },
    },
    tone: {
      neutral: { bg: "gray.1", borderColor: "gray.6", color: "gray.12" },
      brand: { bg: "blue.1", borderColor: "blue.7", color: "blue.12" },
      success: { bg: "green.1", borderColor: "green.7", color: "green.12" },
    },
  },
  defaultVariants: defaults,
});

export type TagVariants = NonNullable<Parameters<typeof tagCva>[0]>;
export type TagProps = TagVariants & { children?: React.ReactNode; className?: string };

export function TagCva({ children, size, tone, className }: TagProps) {
  return <span className={cx(tagCva({ size, tone }), className)}>{children}</span>;
}


