import { cva, cx } from "@/styled-system/css";
import * as React from "react";

const defaults = { size: "md", tone: "neutral" } as const;

const boxCva = cva({
  base: { display: "inline-grid", placeItems: "center", borderWidth: "1px", borderRadius: "sm", bg: "white" },
  variants: {
    size: { sm: { w: "4", h: "4" }, md: { w: "5", h: "5" }, lg: { w: "6", h: "6" } },
    tone: { neutral: { borderColor: "gray.7" }, brand: { borderColor: "blue.7" } },
    checked: { true: { bg: "blue.9", borderColor: "blue.9", color: "white" }, false: {} },
  },
  defaultVariants: { ...defaults, checked: false },
});

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: "sm" | "md" | "lg";
  tone?: "neutral" | "brand";
  className?: string;
};

export function CheckboxCva({ size, tone = "neutral", className, checked, ...rest }: CheckboxProps) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <input type="checkbox" style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} checked={checked} {...rest} />
      <span className={cx(boxCva({ size, tone, checked: Boolean(checked) } as any), className)}>
        {checked ? "✓" : null}
      </span>
    </label>
  );
}


