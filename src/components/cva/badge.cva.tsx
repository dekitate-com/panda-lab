import { cva, cx } from "@/styled-system/css";
import * as React from "react";

const defaults = { size: "md", tone: "neutral" } as const;

const badgeCva = cva({
  base: { display: "inline-flex", alignItems: "center", gap: "2", fontWeight: "600", borderRadius: "full" },
  variants: {
    size: {
      sm: { fontSize: "xs", h: "6", px: "2.5" },
      md: { fontSize: "sm", h: "7", px: "3" },
      lg: { fontSize: "md", h: "8", px: "3.5" },
    },
    tone: {
      neutral: { bg: "gray.3", color: "gray.12" },
      brand: { bg: "blue.3", color: "blue.12" },
      success: { bg: "green.3", color: "green.12" },
      warning: { bg: "yellow.3", color: "yellow.12" },
      error: { bg: "red.3", color: "red.12" },
    },
  },
  defaultVariants: defaults,
});

export type BadgeVariants = NonNullable<Parameters<typeof badgeCva>[0]>;
export type BadgeProps = BadgeVariants & { children?: React.ReactNode; className?: string };

export function BadgeCva({ children, className, size, tone }: BadgeProps) {
  return <span className={cx(badgeCva({ size, tone }), className)}>{children}</span>;
}


