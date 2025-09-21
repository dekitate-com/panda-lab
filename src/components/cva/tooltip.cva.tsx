import { cva, cx } from "@/styled-system/css";
import * as React from "react";

const contentCva = cva({
  base: { position: "absolute", zIndex: 10, bg: "gray.12", color: "white", px: "3", py: "2", borderRadius: "md", fontSize: "sm" },
});

export type TooltipProps = { label: React.ReactNode; children: React.ReactNode; className?: string };

export function TooltipCva({ label, children, className }: TooltipProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <span style={{ position: "relative", display: "inline-block" }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {children}
      {open && <span className={cx(contentCva(), className)} style={{ top: "100%", left: 0, marginTop: 8 }}>{label}</span>}
    </span>
  );
}


