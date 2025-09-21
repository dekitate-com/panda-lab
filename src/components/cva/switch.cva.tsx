import { cva, cx } from "@/styled-system/css";
import * as React from "react";

const defaults = { size: "md", tone: "neutral" } as const;

const trackCva = cva({
  base: { position: "relative", display: "inline-block", borderRadius: "full" },
  variants: {
    size: { sm: { w: "10", h: "6" }, md: { w: "12", h: "7" }, lg: { w: "14", h: "8" } },
    tone: { neutral: { bg: "gray.5" }, brand: { bg: "blue.6" } },
    checked: { true: { bg: "blue.9" }, false: {} },
  },
  defaultVariants: { ...defaults, checked: false },
});

const thumbCva = cva({
  base: { position: "absolute", top: "1", left: "1", bg: "white", borderRadius: "full", boxShadow: "md" },
  variants: {
    size: { sm: { w: "4", h: "4" }, md: { w: "5", h: "5" }, lg: { w: "6", h: "6" } },
    checked: { true: { left: "auto", right: "1" }, false: {} },
  },
  defaultVariants: { size: "md", checked: false },
});

export type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: "sm" | "md" | "lg";
  tone?: "neutral" | "brand";
  className?: string;
};

export function SwitchCva({ size, tone = "neutral", className, checked, ...rest }: SwitchProps) {
  return (
    <label style={{ display: "inline-block" }}>
      <input type="checkbox" defaultChecked={false} style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} checked={checked} {...rest} />
      <span className={cx(trackCva({ size, tone, checked: Boolean(checked) } as any), className)}>
        <span className={thumbCva({ size, checked: Boolean(checked) } as any)} />
      </span>
    </label>
  );
}


