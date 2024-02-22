"use client"
import { Button } from "../../../components/common/Button"
import Heading from "../../../components/common/Typography/Heading"
import iconMenu from "../../../public/icon-menu.svg"
import Image from "next/image"
import { useGame, GameState } from "../../context/game-context"
import Dialog from "../../../components/common/Dialog"
import { useEffect, useState } from "react"
import Lives from "../../../components/common/Lives"

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("")

export default function Play() {
  const { category, setState, word } = useGame()
  const [displayWord, setDisplayWord] = useState("")
  const [guesses, setGuesses] = useState<string[]>([])
  const [lives, setLives] = useState(8)

  useEffect(() => {
    const initialDisplayWord = word
      .toLowerCase()
      .split("")
      .map((char) => (char === " " ? " " : "_"))
      .join("")
    setDisplayWord(initialDisplayWord)
  }, [word])

  const hanldeMenuCLick = () => {
    setState(GameState.Paused)
  }

  const handleGuess = (letter: string) => {
    if (word.toLowerCase().includes(letter)) {
      // Update the display word with the correctly guessed letter
      const newDisplayWord = word
        .toLowerCase()
        .split("")
        .map((char, index) => {
          return guesses.includes(char) || char === letter
            ? char
            : char === " "
              ? " "
              : "_"
        })
        .join("")
      setDisplayWord(newDisplayWord)

      // Check for win
      if (!newDisplayWord.includes("_")) {
        setState(GameState.Won)
      }
    } else {
      // Decrease lives for incorrect guess
      setLives(lives - 1)

      // Check for loss
      if (lives <= 1) {
        setState(GameState.Lost)
      }
    }
    setGuesses([...guesses, letter])
  }

  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute bottom-0 top-0 z-0 w-full bg-[linear-gradient(180deg,#1A043A_0%,#151278_70.31%,#2B1677_100%)] opacity-75"></div>
      <div className="relative z-10 px-6 py-10 lg:px-10 lg:py-[3.81rem]">
        <div className="flex w-full items-center gap-4 sm:gap-8 lg:gap-[3.56rem] lg:px-[7rem]">
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
          <Lives lives={lives} className="ml-auto" />
        </div>
        <div className="mx-auto mt-[4.88rem] flex w-full flex-wrap justify-center gap-x-2 gap-y-6 sm:mt-[7.12rem] sm:gap-x-4 lg:mt-[5.5rem] lg:gap-x-6 lg:px-[7.88rem]">
          {displayWord.split("").map((letter, index) =>
            letter === " " ? (
              <div key={index} className="h-[4.5rem] w-[4.125rem]"></div>
            ) : (
              <Button
                variant="playable-letter"
                key={index}
                disabled={letter === "_"}
              >
                {letter === "_" ? (
                  <span className="min-h-[3rem] min-w-[1rem] sm:min-h-[7rem] sm:min-w-[1.75rem] lg:min-h-[8rem]">
                    {" "}
                  </span>
                ) : (
                  letter.toUpperCase()
                )}
              </Button>
            ),
          )}
        </div>
        <div className="mt-[7.5rem] grid grid-cols-9 gap-x-2 gap-y-6 sm:gap-x-4 lg:gap-x-6 lg:px-[7.88rem]">
          {ALPHABET.map((letter) => (
            <Button
              variant="keyboard-letter"
              key={letter}
              onClick={() => handleGuess(letter)}
              disabled={guesses.includes(letter)}
            >
              {letter.toUpperCase()}
            </Button>
          ))}
        </div>
      </div>
      <Dialog />
    </main>
  )
}
