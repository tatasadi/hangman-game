import { cn } from "../../../../lib/utils"
import React from "react"

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  size: "s" | "m" | "l" | "xl"
  className?: string
  children: React.ReactNode
}

const Heading: React.FC<HeadingProps> = ({
  level,
  size,
  className,
  children,
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  const sizeClasses =
    size === "s"
      ? "text-xl -tracking-[0.0625]"
      : size === "m"
        ? "text-2xl -tracking-[0.075rem]"
        : size === "l"
          ? "text-[2rem] -tracking-[0.1rem] lg:text-5xl lg:-tracking-[0.15rem]"
          : "text-[3rem] -tracking-[0.15rem] lg:text-[4rem] lg:-tracking-[0.2rem]"

  return (
    <HeadingTag
      className={cn("font-semibold leading-[1.1]", sizeClasses, className)}
    >
      {children}
    </HeadingTag>
  )
}

export default Heading
