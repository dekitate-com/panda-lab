import { cva, cx } from "@/styled-system/css";
import * as React from "react";

const defaults = { size: "md", tone: "neutral" } as const;

const buttonCva = cva({
  base: { display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: "700", borderRadius: "lg", cursor: "pointer", borderWidth: "1px" },
  variants: {
    size: {
      sm: { fontSize: "sm", h: "8", px: "3" },
      md: { fontSize: "md", h: "9", px: "3.5" },
      lg: { fontSize: "lg", h: "10", px: "4" },
    },
    tone: {
      neutral: { bg: "gray.2", borderColor: "gray.6", color: "gray.12" },
      brand: { bg: "blue.9", borderColor: "blue.9", color: "white" },
      ghost: { bg: "transparent", borderColor: "gray.6", color: "gray.12" },
    },
  },
  defaultVariants: defaults,
});

export type ButtonVariants = NonNullable<Parameters<typeof buttonCva>[0]>;
export type ButtonProps = ButtonVariants & React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string };

export function ButtonCva({ size, tone, className, ...rest }: ButtonProps) {
  return <button className={cx(buttonCva({ size, tone }), className)} {...rest} />;
}


