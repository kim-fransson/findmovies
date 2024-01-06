import { searchMultiHandler } from "../../../mocks/handlers";
import { ErrorPage } from "./ErrorPage";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

const meta: Meta<typeof ErrorPage> = {
  component: ErrorPage,
  parameters: {
    layout: "fullscreen",
    msw: {
      handlers: [searchMultiHandler],
    },
  },
  decorators: [withRouter],
  args: {},
};
export default meta;

type Story = StoryObj<typeof ErrorPage>;

export const Playground: Story = {
  args: {},
};
