import { Tabs } from "flowbite-react";
import Expense from "./Expense";
import Income from "./Income";

export default function Tab() {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline">
      <Tabs.Item active={true} title="Dépenses">
        <Expense />
      </Tabs.Item>
      <Tabs.Item title="Revenus">
        <Income />
      </Tabs.Item>
    </Tabs.Group>
  );
}
