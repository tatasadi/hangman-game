import type { Meta, StoryObj } from "@storybook/react"
import Paragraph from "."

export default {
  title: "Components/Typography/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
    design: {
      type: "figspec",
      url: "https://www.figma.com/file/IlNiJkHwFcQ1Oy6jCmS44H/single-page-developer-portfolio?type=design&node-id=0-910&mode=dev",
    },
  },
} as Meta

type Story = StoryObj<typeof Paragraph>

export const Default: Story = {
  args: {
    children: "This is a paragraph.",
  },
}
