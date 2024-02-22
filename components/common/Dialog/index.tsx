"use client"
import MenuContainer from "../MenuContainer"
import { Button } from "../Button"
import Link from "next/link"
import { GameState, useGame } from "../../../app/context/game-context"
import { useRouter } from "next/navigation"
import Heading from "../Typography/Heading"

const Dialog = () => {
  const router = useRouter()
  const { state, setState } = useGame()
  const title =
    state === GameState.Paused
      ? "Paused"
      : state === GameState.Won
        ? "You Won!"
        : "You Lost!"

  function handleContinue() {
    if (state === GameState.Won || state === GameState.Lost) {
      setState(GameState.Idle)
      router.push("/game/category")
    } else {
      setState(GameState.Playing)
    }
  }

  function handleNewCategory() {
    setState(GameState.Idle)
    router.push("/game/category")
  }

  function handleQuit() {
    setState(GameState.Idle)
    router.push("/")
  }

  if (
    state !== GameState.Won &&
    state !== GameState.Lost &&
    state !== GameState.Paused
  ) {
    return null
  }

  return (
    <div className="w-full p-6">
      <div className="absolute bottom-0 top-0 z-10 w-full bg-[linear-gradient(180deg,#1A043A_0%,#151278_70.31%,#2B1677_100%)] opacity-75"></div>
      <MenuContainer className="relative z-20 mx-auto flex w-full max-w-[37rem] flex-col items-center gap-[2.12rem] p-12 pt-[6.5rem] sm:px-40 sm:pt-[7.5rem]">
        <Heading
          level={2}
          size="xl"
          hasStroke={true}
          className="absolute -top-[4.5rem] text-[5.875rem] font-bold lg:-top-[5.5rem]"
        >
          {title}
        </Heading>
        <Button variant="primary" onClick={handleContinue}>
          Continue
        </Button>
        <Button variant="primary" onClick={handleNewCategory}>
          New Category
        </Button>
        <Button className="" variant="secondary" onClick={handleQuit}>
          Quit Game
        </Button>
      </MenuContainer>
    </div>
  )
}

export default Dialog