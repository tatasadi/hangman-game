"use client"
import { Button } from "../../../components/common/Button"
import Heading from "../../../components/common/Typography/Heading"
import iconMenu from "../../../public/icon-menu.svg"
import Image from "next/image"
import { useGame, GameState } from "../../context/game-context"
import Dialog from "../../../components/common/Dialog"

export default function Play() {
  const { category, setState, word } = useGame()

  const hanldeMenuCLick = () => {
    setState(GameState.Paused)
  }

  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute bottom-0 top-0 z-0 w-full bg-[linear-gradient(180deg,#1A043A_0%,#151278_70.31%,#2B1677_100%)] opacity-75"></div>
      <div className="relative z-10 px-6 py-10 lg:px-10 lg:py-[3.81rem]">
        <div className="flex w-full items-center gap-4 sm:gap-8 lg:gap-[3.56rem]">
          <Button
            variant="secondary"
            className="aspect-square h-14 w-14 rounded-full p-0 sm:h-16 sm:w-16"
            onClick={hanldeMenuCLick}
          >
            <Image src={iconMenu} alt="Back" className="h-6 w-6" />
          </Button>
          <Heading level={1} size="l" className="font-medium">
            {category}
          </Heading>
        </div>
        <div className="mt-[6.25rem] sm:mt-[7.12rem] lg:mt-[9.69rem]">
          {word}
        </div>
      </div>
      <Dialog />
    </main>
  )
}
