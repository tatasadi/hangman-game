import { Button } from "../components/common/Button"
import iconPlay from "../public/icon-play.svg"
import Image from "next/image"

export default function Home() {
  return (
    <main className="relative flex max-w-[90rem] flex-col items-center justify-between">
      <Button variant="play">
        <Image src={iconPlay} alt="Play" />
      </Button>
    </main>
  )
}
