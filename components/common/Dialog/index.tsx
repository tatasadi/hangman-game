"use client"
import MenuContainer from "../MenuContainer"
import { Button } from "../Button"
import { GameState, useGame } from "../../../app/context/game-context"
import { useRouter } from "next/navigation"
import Heading from "../Typography/Heading"
import Paragraph from "../Typography/Paragraph"

const Dialog = () => {
  const router = useRouter()
  const { state, setState, resetGame, word } = useGame()

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
    resetGame()
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
    <div className="absolute inset-0 flex items-center justify-center">
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
        {state === GameState.Lost && <Paragraph>Answer: {word}</Paragraph>}
        <Button variant="primary" onClick={handleContinue} tabIndex={1}>
          Continue
        </Button>
        <Button variant="primary" onClick={handleNewCategory} tabIndex={1}>
          New Category
        </Button>
        <Button
          className=""
          variant="secondary"
          onClick={handleQuit}
          tabIndex={1}
        >
          Quit Game
        </Button>
      </MenuContainer>
    </div>
  )
}

export default Dialog
