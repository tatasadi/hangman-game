import type { Meta, StoryObj } from "@storybook/react"
import HowToPlayCard from "."

const meta = {
  title: "Components/HowToPlayCard",
  component: HowToPlayCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HowToPlayCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    number: "01",
    title: "Choose a category",
    description:
      "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
}
