import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "."
import iconPlay from "../../../public/icon-play.svg"
import Image from "next/image"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "How to play",
  },
}

export const Secondary: Story = {
  args: {
    children: "Quick Game",
    variant: "secondary",
  },
}

export const PlayableLetter: Story = {
  args: {
    children: "E",
    variant: "playable-letter",
  },
}

export const KeyboardLetter: Story = {
  args: {
    children: "A",
    variant: "keyboard-letter",
  },
}

export const Category: Story = {
  args: {
    children: "Movies",
    variant: "category",
  },
}

export const Play: Story = {
  args: {
    children: <Image src={iconPlay} alt="Play" />,
    variant: "play",
  },
}
