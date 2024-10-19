import type { Preview } from "@storybook/react";

import "../src/styles/index.scss";
import { decorators } from "./decorators";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)


const preview: Preview = {
  decorators,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    info: {
      inline: true,
      header: false,
    }
  },
};

export default preview;
