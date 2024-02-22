"use client"
import MenuContainer from "../components/common/MenuContainer"
import { Button } from "../components/common/Button"
import iconPlay from "../public/icon-play.svg"
import Image from "next/image"
import logo from "../public/logo.svg"
import Link from "next/link"
import { useGame } from "./context/game-context"

export default function Home() {
  const { resetGame } = useGame()

  resetGame()

  return (
    <main className="relative flex w-full max-w-[90rem] flex-col items-center justify-center px-6 pt-[12.5rem] sm:pt-[19.56rem]">
      <MenuContainer className="relative w-full max-w-[37rem] p-12 sm:px-40">
        <Image src={logo} alt="logo" className="absolute -top-[6.88rem]" />
        <Button
          className="mt-[8rem]"
          variant="play"
          asChild
          aria-label="play the game"
          tabIndex={0}
        >
          <Link href="/game/category">
            <Image src={iconPlay} alt="Play" />
          </Link>
        </Button>
        <Button
          className="mt-[3.56rem]"
          variant="primary"
          asChild
          aria-label="how to play"
          tabIndex={0}
        >
          <Link href="/how-to-play">How to play</Link>
        </Button>
      </MenuContainer>
    </main>
  )
}
