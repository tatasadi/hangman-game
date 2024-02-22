import type { Meta, StoryObj } from "@storybook/react"
import Paragraph from "."

export default {
  title: "Components/Typography/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
} as Meta

type Story = StoryObj<typeof Paragraph>

export const Default: Story = {
  args: {
    children: "This is a paragraph.",
  },
}
