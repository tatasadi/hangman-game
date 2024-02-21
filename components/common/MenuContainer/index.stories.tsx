import type { Meta, StoryObj } from "@storybook/react"
import MenuContainer from "."
import { Button } from "../Button"
import Image from "next/image"
import iconPlay from "../../../public/icon-play.svg"
import logo from "../../../public/logo.svg"

const meta = {
  title: "Components/MenuContainer",
  component: MenuContainer,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MenuContainer>

export default meta

type Story = StoryObj<typeof meta>

export const HomePage: Story = {
  args: {
    children: (
      <>
        <Image src={logo} alt="logo" className="absolute -top-[6.88rem]" />
        <Button className="mt-[8rem]" variant="play">
          <Image src={iconPlay} alt="Play" />
        </Button>
        <Button className="mt-[3.56rem]" variant="primary">
          How to play
        </Button>
      </>
    ),
    className: "relative w-full max-w-[37rem] p-12 sm:px-40",
  },
}
