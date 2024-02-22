import type { Meta, StoryObj } from "@storybook/react"
import Lives from "."

const meta = {
  title: "Components/Lives",
  component: Lives,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Lives>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    lives: 5,
  },
}
