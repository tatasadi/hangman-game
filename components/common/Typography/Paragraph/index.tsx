import { cn } from "../../../../lib/utils"
import React, { ReactNode } from "react"

interface ParagraphProps {
  className?: string
  children: ReactNode
  size?: "s" | "m" | "m-bold"
}

const Paragraph: React.FC<ParagraphProps> = ({
  className,
  children,
  size = "m",
}) => {
  let sizeClasses =
    size === "s"
      ? "text-sm"
      : size === "m-bold"
        ? "font-bold"
        : "tracking-[0.05rem] sm:text-xl sm:leading-6 sm:tracking-[0.0625rem] lg:text-[1.625rem] lg:tracking-[0.08125rem] lg:leading-[1.95rem]"

  return (
    <p className={cn("leading-6 text-white", sizeClasses, className)}>
      {children}
    </p>
  )
}

export default Paragraph
