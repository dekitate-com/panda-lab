import { cva, cx } from "@/styled-system/css";
import * as React from "react";

const defaults = { size: "md", status: "info" } as const;

const rootCva = cva({
  base: { display: "flex", gap: "3", p: "4", borderWidth: "1px", borderRadius: "lg", alignItems: "flex-start" },
  variants: {
    size: {
      sm: { p: "3" },
      md: { p: "4" },
      lg: { p: "5" },
    },
    status: {
      info: { bg: "blue.1", borderColor: "blue.7" },
      success: { bg: "green.1", borderColor: "green.7" },
      warning: { bg: "yellow.1", borderColor: "yellow.7" },
      error: { bg: "red.1", borderColor: "red.7" },
    },
  },
  defaultVariants: defaults,
});

const iconCva = cva({
  base: { w: "5", h: "5", flexShrink: 0, translateY: "0.5" },
  variants: { size: { sm: {}, md: {}, lg: {} }, status: { info: {}, success: {}, warning: {}, error: {} } },
  defaultVariants: defaults,
});

const titleCva = cva({
  base: { fontWeight: "700" },
  variants: {
    size: { sm: { fontSize: "sm" }, md: { fontSize: "md" }, lg: { fontSize: "lg" } },
    status: { info: {}, success: {}, warning: {}, error: {} },
  },
  defaultVariants: defaults,
});

const descCva = cva({
  base: { color: "gray.11" },
  variants: {
    size: { sm: { fontSize: "xs" }, md: { fontSize: "sm" }, lg: { fontSize: "md" } },
    status: { info: {}, success: {}, warning: {}, error: {} },
  },
  defaultVariants: defaults,
});

export type AlertVariants = NonNullable<Parameters<typeof rootCva>[0]>;
export type AlertProps = AlertVariants & {
  title?: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
};

export function AlertCva({ title, description, icon, className, size, status }: AlertProps) {
  const root = rootCva({ size, status });
  const iconCls = iconCva({ size, status });
  const titleCls = titleCva({ size, status });
  const descCls = descCva({ size, status });
  return (
    <div className={cx(root, className)}>
      {icon && <div className={iconCls}>{icon}</div>}
      <div>
        {title && <div className={titleCls}>{title}</div>}
        {description && <div className={descCls}>{description}</div>}
      </div>
    </div>
  );
}


