import { sva } from "@/styled-system/css";
import * as React from "react";

const sw = sva({
  slots: ["track", "thumb"],
  base: {
    track: { position: "relative", display: "inline-block", borderRadius: "full" },
    thumb: { position: "absolute", top: "1", left: "1", bg: "white", borderRadius: "full", boxShadow: "md" },
  },
  variants: {
    size: {
      sm: { track: { w: "10", h: "6" }, thumb: { w: "4", h: "4" } },
      md: { track: { w: "12", h: "7" }, thumb: { w: "5", h: "5" } },
      lg: { track: { w: "14", h: "8" }, thumb: { w: "6", h: "6" } },
    },
    tone: { neutral: { track: { bg: "gray.5" } }, brand: { track: { bg: "blue.6" } } },
    checked: { true: { track: { bg: "blue.9" }, thumb: { left: "auto", right: "1" } }, false: {} },
  },
  defaultVariants: { size: "md", tone: "neutral", checked: false },
});

export type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> & { size?: "sm" | "md" | "lg"; tone?: "neutral" | "brand"; className?: string };

export function SwitchSva({ size, tone = "neutral", className, checked, ...rest }: SwitchProps) {
  const c = sw({ size, tone, checked: Boolean(checked) });
  return (
    <label style={{ display: "inline-block" }}>
      <input type="checkbox" defaultChecked={false} style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} checked={checked} {...rest} />
      <span className={`${c.track} ${className ?? ""}`}>
        <span className={c.thumb} />
      </span>
    </label>
  );
}


