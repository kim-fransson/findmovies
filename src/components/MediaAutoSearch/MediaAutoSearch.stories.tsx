import { MediaAutoSearch } from "./MediaAutoSearch";
import type { Meta, StoryObj } from "@storybook/react";
import {
  searchMultiHandler,
  genreMediaListHandler,
} from "../../../mocks/handlers";

const meta: Meta<typeof MediaAutoSearch> = {
  component: MediaAutoSearch,
  parameters: {
    msw: {
      handlers: [searchMultiHandler, genreMediaListHandler],
    },
  },
  args: {},
};
export default meta;

type Story = StoryObj<typeof MediaAutoSearch>;

export const Playground: Story = {
  args: {},
};
