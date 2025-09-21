import { sva } from "@/styled-system/css";
import * as React from "react";

const input = sva({
  slots: ["root"],
  base: { root: { w: "full", borderWidth: "1px", borderRadius: "lg", bg: "white", color: "gray.12" } },
  variants: {
    size: {
      sm: { root: { h: "8", px: "3", fontSize: "sm" } },
      md: { root: { h: "9", px: "3.5", fontSize: "md" } },
      lg: { root: { h: "10", px: "4", fontSize: "lg" } },
    },
    tone: {
      neutral: { root: { borderColor: "gray.6" } },
      brand: { root: { borderColor: "blue.7" } },
      error: { root: { borderColor: "red.7" } },
    },
  },
  defaultVariants: { size: "md", tone: "neutral" },
});

export type InputVariants = Parameters<typeof input>[0];
export type InputProps = InputVariants & React.InputHTMLAttributes<HTMLInputElement> & { className?: string };

export function InputSva({ className, ...variants }: InputProps) {
  const c = input(variants);
  return <input className={`${c.root} ${className ?? ""}`} {...variants} />;
}


