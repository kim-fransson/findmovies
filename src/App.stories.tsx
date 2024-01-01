import { genreMovieListHandler, searchMovieHandler } from "../mocks/handlers";
import App from "./App";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof App> = {
  component: App,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [searchMovieHandler, genreMovieListHandler],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof App>;

export const Playground: Story = {
  args: {},
};
