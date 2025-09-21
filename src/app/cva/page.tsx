import { CardCva } from "@/src/components/cva/card.cva";
import { AlertCva } from "@/src/components/cva/alert.cva";
import { BadgeCva } from "@/src/components/cva/badge.cva";
import { ButtonCva } from "@/src/components/cva/button.cva";
import { AvatarCva } from "@/src/components/cva/avatar.cva";
import { TagCva } from "@/src/components/cva/tag.cva";
import { InputCva } from "@/src/components/cva/input.cva";
import { CheckboxCva } from "@/src/components/cva/checkbox.cva";
import { SwitchCva } from "@/src/components/cva/switch.cva";
import { ProgressCva } from "@/src/components/cva/progress.cva";

export default function Page() {
  return (
    <main style={{ padding: 24, display: "grid", gap: 16 }}>
      <section>
        <h2>Card</h2>
        <div style={{ display: "grid", gap: 8 }}>
          <CardCva size="sm" tone="neutral" title="Card sm" icon={<div style={{ width: 24, height: 24, background: "#9ca3af", borderRadius: 8 }} />}>Body</CardCva>
          <CardCva size="md" tone="brand" title="Card md" icon={<div style={{ width: 24, height: 24, background: "#3b82f6", borderRadius: 8 }} />}>Body</CardCva>
        </div>
      </section>

      <section>
        <h2>Alert</h2>
        <div style={{ display: "grid", gap: 8 }}>
          <AlertCva status="info" title="Info" description="Information alert" />
          <AlertCva status="success" title="Success" description="Operation succeeded" />
        </div>
      </section>

      <section>
        <h2>Badge</h2>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <BadgeCva tone="neutral">Neutral</BadgeCva>
          <BadgeCva tone="brand">Brand</BadgeCva>
          <BadgeCva tone="success">Success</BadgeCva>
        </div>
      </section>

      <section>
        <h2>Button</h2>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <ButtonCva tone="neutral">Neutral</ButtonCva>
          <ButtonCva tone="brand">Brand</ButtonCva>
          <ButtonCva tone="ghost">Ghost</ButtonCva>
        </div>
      </section>

      <section>
        <h2>Avatar</h2>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <AvatarCva size="sm" name="Ada Lovelace" />
          <AvatarCva size="md" name="Alan Turing" />
          <AvatarCva size="lg" name="Grace Hopper" />
        </div>
      </section>

      <section>
        <h2>Tag</h2>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <TagCva tone="neutral">Neutral</TagCva>
          <TagCva tone="brand">Brand</TagCva>
          <TagCva tone="success">Success</TagCva>
        </div>
      </section>

      <section>
        <h2>Input</h2>
        <div style={{ display: "grid", gap: 8 }}>
          <InputCva placeholder="Neutral input" />
          <InputCva tone="brand" placeholder="Brand input" />
          <InputCva tone="error" placeholder="Error input" />
        </div>
      </section>

      <section>
        <h2>Checkbox</h2>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <CheckboxCva checked={false} />
          <CheckboxCva checked />
        </div>
      </section>

      <section>
        <h2>Switch</h2>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <SwitchCva checked={false} />
          <SwitchCva checked />
        </div>
      </section>

      <section>
        <h2>Progress</h2>
        <div style={{ display: "grid", gap: 8 }}>
          <ProgressCva value={25} />
          <ProgressCva tone="neutral" value={66} />
        </div>
      </section>
    </main>
  );
}
