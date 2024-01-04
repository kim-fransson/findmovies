import { genreMediaListHandler } from "../../../mocks/handlers";
import { MovieDetails } from "./MovieDetails";
import type { Meta, StoryObj } from "@storybook/react";
import { movieHandler } from "../../../mocks/handlers/movieHandler";

const meta: Meta<typeof MovieDetails> = {
  component: MovieDetails,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [genreMediaListHandler, movieHandler],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof MovieDetails>;

export const Playground: Story = {
  args: {},
};
