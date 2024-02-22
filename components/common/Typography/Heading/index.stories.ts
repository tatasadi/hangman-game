import type { Meta, StoryObj } from "@storybook/react"
import Heading from "."

export default {
  title: "Components/Typography/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
} as Meta

type Story = StoryObj<typeof Heading>

export const HeadingXL: Story = {
  args: {
    children: "Heading XL",
    level: 1,
    size: "xl",
  },
}

export const HeadingL: Story = {
  args: {
    children: "Heading L",
    level: 2,
    size: "l",
  },
}

export const HeadingM: Story = {
  args: {
    children: "Heading M",
    level: 3,
    size: "m",
  },
}

export const HeadingS: Story = {
  args: {
    children: "Heading S",
    level: 3,
    size: "s",
  },
}

export const HeadingXlWithStroke: Story = {
  args: {
    children: "Heading XL with stroke",
    level: 1,
    size: "xl",
    hasStroke: true,
  },
}
