import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import "../src/index.css";

// Initialize MSW
initialize({
  onUnhandledRequest: "bypass",
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
