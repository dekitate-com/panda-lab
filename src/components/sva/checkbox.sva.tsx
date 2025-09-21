import { sva } from "@/styled-system/css";
import * as React from "react";

const checkbox = sva({
  slots: ["box"],
  base: {
    box: { display: "inline-grid", placeItems: "center", borderWidth: "1px", borderRadius: "sm", bg: "white" },
  },
  variants: {
    size: { sm: { box: { w: "4", h: "4" } }, md: { box: { w: "5", h: "5" } }, lg: { box: { w: "6", h: "6" } } },
    tone: { neutral: { box: { borderColor: "gray.7" } }, brand: { box: { borderColor: "blue.7" } } },
    checked: { true: { box: { bg: "blue.9", borderColor: "blue.9", color: "white" } }, false: {} },
  },
  defaultVariants: { size: "md", tone: "neutral", checked: false },
});

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & { size?: "sm" | "md" | "lg"; tone?: "neutral" | "brand"; className?: string };

export function CheckboxSva({ size, tone = "neutral", className, checked, ...rest }: CheckboxProps) {
  const c = checkbox({ size, tone, checked: Boolean(checked) });
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <input type="checkbox"  defaultChecked={false} style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} checked={checked} {...rest} />
      <span className={`${c.box} ${className ?? ""}`}>{checked ? "✓" : null}</span>
    </label>
  );
}


