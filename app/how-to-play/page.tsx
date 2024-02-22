import { Button } from "../../components/common/Button"
import HowToPlayCard from "../../components/common/HowToPlayCard"
import Heading from "../../components/common/Typography/Heading"
import iconBack from "../../public/icon-back.svg"
import Image from "next/image"
import Link from "next/link"

export default function HowToPlay() {
  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute bottom-0 top-0 z-0 w-full bg-[linear-gradient(180deg,#1A043A_0%,#151278_70.31%,#2B1677_100%)] opacity-75"></div>
      <div className="relative z-10 px-6 py-10 lg:px-10 lg:py-[3.81rem]">
        <div className="flex w-full items-center justify-between sm:grid sm:grid-cols-[6rem_1fr_6rem] sm:place-items-center">
          <Button
            variant="secondary"
            className="aspect-square h-14 w-14 rounded-full p-0 sm:h-16 sm:w-16"
            asChild
            aria-label="back to home"
            tabIndex={0}
          >
            <Link href="/">
              <Image src={iconBack} alt="Back" className="h-6 w-6" />
            </Link>
          </Button>
          <Heading level={1} size="xl" hasStroke={true} className="">
            How to Play
          </Heading>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-3">
          <HowToPlayCard
            number="01"
            title="Choose a category"
            description="First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
          />
          <HowToPlayCard
            number="02"
            title="Guess letters"
            description="Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses."
          />
          <HowToPlayCard
            number="03"
            title="Win or lose"
            description="You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."
          />
        </div>
      </div>
    </main>
  )
}
