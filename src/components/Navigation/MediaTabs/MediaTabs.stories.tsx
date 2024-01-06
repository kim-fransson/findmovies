import {
  trendingMovieHandler,
  trendingTVHandler,
} from "../../../../mocks/handlers";
import { MediaTabs } from "./MediaTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MediaTabs> = {
  component: MediaTabs,
  parameters: {
    msw: {
      handlers: [trendingMovieHandler, trendingTVHandler],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof MediaTabs>;

export const Playground: Story = {
  args: {},
};
