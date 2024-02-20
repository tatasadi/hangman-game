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
    size === "s" ? "text-sm" : size === "m-bold" ? "font-bold" : ""

  return (
    <p
      className={cn(
        "text-dark-electric-blue leading-6",
        sizeClasses,
        className,
      )}
    >
      {children}
    </p>
  )
}

export default Paragraph
