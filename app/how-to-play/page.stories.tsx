import type { Meta, StoryObj } from "@storybook/react"
import HowToPlay from "./page"

const meta = {
  title: "Pages/HowToPlay",
  component: HowToPlay,
  parameters: {},
} satisfies Meta<typeof HowToPlay>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
