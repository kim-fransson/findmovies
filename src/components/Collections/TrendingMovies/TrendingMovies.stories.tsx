import { trendingMovieHandler } from "../../../../mocks/handlers";
import { TrendingMovies } from "./TrendingMovies";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TrendingMovies> = {
  component: TrendingMovies,
  parameters: {
    msw: {
      handlers: [trendingMovieHandler],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof TrendingMovies>;

export const Playground: Story = {
  args: {},
};
