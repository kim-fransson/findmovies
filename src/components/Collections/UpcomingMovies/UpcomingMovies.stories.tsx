import { upcomingMoviesHandler } from "../../../../mocks/handlers";
import { UpcomingMovies } from "./UpcomingMovies";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UpcomingMovies> = {
  component: UpcomingMovies,
  parameters: {
    msw: {
      handlers: [upcomingMoviesHandler],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof UpcomingMovies>;

export const Playground: Story = {
  args: {},
};
