import { cva, cx } from "@/styled-system/css";
import * as React from "react";

const defaults = { size: "md", tone: "brand" } as const;

const trackCva = cva({
  base: { w: "full", bg: "gray.4", borderRadius: "full", overflow: "hidden" },
  variants: {
    size: { sm: { h: "2" }, md: { h: "3" }, lg: { h: "4" } },
    tone: { brand: {}, neutral: {} },
  },
  defaultVariants: defaults,
});

const barCva = cva({
  base: { h: "full" },
  variants: { tone: { brand: { bg: "blue.9" }, neutral: { bg: "gray.9" } } },
  defaultVariants: defaults,
});

export type ProgressProps = {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  tone?: "brand" | "neutral";
  className?: string;
};

export function ProgressCva({ value, max = 100, size = "md", tone = "brand", className }: ProgressProps) {
  const width = `${Math.min(100, Math.max(0, (value / max) * 100))}%`;
  return (
    <div className={cx(trackCva({ size, tone }), className)}>
      <div className={barCva({ tone })} style={{ width }} />
    </div>
  );
}


