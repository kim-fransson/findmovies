import {
  genreMediaListHandler,
  searchMultiHandler,
  trendingMovieHandler,
  trendingTVHandler,
  upcomingMoviesHandler,
} from "../mocks/handlers";
import App from "./App";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof App> = {
  component: App,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [
        searchMultiHandler,
        genreMediaListHandler,
        trendingMovieHandler,
        trendingTVHandler,
        upcomingMoviesHandler,
      ],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof App>;

export const Playground: Story = {
  args: {},
};
