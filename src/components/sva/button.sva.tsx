import { sva } from "@/styled-system/css";
import * as React from "react";

const button = sva({
  slots: ["root"],
  base: {
    root: { display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "700", borderRadius: "lg", cursor: "pointer", borderWidth: "1px" },
  },
  variants: {
    size: {
      sm: { root: { fontSize: "sm", h: "8", px: "3" } },
      md: { root: { fontSize: "md", h: "9", px: "3.5" } },
      lg: { root: { fontSize: "lg", h: "10", px: "4" } },
    },
    tone: {
      neutral: { root: { bg: "gray.2", borderColor: "gray.6", color: "gray.12" } },
      brand: { root: { bg: "blue.9", borderColor: "blue.9", color: "white" } },
      ghost: { root: { bg: "transparent", borderColor: "gray.6", color: "gray.12" } },
    },
  },
  defaultVariants: { size: "md", tone: "neutral" },
});

export type ButtonVariants = Parameters<typeof button>[0];
export type ButtonProps = ButtonVariants & React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string };

export function ButtonSva({ className, ...variants }: ButtonProps) {
  const c = button(variants);
  return <button className={`${c.root} ${className ?? ""}`} {...variants} />;
}


