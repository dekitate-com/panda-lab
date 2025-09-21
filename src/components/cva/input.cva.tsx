import { cva, cx } from "@/styled-system/css";
import * as React from "react";

const defaults = { size: "md", tone: "neutral" } as const;

const inputCva = cva({
  base: { w: "full", borderWidth: "1px", borderRadius: "lg", bg: "white", color: "gray.12" },
  variants: {
    size: {
      sm: { h: "8", px: "3", fontSize: "sm" },
      md: { h: "9", px: "3.5", fontSize: "md" },
      lg: { h: "10", px: "4", fontSize: "lg" },
    },
    tone: {
      neutral: { borderColor: "gray.6" },
      brand: { borderColor: "blue.7" },
      error: { borderColor: "red.7" },
    },
  },
  defaultVariants: defaults,
});

export type InputVariants = NonNullable<Parameters<typeof inputCva>[0]>;
export type InputProps = InputVariants & React.InputHTMLAttributes<HTMLInputElement> & { className?: string };

export function InputCva({ size, tone, className, ...rest }: InputProps) {
  return <input className={cx(inputCva({ size, tone }), className)} {...rest} />;
}


