import { MovieSearch } from "./MovieSearch";
import type { Meta, StoryObj } from "@storybook/react";
import {
  searchMovieHandler,
  genreMovieListHandler,
} from "../../../mocks/handlers";

const meta: Meta<typeof MovieSearch> = {
  component: MovieSearch,
  parameters: {
    msw: {
      handlers: [searchMovieHandler, genreMovieListHandler],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof MovieSearch>;

export const Playground: Story = {
  args: {},
};
