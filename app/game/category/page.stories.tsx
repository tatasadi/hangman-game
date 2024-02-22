import type { Meta, StoryObj } from "@storybook/react"
import Category from "./page"

const meta = {
  title: "Pages/Category",
  component: Category,
  parameters: {},
} satisfies Meta<typeof Category>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
