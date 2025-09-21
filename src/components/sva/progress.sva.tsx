import { sva } from "@/styled-system/css";
import * as React from "react";

const progress = sva({
  slots: ["track", "bar"],
  base: { track: { w: "full", bg: "gray.4", borderRadius: "full", overflow: "hidden" }, bar: { h: "full" } },
  variants: {
    size: { sm: { track: { h: "2" } }, md: { track: { h: "3" } }, lg: { track: { h: "4" } } },
    tone: { brand: { bar: { bg: "blue.9" } }, neutral: { bar: { bg: "gray.9" } } },
  },
  defaultVariants: { size: "md", tone: "brand" },
});

export type ProgressProps = { value: number; max?: number; size?: "sm" | "md" | "lg"; tone?: "brand" | "neutral"; className?: string };

export function ProgressSva({ value, max = 100, size = "md", tone = "brand", className }: ProgressProps) {
  const c = progress({ size, tone });
  const width = `${Math.min(100, Math.max(0, (value / max) * 100))}%`;
  return (
    <div className={`${c.track} ${className ?? ""}`}>
      <div className={c.bar} style={{ width }} />
    </div>
  );
}


