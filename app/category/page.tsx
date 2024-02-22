import { Button } from "../../components/common/Button"
import Heading from "../../components/common/Typography/Heading"
import iconBack from "../../public/icon-back.svg"
import Image from "next/image"
import Link from "next/link"
import data from "../data.json"

// get keys of data.categories
// const keys = Object.keys(data.categories)

export default function Category() {
  const categories = Object.keys(data.categories)
  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute bottom-0 top-0 z-0 w-full bg-[linear-gradient(180deg,#1A043A_0%,#151278_70.31%,#2B1677_100%)] opacity-75"></div>
      <div className="relative z-10 px-6 py-10 lg:px-10 lg:py-[3.81rem]">
        <div className="flex w-full items-center justify-between sm:grid sm:grid-cols-[6rem_1fr_6rem] sm:place-items-center">
          <Button
            variant="secondary"
            className="aspect-square h-14 w-14 rounded-full p-0 sm:h-16 sm:w-16"
            asChild
          >
            <Link href="/">
              <Image src={iconBack} alt="Back" className="h-6 w-6" />
            </Link>
          </Button>
          <Heading level={1} size="xl" hasStroke={true} className="">
            Pick a Category
          </Heading>
        </div>
        <div className="mt-[6.25rem] grid grid-cols-1 gap-4 sm:mt-[7.12rem] sm:grid-cols-2 sm:gap-8 lg:mt-[9.69rem] lg:grid-cols-3 lg:gap-y-[3.12rem]">
          {categories.map((category) => (
            <Button key={category} variant="category">
              {category}
            </Button>
          ))}
        </div>
      </div>
    </main>
  )
}
