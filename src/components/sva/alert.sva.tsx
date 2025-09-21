import { sva } from "@/styled-system/css";
import * as React from "react";

const alert = sva({
  slots: ["root", "icon", "title", "description"],
  base: {
    root: { display: "flex", gap: "3", p: "4", borderWidth: "1px", borderRadius: "lg", alignItems: "flex-start" },
    icon: { w: "5", h: "5", flexShrink: 0, translateY: "0.5" },
    title: { fontWeight: "700" },
    description: { color: "gray.11" },
  },
  variants: {
    size: {
      sm: { root: { p: "3" }, title: { fontSize: "sm" }, description: { fontSize: "xs" } },
      md: { root: { p: "4" }, title: { fontSize: "md" }, description: { fontSize: "sm" } },
      lg: { root: { p: "5" }, title: { fontSize: "lg" }, description: { fontSize: "md" } },
    },
    status: {
      info: { root: { bg: "blue.1", borderColor: "blue.7" } },
      success: { root: { bg: "green.1", borderColor: "green.7" } },
      warning: { root: { bg: "yellow.1", borderColor: "yellow.7" } },
      error: { root: { bg: "red.1", borderColor: "red.7" } },
    },
  },
  defaultVariants: { size: "md", status: "info" },
});

export type AlertVariants = Parameters<typeof alert>[0];
export type AlertProps = AlertVariants & { title?: string; description?: React.ReactNode; icon?: React.ReactNode; className?: string };

export function AlertSva({ title, description, icon, className, ...variants }: AlertProps) {
  const c = alert(variants);
  return (
    <div className={`${c.root} ${className ?? ""}`}>
      {icon && <div className={c.icon}>{icon}</div>}
      <div>
        {title && <div className={c.title}>{title}</div>}
        {description && <div className={c.description}>{description}</div>}
      </div>
    </div>
  );
}


