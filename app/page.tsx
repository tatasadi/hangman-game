import MenuContainer from "../components/common/MenuContainer"
import { Button } from "../components/common/Button"
import iconPlay from "../public/icon-play.svg"
import Image from "next/image"
import logo from "../public/logo.svg"
import Link from "next/link"

export default function Home() {
  return (
    <main className="relative flex w-full max-w-[90rem] flex-col items-center justify-center px-6 pt-[12.5rem] sm:pt-[19.56rem]">
      <MenuContainer className="relative w-full max-w-[37rem] p-12 sm:px-40">
        <Image src={logo} alt="logo" className="absolute -top-[6.88rem]" />
        <Button className="mt-[8rem]" variant="play">
          <Image src={iconPlay} alt="Play" />
        </Button>
        <Button className="mt-[3.56rem]" variant="primary" asChild>
          <Link href="/how-to-play">How to play</Link>
        </Button>
      </MenuContainer>
    </main>
  )
}
