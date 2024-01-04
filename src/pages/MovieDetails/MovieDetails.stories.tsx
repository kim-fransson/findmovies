import { genreMediaListHandler } from "../../../mocks/handlers";
import { MediaDetails } from "./MovieDetails";
import type { Meta, StoryObj } from "@storybook/react";
import { movieHandler } from "../../../mocks/handlers/movieHandler";

const meta: Meta<typeof MediaDetails> = {
  component: MediaDetails,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [genreMediaListHandler, movieHandler],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof MediaDetails>;

export const Playground: Story = {
  args: {},
};
