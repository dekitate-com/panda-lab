import { CardSva } from "@/src/components/sva/card.sva";
import { AlertSva } from "@/src/components/sva/alert.sva";
import { BadgeSva } from "@/src/components/sva/badge.sva";
import { ButtonSva } from "@/src/components/sva/button.sva";
import { AvatarSva } from "@/src/components/sva/avatar.sva";
import { TagSva } from "@/src/components/sva/tag.sva";
import { InputSva } from "@/src/components/sva/input.sva";
import { CheckboxSva } from "@/src/components/sva/checkbox.sva";
import { SwitchSva } from "@/src/components/sva/switch.sva";
import { ProgressSva } from "@/src/components/sva/progress.sva";

export default function Page() {
  return (
    <main style={{ padding: 24, display: "grid", gap: 16 }}>
      <section>
        <h2>Card</h2>
        <div style={{ display: "grid", gap: 8 }}>
          <CardSva size="sm" tone="neutral" title="Card sm" icon={<div style={{ width: 24, height: 24, background: "#9ca3af", borderRadius: 8 }} />}>Body</CardSva>
          <CardSva size="md" tone="brand" title="Card md" icon={<div style={{ width: 24, height: 24, background: "#3b82f6", borderRadius: 8 }} />}>Body</CardSva>
        </div>
      </section>

      <section>
        <h2>Alert</h2>
        <div style={{ display: "grid", gap: 8 }}>
          <AlertSva status="info" title="Info" description="Information alert" />
          <AlertSva status="success" title="Success" description="Operation succeeded" />
        </div>
      </section>

      <section>
        <h2>Badge</h2>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <BadgeSva tone="neutral">Neutral</BadgeSva>
          <BadgeSva tone="brand">Brand</BadgeSva>
          <BadgeSva tone="success">Success</BadgeSva>
        </div>
      </section>

      <section>
        <h2>Button</h2>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <ButtonSva tone="neutral">Neutral</ButtonSva>
          <ButtonSva tone="brand">Brand</ButtonSva>
          <ButtonSva tone="ghost">Ghost</ButtonSva>
        </div>
      </section>

      <section>
        <h2>Avatar</h2>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <AvatarSva size="sm" name="Ada Lovelace" />
          <AvatarSva size="md" name="Alan Turing" />
          <AvatarSva size="lg" name="Grace Hopper" />
        </div>
      </section>

      <section>
        <h2>Tag</h2>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <TagSva tone="neutral">Neutral</TagSva>
          <TagSva tone="brand">Brand</TagSva>
          <TagSva tone="success">Success</TagSva>
        </div>
      </section>

      <section>
        <h2>Input</h2>
        <div style={{ display: "grid", gap: 8 }}>
          <InputSva placeholder="Neutral input" />
          <InputSva tone="brand" placeholder="Brand input" />
          <InputSva tone="error" placeholder="Error input" />
        </div>
      </section>

      <section>
        <h2>Checkbox</h2>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <CheckboxSva checked={false} />
          <CheckboxSva checked />
        </div>
      </section>

      <section>
        <h2>Switch</h2>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <SwitchSva checked={false} />
          <SwitchSva checked />
        </div>
      </section>

      <section>
        <h2>Progress</h2>
        <div style={{ display: "grid", gap: 8 }}>
          <ProgressSva value={25} />
          <ProgressSva tone="neutral" value={66} />
        </div>
      </section>
    </main>
  );
}
