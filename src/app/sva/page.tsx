import { CardSva } from "@/src/components/card.sva";

function items1000() {
  return Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    size: (i % 3 === 0 ? "sm" : i % 3 === 1 ? "md" : "lg") as "sm" | "md" | "lg",
    tone: (i % 2 ? "brand" : "neutral") as "brand" | "neutral",
    title: `Card ${i}`,
    iconColor: i % 2 ? "#3b82f6" : "#9ca3af",
  }));
}

export default function Page() {
  const items = items1000();
  return (
    <main style={{ padding: 24, display: "grid", gap: 8 }}>
      {items.map(({ id, size, tone, title, iconColor }) => (
        <CardSva
          key={id}
          size={size}
          tone={tone}
          title={title}
          icon={<div style={{ width: 24, height: 24, background: iconColor, borderRadius: 8 }} />}
        >
          This is a body text {id}
        </CardSva>
      ))}
    </main>
  );
}
