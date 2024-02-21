import { cn } from "../../../../lib/utils"
import React from "react"

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  size: "s" | "m" | "l" | "xl"
  hasStroke?: boolean
  className?: string
  children: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({
  level,
  size,
  hasStroke = false,
  className = "",
  children,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  let sizeClasses = ""

  switch (size) {
    case "s":
      sizeClasses = "text-[2rem] leading-[2.4rem] tracking-[0.1rem]"
      break
    case "m":
      sizeClasses =
        "text-2xl tracking-[0.075rem] leading-[1.8rem] sm:text-[2.5rem] sm:tracking-[0.125rem] sm:leading-[3rem] lg:text-[3rem] lg:tracking-[0.15rem] lg:leading-[3.6rem]"
      break
    case "l":
      sizeClasses =
        "text-[2.5rem] -tracking-[0.0125rem] leading-[3rem] sm:text-[3rem] sm:leading-[3.6rem] sm:tracking-[0.15rem] lg:tracking-0 lg:text-[5.5rem] lg:leading-[6.6rem]"
      break
    case "xl":
      sizeClasses =
        "text-[3rem] -tracking-[0.15rem] leading-[3.6rem] sm:text-[6.5rem] sm:-tracking-[0.0325rem] sm:leading-[7.8rem] lg:text-[8.5rem] lg:-tracking-[0.0425rem] lg:leading-[10.2rem]"
      break
  }

  return (
    <HeadingTag
      className={cn(
        hasStroke ? "heading-stroke" : "",
        "font-semibold leading-[1.1] text-white",
        sizeClasses,
        className,
      )}
    >
      {children}
    </HeadingTag>
  )
}

export default Heading
