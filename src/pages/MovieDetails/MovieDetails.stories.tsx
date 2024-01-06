import {
  genreMediaListHandler,
  movieHandler,
  searchMultiHandler,
} from "../../../mocks/handlers";
import { MovieDetails } from "./MovieDetails";
import type { Meta, StoryObj } from "@storybook/react";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";

const meta: Meta<typeof MovieDetails> = {
  component: MovieDetails,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [genreMediaListHandler, movieHandler, searchMultiHandler],
    },
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: "121" },
      },
      routing: { path: "/movies/:id" },
    }),
  },
  decorators: [withRouter],
  args: {},
};
export default meta;

type Story = StoryObj<typeof MovieDetails>;

export const Playground: Story = {
  args: {},
};
