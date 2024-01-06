import { genreMediaListHandler } from "../../../mocks/handlers";
import { TVDetails } from "./TVDetails";
import type { Meta, StoryObj } from "@storybook/react";
import { tvHandler } from "../../../mocks/handlers";

const meta: Meta<typeof TVDetails> = {
  component: TVDetails,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [genreMediaListHandler, tvHandler],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof TVDetails>;

export const Playground: Story = {
  args: {},
};
