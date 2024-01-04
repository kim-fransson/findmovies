import { trendingTVHandler } from "../../../../mocks/handlers";
import { TrendingSeries } from "./TrendingSeries";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TrendingSeries> = {
  component: TrendingSeries,
  parameters: {
    msw: {
      handlers: [trendingTVHandler],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof TrendingSeries>;

export const Playground: Story = {
  args: {},
};
