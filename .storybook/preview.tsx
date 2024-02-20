import type { Preview } from "@storybook/react"
import "../app/globals.css"
import React from "react"

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "hsl(250 68% 27%)" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main className="font-mouse-memoirs">
        <Story />
      </main>
    ),
  ],
}

export default preview
