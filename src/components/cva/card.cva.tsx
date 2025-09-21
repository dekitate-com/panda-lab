// components/card.cva.tsx
import { cva, cx } from "@/styled-system/css";
import * as React from "react";

// ---- 仕様を1か所で定義（variants/defaults）-----------------
const variants = {
  size: {
    sm: {
      root:  { p: "3" },
      title: { fontSize: "sm" },
      body:  { fontSize: "xs" },
    },
    md: {
      root:  { p: "4" },
      title: { fontSize: "md" },
      body:  { fontSize: "sm" },
    },
    lg: {
      root:  { p: "5" },
      title: { fontSize: "lg" },
      body:  { fontSize: "md" },
    },
  },
  tone: {
    neutral: {
      root: { borderColor: "gray.6", bg: "gray.1" },
    },
    brand: {
      root: { borderColor: "blue.7", bg: "blue.1" },
      title: { color: "blue.11" },
    },
  },
} as const;

const defaults = { size: "md", tone: "neutral" } as const;

// ---- スロットごとに cva を用意（base は SVA と完全一致）----
const rootCva = cva({
  base: { display: "flex", gap: "3", p: "4", borderWidth: "1px", borderRadius: "2xl", bg: "white" },
  variants: {
    size: { sm: variants.size.sm.root, md: variants.size.md.root, lg: variants.size.lg.root },
    tone: { neutral: variants.tone.neutral.root, brand: variants.tone.brand.root },
  },
  defaultVariants: defaults,
});

const titleCva = cva({
  base: { fontWeight: "700" },
  variants: {
    size: { sm: variants.size.sm.title, md: variants.size.md.title, lg: variants.size.lg.title },
    tone: { neutral: {}, brand: variants.tone.brand.title },
  },
  defaultVariants: defaults,
});

const iconCva = cva({
  base: { w: "6", h: "6", flexShrink: 0 },
  variants: { size: { sm: {}, md: {}, lg: {} }, tone: { neutral: {}, brand: {} } },
  defaultVariants: defaults,
});

const bodyCva = cva({
  base: { color: "gray.11" },
  variants: {
    size: { sm: variants.size.sm.body, md: variants.size.md.body, lg: variants.size.lg.body },
    tone: { neutral: {}, brand: {} },
  },
  defaultVariants: defaults,
});

// ---- 型とコンポーネント --------------------------------------
export type CardVariants = NonNullable<Parameters<typeof rootCva>[0]>;
export type CardProps = CardVariants & {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export function CardCva({ title, icon, children, className, size, tone }: CardProps) {
  const root = rootCva({ size, tone });
  const titleCls = titleCva({ size, tone });
  const iconCls = iconCva({ size, tone });
  const bodyCls = bodyCva({ size, tone });

  return (
    <div className={cx(root, className)}>
      {icon && <div className={iconCls}>{icon}</div>}
      <div>
        <div className={titleCls}>{title}</div>
        <div className={bodyCls}>{children}</div>
      </div>
    </div>
  );
}
