import { MediaTabs } from "./MediaTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MediaTabs> = {
  component: MediaTabs,
  parameters: {
    msw: {
      handlers: [],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof MediaTabs>;

export const Playground: Story = {
  args: {},
};
