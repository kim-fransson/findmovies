import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import {
  genreMediaListHandler,
  searchMultiHandler,
  tvHandler,
} from "../../../mocks/handlers";
import { TVDetails } from "./TVDetails";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TVDetails> = {
  component: TVDetails,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [genreMediaListHandler, tvHandler, searchMultiHandler],
    },
    reactRouter: reactRouterParameters({
      location: {
        pathParams: { id: "121" },
      },
      routing: { path: "/series/:id" },
    }),
  },
  decorators: [withRouter],
  args: {},
};
export default meta;

type Story = StoryObj<typeof TVDetails>;

export const Playground: Story = {
  args: {},
};
